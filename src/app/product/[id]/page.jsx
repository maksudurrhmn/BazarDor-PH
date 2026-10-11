import { notFound } from 'next/navigation';
import ProductDetails from '@/components/ProductDetails';

export default async function ProductPage({ params }) {
  const { id } = await params;

  const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const products = await res.json();

  const product = products.find((item) => item.slug === id);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
