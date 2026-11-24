import './Header.scss'

function Header() {

    return (
        <header className="header">
            <h1 className='title'> Extensions List</h1>

            <nav className='nav'>
                <a className='link'>All</a>
                <a className='link'>Active</a>
                <a className='link'>Inactive</a>
            </nav>
        </header>
    )
}

export default Header;