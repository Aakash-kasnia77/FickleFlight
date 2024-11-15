import './input.css';
import MyComponent from './components/Component.tsx';
// import Example from './components/Navbar.jsx';
// import './App.css';
import React from 'react';
import Dropdown from './components/Dropdown.jsx';
// import NavBar from './components/Navbar.jsx';
import NavBarr from './components/NavBaar.tsx';
import Heading from './components/Heading.tsx';
import RecentSearches from './components/RecentSearches.tsx';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <NavBarr/>
      <Heading/>
      <RecentSearches/>
    </div>
  );
}

export default App;
