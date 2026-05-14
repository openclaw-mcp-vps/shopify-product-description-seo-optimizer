import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEO Optimizer for Shopify | AI Product Description Rewriter",
  description: "AI-powered tool that analyzes competitor keywords and rewrites your Shopify product descriptions to rank higher while keeping your brand voice."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7c9b5685-301f-4469-a3b0-0c710f85844d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
