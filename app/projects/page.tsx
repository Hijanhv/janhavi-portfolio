import { projects } from '@/data/projects';
import { Github, ExternalLink, Filter } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  const categories = ['All', 'Web3', 'Full-Stack', 'Backend', 'Frontend', 'dApp', 'AI'];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 bg-neon-cyan px-4 py-2 border-4 border-black">
              <Filter className="w-5 h-5 text-black" />
              <span className="text-black font-bold uppercase text-sm">My Work</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-white">ALL</span> <span className="neon-text-purple">PROJECTS</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl border-l-4 border-neon-green pl-4">
            A collection of my work spanning full-stack applications, blockchain dApps, 
            microservices, and innovative solutions built for hackathons and personal exploration.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className="brutalist-button bg-transparent text-neon-cyan border-neon-cyan hover:bg-neon-cyan hover:text-black text-sm"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colors = ['purple', 'cyan', 'green', 'pink'];
            const color = colors[index % colors.length];
            
            return (
              <div key={project.id} className={`brutalist-card neon-border-${color} h-full flex flex-col`}>
                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className={`text-3xl font-bold text-neon-${color} uppercase`}>
                      {project.name}
                    </h2>
                    {project.featured && (
                      <span className="px-2 py-1 bg-neon-yellow text-black text-xs font-bold uppercase">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.category.map((cat) => (
                      <span 
                        key={cat}
                        className={`px-2 py-1 border border-neon-${color} text-neon-${color} text-xs uppercase font-bold`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500 uppercase mb-2 font-bold">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-dark-bg border border-gray-600 text-xs uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 brutalist-button bg-transparent text-neon-${color} border-neon-${color} hover:bg-neon-${color} hover:text-black flex items-center justify-center gap-2 text-sm`}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 brutalist-button bg-neon-green text-black hover:bg-neon-purple flex items-center justify-center gap-2 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="brutalist-card neon-border-cyan inline-block">
            <p className="text-xl mb-4 text-gray-300">
              Want to see more or collaborate on a project?
            </p>
            <Link
              href="/connect"
              className="brutalist-button bg-neon-cyan text-black hover:bg-neon-purple hover:text-white"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
