import React from "react"

class Card extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            mycolor: props.bgcolor,
            id: props.id
        }
        
    }

    render(){
        // const style = {
        //     width: 300,
        //     height: 100,
        //     padding: 50,
        //     border: 1 solid red
        // }
        const style ={
            padding: 10,
            margin: 10,
            backgroundColor: this.state.mycolor,
            color: "#333",
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: 32,
            textAlign: "center"
        }
        return(
            <div id={this.props.id} style={style}>
                {this.props.children}
            </div>
        )
    }
}

export default Card