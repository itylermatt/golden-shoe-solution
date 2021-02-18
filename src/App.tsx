import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SnackBar from './components/SnackBar/SnackBar';
import Tabs from './components/Tabs/Tabs';

function App() {
    const [tabs, setTabs] = useState(['men', 'women', 'kids']);

  return (
    <div className="App">
      <NavBar />
      <Tabs tabs={tabs} />
      <SnackBar />
    </div>
  );
}

export default App;
// @TODO: remove material-ui/icons if not being used