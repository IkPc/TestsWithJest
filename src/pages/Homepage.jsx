import { useTheme } from "../components/ThemeContext";
import useLocalStorage from "../components/localStorage"
import Brightness6Icon from '@mui/icons-material/Brightness6';
import './Homepage.css'

const Homepage = () => {
    const [name, setName] = useLocalStorage('name', 'Visitante');
    const {theme, toggleTheme} = useTheme();

    return(
        <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
            <button onClick={toggleTheme}>{theme === 'dark' ? <Brightness6Icon/> : <Brightness6Icon/>}</button>
            <h1>Bem-vindo, {name}!</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    )
}

export default Homepage;