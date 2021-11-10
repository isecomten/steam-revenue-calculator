import './App.scss';
import RevenueCalculator from './components/RevenueCalculator';
import Topbar from './components/Topbar';
import { dataRetriever } from './components/DataRetriever';
import { useEffect } from 'react';

function App() {
  useEffect(async () => {
    const games = await dataRetriever.GetGameNames();
  });
  return (
    <div className="App">
      <Topbar></Topbar>
      <RevenueCalculator></RevenueCalculator>
    </div>
  );
}

export default App;
