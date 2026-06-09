import { Helmet } from 'react-helmet-async';
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, RefreshCcw, Search as SearchIcon, X } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import productData from '../data/products.json';

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  fallbackImage: string;
  specs: Record<string, string>;
};

const products = productData as Product[];

const categories = ['All Products', ...Array.from(new Set(products.map((product) => product.category)))];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 150 : dir < 0 ? -150 : 0,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -150 : dir < 0 ? 150 : 0,
    opacity: 0,
  }),
};

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0);
  const productsPerPage = 3;
  const searchQuery = searchParams.get('q') || '';
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProduct]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'All Products' || product.category === activeCategory;
      const matchesSearch = !searchQuery || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const visibleProducts = useMemo(() => {
    return filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
  }, [filteredProducts, currentPage]);

  // Reset to first page when filters change
  useEffect(() => {
    setDirection(0);
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setDirection(page > currentPage ? 1 : -1);
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);

      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 2) {
        end = 3;
      } else if (currentPage >= totalPages - 1) {
        start = totalPages - 2;
      }

      if (start > 2) {
        pageNumbers.push('...');
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      if (end < totalPages - 1) {
        pageNumbers.push('...');
      }

      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Packaging Machinery Catalog - V Packs</title>
        <meta name="description" content="Explore our comprehensive range of high-performance packaging solutions engineered for reliability, speed, and precision." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-white border-b border-outline-variant/20 py-20 px-gutter">
        <div className="max-w-container-max mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Packaging Machinery Catalog</h1>
          <p className="text-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Explore our comprehensive range of high-performance packaging solutions engineered for reliability, speed, and precision in demanding industrial environments.
          </p>
        </div>
      </section>

      {/* Catalog Content */}
      <div id="catalog" className="max-w-container-max mx-auto px-gutter py-16 grid grid-cols-1 lg:grid-cols-4 gap-12 scroll-mt-24">
        {/* Sidebar Filters */}
        <aside className="lg:col-span-1 space-y-10">
          <div className="space-y-6">
            <h3 className="label-caps">Machine Type</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-x-4 gap-y-3">
              {categories.map(cat => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded border-2 transition-all flex items-center justify-center ${activeCategory === cat ? 'bg-secondary border-secondary' : 'border-outline-variant group-hover:border-primary'}`}>
                    {activeCategory === cat && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  <input 
                    type="radio" 
                    name="category" 
                    className="hidden" 
                    checked={activeCategory === cat} 
                    onChange={() => setActiveCategory(cat)} 
                  />
                  <span className={`text-sm font-medium transition-colors ${activeCategory === cat ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'}`}>
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          </div>



          <button className="flex items-center gap-2 text-secondary font-bold text-xs uppercase hover:text-primary transition-colors">
            <RefreshCcw className="w-4 h-4" />
            Reset Filters
          </button>
        </aside>

        {/* Main Grid */}
        <main className="lg:col-span-3 space-y-12">
          {/* Active Filters & Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-8 border-b border-outline-variant/10">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-on-surface-variant">Active Filters:</span>
              <span className="bg-surface-container/50 px-3 py-1 rounded-full text-[10px] font-bold text-primary border border-outline-variant/20 flex items-center gap-2">
                {activeCategory}
                <button onClick={() => setActiveCategory('All Products')} className="hover:text-secondary">×</button>
              </span>
              {searchQuery && (
                <span className="bg-secondary/10 px-3 py-1 rounded-full text-[10px] font-bold text-secondary border border-secondary/20 flex items-center gap-2">
                  Search: {searchQuery}
                  <button onClick={() => {
                    searchParams.delete('q');
                    setSearchParams(searchParams);
                  }} className="hover:text-primary">×</button>
                </span>
              )}
            </div>

            <div className="flex items-center gap-4">
              <span className="label-caps !text-[10px]">Sort By:</span>
              <select className="bg-white border border-outline-variant/30 rounded-lg px-4 py-2 text-xs font-bold text-primary focus:ring-secondary focus:border-secondary transition-all cursor-pointer outline-none">
                <option>Recommended</option>
                <option>Speed (High to Low)</option>
                <option>Capacity (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="overflow-hidden w-full">
            <AnimatePresence mode="wait" custom={direction}>
              {visibleProducts.length > 0 ? (
                <motion.div
                  key={currentPage}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 200, damping: 25 },
                    opacity: { duration: 0.25 }
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                  {visibleProducts.map((product) => (
                    <div 
                      key={product.id}
                      onClick={() => setSelectedProduct(product)}
                      className="bg-white rounded-xl border border-outline-variant/20 overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500 cursor-pointer"
                    >
                      <div className="aspect-[4/3] bg-surface-bright relative overflow-hidden group">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                          onError={(event) => {
                            event.currentTarget.src = product.fallbackImage;
                          }}
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded font-mono font-bold text-[10px] text-primary shadow-sm border border-outline-variant/10">
                          {product.id}
                        </div>
                      </div>

                      <div className="p-6 flex-grow flex flex-col justify-center items-center text-center border-t border-outline-variant/5">
                        <h3 className="text-base font-bold text-primary group-hover:text-secondary transition-colors leading-snug line-clamp-2">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-32 text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center">
                    <SearchIcon className="w-10 h-10 text-on-surface-variant/40" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">No products found</h3>
                  <p className="text-on-surface-variant max-w-sm">
                    We couldn't find any products matching "{searchQuery}". Try adjusting your filters or search terms.
                  </p>
                  <button 
                    onClick={() => {
                      setActiveCategory('All Products');
                      searchParams.delete('q');
                      setSearchParams(searchParams);
                    }}
                    className="btn-primary px-8 py-3"
                  >
                    Clear All Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 pt-16 border-t border-outline-variant/20">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-outline-variant/30 text-on-surface-variant hover:border-secondary hover:text-secondary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-2 flex-wrap justify-center">
                {getPageNumbers().map((page, idx) => {
                  if (page === '...') {
                    return (
                      <span key={`ellipsis-${idx}`} className="px-2 text-on-surface-variant/40 font-bold select-none text-sm">
                        ...
                      </span>
                    );
                  }
                  return (
                    <button
                      key={`page-${page}`}
                      onClick={() => handlePageChange(page as number)}
                      className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${
                        currentPage === page 
                          ? 'bg-secondary text-white shadow-lg shadow-secondary/20' 
                          : 'border border-outline-variant/30 text-primary hover:border-secondary'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-outline-variant/30 text-on-surface-variant hover:border-secondary hover:text-secondary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Specifications Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-primary/45 backdrop-blur-xs"
            />

            {/* Modal Content Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden relative flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] z-10 border border-outline-variant/30"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-secondary hover:text-white text-primary transition-all shadow-md z-20 border border-outline-variant/20 cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image with polished surface background */}
              <div className="md:w-1/2 bg-surface-bright flex items-center justify-center p-8 relative min-h-[250px] md:min-h-full border-b md:border-b-0 md:border-r border-outline-variant/10">
                <div className="absolute top-6 left-6 font-mono font-bold text-xs text-on-surface-variant bg-white/95 px-3 py-1 rounded shadow-sm border border-outline-variant/10">
                  {selectedProduct.id}
                </div>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="max-h-[200px] md:max-h-[400px] w-auto object-contain transition-transform duration-500 hover:scale-102"
                  onError={(event) => {
                    event.currentTarget.src = selectedProduct.fallbackImage;
                  }}
                />
              </div>

              {/* Right Column: Title and Details / Specifications Table */}
              <div className="md:w-1/2 p-6 md:p-10 overflow-y-auto flex flex-col justify-between">
                <div>
                  <span className="label-caps text-secondary font-bold text-xs">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-primary mt-1 mb-3 leading-tight font-display">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    {selectedProduct.description}
                  </p>

                  {/* Specifications Section */}
                  <div className="space-y-4">
                    <div className="border-b-2 border-secondary pb-1">
                      <h3 className="text-base font-bold text-primary uppercase tracking-wider font-display">
                        Specifications
                      </h3>
                    </div>

                    {/* Table styling matching user's color theme */}
                    <div className="border border-outline-variant/35 rounded-lg overflow-hidden shadow-sm">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-primary text-white">
                            <th className="py-2.5 px-4 font-display font-semibold text-xs tracking-wider uppercase border-r border-white/10 w-1/2">
                              Description
                            </th>
                            <th className="py-2.5 px-4 font-display font-semibold text-xs tracking-wider uppercase w-1/2">
                              Material / Details
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/20 text-xs">
                          {Object.entries(selectedProduct.specs).map(([key, value], index) => (
                            <tr
                              key={key}
                              className={`transition-colors hover:bg-surface-bright/50 ${
                                index % 2 === 1 ? 'bg-surface-bright/30' : 'bg-white'
                              }`}
                            >
                              <td className="py-2.5 px-4 font-medium text-primary border-r border-outline-variant/10">
                                {key}
                              </td>
                              <td className="py-2.5 px-4 text-on-surface-variant font-bold">
                                {value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 mt-6 border-t border-outline-variant/20 flex gap-3">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="w-full py-2.5 rounded-lg border border-outline-variant text-primary font-bold text-sm hover:bg-surface-container transition-all cursor-pointer text-center"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
