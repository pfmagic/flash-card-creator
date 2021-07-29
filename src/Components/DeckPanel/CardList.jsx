import React from 'react';

class CardList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            panel: "cardlist"
        }
    }

    render(){
        return(
            <React.Fragment>
                <Card />
            </React.Fragment>
        );
    }
}

const Card = (props) => {
    console.log(props.panel);
        return(
            <div 
                className="card deck" 
            >
                Front of Card
            </div>
        );
}

export default CardList;