import Link from 'next/link';
import { personalInfo } from '@/data/info';
import { getFeaturedProjects } from '@/data/projects';
import { skills } from '@/data/skills';
import { ArrowRight, Code2, Sparkles, Zap } from 'lucide-react';

export default function Home() {
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <div className="relative">
      {/* Hero Section - Neon Brutalism */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 border-4 border-neon-purple rotate-12 animate-pulse-neon"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 border-4 border-neon-cyan -rotate-12 animate-pulse-neon"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Main Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <div className="flex items-center gap-2 bg-neon-purple px-4 py-2 border-4 border-black">
                  <Sparkles className="w-5 h-5 text-black" />
                  <span className="text-black font-bold uppercase text-sm">Available for Work</span>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-bold leading-none">
                  <span className="block text-white">JANHAVI</span>
                  <span className="block neon-text-purple">CHAVADA</span>
                </h1>
                
                <div className="space-y-2">
                  <p className="text-2xl md:text-3xl text-neon-cyan font-bold uppercase">
                    Full Stack Developer
                  </p>
                  <p className="text-lg text-gray-300">
                    {personalInfo.education} @ {personalInfo.university}
                  </p>
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Batch {personalInfo.batch}
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-300 max-w-xl leading-relaxed border-l-4 border-neon-green pl-4">
                {personalInfo.bio}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/projects"
                  className="brutalist-button bg-neon-cyan text-black hover:bg-neon-purple hover:text-white flex items-center gap-2"
                >
                  View Projects
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link 
                  href="/resume"
                  className="brutalist-button bg-transparent text-neon-pink border-neon-pink hover:bg-neon-pink hover:text-black"
                >
                  Download Resume
                </Link>
                
                <Link 
                  href="/connect"
                  className="brutalist-button bg-transparent text-neon-green border-neon-green hover:bg-neon-green hover:text-black"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Right Side - Featured Stats */}
            <div className="space-y-6">
              <div className="brutalist-card neon-border-purple">
                <div className="flex items-center gap-4 mb-4">
                  <Code2 className="w-8 h-8 text-neon-purple" />
                  <h3 className="text-2xl font-bold text-neon-purple uppercase">Quick Stats</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 border-2 border-neon-cyan">
                    <div className="text-4xl font-bold text-neon-cyan">50+</div>
                    <div className="text-sm text-gray-400 uppercase">Repositories</div>
                  </div>
                  <div className="text-center p-4 border-2 border-neon-green">
                    <div className="text-4xl font-bold text-neon-green">10+</div>
                    <div className="text-sm text-gray-400 uppercase">Languages</div>
                  </div>
                  <div className="text-center p-4 border-2 border-neon-pink">
                    <div className="text-4xl font-bold text-neon-pink">Web3</div>
                    <div className="text-sm text-gray-400 uppercase">Focused</div>
                  </div>
                  <div className="text-center p-4 border-2 border-neon-yellow">
                    <div className="text-4xl font-bold text-neon-yellow">∞</div>
                    <div className="text-sm text-gray-400 uppercase">Learning</div>
                  </div>
                </div>
              </div>

              <div className="brutalist-card neon-border-cyan">
                <div className="flex items-center gap-4 mb-4">
                  <Zap className="w-8 h-8 text-neon-cyan" />
                  <h3 className="text-2xl font-bold text-neon-cyan uppercase">Core Focus</h3>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-neon-purple/10 border-l-4 border-neon-purple">
                    <p className="font-bold text-neon-purple">Full-Stack Development</p>
                  </div>
                  <div className="p-3 bg-neon-cyan/10 border-l-4 border-neon-cyan">
                    <p className="font-bold text-neon-cyan">Web3 & Blockchain</p>
                  </div>
                  <div className="p-3 bg-neon-green/10 border-l-4 border-neon-green">
                    <p className="font-bold text-neon-green">Real-time Systems</p>
                  </div>
                  <div className="p-3 bg-neon-pink/10 border-l-4 border-neon-pink">
                    <p className="font-bold text-neon-pink">Microservices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-dark-card border-y-4 border-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 text-center">
            <span className="neon-text-cyan">TECH</span> <span className="text-white">STACK</span>
          </h2>

          <div className="grid gap-8">
            {/* Languages */}
            <div className="brutalist-card neon-border-purple">
              <h3 className="text-2xl font-bold text-neon-purple mb-6 uppercase flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-purple animate-pulse-neon"></div>
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.filter(s => s.category === 'language').map((skill) => (
                  <div 
                    key={skill.name}
                    className={`px-4 py-2 border-2 border-${skill.color} bg-${skill.color}/10 font-bold uppercase text-sm hover:bg-${skill.color} hover:text-black transition-all duration-200`}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="brutalist-card neon-border-cyan">
              <h3 className="text-2xl font-bold text-neon-cyan mb-6 uppercase flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-cyan animate-pulse-neon"></div>
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.filter(s => s.category === 'framework').map((skill) => (
                  <div 
                    key={skill.name}
                    className={`px-4 py-2 border-2 border-${skill.color} bg-${skill.color}/10 font-bold uppercase text-sm hover:bg-${skill.color} hover:text-black transition-all duration-200`}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Blockchain & Web3 */}
            <div className="brutalist-card neon-border-green">
              <h3 className="text-2xl font-bold text-neon-green mb-6 uppercase flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-green animate-pulse-neon"></div>
                Blockchain & Web3
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.filter(s => s.category === 'blockchain').map((skill) => (
                  <div 
                    key={skill.name}
                    className={`px-4 py-2 border-2 border-${skill.color} bg-${skill.color}/10 font-bold uppercase text-sm hover:bg-${skill.color} hover:text-black transition-all duration-200`}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="brutalist-card neon-border-pink">
              <h3 className="text-2xl font-bold text-neon-pink mb-6 uppercase flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-pink animate-pulse-neon"></div>
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.filter(s => s.category === 'tool').map((skill) => (
                  <div 
                    key={skill.name}
                    className={`px-4 py-2 border-2 border-${skill.color} bg-${skill.color}/10 font-bold uppercase text-sm hover:bg-${skill.color} hover:text-black transition-all duration-200`}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-5xl md:text-7xl font-bold">
              <span className="text-white">FEATURED</span> <span className="neon-text-purple">WORK</span>
            </h2>
            <Link 
              href="/projects"
              className="brutalist-button bg-neon-purple text-black hover:bg-neon-cyan"
            >
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => {
              const colors = ['purple', 'cyan', 'green'];
              const color = colors[index % colors.length];
              
              return (
                <div key={project.id} className={`brutalist-card neon-border-${color}`}>
                  <div className="space-y-4">
                    <h3 className={`text-2xl font-bold text-neon-${color} uppercase`}>
                      {project.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-dark-bg border border-gray-600 text-xs uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-neon-${color} hover:underline font-bold uppercase text-sm`}
                    >
                      View on GitHub →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
