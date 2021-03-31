import React from "react"

class Button extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           
        }
    }

        render(){
           // let backgroundColor = this.props.isHidden ? 'green' : 'red'
          //  let textColor = this.props.isHidden ? 'green' : 'white'
            let backgroundColor = determineBackgroundColor(this.props.isHidden, this.props.isMatched)
            let textColor = determineTextColor(this.props.isHidden, this.props.isMatched)
            const style ={
                padding: 10,
                margin: 10,
                backgroundColor: backgroundColor,
                color: textColor,
                display: "inline-block",
                fontFamily: "monospace",
                fontSize: 32,
                textAlign: "center"
            }  
            return(
                <button style={style} onClick={this.props.onClick}>
                    {this.props.name}
                </button>
            )
        }
    
}

function determineBackgroundColor(isHidden, isMatched){
    if (isMatched){
        return "gray"
    } else if (isHidden){
        return "green"
    }
    return "red"
}

function determineTextColor(isHidden, isMatched){
    if (isMatched){
        return "gray"
    } else if (isHidden){
        return "green"
    }
    return "white"
}

export default Button