import React from 'react';
import { Heart, Mail, Phone } from 'lucide-react';

export function ProfileCard({ name, age, occupation, location, imageUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-64">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-white text-xl font-semibold">{name}, {age}</h3>
          <p className="text-white/90">{occupation}</p>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <p className="text-gray-600 flex items-center gap-2">
          <Phone className="w-4 h-4" /> {location}
        </p>
        <div className="flex justify-between">
          <button className="flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors">
            <Heart className="w-4 h-4" /> Interest
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            <Mail className="w-4 h-4" /> Message
          </button>
        </div>
      </div>
    </div>
  );
}
