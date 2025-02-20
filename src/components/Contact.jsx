import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');

    const formData = new FormData(event.target);
    formData.append('access_key', 'b6bd369d-882b-4280-b101-122fed7eaba4');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.error('Error:', data);
      setResult(data.message);
    }
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full min-h-screen lg:pl-[110px] flex justify-center items-center px-4">
      <form
        onSubmit={onSubmit}
        className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000"
      >
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Get In Touch!!
          </h2>
          <p className="text-gray-600 mb-4 text-[12px] lg:text-base">
            Let's talk about your idea! Don't like forms? Send me an email.
          </p>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 mt-4 bg-purple-600 text-white py-3 rounded-full hover:cursor-pointer hover:bg-purple-700 transition-all"
        >
          <Send size={20} />
          <span>Send Message</span>
        </button>
        {result && <p className="text-center mt-4 text-gray-700">{result}</p>}
      </form>
    </div>
  );
};

export default Contact;
