// components/Header.js
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  // We use a state to track if the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Main Header Bar */}
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        
        {/* === Site Title / Logo === */}
        <div className="text-2xl md:text-3xl font-extrabold text-[#2962FF]"> {/* Professional Blue */}
          <Link href="/">
            <a className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
              <span>Vigyan Sarathi</span>
              <span className="text-2xl">🏇</span>
            </a>
          </Link>
        </div>

        {/* === Desktop Navigation Menu (Hidden on Mobile) === */}
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-8 text-lg font-bold">
            {/* Dropdown Menu for "Notes" */}
            <li className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-accent transition-colors duration-300">
                <span>Notes</span>
                <svg className="w-4 h-4 mt-1 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute z-10 hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-48 py-2">
                <Link href="/notes/physics"><a className="block px-4 py-3 text-sm text-gray-700 hover:bg-accent-light hover:text-accent">Physics</a></Link>
                <Link href="/notes/chemistry"><a className="block px-4 py-3 text-sm text-gray-700 hover:bg-accent-light hover:text-accent">Chemistry</a></Link>
                <Link href="/notes/biology"><a className="block px-4 py-3 text-sm text-gray-700 hover:bg-accent-light hover:text-accent">Biology</a></Link>
                <Link href="/notes/environment"><a className="block px-4 py-3 text-sm text-gray-700 hover:bg-accent-light hover:text-accent">Environment</a></Link>
              </div>
            </li>
            <li><Link href="/#"><a className="text-gray-700 hover:text-accent">Quizzes</a></Link></li>
            <li><Link href="/#"><a className="text-gray-700 hover:text-accent">Question Bank</a></Link></li>
            <li><Link href="/#"><a className="text-gray-700 hover:text-accent">About</a></Link></li>
          </ul>
        </nav>

        {/* === Hamburger Menu Button (Visible on Mobile Only) === */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
            <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>

      </div>

      {/* === Mobile Menu Panel (Slide-out) === */}
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      
      {/* Sliding Menu */}
      <div className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-5 border-b flex justify-between items-center">
          <span className="text-xl font-extrabold text-[#2962FF]">Menu</span>
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        
        <nav className="mt-4">
          <ul className="text-lg font-bold">
            <li className="font-extrabold px-5 py-3 text-gray-500 text-sm uppercase">Notes</li>
            <li><Link href="/notes/physics"><a className="block px-5 py-3 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Physics</a></Link></li>
            <li><Link href="/notes/chemistry"><a className="block px-5 py-3 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Chemistry</a></Link></li>
            <li><Link href="/notes/biology"><a className="block px-5 py-3 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Biology</a></Link></li>
            <li><Link href="/notes/environment"><a className="block px-5 py-3 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Environment</a></Link></li>
            
            <li className="border-t mt-4"><Link href="/#"><a className="block px-5 py-4 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Quizzes</a></Link></li>
            <li><Link href="/#"><a className="block px-5 py-4 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Question Bank</a></Link></li>
            <li><Link href="/#"><a className="block px-5 py-4 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>About</a></Link></li>
          </ul>
        </nav>
      </div>

    </header>
  );
          }
