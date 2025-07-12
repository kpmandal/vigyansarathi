// pages/notes/environment.js
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
          <h3 className="text-xl font-extrabold text-[#16A085]">{title}</h3> {/* Thematic Teal */}
        </div>
      </div>
      <p className="text-gray-600 flex-grow mb-4">{description}</p>
      <div className="mt-auto bg-[#16A085] text-white font-bold py-2 px-4 rounded-lg text-center hover:bg-[#117A65] transition-colors duration-300">
        Start Learning
      </div>
    </a>
  </Link>
);

// This is the main page component for the Environment landing page.
export default function EnvironmentHomePage() {
  return (
    <div className="bg-gray-50">
      
      {/* === HERO SECTION for Environment === */}
      <section className="text-center py-20 px-6 bg-[#E6F4F1]"> {/* Light Teal Background */}
        <div className="text-6xl mb-4">🌍</div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#117A65]"> {/* Deep Earthy Teal */}
          Environment & Ecology
        </h1>
        <p className="text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
          Understand the critical environmental issues and ecological principles frequently asked in competitive exams.
        </p>
      </section>

      {/* === WHY VIGYAN SARATHI FOR ENVIRONMENT SECTION === */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold">Why Our Environment Notes are Essential</h2>
            <p className="text-lg text-gray-600 mt-2">Connecting textbook knowledge with real-world issues for deeper understanding.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="text-5xl text-[#16A085] mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-2">High Scoring Potential</h3>
              <p className="text-gray-600">Environment is a high-priority topic in UPSC, State PSCs, and other major exams. Our notes are designed to help you score maximum marks.</p>
            </div>
            <div>
              <div className="text-5xl text-[#16A085] mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-2">Complex Cycles Simplified</h3>
              <p className="text-gray-600">We break down intricate topics like biogeochemical cycles (Carbon, Nitrogen), food webs, and biomagnification into easy-to-digest concepts.</p>
            </div>
            <div>
              <div className="text-5xl text-[#16A085] mb-4">📰</div>
              <h3 className="text-2xl font-bold mb-2">Current Affairs Linkage</h3>
              <p className="text-gray-600">Our materials help you connect static syllabus topics with current environmental news, a crucial skill for mains examinations and interviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* === KEY TOPICS SECTION === */}
      {/* Since Environment chapters are spread across books, we'll list them as key topics. */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12">Key Environmental Topics (NCERT Syllabus)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ChapterCard 
              icon="🏞️" 
              chapterNum="15 (Class 10)" 
              title="Our Environment" 
              description="Learn about ecosystems, producers, consumers, decomposers, food chains, food webs, and critical issues like ozone layer depletion."
              href="/#"
            />
            <ChapterCard 
              icon="💧" 
              chapterNum="14 (Class 9)" 
              title="Natural Resources" 
              description="A foundational chapter on the lithosphere, hydrosphere, and atmosphere, focusing on crucial biogeochemical cycles."
              href="/#"
            />
            <ChapterCard 
              icon="♻️" 
              chapterNum="16 (Class 10)" 
              title="Management of Natural Resources" 
              description="Explore the concepts of conservation, sustainable development, and the 5 R's to Save the Environment."
              href="/#"
            />
             <ChapterCard 
              icon="☀️" 
              chapterNum="14 (Class 10)" 
              title="Sources of Energy" 
              description="Differentiate between conventional/non-conventional and renewable/non-renewable energy sources like solar, wind, and biomass."
              href="/#"
            />
            <ChapterCard 
              icon="🩺" 
              chapterNum="13 (Class 9)" 
              title="Why Do We Fall Ill?" 
              description="Understand the link between our health and environmental factors like the availability of clean drinking water and air."
              href="/#"
            />
          </div>
        </div>
      </section>

    </div>
  );
            }
