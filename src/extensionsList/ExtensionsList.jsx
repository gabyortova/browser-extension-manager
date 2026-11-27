import { useState, useEffect } from 'react';
import Header from '../header/Header'
import ExtensionElement from '../extensionElement/ExtensionElement';
import './ExtensionsList.scss';

function ExtensionsList() {
    const [activeBtnName, setActiveBtnName] = useState('All');

    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}data.json`)
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
        const remove = window.confirm('Are you sure you want to remove this extension?');

        if (!remove) {
            return;
        }

        setJsonData((prev) =>
            prev.filter((data) => data.name !== name)
        );
    };

    const clickActiveBtnHandler = (name) => {
        setJsonData(prev =>
            prev.map(extension =>
                extension.name === name
                    ? { ...extension, isActive: !extension.isActive }
                    : extension
            )
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
                        clickActiveBtnHandler={clickActiveBtnHandler}
                    />
                ))}
            </section>
        </section>
    )
}

export default ExtensionsList;