import { useState } from "react";
import { useDispatch } from "react-redux";
import { nouveauTuto } from "../TutoSlice";
import { useNavigate } from "react-router-dom";

const Ajout = () => {
  const [tutoriel, setTutoriel] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleChange(e) {
    setTutoriel({ ...tutoriel, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(nouveauTuto(tutoriel));
    navigate("/", { state: { message: "Ajout réussi!" } });
  }
  return (
    <div className="container mt-3" style={{ textAlign: "left" }}>
      <h2>Nouveau Tutoriel</h2>

      <form action="" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="">
          Code
        </label>
        <input
          type="text"
          className="form-control"
          name="code"
          onChange={handleChange}
        />

        <label className="form-label" htmlFor="">
          Titre
        </label>
        <input
          type="text"
          className="form-control"
          name="titre"
          onChange={handleChange}
        />

        <label className="form-label" htmlFor="">
          Description
        </label>
        <textarea
          type="text"
          className="form-control"
          name="description"
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="btn btn-primary">
          Ajouter
        </button>
      </form>
    </div>
  );
};
export default Ajout;
