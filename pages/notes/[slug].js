// pages/notes/[slug].js

import { client } from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

// The page component and renderer options remain the same.
// They are already "bulletproof" from the previous answer.
// ... (Your safer renderer and ScienceNotePage component code here) ...
const ExamSpotlight = ({ details }) => (
  <div className="my-6 p-4 border-l-4 border-cta bg-orange-100 rounded-r-lg">
    <h3 className="font-heading font-bold text-cta">🎯 Exam Spotlight</h3>
    <p className="font-body mt-2">{details}</p>
  </div>
);
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      if (node.data?.target?.sys?.contentType?.sys?.id === 'examSpotlight' && node.data?.target?.fields) {
        return <ExamSpotlight details={node.data.target.fields.details} />;
      }
    },
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-3xl font-bold font-heading mt-8 mb-4">{children}</h2>,
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="font-body text-lg leading-relaxed mb-4">{children}</p>,
  },
};
export default function ScienceNotePage({ note }) {
  if (!note) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-2xl text-gray-500">Loading Note...</p>
      </div>
    );
  }
  const { title, content, notePdf } = note.fields;
  return (
    <div className="bg-primary-bg min-h-screen py-12">
      <div className="container mx-auto px-4">
        <article className="prose lg:prose-xl max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-accent mb-8">{title}</h1>
          {content ? (
            documentToReactComponents(content, options)
          ) : (
            <p className="text-gray-500">This note does not have any content yet.</p>
          )}
          {notePdf && (
            <a href={`https:${notePdf.fields.file.url}`} target="_blank" rel="noopener noreferrer" className="mt-8 no-underline inline-block bg-cta text-white font-bold py-3 px-6 rounded-lg hover:bg-accent transition-colors duration-300">
              Download Notes PDF
            </a>
          )}
        </article>
      </div>
    </div>
  );
}


// === UPDATED DATA FETCHING FUNCTIONS ===

// This function gets all possible page paths at build time.
export async function getStaticPaths() {
  const response = await client.getEntries({ 
    content_type: 'scienceNotes' // ACTION: Using the correct ID.
  });

  const paths = response.items.map(item => ({
    params: { slug: item.fields.slug },
  }));

  return { paths, fallback: true };
}

// This function gets the specific data for one page.
export async function getStaticProps({ params }) {
  const response = await client.getEntries({
    content_type: 'scienceNotes', // ACTION: Using the correct ID.
    'fields.slug': params.slug,
    limit: 1,
  });

  if (!response.items.length) {
    return { notFound: true };
  }

  return {
    props: { 
      note: response.items[0] 
    },
    revalidate: 60,
  };
}
