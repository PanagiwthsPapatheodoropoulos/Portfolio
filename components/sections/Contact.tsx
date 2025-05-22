"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact Me</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-6"
        >
          <Button asChild size="lg" variant= "outline" className="bg-transparent text-white hover:bg-blue-400 hover:text-black transition-colors duration-300">
            <a href="mailto:panagiwthspapathe@gmail.com">
              <Mail className="mr-2 h-5 w-5" /> Email Me
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent text-white hover:bg-blue-400 hover:text-black transition-colors duration-300">
            <a
              href="https://www.linkedin.com/in/panagiotis-papatheodoropoulos-718296338/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" /> Connect on LinkedIn
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

