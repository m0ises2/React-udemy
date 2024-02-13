import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { HeroCard } from '../components';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../helpers/getHeroesByName';

export const SearchPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const { q: heroToQuery = '' } = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({
    searchText: heroToQuery
  });

  const heroesResults = getHeroesByName(heroToQuery);

  const onSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`?q=${searchText.toLowerCase().trim()}`);
  }

  const showSearch = (heroToQuery.length === 0);
  const showError = (heroToQuery.length > 0) && (heroesResults.length === 0);

  return (
    <>
      <h1> Search </h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4> Searching </h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input
              type='text'
              placeholder='Search a Hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={ searchText }
              onChange={ onInputChange }
            />

            <button className='btn btn-outline-primary mt-1'> Search </button>
          </form>
        </div>

        <div className='col-7'>
          <h4> Results </h4>
          <hr />
          {
            // (heroToQuery === '') 
            //   ? <div className='alert alert-primary'> Search a Hero </div>
            //   : (heroesResults.length === 0 ) && <div className='alert alert-danger'> There're not results with { heroToQuery } </div>
          }

          {/* <div className='alert alert-primary' style={{ display: heroToQuery !== '' ? 'none' : '' }}> Search a Hero </div>
          <div className='alert alert-danger' style={{ display: heroesResults.length === 0 ? 'none' : '' }}> There're not results with { heroToQuery } </div> */}

          <div className='alert alert-primary animate__animated animate__fadeIn animate__fast' style={{ display: showSearch ? '' : 'none' }}>
            Search a Hero
          </div>

          <div className='alert alert-danger animate__animated animate__fadeIn animate__fast' style={{ display: showError ? '' : 'none' }}>
            There're not results with { heroToQuery }
          </div>

          {
            heroesResults.map( hero => ( <HeroCard key = {hero.id} {...hero}/> ))
          }
        </div>
      </div>
    </>
  )
}
