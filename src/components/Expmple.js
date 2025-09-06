import React from 'react' 

// export function Example() {
//   return (
//     <div>
//       <h1>This is an Example Component</h1>
//     </div>
//   )
// }//using jsx
//
export const Example = () => {
    return (
      React.createElement('div',null,React.createElement('h1',null,"Hello from Example Component"))
    )
  }//without using jsx