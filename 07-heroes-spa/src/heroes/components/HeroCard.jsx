import { Link } from 'react-router-dom';

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
    const heroImgUrl = `/assets/heroes/${ id }.jpg`;
    const charactersByActor = (<p> { characters } </p>);

    return (
        <div className='col animate__animated animate__fadeInRight animate__fast'>
            <div className='card'>
                <div className='row no-gutters'>
                    <div className='col-4'>
                        <img src={ heroImgUrl } alt={ superhero } className='card-img' />
                    </div>

                    <div className='col-8'>
                        <div className='card-body'>
                            <h5 className='card-title'> { superhero } </h5>
                            <p className='card-text'> { alter_ego } </p>
                            {
                                ( alter_ego !== characters ) && charactersByActor
                            }
                            <p className='card-text'>
                                <small className='text-muted'> { first_appearance } </small>
                            </p>

                            <Link to={`/hero/${ id }`}>
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}
