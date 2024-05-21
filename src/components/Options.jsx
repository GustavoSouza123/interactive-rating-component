import React from "react";

export default function Options({ onClick }) {
    const options = [1, 2, 3, 4, 5];

    return (
        <div className="w-full h-[50px] flex justify-between">
            {options.map(option => 
                <div key={option} className="w-[50px] h-[50px] bg-dark-blue-0 hover:bg-orange text-light-grey hover:text-dark-blue-3 font-bold rounded-full flex justify-center items-center transition cursor-pointer" onClick={onClick}>{option}</div>
            )}
        </div>
    );
}