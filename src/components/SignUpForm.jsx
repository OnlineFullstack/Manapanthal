import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PersonalInfoForm } from './signup/PersonalInfoForm';
import { EducationCareerForm } from './signup/EducationCareerForm';
import { FamilyBackgroundForm } from './signup/FamilyBackgroundForm';
import { ProfilePictureUpload } from './signup/ProfilePictureUpload';
import { PartnerPreferencesForm } from './signup/PartnerPreferencesForm';
import { ChevronRight } from 'lucide-react';

function App() {
const navigate = useNavigate();
const handleTopBack = () =>{
  navigate("/");
}

  const [currentStep, setCurrentStep] = useState(1);
  const [profile, setProfile] = useState({
    profileCreator: 'Self',
    personalInfo: {
      name: '',
      age: 0,
      location: '',
      height: 0,
      weight: 0,
      bmi: 0,
      bodyType: 'Average',
      skinTone: 'Fair',
      birthMonth: 1,
      birthYear: 2000,
      horoscope: '',
    },
    educationCareer: {
      education: '',
      occupation: '',
      company: '',
      income: '',
    },
    familyBackground: {
      fatherOccupation: '',
      motherOccupation: '',
      siblings: 0,
      familyAssets: '',
      personalAssets: '',
    },
    profilePictures: [],
    partnerPreferences: {
      locations: [],
      minHeight: 150,
      maxHeight: 190,
      minWeight: 45,
      maxWeight: 90,
      preferredSkinTones: [],
      preferredProfessions: [],
    },
  });

  const profileCreators = ['Self', 'Parent', 'Siblings', 'Guardian', 'Third Party'];

  const handleProfileCreatorChange = (value) => {
    setProfile(prev => ({ ...prev, profileCreator: value }));
  };

  const updatePersonalInfo = (field, value) => {
    setProfile(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const updateEducationCareer = (field, value) => {
    setProfile(prev => ({
      ...prev,
      educationCareer: { ...prev.educationCareer, [field]: value }
    }));
  };

  const updateFamilyBackground = (field, value) => {
    setProfile(prev => ({
      ...prev,
      familyBackground: { ...prev.familyBackground, [field]: value }
    }));
  };

  const updateProfilePictures = (images) => {
    setProfile(prev => ({ ...prev, profilePictures: images }));
  };

  const updatePartnerPreferences = (field, value) => {
    setProfile(prev => ({
      ...prev,
      partnerPreferences: { ...prev.partnerPreferences, [field]: value }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', profile);
    // Here you would typically send the data to your backend
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Profile Creator</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {profileCreators.map((creator) => (
                <button
                  key={creator}
                  onClick={() => handleProfileCreatorChange(creator)}
                  className={`p-4 rounded-lg border ${
                    profile.profileCreator === creator
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200'
                  }`}
                >
                  {creator}
                </button>
              ))}
            </div>
            <PersonalInfoForm
              values={profile.personalInfo}
              onChange={updatePersonalInfo}
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Education & Career</h2>
            <EducationCareerForm
              values={profile.educationCareer}
              onChange={updateEducationCareer}
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Family Background</h2>
            <FamilyBackgroundForm
              values={profile.familyBackground}
              onChange={updateFamilyBackground}
            />
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Profile Pictures</h2>
            <ProfilePictureUpload
              images={profile.profilePictures}
              onImagesChange={updateProfilePictures}
            />
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Partner Preferences</h2>
            <PartnerPreferencesForm
              values={profile.partnerPreferences}
              onChange={updatePartnerPreferences}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-[url('https://images.pexels.com/photos/29239515/pexels-photo-29239515/free-photo-of-exchanging-wedding-rings-in-ceremony-close-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
    {/* Red Tint Overlay */}
    {/* <div className="absolute inset-0 bg-red-700 bg-opacity-50"></div> */}
    <button className='mr-auto bg-red-500 text-white md:m-10 px-7 py-2 rounded-md hover:bg-red-600  button-hover' onClick={handleTopBack}>
    Back
    </button>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden form-container">
          <div className="px-6 py-4 bg-red-500">
            <h1 className="text-2xl font-bold text-white">User Registration</h1>
          </div>

          <div className="p-6">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {Array.from({ length: 5 }, (_, i) => i + 1).map((step) => (
                  <div
                    key={step}
                    className={`flex items-center ${
                      step < 5 ? 'flex-1' : ''
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center step-transition ${
                        step <= currentStep
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {step}
                    </div>
                    {step < 5 && (
                      <div
                        className={`flex-1 h-1 mx-2 step-transition ${
                          step < currentStep
                            ? 'bg-red-500'
                            : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-field">
                {renderStep()}
              </div>

              <div className="mt-8 flex justify-between">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="bg-gray-100 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-200 button-hover"
                  >
                    Previous
                  </button>
                )}
                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="ml-auto bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 flex items-center button-hover"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto bg-green-500 text-white px-8 py-2 rounded-md hover:bg-green-600 button-hover"
                  >
                    Submit Registration
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;