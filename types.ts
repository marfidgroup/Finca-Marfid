
export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  category: 'cacao' | 'ganado';
  title: string;
}

export interface NavLink {
  label: string;
  href: string;
}
