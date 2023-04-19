import React from 'react';
import fetchData from './services/Api';
import Card from './components/Card';
import initialData from './helpers/InitialData';

function App() {
  const [city, setCity] = React.useState('');
  const [data, setData] = React.useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(city).then((response) => {
      if (response.location) {
        setData(response);
      } else {
        setData(initialData);
      }
    })
  }

  return (
    <div className='flex flex-col w-full h-screen items-center sm:justify-center p-4'>
      <form onSubmit={handleSubmit} className='fixed bottom-0 w-full flex p-4 sm:relative justify-center transition-all duration-3000'>
        <input 
        type="text" 
        value={city}
        placeholder='Cidade' 
        className='p-3 rounded-lg outline-none w-full  sm:max-w-[300px] flex-1'
        onChange={({target}) => setCity((target.value))}
        />
        <button 
        type='submit'
        className='bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold hover:bg-blue-500'>Pesquisar</button>
      </form>

      <Card data={data} />
    </div>
  );
}

export default App;
