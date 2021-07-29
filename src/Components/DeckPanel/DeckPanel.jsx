import React from 'react';
import DeckList,{DeckForm} from './DeckList';
import CardList from './CardList';

class DeckPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            panel: "decklist",
            title: "Flash Cards",
            showForm: false,
            decks: [
                { id: '1', title: 'deck title 1' },
                { id: '2', title: 'deck title 2' },
                { id: '3', title: 'deck title 3' }, 
            ],
        }
        
        this.handleAddClick = this.handleAddClick.bind(this);
        this.saveDeckList = this.saveDeckList.bind(this);
        
    }
    
    handleAddClick(showForm){
        this.setState({showForm:true});
    }

    handleTitleChange({ target }){
        this.setState({
            title: target.value
        });
    }

    saveDeckList(title, deck, isNewDeck){
        console.log(title);
        console.log(deck);
        console.log(isNewDeck);

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
                                    deck={[]} 
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

class PanelHeader extends React.Component {
   // constructor(props){
   //     super(props);
   // } 

    render(){
        return(
                <React.Fragment>
                    <div className="panel-header">
                        <h1 className="panel-title">{this.props.title}</h1>
                        <AddBtn showForm="true" handler={this.props.clickFunc}/>
                    </div>
                </React.Fragment>
            );
    }
}

class AddBtn extends React.Component{ 
    //constructor(props){
    //    super(props);
    //} 
  
    render() {
        return(
            <button 
                className="add-btn" 
                value="true"
                onClick={()=>this.props.handler(true)}
            >+</button>
        );
    }
    
}

export default DeckPanel;