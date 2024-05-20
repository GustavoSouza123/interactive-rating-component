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
        <div className="">
            {isSubmitted ? (
                <>
                    <Image />
                    <Selection />
                    <Text />
                </>
            ) : (
                <>
                    <Text />
                    <Options />
                    <Button />
                </>
            )}
        </div>
    );
}