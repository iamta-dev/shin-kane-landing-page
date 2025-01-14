import type { Metadata } from 'next'
import { Noto_Sans_Thai, Sarabun } from 'next/font/google'
import '~/styles/globals.css';

const notoSansThai = Noto_Sans_Thai({ 
  subsets: ['thai'],
  variable: '--font-heading',
  weight: ['400', '600', '700'],
})

const sarabun = Sarabun({ 
  subsets: ['thai'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Shin Kane (ชินคาเนะ) - สั่งอาหารญี่ปุ่นออนไลน์',
  description: 'อร่อยทุกคำ ส่งตรงถึงบ้านคุณ | สั่งอาหารญี่ปุ่นแท้ๆ ส่งด่วนถึงบ้าน รับประกันความสด ในเขตบางพลีและพื้นที่ใกล้เคียง',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" className={`${notoSansThai.variable} ${sarabun.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${sarabun.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}