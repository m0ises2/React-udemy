import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

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
