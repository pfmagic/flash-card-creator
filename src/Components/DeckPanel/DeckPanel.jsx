import React, {useState} from 'react';
import DeckList,{DeckForm} from './DeckList';
import CardList from './CardList';

class DeckPanel extends React.Component {
    constructor(props) {
        super(props);

        const decks = parseJSON('decks');
console.log(decks);
        this.state = {
            panel: "decklist",
            title: "Flash Cards",
            showForm: false,
            decks: decks,
            //decks: [
            //    { id: '1', title: 'deck title 1' },
            //    { id: '2', title: 'deck title 2' },
            //    { id: '3', title: 'deck title 3' }, 
            //]
        }
        
        
        this.saveDeckList = this.saveDeckList.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        
    }
    
    showForm(){
        this.setState({showForm:true});
    }

    handleAddClick(showForm){
        this.setState({showForm:true});
        //showForm();
    }

    handleTitleChange({ target }){
        this.setState({
            title: target.value
        });
    }

    handleDeleteClick(id){
alert('delete fires!'+ id);
    }

    saveDeckList({target}){
        const id = Math.random();

        const decks = this.state.decks;

        const newDeck = {
            id: id,
            title: target.title.value
        };
    
        decks.push(newDeck);
        const myJSON = JSON.stringify(decks);
        this.setState({decks: decks, showForm: false});
        localStorage.setItem('decks', myJSON);
    }

    render() {     
        let list;
        if(this.state.panel === 'decklist'){
            list = <DeckList 
                        decks={this.state.decks} 
                        showForm={this.state.showForm} 
                        handleDeleteClick={this.handleDeleteClick}
                   />;
        }else{            
            list = <CardList showForm={this.state.showForm}/>;         
        }
        
       return(        
            <React.Fragment>
                <div className="left-col deckpanel">
                    <PanelHeader 
                        panel={this.state.panel}
                        title={this.state.title}
                        showForm={this.state.showForm}
                        clickFunc={this.handleAddClick}
                    />
                    {(()=>{
                        if(this.state.showForm === true){
                           return <DeckForm 
                                    updateDeckList={this.saveDeckList}
                                />;
                        }
                    })()}
                    {list}
                </div>
            </React.Fragment>
        ); 
    }
        
}

const PanelHeader = (props) => {
    return(
        <React.Fragment>
            <div className="panel-header">
                <h1 className="panel-title">{props.title}</h1>
                <AddBtn showForm="true" handler={props.clickFunc}/>
            </div>
        </React.Fragment>
    );

}

const AddBtn = (props) => { 
    return(
        <button 
            className="add-btn" 
            value="true"
            onClick={()=>props.handler(true)}
        >+</button>
    );  
}

function parseJSON(data){
    var json_temp = JSON.parse(localStorage.getItem(data));
    if(!json_temp){
        json_temp = [];
    }
    return json_temp;
}

export default DeckPanel;