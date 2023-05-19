import { useEffect, useState } from 'react';
import { HangImgage } from './components/HangImage';
import { letters } from './helpers/letters';
import './App.css'
import { getRandomWord } from './helpers/getRandomWord';

function App() {

  const [ palabras, setPalabra ] = useState( getRandomWord() );
  const [ guionbajo, setGuionbajo ] = useState('_ '.repeat( palabras.length ));  /* Repetimos el largo que tiene las palabras */ 

  const [ intentos, setIntentos ] = useState(0);

  const[ lose, settLose ] = useState( false );
  const[ win, settwin ] = useState( false );
  
  // Determinar si la persona perdio
  useEffect( () => {
    if ( intentos >= 9 ){
      settLose( true );
    }
  }, [ intentos ]); // hoocks

  // Determinar si la persona GANO
  useEffect(() => {

    const palabraDesbloqueada = guionbajo.split(' ').join('');
    if(palabraDesbloqueada === palabras){
      settwin( true )
    }

  }, [guionbajo]);

  const checkLetter = ( letter: string) => {
    if( lose ) return; 
    if( win ) return;

    if( !palabras.includes( letter )){
      setIntentos( Math.min( intentos + 1, 9 ));
      return;
    }

    const palabra_ = guionbajo.split(' ');

    for( let i = 0; i < palabras.length; i++ ){
      if( palabras[i] === letter ) {
        palabra_[i] = letter;
      }
    }

    setGuionbajo(palabra_.join(' '));
  }


  const newGame = () => {

    const  newWord = getRandomWord();
    setPalabra( newWord );
    setGuionbajo( '_ '.repeat( newWord.length ) );
    setIntentos( 0 );
    settLose( false );
    settwin( false );
  }



  return (
  <div className="App">
    {/* Imágenes */}
    <HangImgage imageNumber={ intentos }/>
    {/* Palabra oculta  */}
    <h3>{guionbajo}</h3>
    {/* Contador de intentos  */}
    <h3>Intentos: { intentos }</h3>
    {/* Mensaje de Perdio  */}
    {
      ( lose ) 
      ? <div className='animation1'>
          <h2 className='win_Lose'>Perdió La palabra correcta era "{ palabras }"</h2>
        </div>
      : ''
    }
    {/* Mensaje de GANO  */}
    {
      ( win ) 
      ? <div className='animation1'>
          <h2 className='win_Lose'>"Felicidades Ganaste"</h2>
      </div>
      : ''
    }
    {/* Botones de letras  */}
    {
      letters.map( (letter) =>(
        <button
          onClick={ () => checkLetter(letter)}
          key={ letter }>
            { letter }
        </button>
      ) )
    }
    <br/><br/>
    <a>
    <button className='nueva' onClick={ () => newGame() }>¿Nuevo Palabra?</button>
    </a>
  </div>
  )
};



export default App
