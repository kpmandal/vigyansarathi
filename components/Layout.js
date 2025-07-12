// components/Layout.js

// 1. Import the Header and Footer components.
// This tells our Layout that it needs to use them.
import Header from './Header';
import Footer from './Footer';

// 2. Define the Layout component.
// It receives a special prop called 'children'.
// 'children' will be whatever page we wrap inside this Layout (e.g., our homepage).
export default function Layout({ children }) {
  return (
    // 3. This outer div uses Flexbox to structure the page.
    // 'min-h-screen' ensures the page is always at least the height of the screen,
    // which helps the footer stick to the bottom.
    <div className="flex flex-col min-h-screen">
      
      {/* The Header component is placed at the top. */}
      <Header />
      
      {/* 
        This 'main' area is where our page content will go.
        'flex-grow' tells it to take up all available space between the header and footer.
        The '{children}' prop is the placeholder for our actual page content.
      */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* The Footer component is placed at the bottom. */}
      <Footer />

    </div>
  );
        }
