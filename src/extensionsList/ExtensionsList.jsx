import { useState, useEffect } from 'react';
import Header from '../header/Header'
import ExtensionElement from '../extensionElement/ExtensionElement';
import './ExtensionsList.scss';

function ExtensionsList() {

    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setJsonData(data));
    }, []);

    return (
        <>
            <Header />
            <section className='extensionsList'>
                {jsonData.map((extension, index) => (
                    <ExtensionElement
                        key={index}
                        logo={extension.logo}
                        name={extension.name}
                        description={extension.description}
                        isActive={extension.isActive}
                    />
                ))}
            </section>
        </>
    )
}

export default ExtensionsList;