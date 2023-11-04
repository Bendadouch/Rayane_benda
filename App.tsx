import React from 'react';
import './App.css';
import { Infoperso } from './cv/inofperso';
import { Competence } from './cv/competences';
import { Formation } from './cv/Formation';
import imagcv from './image/imgcv.jpg';
function App() {
  return (
    <div className="App">
<img src={imagcv} alt="" className='imagcv' />
<Infoperso/>
<div className='corpcv'>
<div className='colonne'></div>
<div className='disp' id='skills'><Competence/></div>
<div className='disp' id='form'><Formation/></div>
</div>
      </div>
  );
}

export default App;
