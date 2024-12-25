"use client"
import Button from "../components/Button";
import designExample1 from "../assets/images/design-example-1.png"
import designExample2 from "../assets/images/design-example-2.png"
import cursor from "../assets/images/cursor.svg"
import Image from "next/image";
import Pointer from "../components/Pointer";
import { AnimatePresence,motion ,useAnimate} from "framer-motion";
import { useEffect } from "react";
export default function Hero() {
  const[leftDesignScope,leftDesignAnimate]=useAnimate();
  const [leftPointerScope,leftPointerAnimate]=useAnimate();
  const[rightDesignScope,rightDesignAnimate]=useAnimate();
  const [rightPointerScope,rightPointerAnimate]=useAnimate();


  useEffect(()=>{
    leftDesignAnimate([
      [leftDesignScope.current,{opacity:1},{duration:0.5}],
      [leftDesignScope.current,{y:0,x:0},{duration:0.5}]
    ]);
    leftPointerAnimate([
      [leftPointerScope.current,{opacity:1},{duration:0.5}],
      [leftPointerScope.current,{y:0,x:-100},{duration:0.5}],
      [leftPointerScope.current,{x:0,y:[0,16,0]} ,{duration:0.5,ease:"easeInOut"}]
    ]);
    rightDesignAnimate([
      [rightDesignScope.current,{opacity:1},{duration:0.5, delay:1.5}],
      [rightDesignScope.current,{x:0,y:0},{duration:0.5}]
    ]);
    rightPointerAnimate([
      [rightPointerScope.current,{opacity:1},{duration:0.5, delay:1.5}],
      [rightPointerScope.current,{x:175,y:0},{duration:0.5}],
      [rightPointerScope.current,{x:0,y:[0,10,0]},{duration:0.5}]
    ])
  },[])
  return (
    <section className="py-24 overflow-x-clip" style={{
      cursor:`url(${cursor.src}), auto`
    }}>
      <div className="container relative">
        <motion.div ref={leftDesignScope} drag initial={{opacity:0,y:100,x:-100}} className="absolute -left-60 top-16 hidden lg:block">
            <Image draggable="false" src={designExample1} alt="design example 1"/>
        </motion.div>
        <motion.div ref={leftPointerScope} initial={{opacity:0,y:200,x:-300}}  className="absolute left-56 top-96 hidden lg:block">
            <Pointer name="Andrea"/>
        </motion.div>
        <motion.div ref={rightDesignScope} drag initial={{opacity:0 ,x:100,y:100}} className="absolute -right-96 -top-28 hidden lg:block">
            <Image draggable="false" src={designExample2} alt="design example 2"/>
        </motion.div>
        <motion.div ref={rightPointerScope} initial={{opacity:0,x:475,y:300}} className="absolute right-80 -top-4 hidden lg:block">
            <Pointer name="Baddie" colour="red"/>
        </motion.div>
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
