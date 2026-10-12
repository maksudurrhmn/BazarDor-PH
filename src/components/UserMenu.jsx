'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronDown, LogOut, UserRound } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

export default function UserMenu() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  if (isPending) {
    return <div className="h-10 w-28 animate-pulse rounded-lg bg-gray-100" />;
  }

  if (!session?.user) {
    return (
      <div className="flex gap-2 lg:gap-4 items-center">
        <Link href="/signin">
          <button className="cursor-pointer text-sm lg:text-base hover:text-green-800 transition-colors ease-in-out duration-200">
            সাইন ইন
          </button>
        </Link>
        <Link href="/signup">
          <button className="bg-green-800 text-white text-sm lg:text-base px-3 lg:px-6 py-2 rounded-4xl cursor-pointer transition-colors ease-in-out duration-200 hover:bg-green-900">
            সাইন আপ
          </button>
        </Link>
      </div>
    );
  }

  const user = session.user;
  const name = user.name || 'ব্যবহারকারী';
  const initial = name.charAt(0).toUpperCase();

  async function handleSignOut() {
    try {
      setIsSigningOut(true);
      await authClient.signOut();
      toast.success('You have been signed out.');
      setIsOpen(false);
      router.push('/signin');
      router.refresh();
    } catch (error) {
      toast.error('Sign out failed:', error);
    } finally {
      setIsSigningOut(false);
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="flex items-center gap-2 rounded-xl p-2 transition hover:bg-gray-200"
      >
        {user.image ? (
          <img src={user.image} alt={name} className="h-9 w-9 rounded-full object-cover" />
        ) : (
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#CCFF00] font-bold text-black">
            {initial}
          </div>
        )}

        <span className="hidden max-w-32 truncate text-sm font-semibold text-gray-800 sm:block">
          {name}
        </span>

        <ChevronDown
          size={16}
          className={`text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 w-64 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg"
        >
          <div className="border-b border-gray-100 px-4 py-3">
            <p className="truncate text-sm font-semibold text-gray-900">{name}</p>
            <p className="truncate text-sm text-gray-600">{user.email}</p>
          </div>

          <div className="p-2">
            <Link
              href="/profile"
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-200"
            >
              <UserRound size={18} />
              প্রোফাইল
            </Link>

            <button
              type="button"
              role="menuitem"
              onClick={handleSignOut}
              disabled={isSigningOut}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition hover:bg-red-50 disabled:opacity-100"
            >
              <LogOut size={18} />
              {isSigningOut ? 'সাইন আউট হচ্ছে...' : 'সাইন আউট'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
