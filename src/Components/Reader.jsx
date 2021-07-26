import React from 'react';
import Book from './Book';
import DeckPanel from './DeckPanel';


const Reader = () => {
    return(
        <React.Fragment>
            <div className="App main-container">
                <DeckPanel />
                <Book />
            </div>
        </React.Fragment>
    );
}

export default Reader;