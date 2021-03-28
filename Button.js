import React from "react"

class Button extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           
        }
    }

        render(){
            let backgroundColor = this.props.isHidden ? 'green' : 'red'
            let textColor = this.props.isHidden ? 'green' : 'white'
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
                    A
                </button>
            )
        }
    
}

export default Button