export default function App() {
   return <div>Hello world</div>;
}

import React from 'react';

function App() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800">Hello, Tailwind CSS!</h1>
        <p className="text-gray-600 mt-2">Tailwind CSS is awesome!</p>
      </div>
    </div>
  );
}

export default App;