import React from 'react';
import { Search, Filter } from 'lucide-react';

export function SearchFilters() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4 md:mx-32">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search profiles..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
          <Filter className="w-4 h-4" /> Filters
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500">
          <option value="">Age Range</option>
          <option value="18-25">18-25</option>
          <option value="26-35">26-35</option>
          <option value="36-45">36-45</option>
          <option value="46+">46+</option>
        </select>
        
        <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500">
          <option value="">Location</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="bangalore">Bangalore</option>
          <option value="chennai">Chennai</option>
        </select>
        
        <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500">
          <option value="">Religion</option>
          <option value="hindu">Hindu</option>
          <option value="muslim">Muslim</option>
          <option value="christian">Christian</option>
          <option value="sikh">Sikh</option>
        </select>
      </div>
    </div>
  );
}