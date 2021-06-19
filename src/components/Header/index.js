import './header-style.css'
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <header>
            <Link className="home link" to="/">Home</Link>
            <Link className="salvos link "to="/salvos">Salvos</Link>
        </header>
    )
}

export default Header;

