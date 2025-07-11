
export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  category: string;
  features: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Laptop Computer 15.6" FHD Display, Intel Core i7, 16GB RAM, 512GB SSD',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop',
    rating: 4.5,
    reviews: 234,
    description: 'High-performance laptop perfect for work and entertainment. Features the latest Intel processor and fast SSD storage.',
    category: 'electronics',
    features: ['Intel Core i7 Processor', '16GB DDR4 RAM', '512GB NVMe SSD', '15.6" FHD Display'],
    inStock: true
  },
  {
    id: '2',
    title: 'Wireless Bluetooth Headphones with Noise Cancelling',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    rating: 4.3,
    reviews: 567,
    description: 'Premium wireless headphones with active noise cancelling technology for immersive audio experience.',
    category: 'electronics',
    features: ['Active Noise Cancelling', '30-hour Battery Life', 'Bluetooth 5.0', 'Premium Sound Quality'],
    inStock: true
  },
  {
    id: '3',
    title: 'Classic Cotton T-Shirt - Comfortable Everyday Wear',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    rating: 4.2,
    reviews: 891,
    description: 'Soft, comfortable cotton t-shirt perfect for casual wear. Available in multiple colors and sizes.',
    category: 'clothing',
    features: ['100% Cotton', 'Pre-shrunk', 'Machine Washable', 'Multiple Colors'],
    inStock: true
  },
  {
    id: '4',
    title: 'The Art of Programming: A Complete Guide',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop',
    rating: 4.7,
    reviews: 156,
    description: 'Comprehensive programming guide covering modern development practices and techniques.',
    category: 'books',
    features: ['500+ Pages', 'Code Examples', 'Expert Tips', 'Latest Techniques'],
    inStock: true
  },
  {
    id: '5',
    title: 'Smart Home Security Camera with Night Vision',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    rating: 4.4,
    reviews: 323,
    description: 'Advanced security camera with HD recording, night vision, and smartphone app integration.',
    category: 'electronics',
    features: ['1080p HD Recording', 'Night Vision', 'Mobile App', 'Motion Detection'],
    inStock: true
  },
  {
    id: '6',
    title: 'Indoor Plant Collection - Set of 3 Low-Maintenance Plants',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
    rating: 4.6,
    reviews: 445,
    description: 'Beautiful collection of indoor plants perfect for home decoration and air purification.',
    category: 'home',
    features: ['Low Maintenance', 'Air Purifying', 'Decorative Pots Included', 'Care Instructions'],
    inStock: true
  },
  {
    id: '7',
    title: 'Premium Yoga Mat with Alignment Lines',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop',
    rating: 4.5,
    reviews: 678,
    description: 'High-quality yoga mat with alignment guides, perfect for beginners and experienced practitioners.',
    category: 'sports',
    features: ['Non-slip Surface', 'Alignment Lines', 'Eco-friendly Material', 'Carrying Strap'],
    inStock: true
  },
  {
    id: '8',
    title: 'Stainless Steel Water Bottle with Temperature Control',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop',
    rating: 4.3,
    reviews: 234,
    description: 'Insulated water bottle that keeps drinks hot for 12 hours or cold for 24 hours.',
    category: 'sports',
    features: ['Double Wall Insulation', '24oz Capacity', 'Leak Proof', 'BPA Free'],
    inStock: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const searchProducts = (query: string): Product[] => {
  return products.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );
};
