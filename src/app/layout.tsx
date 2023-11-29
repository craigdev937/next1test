import React from "react";
import "../css/globals.css";
import { Provider } from "react-redux";
import { Reducer } from "../global/RootReducer";

interface CHI {
    children: React.ReactNode
};

export default function 
RootLayout({children}: CHI) {
    return (
        <html lang="en">
            <body>
            <React.Fragment>
                <Provider store={Reducer}>
                    
                        {children}
                    
                </Provider>
                </React.Fragment>
            </body>
        </html>
    );
};


