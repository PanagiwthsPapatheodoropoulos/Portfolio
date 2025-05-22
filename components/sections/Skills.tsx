"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"



const skills = [
  { name: "Java", logo: `/java-logo.png` },
  { name: "C", logo: `/c-logo.png` },
  { name: "C++", logo: `/cpp-logo.png` },
  { name: "Python", logo: `/python-logo.png` },
  { name: "HTML", logo: `/html-logo.png` },
  { name: "CSS", logo: `/css-logo.png` },
  { name: "JavaScript", logo: `/javascript-logo.png` },
  { name: "Next.js", logo: `/nextjs-logo.png` },
  { name: "React", logo: `/react-logo.png` },
  { name: "SQL", logo: `/sql-logo.png` },
  { name: "Tailwind CSS", logo: `/tailwind-logo.png` },
  { name: "Git", logo: `/git-logo-png_seeklogo-297887.png` },
  { name: "GitHub", logo: `/GitHub-Mark-ea2971cee799.png` },
  { name: "NodeJS", logo: `/Node.js_logo.svg.png` },
  { name: "MongoDB", logo: `/mongodb-icon-2.svg` },
  { name: "Bootstrap", logo: `/Bootstrap_logo.svg.png` },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Button
                variant="outline"
                className="w-full h-24 flex flex-col items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Image
                  src={skill.logo || "/placeholder.svg"}
                  alt={skill.name}
                  width={30}
                  height={30}
                  className="mb-2"
                />
                <span>{skill.name}</span>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

