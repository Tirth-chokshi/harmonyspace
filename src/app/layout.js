import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import DesktopNav from "@/components/DesktopNav"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to Harmony Space",
  description: "Harmony Space is afull-stack application focused on cultivating human connections and promoting mental wellness in the digital age",
  icons: {
    icon: '/icon.png', // /public path
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <DesktopNav/>
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
