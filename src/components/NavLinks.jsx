import Link from 'next/link';

const categoryNames = {
  chal: 'Rice',
  dal: 'Pulses',
  tel: 'Oil',
  sobji: 'Vegetables',
  mach: 'Fish',
  mangsho: 'Meat',
  'dim-dui': 'Eggs & Dairy',
  mosla: 'Spices',
};

async function NavLinks() {
  const res = await fetch('https://api.abcz.workers.dev/api/bazardor/categories');

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  const data = await res.json();

  return (
    <div className="flex gap-2">
      {data.map((category) => (
        <Link
          href={`/category/${category.slug}`}
          key={category.id}
          className="p-2 hover:bg-gray-300 rounded-xl text-xs transition-all duration-200 ease-in-out font-inter"
        >
          <span>{category.icon}</span>
          <span className="capitalize">{categoryNames[category.slug]}</span>
        </Link>
      ))}
    </div>
  );
}

export default NavLinks;
