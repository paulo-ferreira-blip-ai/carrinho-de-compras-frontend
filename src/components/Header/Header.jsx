import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

import './Header.css';
import CartButton from '../cardButton/CartButton';

function Header(){
  return(
    <header className="header">
      <div className="container">
        <SearchBar />    

        <CartButton />

      </div>
    </header>

  );
}

export default Header;
