import React from "react";
import { useState } from "react";
import Text from "./Text";
import Options from "./Options";
import Button from "./Button";
import Image from "./Image";
import Selection from "./Selection";
import star from "../assets/icon-star.svg";

export default function Rating() {
    const [option, setOption] = useState(null);
    const [isSubmitted, setSubmitted] = useState(false);

    function handleOptionClick() {
        setOption(1);
        console.log(option);
    }

    return (
        <div className="w-[410px] h-[415px] bg-gradient-to-b from-dark-blue-1 to-dark-blue-2 rounded-[30px] flex flex-col gap-[30px] p-8 text-white">
            {isSubmitted ? (
                <>
                    <Image />
                    <Selection />
                    <Text title="Thank you!" paragraph="We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!" />
                </>
            ) : (
                <>
                    <div className="w-12 h-12 rounded-full bg-dark-blue-0 flex justify-center items-center">
                        <img src={star} alt="star image" />
                    </div>
                    <Text title="How did we do?" paragraph="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!" />
                    <Options onClick={() => handleOptionClick()} />
                    <Button />
                </>
            )}
        </div>
    );
}