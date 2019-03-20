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