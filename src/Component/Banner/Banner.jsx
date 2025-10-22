import React, { useState, useEffect } from 'react';


const API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';


const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  </svg>
);

export default function Banner() {
 
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 1. Fetch data on component mount
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCategories(data.categories || []);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCategories();
  }, []); 

 
  useEffect(() => {
   
    if (isPaused || isLoading || categories.length === 0) {
      return;
    }
    
    
    const intervalId = setInterval(() => {
    
      setCurrentSlide((prev) => (prev + 1) % categories.length);
    }, 5000); // 5-second delay


    return () => clearInterval(intervalId);

  }, [isPaused, isLoading, categories, currentSlide]); // Restart timer when 

 
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

 
  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full max-w-4xl min-h-[450px] bg-gray-100 rounded-lg shadow-lg">
        <p className="text-2xl font-semibold text-gray-700">Loading Banner...</p>
      </div>
    );
  }


  if (categories.length === 0) {
    return (
      <div className="flex items-center justify-center w-full max-w-4xl min-h-[450px] bg-gray-100 rounded-lg shadow-lg">
        <p className="text-2xl font-semibold text-red-500">No categories found.</p>
      </div>
    );
  }


  return (
    <div className="relative w-full min-h-screen  items-center justify-center flex mx-auto xon rounded-lg overflow-hidden  container">
      

      <div 
        className="flex transition-transform duration-500 ease-in-out  "
       
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
       
        {categories.map((category) => (
          <div 
            key={category.idCategory} 
            className="slide w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 items-center bg-white"
            style={{ minHeight: '450px' }}
          >
          
            <div className="p-8 md:p-12 order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {category.strCategory}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm max-h-[200px] overflow-y-auto">
                {category.strCategoryDescription}
              </p>
              <a 
                href="#" 
                className="inline-block mt-6 bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition"
              >
                View {category.strCategory}
              </a>
            </div>
           
            <div className="order-1 md:order-2 h-64 md:h-full w-full">
              <img 
                src={category.strCategoryThumb} 
                alt={category.strCategory} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition z-10"
      >
        <ArrowLeftIcon />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition z-10"
      >
        <ArrowRightIcon />
      </button>

     
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
          
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

 
      <button 
        onClick={togglePause}
        className="absolute bottom-3 right-4 bg-black/40 text-white w-8 h-8 flex items-center justify-center rounded-full text-xs font-mono z-10"
      >
        {isPaused ? '▶' : '||'}
      </button>
    </div>
  );




}



