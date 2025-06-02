import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Load fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// Metadata
export const metadata: Metadata = {
  title: "Craving Hut - Dehradun's Finest Restaurant",
  description: "Discover a journey of flavors at Craving Hut in Dehradun.",
  generator: "v0.dev",
  icons: {
    icon: "/img/logo.jpg",
  },
 
};

// Root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // <- Set default to dark
          enableSystem={false} // <- Disable system preference to force dark
          disableTransitionOnChange // <- Avoid flash
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
