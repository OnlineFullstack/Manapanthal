import React from 'react';

export function EducationCareerForm({ values, onChange }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Education</label>
          <input
            type="text"
            value={values.education}
            onChange={(e) => onChange('education', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Highest qualification"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Occupation</label>
          <input
            type="text"
            value={values.occupation}
            onChange={(e) => onChange('occupation', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Current occupation"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Company</label>
          <input
            type="text"
            value={values.company}
            onChange={(e) => onChange('company', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Company name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Annual Income</label>
          <input
            type="text"
            value={values.income}
            onChange={(e) => onChange('income', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Annual income"
          />
        </div>
      </div>
    </div>
  );
}