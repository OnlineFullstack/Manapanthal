import React from 'react';
import { Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import heroImage from "../assets/bg-5.png";
import catering from "../assets/catering.jpg";
import photography from "../assets/photographer.jpg";
import dj from "../assets/dj.jpeg";
import decoration from "../assets/decoration.png";
import { SuccessStories } from '../components/SuccessStories';
import Reveal from '../components/Reveal';
import Package from '../components/userComponents/Package';
import CallToAction from '../components/CallToAction';
import OfferNewsMarque from '../components/OfferNewsMarque'

import { BlurredProfiles } from '../components/BlurredProfiles';


export default function LandingPage() {

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
    ,
    {
      name: "Anita Patel",
      age: 26,
      occupation: "Doctor",
      location: "Bangalore, India",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
      membershipType:"Gold",
      membershipNumber:"MA123456"
    },]
  return (
    <>
    <OfferNewsMarque/>
    <div className="min-h-screen">
      
      <Navbar className="absolute top-0 left-0 w-full z-10 text-white" />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        <img src={heroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="relative max-w-3xl px-6 space-y-6">
          <Heart className="w-16 h-16 mx-auto" />
          <h1 className="text-3xl md:text-5xl font-bold">Take a Trip Into Paradise</h1>
          <p className="text-lg md:text-xl">
            Partner with Manapanthal Event Management in Vellakovil, the best event company.
          </p>
        </div>
      </div>

      <Reveal />
      <SuccessStories />

       {/* Profile Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mx-32 md:my-6 backdrop-blur-lg">
                    {profiles.map((profile, index) => (
                      <BlurredProfiles key={index} {...profile} />
                    ))}
                  </div>
                  <div>
                    <h2 className='font-semibold text-xl text-gray-500 my-3 text-center'>Choose your Plan to get started!</h2>
                  </div>
      
      <Package />

      {/* Services Section */}
      <div className="my-12 container mx-auto px-4">
        <h2 className="font-bold text-2xl md:text-3xl text-center m-2">Services by Manapanthal</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto m-4">
          Manapanthal® Event Management is a certified ISO 0000:2015 event management company based in Tamil Nadu.
          We offer excellent, comprehensive event management services, including personal event planning, corporate events,
          and entertaining stage shows across Tamil Nadu. Feel free to contact us.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {[{ img: photography, title: 'Wedding Photography', desc: 'Capture your special moments forever.' },
            { img: catering, title: 'Catering Services', desc: 'Exceptional catering for every occasion.' },
            { img: dj, title: 'Music & Entertainment', desc: 'Live bands, DJs, and mesmerizing performers.' },
            { img: decoration, title: 'Decoration', desc: 'Luxurious and customized wedding decorations.' }]
            .map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition">
                <img className="w-full h-56 object-cover" src={service.img} alt={service.title} />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                  <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                    Learn More
                  </button>
                </div>
              </div>
          ))}
        </div>
      </div>

      <CallToAction />
    </div>
    </>
  );
}
