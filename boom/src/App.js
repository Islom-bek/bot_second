import { useEffect } from "react";

const tg = window.Telegram.WebApp ;

function App() {
  
  useEffect( ()=> {
    tg.ready() ;
  } ,[] )
  
  const onClose = ()=> {
    tg.close()
  }
  
  
  return (
    
    

    <div className="App">
      <header className="App-header">
        
        <p>
          <button onClick={ ()=> onClose }> Close </button>
        </p>
        
      </header>
    </div>
  );
}

export default App;
