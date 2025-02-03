import Script from "next/script";
import Head from "next/head";

import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Top Heroes',
  description: 'Comunidade Brasileiro de TopHeroes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6769886548129317"
        crossorigin="anonymous"></Script>

      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
