// pages/notes/chemistry.js
import Link from 'next/link';

// === HELPER COMPONENT for Chapter Cards ===
// We can reuse the same component structure for consistency.
const ChapterCard = ({ icon, chapterNum, title, description, href }) => (
  <Link href={href}>
    <a className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col text-left h-full">
      <div className="flex items-center mb-4">
        <div className="text-4xl mr-4">{icon}</div>
        <div>
          <p className="font-bold text-gray-500">Chapter {chapterNum}</p>
          <h3 className="text-xl font-extrabold text-[#00796B]">{title}</h3> {/* Thematic Green */}
        </div>
      </div>
      <p className="text-gray-600 flex-grow mb-4">{description}</p>
      <div className="mt-auto bg-[#00796B] text-white font-bold py-2 px-4 rounded-lg text-center hover:bg-[#004D40] transition-colors duration-300">
        Start Learning
      </div>
    </a>
  </Link>
);

// This is the main page component for the Chemistry landing page.
export default function ChemistryHomePage() {
  return (
    <div className="bg-gray-50">
      
      {/* === HERO SECTION for Chemistry === */}
      <section className="text-center py-20 px-6 bg-[#E8F5E9]"> {/* Light Green Background */}
        <div className="text-6xl mb-4">🧪</div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#2E7D32]"> {/* Deep Chemistry Green */}
          Chemistry Study Materials
        </h1>
        <p className="text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
          Explore the building blocks of the universe, from chemical reactions to the compounds of daily life.
        </p>
      </section>

      {/* === WHY VIGYAN SARATHI FOR CHEMISTRY SECTION === */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold">Why Our Chemistry Notes Excel</h2>
            <p className="text-lg text-gray-600 mt-2">We make abstract chemical concepts tangible and easy to remember.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="text-5xl text-[#00796B] mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-2">Reaction-Focused</h3>
              <p className="text-gray-600">Special emphasis on frequently asked reactions, balancing equations, and understanding the 'why' behind chemical changes, not just the 'what'.</p>
            </div>
            <div>
              <div className="text-5xl text-[#00796B] mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-2">Practical Connections</h3>
              <p className="text-gray-600">We connect every topic, from acids and bases to carbon compounds, with their real-world applications and everyday examples to boost retention.</p>
            </div>
            <div>
              <div className="text-5xl text-[#00796B] mb-4">📋</div>
              <h3 className="text-2xl font-bold mb-2">Periodic Table Mastery</h3>
              <p className="text-gray-600">Learn trends and properties with unique mnemonics and clear visual guides, turning the periodic table into a powerful tool for exams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* === CLASS 9 SYLLABUS SECTION === */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12">Class 9 Chemistry Syllabus (Foundation)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ChapterCard 
              icon="🧊" 
              chapterNum="1" 
              title="Matter in Our Surroundings" 
              description="Understand the physical nature of matter, states of matter (solid, liquid, gas), and the processes of evaporation and cooling."
              href="/#"
            />
            <ChapterCard 
              icon="💧" 
              chapterNum="2" 
              title="Is Matter Around Us Pure?" 
              description="Learn the difference between mixtures and pure substances, solutions, suspensions, colloids, and separation techniques."
              href="/#"
            />
            <ChapterCard 
              icon="⚛️" 
              chapterNum="3" 
              title="Atoms and Molecules" 
              description="Explore the laws of chemical combination, Dalton's atomic theory, atomic mass, and the all-important mole concept."
              href="/#"
            />
            <ChapterCard 
              icon="🏛️" 
              chapterNum="4" 
              title="Structure of the Atom" 
              description="Journey through the discovery of subatomic particles (protons, neutrons, electrons) and models of the atom."
              href="/#"
            />
          </div>
        </div>
      </section>

      {/* === CLASS 10 SYLLABUS SECTION === */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12">Class 10 Chemistry Syllabus (Advanced Concepts)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <ChapterCard 
              icon="🔥" 
              chapterNum="1" 
              title="Chemical Reactions and Equations" 
              description="Master balancing chemical equations and identify different types of reactions: combination, decomposition, displacement, and redox."
              href="/#"
            />
            <ChapterCard 
              icon="🍋" 
              chapterNum="2" 
              title="Acids, Bases and Salts" 
              description="A deep dive into pH, indicators, and the properties of important compounds like Baking Soda and Plaster of Paris."
              href="/#"
            />
            <ChapterCard 
              icon="🔩" 
              chapterNum="3" 
              title="Metals and Non-metals" 
              description="Learn the physical and chemical properties of metals and non-metals, reactivity series, and the basics of metallurgy."
              href="/#"
            />
            <ChapterCard 
              icon="⛓️" 
              chapterNum="4" 
              title="Carbon and its Compounds" 
              description="Explore the versatile nature of carbon, covalent bonding, homologous series, and important carbon compounds like ethanol."
              href="/#"
            />
             <ChapterCard 
              icon="📜" 
              chapterNum="5" 
              title="Periodic Classification of Elements" 
              description="Trace the history of the periodic table from Döbereiner's triads to Mendeleev and the Modern Periodic Table."
              href="/#"
            />
          </div>
        </div>
      </section>

    </div>
  );
            }
