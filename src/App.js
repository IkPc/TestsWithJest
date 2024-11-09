import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Homepage />
      </ThemeProvider>
    </div>
  );
}

export default App;
