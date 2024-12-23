"use client"
import quantumLogo from "../assets/images/quantum.svg";
import acmeLogo from "../assets/images/acme-corp.svg";
import echoValleyLogo from "../assets/echo-valley.svg";
import pulseLogo from "../assets/images/pulse.svg";
import outsideLogo from "../assets/images/outside.svg";
import apexLogo from "../assets/images/apex.svg";
import celestialLogo from "../assets/images/celestial.svg";
import twiceLogo from "../assets/images/twice.svg";
import Image from "next/image";
const logos = [
    { name: "Quantum", image: quantumLogo },
    { name: "Acme Corp", image: acmeLogo },
    { name: "Echo Valley", image: echoValleyLogo },
    { name: "Pulse", image: pulseLogo },
    { name: "Outside", image: outsideLogo },
    { name: "Apex", image: apexLogo },
    { name: "Celestial", image: celestialLogo },
    { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
    return<section className="py-24 overflow-x-clip" >
        <div className="container">
        <h3 className="text-center text-white/50 text-xl">Already choosen by these market leaders</h3>
        <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,_transparent,_black_10%,_black_90%,_transparent)]">
            <div className="flex gap-24 pr-24">
                {logos.map((logo)=>(
                    <Image src={logo.image} key={logo.name} alt={logo.name}/>
                ))} 
            </div>
        </div>
        </div>
    </section>
}