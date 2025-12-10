import Link from 'next/link';
import { Github, Heart } from 'lucide-react';
import { personalInfo } from '@/data/info';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card border-t-4 border-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-3xl font-bold inline-block mb-4">
              <span className="text-white">JAN</span>
              <span className="neon-text-purple">HAVI</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Full Stack Developer & Web3 Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-neon-cyan uppercase mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-neon-cyan transition-colors text-sm">
                Home
              </Link>
              <Link href="/projects" className="block text-gray-400 hover:text-neon-cyan transition-colors text-sm">
                Projects
              </Link>
              <Link href="/resume" className="block text-gray-400 hover:text-neon-cyan transition-colors text-sm">
                Resume
              </Link>
              <Link href="/connect" className="block text-gray-400 hover:text-neon-cyan transition-colors text-sm">
                Connect
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold text-neon-green uppercase mb-4">Connect</h3>
            <div className="space-y-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-neon-green transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://linktr.ee/findjanhv"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-neon-green transition-colors text-sm"
              >
                Linktree
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-gray-400 hover:text-neon-green transition-colors text-sm"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-neon-pink fill-neon-pink" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
