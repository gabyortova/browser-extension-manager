import './MainHeader.scss'

function MainHeader({ toggleTheme, theme }) {
    const iconSvg = theme === 'dark' ? 'icon-sun.svg' : 'icon-moon.svg';

    const logo = theme === 'dark'
        ? 'logo-dark.svg'
        : 'logo-light.svg';

    return (
        <header className="mainHeader">
            <img
                src={`${import.meta.env.BASE_URL}assets/images/${logo}`}
                alt="logo"
                className="mainHeaderLogo"
            />
            <button className='mainHeaderThemeBtn' onClick={toggleTheme}>
                <img src={`../assets/images/${iconSvg}`} alt={iconSvg} />
            </button>
        </header>
    )
}

export default MainHeader;