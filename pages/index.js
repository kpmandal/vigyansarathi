// pages/index.js

import { client } from '../lib/contentful';
import Link from 'next/link';

// === HELPER COMPONENT for Icon Cards ===
// We create small components like this to keep the main code cleaner.
const SubjectCard = ({ icon, title, description, href }) => (
  <Link href={href}>
    <a className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
      <div className="text-5xl mb-4 text-[#FFB300]">{icon}</div>
      <h3 className="text-2xl font-extrabold text-[#5E35B1] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  </Link>
);

// This is the main React component for the homepage.
export default function Home({ notes }) {
  return (
    <div className="bg-gray-50">
      
      {/* === HERO SECTION === */}
      <section className="text-center py-20 px-6 bg-white shadow-md">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#2962FF]">
          Master General Science for Your Dream Job
        </h1>
        <p className="text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
          Your personal charioteer through the complete science syllabus for UPSC, SSC, Railways, and other government exams.
        </p>
        <div className="mt-8">
          <Link href="/#notes-section">
            <a className="bg-[#FFB300] text-[#333333] font-bold py-4 px-8 rounded-full text-lg hover:bg-[#FFA000] transform hover:scale-105 transition-all duration-300">
              Start Learning Now
            </a>
          </Link>
        </div>
      </section>

      {/* === CORE SUBJECTS SECTION === */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold">Start Your Journey</h2>
            <p className="text-lg text-gray-600">Choose a subject to begin your path to mastery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <SubjectCard icon="⚛️" title="Physics" description="Uncover the principles of motion, light, electricity, and the universe." href="/#" />
            <SubjectCard icon="🧪" title="Chemistry" description="Explore matter, reactions, acids, bases, and the elements that build our world." href="/#" />
            <SubjectCard icon="🧬" title="Biology" description="Dive into the study of life, from the smallest cells to complex human anatomy." href="/#" />
          </div>
        </div>
      </section>

      {/* === HOW IT WORKS SECTION === */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-12">Our 3-Step Path to Mastery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="text-6xl text-[#5E35B1] mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-2">1. Learn the Concepts</h3>
              <p className="text-gray-600">Study from our meticulously crafted, exam-focused notes based on NCERT syllabi. Clear explanations and diagrams make complex topics simple.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl text-[#5E35B1] mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-2">2. Practice & Assess</h3>
              <p className="text-gray-600">Test your knowledge with targeted quizzes and a vast question bank of previous year questions (PYQs) to identify your strengths and weaknesses.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl text-[#5E35B1] mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-2">3. Revise & Retain</h3>
              <p className="text-gray-600">Master key facts, formulas, and definitions with our smart revision tools and flashcards, ensuring long-term memory retention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* === LATEST NOTES SECTION (CTA Section) === */}
      <section id="notes-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12">Explore Our Latest Study Notes</h2>
          {notes && notes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {notes.slice(0, 6).map(note => ( // Display up to 6 latest notes
                <div key={note.sys.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                  {note.fields.featuredImage && (
                    <img src={`https:${note.fields.featuredImage?.fields.file.url}`} alt={note.fields.title} className="w-full h-56 object-cover" />
                  )}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-dark-text">{note.fields.title}</h3>
                    <p className="text-gray-600 mt-2 flex-grow">{note.fields.excerpt}</p>
                    <Link href={`/notes/${note.fields.slug}`}>
                      <a className="inline-block mt-6 bg-[#2962FF] text-white font-bold py-3 px-6 rounded-lg text-center hover:bg-[#1E88E5] transition-colors duration-300">
                        Read More →
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 text-xl py-10">
              <p>📚 No study notes have been published yet. Please check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* === TESTIMONIALS SECTION === */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12">From Aspirants to Achievers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 italic">"The topic-wise quizzes were a game-changer for my SSC CGL preparation. I could pinpoint my weak areas in Chemistry and improve my score significantly. Thank you, Vigyan Sarathi!"</p>
              <div className="flex items-center mt-6">
                <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div> {/* Placeholder for image */}
                <div>
                  <p className="font-bold text-lg">Priya Sharma</p>
                  <p className="text-gray-600">Cleared SSC CGL</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 italic">"As a Railways aspirant, the detailed notes on Physics, especially the diagrams and simple explanations, made all the difference. The PYQ bank is the best I have seen anywhere."</p>
              <div className="flex items-center mt-6">
                <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div> {/* Placeholder for image */}
                <div>
                  <p className="font-bold text-lg">Rohit Verma</p>
                  <p className="text-gray-600">Cleared RRB NTPC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CALL-TO-ACTION SECTION === */}
      <section className="py-20 bg-[#5E35B1]"> {/* Deep Purple Background */}
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white">Ready to Master General Science?</h2>
          <p className="text-xl text-purple-200 mt-4 max-w-2xl mx-auto">Join thousands of successful aspirants. Get access to premium notes, unlimited quizzes, and a proven path to success.</p>
          <div className="mt-8">
            <button className="bg-[#FFB300] text-[#333333] font-bold py-4 px-8 rounded-full text-lg hover:bg-[#FFA000] transform hover:scale-105 transition-all duration-300">
              Sign Up for Free & Start Learning
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

// This function fetches the data for the "Latest Notes" section at build time.
export async function getStaticProps() {
  const response = await client.getEntries({ content_type: 'scienceNote', order: '-sys.createdAt' }); // Order by creation date
  return {
    props: {
      notes: response.items || [],
    },
    revalidate: 60,
  };
  }
