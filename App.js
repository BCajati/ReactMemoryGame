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
      ],
      isHidden: true,
      cards : [
        { id:1, color: "#58B3FF", letter: "A" , row: 1, cardState: "diplayed" },
        { id:2, color: "#58B3FF", letter: "A" , row: 1, cardState: "matched" },
        { id:3, color: "red",  letter: "C" , row: 1, cardState: "hidden"},
        { id:4, color: "red",  letter: "C" , row: 1, cardState: "hidden"},
        // { id:5, color: purple,  letter: "D" , row: 2},
        // { id:6, color: purple,  letter: "D", row: 2},
        // { id:7, color: "orange",  letter: "E", row: 2 },
        // { id:8, color: yellow,  letter: "F", row: 2 },
        // { id:9, color: yellow,  letter: "F", row: 3 },
        // { id:10, color: "orange",  letter: "E", row: 3 },
        // { id:11, color: green,  letter: "B", row: 3 },
        // { id:12, color: green,  letter: "B", row: 3 }
        ]
    }
    this.handleClick = this.handleClick.bind(this)
  }

//   const numbers = [1, 2, 3, 4];
// const newValue = numbers.find((number)=> number > 3 );
// console.log(newValue);

// just need to review this logic - I think this is what I want to do
// const index = this.state.employees.findIndex(emp => emp.id === employee.id),
// employees = [...this.state.employees] // important to create a copy, otherwise you'll modify state outside of setState call
// employees[index] = employee;
// this.setState({employees});

  handleClick(id){
    const findCard = "something"
  }

  onUpdateCard = id => {
    this.setState({
      cards: this.state.cards.map(item => {
        if (id === item.id) {
          return { ...item, cardState: "displayed" }
        }
        return item;
      })
    });
  }

  onChangeButtonColor = () =>{
    let color = this.state.isHidden ? 'green': 'red'
    let hide = !this.state.isHidden
    this.setState({
      buttonColor:color, 
      isHidden: hide
    })
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

  // onUpdateCard = id =>{

  //   this.setState(state =>{
  //     const newCard = {id:state.cards[id].id, 
  //       color:state.cards[id].color,
  //      letter:state.cards[id].letter,
  //      row:state.cards[id].row,
  //      cardState:"displayed"
  //    }
  //     const remainingCards = state.cards.filter(card => card.id !== id)
  //     const cards = remainingCards.concat(newCard)      

  //       return{
  //         cards
  //       }    
  //   })
  // }

  render()  {
  return (
    <div>
       {/* <div>
        <CardB onClick = {() => this.handleClick()} bgcolor="green">Z</CardB>
      </div> */}
      <div>
        
          {this.state.cards.map(card => (
            <CardB cardState={card.id} cardLetter={card.letter} 
            cardColor={card.color} cardState={card.cardState}
            onClick={() => this.onUpdateCard(card.id)} />           
          ))}
      
        {/* <CardB cardState={this.state.cards[0].cardState} cardLetter={this.state.cards[0].letter} cardColor={this.state.cards[0].color} onClick={() => {this.onUpdateCard}}/>
        <CardB cardState={this.state.cards[1].cardState} cardLetter={this.state.cards[1].letter} cardColor={this.state.cards[1].color} />
        <CardB cardState={this.state.cards[2].cardState} cardLetter={this.state.cards[2].letter} cardColor={this.state.cards[2].color} />
        <CardB cardState={this.state.cards[3].cardState} cardLetter={this.state.cards[3].letter} cardColor={this.state.cards[3].color} /> */}
      </div>
      <div>
      <Button isHidden={this.state.isHidden} onClick={this.onChangeButtonColor}/>
      </div>
      <br />

      <div>
        {this.state.buttons.map(item => (
            <Button isHidden={item.isHidden}
            onClick={() => this.onChangeHiddenState(item.id)} /> 
            // cardColor={card.color} cardState={card.cardState}
            // onClick={() => this.onUpdateCard(card.id)} />           
          ))}
      </div>
       {/* <div>
         {displayedCards.filter(card => card.row == 1).map(cardrow1 =>(
           <Card onClick={this.handleClick} bgcolor={cardrow1.color}>{cardrow1.letter}</Card>
         ))}
       </div>
       <div>
         {displayedCards.filter(card => card.row == 2).map(cardrow2 =>(
           <Card onClick={this.handleClick} bgcolor={cardrow2.color}>{cardrow2.letter}</Card>
         ))}
       </div>
       <div>
         {displayedCards.filter(card => card.row == 3).map(cardrow3 =>(
           <Card onClick={this.handleClick} bgcolor={cardrow3.color}>{cardrow3.letter}</Card>
         ))}
       </div> */}
       <h2>Click on 2 cards to find a match</h2>
    </div>
   
  );
  }
  
}

export default App;
