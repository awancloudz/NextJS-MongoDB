import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Optik Kustin',
  description: 'Pendataan Produk',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-3xl mx-auto p-4">
          <Navbar/>
          <div className="mt-8">
            {children}
          </div>          
        </div>
      </body>
    </html>
  )
}
