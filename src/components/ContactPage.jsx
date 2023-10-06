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
//     <div className="flex justify-center items-center gap-8">
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
//   </div>
//   )  
// };

// export default ContactForm;
