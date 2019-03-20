import React, {Component} from 'react';

import './Counter.css';
import {connect} from "react-redux";

class Counter extends Component{
    render(){
        return(
            <div className='Counter'>
                <h1>{this.props.expression}</h1>
                <button onClick={this.props.button0}>0</button>
                <button onClick={this.props.button1}>1</button>
                <button onClick={this.props.button2}>2</button>
                <button onClick={this.props.button3}>3</button>
                <button onClick={this.props.button4}>4</button>
                <button onClick={this.props.button5}>5</button>
                <button onClick={this.props.button6}>6</button>
                <button onClick={this.props.button7}>7</button>
                <button onClick={this.props.button8}>8</button>
                <button onClick={this.props.button9}>9</button>

                <button onClick={this.props.buttonSum}>+</button>
                <button onClick={this.props.buttonDif}>-</button>
                <button onClick={this.props.buttonDiv}>/</button>
                <button onClick={this.props.buttonMult}>*</button>
                <button onClick={this.props.buttonEqually}>=</button>
                <button onClick={this.props.buttonClear}>C</button>







                <button onClick={this.props.decreaseCounter}>Decrease</button>
                <button onClick={this.props.increaseCounter5}>Increase by 5</button>
                <button onClick={this.props.decreaseCounter5}>Decrease by 5</button>
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
        button0: () => dispatch({type: 'BUTTON_0', value: '0'}),
        button1: () => dispatch({type: 'BUTTON_1', value: '1'}),
        button2: () => dispatch({type: 'BUTTON_2', value: '2'}),
        button3: () => dispatch({type: 'BUTTON_3', value: '3'}),
        button4: () => dispatch({type: 'BUTTON_4', value: '4'}),
        button5: () => dispatch({type: 'BUTTON_5', value: '5'}),
        button6: () => dispatch({type: 'BUTTON_6', value: '6'}),
        button7: () => dispatch({type: 'BUTTON_7', value: '7'}),
        button8: () => dispatch({type: 'BUTTON_8', value: '8'}),
        button9: () => dispatch({type: 'BUTTON_9', value: '9'}),

        buttonSum: () => dispatch({type: 'BUTTON_SUM', value: '+'}),
        buttonDif: () => dispatch({type: 'BUTTON_DIF', value: '-'}),
        buttonDiv: () => dispatch({type: 'BUTTON_DIV', value: '/'}),
        buttonMult: () => dispatch({type: 'BUTTON_MULT', value: '*'}),
        buttonEqually: () => dispatch({type: 'BUTTON_EQUALLY'}),
        buttonClear: () => dispatch({type: 'BUTTON_CLEAR'}),





        decreaseCounter: () => dispatch({type: 'DECREMENT'}),
        increaseCounter5: () => dispatch({type: 'INCREMENT5', value: 5}),
        decreaseCounter5: () => dispatch({type: 'DECREMENT5', value: 5})
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);