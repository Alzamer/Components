import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar.js';

function App() {
  const wrapper = {
    width: '300px',
    height: '50px',
    fontSize: '36px',
    textAlign: 'center'
  }

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => setProgress(prev + 1));
    }, 100);
  }, []);

  return (
    <div style={wrapper}>
      <ProgressBar loaded={progress} color="rgba(248, 255, 48)"/>
    </div>
  );
}

export default App;