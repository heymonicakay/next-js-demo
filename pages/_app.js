import "../styles/global.css"

/**
 *! You need to restart the development server when you add pages/_app.js.
 ** (Ctrl + C; npm run dev)
 *
 *? To load global CSS files...
 ** Create a file called pages/_app.js with the following content:
 */

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}
export default App

/**
 *? This App component is the top-level component which will be common across all the different pages.
 *? You can use this App component to keep state when navigating between pages, for example.
 */
