const initialState ={
    expression: '0'
};


const calc =(expression)=>{
    try {
        while(expression.includes('--')){
            expression = expression.replace('--','-')
        }
        while(expression.includes('++')){
            expression = expression.replace('++','+')
        }
        while(expression.includes('//')){
            expression = expression.replace('//','/')
        }while(expression.includes('**')){
            expression = expression.replace('**','*')
        }
        while(expression.includes('^^')){
            expression = expression.replace('^^','^')
        }
        while(expression.includes('^')){
            expression = expression.replace('^','**')
        }


        return eval(expression.toString());

    }
    catch (error) {
        return "error"
    }
};


const reducer = (state = initialState, action) =>{

    switch (action.type) {

        case 'ADD_CHAR':
            return{...state, expression: state.expression == 0 || state.expression ==='error' ? action.value : state.expression + action.value};
        case 'BUTTON_EQUALLY':
            return{...state, expression: calc(state.expression)};
        case 'BUTTON_CLEAR':
            return{...state, expression: '0'};

        default:
            return state;

    }

};


export default reducer;