import React, {useState} from 'react';
import DeckList,{DeckForm} from './DeckList';
import CardList from './CardList';

class DeckPanel extends React.Component {
    constructor(props) {
        super(props);

        const decks = parseJSON('deck_data');

        this.state = {
            panel: "decklist",
            title: "Flash Cards",
            showForm: false,
            //decks: decks,
            decks: [{
                id: 0,
                title: "Add a Title"
            }]
        }
        
        
        this.saveDeckList = this.saveDeckList.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        
    }
    
    handleAddClick(showForm){
        this.setState({showForm:true});
    }

    handleTitleChange({ target }){
        this.setState({
            title: target.value
        });
    }

    saveDeckList({target}){
        //const id = new Date().getTime();
        const id = Math.random();
const decks = [];
        //const decks = this.state.decks.slice();
       // const data_storage = {};
        const newDeck = [{
            id: id,
            title: target.title.value
        }];
        decks.push(newDeck);

        
        //data_storage['deck_data'] = decks;
        //const myJSON = JSON.stringify(data_storage);
        const myJSON = JSON.stringify(decks);

        this.setState({decks: decks});
        localStorage.setItem('decks', myJSON);
    }

    render() {     
        let list;
        if(this.state.panel === 'decklist'){
            list = <DeckList showForm={this.state.showForm} decks={this.state.decks}/>;
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