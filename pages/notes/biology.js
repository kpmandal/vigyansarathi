// pages/notes/biology.js
import Link from 'next/link';

// === HELPER COMPONENT for Chapter Cards ===
// Reusing the same component structure for brand consistency.
const ChapterCard = ({ icon, chapterNum, title, description, href }) => (
  <Link href={href}>
    <a className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col text-left h-full">
      <div className="flex items-center mb-4">
        <div className="text-4xl mr-4">{icon}</div>
        <div>
          <p className="font-bold text-gray-500">Chapter {chapterNum}</p>
          <h3 className="text-xl font-extrabold text-[#F57C00]">{title}</h3> {/* Thematic Orange */}
        </div>
      </div>
      <p className="text-gray-600 flex-grow mb-4">{description}</p>
      <div className="mt-auto bg-[#F57C00] text-white font-bold py-2 px-4 rounded-lg text-center hover:bg-[#E65100] transition-colors duration-300">
        Start Learning
      </div>
    </a>
  </Link>
);

// This is the main page component for the Biology landing page.
export default function BiologyHomePage() {
  return (
    <div className="bg-gray-50">
      
      {/* === HERO SECTION for Biology === */}
      <section className="text-center py-20 px-6 bg-[#FFF3E0]"> {/* Light Orange Background */}
        <div className="text-6xl mb-4">🧬</div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#E65100]"> {/* Deep Biology Orange */}
          Biology Study Materials
        </h1>
        <p className="text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
          Explore the fascinating world of life, from microscopic cells to the complexities of the human body.
        </p>
      </section>

      {/* === WHY VIGYAN SARATHI FOR BIOLOGY SECTION === */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold">Why Our Biology Notes are Unmatched</h2>
            <p className="text-lg text-gray-600 mt-2">We simplify the science of life with a focus on diagrams and exam patterns.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="text-5xl text-[#F57C00] mb-4">✍️</div>
              <h3 className="text-2xl font-bold mb-2">Detailed Diagrams</h3>
              <p className="text-gray-600">Master complex systems like the human heart, brain, and plant cells with our clear, well-labelled, and easy-to-reproduce diagrams.</p>
            </div>
            <div>
              <div className="text-5xl text-[#F57C00] mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-2">Systemic Approach</h3>
              <p className="text-gray-600">We teach life processes, control, and coordination as interconnected systems, helping you build a holistic understanding that sticks.</p>
            </div>
            <div>
              <div className="text-5xl text-[#F57C00] mb-4">📋</div>
              <h3 className="text-2xl font-bold mb-2">Exam Hotspots</h3>
              <p className="text-gray-600">Special focus on frequently asked topics like vitamins and deficiencies, human diseases, and plant hormones, directly from an exam perspective.</p>
            </div>
          </div>
        </div>
      </section>

      {/* === CLASS 9 SYLLABUS SECTION === */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12">Class 9 Biology Syllabus (Foundation)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ChapterCard 
              icon="🧱" 
              chapterNum="5" 
              title="The Fundamental Unit of Life" 
              description="Discover the cell, its organelles like mitochondria and nucleus, and the core differences between plant and animal cells."
              href="/#"
            />
            <ChapterCard 
              icon="🌿" 
              chapterNum="6" 
              title="Tissues" 
              description="Learn about plant tissues (meristematic, permanent) and animal tissues (epithelial, connective, muscular, nervous)."
              href="/#"
            />
            <ChapterCard 
              icon="🐾" 
              chapterNum="7" 
              title="Diversity in Living Organisms" 
              description="Explore the basis of classification, the five-kingdom system, and the hierarchy from phylum to species."
              href="/#"
            />
             <ChapterCard 
              icon="🩺" 
              chapterNum="13" 
              title="Why Do We Fall Ill?" 
              description="Understand the concepts of health and disease, infectious vs. non-infectious diseases, and principles of treatment."
              href="/#"
            />
            <ChapterCard 
              icon="♻️" 
              chapterNum="14" 
              title="Natural Resources" 
              description="Learn about the interplay of air, water, and soil, and crucial biogeochemical cycles like the carbon and nitrogen cycles."
              href="/#"
            />
          </div>
        </div>
      </section>

      {/* === CLASS 10 SYLLABUS SECTION === */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12">Class 10 Biology Syllabus (Advanced Concepts)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <ChapterCard 
              icon="❤️" 
              chapterNum="6" 
              title="Life Processes" 
              description="A deep dive into the four essential processes: nutrition, respiration, transportation, and excretion in both plants and animals."
              href="/#"
            />
            <ChapterCard 
              icon="🧠" 
              chapterNum="7" 
              title="Control and Coordination" 
              description="Understand the human nervous system (brain, spinal cord) and the endocrine system (hormones) in animals and plants."
              href="/#"
            />
            <ChapterCard 
              icon="🌱" 
              chapterNum="8" 
              title="How do Organisms Reproduce?" 
              description="Explore modes of reproduction (asexual and sexual), reproductive health, and the reproductive systems in humans and flowers."
              href="/#"
            />
            <ChapterCard 
              icon="👨‍👩‍👧‍👦" 
              chapterNum="9" 
              title="Heredity and Evolution" 
              description="Grasp the basics of Mendel's contributions to genetics, and understand the core concepts of evolution and speciation."
              href="/#"
            />
             <ChapterCard 
              icon="🏞️" 
              chapterNum="15" 
              title="Our Environment" 
              description="Learn about ecosystems, food chains, food webs, and critical environmental problems like ozone depletion."
              href="/#"
            />
          </div>
        </div>
      </section>

    </div>
  );
            }
