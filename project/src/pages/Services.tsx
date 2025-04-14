import React from 'react';
import { Car, Map, Hotel, Camera, Compass, Utensils, Calendar, Shield } from 'lucide-react';

const Services = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive travel services to make your Sri Lankan experience unforgettable.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Car className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Airport Transfer Services</h3>
            <p className="text-gray-600 mb-4">
              Comfortable and reliable airport pickup and drop-off services with professional drivers.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• 24/7 service availability</li>
              <li>• Modern, air-conditioned vehicles</li>
              <li>• Professional, English-speaking drivers</li>
              <li>• Flight monitoring and waiting time included</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <Map className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Guided Tours</h3>
            <p className="text-gray-600 mb-4">
              Expertly crafted tours to Sri Lanka's most beautiful and historic locations.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Cultural heritage tours</li>
              <li>• Wildlife safaris</li>
              <li>• Beach tours</li>
              <li>• Adventure expeditions</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <Hotel className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Accommodation Booking</h3>
            <p className="text-gray-600 mb-4">
              Hand-picked accommodation options to suit every budget and preference.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Luxury hotels and resorts</li>
              <li>• Boutique hotels</li>
              <li>• Beach resorts</li>
              <li>• Eco-lodges</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <Camera className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Photography Tours</h3>
            <p className="text-gray-600 mb-4">
              Specialized tours designed for photography enthusiasts.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Landscape photography</li>
              <li>• Wildlife photography</li>
              <li>• Cultural photography</li>
              <li>• Photography workshops</li>
            </ul>
          </div>
        </div>

        {/* Additional Services */}
        <h2 className="text-3xl font-bold text-center mb-8">Additional Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <Compass className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Custom Itineraries</h3>
            <p className="text-gray-600">Personalized travel plans tailored to your interests</p>
          </div>
          <div className="text-center p-6">
            <Utensils className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Culinary Tours</h3>
            <p className="text-gray-600">Experience authentic Sri Lankan cuisine</p>
          </div>
          <div className="text-center p-6">
            <Calendar className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Event Planning</h3>
            <p className="text-gray-600">Destination weddings and special events</p>
          </div>
          <div className="text-center p-6">
            <Shield className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Travel Insurance</h3>
            <p className="text-gray-600">Comprehensive travel protection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;