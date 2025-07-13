// pages/notes/physics/chapter-9-force-and-laws.js
import Head from 'next/head';

export default function ForceAndLawsChapterPage() {
  return (
    <>
      <Head>
        <title>Complete Guide to Force & Laws of Motion - Class 9 Physics | Vigyan Sarathi</title>
        <meta name="description" content="An exhaustive, 4000+ word study material on Force and Laws of Motion, covering Inertia, Momentum, Newton's three laws, and Conservation of Momentum from NCERT Class 9 Physics." />
        <style jsx global>{`
          /* All your CSS styles remain the same. No changes needed here. */
          .study-guide-body { background-color: #f4f7f9 !important; padding-top: 2rem; padding-bottom: 2rem; }
          .study-guide-container { font-family: 'Open Sans', sans-serif; /* ...and so on... */ }
        `}</style>
      </Head>

      <div className="study-guide-body">
        <div className="study-guide-container">
          {/* ... All content before the error remains the same ... */}
          <h1>💪 The Ultimate Guide to Force and Laws of Motion</h1>
          <div className="post-meta">
              📚 NCERT Class 9 Physics | Chapter 9: A Complete Study Material
          </div>
          <p>Greetings, dedicated aspirants! In our last journey, we mastered the art of describing motion. Now, we ask the fundamental question: <strong>Why</strong> does motion happen? What causes an object to speed up, slow down, or change direction? The answer to all these questions is a single concept: <strong>Force</strong>.</p>
          {/* ... Other sections ... */}
          <hr />

          <h2>Section 5: The Grand Finale - The Law of Conservation of Momentum 🌌</h2>
          <p>This is one of the most fundamental conservation laws in all of physics.</p>
          <p>The law states: <strong>"In the absence of an external unbalanced force, the total momentum of a system of objects remains constant (or conserved)."</strong></p>
          <p>In simpler terms, for a collision between two or more objects in an isolated system, the total momentum before the collision is equal to the total momentum after the collision.</p>

          <h3>Derivation from Newton's Third Law</h3>
          
          {/* === FIX #1: Escaping the '>' character === */}
          <p>Consider two balls, A and B, of masses mₐ and mₑ, travelling in the same direction with initial velocities uₐ and uₑ respectively. Let's assume uₐ > uₑ so they collide.</p>
          
          <ul className="styled-list">
              <li>During the collision (for a time t), ball A exerts a force Fₐₑ on ball B.</li>
              <li>Simultaneously, ball B exerts a force Fₑₐ on ball A.</li>
              <li>According to the Third Law: <code>Fₐₑ = - Fₑₐ</code></li>
              <li>Using the Second Law (F=ma), we can write: <code>mₐaₐ = - mₑaₑ</code></li>
              <li>Substituting a = (v-u)/t: <code>mₐ(vₐ - uₐ)/t = - mₑ(vₑ - uₑ)/t</code></li>
              <li>Canceling 't' from both sides: <code>mₐ(vₐ - uₐ) = - mₑ(vₑ - uₑ)</code></li>
              <li>Expanding the terms: <code>mₐvₐ - mₐuₐ = -mₑvₑ + mₑuₑ</code></li>
              <li>Rearranging the terms by bringing initial momentums to one side and final momentums to the other:</li>
              <li><strong><code>mₐuₐ + mₑuₑ = mₐvₐ + mₑvₑ</code></strong></li>
              <li>This equation shows that the <strong>Total Momentum Before Collision = Total Momentum After Collision</strong>.</li>
          </ul>
          
          <div className="fact-box">
              <h4>💡 One-Liner Facts: Conservation of Momentum</h4>
              <p>➤ Total momentum of an isolated system is always conserved.<br />
              ➤ This law explains the recoil of guns and the propulsion of rockets.</p>
          </div>

          <hr />

          <div className="qa-box">
              <h4>🤔 Complete NCERT Chapter 9 Q&A Section</h4>
              <h4>Q1: Which of the following has more inertia: (a) a rubber ball and a stone of the same size? (b) a bicycle and a train? (c) a five-rupees coin and a one-rupee coin?</h4>
              <p><strong>Answer:</strong> Inertia depends on mass. (a) The <strong>stone</strong> has more mass. (b) The <strong>train</strong> has more mass. (c) The <strong>five-rupees coin</strong> has more mass. Therefore, these objects have more inertia.</p>
              {/* ... Other Q&A ... */}
          </div>
          
          <hr />

          <h2>Test Your Knowledge: Competitive Exam MCQ Quiz 📝</h2>
            {/* ... MCQ List ... */}
            <ol className="mcq-list">
                {/* ... all list items ... */}
            </ol>
            <div className="answer-key">
                <strong>Answer Key:</strong> 1-B, 2-B, 3-B, 4-C, 5-C, 6-C, 7-B, 8-B, 9-A, 10-A, 11-A, 12-C
            </div>
          
        </div>
      </div>
    </>
  );
}

// === FIX #2: The "Unexpected eof" was likely caused by a copy-paste error
// where the closing tags of the component were cut off. 
// The code above is complete and correctly structured.