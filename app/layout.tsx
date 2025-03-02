import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohan Portfolio',
  description: 'Mohan Portfolio is a visually engaging platform highlighting Mohan Kumar’s skills in UI/UX design and full-stack development. Built with Next.js, React, Tailwind CSS, and Framer Motion, it features smooth animations, responsive design, and interactive experiences. Explore design-driven projects, scalable applications, and professional achievements, reflecting a passion for innovation in software development and user experience.',
  icons: {
    icon: 'https://tinyurl.com/2xhrkaao', // Link to your favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://tinyurl.com/2xhrkaao" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <Navbar />
            <main>{children}</main>
            {/* <Footer /> */}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
