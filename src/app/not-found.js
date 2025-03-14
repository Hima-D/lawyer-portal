import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Head from 'next/head';
import Link from 'next/link'; // Import Link from Next.js

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col px-6 sm:px-12">
      {/* Head Component for SEO */}
      <Head>
        <title>404 - Page Not Found | Lawyer Portal</title>
        <meta name="description" content="The page you are looking for cannot be found. Return to the homepage for further assistance." />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="404 - Page Not Found | Lawyer Portal" />
        <meta property="og:description" content="The page you are looking for cannot be found. Return to the homepage for further assistance." />
        <meta property="og:image" content="/404-lawyer.svg" />
        <meta property="og:url" content="https://yourwebsite.com/404" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="404 - Page Not Found | Lawyer Portal" />
        <meta name="twitter:description" content="The page you are looking for cannot be found. Return to the homepage for further assistance." />
        <meta name="twitter:image" content="/404-lawyer.svg" />
      </Head>

      {/* Header Component */}
      <Header />

      {/* Main content */}
      <div className="flex-grow flex items-center justify-center text-center pt-24 pb-24">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-7xl font-bold text-white mb-4 animate__animated animate__fadeIn">404</h1>
          <h2 className="text-4xl font-semibold text-gray-300 mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Oops! The Page You Are Looking For Cannot Be Found
          </h2>
          <p className="text-lg text-gray-400 mb-8 animate__animated animate__fadeIn animate__delay-2s">
            It seems the page you requested has been moved, deleted, or never existed. Don’t worry—our team is always ready to assist you, but for now, we suggest returning to the homepage.
          </p>

          {/* Lorempicsum 404 Image */}
          <div className="mb-8 animate__animated animate__fadeIn animate__delay-3s">
            <Image
              src="https://picsum.photos/500/400?text=404+Error+Image" // Lorempicsum placeholder image with custom text overlay
              alt="Placeholder 404 image"
              width={500}
              height={400}
              className="mx-auto"
            />
          </div>

          {/* Button to Homepage */}
          <div className="animate__animated animate__fadeIn animate__delay-4s">
            <Link
              href="/"
              className="bg-white text-black text-lg py-4 px-10 rounded-full hover:bg-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Return to Homepage
            </Link>
          </div>

          {/* Legal Counsel Section */}
          <div className="mt-12 animate__animated animate__fadeIn animate__delay-5s">
            <h3 className="text-2xl font-semibold text-white mb-6">Need Further Assistance?</h3>
            <p className="text-lg text-gray-300">
              If you believe this is an error or need help navigating, our legal team is ready to assist. Feel free to reach out through our contact page, and we’ll guide you back to safety.
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="text-lg text-primary hover:text-secondary transition-all duration-300"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default NotFound;
