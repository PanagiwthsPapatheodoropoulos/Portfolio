"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const skills = [
  { name: "Java", logo: `${basePath}/java-logo.png` },
  { name: "C", logo: `${basePath}/c-logo.png` },
  { name: "C++", logo: `${basePath}/cpp-logo.png` },
  { name: "Python", logo: `${basePath}/python-logo.png` },
  { name: "HTML", logo: `${basePath}/html-logo.png` },
  { name: "CSS", logo: `${basePath}/css-logo.png` },
  { name: "JavaScript", logo: `${basePath}/javascript-logo.png` },
  { name: "Next.js", logo: `${basePath}/nextjs-logo.png` },
  { name: "React", logo: `${basePath}/react-logo.png` },
  { name: "SQL", logo: `${basePath}/sql-logo.png` },
  { name: "Tailwind CSS", logo: `${basePath}/tailwind-logo.png` },
  { name: "Git", logo: `${basePath}/git-logo-png_seeklogo-297887.png` },
  { name: "GitHub", logo: `${basePath}/GitHub-Mark-ea2971cee799.png` },
  { name: "NodeJS", logo: `${basePath}/Node.js_logo.svg.png` },
  { name: "MongoDB", logo: `${basePath}/mongodb-icon-2.svg` },
  { name: "Bootstrap", logo: `${basePath}/Bootstrap_logo.svg.png` },
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

