import React from "react"
import './App.css';
import Card from './Card'
import CardB from './Cardb'
import Button from './Button'



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      matchFound: false,
      buttons: [
        {id: 1, isHidden: true, isMatched: false, name: "A"},
        {id: 2, isHidden: true, isMatched: false, name:"B"},
        {id: 3, isHidden: true, isMatched: false, name:"A"},
        {id: 4, isHidden: true, isMatched: false, name:"C"},
        {id: 5, isHidden: true, isMatched: false, name:"B"},
        {id: 6, isHidden: true, isMatched: false, name:"D"},
        {id: 7, isHidden: true, isMatched: false, name:"C"},
        {id: 8, isHidden: true, isMatched: false, name:"E"},
        {id: 9, isHidden: true, isMatched: false, name:"D"},
        {id: 10, isHidden: true, isMatched: false, name:"E"},
      ],
    }
    
  }


  // onUpdateHiddenState = id => {
  //   const displayed = this.state.buttons.filter( (button)=> button.isHidden == false);
  //   if (displayed.length == 2)
  //   {
  //     this.setState({
  //       buttons: this.state.buttons.filter(button => button.isHidden == true).map(item => {
  //           return { ...item, isHidden: !item.isHidden }
  //       })
  //     });
  //   }
  // }

  onChangeHiddenState = id => {
    this.setState({
      buttons: this.state.buttons.map(item => {
        if (id === item.id && item.isMatched == false) {
          return { ...item, isHidden: !item.isHidden }
        }
        return item;
      })
    });
  }

  checkforMatch = () => {    
    const displayedItems = this.state.buttons.filter(button => button.isHidden == false)
    if (displayedItems.length == 2 ){
      if (displayedItems[0].name == displayedItems[1].name)
      this.setState({foundMatch:true})
    }

  }

  hideAll(){
    this.setState({
      buttons: this.state.buttons.map(item => {
        if (item.isHidden == false) {
          return { ...item, isHidden: !item.isHidden }
        }
        return item;
      })
    });
  }

  removeMatches(){
    this.setState({
      buttons: this.state.buttons.map(item => {
        if (item.isHidden == false){
          return {...item, isMatched: true, isHidden: true}
        }
        return item;
      })
    })
  }

  checkForMatch(){
    const displayedItems = this.state.buttons.filter(card => card.isHidden == false)
    if (displayedItems.length == 2 ){
      if (displayedItems[0].name == displayedItems[1].name){
        // this.setState({
        //   buttons: this.state.buttons.map(item => {
        //     if (item.isDisplayed == true)
        //   })
        // })
        return true;
      }   
    }
    return false;
  }

  render()  {
    const foundMatch = this.checkForMatch()
    let unmatched = this.state.buttons.filter(button => button.isMatched == false)    
    const displayed = this.state.buttons.filter( button=> button.isHidden == false)
    let gameOver = false
    if (foundMatch && unmatched.length == 2){
      gameOver = true
    }
    let showInfo = (displayed.length == 2 && !foundMatch)? true : false
    let showMatch = foundMatch ? true : false
  return (
    <div>
      <div style={{display: gameOver ? "block" : "none"}}>
        <h1>GAME OVER. Hope you enjoyed it</h1>
      </div>
      <div style={{display: gameOver ? "none" : "block"}}>
       <h2>Click on 2 cards to find a match</h2>
        <div>
          {this.state.buttons.map(item => (
              <Button isHidden={item.isHidden} name={item.name} isMatched={item.isMatched}
              onClick={() => this.onChangeHiddenState(item.id)} />    
            ))}
        </div>
        <div style={{ display: showInfo ? "block" : "none" }}>
          <p>No Match! Select Reset Button to Try again</p>
          <button onClick={() => this.hideAll()}>RESET</button>
        </div>  
        <div style={{ display: showMatch ? "block" : "none" }}>
          <p>You found a Match! Click Continue to keep going</p> 
          <button onClick={() => this.removeMatches()}>Continue</button>      
        </div>  
      </div> 
    </div>
   
  );
  }
  
}

export default App;
