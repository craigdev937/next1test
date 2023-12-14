import React from "react";
import "../css/globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Navbar } from "./components/Navbar";

const rubik = Rubik({ subsets: ["latin"] });

interface CHI {
    children: React.ReactNode
};

export const metadata: Metadata = {
    title: "Henry and Kola",
    description: "A page of Craig's Characters"
};

export default function RootLayout({children}: CHI) {
    return (
        <html lang="en">
            <body className={rubik.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
};


