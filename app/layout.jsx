import "./globals.css";

export const metadata = {
  title: "Rise Clone",
  description: "Rise at Seven Homepage Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}