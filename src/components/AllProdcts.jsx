import GetProducts from '@/library/GetProducts';
import ProductList from './ProductList';

async function AllProducts() {
  const data = await GetProducts();

  return (
    <div className="container mx-auto py-16">
      <h4 className="text-xl py-4 font-bold">সব পণ্য</h4>
      <ProductList products={data} />
    </div>
  );
}

export default AllProducts;
