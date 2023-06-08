import { UseState } from './UseState';
import { ClassState } from './ClassState';
import { UseReducer } from './useHooks';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState name="Use State" />
    
      <UseReducer name="Use Reducer"/>
      {/* <ClassState name="Class State"/> */}
    </div>
  );
}

export default App;
