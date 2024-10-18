import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/global/navbar';
import Footer from '@/components/global/footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Artif Software',
  description:
    'Artif software offers top-notch web design and development services, including UI/UX design, advanced development, and AI solutions.',
  twitter: {
    card: 'summary_large_image',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className}`}>
        <div className=''>
          <Navbar />

          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
