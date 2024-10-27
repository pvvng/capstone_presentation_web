import type { Metadata } from "next";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './font.css';

export const metadata: Metadata = {
  title: "presentation web",
  description: "캡스톤 추가 발표 웹",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{margin:'0px', boxSizing:'border-box'}}>
        {children}
      </body>
    </html>
  );
}
