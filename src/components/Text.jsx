import React from "react";

export default function Text({ title, paragraph, align="left" }) {
    const style = {
        textAlign: align
    };

    return (
        <div className="">
            <h1 className="text-3xl font-medium mb-4" style={style}>{title}</h1>
            <p className="text-[15px] text-light-grey" style={style}>{paragraph}</p>
        </div>
    );
}