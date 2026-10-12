'use client';

import { useEffect, useState } from 'react';
import {
  UserRound,
  Mail,
  CalendarDays,
  Save,
  LoaderCircle,
  ShieldCheck,
  MoveLeft,
} from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

export default function ProfilePage() {
  const { data: session, isPending, refetch } = authClient.useSession();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSavingName, setIsSavingName] = useState(false);
  const [isSavingEmail, setIsSavingEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const user = session?.user;

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
    }
  }, [user?.name, user?.email]);

  async function handleNameUpdate(e) {
    e.preventDefault();
    setMessage('');
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Name cannot be empty.');
      return;
    }

    try {
      setIsSavingName(true);

      const { error } = await authClient.updateUser({
        name: name.trim(),
      });

      if (error) {
        setErrorMessage(error.message || 'Failed to update name.');
        return;
      }

      await refetch();
      setMessage('Your name has been updated successfully.');
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSavingName(false);
    }
  }

  async function handleEmailUpdate(e) {
    e.preventDefault();
    setMessage('');
    setErrorMessage('');

    const newEmail = email.trim();

    if (!newEmail) {
      setErrorMessage('Email cannot be empty.');
      return;
    }

    if (newEmail.toLowerCase() === user?.email?.toLowerCase()) {
      setErrorMessage('Please enter a different email address.');
      return;
    }

    try {
      setIsSavingEmail(true);

      const { error } = await authClient.changeEmail({
        newEmail,
        callbackURL: '/profile',
      });

      if (error) {
        setErrorMessage(error.message || 'Failed to request email change.');
        return;
      }

      setMessage('Email change requested. Check your email for the verification link.');
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSavingEmail(false);
    }
  }

  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <LoaderCircle className="animate-spin" size={30} />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Please sign in</h1>
        <p className="mt-2 text-gray-500">Sign in to view and update your profile.</p>
        <a
          href="/signin"
          className="mt-6 inline-block rounded-lg bg-[#CCFF00] px-5 py-3 font-semibold text-black hover:bg-[#b8e600]"
        >
          Go to sign in
        </a>
      </div>
    );
  }

  const createdAt = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'Not available';

  const initial = (user.name || user.email || 'U').charAt(0).toUpperCase();

  return (
    <main className="min-h-screen bg-[#F0F5F0] px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <Link
            href="/"
            className="hover:underline flex items-center gap-1 text-sm lg:text-base w-fit"
          >
            <MoveLeft size={16} /> হোম পেজে ফিরে যান
          </Link>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">প্রোফাইল</h1>
          <p className="mt-2 text-gray-500">
            আপনার ব্যক্তিগত তথ্য এবং অ্যাকাউন্টের বিবরণ পরিচালনা করুন।
          </p>
        </div>

        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col items-center gap-4 border-b border-gray-100 p-6 sm:flex-row sm:p-8">
            {user.image ? (
              <img
                src={user.image}
                alt={`${user.name || 'User'}'s profile`}
                className="h-24 w-24 rounded-full border-4 border-gray-100 object-cover"
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#CCFF00] text-3xl font-bold text-black">
                {initial}
              </div>
            )}

            <div className="text-center sm:text-left">
              <h2 className="text-xl font-bold text-gray-900">{user.name || 'User'}</h2>
              <p className="mt-1 text-sm text-gray-500">{user.email}</p>
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                <ShieldCheck size={14} />
                অ্যাকাউন্টের তথ্য
              </div>
            </div>
          </div>

          <div className="grid gap-4 border-b border-gray-100 p-6 sm:grid-cols-2 sm:p-8">
            <div className="rounded-xl bg-gray-50 p-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Mail size={17} />
                ইমেইল
              </div>
              <p className="mt-2 break-all font-semibold text-gray-900">{user.email}</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CalendarDays size={17} />
                অ্যাকাউন্ট তৈরি করা হয়েছে
              </div>
              <p className="mt-2 font-semibold text-gray-900">{createdAt}</p>
            </div>
          </div>

          <div className="space-y-8 p-6 sm:p-8">
            {message && (
              <div role="status" className="rounded-lg bg-green-50 p-3 text-sm text-green-800">
                {message}
              </div>
            )}

            {errorMessage && (
              <div role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleNameUpdate} className="space-y-4">
              <div>
                <h3 className="flex items-center gap-2 font-semibold text-gray-900">
                  <UserRound size={19} />
                  আপনার নাম আপডেট করুন
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  বাজার দর-এ আপনার নাম যেভাবে প্রদর্শিত হয়, তা পরিবর্তন করুন।
                </p>
              </div>

              <label htmlFor="profile-name" className="block text-sm font-medium text-gray-700">
                নাম পরিবর্তন
              </label>

              <input
                id="profile-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={100}
                autoComplete="name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-[#CCFF00]"
              />

              <button
                type="submit"
                disabled={isSavingName}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-700 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-green-900 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSavingName ? (
                  <LoaderCircle size={18} className="animate-spin" />
                ) : (
                  <Save size={18} />
                )}
                {isSavingName ? 'পরিবর্তন হচ্ছে...' : 'পরিবর্তন করুন'}
              </button>
            </form>

            <div className="border-t border-gray-100" />

            <form onSubmit={handleEmailUpdate} className="space-y-4">
              <div>
                <h3 className="flex items-center gap-2 font-semibold text-gray-900">
                  <Mail size={19} />
                  ইমেল পরিবর্তন করুন
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  আপনার অ্যাকাউন্টের ইমেল হিসেবে সেট হওয়ার আগে নতুন ঠিকানাটি যাচাই করার প্রয়োজন হতে
                  পারে।
                </p>
              </div>

              <label htmlFor="profile-email" className="block text-sm font-medium text-gray-700">
                ইমেল পরিবর্তন
              </label>

              <input
                id="profile-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-[#CCFF00]"
              />

              <button
                type="submit"
                disabled={isSavingEmail}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-2 font-semibold text-gray-800 transition duration-300 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSavingEmail && <LoaderCircle size={18} className="animate-spin" />}
                {isSavingEmail ? 'আপডেট হচ্ছে...' : 'আপডেট ইমেল'}
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
