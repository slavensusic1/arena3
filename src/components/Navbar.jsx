import React, { useState, useEffect } from 'react';
import logo from '../assets/digitalarena.png';

const Navbar = ({
  homeTex, homeLink, services, servicesLink,
  about, aboutLink, portfolio, portfolioLink, languageLinks
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= window.innerHeight / 8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const cur=new Date()
  const year =cur.getFullYear()

  return (
    <div className={`fixed top-0 w-full z-50 transition duration-500 ease-in-out ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-3 md:py-4">
         {/* <img src={logo} alt="" /> */}
          <div className="flex items-center justify-center px-5">
          <a href="/">
  <img src={logo.src} alt="logo" className="h-10 md:h-12" />
</a>
          </div>

          {/* Navigation links for large screens */}
          <div className="hidden lg:flex space-x-8 px-5">
           <a href={homeLink} className={`text-gray-100 hover:text-green-600 text-xl ${isScrolled ? 'text-green-500' : ''}`}>{homeTex}</a>
            <a href={aboutLink} className={`text-gray-100 hover:text-green-600 text-xl ${isScrolled ? 'text-green-500' : ''}`}>{about}</a>
            <a href={servicesLink} className={`text-gray-100 hover:text-green-600 text-xl ${isScrolled ? 'text-green-500' : ''}`}>{services}</a>
            <a href={portfolioLink} className={`text-gray-100 hover:text-green-600 text-xl ${isScrolled ? 'text-green-500' : ''}`}>{portfolio}</a>
        
            {languageLinks.map(({ href, label }, index) => (
                <ul className={`text-gray-100 hover:text-green-600 text-xl list-none ${isScrolled ? 'text-green-500' : ''}`}>
        <li key={index}>
          <a href={href} className={`text-gray-100 hover:text-green-600 text-xl list-none ${isScrolled ? 'text-green-500' : ''}`}>{label}</a>
        </li>
        </ul>
       
      ))}
            {/* Add other links similarly */}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden z-50 px-5">
            
            <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-gray-800 hover:text-green-600 focus:outline-none focus:text-green-600">
            {!isMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" className='' width="24" height="24" viewBox="0 0 24 24" stroke={`${!isScrolled ? 'white' : 'black'} `} strokeWidth="2">
  <path d="M2 5h20M2 12h20M2 19h20"/>
</svg> : '' }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`absolute top-0 inset-x-0  transition transform origin-top-right lg:hidden ${isMenuOpen ? 'scale-100' : 'hidden scale-95 opacity-0'}`}>
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img src={logo.src} alt="logo" className="h-8 w-auto" />
              </div>
              <div className="-mr-2">
                <button onClick={() => setMenuOpen(false)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  <path d="M0 0h24v24H0z" fill="none"/>
</svg>          </button>
              </div>
            </div>
            <div className="mt-6">
            <nav className="grid gap-y-4">
  <a href={homeLink} className="px-4 py-2 text-gray-900 hover:text-green-600 font-medium rounded-md hover:bg-gray-50">{homeTex}</a>
  <a href={aboutLink} className="px-4 py-2 text-gray-900 hover:text-green-600 font-medium rounded-md hover:bg-gray-50">{about}</a>
  <a href={servicesLink} className="px-4 py-2 text-gray-900 hover:text-green-600 font-medium rounded-md hover:bg-gray-50">{services}</a>
  <a href={portfolioLink} className="px-4 py-2 text-gray-900 hover:text-green-600 font-medium rounded-md hover:bg-gray-50">{portfolio}</a>
  {languageLinks.map(({ href, label }, index) => (
    <a key={index} href={href} className="px-4 py-2 text-green-600 hover:text-green-600 font-medium rounded-md hover:bg-gray-50">{label}</a>
  ))}
  {/* Add other links similarly */}
</nav>
            </div>
          </div>
          <div className="border-t border-blue-900 p-6 text-left font-bold  ">
  <span id="copyright" className="text-slate-900 text-base">
  &copy; Digital Arena {year}
</span>
    
</div>
        </div>
   
      </div>
    </div>
  );
};

export default Navbar;
