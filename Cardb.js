import React from "react"

class CardB extends React.Component{
    constructor(props){
        super(props)
        this.state = {           
            cardState: props.cardState,
            letter: props.cardLetter,
            hiddenColor: "green",
            matchedColor: "gray",
            cardColor: this.props.cardColor
        }
    }

    determineColor() {
        switch(this.state.cardState) {
          case 'hidden':
            return "green";
          case 'matched':
            return "gray";
          default:
            return this.state.cardColor;
        }
      }

      determineText() {
        switch(this.state.cardState) {
          case 'hidden':
            return "green";
          case 'matched':
            return "gray";
          default:
            return "white";
        }
      }

    render(){
        const textColor = this.determineText()
        const displayColor = this.determineColor()        
        const style ={
            padding: 10,
            margin: 10,
            backgroundColor: displayColor,
            color: textColor,
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: 32,
            textAlign: "center"
        }       
        return(
            <button style={style} onClick={this.props.onClick}>
                {this.state.letter}
            </button>
        )
    }
  
}

export default CardB