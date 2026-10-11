'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import UserLogin from './UserLogin';

function NavButtons() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  return (
    <div>
      {user ? (
        <UserLogin></UserLogin>
      ) : (
        <div className="flex gap-4 items-center">
          <Link href="/signin">
            <button className="cursor-pointer hover:text-green-800 transition-colors ease-in-out duration-200">
              সাইন ইন
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-green-800 text-white px-6 py-2 rounded-4xl cursor-pointer transition-colors ease-in-out duration-200 hover:bg-green-900">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavButtons;
