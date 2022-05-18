import * as React from "react";
import { Disqus } from 'gatsby-plugin-disqus';

export default function Disc({path, title, id}) {

  const disqusConfig = {
    config: {
        /* Replace PAGE_URL with your post's canonical URL variable */
        url: path,
        /* Replace PAGE_IDENTIFIER with your page's unique identifier variable */
        identifier: id,
        /* Replace PAGE_TITLE with the title of the page */
        title: title,},
  }
  return(
      <>
        <Disqus {...disqusConfig} />
      </>
  )
}