// pages/notes/[slug].js

import { client } from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

// Renderer for the "Exam Spotlight" embedded entry
const ExamSpotlight = ({ details }) => (
  <div className="my-6 p-4 border-l-4 border-cta bg-orange-100 rounded-r-lg">
    <h3 className="font-heading font-bold text-cta">🎯 Exam Spotlight</h3>
    <p className="font-body mt-2">{details}</p>
  </div>
);

// Configuration for the main renderer
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      // Safety check: ensure the target and its fields exist before trying to access them
      if (node.data?.target?.sys?.contentType?.sys?.id === 'examSpotlight' && node.data?.target?.fields) {
        return <ExamSpotlight details={node.data.target.fields.details} />;
      }
    },
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-3xl font-bold font-heading mt-8 mb-4">{children}</h2>,
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="font-body text-lg leading-relaxed mb-4">{children}</p>,
  },
};

export default function ScienceNotePage({ note }) {
  // If the note prop doesn't exist, show loading (for fallback pages)
  if (!note) return <div>Loading...</div>;

  // Destructure fields only if 'note' exists
  const { title, content, notePdf } = note.fields;

  return (
    <div className="bg-primary-bg min-h-screen py-12">
      {/* The 'prose' class from @tailwindcss/typography is essential for styling */}
      <article className="prose lg:prose-xl max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-accent mb-8">{title}</h1>
        
        {/*
          This is the critical part.
          We check if 'content' exists before trying to render it.
          Then we pass it to the renderer function with our custom options.
        */}
        {content ? documentToReactComponents(content, options) : <p>Content is loading or not available.</p>}

        {notePdf && (
          <a href={`https:${notePdf.fields.file.url}`} target="_blank" rel="noopener noreferrer" className="mt-8 no-underline inline-block bg-cta text-white font-bold py-3 px-6 rounded hover:bg-accent transition-colors duration-300">
            Download Notes PDF
          </a>
        )}
      </article>
    </div>
  );
}

// ... your getStaticPaths and getStaticProps functions remain the same ...
