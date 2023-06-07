import './stylesheet/index.css';
import { useState } from 'react';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';

function App() {    
  return (
    <main>
      <div class="container">
        <StarRating />
      </div>
    </main>
  );
}

export default App;
