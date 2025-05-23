import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log(process.env.NODE_ENV)
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
      </head>
      <body>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV !== "development" ? <Analytics /> : null}
      </body>
    </html>
  )
}