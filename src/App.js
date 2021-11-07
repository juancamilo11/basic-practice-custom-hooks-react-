import CounterApp from "./components/CounterApp";
import TodoApp from "./components/TodoApp";
import MouseApp from './components/MouseApp';

function App() {
  return (
    <div className="App my-3">
      <h1 className="text-center">Custom Hooks Practice</h1>
      <CounterApp />
      <hr />
      <TodoApp />
      <hr />
      <MouseApp />
      <hr />
    </div>
  );
}

export default App;
