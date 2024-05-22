import React from "react";
import "../css/index.css";
import Rating from "./Rating"
import Footer from "./Footer";

export default function App() {
    return (
        <div className="w-full h-screen bg-dark-blue-3 flex justify-center items-center px-6">
            <Rating />
            <Footer />
        </div>
    );
}