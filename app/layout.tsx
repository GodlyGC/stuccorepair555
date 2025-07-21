import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Professional Stucco Repair Toronto | StuccoRepair.ca",
  description:
    "Expert stucco repair services in Toronto and GTA. Professional repair for cracks, holes, peeling, and damage. Licensed, insured, and guaranteed results.",
  keywords: "stucco repair, Toronto stucco, GTA stucco repair, stucco contractor, exterior repair",
  authors: [{ name: "StuccoRepair.ca" }],
  creator: "StuccoRepair.ca",
  publisher: "StuccoRepair.ca",
  robots: "index, follow",
  openGraph: {
    title: "Professional Stucco Repair Toronto | StuccoRepair.ca",
    description:
      "Expert stucco repair services in Toronto and GTA. Professional repair for cracks, holes, peeling, and damage.",
    url: "https://stuccorepair.ca",
    siteName: "StuccoRepair.ca",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Stucco Repair Toronto | StuccoRepair.ca",
    description: "Expert stucco repair services in Toronto and GTA.",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon.png", sizes: "256x256", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "57x57", type: "image/png" },
      { url: "/favicon.png", sizes: "60x60", type: "image/png" },
      { url: "/favicon.png", sizes: "72x72", type: "image/png" },
      { url: "/favicon.png", sizes: "76x76", type: "image/png" },
      { url: "/favicon.png", sizes: "114x114", type: "image/png" },
      { url: "/favicon.png", sizes: "120x120", type: "image/png" },
      { url: "/favicon.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon.png", sizes: "152x152", type: "image/png" },
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.png",
        color: "#dc2626",
      },
    ],
  },
  manifest: "/site.webmanifest",
  generator: 'v0.dev'
}

// Move viewport-related fields to dedicated export per Next.js 14 API
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#dc2626",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Standard favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />

        {/* Android Chrome Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png" />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileImage" content="/favicon.png" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Safari Pinned Tab */}
        <link rel="mask-icon" href="/favicon.png" color="#dc2626" />

        {/* Theme Colors */}
        <meta name="theme-color" content="#dc2626" />
        <meta name="msapplication-navbutton-color" content="#dc2626" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preload critical favicon */}
        <link rel="preload" href="/favicon.png" as="image" type="image/png" />

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-979460677"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-979460677');
            `,
          }}
        />

        {/* Event snippet for Submit Lead Forum conversion page */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-979460677/2G3FCMjRyNMaEMXEhdMD',
                    'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
