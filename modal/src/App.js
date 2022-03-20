import Modal from './Modal.js';
import {useState} from 'react';

function App() {
  let [open, setOpen] = useState(false);

  const handleThis = () => {
    setOpen(!open);
  }

  const myCustomStyle = {
    backgroundColor: "rgb(191, 255, 0, .5)",
    borderRadius: "5px",
  }

  return (<>
    <button onClick={handleThis}>Show modal</button>

    <Modal open={open} x="150px" y="150px" width="200px" customStyle={myCustomStyle}>
      Hello, World!<br/>
      <button onClick={handleThis}>Close</button>
    </Modal>
    </>
  );
}

export default App;