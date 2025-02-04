import React from 'react';

export function PartnerPreferencesForm({ values, onChange }) {
  const skinTones = ['Very Fair', 'Fair', 'Wheatish', 'Dark'];

  const handleLocationChange = (e) => {
    const locations = e.target.value.split(',').map(loc => loc.trim());
    onChange('locations', locations);
  };

  const handleProfessionsChange = (e) => {
    const professions = e.target.value.split(',').map(prof => prof.trim());
    onChange('preferredProfessions', professions);
  };

  const handleSkinToneChange = (tone) => {
    const newTones = values.preferredSkinTones.includes(tone)
      ? values.preferredSkinTones.filter(t => t !== tone)
      : [...values.preferredSkinTones, tone];
    onChange('preferredSkinTones', newTones);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Preferred Locations</label>
          <input
            type="text"
            value={values.locations.join(', ')}
            onChange={handleLocationChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter locations separated by commas"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Height Range (cm)</label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              value={values.minHeight}
              onChange={(e) => onChange('minHeight', parseInt(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Min height"
            />
            <input
              type="number"
              value={values.maxHeight}
              onChange={(e) => onChange('maxHeight', parseInt(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Max height"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Weight Range (kg)</label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              value={values.minWeight}
              onChange={(e) => onChange('minWeight', parseInt(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Min weight"
            />
            <input
              type="number"
              value={values.maxWeight}
              onChange={(e) => onChange('maxWeight', parseInt(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Max weight"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Skin Tones</label>
          <div className="space-y-2">
            {skinTones.map((tone) => (
              <label key={tone} className="flex items-center">
                <input
                  type="checkbox"
                  checked={values.preferredSkinTones.includes(tone)}
                  onChange={() => handleSkinToneChange(tone)}
                  className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <span className="ml-2">{tone}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Preferred Professions</label>
          <input
            type="text"
            value={values.preferredProfessions.join(', ')}
            onChange={handleProfessionsChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter professions separated by commas"
          />
        </div>
      </div>
    </div>
  );
}