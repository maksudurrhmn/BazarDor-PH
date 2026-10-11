import { Suspense } from 'react';
import DateTime from './DateTime';
import NavLinks from './NavLinks';
import Link from 'next/link';
import UserMenu from './UserMenu';

function Navbar() {
  return (
    <nav className="sticky top-0 z-999 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-2">
          <Link href="/">
            <div className="flex gap-1 justify-center items-center">
              <img
                src="/assets/logo-1.png"
                alt="Logo"
                className="bg-green-800 p-1 rounded-2xl w-10 h-10"
              ></img>
              <div className="leading-4">
                <h4 className="text-2xl font-bold">বাজার দর</h4>
                <span className="text-xs text-gray-500">
                  <Suspense fallback="{...}">
                    <DateTime />
                  </Suspense>
                </span>
              </div>
            </div>
          </Link>
          <UserMenu></UserMenu>
        </div>
      </div>
      <div className="border-t border-b border-gray-200">
        <div className="container mx-auto py-1">
          <Suspense fallback={'...'}>
            <NavLinks />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
