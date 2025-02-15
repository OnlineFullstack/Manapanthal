import React from 'react';
import { Crown, Send, MapPin, Star, Heart } from 'lucide-react';

export function BlurredProfiles({ name, age, occupation, location, imageUrl, membershipType = "Gold", membershipNumber = "12345" }) {
  const getMembershipColor = (type) => {
    switch (type.toLowerCase()) {
      case 'gold':
        return 'text-yellow-500';
      case 'silver':
        return 'text-gray-400';
      case 'bronze':
        return 'text-amber-700';
      default:
        return 'text-gray-500';
    }
  };

  const getMembershipIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'gold':
        return <Crown className={`w-5 h-5 ${getMembershipColor(type)}`} />;
      case 'silver':
        return <Star className={`w-5 h-5 ${getMembershipColor(type)}`} />;
      default:
        return <Star className={`w-5 h-5 ${getMembershipColor(type)}`} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 ">
      <div className="relative h-64 p-2 rounded-lg">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover rounded-lg blur-lg" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-xl font-semibold">{name}, {age}</h3>
          <p className="text-white/90">{occupation}</p>
        </div>
      </div>

      {/* Membership Section - Now without background and border */}
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {getMembershipIcon(membershipType)}
          <span className={`font-medium text-sm ${getMembershipColor(membershipType)}`}>
            {membershipType} 
          </span>
        </div>
        <span className="text-sm text-gray-500 font-medium">#{membershipNumber}</span>
      </div>

      <div className="px-4 pb-4 space-y-3">
        <p className="text-gray-600 flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {location}
        </p>
        <div className="flex justify-between">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors">
            <Heart className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            <Send className="w-4 h-4" />
            Message
          </button>
        </div>
      </div>
    </div>
  );
}