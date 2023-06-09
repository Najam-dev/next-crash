import './globals.css' 
import Header from './components/Header' 
import { Poppins } from 'next/font/google'
import { Inter } from 'next/font/google'

const poppins = Poppins({ 
  weight:['400', '700'],
  subsets: ['latin'] })

export const metadata = {
  title: 'Techno Spot',
  description: 'Web dev projects',
  keywords: 'web development, web design, projects, react, node, express, nextjs, next, mern, js'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
