import React, { useState } from 'react';
import { Bell, Heart, Send, UserRound, Calendar, Check, X } from 'lucide-react';

import Navbar from '../components/userComponents/Navbar';
import { div } from 'framer-motion/client';

// Mock data for demonstration
const notifications = {
  received: [
    {
      id: 1,
      name: "Priya Sharma",
      age: 28,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      date: "2024-03-15",
      status: "pending"
    },
    {
      id: 2,
      name: "Rahul Verma",
      age: 31,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      date: "2024-03-14",
      status: "pending"
    }
  ],
  sent: [
    {
      id: 3,
      name: "Anjali Patel",
      age: 27,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      date: "2024-03-13",
      status: "accepted"
    },
    {
      id: 4,
      name: "Arjun Kumar",
      age: 30,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      date: "2024-03-12",
      status: "declined"
    }
  ]
};

function NotificationCard({ profile, type, onAccept, onDecline }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'accepted':
        return 'text-green-600 bg-green-100';
      case 'declined':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'accepted':
        return 'Accepted';
      case 'declined':
        return 'Declined';
      default:
        return 'Pending';
    }
  };

  return (
    
    <div className=" rounded-lg shadow-md p-4 mb-4 md:mt-12 hover:shadow-lg transition-shadow">
      
      <div className="flex items-center space-x-4">
        <img 
          src={profile.image} 
          alt={profile.name} 
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{profile.name}</h3>
          <div className="flex items-center space-x-2 text-gray-600">
            <UserRound size={16} />
            <span>{profile.age} years</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar size={16} />
            <span>{new Date(profile.date).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <div className={`px-3 py-1 rounded-full ${type === 'received' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
            {type === 'received' ? 'Received' : 'Sent'}
          </div>
          
          {type === 'received' && profile.status === 'pending' ? (
            <div className="flex space-x-2">
              <button
                onClick={() => onAccept(profile.id)}
                className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors"
              >
                <Check size={16} />
                <span>Accept</span>
              </button>
              <button
                onClick={() => onDecline(profile.id)}
                className="flex items-center space-x-1 px-3 py-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
              >
                <X size={16} />
                <span>Decline</span>
              </button>
            </div>
          ) : (
            <div className={`px-3 py-1 rounded-full ${getStatusColor(profile.status)}`}>
              {getStatusText(profile.status)}
            </div>
          )}
        </div>
      </div>
    </div>
    
  );
}

function Notification() {
  const [activeTab, setActiveTab] = useState('received');
  const [notificationState, setNotificationState] = useState(notifications);

  const handleAccept = (id) => {
    setNotificationState(prev => ({
      ...prev,
      received: prev.received.map(profile =>
        profile.id === id ? { ...profile, status: 'accepted' } : profile
      )
    }));
  };

  const handleDecline = (id) => {
    setNotificationState(prev => ({
      ...prev,
      received: prev.received.map(profile =>
        profile.id === id ? { ...profile, status: 'declined' } : profile
      )
    }));
  };

  return (
    <div className=''>
      <Navbar/>
    <div className="min-h-screen md:mt-12 ">
      <div className="max-w-2xl mx-auto p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Bell className="text-red-600" />
            Interest Notifications
          </h1>
          <div className="bg-white rounded-lg shadow-sm p-1">
            <button
              onClick={() => setActiveTab('received')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'received'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-2">
                <Heart size={18} />
                Received
              </div>
            </button>
            <button
              onClick={() => setActiveTab('sent')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'sent'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-2">
                <Send size={18} />
                Sent
              </div>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {notificationState[activeTab].map((profile) => (
            <NotificationCard 
              key={profile.id} 
              profile={profile} 
              type={activeTab}
              onAccept={handleAccept}
              onDecline={handleDecline}
            />
          ))}
        </div>

        {notificationState[activeTab].length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No {activeTab} interests yet</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default Notification;