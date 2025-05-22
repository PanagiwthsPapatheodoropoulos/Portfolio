"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Hi,  I&apos;m Panagiotis Papatheodoropoulos</h1>
          <p className="text-xl md:text-2xl mb-8">A passionate developer creating amazing digital experiences</p>
          <Button size="lg" asChild variant="outline"  className="bg-transparent text-white hover:bg-blue-400 hover:text-black transition-colors duration-300">
            <a href="#projects">
              View My Work <ArrowRight className="ml-2" />
            </a>
          </Button>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 flex justify-end ml-8" 
        >

        <div className="w-[500px] h-[500px] overflow-hidden rounded-[30px] "> 
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/gojo.gif`}
            alt="Animated GIF"
            width={450} 
            height={450} 
            className="object-cover border-2 border-white/10 transition-transform duration-300 hover:scale-105" 
          />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero

