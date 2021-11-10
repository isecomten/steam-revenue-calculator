import './App.scss';
import RevenueCalculator from './components/RevenueCalculator';
import Toolbar from './components/Toolbar'
import Topbar from './components/Topbar';
function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <RevenueCalculator></RevenueCalculator>
    </div>
  );
}

export default App;
