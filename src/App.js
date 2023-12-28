import React from 'react';
import { useReducer } from 'react';
import reducer from './reducers';
import { initialState } from './reducers';
import { addOne, clearMemory } from './actions';
import { applyNumber } from './actions';
import { changeOperation } from './actions';
import { clearDisplay } from './actions';
import { changeMemory } from './actions';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const [state, dispatchState] = useReducer(reducer, initialState);

  const onMemoryClicked = (e) => {
    e.preventDefault();
    dispatchState(changeMemory())
  }

  const onClick = (e) => {
    e.preventDefault();

    if(!isNaN(e.target.value)){
      dispatchState(applyNumber(Number(e.target.value)));
    }
    else if(e.target.value === "*" | e.target.value === "+" | e.target.value === "-"){
      dispatchState(changeOperation(e.target.value));
    }
    else if(e.target.value === "CE"){
      dispatchState(clearDisplay());
    }
    else if(e.target.value === "M+"){
      dispatchState(changeMemory())
    }
    else if(e.target.value === "MR"){
      dispatchState(applyNumber(state.memory));
    }
    else if(e.target.value === "MC"){
      dispatchState(clearMemory());
    }

  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={onClick}/>
              <CalcButton value={"MR"} onClick={onClick}/>
              <CalcButton value={"MC"} onClick={onClick}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={onClick} />
              <CalcButton value={2} onClick={onClick} />
              <CalcButton value={3} onClick={onClick} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={onClick} />
              <CalcButton value={5} onClick={onClick} />
              <CalcButton value={6} onClick={onClick} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={onClick} />
              <CalcButton value={8} onClick={onClick} />
              <CalcButton value={9} onClick={onClick} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={onClick} />
              <CalcButton value={"*"} onClick={onClick} />
              <CalcButton value={"-"} onClick={onClick} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={onClick} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
