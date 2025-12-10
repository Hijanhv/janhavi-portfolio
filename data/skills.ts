export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'blockchain';
  color: string;
}

export const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', category: 'language', color: 'neon-yellow' },
  { name: 'TypeScript', category: 'language', color: 'neon-cyan' },
  { name: 'Solidity', category: 'language', color: 'neon-purple' },
  { name: 'Python', category: 'language', color: 'neon-green' },
  { name: 'Go', category: 'language', color: 'neon-cyan' },
  { name: 'Rust', category: 'language', color: 'neon-pink' },
  
  // Frameworks & Libraries
  { name: 'React', category: 'framework', color: 'neon-cyan' },
  { name: 'Next.js', category: 'framework', color: 'neon-purple' },
  { name: 'Node.js', category: 'framework', color: 'neon-green' },
  { name: 'Express', category: 'framework', color: 'neon-yellow' },
  { name: 'Socket.io', category: 'framework', color: 'neon-pink' },
  
  // Databases & Tools
  { name: 'MongoDB', category: 'tool', color: 'neon-green' },
  { name: 'Git', category: 'tool', color: 'neon-cyan' },
  { name: 'Docker', category: 'tool', color: 'neon-purple' },
  { name: 'Kubernetes', category: 'tool', color: 'neon-cyan' },
  
  // Blockchain & Web3
  { name: 'Solana', category: 'blockchain', color: 'neon-purple' },
  { name: 'Ethereum', category: 'blockchain', color: 'neon-cyan' },
  { name: 'Web3.js', category: 'blockchain', color: 'neon-pink' },
  { name: 'Smart Contracts', category: 'blockchain', color: 'neon-green' },
];

export const getSkillsByCategory = (category: Skill['category']) => {
  return skills.filter(skill => skill.category === category);
};

export const skillCategories = [
  { name: 'Languages', key: 'language' as const },
  { name: 'Frameworks', key: 'framework' as const },
  { name: 'Tools', key: 'tool' as const },
  { name: 'Blockchain', key: 'blockchain' as const },
];
