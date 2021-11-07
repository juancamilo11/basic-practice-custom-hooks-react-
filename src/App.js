import CounterApp from "./components/CounterApp";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="App my-3">
      <h1 className="text-center">Custom Hooks Practice</h1>
      <CounterApp />
      <hr />
      <TodoApp />
    </div>
  );
}

export default App;
