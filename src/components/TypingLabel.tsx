import { useEffect, useRef } from "react";
import sleep from "../util/sleep";
import { TYPING_DELAY, TYPING_SPEED } from "../data/home";

interface Props {
    className?: string;
    words: string[];
}

export default function TypingLabel({ className, words }: Props) {
    const labelRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        // make it delete the current text letter-by-letter, and type the next one
        let animate = true;
        async function startAnim() {
            if (!labelRef.current) return;
            labelRef.current.textContent = "";

            let i = 0; // current word
            let j = 0; // current character

            while (animate) {
                if (!labelRef.current) continue;

                // Type the letter
                const nextLetter = words[j][i];
                if (nextLetter === undefined) {
                    await sleep(TYPING_DELAY);
                    while (i > 0 && animate) {
                        i--;
                        labelRef.current.textContent =
                            labelRef.current.textContent.slice(0, -1);
                        await sleep(TYPING_SPEED);
                    }

                    j++;
                    if (j > words.length - 1) {
                        j = 0;
                    }
                } else {
                    labelRef.current.textContent += nextLetter;
                    i++;
                }

                await sleep(TYPING_SPEED);
            }
        }

        startAnim();
        return () => {
            animate = false;
        };
    });

    return <span className={className} ref={labelRef}></span>;
}
