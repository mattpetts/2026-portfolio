import { cookies } from 'next/headers';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UIProvider } from "@/context/UIProvider";
import { Nav, NavControl, PullDown, Theme } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matt Petts | Software Engineer",
  description: "I'm a front-end focused software engineer building fun things with Javascript, Typescript and NextJs!",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const cookieJar = await cookies();
    const theme = cookieJar.get('theme')?.value === 'dark' ? 'dark' : 'light';

    return (
        <html lang="en">
            <UIProvider initTheme={ theme }>
                <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                    <Theme theme={ theme }>
                        <div className="flex items-start flex-col justify-start">
                            <Nav />
                            <NavControl />
                            <PullDown>
                                {children}
                            </PullDown>
                        </div>
                    </Theme>
                </body>
            </UIProvider>
        </html>
    );
}
