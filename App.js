import React from "react"
import './App.css';
import Card from './Card'
import CardB from './Cardb'
import Button from './Button'

class App extends React.Component {
  constructor(){
    super()
    const purple = "#AE99FF"
    const green = "#49DD8E"
    const blue = "#58B3FF"
    const yellow = "yellow"
    const red = "red"
    const gray = "#D3D3D3"
    this.state = {
      buttons: [
        {id: 1, isHidden: true},
        {id: 2, isHidden: true},
        {id: 3, isHidden: true},
        {id: 4, isHidden: true},
      ],
    }
    
  }

  onChangeHiddenState = id => {
    this.setState({
      buttons: this.state.buttons.map(item => {
        if (id === item.id) {
          return { ...item, isHidden: !item.isHidden }
        }
        return item;
      })
    });
  }

  render()  {
    const displayed = this.state.buttons.filter( (button)=> button.isHidden == false);
    let showInfo = displayed.length > 1 ? true : false
  return (
    <div>
       <h2>Click on 2 cards to find a match</h2>
      <div>
        {this.state.buttons.map(item => (
            <Button isHidden={item.isHidden}
            onClick={() => this.onChangeHiddenState(item.id)} /> 
            // cardColor={card.color} cardState={card.cardState}
            // onClick={() => this.onUpdateCard(card.id)} />           
          ))}
      </div>
      <div style={{ display: showInfo ? "block" : "none" }}>No Match. Try again!</div>   
    </div>
   
  );
  }
  
}

export default App;
