import './globals.css'
import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })
const open = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Secure Your Family’s Future for Just ₹500/month* | Finacbooks Term Life Insurance in UP',
  description:
    'Affordable term life cover up to ₹1 Cr from ₹500/month*. Instant online quotes for residents in Lucknow, Kanpur, Varanasi, Noida, Ghaziabad, and major UP cities. Get protected with Finacbooks – high coverage, tax benefits, and easy online purchase.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <link
          rel="preload"
          as="document"
          href="https://form.jotform.com/253041831403041"
        />
      </head>

      <body className={open.className}>
        {/* ✅ Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-810525438"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-810525438');
          `}
        </Script>

        {children}
      </body>
    </html>
  )
}
