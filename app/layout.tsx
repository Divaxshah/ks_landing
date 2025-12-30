import type { Metadata } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "KreativeSpace | AI-Powered Writing Tools",
  description: "Transform your writing with KreativeSpace's suite of AI tools. Paraphraser, Grammar Checker, Citation Creator, AI Detector, Translator, and Summarizer - all in one place.",
  keywords: "AI writing tools, paraphraser, grammar checker, citation generator, AI detector, translator, summarizer, KreativeSpace",
  authors: [{ name: "KreativeSpace" }],
  openGraph: {
    title: "KreativeSpace | AI-Powered Writing Tools",
    description: "Transform your writing with KreativeSpace's suite of AI tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html >
  );
}
