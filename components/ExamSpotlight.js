// components/ExamSpotlight.js
export default function ExamSpotlight({ details }) {
  return (
    <div className="my-6 p-4 border-l-4 border-cta bg-orange-100 rounded-r-lg">
      <h3 className="font-heading font-bold text-cta">🎯 Exam Spotlight</h3>
      <p className="font-body mt-2">{details}</p>
    </div>
  );
}
