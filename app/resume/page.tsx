import { personalInfo } from '@/data/info';
import { Download, GraduationCap, Briefcase, Code2, Award } from 'lucide-react';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header with Download Button */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 bg-neon-purple px-4 py-2 border-4 border-black">
                <Briefcase className="w-5 h-5 text-black" />
                <span className="text-black font-bold uppercase text-sm">Resume</span>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="neon-text-cyan">MY</span> <span className="text-white">RESUME</span>
            </h1>
          </div>

          <a
            href="/Janhavi-Chavada-Resume.pdf"
            download
            className="brutalist-button bg-neon-green text-black hover:bg-neon-purple hover:text-white flex items-center gap-3 whitespace-nowrap"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </a>
        </div>

        {/* Personal Info */}
        <div className="brutalist-card neon-border-purple mb-8">
          <h2 className="text-4xl font-bold text-neon-purple uppercase mb-4">
            {personalInfo.name}
          </h2>
          <p className="text-2xl text-neon-cyan font-bold mb-2">{personalInfo.role}</p>
          <div className="space-y-1 text-gray-300">
            <p>{personalInfo.email}</p>
            <p>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neon-cyan hover:underline"
              >
                {personalInfo.github}
              </a>
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="brutalist-card neon-border-cyan mb-8">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-neon-cyan" />
            <h2 className="text-3xl font-bold text-neon-cyan uppercase">Education</h2>
          </div>
          
          <div className="border-l-4 border-neon-cyan pl-6">
            <h3 className="text-2xl font-bold text-white mb-2">{personalInfo.education}</h3>
            <p className="text-xl text-neon-cyan mb-1">{personalInfo.university}</p>
            <p className="text-gray-400">{personalInfo.batch}</p>
          </div>
        </div>

        {/* Skills */}
        <div className="brutalist-card neon-border-green mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-8 h-8 text-neon-green" />
            <h2 className="text-3xl font-bold text-neon-green uppercase">Technical Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-neon-purple mb-3 uppercase">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'Solidity', 'Python', 'Go', 'Rust', 'HTML', 'CSS'].map((lang) => (
                  <span key={lang} className="px-3 py-1 bg-dark-bg border-2 border-neon-purple text-neon-purple uppercase text-sm font-bold">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-neon-cyan mb-3 uppercase">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'Express', 'Socket.io', 'MongoDB', 'Git', 'Docker'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-dark-bg border-2 border-neon-cyan text-neon-cyan uppercase text-sm font-bold">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-neon-green mb-3 uppercase">Blockchain & Web3</h3>
              <div className="flex flex-wrap gap-2">
                {['Solana', 'Ethereum', 'Web3.js', 'Smart Contracts', 'DeFi'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-dark-bg border-2 border-neon-green text-neon-green uppercase text-sm font-bold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-neon-pink mb-3 uppercase">Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {['Full-Stack Dev', 'Microservices', 'Real-time Systems', 'API Design'].map((spec) => (
                  <span key={spec} className="px-3 py-1 bg-dark-bg border-2 border-neon-pink text-neon-pink uppercase text-sm font-bold">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Projects */}
        <div className="brutalist-card neon-border-pink mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-8 h-8 text-neon-pink" />
            <h2 className="text-3xl font-bold text-neon-pink uppercase">Featured Projects</h2>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-4 border-neon-purple pl-6">
              <h3 className="text-2xl font-bold text-white mb-2">Chatify</h3>
              <p className="text-gray-300 mb-2">
                Full-stack real-time chat application with JWT authentication, Socket.io, React, and MongoDB. 
                Features instant messaging, user authentication, and persistent chat history.
              </p>
              <p className="text-sm text-neon-purple font-bold uppercase">React • Node.js • Socket.io • MongoDB</p>
            </div>

            <div className="border-l-4 border-neon-cyan pl-6">
              <h3 className="text-2xl font-bold text-white mb-2">Solscan Enhanced</h3>
              <p className="text-gray-300 mb-2">
                Modern remake of Solscan with enhanced UX, wallet tracking, smart alerts, and behavioral insights 
                for Solana blockchain analysis.
              </p>
              <p className="text-sm text-neon-cyan font-bold uppercase">JavaScript • Solana • Web3 • Blockchain</p>
            </div>

            <div className="border-l-4 border-neon-green pl-6">
              <h3 className="text-2xl font-bold text-white mb-2">Phantom Lottery</h3>
              <p className="text-gray-300 mb-2">
                Decentralized lottery dApp on Solana with Phantom wallet integration, 
                enabling provably fair lottery participation on blockchain.
              </p>
              <p className="text-sm text-neon-green font-bold uppercase">TypeScript • Solana • Rust • Web3.js</p>
            </div>

            <div className="border-l-4 border-neon-yellow pl-6">
              <h3 className="text-2xl font-bold text-white mb-2">Mortgage Microservices</h3>
              <p className="text-gray-300 mb-2">
                Scalable mortgage loan processing system built with microservices architecture, 
                handling applications, verification, and approval workflows.
              </p>
              <p className="text-sm text-neon-yellow font-bold uppercase">Node.js • Microservices • REST API</p>
            </div>

            <div className="border-l-4 border-neon-pink pl-6">
              <h3 className="text-2xl font-bold text-white mb-2">VolatilityFeeHook</h3>
              <p className="text-gray-300 mb-2">
                Smart contract implementing dynamic fee structures based on market volatility 
                for DeFi protocols.
              </p>
              <p className="text-sm text-neon-pink font-bold uppercase">Solidity • Ethereum • Smart Contracts</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t-2 border-gray-700">
            <Link 
              href="/projects"
              className="text-neon-cyan hover:underline font-bold uppercase flex items-center gap-2"
            >
              View All Projects →
            </Link>
          </div>
        </div>

        {/* Achievements */}
        <div className="brutalist-card neon-border-yellow mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-neon-yellow" />
            <h2 className="text-3xl font-bold text-neon-yellow uppercase">Achievements & Activities</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-neon-green mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-white font-bold">GitHub Developer Program Member</p>
                <p className="text-gray-400 text-sm">Active contributor to open-source projects</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-neon-cyan mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-white font-bold">50+ Public Repositories</p>
                <p className="text-gray-400 text-sm">Diverse projects spanning web development and blockchain</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-neon-purple mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-white font-bold">Hackathon Participant</p>
                <p className="text-gray-400 text-sm">Building innovative solutions under pressure</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-neon-pink mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-white font-bold">Continuous Learner</p>
                <p className="text-gray-400 text-sm">Exploring new technologies and best practices</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="brutalist-card neon-border-cyan text-center">
          <p className="text-xl mb-4 text-gray-300">
            Interested in working together?
          </p>
          <Link
            href="/connect"
            className="brutalist-button bg-neon-cyan text-black hover:bg-neon-purple hover:text-white"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
