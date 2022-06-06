# Typescript Intro

typescript는 타입추론에 의해서 타입이 정해졌던 기본 자바스트립트와는 달리
타입을 정확히 명시해주어 애매한 데이터 변수를 고정시켜 코드의 방향성에 도움을 준다.

## 변수에서의 타입스크립트

```Typescript
let name: string;
let age: number;
let student_yn: boolean;
let hobbies: string[];
let role: [number, string];

//객체 타입
type Person = {
  name: string;
  age?: number;
}
// let person:Object;
// 그런데 person 오브젝트에 뭐가 들어있는지 모른다.
// 그래서 아래와 같이 타입을 정하고 그 타입에 대한 데이터를 명시할 수 있다.
// 그 값은 누락될 수 없다. 만약 nullable한 변수라면 변수명 뒤에 '?'를 추가한다.

let person: Person = {
  name: 'hyuk'
}

// 객체 배열
let lotOfPeople:Person[];

// 타입을 한개가 아닌 두개로 쓰고 싶을 때 (Union)
let id:number | string;
```

## 함수에서의 타입스크립트

```Typescript
// 1.
function printName(name: string){
    console.log(name);
}

// 2.
let printName:(name: string) => void;
```

## 무조건 타입을 부여해야할까?

-   어떤 타입이든 가능하게 하는 'any'라는 타입이 있지만 그렇게 되면 당연히 타입스크립트 코드에 기스가 나게된다. 권장하지 않는다는 말이다. 그럼에도 불구하고 알수없는 타입에 대응해야하는 경우가 있다. 이때는 'unknown'을 사용하면 된다.

-   함수의 반환형도 마찬가지이다. 'void'로 선언할 수 있지만 정말 반환이 없는 함수일 경우에는 'never'를 반환형 부분에 작성하면 된다.

## Alias

```Typescript
// 1. type
type Person = {
  name: string;
  age?: number;
}

// 2. interface
interface Person {
  name: string;
  age?: number;
}
```

-   첫 글자는 대문자로 쓰는 것이 규칙

### type

```Typescript
type X = {
    a: string;
    b: number;
}

type Y = X & {
    c: string;
    d: number;
}

// 에러나는 코드
let y: Y {
    c: 'test',
    d: 42,
}

```

### interface

```Typescript
interface Person {
    name: string;
}

interface Child extends Person {
    height: number;
}

```

### Extends

```Typescript
interface Person {
    name: string;
}

type X = Person & {
    a: string;
    b: number;
}

// 또는 그 반대

type X = {
    a: string;
    b: number;
}

interface Person extends X {
    name: string;
}

```
