import "./globals.css";
// Components
import { Header } from "./components/UI/Header/Header.component";
import { Footer } from "components/UI/Footer/Footer.component";
// Fonts
import { Nunito } from 'next/font/google';
import { Nunito_Sans } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-mohave'
});

const nunitoSans = Nunito_Sans({
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
      <body className={`${nunito.variable} ${nunitoSans.variable} antialiased`}> 
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
