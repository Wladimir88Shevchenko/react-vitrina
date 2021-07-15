import React from 'react';
import Style from './loader.module.css';

const Loader = () => {

    return (
        <div className={Style.loaderContainer}>
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        </div>
    );
}

export default Loader;