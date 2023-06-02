import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Reggae Airbnb',
  description: 'Created by GemShae Enterprise',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="./favicon_package/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="./favicon_package/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="./favicon_package/favicon-16x16.png"/>
      <link rel="manifest" href="./favicon_package/site.webmanifest"/>
      <link rel="mask-icon" href="./favicon_package/safari-pinned-tab.svg" color="#b91d47"/>
      <meta name="msapplication-TileColor" content="#00aba9"/>
      <meta name="theme-color" content="#ffffff"/>
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
