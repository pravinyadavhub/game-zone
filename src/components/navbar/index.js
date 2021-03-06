import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="ui four item menu">
      <Link className="item" exact to="/">
        Home
      </Link>
      <Link className="item" exact to="/games">
        Games
      </Link>
      <Link className="item" exact to="/games/new">
        Add New game
      </Link>
      <Link className="item" exact to="/todo">
        TODO Task
      </Link>
    </div>
  );
};

export default Navbar;
