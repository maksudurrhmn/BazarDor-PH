'use client';

import Link from 'next/link';
import { Mail, Lock, User, ArrowRight, MoveLeft } from 'lucide-react';
import { authClient, signUp } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';

export default function SignupPage() {
  const router = useRouter();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    if (data) {
      toast.success('Account created. Successfully');
      router.push('/');
      router.refresh();
    }
    if (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleAuth = async () => {
    const data = await authClient.signIn.social({
      provider: 'google',
    });
  };

  const handleGithubAuth = async () => {
    const data = await authClient.signIn.social({
      provider: 'github',
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F0F5F0] px-4 py-10 text-gray-900">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            বাজার<span className="text-emerald-600">দর</span>
          </Link>

          <h1 className="mt-6 text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</h1>

          <p className="mt-2 text-sm text-gray-500">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        {/* Signup form */}
        <form className="space-y-5" onSubmit={onSubmitHandler}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              নাম
            </label>

            <div className="relative">
              <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                id="name"
                name="name"
                type="text"
                placeholder="নাম লিখুন"
                autoComplete="name"
                required
                className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

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
            <label htmlFor="password" className="mb-2 block text-sm font-medium">
              পাসওয়ার্ড
            </label>

            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                id="password"
                name="password"
                type="password"
                placeholder="পাসওয়ার্ড তৈরি করুন"
                autoComplete="new-password"
                minLength={8}
                required
                className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-11 text-sm outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            <p className="mt-2 text-sm text-gray-600">কমপক্ষে ৮টি অক্ষর ব্যবহার করুন।</p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            অ্যাকাউন্ট তৈরি করুন
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs text-gray-400">অথবা</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Social signup */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleGoogleAuth}
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-3 text-sm font-medium transition hover:bg-gray-100 cursor-pointer"
          >
            <FcGoogle /> Google দিয়ে চালিয়ে যান
          </button>

          <button
            onClick={handleGithubAuth}
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-3 text-sm font-medium transition hover:bg-gray-100 cursor-pointer"
          >
            <FaGithub /> GitHub দিয়ে চালিয়ে যান
          </button>
        </div>

        {/* Login link */}
        <p className="mt-6 text-center text-sm text-gray-500">
          অ্যাকাউন্ট আছে?{' '}
          <Link href="/signin" className="font-semibold text-emerald-600 hover:underline">
            সাইন ইন করুন
          </Link>
        </p>
      </div>
      <div className="mt-16">
        <Link
          href="/"
          className="hover:underline flex items-center gap-1 text-sm lg:text-base w-fit"
        >
          <MoveLeft size={16} /> হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
}
