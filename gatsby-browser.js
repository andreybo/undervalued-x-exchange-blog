/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
//import 'lazysizes'
exports.onRouteUpdate = ({ location, prevLocation }) => {
    if (prevLocation !== null) {
      setTimeout(() => {
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
          const src = iframe.src;
          iframe.src = '';
          iframe.src = src;
        });
      }, 100); // Adjust the delay as necessary
    }
  };