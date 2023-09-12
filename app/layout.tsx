import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navBar'
import NavBarMovil from '@/components/navBarMovil'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GuardSoft',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <NavBar />
        <NavBarMovil/>
        {children}
      </body>
    </html>
  );
}
