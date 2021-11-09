import './App.scss';
import RevenueCalculator from './components/RevenueCalculator';
import Toolbar from './components/Toolbar'
import Topbar from './components/Topbar';
function App() {
  return (
    <div className="App">
      <Toolbar></Toolbar>
      <Topbar></Topbar>
      <RevenueCalculator></RevenueCalculator>
    </div>
  );
}

export default App;
