import type { Metadata } from "next"
import "./globals.css"

const description: string =
  "Simple list designed to be able to create elements only using keyboard for fast traking of your expenses, including data filters for easier analysis"

export const metadata: Metadata = {
  title: "Expenses",
  description,
  openGraph: {
    title: "Expenses",
    description,
    images: {
      url: "/og-image.png",
      type: "image/jpg",
      width: 1200,
      height: 600,
    },
  },
  twitter: {
    title: "Expenses",
    description,
    images: {
      url: "/og-image.png",
      type: "image/jpg",
      width: 1200,
      height: 600,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
