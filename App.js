import logo from './logo.svg';
import './App.css';
import Card from './Card'

function App() {
  const purple = "#AE99FF"
  const green = "#49DD8E"
  const blue = "#58B3FF"
  const yellow = "yellow"
  const red = "red"
  const gray = "#D3D3D3"
  const displayedCards = [
    { id:1, color: gray, letter: "X" , row: 1},
    { id:2, color: gray, letter: "X" , row: 1},
    { id:3, color: gray,  letter: "X" , row: 1},
    { id:4, color: gray,  letter: "X" , row: 1},
    { id:5, color: gray,  letter: "X" , row: 2},
    { id:6, color: gray,  letter: "X", row: 2},
    { id:7, color: gray,  letter: "X", row: 2 },
    { id:8, color: gray,  letter: "X", row: 2 },
    { id:9, color: gray,  letter: "X", row: 3 },
    { id:10, color: gray,  letter: "X", row: 3 },
    { id:11, color: gray,  letter: "X", row: 3 },
    { id:12, color: gray,  letter: "X", row: 3 }
    ]
  const cards = [
    { id:1, color: blue, letter: "A" , row: 1},
    { id:2, color: blue, letter: "A" , row: 1},
    { id:3, color: red,  letter: "C" , row: 1},
    { id:4, color: red,  letter: "C" , row: 1},
    { id:5, color: purple,  letter: "D" , row: 2},
    { id:6, color: purple,  letter: "D", row: 2},
    { id:7, color: "orange",  letter: "E", row: 2 },
    { id:8, color: yellow,  letter: "F", row: 2 },
    { id:9, color: yellow,  letter: "F", row: 3 },
    { id:10, color: "orange",  letter: "E", row: 3 },
    { id:11, color: green,  letter: "B", row: 3 },
    { id:12, color: green,  letter: "B", row: 3 }
    ]

    const names = ["A", "B", "C","D","E"]
  return (
    <div>
       <div>
         {displayedCards.filter(card => card.row == 1).map(cardrow1 =>(
           <Card bgcolor={cardrow1.color}>{cardrow1.letter}</Card>
         ))}
       </div>
       <div>
         {displayedCards.filter(card => card.row == 2).map(cardrow2 =>(
           <Card bgcolor={cardrow2.color}>{cardrow2.letter}</Card>
         ))}
       </div>
       <div>
         {displayedCards.filter(card => card.row == 3).map(cardrow3 =>(
           <Card bgcolor={cardrow3.color}>{cardrow3.letter}</Card>
         ))}
       </div>
       <h2>Click on 2 cards to find a match</h2>
    </div>


    
  );
}

export default App;
