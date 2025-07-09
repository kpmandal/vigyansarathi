// pages/index.js
import { client } from '../lib/contentful';
import Link from 'next/link';

export default function Home({ notes }) {
  return (
    <div className="bg-primary-bg min-h-screen">
      <header className="text-center py-12 bg-white shadow-md">
        <h1 className="font-heading text-5xl font-bold text-accent">Vigyan Sarathi</h1>
        <p className="font-body text-lg text-dark-text mt-2">Your Guide to Mastering General Science</p>
      </header>

      <main className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {notes.map(note => (
            <div key={note.sys.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={`https:${note.fields.featuredImage.fields.file.url}`} alt={note.fields.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="font-heading text-2xl font-bold text-dark-text">{note.fields.title}</h2>
                <p className="font-body text-gray-600 mt-2">{note.fields.excerpt}</p>
                <Link href={`/notes/${note.fields.slug}`}>
                  <a className="inline-block mt-4 bg-accent text-white font-bold py-2 px-4 rounded hover:bg-cta transition-colors duration-300">
                    Read More →
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await client.getEntries({ content_type: 'scienceNote' });
  return {
    props: {
      notes: response.items,
    },
    revalidate: 10, // In seconds, enables Incremental Static Regeneration
  };
  }
