// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#212529] text-[#E0E0E0]"> {/* Dark Grey Background, Light Grey Text */}
      <div className="container mx-auto px-6 py-10">
        
        {/* === Top Section: Brand & Socials === */}
        <div className="flex flex-col items-center text-center pb-8">
          <h2 className="text-3xl font-extrabold text-white">
            Vigyan Sarathi 🏇
          </h2>
          <p className="max-w-md mt-2 text-lg">
            Your Ultimate Guide to Mastering General Science for All Government Job Exams.
          </p>
          <div className="flex space-x-6 mt-6">
            <a href="#" className="hover:text-[#FFB300] transition-colors duration-300" aria-label="YouTube">
              {/* YouTube SVG Icon */}
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" role="img"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="#" className="hover:text-[#FFB300] transition-colors duration-300" aria-label="Telegram">
              {/* Telegram SVG Icon */}
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" role="img"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 8.243l-2.04 9.63c-.153.718-.56 1.01-1.127.63l-4.14-3.055-1.99 1.912c-.22.22-.403.393-.733.393l.28-4.22 7.82-7.01c.33-.293-.07-.46-.52-.164l-9.66 6.06-4.08-1.26c-.71-.22-.72-.77.13-.99l15.19-5.83c.59-.223 1.14.33 1.01 1.01z"/></svg>
            </a>
            <a href="#" className="hover:text-[#FFB300] transition-colors duration-300" aria-label="Twitter">
              {/* Twitter SVG Icon */}
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" role="img"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.296 1.634 4.208 3.803 4.649-.67.183-1.37.223-2.067.087.609 1.888 2.378 3.268 4.478 3.307-1.745 1.455-3.899 2.25-6.248 2.25-.407 0-.806-.024-1.2-.074 2.168 1.533 4.649 2.424 7.29 2.424 8.61 0 13.32-7.23 13.01-13.625.9-.645 1.6-1.46 2.2-2.373z"/></svg>
            </a>
          </div>
        </div>

        {/* === Bottom Section: Copyright & Links === */}
        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-md mb-4 sm:mb-0">
            © {currentYear} Vigyan Sarathi. All Rights Reserved.
          </p>
          <div className="flex space-x-6 font-bold text-md">
            <Link href="/#"><a className="hover:text-[#FFB300] transition-colors duration-300">About Us</a></Link>
            <Link href="/#"><a className="hover:text-[#FFB300] transition-colors duration-300">Contact</a></Link>
            <Link href="/#"><a className="hover:text-[#FFB300] transition-colors duration-300">Privacy Policy</a></Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
