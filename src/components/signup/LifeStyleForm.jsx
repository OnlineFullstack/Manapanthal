import React from 'react';

export function LifeStyleForm({ values, onChange }) {
  const calculateBMI = () => {
    if (values.height && values.weight) {
      const heightInMeters = values.height / 100;
      return (values.weight / (heightInMeters * heightInMeters)).toFixed(1);
    }
    return '0.0';
  };

  const diet = ['Veg', 'Non-Veg'];
  // const hobbies = ['Cooking', 'Gym', 'Reading', 'Meditation', 'Trucking', 'Riding'];
 

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="form-field">
          <label className="block text-sm font-medium text-gray-700">Diet Type</label>
          <select
            value={values.diet}
            onChange={(e) => onChange('diet', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 transition-all duration-200"
          >
            {diet.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Hobbies</label>
          <input
            type="text"
            value={values.hobbies}
            onChange={(e) => onChange('hobbies', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Eg:cooking,gym,reading..."
          />
        </div>
          
   
      </div>
    </div>
  );
}