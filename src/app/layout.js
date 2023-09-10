import '../../styles/globals.css'
import { Alfa_Slab_One, Inter, Poppins, Space_Grotesk } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SIH',
  description: 'Indian tourism',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
