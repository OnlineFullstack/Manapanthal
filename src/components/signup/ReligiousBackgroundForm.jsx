import React from 'react';

export function ReligiousBackgroundForm({ values, onChange }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Religion </label>

          <input
            type="text"
            value={values.religion}
            onChange={(e) => onChange('religion', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Religion"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Mother tongue</label>
          <input
            type="text"
            value={values.mothertongue}
            onChange={(e) => onChange('motherTongue', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="mother Tongue"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Community</label>
          <input
            type="text"
            value={values.community}
            onChange={(e) => onChange('community', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="community"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Sub community</label>
          <input
            type="text"
            value={values.subCommunity}
            onChange={(e) => onChange('subCommunity', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Sub-Community"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gothram</label>
          <input
            type="text"
            value={values.gothram}
            onChange={(e) => onChange('gothram', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Gothram"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Partner's Caste</label>
          <input
            type="text"
            value={values.partnercaste}
            onChange={(e) => onChange('partnercaste', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Partner's Caste"
          />
        </div>

      </div>
    </div>
  );
}