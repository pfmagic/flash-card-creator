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
    }
    
    renderDeck(decks) {
        return (
            decks.map(deck => (
                <Deck 
                    key={deck.id}
                    id={deck.id}    
                    value={deck.title} 
                    showForm={this.props.showForm}
                    handleEditClick={() => this.handleEditClick(deck.id)}
                    handleDeleteClick={() => this.handleDeleteClick(deck.id)}
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
   // constructor(props){
    //    super(props);
        //this.onChangeTitle = this.onChangeTitle.bind(this);
   // }

    onChangeTitle(e){
        this.setState({ 
            title: e.target.value,
        });
    }

    onSubmit(e){
        e.preventDefaut();
        this.setState({
            title: '',
        })
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
                                onChange={this.onChangeTitle}
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

const Deck = (props) => {
    return(
        <React.Fragment>
            <div className="deck">
                <div className='deck-controls'>
                    <button>Delete</button>
                    <button>Edit</button>
                    <button>Play</button>
                </div>
                <div className='deck-title'>{props.value}</div>
            </div>
        </React.Fragment>
    );
}

export default DeckList;