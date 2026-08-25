import type { Metadata } from "next";
import { Martian_Mono, Schibsted_Grotesk } from "next/font/google";
import RaysEffectBanner from "./_components/rays-effect-banner";
import "./globals.css";
import GeneralHeader from "./_components/general-header";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian_mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent | Home",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${martianMono.variable} ${schibstedGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full typeset w-full">
        <RaysEffectBanner />
        <GeneralHeader />
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
