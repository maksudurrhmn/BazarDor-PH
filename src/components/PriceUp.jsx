import GetProducts from '@/library/GetProducts';
import ProductCard from './ProductCard';

async function PriceUp() {
  const data = await GetProducts();

  const topItems = data
    .filter((item) => item.change.dir === 'up')
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <div className="container mx-auto ">
      <h4 className="text-xl py-4 font-inter font-bold">
        <span className="text-red-700 text-base">▲</span> আজ দাম বেড়েছে
      </h4>
      <div className="grid grid-cols-3 gap-6">
        <ProductCard product={topItems}></ProductCard>
      </div>
    </div>
  );
}

export default PriceUp;
