import React from 'react';
import './App.css';


let name: string;
let age: number;
let student_yn: boolean;
let hobbies: string[];
let role: [number, string];

// 객체 타입
// type Person = {
//   name: string;
//   age?: number;
// }
// // let person:Object;
// // 그런데 person 오브젝트에 뭐가 들어있는지 모른다.
// // 그래서 아래와 같이 타입을 정하고 그 타입에 대한 데이터를 명시할 수 있다.
// // 그 값은 누락될 수 없다. 만약 nullable한 변수라면 변수명 뒤에 '?'를 추가한다.
// let person: Person = {
//   name: 'hyuk'
// }

// // 객체 배열
// let lotOfPeople:Person[];

// 타입을 한개가 아닌 두개로 쓰고 싶을 때 (Union)


function App() {
  return (
    <div className="App">
      hello world
    </div>
  );
}

export default App;


/**
 * typescript는 타입추론에 의해서 타입이 정해졌던 기본 자바스트립트와는 달리
 * 타입을 정확히 명시해주어 애매한 데이터 변수를 고정시켜 코드의 방향성에 도움을 준다.
 */