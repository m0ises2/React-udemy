import { Navbar } from "../../ui";
import {
  Outlet,
} from 'react-router-dom';

export const HeroesRoutes = () => {7
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}
