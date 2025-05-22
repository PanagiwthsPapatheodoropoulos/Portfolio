import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

