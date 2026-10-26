import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);



    ///this is for now imma continue with the navbar
    ///NavBar done August 30, 2026
    ///Adding Hero section  August 31, 2026
    ///RecipeCard (Added 10 of em)done September 1, 2026
    ///RevealOnScroll done September 4, 2026
    ///        
