import { useState } from 'react';
import Discussion from './Container/Discussion/Discussion';

function App() {
  return (
    <div className='App bg-neutral-100 text-slate-900 flex flex-col items-center h-full w-full pt-8 font-[Montserrat] px-8 '>
      <header>
        <h2 className='text-3xl text-center font-bold mb-8'>HTTP App</h2>
      </header>
      <Discussion />
    </div>
  );
}

export default App;
