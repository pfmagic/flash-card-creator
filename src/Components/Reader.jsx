import React from 'react';
import Book from './Book';
import DeckPanel from './DeckPanel/DeckPanel';


class Reader extends React.Component {
    //constructor(props){
    //    super(props);
    //}
    render(){
        return(
            <React.Fragment>
                <div className="App main-container">
                    <DeckPanel />
                    <Book />
                </div>
            </React.Fragment>
        );  
    }
    
}

export default Reader;