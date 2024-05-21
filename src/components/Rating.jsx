import React from "react";
import { useState } from "react";
import Text from "./Text";
import Options from "./Options";
import Button from "./Button";
import Selection from "./Selection";
import star from "../assets/icon-star.svg";
import illustration from "../assets/illustration-thank-you.svg";

export default function Rating() {
    const [option, setOption] = useState(null);
    const [isSubmitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const options = [1, 2, 3, 4, 5];

    function handleOptionClick(num) {
        if(option === num) {
            setOption(null);
        } else {
            setError(false);
            setOption(num);
        }
    }

    function handleSubmit() {
        if(option === null) {
            setError(true);
        } else {
            setSubmitted(true);
        }
    }

    return (
        <div className={`max-w-[410px] min-w-[250px] h-[415px] bg-gradient-to-b from-dark-blue-1 to-dark-blue-2 text-white flex flex-col gap-[30px] rounded-[30px] ${isSubmitted ? 'py-11 px-9 max-[400px]:p-9 items-center' : 'p-8 max-[500px]:p-6'}`}>
            {isSubmitted ? (
                <>
                    <div className="">
                        <img src={illustration} alt="illustration thank you image" />
                    </div>
                    <Selection option={option} length={options.length} />
                    <Text title="Thank you!" paragraph="We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!" align="center" />
                </>
            ) : (
                <>
                    <div className="w-12 h-12 rounded-full bg-dark-blue-0 flex justify-center items-center">
                        <img src={star} alt="star image" />
                    </div>
                    <Text title="How did we do?" paragraph="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!" />
                    <Options onClick={handleOptionClick} options={options} active={option} error={error} />
                    <Button onClick={handleSubmit} />
                </>
            )}
        </div>
    );
}