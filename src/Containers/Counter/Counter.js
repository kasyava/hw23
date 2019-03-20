import React, {Component} from 'react';

import './Counter.css';
import {connect} from "react-redux";

class Counter extends Component{
    render(){
        return(
            <div className='Counter'>
                <h1>{this.props.expression}</h1>
                <button name="0" onClick={e => this.props.addChar(e.target.name)}>0</button>
                <button name="1" onClick={e => this.props.addChar(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.addChar(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.addChar(e.target.name)}>3</button>
                <button name="4" onClick={e => this.props.addChar(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.addChar(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.addChar(e.target.name)}>6</button>
                <button name="7" onClick={e => this.props.addChar(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.addChar(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.addChar(e.target.name)}>9</button>

                <button name="+" onClick={e => this.props.addChar(e.target.name)}>+</button>
                <button name="-" onClick={e => this.props.addChar(e.target.name)}>-</button>
                <button name="/" onClick={e => this.props.addChar(e.target.name)}>/</button>
                <button name="*" onClick={e => this.props.addChar(e.target.name)}>*</button>

                <button name="=" onClick={this.props.buttonEqually}>=</button>
                <button onClick={this.props.buttonClear}>C</button>

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        expression: state.expression
    }
};


const mapDispatchToProps = (dispatch) =>{

    return{
        addChar:(char)=>dispatch({type: "ADD_CHAR", value: char}),

        buttonEqually: () => dispatch({type: 'BUTTON_EQUALLY'}),
        buttonClear: () => dispatch({type: 'BUTTON_CLEAR'}),


    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);