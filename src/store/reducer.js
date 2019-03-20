const initialState ={
    expression: '0'
};


const calc =(expression)=>{

    while(expression.includes('--')){
        expression = expression.replace('--','-')
    }
    while(expression.includes('++')){
        expression = expression.replace('++','+')
    }
    while(expression.includes('//')){
        expression = expression.replace('//','/')
    }
    while(expression.includes('**')){
        expression = expression.replace('**','*')
    }

    try {
        return eval(expression);

    }
    catch (e) {
        return "error"
    }
};

const reducer = (state = initialState, action) =>{

    switch (action.type) {
        case 'BUTTON_0':
        case 'BUTTON_1':
        case 'BUTTON_2':
        case 'BUTTON_3':
        case 'BUTTON_4':
        case 'BUTTON_5':
        case 'BUTTON_6':
        case 'BUTTON_7':
        case 'BUTTON_8':
        case 'BUTTON_9':
        case 'BUTTON_SUM':
        case 'BUTTON_DIF':
        case 'BUTTON_DIV':
        case 'BUTTON_MULT':
            return{...state, expression: state.expression == 0 || state.expression ==='error' ? action.value : state.expression + action.value};
        case 'BUTTON_EQUALLY':
            return{...state, expression: calc(state.expression)};
        case 'BUTTON_CLEAR':
            return{...state, expression: '0'};








        case 'INCREMENT':
            return{...state, expression: state.expression + 1};
        case 'INCREMENT5':
            return{...state, expression: state.expression + action.value};
        case 'DECREMENT':
            return{...state, expression: state.expression - 1};
        case 'DECREMENT5':
            return{...state, expression: state.expression - action.value};
        default:
            return state;

    }

};


export default reducer;