
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

const Header = () => {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-orange-400">
              AmazonClone
            </div>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-8">
            <div className="flex">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-r-none bg-white text-black"
              />
              <Button type="submit" className="rounded-l-none bg-orange-400 hover:bg-orange-500">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </form>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="hidden md:block">Hello, {user.name}</span>
                <Link to="/orders">
                  <Button variant="ghost" className="text-white hover:text-orange-400">
                    Orders
                  </Button>
                </Link>
                <Button variant="ghost" onClick={logout} className="text-white hover:text-orange-400">
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button variant="ghost" className="text-white hover:text-orange-400">
                  <User className="h-5 w-5 mr-1" />
                  Sign In
                </Button>
              </Link>
            )}

            <Link to="/cart" className="relative">
              <Button variant="ghost" className="text-white hover:text-orange-400">
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-400 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="border-t border-gray-700 py-2">
          <div className="flex items-center space-x-6 text-sm">
            <Link to="/products" className="hover:text-orange-400 transition-colors">
              All Products
            </Link>
            <Link to="/products/electronics" className="hover:text-orange-400 transition-colors">
              Electronics
            </Link>
            <Link to="/products/clothing" className="hover:text-orange-400 transition-colors">
              Clothing
            </Link>
            <Link to="/products/books" className="hover:text-orange-400 transition-colors">
              Books
            </Link>
            <Link to="/products/home" className="hover:text-orange-400 transition-colors">
              Home & Garden
            </Link>
            <Link to="/products/sports" className="hover:text-orange-400 transition-colors">
              Sports
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
