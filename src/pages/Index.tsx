
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Truck } from 'lucide-react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Everything You Need, Delivered</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover millions of products with fast, free delivery and unbeatable prices
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Start Shopping
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Truck className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Free 2-day shipping on millions of items</p>
            </div>
            <div className="p-6">
              <Star className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">Millions of products with verified reviews</p>
            </div>
            <div className="p-6">
              <ShoppingBag className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">Hassle-free returns and refunds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/products">
              <Button variant="outline" className="border-orange-400 text-orange-600 hover:bg-orange-50">
                View All Products
              </Button>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/products/electronics" className="group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-lg text-white text-center hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-2">Electronics</h3>
                <p className="opacity-90">Latest tech and gadgets</p>
              </div>
            </Link>
            <Link to="/products/clothing" className="group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-lg text-white text-center hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-2">Clothing</h3>
                <p className="opacity-90">Fashion for everyone</p>
              </div>
            </Link>
            <Link to="/products/home" className="group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-lg text-white text-center hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-2">Home & Garden</h3>
                <p className="opacity-90">Everything for your home</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Get to Know Us</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press Releases</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Make Money with Us</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Sell Products</a></li>
                <li><a href="#" className="hover:text-white">Become an Affiliate</a></li>
                <li><a href="#" className="hover:text-white">Advertise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Payment Products</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Gift Cards</a></li>
                <li><a href="#" className="hover:text-white">Credit Cards</a></li>
                <li><a href="#" className="hover:text-white">Shop with Points</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Let Us Help You</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Your Account</a></li>
                <li><a href="#" className="hover:text-white">Your Orders</a></li>
                <li><a href="#" className="hover:text-white">Help</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AmazonClone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
