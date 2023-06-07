import './stylesheet/index.css';
import { useState } from 'react';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import DialogButton from './components/DialogButton';

function App() {    
  const [toggleDialog, setToggleDialog] = useState(false);

  // handle toggle function simply negates the current value of the toggleDialog variable
  const handleToggleDialog = (event) => {
    setToggleDialog(!toggleDialog);
  }

  return (
    <>
      <main>
        <div class="container">
          <StarRating />
          <DialogButton 
            onClick={handleToggleDialog}
          />
          <Dialog 
            isOpen={toggleDialog} 
            onClose={handleToggleDialog}
          />
        </div>
      </main>
    </>
  );
}

export default App;
