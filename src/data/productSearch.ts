export function matchesProduct(product: { name: string; description: string; category: string; id: string }, query: string) {
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const text = `${product.name} ${product.description} ${product.category} ${product.id}`.toLowerCase();
  return words.every(word => text.includes(word));
}
