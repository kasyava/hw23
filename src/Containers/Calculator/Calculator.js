import React, {Component} from 'react';

import './Calculator.css';
import {connect} from "react-redux";


class Calculator extends Component{
    state = {
        btns: [ "C", "(", ")", "^", "7", "8", "9", "*", "4", "5", "6", "/", "1", "2", "3", "+", ".", "0", "-", "=" ]
    };
    render(){
        return(
            <div className='Calculator'>

                <div className="value-container">
                    <input type="text" value={this.props.expression} />
                </div>


                <div className="buttons-container">
                    {this.state.btns.map((item, key) => {
                        if(item === "C"){
                            return(
                                <button  name={item} onClick={this.props.buttonClear} key={key}>{item}</button>
                            )
                        }
                        else if(item === "="){
                            return(
                                <button name={item} onClick={this.props.buttonEqually} key={key}>{item}</button>
                            )
                        }
                        else {
                            return(
                                <button name={item} onClick={e => this.props.addChar(e.target.name)} key={key}>{item}</button>
                            )
                        }
                    })}
                </div>

                {/*<button name="0" onClick={e => this.props.addChar(e.target.name)}>0</button>*/}
                {/*<button name="1" onClick={e => this.props.addChar(e.target.name)}>1</button>*/}
                {/*<button name="2" onClick={e => this.props.addChar(e.target.name)}>2</button>*/}
                {/*<button name="3" onClick={e => this.props.addChar(e.target.name)}>3</button>*/}
                {/*<button name="4" onClick={e => this.props.addChar(e.target.name)}>4</button>*/}
                {/*<button name="5" onClick={e => this.props.addChar(e.target.name)}>5</button>*/}
                {/*<button name="6" onClick={e => this.props.addChar(e.target.name)}>6</button>*/}
                {/*<button name="7" onClick={e => this.props.addChar(e.target.name)}>7</button>*/}
                {/*<button name="8" onClick={e => this.props.addChar(e.target.name)}>8</button>*/}
                {/*<button name="9" onClick={e => this.props.addChar(e.target.name)}>9</button>*/}

                {/*<button name="+" onClick={e => this.props.addChar(e.target.name)}>+</button>*/}
                {/*<button name="-" onClick={e => this.props.addChar(e.target.name)}>-</button>*/}
                {/*<button name="/" onClick={e => this.props.addChar(e.target.name)}>/</button>*/}
                {/*<button name="*" onClick={e => this.props.addChar(e.target.name)}>*</button>*/}

                {/*<button name="=" onClick={this.props.buttonEqually}>=</button>*/}
                {/*<button onClick={this.props.buttonClear}>C</button>*/}

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

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);