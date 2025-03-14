"use client";
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'; // Import icons
import Image from 'next/image';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle newsletter subscription
  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatusMessage('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    try {
      // Simulate sending the email to the backend or a service
      // Replace with your actual service logic
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setStatusMessage('Subscription successful!');
        setEmail('');
      } else {
        setStatusMessage(data.error || 'Something went wrong, please try again.');
      }
    } catch (error) {
      setStatusMessage('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Logo and Social Media Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 border-b border-white pb-6">
          <div className="flex items-center gap-6 mb-6 sm:mb-0">
            <Image
              src="/next.svg" // Update with your actual logo
              alt="Lawgical"
              width={120}
              height={40}
              priority
            />
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6">
            <Link href="https://www.linkedin.com" passHref>
              <FaLinkedin size={30} className="text-white hover:text-gray-300 transition-colors duration-300 ease-in-out" />
            </Link>
            <Link href="https://twitter.com" passHref>
              <FaTwitter size={30} className="text-white hover:text-gray-300 transition-colors duration-300 ease-in-out" />
            </Link>
            <Link href="https://www.facebook.com" passHref>
              <FaFacebook size={30} className="text-white hover:text-gray-300 transition-colors duration-300 ease-in-out" />
            </Link>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid sm:grid-cols-4 gap-12 mb-8 text-sm text-gray-400">
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Company</h4>
            <ul>
              <li>
                <Link href="/aboutus" passHref>
                  <span className="hover:text-gray-300 transition-colors duration-300 ease-in-out">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <span className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Contact</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" passHref>
                  <span className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" passHref>
                  <span className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Terms of Service</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Lawgical Services Section */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Lawgical Services</h4>
            <ul>
              <li>
                <Link href="/posco" passHref>
                  <span className="hover:text-gray-300 transition-colors duration-300 ease-in-out">POCSO (Prevention of Sexual Offenses)</span>
                </Link>
              </li>
              <li>
                <Link href="/posh" passHref>
                  <span className="hover:text-gray-300 transition-colors duration-300 ease-in-out">POSH (Prevention of Sexual Harassment)</span>
                </Link>
              </li>
              <li>
                <Link href="/corporate-law" passHref>
                  <span className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Corporate Law</span>
                </Link>
              </li>
              <li>
                <Link href="/litigation" passHref>
                  <span className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Litigation Services</span>
                </Link>
              </li>
              <li>
                <Link href="/contract-law" passHref>
                  <span className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Contract Law</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Resources</h4>
            <ul>
              <li>
                <Link href="/faq" passHref>
                  <span className="hover:text-gray-300 transition-colors duration-300 ease-in-out">FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" passHref>
                  <span className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/careers" passHref>
                  <span className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Careers</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Stay Updated</h4>
            <p className="mb-4 text-gray-300">Subscribe to our newsletter for legal tips, updates, and more.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-l-md border-none text-black w-72 mb-4 sm:mb-0 sm:w-64"
                required
                aria-label="Your email address"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-secondary text-white py-2 px-6 rounded-r-md hover:bg-secondary-dark transition-colors duration-300 ease-in-out"
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {statusMessage && (
              <p className={`mt-2 text-sm ${statusMessage.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
                {statusMessage}
              </p>
            )}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-400 mt-8">
          <p>&copy; {new Date().getFullYear()} Lawgical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
