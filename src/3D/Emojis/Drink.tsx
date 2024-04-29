import React from "react";

export function Drink(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" {...props}>
            <g>
                <path
                    fill="#fff"
                    d="M18.933 21.376L52.9693 21.495 46.9395 65.7271 25.9937 65.5684 18.933 21.376z"
                ></path>
                <path
                    fill="#d22f27"
                    d="M49.9235 50.25L51.9 35.85 20.4 35.85 22.6588 50.25 49.9235 50.25z"
                ></path>
            </g>
            <g fill="none" stroke="#000" strokeWidth="2">
                <path
                    strokeMiterlimit="10"
                    d="M49.9235 50.25L51.9 35.85 20.4 35.85 22.6588 50.25 49.9235 50.25z"
                ></path>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M54 20.55L47.7 66.45 25.2 66.45 18 20.55"
                ></path>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 20.55L54 20.55"
                ></path>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M36 5L36 17"
                ></path>
            </g>
        </svg>
    );
}
