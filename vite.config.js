// vite.config.js

import mdx from 'vite-plugin-mdx'

// `options` are passed to `@mdx-js/mdx`
const options = {
  // See https://mdxjs.com/advanced/plugins
  remarkPlugins: [
    // E.g. `remark-frontmatter`
  ],
  rehypePlugins: [],
}

export default {
  plugins: [mdx(options)]
}