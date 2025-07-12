// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* === Site Title / Logo === */}
        <div className="text-3xl font-extrabold text-[#5E35B1]"> {/* Deep Purple */}
          <Link href="/">
            <a className="flex items-center space-x-2">
              <span>Vigyan Sarathi</span>
              <span>🏇</span>
            </a>
          </Link>
        </div>

        {/* === Main Navigation Menu with Dropdown === */}
        <nav>
          <ul className="flex items-center space-x-10 text-lg font-bold">
            
            {/* === Dropdown Menu for "Notes" === */}
            <li className="relative group">
              {/* This is the main "Notes" button that triggers the dropdown */}
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#FFB300] transition-colors duration-300">
                <span>Notes</span>
                {/* Dropdown Arrow SVG Icon */}
                <svg className="w-4 h-4 mt-1 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
              {/* The Submenu - hidden by default, shown on group hover */}
              <div className="absolute z-10 hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-48 py-2">
                <Link href="/notes/physics">
                  <a className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#F3E5F5] hover:text-[#5E35B1] transition-colors duration-200">Physics</a>
                </Link>
                <Link href="/notes/chemistry">
                  <a className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#F3E5F5] hover:text-[#5E35B1] transition-colors duration-200">Chemistry</a>
                </Link>
                <Link href="/notes/biology">
                  <a className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#F3E5F5] hover:text-[#5E35B1] transition-colors duration-200">Biology</a>
                </Link>
                <Link href="/notes/environment">
                  <a className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#F3E5F5] hover:text-[#5E35B1] transition-colors duration-200">Environment</a>
                </Link>
              </div>
            </li>

            {/* === Other Main Menu Items === */}
            <li>
              <Link href="/quizzes"><a className="text-gray-700 hover:text-[#FFB300] transition-colors duration-300">Quizzes</a></Link>
            </li>
            <li>
              <Link href="/question-bank"><a className="text-gray-700 hover:text-[#FFB300] transition-colors duration-300">Question Bank</a></Link>
            </li>
            <li>
              <Link href="/about"><a className="text-gray-700 hover:text-[#FFB300] transition-colors duration-300">About</a></Link>
            </li>

          </ul>
        </nav>

        {/* === Call-to-Action Button === */}
        <div>
          <button className="bg-[#FFB300] text-[#333333] font-bold py-3 px-6 rounded-full hover:bg-[#FFA000] transform hover:scale-105 transition-all duration-300">
            Practice Now
          </button>
        </div>
        
      </div>
    </header>
  );
                  }
