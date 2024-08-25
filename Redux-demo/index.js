const redux = require('redux');
const reduxLogger=require('redux-logger')
const logger=reduxLogger.createLogger();
const applyMiddleware=redux.applyMiddleware;
const createStore = redux.createStore;
const bindActionCreaters=redux.bindActionCreators
const combineReducers=redux.combineReducers



//action type
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED='CAKE_RESTOCKED';
const ICECREAM_ORDERED='ICECREAM_ORDERED'
const ICECREAM_RESTOCKED='ICECREAM_RESTOCKED'


// action
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 2, // This can be used in the reducer
  };
}

function restockCake(qty=1){
  return{
    type:CAKE_RESTOCKED,
    payload:qty,
  }
}

function orderIceCream(qty=1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty, 
  };
}

function restockIceCream(qty=1){
  return{
    type:ICECREAM_RESTOCKED,
    payload:qty,
  }
}
   
// const initialState = {
//   noOfCakes: 10,
// };
//LETS WRITE DIFFERENT INITIAL STATES FOR BOTH
const initialCakeState={
  noOfCakes:10,
} 

const initialIceCreamState={
  noOfIceCreams:20,
} 

// (prevState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1, // Use the payload from the action
      };

    case CAKE_RESTOCKED:
      return{
        ...state ,
        noOfCakes: state.noOfCakes +action.payload, 
      }
    default:
      return state;
  }
};

//separate reducer for iccream
const iceCreamReducer=(state=initialIceCreamState,action)=>{
  switch(action.type){
    case ICECREAM_ORDERED:
      return{
        ...state,
        noOfIceCreams:state.noOfIceCreams-1,
      };
    case ICECREAM_RESTOCKED:
      return{
        ...state,
        noOfIceCreams:state.noOfIceCreams+action.payload,
      }
    default:
      return state;
  }

}

//combine reducers
const rootReducer=combineReducers({
  cake:cakeReducer,
  iceCream:iceCreamReducer
})

const store = createStore(rootReducer,applyMiddleware(logger));
//getstate--access state
console.log('Initial State:', store.getState());

//register listeners via subscribe
const unsubscribe = store.subscribe(() => {
  // console.log('Updated State:', store.getState());
  //remove this statement as now we have logger
});

//update state
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());

//restock
// console.log('State before restock',store.getState())
// store.dispatch(restockCake(3));
// console.log('State before restock',store.getState())
// store.dispatch(restockCake(4));

const actions=bindActionCreaters({orderCake,restockCake,orderIceCream,restockIceCream},store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(4)
actions.restockCake(6)


actions.orderIceCream()
actions.orderIceCream()
actions.restockIceCream(3)
actions.restockIceCream(4)

//handles unregistereing of listeners via funcn returnned by subscribe(listener)
unsubscribe();
 