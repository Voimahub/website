import Footer from "./(components)/Footer";
import Header from "./(components)/Header";
import { InriaRegular } from "./(fonts)/font";
import "./globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Voima",
  description: "Building a Sickle Cell Free Community!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${InriaRegular.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
