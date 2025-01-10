import { useDispatch, useSelector } from "react-redux";
import Recherche from "./Recherche";
import { useState } from "react";
import { supprimerTuto } from "../TutoSlice";
import { Link, useLocation } from "react-router-dom";
import { Pencil, Trash, TrashFill } from "react-bootstrap-icons";

const List = () => {
  const list = useSelector((st) => st.tuto.list);
  const [terme, setTerme] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();

  const message = location.state && location.state.message;

  const filteredList = list.filter((tuto) =>tuto.titre.toUpperCase().includes(terme.toUpperCase())
  );

  return (
    <div className="container">
      {message && <p className="alert alert-success">{message}</p>}
      <h2 className="p-4">Liste des tutoriels</h2>
      <Recherche setTerme={(terme) => setTerme(terme)}></Recherche>
      {filteredList.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Titre</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredList.map((tuto) => (
              <tr key={tuto.code}>
                <td>{tuto.code}</td>
                <td>{tuto.titre}</td>
                <td>{tuto.description}</td>
              <td>
                  <Link to={`/tuto/${tuto.code}`}>
                    <Pencil></Pencil>
                  </Link>
                  <button
                    className="btn"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Voulez vous vraiment supprimer le tuto " +tuto.titre +" ?"
                        )
                      )
                        dispatch(supprimerTuto(tuto.code));
                    }}
                  >
                    <TrashFill style={{ color: "red" }}></TrashFill>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="alert alert-warning">Aucun tutoriel n'est trouvé</p>
      )}
    </div>
  );
};
export default List;
