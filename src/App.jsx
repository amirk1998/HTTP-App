import Discussion from './Container/Discussion/Discussion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='App bg-neutral-100 text-slate-900 flex flex-col items-center h-full w-full pt-8 font-[Montserrat] px-8 '>
      <header>
        <h2 className='text-3xl text-center font-bold mb-8'>HTTP App</h2>
      </header>
      <ToastContainer />
      <Discussion />
    </div>
  );
}

export default App;
