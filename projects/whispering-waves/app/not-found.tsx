import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="text-center">
        <p className="font-serif text-7xl font-bold text-gold-400 mb-4">404</p>
        <h1 className="heading-lg text-2xl text-white mb-3">Page Not Found</h1>
        <p className="text-slate-400 text-sm mb-8 max-w-xs mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn-primary inline-flex"
        >
          Back to Whispering Waves
        </Link>
      </div>
    </main>
  );
}
