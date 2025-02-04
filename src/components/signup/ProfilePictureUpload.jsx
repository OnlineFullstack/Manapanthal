import React, { useState } from 'react';
import { Upload } from 'lucide-react';

export function ProfilePictureUpload({ images, onImagesChange }) {
  const [otpVerified, setOtpVerified] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState('');

  const handleFileChange = (e) => {
    if (!otpVerified) {
      setShowOtpInput(true);
      return;
    }

    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      onImagesChange([...images, ...newImages]);
    }
  };

  const verifyOtp = () => {
    // In a real application, this would verify the OTP with a backend service
    if (otp === '1234') { // Demo OTP
      setOtpVerified(true);
      setShowOtpInput(false);
    } else {
      alert('Invalid OTP');
    }
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    onImagesChange(newImages);
  };

  return (
    <div className="space-y-6">
      {showOtpInput ? (
        <div className="space-y-4 form-field">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 transition-all duration-200"
          />
          <button
            onClick={verifyOtp}
            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 button-hover"
          >
            Verify OTP
          </button>
        </div>
      ) : (
        <div className="space-y-4 form-field">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all duration-200">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-4 text-red-500" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 800x400px)</p>
              </div>
              <input
                type="file"
                className="hidden"
                multiple
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative form-field">
                <img
                  src={image}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-all duration-200"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}