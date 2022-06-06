import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';


// 이 App은 jSX.Element를 리턴한다.
// 그에 대한 타입을 지정하면 React.FC 등이 있다.
// React.ReactNode....
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) =>{
      e.preventDefault();

      if(todo){
        setTodos([...todos, {id:Date.now(), todo:todo, isDone:false}]);
        setTodo("");
      }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;

/** useState의
 * useState의 set 함수는 TS에서 타입이 다음과 같다.
 *      Dispatch<SetStateAction<Type>>
 * 코드에서는 React.Dispatch<React.SetStateAction<string>>
 * 이렇게 보여주고 있다.
 * 해당 부분을 더 알아보려 했지만 일단 React에서 만든 타입이라고 한다.
 * useState의 set함수의 인자는 Dispath에 React.SetStateAction<Generic> 타입을 가진 인자여야한다.
 */

/** useRef
 * 컴포넌트에서 특정 DOM을 선택해야 할 때 ref를 사용하고
 * 함수형 컴포넌트에서 이를 설정할 떄 useRef를 사용하여 설정할 수 있다.
 * useRef로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지는 않는다.
 */

/** Destructuring
 * Javascript에서 변수에 []가 들어가는 경우는 구조분해할당이라고 해서
 * 분해된 데이터를 할당할 변수 = 분해할 값(객체 또는 배열)으로 이루어진 형태이다.
 * es6부터 위와 같은 스타일이 업데이트 됐다.
 */




