import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Map, Hotel, Camera } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
          url('https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Discover Sri Lanka</h1>
            <p className="text-xl mb-8">Your journey begins with us</p>
            <Link 
              to="/contact" 
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Car className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Airport Pickup</h3>
              <p className="text-gray-600">Comfortable transfer from airport to your destination</p>
            </div>
            <div className="text-center p-6">
              <Map className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Guided Tours</h3>
              <p className="text-gray-600">Explore the best locations with expert guides</p>
            </div>
            <div className="text-center p-6">
              <Hotel className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Accommodation</h3>
              <p className="text-gray-600">Best hotels and resorts booking service</p>
            </div>
            <div className="text-center p-6">
              <Camera className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Photography Tours</h3>
              <p className="text-gray-600">Capture the beauty of Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1578128178799-ffac2a0b9b90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Sigiriya"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sigiriya</h3>
                <p className="text-gray-600">Ancient palace and fortress complex</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Kandy"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Kandy</h3>
                <p className="text-gray-600">Cultural capital of Sri Lanka</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1590177600178-c2a8573c36ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Galle"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Galle</h3>
                <p className="text-gray-600">Historic coastal city</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;