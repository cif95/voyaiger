
import "./globals.css";
import { Header } from "./components/UI/Header/Header.component";
import { Mohave } from 'next/font/google';
import { Varta } from 'next/font/google';

const mohave = Mohave({
  subsets: ['latin'],
  variable: '--font-mohave'
});

const varta = Varta({
  subsets: ['latin'],
  variable: '--font-varta'
})

export const metadata = {
  title: "VoyAIger",
  description: "Get your tailored travel itinerary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mohave.variable} ${varta.variable} antialiased`}> 
        <Header/>
        {children}
      </body>
    </html>
  );
}
