import GetProducts from '@/lib/GetProducts';
import SortingProducts from './SortingProducts';

async function AllProducts() {
  const data = await GetProducts();

  return (
    <div className="container mx-auto py-16" id="all-products">
      <h4 className="text-xl py-4 font-bold">সব পণ্য</h4>
      <SortingProducts products={data} />
    </div>
  );
}

export default AllProducts;
