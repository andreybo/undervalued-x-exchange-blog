/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
//import 'lazysizes'
exports.onRouteUpdate = ({ location, prevLocation }) => {
    if (prevLocation !== null) {
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach(iframe => {
        iframe.src = iframe.src;
      });
    }
  };
  