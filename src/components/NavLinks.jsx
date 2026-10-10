import NavLinksClient from './NavLinksClient';

async function NavLinks() {
  const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories');

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  const data = await res.json();

  return <NavLinksClient categories={data} />;
}

export default NavLinks;
