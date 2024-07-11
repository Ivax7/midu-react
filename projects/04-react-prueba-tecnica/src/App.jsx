import './App.css';
import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';
import { Otro } from './components/Otro';



function App() {

  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage( {fact} )
  
  // hacemos nueva petición a cada click
  const handleClick = async () => {
    refreshFact()
  }

  return ( 
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {/*renderizado condicional*/}
      {fact && <p>{fact}</p>}  
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}

      <Otro />
    </main>
  );
}

export default App
