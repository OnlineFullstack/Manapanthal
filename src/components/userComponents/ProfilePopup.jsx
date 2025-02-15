import React from 'react';
import { X } from 'lucide-react';

const InfoSection = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-2 border-b pb-1">{title}</h3>
    <div className="grid grid-cols-2 gap-4">{children}</div>
  </div>
);

const InfoItem = ({ label, value }) => (
  <div>
    <span className="text-sm text-gray-600">{label}:</span>
    <span className="ml-2 text-gray-800">{value || 'Not specified'}</span>
  </div>
);

const ProfilePopup = ({ profile, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="flex gap-6 mb-6">
          {profile.profilePictures && profile.profilePictures.length > 0 ? (
            <div className="w-48 h-48">
              <img
                src={profile.profilePictures[0]}
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ) : (
            <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">No photo available</span>
            </div>
          )}
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{profile.personalInfo.name}</h2>
            <p className="text-gray-600 mb-1">Profile created by: {profile.profileCreator}</p>
            <p className="text-gray-600">Age: {profile.personalInfo.age} years</p>
          </div>
        </div>

        <InfoSection title="Personal Information">
          <InfoItem label="Current Location" value={profile.personalInfo.currentLocation} />
          <InfoItem label="Native" value={profile.personalInfo.Native} />
          <InfoItem label="Height" value={`${profile.personalInfo.height} cm`} />
          <InfoItem label="Weight" value={`${profile.personalInfo.weight} kg`} />
          <InfoItem label="BMI" value={profile.personalInfo.bmi} />
          <InfoItem label="Body Type" value={profile.personalInfo.bodyType} />
          <InfoItem label="Skin Tone" value={profile.personalInfo.skinTone} />
          <InfoItem label="Disability" value={profile.personalInfo.disability} />
          <InfoItem label="Horoscope" value={profile.personalInfo.horoscope} />
        </InfoSection>

        <InfoSection title="Religious Information">
          <InfoItem label="Religion" value={profile.religious.religion} />
          <InfoItem label="Community" value={profile.religious.community} />
          <InfoItem label="Sub Community" value={profile.religious.subCommunity} />
          <InfoItem label="Partner's Cast" value={profile.religious.partnersCast} />
          <InfoItem label="Gothram" value={profile.religious.gothram} />
        </InfoSection>

        <InfoSection title="Astrological Details">
          <InfoItem label="Dosham" value={profile.astro.dosham} />
          <InfoItem label="Date of Birth" value={profile.astro.dob} />
          <InfoItem label="City of Birth" value={profile.astro.cityOfBirth} />
          <InfoItem label="Raasi" value={profile.astro.raasi} />
          <InfoItem label="Natchatram" value={profile.astro.natchatram} />
          <InfoItem label="Laknam" value={profile.astro.laknam} />
        </InfoSection>

        <InfoSection title="Education & Career">
          <InfoItem label="Education" value={profile.educationCareer.education} />
          <InfoItem label="Occupation" value={profile.educationCareer.occupation} />
          <InfoItem label="Company" value={profile.educationCareer.company} />
          <InfoItem label="Income" value={profile.educationCareer.income} />
        </InfoSection>

        <InfoSection title="Family Background">
          <InfoItem label="Father's Name" value={profile.familyBackground.fatherName} />
          <InfoItem label="Mother's Name" value={profile.familyBackground.motherName} />
          <InfoItem label="Father's Occupation" value={profile.familyBackground.fatherOccupation} />
          <InfoItem label="Mother's Occupation" value={profile.familyBackground.motherOccupation} />
          <InfoItem label="Siblings" value={profile.familyBackground.siblings} />
          <InfoItem label="Family Assets" value={profile.familyBackground.familyAssets} />
          <InfoItem label="Personal Assets" value={profile.familyBackground.personalAssets} />
        </InfoSection>

        <InfoSection title="Lifestyle">
          <InfoItem label="Diet" value={profile.LifeStyle.diet} />
          <InfoItem label="Hobbies" value={profile.LifeStyle.hobbies} />
        </InfoSection>

        <InfoSection title="Partner Preferences">
          <div className="col-span-2">
            <p className="text-sm text-gray-600">Preferred Locations:</p>
            <p className="text-gray-800">{profile.partnerPreferences.locations.join(', ') || 'Not specified'}</p>
          </div>
          <InfoItem label="Height Range" value={`${profile.partnerPreferences.minHeight} - ${profile.partnerPreferences.maxHeight} cm`} />
          <InfoItem label="Weight Range" value={`${profile.partnerPreferences.minWeight} - ${profile.partnerPreferences.maxWeight} kg`} />
          <div className="col-span-2">
            <p className="text-sm text-gray-600">Preferred Skin Tones:</p>
            <p className="text-gray-800">{profile.partnerPreferences.preferredSkinTones.join(', ') || 'Not specified'}</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-gray-600">Preferred Professions:</p>
            <p className="text-gray-800">{profile.partnerPreferences.preferredProfessions.join(', ') || 'Not specified'}</p>
          </div>
        </InfoSection>
      </div>
    </div>
  );
};

export default ProfilePopup;