import './App.css';
import Display from './pages/Display';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Display />
      </ThemeProvider>
    </div>
  );
}

export default App;
