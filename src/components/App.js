import React from 'react';
import Noticia from './Noticia';
import MenuNews from './Menu';

function App() {
  return (
    <div className="App">
      <MenuNews></MenuNews>
      <Noticia
        image="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/45/a8/4a/45a84a44-1bfa-36ac-bbad-9864a34bae4a/Icon-Production-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png"
        title="Se está creando el mejor sitio web"
        source="La Buena"
        ></Noticia>
    </div>
  );
}

export default App;
