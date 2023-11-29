import React from "react";
import "../css/globals.css";

interface CHI {
    children: React.ReactNode
};

export default function 
RootLayout({children}: CHI) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
};


