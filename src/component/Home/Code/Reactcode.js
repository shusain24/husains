import React from 'react'

export default function Reactcode() {
    var htmlCode = String.raw`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Page Title</title>
            </head>
            <body>

                <h1>My First Heading</h1>
                <p>My first paragraph.</p>

             </body>
        </html>
        `;
  return (
    <div className='codeStyle'>
      <pre>{htmlCode}</pre>
    </div>
  )
}

