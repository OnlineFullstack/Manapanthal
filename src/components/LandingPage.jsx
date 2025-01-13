import React from 'react';
import { Heart, Users, Search, Shield, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import bg from "../assets/bg-5.png";

export function LandingPage({ onSignIn, onSignUp }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <div className="bg-gradient-to-r from-rose-50 to-rose-100"> */}
      <Navbar/>
      <div className="">
        <img src={bg} alt="bg-landing" className='w-full h-120' />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <Heart className="w-16 h-16 text-red-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">
              Find Your Perfect Match
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join HeartLinks, India's most trusted matrimony service. Connect with genuine profiles and start your journey towards a beautiful relationship.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={onSignUp}
                className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-rose-600 transition-colors flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onSignIn}
                className="px-6 py-3 bg-white text-red-500 rounded-md hover:bg-rose-50 transition-colors"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Users className="w-12 h-12 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Verified Profiles</h3>
              <p className="text-gray-600">
                Connect with genuine people. All profiles are manually verified for authenticity.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Search className="w-12 h-12 text-rose-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Smart Matching</h3>
              <p className="text-gray-600">
                Our advanced algorithm suggests matches based on your preferences and compatibility.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Shield className="w-12 h-12 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Privacy First</h3>
              <p className="text-gray-600">
                Your privacy is our priority. Control who sees your profile and information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-white py-20 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500">1M+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500">10K+</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500">100%</div>
              <div className="text-gray-600">Verified Profiles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500">15+</div>
              <div className="text-gray-600">Years of Trust</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Find Your Soulmate?
          </h2>
          <button
            onClick={onSignUp}
            className="px-8 py-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-lg font-semibold"
          >
            Create Free Account
          </button>
        </div>
      </div>
    </div>
  );
}
