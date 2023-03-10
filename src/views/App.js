import './App.scss';
// import NewComponents from './example/newComponents';
import ListTodos from './Todos/ListTodos';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="Todo-title">Todoリスト管理アプリ</p>
          {/* <NewComponents/> */}
          <ListTodos/>
      </header>
      <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="light"
      />
    </div>
  );
}

export default App;
