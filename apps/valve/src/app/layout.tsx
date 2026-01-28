import Link from 'next/link';
import { AuthControl } from "@/components/auth/AuthControl";
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Valve',
  description: 'Feature flags and release management dashboard',
};

export default function RootLayout({
  children,
} : {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <header className="border-b">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-6">
              <h1 className="text-lg font-semibold">Valve</h1>

              <nav className="flex items-center gap-4 text-sm">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/flags" className="hover:underline">Flags</Link>
              </nav>
            </div>

             {/* Auth area - UI scaffolding only */}
          <div className="flex items-center gap-3 text-sm">
            <AuthControl state="signedOut" />
          </div>
          </div>
        </header>
        <main className="mx-auto max-w-4xl px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  )
};