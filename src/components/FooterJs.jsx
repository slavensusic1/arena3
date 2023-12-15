import React, { useEffect } from 'react';
import logo from '../assets/digitalarena.png';


const FooterJs = ({it,ict,energetics, isoGdprCisco,translatedParagraf,
    translatedEnergetika,services,urediHR,urediBiH}) => {
 const cur=new Date()
 const year =cur.getFullYear()


  return (
    <footer className="bg-gray-900 text-center text-neutral-600  lg:text-left ">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 lg:justify-between">
        <div className="mr-12 hidden lg:block"></div>
      </div>


      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="">
            <h6 className="mb-4 flex items-center justify-start font-semibold uppercase md:justify-start">
              <img src={logo.src} alt="logo" className="w-1/2" id="logo" />
            </h6>
            <p className="text-left text-white" data-cy='paragraf-footer' data-i18n="translatedParagraf">
              {translatedParagraf}
            </p>
            <div className="flex justify-left py-5">
           
              <a href='https://www.linkedin.com/company/digitalarenadoo' target="_blank"  data-cy="linkedin-link" className="mr-6 text-neutral-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>

            </div>
          </div>

          <div className=" text-left">
            <h6 className="mb-4 flex justify-left font-bold text-gray-200 text-xl pb-2 md:justify-start border-b ">
              {services}
            </h6>
            <p className="mb-4">
              <a href={it} data-cy="it-link" className="text-neutral-200 hover:text-green-500 hover:underline underline-offset-2">IT</a>
            </p>
            <p className="mb-4">
              <a href={ict} data-cy="ict-link" className="text-neutral-200 hover:text-green-500 hover:underline">ICT</a>
            </p>
            <p className="mb-4">
              <a href={energetics} data-cy="it-energetics" className="text-neutral-200 hover:text-green-500 hover:underline">{translatedEnergetika}</a>
            </p>
            <p>
              <a href={isoGdprCisco} data-cy="it-iso" className="text-neutral-200 hover:text-green-500 hover:underline">GDPR ISO CISO</a>
            </p>
          </div>

          <div className=" text-left">

            <section className=" text-left">
              <h6 className="mb-4 flex justify-left font-bold  text-xl pb-2 md:justify-start border-b text-gray-200" data-cy="uredi-hr">
                {urediHR}
              </h6>
              <p className="mb-4 flex items-start justify-start md:justify-start text-neutral-200" data-cy="uredi-zg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path
                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                Zagreb, XI Podbrežje 11a
              </p>
              <p className="mb-4 flex items-start justify-start md:justify-start text-neutral-200" data-cy="uredi-st">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path
                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>

                Split, Put Pazdigrada 14
              </p>
              <p className="mb-4 flex items-start justify-start md:justify-start text-neutral-200" data-cy="uredi-im">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path
                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                Št. Stjepana Radića 16, Imotski
              </p>

              <p className="mb-4 text-neutral-200 flex items-start justify-start md:justify-start" data-cy="tel-hr">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd" />
                </svg>
                +385 99 505 8114
              </p>
              <p className="text-neutral-200 pb-5" data-cy="oib-hr">OIB: 69476362249</p>
            </section>
          </div>

      <section className=" text-left">
        <h6
          className="mb-4 flex justify-left font-bold  text-xl pb-2 md:justify-start border-b text-gray-200" data-cy="uredi-bih">
         {urediBiH}
        </h6>
        <p className="mb-4 flex items-start justify-start md:justify-start text-neutral-200" data-cy="ured-lju">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5">
            <path
              d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path
              d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          Ljubuški, Šipovača 84
        </p>
        <p className="mb-4 flex items-start justify-start md:justify-start text-neutral-200" data-cy="uredi-cap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5">
            <path
              d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path
              d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          
          Čapljina,  Braće Radića bb
        </p>
       
        
        <p className="mb-4  text-neutral-200 flex items-start justify-start md:justify-start" data-cy="tel-bih">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-5 w-5">
          <path
            fill-rule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clip-rule="evenodd" />
        </svg>
        +387 63 011 333
      </p>
      <p className="text-neutral-200 pb-5" data-cy="oib-bih"> JIB/OIB: 4272 4789 0000 1</p>
    
     
      </section>
  </div>
</div>

  <div className="bg-gray-800 border-t border-white p-6 text-left text-white font-bold  ">
  <span id="copyright" className="text-gray-200 text-xl">
  &copy; Digital Arena {year}
</span>
    
</div>
</footer>
  )

}

export default FooterJs