import React from 'react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-24 px-4 text-center md:text-left">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Empowering Athletes, Building Champions
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Join our platform to connect with sports opportunities, training, and resources that will help you achieve your athletic goals.
          </p>
          <a href="/sign-in" className="bg-yellow-500 text-black py-2 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-600 transition duration-200">
            Get Started
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100 text-gray-900">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Athlonet</h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            Athlonet is a platform dedicated to providing athletes with personalized training, sports events, and networking opportunities. We help aspiring athletes and sports enthusiasts connect with the right resources to advance their careers.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Training Programs</h3>
              <p className="text-lg">Customized training plans to enhance athletic performance and physical fitness.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Sports Events</h3>
              <p className="text-lg">Stay updated with the latest sports competitions and events for athletes of all levels.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Networking</h3>
              <p className="text-lg">Connect with other athletes, coaches, and sports professionals to advance your career.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg sm:text-xl mb-6">
            Have any questions or want to learn more about how we can help? Reach out to us today!
          </p>
          <a href="/contact" className="bg-yellow-500 text-black py-2 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-600 transition duration-200">
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Athlonet. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
