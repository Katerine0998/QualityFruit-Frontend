import "../../styles/formStyles.css";
import "../../styles/loginStyle.css";
import { Nav } from "../../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faFile,
  faPenToSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";


const Frutas = () => {
  return (
    <>
       <>
      <Nav />

      <div className="containerPrincipal col-12">
        <div className="containerFormTable col-11">
          <div className="containerPart col-5">
            <div className="containerButton col-12">
              {/* Botón con ícono de casa */}
              <button className="btn btnControlFrom">
                <FontAwesomeIcon icon={faFile} /> Nuevo
              </button>
              <button className="btn btnControlFrom" disabled>
                <FontAwesomeIcon icon={faPenToSquare} /> Editar
              </button>
              <button className="btn btnControlFrom" disabled>
                <FontAwesomeIcon icon={faXmark} /> Cancelar
              </button>
            </div>

            <div className="container mt-5">
              <form /* onSubmit={handleSubmit} */>
          
                <div className="col-4">
                  <label className="form-label">Nombre Fruta</label>
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control inputLogin"
                    id="password"
                    placeholder="Ingrese Nombre"
                    // onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="col-1">
                  <label className="form-label">Descripcion</label>
                </div>
                <div className="col-12">
                  <input
                    // type="password"
                    className="form-control inputLogin"
                    id="password"
                    placeholder="Ingrese Email"
                    // onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="col-4">
                  <label className="form-label">Und medida</label>
                </div>
                <div className="col-12">
                  <input
                    // type="password"
                    className="form-control inputLogin"
                    id="password"
                    placeholder="Ingrese Telefono"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <br />
                <button
                  type="submit"
                  className="btn btn-success w-100"
                  id="btnSend"
                  disabled
                >
                  Guardar
                </button>
              </form>
            </div>
          </div>

          <div className="containerPart12 col-7">
            <h2>Tabla Frutas</h2>
          </div>
        </div>
      </div>
    </>
    </>
  )
}

export default Frutas;
