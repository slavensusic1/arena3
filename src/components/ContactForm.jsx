import React from 'react';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.send(
          "service_w5v5cko",
          "template_ibc09bu",
          formRef.current,
          "eJii_nyWbjTRjgHLE"
      ).then((result) => {
          console.log('Email successfully sent!', result.text);
      }).catch((error) => {
          console.error('There was an error sending the email:', error);
      });

      e.target.reset(); // Resets the form after submission
  };

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        title="map"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=45.781694,15.963762&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                        style={{ filter: "opacity(0.9)" }}
                    ></iframe>
                    <div className="bg-white relative flex flex-wrap py-2 rounded shadow-md ">
                        <div className="lg:w-1/2 px-2">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm">Adresa</h2>
                            <ul className="mt-1">
                                <li>Zagreb, XI Podbrežje 11a</li>
                            </ul>
                        </div>
                        <div className="lg:w-1/2 px-2 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">eMail</h2>
                            <a href="mailto:info@digitalarena.hr" className="text-green-500 leading-relaxed">info@digitalarena.hr</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Telefon</h2>
                            <p className="leading-relaxed">+385 99 505 8114</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 dark:bg-gray-900">

                    <p className="leading-relaxed mb-5 text-gray-600 text-center dark:text-gray-100">Pošaljite nam Vaše pitanje</p>
                    <form ref={formRef} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" className='bg-gray-100' />
                        <label>Email</label>
                        <input type="email" name="user_email" className='bg-gray-100' />
                        <label>Message</label>
                        <textarea name="message" className='bg-gray-100' />
                        <input type="submit" value="Send" className='bg-gray-100' />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
