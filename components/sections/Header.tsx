"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 bg-gray-900 bg-opacity-90">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <a
            href="#"
            className="text-xl font-bold text-white hover:text-blue-400 transition-colors duration-300 outline-none"
            style={{
              textShadow: "0 0 5px rgba(59, 130, 246, 0.8), 0 0 10px rgba(59, 130, 246, 0.6), 0 0 15px rgba(59, 130, 246, 0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textShadow = "0 0 10px rgba(59, 130, 246, 1), 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textShadow = "0 0 5px rgba(59, 130, 246, 0.8), 0 0 10px rgba(59, 130, 246, 0.6), 0 0 15px rgba(59, 130, 246, 0.4)";
            }}
          >
            Panagiotis Papatheodoropoulos
          </a>
        </motion.div>
        <div className="hidden md:flex space-x-4">
          {["Home", "Projects", "Skills", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-800 py-2"
        >
          {["Home", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 px-4 text-sm hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  )
}

export default Header

