// import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import {bindActionCreators } from "redux"
import { actionCreators } from "./Store/index"


function App() {

  const state = useSelector((state) => state.account);
  const dispatch = useDispatch()
  

  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)

  
  console.log(state)
  return (
    <div className="App">
    <h1>(account)</h1>
    <button onClick={() => depositMoney(1000)}>Deposit</button>
    <button onClick={() => withdrawMoney(100)}>Withdraw</button>
      
    </div>
  );
}

export default App;
