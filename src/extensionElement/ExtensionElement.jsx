import { useState } from 'react';
import './ExtensionElement.scss'

function ExtensionElement({ logo,
    name,
    description,
    isActive }) {

    const [isActiveState, setIsActiveState] = useState(isActive);

    return (
        <section className="extensionElement">
            <div className='info'>
                <img src={logo} alt={name} />

                <div className='text'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className='buttons'>
                <button>Remove</button>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={isActiveState}
                        onChange={() => setIsActiveState(!isActiveState)}
                    />
                    <span className="slider"></span>
                </label>
            </div>

        </section>
    )
}

export default ExtensionElement;