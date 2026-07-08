export type TabType =
  | "home"
  | "about"
  | "services"
  | "portfolio"
  | "crm"
  | "contact"
  | "ai-advisor"
  | "admin";

export interface PortfolioItem {
  id: string;
  title: string;
  category: "web" | "mobile" | "crm";
  techStack: string[];
  description: string;
  image: string;
  features: string[];
  duration: string;
  client: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  image: string;
}

export interface QuoteRequest {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceType: "web" | "mobile" | "crm" | "security" | "other";
  budget: string;
  deadline: string;
  requirements: string;
  status: "Pending" | "Contacted" | "Completed";
  date: string;
}

export interface ContactInquiry {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  status: "Pending" | "Contacted" | "Completed";
  date: string;
  newsletter: boolean;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  features: string[];
  pricing: string;
}
