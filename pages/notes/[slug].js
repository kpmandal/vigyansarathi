// pages/notes/[slug].js
import { client } from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

// Custom component to render the "Exam Spotlight"
const ExamSpotlight = ({ details }) => (
  <div className="my-6 p-4 border-l-4 border-cta bg-orange-100 rounded-r-lg">
    <h3 className="font-heading font-bold text-cta">🎯 Exam Spotlight</h3>
    <p className="font-body mt-2">{details}</p>
  </div>
);

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const { details } = node.data.target.fields;
      if (node.data.target.sys.contentType.sys.id === 'examSpotlight') {
        return <ExamSpotlight details={details} />;
      }
    },
    // Optional: add custom styling for standard elements
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-3xl font-bold font-heading mt-8 mb-4">{children}</h2>,
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="font-body text-lg leading-relaxed mb-4">{children}</p>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc list-inside mb-4">{children}</ul>,
  },
};

export default function ScienceNotePage({ note }) {
  if (!note) return <div>Loading...</div>;

  const { title, content, notePdf } = note.fields;

  return (
    <div className="bg-primary-bg min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
        <article className="prose lg:prose-xl max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-accent mb-8">{title}</h1>
          {documentToReactComponents(content, options)}

          {notePdf && (
            <a 
              href={`https:${notePdf.fields.file.url}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 no-underline inline-block bg-cta text-white font-bold py-3 px-6 rounded hover:bg-accent transition-colors duration-300"
            >
              Download Notes PDF
            </a>
          )}
        </article>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await client.getEntries({ content_type: 'scienceNote' });
  const paths = response.items.map(item => ({
    params: { slug: item.fields.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'scienceNotes',
    'fields.slug': params.slug,
  });

  if (!items.length) {
    return { notFound: true };
  }

  return {
    props: { note: items[0] },
    revalidate: 10,
  };
  }
