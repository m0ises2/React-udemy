import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const HeroList = ({ publisher }) => {
    const heroes = getHeroesByPublisher(publisher);
    
    return (
        <div className="row rows-cols-1 row-cols-md-3 g3">
            { heroes && heroes.map(hero => {
                return <>
                    <HeroCard
                        key={ hero.id }
                        {...hero}
                    />
                </>
            }) }
        </div >
    )
}
