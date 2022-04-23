import React, { useState } from 'react'
// importing React Markdown
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkdown] = useState('## markdown preview')
  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          // invoke markdown change
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App
