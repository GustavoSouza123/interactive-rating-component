import React from "react";

export default function Button({ onClick }) {
    return (
        <div
            className="max-w-[340px] h-[45px] flex justify-center items-center bg-orange hover:bg-white text-dark-blue-3 font-bold uppercase rounded-3xl tracking-widest pt-1 cursor-pointer transition"
            onClick={onClick}
        >
            Submit
        </div>
    );
}