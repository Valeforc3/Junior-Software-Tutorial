import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">
          {children}
        </main>
        <Footer />

        <style jsx global>{`
          /* reset + base */
          html, body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f0f0f0;
          }

          /* layout helpers */
          body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          main.container {
            flex: 1;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
          }

          /* typography */
          h1 {
            color: #333;
            font-size: 2.5rem;
            margin-bottom: 20px;
          }

          h2 {
            color: #555;
            font-size: 1.5rem;
            margin-bottom: 10px;
          }

          h3 {
            color: #777;
            font-size: 1.25rem;
            margin-top: 20px;
          }

          p {
            color: #000000;
            font-size: 1rem;
            line-height: 1.5;
          }
        `}</style>
      </body>
    </html>
  );
}