import SortingProducts from '@/components/SortingProducts';

async function CategoryPage({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${id}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch category');
  }

  const data = await res.json();

  const filteredProducts = data.filter((item) => item.category === id);

  return (
    <section className="bg-[#F0F5F0] min-h-screen">
      <div className="container mx-auto pt-16">
        <div className="flex items-center gap-2 p-6 lg:p-10 bg-white rounded-2xl mx-4 xl:mx-0">
          <span className="w-14 h-14 bg-[#eef2ee] rounded-2xl flex items-center justify-center text-3xl">
            {filteredProducts[0]?.categoryIcon}
          </span>

          <div>
            <h4 className="text-xl font-bold">{filteredProducts[0]?.categoryNameBn}</h4>

            <p>{filteredProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
          </div>
        </div>
      </div>

      <div className="xl:container xl:mx-auto py-16 mx-4 ">
        <SortingProducts products={filteredProducts} />
      </div>
    </section>
  );
}

export default CategoryPage;
