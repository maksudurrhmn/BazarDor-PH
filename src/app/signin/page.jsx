'use client';

import Link from 'next/link';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from '@/lib/auth-client';
import { redirect, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function SigninPage() {
  const router = useRouter();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {
      toast.success('Signed in successfully.');
      router.push('/');
      router.refresh();
    }
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F0F5F0] px-4 py-10 text-gray-900">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            বাজার<span className="text-emerald-600">দর</span>
          </Link>

          <h1 className="mt-6 text-2xl font-bold">অ্যাকাউন্টে সাইন ইন করুন</h1>

          <p className="mt-2 text-sm text-gray-600">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        {/* Login form */}
        <form className="space-y-5" onSubmit={onSubmitHandler}>
          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              ইমেইল
            </label>

            <div className="relative">
              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                id="email"
                name="email"
                type="email"
                placeholder="ইমেইল লিখুন"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between gap-2">
              <label htmlFor="password" className="text-sm font-medium">
                পাসওয়ার্ড
              </label>
            </div>

            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                id="password"
                name="password"
                type="password"
                placeholder="পাসওয়ার্ড লিখুন"
                autoComplete="current-password"
                required
                className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-11 text-sm outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            সাইন ইন করুন
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs text-gray-400">অথবা</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Social sign-in */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-3 text-sm font-medium transition hover:bg-gray-50"
          >
            <FcGoogle /> Google দিয়ে চালিয়ে যান
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-3 text-sm font-medium transition hover:bg-gray-50"
          >
            <FaGithub /> GitHub দিয়ে চালিয়ে যান
          </button>
        </div>

        {/* Sign-up link */}
        <p className="mt-6 text-center text-sm text-gray-500">
          অ্যাকাউন্ট নেই?{' '}
          <Link href="/signup" className="font-semibold text-emerald-600 hover:underline">
            অ্যাকাউন্ট তৈরি করুন
          </Link>
        </p>
      </div>
    </main>
  );
}
