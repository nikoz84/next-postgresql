import '@styles/globals.css'
import Nav from '@app/auth/Nav'
import QueryWrapper from '@app/auth/QueryWrapper'
import { Roboto, Lato } from 'next/font/google'


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto'
})


export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`mx-4 md:mx-48 xl:mx-96 bg-grey-20 font-roboto`}>
        <QueryWrapper>
          <Nav />
          {children}
        </QueryWrapper>
      </body>
    </html>
  )
}
