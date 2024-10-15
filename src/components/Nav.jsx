import React from 'react'
import "../styles/navStyle.css";
import { useNavigate,Link  } from "react-router-dom";

export const Nav = () => {
    const navigate = useNavigate();
    const handleSubmit = () =>{
        navigate("/");
    }

  return (
 <div className="contenedor-navegacion">
    <nav className="navegacion navbar navbar-expand-lg navbar-light ">
        {/* <Link to={"/dashboard"} className="navbar-brand" href="#">D</Link>  */}
        {/* <img src="../../public/logo.jpg" alt="logo de la empresa" width={80} /> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
  {/* <a className="navbar-brand" href="#">Navbar</a>
   */}
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
            <li className="nav-item"><Link to={"/int/usuarios"} className="nav-link" href="#">Usuarios</Link></li>
            <li className="nav-item"><Link to={"/int/frutas"} className="nav-link" href="#">Frutas</Link></li>
            <li className="nav-item "><Link to={"/int/movimiento"} className="nav-link" href="#">Movimientos</Link></li>
            <li className="nav-item"><Link to={"/int/inventario"} className="nav-link" href="#">Inventario</Link></li>
        </ul>
  </div>
  <form className="d-flex" onSubmit={handleSubmit}>
        <button className="btn btnLogout" type="submit">Salir</button>
    </form>
</nav>
    {/* <nav className="navegacion navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
             <Link to={"/dashboard"} className="navbar-brand" href="#">Fruit</Link> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to={"/int/usuarios"} className="nav-link" href="#">Usuarios</Link>
                    <Link to={"/int/frutas"} className="nav-link" href="#">Frutas</Link>
                    <Link to={"/int/movimiento"} className="nav-link" href="#">Movimientos</Link>
                    <Link to={"/int/inventario"} className="nav-link" href="#">Inventario</Link>
                </div>
            </div>
            <form className="d-flex" onSubmit={handleSubmit}>
                <button className="btn btn-outline-success" type="submit">Salir</button>
            </form>
        </div>
    </nav> */}
 </div>
  )
}