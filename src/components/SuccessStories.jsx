import React from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const stories = [
  {
    imageUrl: "https://images.unsplash.com/photo-1623091410901-00e2d268901f?auto=format&fit=crop&q=80",
    names: "Raj & Priya",
    story: "Found love through HeartLinks in just 2 months. Our traditional values and modern outlook matched perfectly.",
    date: "Married Dec 2023"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80",
    names: "Amit & Neha",
    story: "From our first chat to wedding bells in 6 months. Thank you HeartLinks for bringing us together!",
    date: "Married Oct 2023"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1620571514289-ccd5f272e19d?auto=format&fit=crop&q=80",
    names: "Karan & Meera",
    story: "Distance was never a barrier. Found my soulmate from a different city. Now happily married!",
    date: "Married Aug 2023"
  }
];

export function SuccessStories() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Success Stories
        </h2>
        
        <div className="relative">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {stories.map((story, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={story.imageUrl}
                        alt={story.names}
                        className="h-96 w-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                      <Quote className="w-10 h-10 text-rose-400 mb-4" />
                      <p className="text-gray-600 text-lg mb-6 italic">
                        "{story.story}"
                      </p>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {story.names}
                        </h3>
                        <p className="text-rose-500">{story.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-r-lg shadow-lg hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-l-lg shadow-lg hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-rose-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}