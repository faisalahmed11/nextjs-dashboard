import "@/app/ui/global.css";
// importing global styles.
import { Analytics } from "@vercel/analytics/react";
import { inter } from "./ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Al Mehran Metal",
    default: "Al Mehran Metal",
  },
  description:
    "We deal with all type of metal scraping and reselling services in UAE, Dubai, Abu Dhabi, Sharja, Satwa",
  metadataBase: new URL("https://almehranmetal.com/dashboard"),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
