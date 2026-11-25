import { useState, useEffect } from 'react';
import Header from '../header/Header'
import ExtensionElement from '../extensionElement/ExtensionElement';
import './ExtensionsList.scss';

function ExtensionsList() {
    const [activeBtnName, setActiveBtnName] = useState('All');

    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setJsonData(data));
    }, []);

    const onBtnLinkHandler = (name) => {
        setActiveBtnName(name);
    }

    const filteredData = jsonData.filter((extension) => {
        if (activeBtnName === 'Active') return extension.isActive;
        if (activeBtnName === 'Inactive') return !extension.isActive;

        return true;
    });

    const removeExtensionHandler = (name) => {
        setJsonData((prev) =>
            prev.filter((data) => data.name !== name)
        );
    };

    return (
        <section>
            <Header activeBtnName={activeBtnName} onBtnLinkHandler={onBtnLinkHandler} />

            <section className='extensionsList'>
                {filteredData.map((extension) => (
                    <ExtensionElement
                        key={extension.name}
                        logo={extension.logo}
                        name={extension.name}
                        description={extension.description}
                        isActive={extension.isActive}
                        removeExtensionHandler={removeExtensionHandler}
                    />
                ))}
            </section>
        </section>
    )
}

export default ExtensionsList;