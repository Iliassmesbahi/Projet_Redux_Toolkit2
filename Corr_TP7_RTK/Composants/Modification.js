import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { modifierTuto } from "../TutoSlice";
import { useRef } from "react";

const Modification = () => {
  const { code } = useParams();
  const list = useSelector((st) => st.tuto.list);
  const tutoriel = list.find((tuto) => tuto.code === Number(code));
  const dispatch = useDispatch();
  const titre = useRef();
  const description = useRef();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      modifierTuto({
        code: code,
        titre: titre.current.value,
        description: description.current.value,
      })
    );
    navigate("/", { state: { message: "Modification réussie!" } });
  }
  return (
    <div className="container mt-3" style={{ textAlign: "left" }}>
      {tutoriel ? (
        <>
          <h2>Modification du tutoriel {code} </h2>
          <form action="" onSubmit={handleSubmit}>
            <label className="form-label" htmlFor="">
              Titre
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={tutoriel.titre}
              ref={titre}
            />

            <label className="form-label" htmlFor="">
              Description
            </label>
            <textarea type="text" className="form-control" ref={description}>
              {tutoriel.description}
            </textarea>

            <button type="submit" className="btn btn-primary">
              Modifier
            </button>
          </form>
        </>
      ) : (
        <p className="alert alert-warning">Aucun tutoriel n'est trouvé!</p>
      )}
    </div>
  );
};
export default Modification;
