import React from "react";
import "../css/globals.css";
import type { Metadata } from "next";
interface CHI {
    children: React.ReactNode
};

export const metadata: Metadata = {
    title: "Henry and Kola"
};

export default function 
RootLayout({children}: CHI) {
    return (
        <html lang="en">
            <body>
                { children }
            </body>
        </html>
    );
};


