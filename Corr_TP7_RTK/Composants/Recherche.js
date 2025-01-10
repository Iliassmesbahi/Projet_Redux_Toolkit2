import { useRef } from "react";

const Recherche = ({ setTerme }) => {
  const search = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    setTerme(search.current.value);
  }
  return (
    <form className="d-flex mx-auto" onSubmit={handleSubmit}>
      <div className="form-group mx-sm-3 mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Chercher par titre"
          size="50"
          ref={search}
        />
      </div>
      <button type="submit" className="btn btn-primary mb-2">
        Rechercher
      </button>
    </form>
  );
};
export default Recherche;
