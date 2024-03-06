import { NavLink } from "react-router-dom"
import './MainNavigation.css'

export const MainNavigation: React.FC = () => {
    return (
        <>
        <div className="logo-container">
            <img className="logo" src="homevibeLogo.png" alt="Home Vibe Logo"/>
        </div>
        <div className="buttons-container">
            <ul>
                <h2 className="sub-heading">Find your dream property!</h2>
                <NavLink 
                    to="/"
                > 
                    <button className="button">Home</button>
                </NavLink>
                <NavLink 
                    to="/forSale" 
                >
                        <button className="button">For Sale</button>
                </NavLink>
                <NavLink 
                    to="/forRent"
                >
                        <button className="button">For Rent</button>
                </NavLink>
            </ul>
    </div>
        </>
        
    )
    
}