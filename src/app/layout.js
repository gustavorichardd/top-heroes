import { Inter } from 'next/font/google'
import './globals.css'
import PiwikProProvider from '@piwikpro/next-piwik-pro'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Top Heroes',
  description: 'Created by SASUKE (sv29)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PiwikProProvider
          containerId="db39fb12-11ed-48e6-887c-6a9a29adf1cd"
          containerUrl="https://top-heroes.piwik.pro"
        >
          {children}
        </PiwikProProvider>
      </body>
    </html>
  )
}
