import React from 'react';
import './deck.css';

class DeckList extends React.Component {
    constructor(props){
        super(props);

        this.handleEditClick = this.handleEditClick.bind(this);
    }

    updateDeckList = (e) => {
        this.props.saveDeckList(e);
    }

    handleEditClick = (id, showForm) => {
        console.log('Edit clicked!');
        console.log(this.props.decks[id]);
        
        console.log(showForm);
        return (<DeckForm 
                    deckID={id}
                    deck={this.props.decks[id]}
                    showForm={showForm}
                    updateDeckList={this.updateDeckList}
                /> );        
                     
    }

    handleDeleteClick = (id) => {
        this.props.handleDeleteClick(id);
        //console.log(deckID);
    }

    renderDeck(decks) {
    console.log(decks);      
        return (
            decks.reverse().map(deck => (   
                <Deck 
                    key={deck.id}
                    id={deck.id}    
                    value={deck.title} 
                    showForm={this.props.showForm}
                    onDeleteClick={this.handleDeleteClick}
                    onEditClick={this.handleEditClick}
                    onClick={() => this.handleClick()}
                />            
            ))
        );    
      }

    render(){
        return(
            <React.Fragment>  
                {this.renderDeck(this.props.decks)}
            </React.Fragment>
        );
    }
    
}
export class DeckForm extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        this.props.updateDeckList(e);
        e.preventDefault();        
    }

    render(){
        return(
            <React.Fragment>
                <div className="deck">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input 
                                type="text" 
                                name="title" 
                                placeholder="Type a deck name"
                                value={this.props.decks}
                            />
                        </label>
                        <button className="btn cancel-btn">Cancel</button>
                        <input type="submit" value="Save" />
                    </form>
                </div> 
            </React.Fragment>
        );
    }
        
}

export class Deck extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props);
        return(
        
        <React.Fragment>
            <div className="deck">
                <div className="deck-controls">
                    <button name="delete" value={this.props.id} 
                        onClick={(e)=>this.props.onDeleteClick(e.target.value)}
                    >Delete</button>
                    <button name="edit" value={this.props.id} 
                        onClick={(e)=>this.props.onEditClick(e.target.value, "true")}
                    >Edit</button>
                </div>
                <div className="deck-title">{this.props.value}</div>
            </div>
        </React.Fragment>
    );
    }
    
    
}

export default DeckList;