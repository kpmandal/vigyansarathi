// pages/notes/physics.js
import Link from 'next/link';

// === HELPER COMPONENT for Chapter Cards ===
// This makes our main code cleaner and easier to manage.
const ChapterCard = ({ icon, chapterNum, title, description, href }) => (
  <Link href={href}>
    <a className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col text-left h-full">
      <div className="flex items-center mb-4">
        <div className="text-4xl mr-4">{icon}</div>
        <div>
          <p className="font-bold text-gray-500">Chapter {chapterNum}</p>
          <h3 className="text-xl font-extrabold text-[#1E88E5]">{title}</h3>
        </div>
      </div>
      <p className="text-gray-600 flex-grow mb-4">{description}</p>
      <div className="mt-auto bg-[#1E88E5] text-white font-bold py-2 px-4 rounded-lg text-center hover:bg-[#1565C0] transition-colors duration-300">
        Start Learning
      </div>
    </a>
  </Link>
);

// This is the main page component for the Physics landing page.
export default function PhysicsHomePage() {
  return (
    <div className="bg-gray-50">
      
      {/* === HERO SECTION for Physics === */}
      <section className="text-center py-20 px-6 bg-[#E3F2FD]"> {/* Light Blue Background */}
        <div className="text-6xl mb-4">⚛️</div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#1565C0]"> {/* Deep Physics Blue */}
          Physics Study Materials
        </h1>
        <p className="text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
          Unlock the secrets of the universe. Your complete guide to mastering Physics for all competitive exams.
        </p>
      </section>

      {/* === WHY VIGYAN SARATHI FOR PHYSICS SECTION === */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold">Why Our Physics Notes are a Game-Changer</h2>
            <p className="text-lg text-gray-600 mt-2">We don't just teach formulas; we build intuition.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="text-5xl text-[#1E88E5] mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-2">Exam-Focused Content</h3>
              <p className="text-gray-600">Every topic is tailored to the syllabi of SSC, Railways, and PSC exams, focusing on high-yield concepts and previous year question patterns.</p>
            </div>
            <div>
              <div className="text-5xl text-[#1E88E5] mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-2">Crystal Clear Explanations</h3>
              <p className="text-gray-600">Complex topics like electromagnetism and optics are broken down into simple, step-by-step explanations with diagrams and real-world examples.</p>
            </div>
            <div>
              <div className="text-5xl text-[#1E88E5] mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-2">Formulas & Units Mastered</h3>
              <p className="text-gray-600">Get dedicated summaries and flashcards for all important formulas, SI units, and physical constants to ensure they are at your fingertips.</p>
            </div>
          </div>
        </div>
      </section>

      {/* === CLASS 9 SYLLABUS SECTION === */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12">Class 9 Physics Syllabus (Foundation)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ChapterCard 
              icon="🏃" 
              chapterNum="8" 
              title="Motion" 
              description="Learn about distance, displacement, velocity, and acceleration. Master the three equations of motion and their applications."
              href="/notes/pages/physics/chapter-8-motion"
            />
            <ChapterCard 
              icon="💪" 
              chapterNum="9" 
              title="Force and Laws of Motion" 
              description="Understand Newton's three laws, inertia, momentum, and the fundamental concept of force."
              href="/#"
            />
            <ChapterCard 
              icon="🌍" 
              chapterNum="10" 
              title="Gravitation" 
              description="Explore the universal law of gravitation, free fall, mass vs. weight, and the principles of buoyancy and pressure."
              href="/#"
            />
            <ChapterCard 
              icon="🔨" 
              chapterNum="11" 
              title="Work and Energy" 
              description="Grasp the concepts of work done, kinetic and potential energy, the law of conservation of energy, and power."
              href="/#"
            />
            <ChapterCard 
              icon="🔊" 
              chapterNum="12" 
              title="Sound" 
              description="Dive into the nature of sound waves, their propagation, characteristics, reflection (echo), and the structure of the human ear."
              href="/#"
            />
          </div>
        </div>
      </section>

      {/* === CLASS 10 SYLLABUS SECTION === */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12">Class 10 Physics Syllabus (Advanced Concepts)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <ChapterCard 
              icon="💡" 
              chapterNum="10" 
              title="Light – Reflection and Refraction" 
              description="Master spherical mirrors and lenses, image formation, the mirror formula, and the concept of refractive index."
              href="/#"
            />
            <ChapterCard 
              icon="👁️" 
              chapterNum="11" 
              title="The Human Eye and the Colourful World" 
              description="Understand the functioning of the human eye, defects of vision, and fascinating phenomena like dispersion and scattering of light."
              href="/#"
            />
            <ChapterCard 
              icon="⚡" 
              chapterNum="12" 
              title="Electricity" 
              description="Learn about electric current, potential difference, Ohm's law, resistance, and the heating effect of current."
              href="/#"
            />
            <ChapterCard 
              icon="🧲" 
              chapterNum="13" 
              title="Magnetic Effects of Electric Current" 
              description="Explore magnetic fields, Fleming's rules, electric motors, and the principle of electromagnetic induction."
              href="/#"
            />
             <ChapterCard 
              icon="☀️" 
              chapterNum="14" 
              title="Sources of Energy" 
              description="Differentiate between renewable and non-renewable energy sources, including solar, wind, and nuclear energy."
              href="/#"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
