import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu, X, ArrowRight } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import productData from '../data/products.json';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const suggestions = searchQuery.trim().length > 0
    ? productData.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setShowSuggestions(false);
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-primary text-white border-b border-white/10 transition-all duration-300">
      <div className="max-w-container-max mx-auto px-gutter py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img src="/logo-transparent.png" alt="V Packs Logo" className="h-12 w-auto transition-transform group-hover:scale-105" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative py-2 text-sm font-semibold transition-colors hover:text-white ${
                location.pathname === link.path ? 'text-white' : 'text-white/70'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div ref={searchRef} className="relative hidden lg:block">
            <form onSubmit={handleSearch} className="flex items-center bg-white/10 px-4 py-2 rounded-full border border-white/20 focus-within:border-white/60 focus-within:bg-white/20 transition-all">
              <Search className="w-4 h-4 text-white/60 mr-2" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                className="bg-transparent border-none focus:ring-0 text-sm text-white placeholder:text-white/50 w-32 focus:w-48 transition-all"
              />
              {searchQuery && (
                <button type="button" onClick={() => setSearchQuery('')} className="ml-2 text-white/40 hover:text-white">
                  <X className="w-3 h-3" />
                </button>
              )}
            </form>

            <AnimatePresence>
              {showSuggestions && suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-outline-variant/20 overflow-hidden py-2"
                >
                  <div className="px-4 py-2 border-b border-outline-variant/10">
                    <p className="label-caps !text-[9px] text-on-surface-variant/50">Product Suggestions</p>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {suggestions.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => {
                          navigate(`/products?q=${encodeURIComponent(product.name)}`);
                          setSearchQuery('');
                          setShowSuggestions(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-surface-container flex items-center gap-3 group transition-colors"
                      >
                        <div className="w-10 h-10 bg-surface-bright rounded-lg border border-outline-variant/10 p-1 flex-shrink-0">
                          <img src={product.image} alt="" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-grow">
                          <p className="text-xs font-bold text-primary group-hover:text-secondary truncate">{product.name}</p>
                          <p className="text-[10px] text-on-surface-variant/60">{product.category}</p>
                        </div>
                        <ArrowRight className="w-3 h-3 text-on-surface-variant/20 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleSearch}
                    className="w-full px-4 py-2 mt-1 text-[10px] font-bold text-secondary hover:bg-secondary/5 flex items-center justify-center gap-2 border-t border-outline-variant/10"
                  >
                    View all results
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white hover:text-white/80 transition-colors z-50 relative">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-primary border-t border-white/10 overflow-hidden"
          >
            <div className="px-gutter py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-2 text-base font-semibold transition-colors hover:text-white ${
                    location.pathname === link.path ? 'text-white' : 'text-white/70'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Search Bar */}
              <form onSubmit={handleSearch} className="mt-4 flex items-center bg-white/10 px-4 py-2.5 rounded-full border border-white/20 focus-within:border-white/60 focus-within:bg-white/20 transition-all">
                <Search className="w-4 h-4 text-white/60 mr-2" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                  }}
                  className="bg-transparent border-none focus:ring-0 text-sm text-white placeholder:text-white/50 w-full outline-none"
                />
                {searchQuery && (
                  <button type="button" onClick={() => setSearchQuery('')} className="ml-2 text-white/40 hover:text-white">
                    <X className="w-3 h-3" />
                  </button>
                )}
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
