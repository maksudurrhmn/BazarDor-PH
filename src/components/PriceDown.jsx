import GetProducts from '@/lib/GetProducts';
import ProductCard from './ProductCard';

async function PriceDown() {
  const data = await GetProducts();
  const topItems = data
    .filter((item) => item.change.dir === 'down')
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);
  return (
    <div className="container mx-auto pt-16 px-4 xl:px-0">
      <h4 className="text-xl py-4 font-inter font-bold">
        <span className="text-green-700 text-base">▼</span> আজ দাম কমেছে
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard product={topItems}></ProductCard>
      </div>
    </div>
  );
}

export default PriceDown;
