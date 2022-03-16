import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <TodoList title="test" children={{tasks:[{title:"test"}]}}/>
    </div>
  );
}

export default App;
