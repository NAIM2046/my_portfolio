import React from "react";
import linkedin from "./../assets/linkedin.png";
import github from "./../assets/images.png";
import twitter from "./../assets/twitter.jpg";
const Contactpage = () => {
  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-red-500 font-bold text-lg uppercase">Contact</h2>
          <h1 className="text-4xl font-bold mt-2">Get In Touch</h1>
          <p className="mt-4 text-gray-700">
            Feel free to reach out to me using the form below or through my
            contact details. Let's build something amazing together!
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-4"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-4"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-red-500 text-white rounded-md font-medium hover:bg-red-600"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Contact Information
            </h3>
            <p className="mt-4 text-gray-600">
              Reach out to me through the following contact details:
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <p className="font-medium text-gray-800">Email</p>
                <a
                  href="mailto:naim2046juiit@gmail.com"
                  className="text-red-500 hover:underline"
                >
                  naim2046juiit@gmail.com
                </a>
              </div>
              <div>
                <p className="font-medium text-gray-800">Phone</p>
                <p className="text-gray-600">+8801875990127</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Follow Me</p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/md-naim-41331b24b/"
                    className="text-red-500 hover:underline"
                  >
                    <img className="w-[50px]" src={linkedin}></img>
                  </a>
                  <a
                    href="https://github.com/NAIM2046"
                    className="text-red-500 hover:underline"
                  >
                    <img className="w-[50px]" src={github}></img>
                  </a>
                  <a href="#" className="text-red-500 hover:underline">
                    <img className="w-[50px]" src={twitter}></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Map Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 text-center">
            My Location
          </h3>
          <div className="mt-8">
            <iframe
              title="Map"
              className="w-full h-64 rounded-md shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9111063769415!2d90.3654217144566!3d23.750876194602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a49dc85871%3A0xb2043b5e3de4e345!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1686227699480!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
