"use client"
import Button from "../components/Button";
import designExample1 from "../assets/images/design-example-1.png"
import designExample2 from "../assets/images/design-example-2.png"
import Image from "next/image";
import Pointer from "../components/Pointer";
export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container relative">
        <div className="absolute -left-60 top-16 hidden lg:block">
            <Image src={designExample1} alt="design example 1"/>
        </div>
        <div className="absolute -right-96 -top-28 hidden lg:block">
            <Image src={designExample2} alt="design example 2"/>
        </div>
        <div className="absolute left-56 top-96 hidden lg:block">
            <Pointer name="Andrea"/>
        </div>
        <div className="absolute right-80 -top-4 hidden lg:block">
            <Pointer name="Baddie" colour="red"/>
        </div>
        <div className="flex justify-center">
        <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">✨ $7.5 seed round raised</div>
        </div>
        <h1 className="text-5xl md:text-7xl font-medium text-center mt-6 lg:text-8xl">Impactful design,created   effortlessly</h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl  mx-auto">
          Design tools should not slow you down. Layers combines powerful features
          with an intuitive interface that keeps you in your creative flow
        </p>
        
        <form className="flex justify-between border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto ">
            <input type="email" placeholder="enter your email" className="bg-transparent px-4 w-full rounded-full "/>
            <Button variant="primary" size="sm" type="submit" className="whitespace-nowrap">Sign Up </Button>
        </form>
      </div>
    </section>
  );
}
