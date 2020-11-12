import {useState, useEffect} from 'react';
import Form from './components/Form'
import ItemsList from './components/ItemsList'

function App() {

  

  //STATO dell'array Testi che contiene l'insieme dei diversi input
  let initialValue = JSON.parse(localStorage.getItem('userList')) || [];

  const [textArray, setTextArray] = useState(initialValue);

  function handleFormSubmit(event, testo) {
    {/*
    !!! PUNTO E !!!
    1-preveniamo il comportamento di default del componente form
      perche non vogliamo il refresh della pagina
    2-aggiungiamo il testo dell input alla lista di input gia inseriti
    */}
    event.preventDefault();
    setTextArray([...textArray, testo]);
  }

  useEffect(() => {
    localStorage.setItem('userList', JSON.stringify(textArray));
    });

    function clearList(){
      console.log("funzione clearList");
      localStorage.removeItem('userList')
      setTextArray([])
  }

  return (
    <div>
     {/*
      !!! PUNTO D -- CONTINUES FROM Form.js -- !!!
      1-la prop funct e quindi la funzione handleFormSubmit definita a riga 11
      */}
      <Form funct={handleFormSubmit} />

      {/*
      !!! PUNTO F --CONTINUES IN ItemsList.js-- !!!
       componente che renderizza la lista 
       gli viene passata la props list che contiene l'array con i valori inseriti
      */}
      <ItemsList list={textArray} function={clearList}/>
    </div>
  );
}

export default App;
