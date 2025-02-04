import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { ProfileCard } from '../components/ProfileCard';
import { SearchFilters } from '../components/SearchFilters';

import Footer  from '../components/userComponents/Footer';
import Navbar  from '../components/userComponents/Navbar';





import logo from '../assets/../assets/manapanthal-logo.png'

export default function Home() {
 
  const profiles = [
    {
      name: "Priya Sharma",
      age: 27,
      occupation: "Software Engineer",
      location: "Mumbai, India",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      membershipType:"Gold",
      membershipNumber:"MA123456"
    },
    {
      name: "Rahul Verma",
      age: 29,
      occupation: "Business Analyst",
      location: "Delhi, India",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      membershipType:"silver",
      membershipNumber:"MA123456"
    },
    {
      name: "Anita Patel",
      age: 26,
      occupation: "Doctor",
      location: "Bangalore, India",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
      membershipType:"Gold",
      membershipNumber:"MA123456"
    },
    {
      name: "Priya Sharma",
      age: 27,
      occupation: "Software Engineer",
      location: "Mumbai, India",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      membershipType:"Gold",
      membershipNumber:"MA123456"
    },
    {
      name: "Rahul Verma",
      age: 29,
      occupation: "Business Analyst",
      location: "Delhi, India",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      membershipType:"Gold",
      membershipNumber:"MA123456"
    },
    {
      name: "Anita Patel",
      age: 26,
      occupation: "Doctor",
      location: "Bangalore, India",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
      membershipType:"silver",
      membershipNumber:"MA123456"
    },
    {
      name: "Priya Sharma",
      age: 27,
      occupation: "Software Engineer",
      location: "Mumbai, India",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      membershipType:"Gold",
      membershipNumber:"MA123456"
    },
    {
      name: "Rahul Verma",
      age: 29,
      occupation: "Business Analyst",
      location: "Delhi, India",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      membershipType:"Gold",
      membershipNumber:"MA123456"
    },
    {
      name: "Anita Patel",
      age: 26,
      occupation: "Doctor",
      location: "Bangalore, India",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
      membershipType:"silver",
      membershipNumber:"MA123456"
    }
  ];

  // const handleSignIn = () => {
  //   setShowSignIn(true);
  //   setShowSignUp(false);
  // };

  // const handleSignUp = () => {
  //   setShowSignUp(true);
  //   setShowSignIn(false);
  // };

  // // For demo purposes - in real app, this would be handled by proper auth
  // const handleAuth = () => {
  //   setIsAuthenticated(true);
  //   setShowSignIn(false);
  //   setShowSignUp(false);
  // };

  // if (!isAuthenticated) {
    return (
      <>
     

 
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
     <Navbar/>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <div className="relative h-screen bg-cover bg-center bg-[url('https://images.pexels.com/photos/30232952/pexels-photo-30232952/free-photo-of-elegant-gold-wedding-rings-on-invitation.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] flex justify-center items-center">
  {/* Dark Overlay */}
         <div class="absolute inset-0 bg-black/10"></div>
  {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
    <h2 className="text-4xl font-bold text-white">Find Your Perfect Match</h2>
    <p className="text-xl text-gray-200">Join thousands of happy couples who found their soulmate with us</p>
  </div>
</div>


       

        {/* Search and Profiles Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-8">
            {/* Search Filters */}
            <SearchFilters />

            {/* Profile Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mx-32">
              {profiles.map((profile, index) => (
                <ProfileCard key={index} {...profile} />
              ))}
            </div>
          </div>
        </div>
      </main>

    
     
    </div>
    
     <Footer/>
    </>
    )
  }
