async function GetProducts() {
  const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await res.json();

  return data;
}

export default GetProducts;
