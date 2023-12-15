import React, { useState, useEffect } from 'react';

const TestimonialSlider = () => {
  const testimonials = [
    {
      quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
      author: "Michael Scott"
    },
    {
      quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
      author: "Michael Scott"
    },
    {
      quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
      author: "Michael Scott"
    },
    {
      quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
      author: "Michael Scott"
    },
    {
      quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
      author: "Michael Scott"
    },
    {
      quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
      author: "Michael Scott"
    },
    {
      quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
      author: "Michael Scott"
    },
    {
      quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
      author: "Michael Scott"
    },
    {
      quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
      author: "Michael Scott"
    },
    // Add more testimonials as needed
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <section className="bg-gray-50 px-5">
      <div className="px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="sm:pe-6 lg:pe-8">
          <div className="flex flex-col justify-center items-center">
            <p className="text-green-500 text-left font-bold text-lg md:text-2xl">OUR TESTIMONIAL</p>
            <h2 className="text-left font-bold text-4xl md:text-4xl">Client Feedback</h2>
          </div>
        </div>

        <div className="relative mt-8 lg:col-span-2 lg:mx-0 overflow-hidden">
        <div className="flex gap-8 w-1/2 md:w-full transform transition-transform ease-in-out duration-500 tran"   style={{
        transform: `translateX(-${currentSlide * (isMobile ? 90 : 20)}%)`,
      }}
    >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full lg:w-1/3">
                <blockquote className="flex flex-col h-full bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${i < 3 ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      ))}
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl font-bold text-green-600 sm:text-3xl">
                        Stayin' Alive
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-700">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; {testimonial.author}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-10 bottom-0 left-0 mt-10 flex gap-4 lg:mt-0">
          <button
            aria-label="Previous slide"
            onClick={handlePrevSlide}
            className="rounded-full border border-green-600 p-3 text-green-600 transition hover:bg-green-600 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-5 w-5 rtl:rotate-180"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            onClick={handleNextSlide}
            className="rounded-full border border-green-600 p-3 text-green-600 transition hover:bg-green-600 hover:text-white"
          >
            <svg
              className="h-5 w-5 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};


export default TestimonialSlider;