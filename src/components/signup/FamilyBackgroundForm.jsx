import React from 'react';

export function FamilyBackgroundForm({ values, onChange }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Father's Occupation</label>
          <input
            type="text"
            value={values.fatherOccupation}
            onChange={(e) => onChange('fatherOccupation', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Mother's Occupation</label>
          <input
            type="text"
            value={values.motherOccupation}
            onChange={(e) => onChange('motherOccupation', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Siblings</label>
          <input
            type="number"
            value={values.siblings}
            onChange={(e) => onChange('siblings', parseInt(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Family Assets</label>
          <textarea
            value={values.familyAssets}
            onChange={(e) => onChange('familyAssets', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Personal Assets</label>
          <textarea
            value={values.personalAssets}
            onChange={(e) => onChange('personalAssets', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            rows={3}
          />
        </div>
      </div>
    </div>
  );
}