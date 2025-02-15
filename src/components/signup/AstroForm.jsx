import React from 'react';

export function AstroForm({ values, onChange }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Dosham </label>

          <input
            type="text"
            value={values.dosham}
            onChange={(e) => onChange('dosham', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Dosham"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">DOB</label>
          <input
            type="text"
            value={values.dob}
            onChange={(e) => onChange('dob', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="DOB"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">City of birth</label>
          <input
            type="text"
            value={values.cityOfBirth}
            onChange={(e) => onChange('cityOfBirth', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="City of Birth"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Raasi</label>
          <input
            type="text"
            value={values.raasi}
            onChange={(e) => onChange('raasi', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Raasi"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Natchatram</label>
          <input
            type="text"
            value={values.natchatram}
            onChange={(e) => onChange('natchatram', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Natchatram"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Laknam</label>
          <input
            type="text"
            value={values.laknam}
            onChange={(e) => onChange('laknam', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Laknam"
          />
        </div>

      </div>
    </div>
  );
}