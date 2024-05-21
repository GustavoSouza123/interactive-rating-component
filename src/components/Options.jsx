import React from "react";

export default function Options({ onClick, active, error }) {
    const options = [1, 2, 3, 4, 5];

    return (
        <div className="w-full h-[50px] flex justify-between">
            {options.map(option => 
                <div
                    key={option}
                    className={`option w-[50px] h-[50px] bg-dark-blue-0 hover:bg-orange text-light-grey hover:text-dark-blue-3 font-bold rounded-full flex justify-center items-center transition cursor-pointer border-2 border-solid border-transparent ${error ? 'animate-error' : ''}`}
                    onClick={() => onClick(option)}
                    style={{
                        backgroundColor: option === active && 'var(--white)',
                        color: option === active && 'var(--dark-blue-3)',
                    }}
                >
                    {option}
                </div>
            )}
        </div>
    );
}