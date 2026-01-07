
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  problemsSolved: string[];
  benefits: string[];
}

export interface UseCase {
  id: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  result: string;
  category: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedIn?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
