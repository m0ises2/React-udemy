import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

export const HeroePage = () => {
  const navigate = useNavigate();

  const onNavigateBack = () => navigate(-1);

  const { id } = useParams();
  const hero = getHeroById(id);

  if (!hero) {
    return <Navigate to="/marvel" />
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={ hero.superhero }
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3> { hero.superhero } </h3>
        <ul className="list-group list-group-flush">
          <li> <b> Alter ego: </b> { hero.alter_ego } </li>
          <li> <b> Publisher: </b> { hero.publisher } </li>
          <li> <b> First Appaearance: </b> { hero.first_appearance } </li>
        </ul>
        <h5 className="mt-3"> Characters </h5>
        <p> { hero.characters } </p>

        <button className="btn btn-outline-primary" onClick={ onNavigateBack}> Back </button>
      </div>
    </div>
  )
}
