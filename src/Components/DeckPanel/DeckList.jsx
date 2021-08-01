import React from 'react';
import './deck.css';

class DeckList extends React.Component {
    constructor(props){
        super(props);
        
        this.handleEditClick = this.handleEditClick.bind(this);
        this.updateDeckList = this.updateDeckList.bind(this);
    }

    updateDeckList = (e) => {
        //console.log('update e: ');
        //console.log(e);
        this.props.saveDeckList(e);
    }

    handleEditClick(deckID){
        console.log('Edit clicked!');
        return (<DeckForm 
                    deckID={deckID}
                    deck={this.props.decks[deckID]}
                    updateDeckList={this.updateDeckList}
                /> );        
                     
    }

    renderDeck(decks) {
    //console.log(decks);
        return (
            decks.map(deck => (
                <Deck 
                    key={deck.id}
                    id={deck.id}    
                    value={deck.title} 
                    showForm={this.props.showForm}
                    onEditClick={this.handleEditClick}
                   // handleDeleteClick={() => this.handleDeleteClick(deck.id)}
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
        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //handleChange ({target}){
    //   this.props.updateTitle(e);
    //}

    handleSubmit = (e) => {
        //let isNewDeck = false;
        //if(!this.props.decks) {
        //    isNewDeck = true;
        //}
        this.props.updateDeckList(e);
        e.preventDefault();
        //this.props.updateDeckList(e.target.value, this.props.decks, isNewDeck );
        
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
                                onChange={this.handleChange}
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

const Deck = (props) =>  {
    return(
        <React.Fragment>
            <div className="deck">
                <div className='deck-controls'>
                    <button >Delete</button>
                    <button value={this.props.id} onClick={()=>this.props.onEditClick(this.props.id)}>Edit</button>
                    <button>Play</button>
                </div>
            <div className='deck-title'>{this.props.value}</div>
        </div>
        </React.Fragment>
    );
    
}

export default DeckList;