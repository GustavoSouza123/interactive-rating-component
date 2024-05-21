import React from "react";
import "../css/index.css";
import Rating from "./Rating"

export default function App() {
    return (
        <div className="w-full h-screen bg-dark-blue-3 flex justify-center items-center px-6">
            <Rating />
        </div>
    );
}