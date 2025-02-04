import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
import "./styles/mobile.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-11514150301"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11514150301');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        {/* Bootstrap JS */}
        <Script
          async
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        />
      </body>
    </html>
  );
}
