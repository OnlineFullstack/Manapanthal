import React from "react";
import { Slide } from "react-awesome-reveal";
import { Fade, Zoom } from "react-awesome-reveal";
import { Users, Search, Shield } from "lucide-react";

const Reveal = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fade cascade direction="up" damping={0.2}>
          <div className="grid md:grid-cols-3 gap-12">
            <Zoom>
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <Users className="w-12 h-12 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Verified Profiles</h3>
                <p className="text-gray-600">Connect with genuine people. All profiles are manually verified for authenticity.</p>
              </div>
            </Zoom>

            <Zoom delay={200}>
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <Search className="w-12 h-12 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Smart Matching</h3>
                <p className="text-gray-600">Our advanced algorithm suggests matches based on your preferences and compatibility.</p>
              </div>
            </Zoom>

            <Zoom delay={400}>
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <Shield className="w-12 h-12 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Privacy First</h3>
                <p className="text-gray-600">Your privacy is our priority. Control who sees your profile and information.</p>
              </div>
            </Zoom>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Reveal;
