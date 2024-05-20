import React from "react";
import { useState } from "react";
import Text from "./Text";
import Options from "./Options";
import Button from "./Button";
import Image from "./Image";
import Selection from "./Selection";

export default function Rating() {
    const [option, setOption] = useState(null);
    const [isSubmitted, setSubmitted] = useState(false);

    return (
        <div className="w-[410px] h-[415px] bg-gradient-to-b from-darkBlue1 to-darkBlue2 rounded-[30px] flex flex-col gap-[30px] p-8 text-white">
            {isSubmitted ? (
                <>
                    <Image />
                    <Selection />
                    <Text />
                </>
            ) : (
                <>
                    <img />
                    <Text />
                    <Options />
                    <Button />
                </>
            )}
        </div>
    );
}