export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price?: string;
  category: 'Coffee & Drinks' | 'Breakfast' | 'Lunch' | 'Pastries' | 'Sandwiches' | 'Seasonal Specials';
  tags: string[]; // e.g., GF, V, NF
  imageUrl?: string;
  available: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  date: string; // ISO date string
  time: string;
  category: 'Tasting' | 'Live Music' | 'Pop-up' | 'Community';
  description: string;
  imageUrl: string;
  ticketLink?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'Interior' | 'Food' | 'Events' | 'Outdoor' | 'Coffee & Drinks';
  photographer?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}