import './MainHeader.scss'

function MainHeader() {

    return (
        <header className="mainHeader">
            <img src="../assets/images/logo.svg" alt="logo" className='mainHeaderImg' />

            <button className='mainHeaderImgSunBtn'>
                <img src="../assets/images/icon-sun.svg" alt="icon-sun" />
            </button>
        </header>
    )
}

export default MainHeader;