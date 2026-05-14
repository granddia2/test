import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import LiveChat from './components/LiveChat.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Live Chat />
  </StrictMode>,
);
