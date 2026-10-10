'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinksClient({ categories }) {
  const pathname = usePathname();

  return (
    <div className="flex gap-2">
      {categories.map((category) => {
        const isActive = pathname === `/category/${category.slug}`;

        return (
          <Link
            href={`/category/${category.slug}`}
            key={category.id}
            className={`p-2 rounded-xl text-sm transition-all duration-200 ease-in-out ${
              isActive ? 'bg-green-700 text-white' : 'hover:bg-gray-300'
            }`}
          >
            <span>{category.icon}</span> <span>{category.nameBn}</span>
          </Link>
        );
      })}
    </div>
  );
}
