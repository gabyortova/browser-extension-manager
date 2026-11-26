import { useState, useEffect } from 'react';
import ExtensionsList from './extensionsList/ExtensionsList'
import MainHeader from './mainHeader/MainHeader'
import Footer from './Footer'
import './App.scss'

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <MainHeader toggleTheme={toggleTheme} theme={theme} />
      <ExtensionsList />
      <Footer />
    </>
  )
}

export default App
