import { MenuItem, EventItem, GalleryImage, TeamMember } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Catering & Events', path: '/events' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Spike’s Cortado',
    description: 'Double shot of espresso cut with equal parts warm milk. A house staple.',
    price: '$4.50',
    category: 'Coffee & Drinks',
    tags: ['Local Dairy'],
    available: true,
  },
  {
    id: '2',
    name: 'Seasonal Latte',
    description: 'House-made syrup featuring cardamom and orange zest, steamed milk.',
    price: '$6.00',
    category: 'Coffee & Drinks',
    tags: ['Seasonal'],
    available: true,
  },
  {
    id: '3',
    name: 'Union Mill Breakfast Sandwich',
    description: 'Soft scrambled farm eggs, aged cheddar, arugula, house tomato jam on brioche.',
    price: '$11.00',
    category: 'Breakfast',
    tags: ['Vegetarian'],
    available: true,
  },
  {
    id: '4',
    name: 'Heirloom Grain Bowl',
    description: 'Farro, roasted squash, kale, pickled onions, tahini dressing.',
    price: '$14.00',
    category: 'Lunch',
    tags: ['Vegan', 'DF'],
    available: true,
  },
  {
    id: '5',
    name: 'Ricotta Toast',
    description: 'House-whipped ricotta, seasonal fruit compote, mint, sourdough.',
    price: '$9.50',
    category: 'Breakfast',
    tags: ['Vegetarian'],
    available: true,
  },
  {
    id: '6',
    name: 'Turkey & Apple Sandwich',
    description: 'Roasted turkey breast, sliced honeycrisp apple, brie, dijonnaise.',
    price: '$13.50',
    category: 'Sandwiches',
    tags: [],
    available: true,
  },
];

export const EVENTS: EventItem[] = [
  {
    id: 'e1',
    title: 'Origin Food Series: Corn',
    date: '2023-11-15',
    time: '6:00 PM - 9:00 PM',
    category: 'Tasting',
    description: 'An exploration of heritage corn varieties with guest chef Marcus.',
    imageUrl: 'https://picsum.photos/800/600?random=10',
    ticketLink: '#',
  },
  {
    id: 'e2',
    title: 'Friday Night Jazz',
    date: '2023-11-18',
    time: '7:00 PM - 10:00 PM',
    category: 'Live Music',
    description: 'Local trio playing standards in the main hall. No cover.',
    imageUrl: 'https://picsum.photos/800/600?random=11',
  },
  {
    id: 'e3',
    title: 'Sourdough Workshop',
    date: '2023-11-25',
    time: '10:00 AM - 1:00 PM',
    category: 'Community',
    description: 'Learn the basics of maintaining a starter and baking your first loaf.',
    imageUrl: 'https://picsum.photos/800/600?random=12',
    ticketLink: '#',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'g1', src: 'https://picsum.photos/800/600?random=101', alt: 'Latte art', category: 'Coffee & Drinks' },
  { id: 'g2', src: 'https://picsum.photos/800/1000?random=102', alt: 'Interior main hall', category: 'Interior' },
  { id: 'g3', src: 'https://picsum.photos/800/600?random=103', alt: 'Wedding setup', category: 'Events' },
  { id: 'g4', src: 'https://picsum.photos/800/800?random=104', alt: 'Pastry case', category: 'Food' },
  { id: 'g5', src: 'https://picsum.photos/800/600?random=105', alt: 'Courtyard seating', category: 'Outdoor' },
  { id: 'g6', src: 'https://picsum.photos/800/1000?random=106', alt: 'Pour over brewing', category: 'Coffee & Drinks' },
];

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Head Roaster',
    bio: 'Sarah has been sourcing and roasting beans for over 15 years, focusing on sustainable partnerships.',
    imageUrl: 'https://picsum.photos/400/400?random=50',
  },
  {
    id: 't2',
    name: 'David Chen',
    role: 'Executive Chef',
    bio: 'Bringing farm-to-table experience from top kitchens to our humble cafe menu.',
    imageUrl: 'https://picsum.photos/400/400?random=51',
  },
];

export const POPULAR_TIMES_DATA = [
  { name: '8am', visitors: 45 },
  { name: '9am', visitors: 80 },
  { name: '10am', visitors: 65 },
  { name: '11am', visitors: 50 },
  { name: '12pm', visitors: 90 },
  { name: '1pm', visitors: 70 },
  { name: '2pm', visitors: 40 },
  { name: '3pm', visitors: 20 },
];
