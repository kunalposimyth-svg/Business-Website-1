
import { Service, UseCase, TeamMember, BlogPost, FAQ } from './types';

export const SERVICES: Service[] = [
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Modernizing legacy systems with cutting-edge cloud architecture and AI-driven automation.',
    icon: 'Layers',
    problemsSolved: [
      'Slow manual processes hindering growth',
      'High operational costs of legacy infrastructure',
      'Siloed data preventing informed decision making'
    ],
    benefits: [
      '40% increase in operational efficiency',
      'Real-time data visibility across departments',
      'Reduced maintenance overhead'
    ]
  },
  {
    id: 'strategic-consulting',
    title: 'Strategic Consulting',
    description: 'Data-backed business strategies designed to scale your operations and penetrate new markets.',
    icon: 'Compass',
    problemsSolved: [
      'Stagnant revenue growth',
      'Lack of clear market positioning',
      'Inefficient resource allocation'
    ],
    benefits: [
      'Proven roadmap for scalable growth',
      'Enhanced competitive advantage',
      'Optimized operational expenditure'
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Enterprise Security',
    description: 'Robust, zero-trust security frameworks to protect your most valuable digital assets.',
    icon: 'ShieldCheck',
    problemsSolved: [
      'Vulnerability to modern cyber threats',
      'Complex compliance requirements (GDPR, HIPAA)',
      'Data breach risks in remote environments'
    ],
    benefits: [
      'Continuous threat monitoring and response',
      'Full regulatory compliance readiness',
      'Enhanced customer trust and reputation'
    ]
  }
];

export const PROCESS_STEPS = [
  {
    title: 'Discovery',
    description: 'Deep-dive audit of your current tech stack and business bottlenecks.',
    icon: 'Search'
  },
  {
    title: 'Architecture',
    description: 'Designing a bespoke, modular blueprint tailored for global scale.',
    icon: 'DraftingCompass'
  },
  {
    title: 'Implementation',
    description: 'Agile execution with zero-downtime deployment strategies.',
    icon: 'Cpu'
  },
  {
    title: 'Optimization',
    description: 'Continuous monitoring and refinement using AI-driven insights.',
    icon: 'TrendingUp'
  }
];

export const USE_CASES: UseCase[] = [
  {
    id: 'fintech-scaling',
    title: 'Scaling FinTech Infrastructure',
    client: 'GlobalPay Inc.',
    challenge: 'Managing 10x transaction volume growth without system downtime.',
    solution: 'Implemented a microservices architecture on AWS with automated load balancing.',
    result: 'Zero downtime during peak seasons and 300% faster transaction processing.',
    category: 'Finance',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'health-data-security',
    title: 'Healthcare Data Interoperability',
    client: 'MediCore Systems',
    challenge: 'Securely sharing patient data across disparate hospital networks.',
    solution: 'Developed a blockchain-based secure ledger for patient record tracking.',
    result: 'Reduced data transfer time by 85% while maintaining strict HIPAA compliance.',
    category: 'Healthcare',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Chief Executive Officer',
    bio: 'Former VP of Product at a Fortune 500 company, Sarah brings 20 years of experience in enterprise scaling.',
    imageUrl: 'https://i.pravatar.cc/400?img=32'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Chief Technology Officer',
    bio: 'A pioneer in distributed systems, Marcus leads our engineering team with a focus on resilient architectures.',
    imageUrl: 'https://i.pravatar.cc/400?img=11'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Head of Design',
    bio: 'Elena ensures our enterprise tools are as intuitive as they are powerful, focusing on human-centric UX.',
    imageUrl: 'https://i.pravatar.cc/400?img=47'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ai-in-enterprise',
    title: 'The Real Impact of Generative AI on Enterprise Workflows',
    excerpt: 'How leading companies are moving beyond the hype and implementing AI for tangible ROI.',
    content: 'Full content of the AI article...',
    author: 'Sarah Chen',
    date: 'Oct 12, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    category: 'Innovation'
  },
  {
    id: 'cloud-costs',
    title: 'Optimizing Cloud Expenditure in a Post-Pandemic Economy',
    excerpt: 'Strategies for reducing infrastructure costs without compromising on performance.',
    content: 'Full content of the cloud article...',
    author: 'Marcus Thorne',
    date: 'Sep 28, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    category: 'Engineering'
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'How long does a typical transformation project take?',
    answer: 'Most enterprise-scale digital transformations take between 6 to 18 months, depending on the complexity of legacy systems and the scope of the new architecture.'
  },
  {
    question: 'Do you offer ongoing support after implementation?',
    answer: 'Absolutely. We provide tiered support levels including 24/7 critical response and quarterly strategic reviews to ensure long-term success.'
  },
  {
    question: 'Is Nexus Prime compliant with international data standards?',
    answer: 'Yes, we are fully SOC2 Type II compliant and regularly audit our processes to meet GDPR, HIPAA, and other regional data protection regulations.'
  }
];
