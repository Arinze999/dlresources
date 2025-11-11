import type { Metadata } from 'next';
import {
  Inter,
  Poppins,
  Lora,
  Rubik_Moonrocks,
  Chela_One,
} from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const lora = Lora({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-lora',
});

const rubik = Rubik_Moonrocks({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-rubik',
});

const chela = Chela_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-chela',
});

export const metadata: Metadata = {
  title: 'Deola resources',
  description: 'Best Food Vendor in Owerri',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${lora.variable} ${rubik.variable} ${chela.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
