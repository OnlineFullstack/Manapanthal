import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { ProfileCard } from './components/ProfileCard';
import { SearchFilters } from './components/SearchFilters';
import { SignInForm } from './components/SignInForm';
import { SignUpForm } from './components/SignUpForm';
import { SuccessStories } from './components/SuccessStories';
import { LandingPage } from './components/LandingPage';
import logo from './assets/../assets/manapanthal-logo.png'

export default function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const profiles = [
    {
      name: "Priya Sharma",
      age: 27,
      occupation: "Software Engineer",
      location: "Mumbai, India",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      name: "Rahul Verma",
      age: 29,
      occupation: "Business Analyst",
      location: "Delhi, India",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
    },
    {
      name: "Anita Patel",
      age: 26,
      occupation: "Doctor",
      location: "Bangalore, India",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
    }
  ];

  const handleSignIn = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const handleSignUp = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  // For demo purposes - in real app, this would be handled by proper auth
  const handleAuth = () => {
    setIsAuthenticated(true);
    setShowSignIn(false);
    setShowSignUp(false);
  };

  if (!isAuthenticated) {
    return (
      <>
        <LandingPage onSignIn={handleSignIn} onSignUp={handleSignUp} />
        
        {/* Auth Modal Overlay */}
        {(showSignIn || showSignUp) && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="relative">
              <button
                onClick={() => {
                  setShowSignIn(false);
                  setShowSignUp(false);
                }}
                className="absolute -top-2 -right-2 bg-white w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 shadow-lg"
              >
                ×
              </button>
              {showSignIn && <SignInForm onSuccess={handleAuth} />}
              {showSignUp && <SignUpForm onSuccess={handleAuth} />}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className='w-56'/>
            </div>
            <button 
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">Find Your Perfect Match</h2>
              <p className="text-xl text-gray-600">Join thousands of happy couples who found their soulmate with us</p>
            </div>
          </div>
        </div>

        {/* Success Stories Slider */}
        <SuccessStories />

        {/* Search and Profiles Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-8">
            {/* Search Filters */}
            <SearchFilters />

            {/* Profile Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profiles.map((profile, index) => (
                <ProfileCard key={index} {...profile} />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 Manapanthal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}