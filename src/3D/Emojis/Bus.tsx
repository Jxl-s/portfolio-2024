import React from "react";

export function Bus(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" {...props}>
            <g>
                <path fill="#3f3f3f" d="M31 21H45V24H31z"></path>
                <path
                    fill="#d0cfce"
                    d="M18 48h-.085A2.923 2.923 0 0115 45.085v-18.17A2.923 2.923 0 0117.915 24h40.17A2.923 2.923 0 0161 26.915v18.17A2.923 2.923 0 0158.085 48H58"
                ></path>
                <path fill="#61b2e4" d="M15 38H60V47H15z"></path>
                <path fill="#92d3f5" d="M17 27H25V36H17z"></path>
                <path fill="#92d3f5" d="M30 27H37V34H30z"></path>
                <path fill="#92d3f5" d="M40 27H47V34H40z"></path>
                <path fill="#92d3f5" d="M50 27H57V34H50z"></path>
                <path fill="#fff" d="M16 38H21V41H16z"></path>
                <circle cx="54" cy="48" r="4" fill="#d0cfce"></circle>
                <circle cx="22" cy="48" r="4" fill="#d0cfce"></circle>
            </g>
            <g
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            >
                <path d="M50 48L26.121 48"></path>
                <path d="M30.909 24L30.909 21 46 21 46 24"></path>
                <path d="M38.455 21L47 11"></path>
                <circle cx="22" cy="48" r="4"></circle>
                <circle cx="54" cy="48" r="4"></circle>
                <path d="M18 36L25 36 25 27.9"></path>
                <path d="M30.875 34L37 34 37 27.875"></path>
                <path d="M40.875 34L47 34 47 27.875"></path>
                <path d="M50.875 34L57 34 57 27.875"></path>
                <path d="M18 48h-.085A2.923 2.923 0 0115 45.085v-18.17A2.923 2.923 0 0117.915 24h40.17A2.923 2.923 0 0161 26.915v18.17A2.923 2.923 0 0158.085 48H58"></path>
                <path d="M17 41L21 41 21 39"></path>
            </g>
        </svg>
    );
}
