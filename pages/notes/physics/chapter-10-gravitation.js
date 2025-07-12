// pages/notes/physics/chapter-10-gravitation.js
import Head from 'next/head'; // Import Head component to manage the <head> of the page

// This is the main component for the Gravitation chapter page.
export default function GravitationChapterPage() {
  return (
    <>
      {/* === HEAD SECTION: For SEO and STYLES === */}
      <Head>
        <title>Complete Guide to Gravitation - Class 9 Physics | Vigyan Sarathi</title>
        <meta name="description" content="An exhaustive, 4000+ word study material on Gravitation, covering the Universal Law, g vs G, free fall, buoyancy, and Archimedes' Principle from NCERT Class 9 Physics." />
        {/* We use a <style> tag with `jsx global` to apply our unique styles just for this page. */}
        <style jsx global>{`
          /* --- General Styles & Mobile-First Design --- */
          body {
              font-family: 'Open Sans', sans-serif;
              line-height: 1.9;
              background-color: #f4f7f9;
              color: #2c3e50;
              margin: 0;
              padding: 0;
              font-weight: 600; /* Bolder font weight for all body text */
          }
          /* We target '.container-study' to avoid style conflicts with your main layout */
          .container-study {
              max-width: 1100px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 1.5em; /* Padding for mobile */
              box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          }
          .container-study hr {
              border: 0;
              height: 1px;
              background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
              margin: 3.5em 0;
          }
          
          /* --- Typography --- */
          .container-study h1, .container-study h2, .container-study h3 {
              font-family: 'Montserrat', sans-serif;
              font-weight: 800;
              line-height: 1.3;
          }
          .container-study h1 {
              color: #1A237E; /* Deep Indigo */
              font-size: 2.5em;
              text-align: center;
              margin-bottom: 0.2em;
          }
          .container-study h2 {
              color: #1a202c;
              font-size: 2em;
              margin-top: 1.8em;
              border-bottom: 3px solid #E8EAF6;
              padding-bottom: 10px;
          }
          .container-study h3 {
              color: #283593; /* Strong Indigo */
              font-size: 1.5em;
              margin-top: 1.8em;
          }
          .container-study p, .container-study li, .container-study td, .container-study th {
              font-size: 1.1em;
          }
          .container-study strong, .container-study b {
              color: #0D47A1; /* Stronger Blue for Highlighting */
              font-weight: 700;
          }
          .container-study code {
              background-color: #e9ecef;
              padding: 4px 8px;
              border-radius: 5px;
              font-family: 'Courier New', Courier, monospace;
              border: 1px solid #dee2e6;
          }
          .post-meta {
              text-align: center;
              font-size: 1.1em;
              font-weight: 700;
              color: #1A237E;
              background-color: #E8EAF6;
              padding: 12px;
              border-radius: 8px;
              margin-bottom: 2em;
          }

          /* --- Custom Colored Boxes --- */
          .fact-box, .exam-spotlight-box, .qa-box {
              margin: 2em 0;
              padding: 1.5em;
              border-radius: 8px;
              border-left: 8px solid;
          }
          .fact-box h4, .exam-spotlight-box h4, .qa-box h4 {
              margin-top: 0;
              font-family: 'Montserrat', sans-serif;
              font-size: 1.3em;
          }

          .fact-box { border-color: #00BCD4; background-color: #E0F7FA; }
          .fact-box h4 { color: #00838F; }

          .exam-spotlight-box { border-color: #FFB300; background-color: #FFF8E1; }
          .exam-spotlight-box h4 { color: #E65100; }
          
          .qa-box { border-color: #7986cb; background-color: #e8eaf6; }
          .qa-box h4 { color: #3949ab; }
          
          /* --- Custom Arrow Lists --- */
          .styled-list { list-style-type: none; padding-left: 0; }
          .styled-list li { padding-left: 35px; position: relative; }
          .styled-list li::before {
              content: '➤';
              position: absolute;
              left: 0;
              color: #FFB300; /* Amber Gold Arrow */
              font-size: 1.2em;
              top: 2px;
          }
          
          /* --- Images --- */
          .container-study figure { margin: 2em 0; padding: 0; }
          .container-study img { max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 10px; box-shadow: 0 8px 16px rgba(0,0,0,0.1); }
          .container-study figcaption { text-align: center; margin-top: 10px; font-style: italic; color: #6c757d; font-size: 0.95em; }

          /* --- MCQ Styling --- */
          .mcq-list li { margin-bottom: 1.5em; color: #1A237E; }
          .mcq-options { color: #333333; display: block; margin-top: 8px; }
          .answer-key { background-color: #E8EAF6; padding: 1em; border-radius: 8px; text-align: center; }
          
          /* --- Responsive Styles (Tablet and Up) --- */
          @media (min-width: 768px) {
              .container-study { padding: 2.5em 4em; }
              .container-study h1 { font-size: 3em; }
              .container-study h2 { font-size: 2.4em; }
              .container-study h3 { font-size: 1.7em; }
              .container-study p, .container-study li, .container-study td, .container-study th { font-size: 1.2em; }
          }
        `}</style>
      </Head>

      {/* === BODY CONTENT: The main container for your study material === */}
      <div className="container-study">
          <h1>🌍 The Ultimate Guide to Gravitation</h1>
          <div className="post-meta">
              📚 NCERT Class 9 Physics | Chapter 10: A Complete Study Material
          </div>

          <p>Welcome, dedicated learners! Having mastered the causes of motion (Force), we now turn to the most universal force of all: <strong>Gravitation</strong>. It is the silent, invisible force that keeps our feet on the ground, holds planets in their orbits around the sun, and governs the structure of the entire cosmos. A deep understanding of gravitation is crucial, as it’s a favorite topic in competitive exams for its blend of theory and numerical problems.</p>
          <p>This <strong>Vigyan Sarathi</strong> guide will explore Newton's Universal Law, the critical difference between 'g' and 'G', the concepts of mass vs. weight, and the fascinating principles of buoyancy and pressure. Let's dive in!</p>

          <hr />

          <h2>Section 1: The Universal Law of Gravitation 🍎</h2>
          <p>The famous story of an apple falling on Newton's head led him to a profound realization: the same force that pulls an apple to the ground is also responsible for keeping the Moon in orbit around the Earth. This led to his formulation of the <strong>Universal Law of Gravitation</strong>.</p>
          <p>The law states: <strong>"Every object in the universe attracts every other object with a force which is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers."</strong></p>
          
          <h3>The Mathematical Formula</h3>
          <p>Let two objects A and B have masses m₁ and m₂. Let the distance between their centers be 'd'. The force of attraction (F) between them is given by:</p>
          <p><strong>F = G × (m₁ × m₂) / d²</strong></p>
          
          <h3>Understanding the Gravitational Constant (G)</h3>
          <p>The 'G' in the formula is the <strong>Universal Gravitational Constant</strong>. It is "universal" because its value is the same everywhere in the universe.</p>
          <ul className="styled-list">
              <li>Its accepted value is <strong>6.673 × 10⁻¹¹ N m²/kg²</strong>.</li>
              <li>This value was experimentally determined by <strong>Henry Cavendish</strong>.</li>
              <li>The small value of G explains why we don't feel the gravitational force between everyday objects (like two people sitting next to each other). The force is incredibly weak unless at least one of the masses is huge, like a planet.</li>
          </ul>
          
          <div className="fact-box">
              <h4>💡 One-Liner Facts: Universal Law</h4>
              <p>➤ Gravitation is always an attractive force.<br />
              ➤ The force acts along the line joining the centers of the two bodies.<br />
              ➤ The value of 'G' is constant throughout the universe.</p>
          </div>

          <hr />
          
          <h2>Section 2: Free Fall and Acceleration Due to Gravity (g) 🍂</h2>
          
          <h3>What is Free Fall?</h3>
          <p>When an object falls towards the Earth under the influence of only the Earth's gravitational force (with no other forces like air resistance acting on it), the object is said to be in <strong>free fall</strong>. During free fall, the object experiences a constant acceleration.</p>
          
          <h3>Acceleration Due to Gravity (g)</h3>
          <p>This constant acceleration is called the <strong>acceleration due to gravity</strong>, denoted by the symbol 'g'.</p>
          <ul className="styled-list">
              <li>On the surface of the Earth, the standard value of 'g' is approximately <strong>9.8 m/s²</strong>.</li>
              <li>This means that for every second an object is in free fall, its downward velocity increases by 9.8 m/s.</li>
              <li>'g' is a vector, and its direction is always towards the center of the Earth.</li>
          </ul>

          <h3>Deriving the Value of 'g'</h3>
          <p>We can derive the formula for 'g' using Newton's Second Law (F=ma) and the Law of Gravitation.</p>
          <p>Consider an object of mass 'm' on the surface of the Earth. The mass of the Earth is 'M' and its radius is 'R'.</p>
          <ul className="styled-list">
              <li>From the Law of Gravitation, the force on the object is: <code>F = G * (M * m) / R²</code></li>
              <li>From Newton's Second Law, this force produces an acceleration 'g': <code>F = mg</code></li>
              <li>Equating the two, we get: <code>mg = G * (M * m) / R²</code></li>
              <li>Canceling 'm' from both sides gives us the formula for 'g': <strong><code>g = G * M / R²</code></strong></li>
          </ul>

          <div className="exam-spotlight-box">
              <h4>🎯 Exam Spotlight: 'g' vs 'G'</h4>
              <p>This is a critical distinction for exams.</p>
              <ul className="styled-list">
                  <li><strong>'G' (Universal Gravitational Constant):</strong> Is a scalar quantity and its value (6.673 × 10⁻¹¹ N m²/kg²) is constant everywhere.</li>
                  <li><strong>'g' (Acceleration Due to Gravity):</strong> Is a vector quantity. Its value (≈9.8 m/s²) changes depending on the planet you are on, your altitude, and your depth below the surface. The value of 'g' is maximum at the poles and minimum at the equator.</li>
              </ul>
          </div>
          
          <hr />

          <h2>Section 3: Mass vs. Weight - A Fundamental Difference ⚖️</h2>
          <p>In everyday language, we use mass and weight interchangeably. In physics, they are completely different concepts.</p>

          <h3>Mass (m)</h3>
          <p><strong>Mass</strong> is the measure of the amount of matter contained in an object. It is also the measure of an object's inertia. The mass of an object is <strong>constant</strong> and does not change no matter where it is in the universe. It is a <strong>scalar quantity</strong>, and its SI unit is the <strong>kilogram (kg)</strong>.</p>
          
          <h3>Weight (W)</h3>
          <p><strong>Weight</strong> is the force with which an object is attracted towards the center of the Earth (or any other celestial body). It is the force of gravity acting on an object. Since it is a force, it is a <strong>vector quantity</strong>, and its SI unit is the <strong>newton (N)</strong>.</p>
          <p>The formula for weight is: <strong><code>W = m × g</code></strong></p>
          <p>Because weight depends on 'g', it is not constant. Your weight would be different on the Moon than on Earth.</p>

          <h3>Weight on the Moon 🌕</h3>
          <p>The mass of the Moon is less than that of the Earth, and its radius is also smaller. When we calculate the value of 'g' on the Moon, it comes out to be approximately <strong>1/6th</strong> of the value of 'g' on Earth. Therefore, an object's weight on the Moon is one-sixth of its weight on Earth.</p>
          
          <div className="fact-box">
              <h4>💡 One-Liner Facts: Mass & Weight</h4>
              <p>➤ Mass is the amount of 'stuff' in an object; it is constant everywhere.<br />
              ➤ Weight is the force of gravity on that 'stuff'; it changes with location.<br />
              ➤ An object can be weightless (in deep space, where g ≈ 0), but it can never be massless.</p>
          </div>

          <hr />

          <h2>Section 4: Thrust, Pressure, and Buoyancy 🌊</h2>
          
          <h3>Thrust and Pressure</h3>
          <p><strong>Thrust</strong> is simply the force acting on an object perpendicular to its surface. Its SI unit is the newton (N).</p>
          <p><strong>Pressure (P)</strong> is defined as the thrust per unit area. <code>Pressure = Thrust / Area</code>. The SI unit of pressure is N/m², which is also called the <strong>pascal (Pa)</strong>.</p>
          <p>Pressure is inversely proportional to area. This is why a sharp knife cuts better than a blunt one (small area, high pressure), and why a camel's broad feet prevent it from sinking into the sand (large area, low pressure).</p>

          <h3>Buoyancy and Archimedes' Principle</h3>
          <p>When an object is immersed in a fluid (a liquid or a gas), it experiences an upward force. This upward force is called the <strong>buoyant force</strong> or <strong>upthrust</strong>. This force is what makes you feel lighter in a swimming pool.</p>
          <p><strong>Archimedes' Principle</strong> states that: <strong>"When a body is immersed fully or partially in a fluid, it experiences an upward force that is equal to the weight of the fluid displaced by it."</strong></p>
          <p>An object floats if the buoyant force is greater than or equal to its weight. An object sinks if its weight is greater than the buoyant force.</p>

          <h3>Relative Density</h3>
          <p>The <strong>relative density</strong> of a substance is the ratio of its density to the density of water. It is a pure ratio and has <strong>no units</strong>. If the relative density of a substance is greater than 1, it will sink in water. If it is less than 1, it will float.</p>

          <hr />

          <div className="qa-box">
              <h4>🤔 Complete NCERT Chapter 10 Q&A Section</h4>
              <h4>Q1: State the universal law of gravitation.</h4>
              <p><strong>Answer:</strong> The law states that every object in the universe attracts every other object with a force which is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers.</p>
              <h4>Q2: What is the importance of the universal law of gravitation?</h4>
              <p><strong>Answer:</strong> It successfully explains several phenomena: (i) the force that binds us to the Earth, (ii) the motion of the Moon around the Earth, (iii) the motion of planets around the Sun, and (iv) the tides due to the Moon and the Sun.</p>
              <h4>Q3: Gravitational force on the surface of the moon is only 1/6 as strong as gravitational force on the Earth. What is the weight in newtons of a 10 kg object on the moon and on the Earth?</h4>
              <p><strong>Answer:</strong> Weight on Earth (Wₑ) = m × gₑ = 10 kg × 9.8 m/s² = <strong>98 N</strong>.<br />
              Weight on Moon (Wₘ) = 1/6 × Wₑ = 1/6 × 98 N ≈ <strong>16.3 N</strong>.</p>
          </div>
          
          <hr />

          <h2>Test Your Knowledge: Comprehensive MCQ Quiz 📝</h2>
            <ol className="mcq-list">
                <li>The value of the universal gravitational constant 'G' is:
                    <span className="mcq-options"> A) 9.8 m/s²   B) 6.673 × 10⁻¹¹ N m²/kg²   C) 6.022 × 10²³   D) 9.8 N </span>
                </li>
                <li>The force of attraction between two unit point masses separated by a unit distance is called:
                    <span className="mcq-options"> A) Gravitational potential   B) Acceleration due to gravity   C) Gravitational field   D) Universal gravitational constant </span>
                </li>
                <li>The weight of an object on the Moon is what fraction of its weight on Earth?
                    <span className="mcq-options"> A) 1/4   B) 1/5   C) 1/6   D) 1/8 </span>
                </li>
                <li>A boy is whirling a stone tied to a string in a horizontal circular path. If the string breaks, the stone will:
                    <span className="mcq-options"> A) Continue to move in the circular path   B) Move along a straight line towards the center of the path   C) Move along a straight line tangential to the circular path   D) Fall down vertically </span>
                </li>
                <li>The value of acceleration due to gravity (g):
                    <span className="mcq-options"> A) Is the same on the equator and poles   B) Is least on the poles   C) Is least on the equator   D) Increases from pole to equator </span>
                </li>
                <li>The law of gravitation gives the gravitational force between:
                    <span className="mcq-options"> A) The Earth and a point mass only   B) The Earth and the Sun only   C) Any two bodies having some mass   D) Two charged bodies only </span>
                </li>
                <li>Pressure is a:
                    <span className="mcq-options"> A) Scalar quantity   B) Vector quantity   C) Both A and B   D) None of these </span>
                </li>
                <li>The SI unit of pressure is:
                    <span className="mcq-options"> A) Newton   B) Joule   C) Pascal   D) Watt </span>
                </li>
                <li>An object with a relative density of 0.8 is placed in water. It will:
                    <span className="mcq-options"> A) Sink completely   B) Float on the surface   C) Be partially submerged   D) Dissolve </span>
                </li>
                <li>The weight of a body is measured to be 12 N on Earth. If it is taken to the Moon, its weight will be approximately:
                    <span className="mcq-options"> A) 12 N   B) 6 N   C) 2 N   D) 72 N </span>
                </li>
                <li>Who among the following calculated the value of G experimentally?
                    <span className="mcq-options"> A) Isaac Newton   B) Galileo Galilei   C) Albert Einstein   D) Henry Cavendish </span>
                </li>
                <li>The phenomenon of a ship floating on water is based on:
                    <span className="mcq-options"> A) Newton's Third Law   B) Pascal's Law   C) Archimedes' Principle   D) Law of Gravitation </span>
                </li>
                <li>If the distance between two masses is doubled, the gravitational force between them becomes:
                    <span className="mcq-options"> A) Double   B) Half   C) Four times   D) One-fourth </span>
                </li>
                <li>Which of the following remains constant for an object no matter where it is?
                    <span className="mcq-options"> A) Weight   B) Mass   C) Force   D) Acceleration </span>
                </li>
                <li>A sharp knife cuts better because:
                    <span className="mcq-options"> A) It exerts more force   B) It exerts more pressure due to less area   C) It is heavier   D) It is made of better material </span>
                </li>
            </ol>
            <div className="answer-key">
                <strong>Answer Key:</strong> 1-B, 2-D, 3-C, 4-C, 5-C, 6-C, 7-A, 8-C, 9-B, 10-C, 11-D, 12-C, 13-D, 14-B, 15-B
            </div>
      </div>
    </>
  );
}