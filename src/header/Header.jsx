import { useState } from 'react';
import './Header.scss'

const btnsNames = ['All', 'Active', 'Inactive'];

function Header({ activeBtnName, onBtnLinkHandler }) {

    return (
        <header className="header">
            <h1 className='title'> Extensions List</h1>

            <nav className='nav'>
                {btnsNames.map((name) => {
                    return (
                        <button
                            key={name}
                            className={`link ${activeBtnName === name ? 'activeBtn' : ''}`}
                            onClick={() => onBtnLinkHandler(name)}
                        >
                            {name}
                        </button>
                    );
                })}
            </nav>
        </header>
    )
}

export default Header;