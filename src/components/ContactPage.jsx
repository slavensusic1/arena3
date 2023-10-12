// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here (e.g., send data to an API or display it)
//     console.log(formData);
//   };

//   return (
//     <div className="py-12">
//       <section class="text-gray-600 body-font relative">
//   <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
//     <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
//       <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no"
//        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
//       <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
//         <div class="lg:w-1/2 px-6">
//           <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
//           <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
//         </div>
//         <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
//           <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
//           <a class="text-green-500 leading-relaxed">example@email.com</a>
//           <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
//           <p class="leading-relaxed">123-456-7890</p>
//         </div>
//       </div>
//     </div>
//     <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
//       <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
//       <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
//       <div class="relative mb-4">
//         <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
//         <input type="text" id="name" name="name" class="w-full bg-white
//          rounded border border-gray-300 focus:border-green-500 focus:ring-2
//           focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
//       </div>
//       <div class="relative mb-4">
//         <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
//         <input type="email" id="email" name="email" class="w-full bg-white rounded border
//          border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 
//          transition-colors duration-200 ease-in-out" />
//       </div>
//       <div class="relative mb-4">
//         <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
//         <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
//       </div>
//       <button class="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
//       <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
//     </div>
//   </div>
// </section>
//     {/* <div className="flex justify-center items-center gap-8">
//       <div className=" p-6 w-1/2">
//         <h2 className="text-3xl font-semibold py-6 ">Contact Us</h2>
  
//         <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6 mb-4">
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter your name"
//               className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               onChange={handleChange}
//             />
//           </div>
  
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               onChange={handleChange}
//             />
//           </div>
  
//           <div className="mb-4">
//             <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               placeholder="Enter your message"
//               rows="4"
//               className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               onChange={handleChange}
//             ></textarea>
//           </div>
  
//           <button
//             type="submit"
//             className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded focus:outline-none"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//       <div>
//         <p>DIGITAL ARENA d.o.o.</p>
//         <p>Šetalište Stjepana Radića 16, 21260 Imotski</p>
//         <p>Zagreb, XI Podbrežje 11a</p>
//         <p>Split, Put Pazdigrada 14</p>
//         <p>DIGITAL ARENA d.o.o. Ljubuški</p>
//         <p>Ljubuški, Šipovača 84</p>
//         <p>Email: info@digitalarena.hr</p>
//         <p>Mob: +385 99 505 8114</p>
//       </div>
//     </div>
//      */}
//   </div>
//   )  
// };

// export default ContactForm;
