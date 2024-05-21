import React from "react";

export default function Text({ title, paragraph, align="left" }) {
    return (
        <div className="">
            <h1 className="text-[28px] font-medium mb-2" style={{ textAlign: align }}>{title}</h1>
            <p className="text-[15px] text-light-grey" style={{ textAlign: align }}>{paragraph}</p>
        </div>
    );
}