import React from 'react';

export function PersonalInfoForm({ values, onChange }) {
  const calculateBMI = () => {
    if (values.height && values.weight) {
      const heightInMeters = values.height / 100;
      return (values.weight / (heightInMeters * heightInMeters)).toFixed(1);
    }
    return '0.0';
  };

  const bodyTypes = ['Slim', 'Athletic', 'Average', 'Heavy'];
  const skinTones = ['Very Fair', 'Fair', 'Wheatish', 'Dark'];
  const diability = ['yes','no']

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-field">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={values.name}
            onChange={(e) => onChange('name', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 transition-all duration-200"
          />
        </div>
        
        <div className="form-field">
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            value={values.age}
            onChange={(e) => onChange('age', parseInt(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 transition-all duration-200"
          />
        </div>

        <div className="form-field">
          <label className="block text-sm font-medium text-gray-700">Current Location</label>
          <input
            type="text"
            value={values.location}
            onChange={(e) => onChange('location', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 transition-all duration-200"
          />
        </div>

        <div className="form-field">
          <label className="block text-sm font-medium text-gray-700">Native</label>
          <input
            type="text"
            value={values.native}
            onChange={(e) => onChange('native', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 transition-all duration-200"
          />
        </div>

        <div className="form-field">
          <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
          <input
            type="number"
            value={values.height}
            onChange={(e) => onChange('height', parseInt(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 transition-all duration-200"
          />
        </div>

        <div className="form-field">
          <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
          <input
            type="number"
            value={values.weight}
            onChange={(e) => onChange('weight', parseInt(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 transition-all duration-200"
          />
        </div>

        <div className="form-field">
          <label className="block text-sm font-medium text-gray-700">BMI</label>
          <input
            type="text"
            value={calculateBMI()}
            disabled
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm"
          />
        </div>

        <div className="form-field">
          <label className="block text-sm font-medium text-gray-700">Body Type</label>
          <select
            value={values.bodyType}
            onChange={(e) => onChange('bodyType', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 transition-all duration-200"
          >
            {bodyTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label className="block text-sm font-medium text-gray-700">Skin Tone</label>
          <select
            value={values.skinTone}
            onChange={(e) => onChange('skinTone', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 transition-all duration-200"
          >
            {skinTones.map((tone) => (
              <option key={tone} value={tone}>{tone}</option>
            ))}
          </select>
        </div>


        <div className="form-field">
          <label className="block text-sm font-medium text-gray-700">Birth Month</label>
          <select
            value={values.birthMonth}
            onChange={(e) => onChange('birthMonth', parseInt(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 transition-all duration-200"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {new Date(2000, i).toLocaleString('default', { month: 'long' })}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label className="block text-sm font-medium text-gray-700">Birth Year</label>
          <select
            value={values.birthYear}
            onChange={(e) => onChange('birthYear', parseInt(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 transition-all duration-200"
          >
            {Array.from({ length: 50 }, (_, i) => (
              <option key={i} value={new Date().getFullYear() - 50 + i}>
                {new Date().getFullYear() - 50 + i}
              </option>
            ))}
          </select>
        </div>

        
        <div className="form-field">
          <label className="block text-sm font-medium text-gray-700">Do you have Disabilities?</label>
          <select
            value={values.disability}
            onChange={(e) => onChange('disability', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 transition-all duration-200"
          >
            {diability.map((disability) => (
              <option key={disability} value={disability}>{disability}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}