import Link from 'next/link';
import { Home, Search, Store } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#F0F5F0] px-4 py-12">
      <div className="w-full max-w-lg rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-12">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-green-50 text-green-700">
          <Store size={40} strokeWidth={1.7} />
        </div>

        {/* Error code */}
        <p className="mb-3 text-6xl font-extrabold tracking-tight text-green-700 sm:text-7xl">
          404
        </p>

        <h1 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
          পৃষ্ঠাটি খুঁজে পাওয়া যায়নি!
        </h1>

        <p className="mx-auto mb-8 max-w-sm text-sm leading-7 text-gray-600 sm:text-base">
          দুঃখিত! আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি পাওয়া যায়নি। লিংকটি ভুল হতে পারে অথবা পৃষ্ঠাটি
          সরিয়ে ফেলা হয়েছে।
        </p>

        {/* Actions */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            <Home size={18} />
            হোম পেজে ফিরুন
          </Link>
        </div>

        <p className="mt-8 text-lg font-bold text-gray-600">বাজার দর</p>
      </div>
    </main>
  );
}
