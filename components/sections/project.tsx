"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { FaChevronRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

type Project = {
  id: number;
  title: string;
  

  description: string;
  image: string;
  color: string;
  textColor: string;
  details: string;
  technologies: string[];
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Generator - ClickCraft",
    
    description: "ClickCraft is a portfolio generator that creates professional portfolios by simply filling out a form with user details and project data.",
    image: "https://files.oaiusercontent.com/file-MuknVwQJgygiCTSFTnNM7u?se=2025-03-02T14%3A51%3A04Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D036f5bdd-4f10-4682-82cf-0a1df1014492.webp&sig=wceY5m9bd2zwZAtLTfQtm%2BvwGz/EyGfvkCiujWB1KPw%3D",
    color: "from-blue-500 to-purple-600",
    textColor: "text-blue-100",
    details: " ClickCraft automatically generates a professionally designed portfolio. The system ensures a seamless and customizable experience, making it easy for individuals to showcase their work without any coding or design expertise. 🚀",
    technologies: ["React", "Tailwind", "MongoDB", "Node.js","Express"],
    github: "https://github.com/mohankumar01012005/S54_Mohan_Kumar_Capstone_ClickCraft",
    live: "https://click-craft.vercel.app/",
    
  },
  {
    id: 2,
    title: "Library Management System ",
    
    description: "Library Management System is a comprehensive tool that streamlines library operations, including book management, user registration, borrowing, and returns.",
    image: "https://files.oaiusercontent.com/file-M3THhWasdJFVQkZYzg6q5R?se=2025-03-02T14%3A49%3A45Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D26da3a4f-2c01-4b59-a952-d5c4b4e807c2.webp&sig=XTDYcAEGMGYaljhmqsS27IRGGNhcFmI67SP/KRMtanI%3D",
    color: "from-green-500 to-yellow-500",
    textColor: "text-green-100",
    details: "The Library Management System is designed to efficiently handle all aspects of a library, from managing books and users to tracking borrow and return transactions. It ensures seamless organization, reduces manual effort, and enhances user experience with an intuitive interface and robust functionalities.",
    technologies: ["Next.js", "TailwindCSS", "Node.js", "Express","MongoDB"],
    github: "https://github.com/mohankumar01012005/Library_Management",
    live: "https://vr-fitness.example.com",
  },
  {
    id: 3,
    title: "Grandmaster Arena ",
    
    description: "Grandmaster Arena is a professional chess game built with HTML, CSS, and JavaScript, offering a smooth and interactive experience for players of all levels.",
    image: "https://files.oaiusercontent.com/file-QULDLC9D9TyvArcLbCg15K?se=2025-03-02T15%3A43%3A45Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D9b13e9f3-c4af-4e69-9fe1-171dfa553ebb.webp&sig=4MzQR6gMqgYCwbuf/ClWb%2Bg6c3UJq0IMksxXsL8cxIY%3D",
    color: "from-red-500 to-pink-600",
    textColor: "text-red-100",
    details: "Grandmaster Arena is a professional and fully functional chess game built using HTML, CSS, and JavaScript. It offers a smooth and interactive experience with a sleek, modern interface suitable for all skill levels. Players can enjoy real-time gameplay, intelligent move suggestions, and a customizable chessboard across multiple devices. Whether you're a beginner or a grandmaster, every match in Grandmaster Arena is a test of strategy and skill.",
    technologies: ["HTML", "CSS", "JS"],
    github: "https://github.com/mohankumar01012005/Grandmaster_Arena",
    live: "https://mohankumar01012005.github.io/Grandmaster_Arena/HomePage/Home.html"
  }
];

export function ProjectSection() {
  // Define selectedProject state to accept Project type or null
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-background to-secondary/30 transition-colors duration-300 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen flex flex-col items-center justify-center"
      >
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-secondary/20 to-background animate-pulse" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            >
              Featured Projects
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Explore a collection of innovative projects that showcase my expertise in cutting-edge web technologies and creative problem-solving.
            </motion.p>
          </div>

          {/* Project Cards */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`bg-gradient-to-br ${project.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                />
                <motion.h3
                  className={`text-2xl font-semibold mt-4 ${project.textColor}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className={`mt-2 ${project.textColor} opacity-90`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="mt-4"
                >
             <div className="flex align-middle">
             <Button 
                    size="lg" 
                    className={`group bg-white/20 hover:bg-white/30 ${project.textColor}`}
                    onClick={() => setSelectedProject(project)} // now works fine
                  >
                    View Details
                    <FaChevronRight className="ml-2 h-4 w-3 transition-transform group-hover:translate-x-1" />
                  </Button>
                  {project.id === 3 && (
  <Button
    asChild
    // variant="outline"
    size="lg" 
    className="{`group bg-white/20 text-white  ml-3 hover:bg-white/30 ${project.textColor}`}"
  >
    <a href="https://www.figma.com/proto/otCCBGNenf7AiPqroQAkfJ/Untitled?t=exB0QwBtRADR3uYy-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&node-id=1-108" target="_blank" rel="noopener noreferrer">
      <FaExternalLinkAlt className="mr-2" />
      View in Figma
    </a>
  </Button>
)}
             </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="mb-4">{selectedProject.details}</p>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Button className="group bg-gray-800 text-white hover:bg-gray-700">
                        <FaGithub className="mr-2" />
                        GitHub
                      </Button>
                    </a>
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                      <Button className="group bg-blue-600 text-white hover:bg-blue-500">
                        <FaExternalLinkAlt className="mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  )
}
