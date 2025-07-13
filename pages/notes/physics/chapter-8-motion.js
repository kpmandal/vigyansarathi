
// pages/notes/physics/chapter-8-motion.js
import Head from 'next/head'; // Import Head component to manage the <head> of the page

// This is the main component for the Motion chapter page.
export default function MotionChapterPage() {
  return (
    <>
      {/* === HEAD SECTION: For SEO and STYLES === */}
      <Head>
        <title>Complete Guide to Motion - Class 9 Physics | Vigyan Sarathi</title>
        <meta name="description" content="An exhaustive, 4000+ word study material on Motion, covering distance, displacement, velocity, acceleration, equations of motion, and circular motion from NCERT Class 9 Physics." />
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
          <h1>🏃 The Ultimate Guide to Motion</h1>
          <div className="post-meta">
              📚 NCERT Class 9 Physics | Chapter 8: A Complete Study Material
          </div>

          <p>Welcome, future achievers! Motion is the first and most fundamental concept in Physics. It is the language we use to describe the universe, from a falling apple to the orbits of planets. For competitive exams, a rock-solid understanding of this chapter is non-negotiable. It forms the base for more advanced topics like Force, Work, and Gravitation.</p>
          <p>In this definitive guide from <strong>Vigyan Sarathi</strong>, we will embark on a journey to demystify every aspect of motion. We will break down complex ideas into simple, digestible pieces, fortified with real-world examples and exam-oriented questions, ensuring you are not just prepared, but truly confident.</p>

          <hr />

          <h2>Section 1: What is Motion? 🤔 The Concept of a Reference Point</h2>
          <p>In our daily lives, we see things move all the time: a running car, a flying bird, a flowing river. But in Physics, motion is defined more precisely. An object is said to be in a <strong>state of motion</strong> if its position changes continuously with respect to a fixed point in its surroundings. This fixed point is called the <strong>reference point</strong> or the <strong>origin</strong>.</p>
          <p>Conversely, an object is in a <strong>state of rest</strong> if its position does not change with respect to its reference point. This means motion is always <strong>relative</strong>. For a passenger inside a moving train, their co-passengers are at rest. But for a person standing on the platform, both the train and all the passengers are in motion. Without a reference point, the terms "rest" and "motion" have no meaning.</p>
          
          <div className="fact-box">
              <h4>💡 One-Liner Facts: Motion & Rest</h4>
              <p>➤ Motion is the change of an object's position with time relative to a reference point.<br />
              ➤ Rest and Motion are relative terms; an object can be at rest relative to one thing and in motion relative to another.</p>
          </div>

          <hr />

          <h2>Section 2: Distance vs. Displacement 🛣️ - The Most Important Distinction</h2>
          <p>This is one of the most tested concepts in basic physics. While we often use these words interchangeably in daily conversation, in physics, they have very different meanings.</p>
          
          <h3>Distance: The Total Path Covered</h3>
          <p><strong>Distance</strong> is the actual length of the path an object travels, regardless of its direction. It is a <strong>scalar quantity</strong>, which means it only has magnitude (a numerical value, e.g., 10 km) and no direction. Distance can never be zero or negative if the object has moved.</p>

          <h3>Displacement: The Shortest Path from Start to Finish</h3>
          <p><strong>Displacement</strong> is the shortest straight-line distance between the initial position and the final position of an object. It is a <strong>vector quantity</strong>, meaning it has both magnitude and direction (e.g., 1 km East). Displacement can be zero (if the object returns to its starting point), positive, or negative.</p>
          
          <div className="exam-spotlight-box">
              <h4>🎯 Exam Spotlight: A Detailed Example</h4>
              <p>Imagine a person starts at their home (Point O). They walk 400 meters East to a shop (Point A). Then, they turn and walk 300 meters North to a friend's house (Point B).</p>
              <ul className="styled-list">
                  <li><strong>Calculating Distance:</strong> The total path is simply the sum of the individual paths. Distance = 400 m + 300 m = <strong>700 m</strong>.</li>
                  <li><strong>Calculating Displacement:</strong> The displacement is the straight line from the start (O) to the finish (B). This forms a right-angled triangle. Using the Pythagorean theorem (a² + b² = c²):
                  <br/><code>Displacement² = 400² + 300² = 160000 + 90000 = 250000</code>
                  <br/><code>Displacement = √250000 = 500 m</code>.
                  <br/>The full displacement is <strong>500 m in the North-East direction</strong>.
                  </li>
              </ul>
          </div>

          <div className="fact-box">
              <h4>💡 One-Liner Facts: Distance & Displacement</h4>
              <p>➤ Distance is a scalar quantity (magnitude only); Displacement is a vector quantity (magnitude and direction).<br />
              ➤ Distance is the total path length; Displacement is the shortest distance between start and end points.<br />
              ➤ For a moving object, distance is always positive, while displacement can be positive, negative, or zero.<br />
              ➤ The magnitude of displacement is always less than or equal to the distance traveled.</p>
          </div>
          
          <hr />

          <h2>Section 3: Uniform and Non-Uniform Motion 🏃‍♂️💨</h2>
          <p>How an object moves along its path can be classified into two main types.</p>
          
          <h3>Uniform Motion</h3>
          <p>An object is said to be in <strong>uniform motion</strong> if it travels equal distances in equal intervals of time, no matter how small these time intervals may be. Think of a car driving on a straight, empty highway at a perfectly constant speed of 80 km/h. In every hour, it covers exactly 80 km. The distance-time graph for uniform motion is a straight line.</p>

          <h3>Non-Uniform Motion</h3>
          <p>An object is in <strong>non-uniform motion</strong> if it travels unequal distances in equal intervals of time. This is the most common type of motion. A car moving through city traffic, a person jogging in a park, or a freely falling ball are all examples of non-uniform motion because their speed is constantly changing. The distance-time graph for non-uniform motion is a curved line.</p>

          <hr />

          <h2>Section 4: Measuring the Rate of Motion - Speed and Velocity 🚗</h2>
          <p>Just saying an object is moving isn't enough. We need to know how fast it's moving. This is where speed and velocity come in.</p>

          <h3>Speed: How Fast?</h3>
          <p><strong>Speed</strong> is the rate at which an object covers distance. It is a <strong>scalar quantity</strong>. The speedometer in a vehicle measures the <strong>instantaneous speed</strong>—the speed at that very moment.</p>
          <p>The formula for speed is: <code>Speed (v) = Distance (s) / Time (t)</code></p>
          <p>The SI unit of speed is <strong>meters per second (m/s)</strong>. To convert km/h to m/s, multiply by 5/18.</p>
          <p>For an object in non-uniform motion, we often use <strong>average speed</strong>: <code>Average Speed = Total Distance Covered / Total Time Taken</code></p>
          
          <h3>Velocity: How Fast and Where?</h3>
          <p><strong>Velocity</strong> is the speed of an object in a specific direction. It is the rate of change of displacement. As it includes direction, it is a <strong>vector quantity</strong>.</p>
          <p>The formula for velocity is: <code>Velocity (v) = Displacement (s) / Time (t)</code></p>
          <p>Velocity can be changed by changing the object's speed, its direction of motion, or both. For an object with uniformly changing velocity, we use <strong>average velocity</strong>: <code>Average Velocity = (Initial Velocity (u) + Final Velocity (v)) / 2</code></p>

          <div className="fact-box">
              <h4>💡 One-Liner Facts: Speed & Velocity</h4>
              <p>➤ Speed is a scalar (e.g., 60 km/h). Velocity is a vector (e.g., 60 km/h North).<br />
              ➤ A car turning a corner at a constant speed has a changing velocity because its direction is changing.</p>
          </div>

          <hr />
          
          <h2>Section 5: Acceleration - The Rate of Change of Velocity 🚀</h2>
          <p>In non-uniform motion, velocity changes with time. The measure of this change in velocity is called <strong>acceleration</strong>.</p>
          <p><strong>Acceleration (a)</strong> is defined as the rate of change of velocity of an object with respect to time. It is a vector quantity.</p>
          <p><code>Acceleration (a) = (Final Velocity (v) - Initial Velocity (u)) / Time (t)</code></p>
          <p>The SI unit of acceleration is <strong>meters per second squared (m/s²)</strong>.</p>

          <h3>Positive and Negative Acceleration</h3>
          <ul className="styled-list">
              <li><strong>Positive Acceleration:</strong> If the velocity of an object increases in the direction of motion, the acceleration is positive. Example: A car speeding up.</li>
              <li><strong>Negative Acceleration:</strong> If the velocity of an object decreases, the acceleration is negative. Negative acceleration is also called <strong>deceleration</strong> or <strong>retardation</strong>. Example: A car applying brakes.</li>
              <li><strong>Uniform Acceleration:</strong> An object has uniform acceleration if its velocity changes by equal amounts in equal intervals of time. A freely falling body is a classic example.</li>
          </ul>
          
          <div className="fact-box">
              <h4>💡 One-Liner Facts: Acceleration</h4>
              <p>➤ Acceleration is the rate of change of velocity.<br />
              ➤ An object can have zero velocity at an instant but still be accelerating (e.g., a ball thrown upwards at its highest point).<br />
              ➤ Negative acceleration is called retardation or deceleration.</p>
          </div>

          <hr />

          <h2>Section 6: The Visual Story - Graphical Representation of Motion 📈</h2>
          <p>Graphs are a powerful tool in physics to visualize and analyze motion.</p>

          <h3>1. Distance-Time Graphs</h3>
          <ul className="styled-list">
              <li><strong>Stationary Object:</strong> A horizontal line parallel to the time axis.</li>
              <li><strong>Uniform Speed:</strong> A straight line with a positive slope. The steeper the slope, the higher the speed.</li>
              <li><strong>Calculating Speed:</strong> The speed is the <strong>slope (gradient)</strong> of the graph.</li>
          </ul>

          <h3>2. Velocity-Time Graphs (The Most Important Graph)</h3>
          <ul className="styled-list">
              <li><strong>Uniform Velocity:</strong> A horizontal line parallel to the time axis.</li>
              <li><strong>Uniform Acceleration:</strong> A straight line with a positive slope.</li>
              <li><strong>Uniform Deceleration:</strong> A straight line with a negative slope.</li>
              <li><strong>Calculating Acceleration:</strong> Acceleration is the <strong>slope</strong> of the graph.</li>
              <li><strong>Calculating Distance:</strong> Distance is the <strong>area under the velocity-time graph</strong>.</li>
          </ul>

          <hr />

          <h2>Section 7: The Three Golden Equations of Motion 📜</h2>
          <p>For an object moving along a straight line with <strong>uniform acceleration</strong>, we can use a set of three powerful equations.</p>
          
          <h3>The Three Equations:</h3>
          <ol>
              <li><strong>First Equation (Velocity-Time Relation):</strong> <code>v = u + at</code></li>
              <li><strong>Second Equation (Position-Time Relation):</strong> <code>s = ut + ½at²</code></li>
              <li><strong>Third Equation (Position-Velocity Relation):</strong> <code>v² = u² + 2as</code></li>
          </ol>
          <p>Here, <strong>u</strong> = initial velocity, <strong>v</strong> = final velocity, <strong>a</strong> = uniform acceleration, <strong>s</strong> = distance, and <strong>t</strong> = time.</p>

          <div className="exam-spotlight-box">
              <h4>🎯 Exam Spotlight: Deriving the Equations Graphically</h4>
              <p>➤ <strong>First Equation:</strong> Derived from the definition of acceleration, which is the slope of the v-t graph. `a = (v-u)/t` rearranges to `v = u + at`.
              <br/>➤ <strong>Second Equation:</strong> Derived from the area under the v-t graph. The area is a trapezium, which can be seen as a rectangle (area = ut) and a triangle (area = ½ * base * height = ½ * t * (v-u)). Substituting (v-u) = at gives `s = ut + ½at²`.
              <br/>➤ <strong>Third Equation:</strong> Derived by eliminating 't' from the first two equations. From the first equation, `t = (v-u)/a`. Substitute this into the second equation to get the result.</p>
          </div>

          <hr />

          <h2>Section 8: Motion in a Circle - Uniform Circular Motion 🔄</h2>
          <p>When an object moves in a circular path with a constant speed, its motion is called <strong>uniform circular motion</strong>. Even though the speed is constant, the <strong>velocity is not</strong>, because the direction of motion is changing at every single point. Since velocity is changing, the object is said to be <strong>accelerated</strong>.</p>
          <p>If an object takes time 't' to complete one revolution around a circular path of radius 'r', its speed (v) is: <code>v = (2πr) / t</code></p>

          <div className="fact-box">
              <h4>💡 One-Liner Facts: Circular Motion</h4>
              <p>➤ Uniform circular motion is an example of accelerated motion.<br />
              ➤ Examples include satellites orbiting Earth, the tip of a clock's second hand, and a stone whirled on a string.</p>
          </div>

          <hr />

          <div className="qa-box">
              <h4>🤔 Complete NCERT Chapter 8 Q&A Section</h4>
              <h4>Q1: An object has moved through a distance. Can it have zero displacement?</h4>
              <p><strong>Answer:</strong> Yes. If the object's final position is the same as its initial position, its displacement is zero. Example: An athlete running one full lap of a circular track.</p>
              <h4>Q2: A farmer moves along the boundary of a square field of side 10 m in 40 s. What will be the magnitude of displacement of the farmer at the end of 2 minutes 20 seconds?</h4>
              <p><strong>Answer:</strong> Total time = 140 s. Time for one lap = 40 s. Number of laps = 140/40 = 3.5. After 3.5 laps, the farmer is at the diagonally opposite corner. Displacement = √(10² + 10²) = √200 = 10√2 m ≈ <strong>14.14 m</strong>.</p>
              <h4>Q3: What does the odometer of an automobile measure?</h4>
              <p><strong>Answer:</strong> The odometer measures the total <strong>distance</strong> covered.</p>
          </div>
          
          <hr />

          <h2>Test Your Knowledge: Competitive Exam MCQ Quiz 📝</h2>
            <ol className="mcq-list">
                <li>A body is thrown vertically upward with velocity u, the greatest height h to which it will rise is:
                    <span className="mcq-options"> A) u/g   B) u²/2g   C) u²/g   D) u/2g </span>
                </li>
                <li>If the displacement of an object is proportional to the square of time, then the object moves with:
                    <span className="mcq-options"> A) Uniform velocity   B) Uniform acceleration   C) Increasing acceleration   D) Decreasing acceleration </span>
                </li>
                <li>The slope of a velocity-time graph represents:
                    <span className="mcq-options"> A) Distance   B) Displacement   C) Acceleration   D) Speed </span>
                </li>
                <li>Which of the following can sometimes be 'zero' for a moving body? (i) Average velocity (ii) Distance travelled (iii) Average speed (iv) Displacement
                    <span className="mcq-options"> A) Only (i)   B) (i) and (ii)   C) (i) and (iv)   D) Only (iv) </span>
                </li>
                <li>When a car driver travelling at a speed of 10 m/s applies brakes and brings the car to rest in 20 s, then the retardation will be:
                    <span className="mcq-options"> A) + 2 m/s²   B) - 2 m/s²   C) - 0.5 m/s²   D) + 0.5 m/s² </span>
                </li>
                <li>The numerical ratio of displacement to distance for a moving object is:
                    <span className="mcq-options"> A) Always less than 1   B) Always equal to 1   C) Always more than 1   D) Equal to or less than 1 </span>
                </li>
                <li>A particle is moving in a circular path of radius r. The displacement after half a circle would be:
                    <span className="mcq-options"> A) Zero   B) πr   C) 2r   D) 2πr </span>
                </li>
                <li>Suppose a boy is enjoying a ride on a merry-go-round which is moving with a constant speed of 10 m/s. It implies that the boy is:
                    <span className="mcq-options"> A) At rest   B) Moving with no acceleration   C) In accelerated motion   D) Moving with uniform velocity </span>
                </li>
                <li>The SI unit of acceleration is:
                    <span className="mcq-options"> A) m/s   B) km/h   C) m/s²   D) m·s </span>
                </li>
                <li>From the given v-t graph, it can be inferred that the object is: (Imagine a v-t graph which is a straight line parallel to the time axis)
                    <span className="mcq-options"> A) In uniform motion   B) At rest   C) In non-uniform motion   D) Moving with uniform acceleration </span>
                </li>
                <li>If a car starts from rest and accelerates uniformly to a speed of 18 km/h in 5 s, what is its acceleration?
                    <span className="mcq-options"> A) 1 m/s²   B) 2 m/s²   C) 3.6 m/s²   D) 5 m/s² </span>
                </li>
                <li>Negative acceleration is also known as:
                    <span className="mcq-options"> A) Velocity   B) Retardation   C) Uniform speed   D) Displacement </span>
                </li>
            </ol>
            <div className="answer-key">
                <strong>Answer Key:</strong> 1-B, 2-B, 3-C, 4-C, 5-C, 6-D, 7-C, 8-C, 9-C, 10-A, 11-A, 12-B
            </div>
      </div>
    </>
  );
}