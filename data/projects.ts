export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  category: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'chatify',
    name: 'Chatify',
    description: 'Full-stack real-time chat application with JWT authentication, Socket.io, React, and MongoDB. Features instant messaging, user authentication, and persistent chat history.',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'Express'],
    category: ['Full-Stack', 'Real-Time'],
    githubUrl: 'https://github.com/Hijanhv/chatify',
    featured: true,
  },
  {
    id: 'mortgage-microservices',
    name: 'Mortgage Microservices',
    description: 'Scalable mortgage loan processing system built with microservices architecture. Handles loan applications, document verification, and approval workflows.',
    techStack: ['JavaScript', 'Node.js', 'Microservices', 'REST API'],
    category: ['Backend', 'Microservices'],
    githubUrl: 'https://github.com/Hijanhv/mortgage-microservices',
    featured: true,
  },
  {
    id: 'solscan-enhanced',
    name: 'Solscan Enhanced',
    description: 'A smarter, sharper remake of Solscan — rebuilt from scratch with modern UX, wallet tracking, smart alerts, and behavioral insights for Solana blockchain.',
    techStack: ['JavaScript', 'Solana', 'Web3', 'Blockchain'],
    category: ['Web3', 'Frontend'],
    githubUrl: 'https://github.com/Hijanhv/solscan-enhanced',
    featured: true,
  },
  {
    id: 'phantom-lottery',
    name: 'Phantom Lottery',
    description: 'Decentralized lottery dApp built on Solana blockchain. Users can participate in provably fair lotteries using Phantom wallet integration.',
    techStack: ['TypeScript', 'Solana', 'Rust', 'Web3.js', 'Phantom Wallet'],
    category: ['Web3', 'dApp'],
    githubUrl: 'https://github.com/Hijanhv/phantom-lottery',
    featured: true,
  },
  {
    id: 'volatility-fee-hook',
    name: 'VolatilityFeeHook',
    description: 'Smart contract implementing dynamic fee structures based on market volatility. Designed for DeFi protocols to optimize trading fees.',
    techStack: ['Solidity', 'Ethereum', 'Smart Contracts'],
    category: ['Web3', 'Smart Contracts'],
    githubUrl: 'https://github.com/Hijanhv/VolatilityFeeHook',
    featured: true,
  },
  {
    id: 'finguard',
    name: 'FinGuard',
    description: 'AI-powered market surveillance dashboard for real-time financial monitoring, anomaly detection, and risk assessment.',
    techStack: ['JavaScript', 'AI/ML', 'Data Visualization'],
    category: ['AI', 'Frontend'],
    githubUrl: 'https://github.com/Hijanhv/FinGuard',
    featured: false,
  },
  {
    id: 'stride',
    name: 'Stride',
    description: 'TypeScript-based application focused on productivity and task management with modern development practices.',
    techStack: ['TypeScript', 'React', 'Node.js'],
    category: ['Full-Stack'],
    githubUrl: 'https://github.com/Hijanhv/stride',
    featured: false,
  },
  {
    id: 'url-shortener',
    name: 'URL Shortener',
    description: 'Fast and reliable URL shortening service with custom alias support and analytics tracking.',
    techStack: ['JavaScript', 'Node.js', 'MongoDB'],
    category: ['Backend', 'API'],
    githubUrl: 'https://github.com/Hijanhv/URL-Shortener',
    featured: false,
  },
  {
    id: 'medifly',
    name: 'MediFly',
    description: 'Healthcare application streamlining medical services and patient management.',
    techStack: ['JavaScript', 'React', 'Node.js'],
    category: ['Full-Stack', 'Healthcare'],
    githubUrl: 'https://github.com/Hijanhv/MediFly',
    featured: false,
  },
  {
    id: 'veyra',
    name: 'Veyra',
    description: 'Modern TypeScript application with focus on user experience and performance.',
    techStack: ['TypeScript', 'React', 'Next.js'],
    category: ['Frontend'],
    githubUrl: 'https://github.com/Hijanhv/veyra',
    featured: false,
  },
];

export const getProjectsByCategory = (category: string) => {
  return projects.filter(project => project.category.includes(category));
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};
