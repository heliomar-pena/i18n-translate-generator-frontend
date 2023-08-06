import 'normalize.css';
import './globals.css';
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Header from '../common/header';

const roboto = Roboto({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'i18n translate generator',
  description: 'Generate i18n translate files with only one command',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
