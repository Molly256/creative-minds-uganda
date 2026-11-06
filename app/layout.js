import "./globals.css";

export const metadata = {
  title: "Creative Minds Initiative Uganda",
  description: "Progress With A Purpose - Every Child Deserves Education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}