// heores es la exportación por defecto
// owners es una exportación individual
import heroes, { owners } from '../data/heroes';

const getHeroeById = (id) => heroes.find(({ id: heroeId }) => heroeId === id);

export default getHeroeById;
export const getHeroesByOwner = (owner) => heroes.filter(({ owner: heroeOwner }) => heroeOwner === owner);
