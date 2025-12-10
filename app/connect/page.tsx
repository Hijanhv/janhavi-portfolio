import { socials, personalInfo } from '@/data/info';
import { Mail, Send, Heart } from 'lucide-react';

export default function ConnectPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 bg-neon-green px-4 py-2 border-4 border-black">
              <Heart className="w-5 h-5 text-black" />
              <span className="text-black font-bold uppercase text-sm">Let's Connect</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="neon-text-pink">GET IN</span> <span className="text-white">TOUCH</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl border-l-4 border-neon-cyan pl-4">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Feel free to reach out through any of the platforms below!
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {socials.map((social, index) => {
            const colors = ['purple', 'cyan', 'green', 'pink', 'yellow'];
            const color = colors[index % colors.length];
            
            return (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith('mailto:') ? '_self' : '_blank'}
                rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className={`brutalist-card neon-border-${color} hover:scale-105 transition-transform duration-200`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 border-4 border-neon-${color} bg-neon-${color}/10 flex items-center justify-center`}>
                    <span className={`text-3xl text-neon-${color} font-bold`}>
                      {social.name[0]}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold text-neon-${color} uppercase mb-1`}>
                      {social.name}
                    </h3>
                    <p className="text-sm text-gray-400 break-all">
                      {social.url.replace('https://', '').replace('mailto:', '')}
                    </p>
                  </div>

                  <Send className={`w-6 h-6 text-neon-${color}`} />
                </div>
              </a>
            );
          })}
        </div>

        {/* Email CTA */}
        <div className="brutalist-card neon-border-cyan mb-12">
          <div className="text-center">
            <Mail className="w-16 h-16 text-neon-cyan mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-neon-cyan uppercase mb-4">
              Prefer Email?
            </h2>
            <p className="text-gray-300 mb-6">
              Send me a message directly at
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="brutalist-button bg-neon-cyan text-black hover:bg-neon-purple hover:text-white inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Quick Info */}
          <div className="brutalist-card neon-border-purple">
            <h3 className="text-2xl font-bold text-neon-purple uppercase mb-4">Quick Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-neon-purple mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-white">Location</p>
                  <p className="text-sm">Based in India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-neon-purple mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-white">Availability</p>
                  <p className="text-sm">Open for freelance & full-time opportunities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-neon-purple mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-white">Response Time</p>
                  <p className="text-sm">Usually within 24-48 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* What I'm Looking For */}
          <div className="brutalist-card neon-border-green">
            <h3 className="text-2xl font-bold text-neon-green uppercase mb-4">What I'm Looking For</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-neon-green mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm">Interesting full-stack projects</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-neon-green mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm">Web3 & blockchain opportunities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-neon-green mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm">Open-source collaborations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-neon-green mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm">Hackathon team invitations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 brutalist-card neon-border-pink text-center">
          <p className="text-2xl font-bold text-neon-pink mb-4 uppercase">
            Let's Build Something Amazing Together!
          </p>
          <p className="text-gray-300">
            Whether you have a project in mind, need technical consultation, or just want to chat about tech — 
            I'm always excited to connect with fellow developers and innovators.
          </p>
        </div>
      </div>
    </div>
  );
}
