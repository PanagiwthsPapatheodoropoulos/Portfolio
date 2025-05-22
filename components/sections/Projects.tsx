"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const projects = [
  {
    title: "NLP Chatbot",
    description: "A chatbot built using NLP techniques.",
    technologies: ["Python", "NLTK", "TKinter"],
    githubLink: "https://github.com/PanagiwthsPapatheodoropoulos/nlp_chatbot",
  },
  {
    title: "AI Chess Engine",
    description: "An AI chess engine built using Java and JavaFX",
    technologies: ["Java", "JavaFX"],
    githubLink: "https://github.com/PanagiwthsPapatheodoropoulos/AI-ChessEngine"
  },

  {
    title: "3D Rendering Engine",
    description: "A 3D rendering engine built using SDL2",
    technologies: ["C++", "SDL2"],
    githubLink: "https://github.com/PanagiwthsPapatheodoropoulos/3D_Rendering_Engine"
  },

  {
    title: "FullStack Web Application",
    description: "Employee management system for a company",
    technologies: ["React.js", "Tailwind CSS","Java","Springboot","PostgreSQL","Typescript","RestAPI"],
    githublink: "https://github.com/PanagiwthsPapatheodoropoulos/FullStack-Cite"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button asChild variant="outline">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

