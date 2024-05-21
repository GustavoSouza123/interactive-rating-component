import React from "react";

export default function Selection({ option, length }) {
    return (
        <div className="w-[195px] h-[32px] bg-dark-blue-0 text-orange flex justify-center items-center text-[15px] rounded-3xl mb-1 pt-1">
            <div className="">You selected {option} out of {length}</div>
        </div>
    );
}