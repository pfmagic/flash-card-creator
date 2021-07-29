import React from 'react';
import './deck.css';

class DeckList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            panel: "decklist",
            title: "Flash Cards",
            decks: [
                { id: '1', title: 'deck title 1' },
                { id: '2', title: 'deck title 2' },
                { id: '3', title: 'deck title 3' }, 
            ],
        }
        this.handleEditClick = this.handleEditClick.bind(this);
        this.updateDeckList = this.updateDeckList.bind(this);
    }

    updateDeckList= (e) => {
        console.log('update e: ');
        console.log(e);
    }

    handleEditClick(deckID){
        console.log('Edit clicked!');
        console.log(deckID);
        console.log(this.state.decks[deckID]);
        return (<DeckForm 
                    deckID={deckID}
                    deck={this.state.decks[deckID]}
                    updateDeckList={this.updateDeckList}
                /> );        
                     
    }

    renderDeck(decks) {
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
                {this.renderDeck(this.state.decks)}
            </React.Fragment>
        );
    }
    
}

export class DeckForm extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange ({target}){
        this.setState({
            title: target.value
        });
    }
    handleSubmit(e){
        //let isNewDeck = false;
        //if(!this.props.decks) {
        //    isNewDeck = true;
        //}
        e.preventDefault();
        console.log('e: ');
        console.log(e);
        //this.props.updateDeckList(e.target.value, this.props.decks, isNewDeck );
        //this.props.updateDeckList(e);
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

class Deck extends React.Component {
    constructor(props){
        super(props);
        console.log('Deck: '+this.props.decks);
    }

   render(){
       return(
            <React.Fragment>
                <div className="deck">
                    <div className='deck-controls'>
                        <button >Delete</button>
                        <button value={this.props.id} onClick={()=>this.props.onEditClick()}>Edit</button>
                        <button>Play</button>
                    </div>
                    <div className='deck-title'>{this.props.value}</div>
                </div>
            </React.Fragment>
        );
   }
    
}

export default DeckList;