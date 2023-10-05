import { Link } from "react-router-dom";

export default function Topo () {
    return (
        <header>
        <div>
            <img src="./assets/logo.png" alt="logo-gelateria" />
            <nav>
                <Link to="/Home">Home</Link>
                <Link to="/Sabores">Sabores</Link>
                <Link to="/Sobre">Sobre</Link>
            </nav>
        </div>
    </header>
    );
}