// // the most use type - string
// const person = 'John Doe';
// type Person = typeof person;

// // the most use type - object
// const personObject = { name: 'John Doe', age: 30 };
// type PersonObj = typeof personObject;

// type PersonKeys = keyof typeof personObject;

// // the most use type - functions
// const personFunc = async (name: string) => `Hello, ${name}`;

// type PersonFunc = Awaited<ReturnType<typeof personFunc>>;

// interface MainType {
//   name: string;
//   age: number;
// }

// type NestedType = MainType & { isDeveloper: boolean };

// type Prettify<T> = {
//   [k in keyof T]: T[k];
// };

// type idk = Prettify<NestedType>;

// interface Todo {
//   title: string;
//   description: string;
// }

// const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => {
//   return { ...todo, fieldsToUpdate };
// };

// const initialTodo: Todo = {
//   title: 'Learn TypeScript',
//   description: 'Study TypeScript and its features',
// };

// const updatedTodo = updateTodo(initialTodo, {
//   description: 'Learn TypeScript and its features',
// });

interface User {
  id: number;
  name: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
}

type City = User['address']['city'];

function updateAddress(id: User['id'], newAddress: User['address']) {}

// function getProperty<T>(obj: T, key: keyof T) {
//   return obj[key];
// }

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  obj[key] = value;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let user = { name: 'John Doe', age: 30 };
const userName = getProperty(user, 'name');
const userAge = getProperty(user, 'age');

interface MyMouseEvent {
  x: number;
  y: number;
}

interface MyKeyBoardEvent {
  key: string;
}

interface MyEventMap {
  click: MyMouseEvent;
  keypress: MyKeyBoardEvent;
}

function triggerEvent<K extends keyof MyEventMap>(
  eventName: K,
  callback: (e: MyEventMap[K]) => void
) {
  if (eventName === 'click') {
    callback({ x: 10, y: 20 } as MyEventMap[K]);
  } else if (eventName === 'keypress') {
    callback({ key: 'Enter' } as MyEventMap[K]);
  }
}

triggerEvent('click', (e) => {});
triggerEvent('keypress', (e) => {});

type MyEvents = MyEventMap[keyof MyEventMap];

interface StarshipProperties {
  color?: 'red' | 'blue' | 'green';
}

function paintStarship(
  id: number,
  color: NonNullable<StarshipProperties['color']>
) {}

const result2 = paintStarship(1, 'red');

type Properties = 'propA' | 'propB';

type MyMappedType<T> = {
  [P in keyof T]: boolean;
};

type MyNewType = MyMappedType< 'propD' | 'propB'>;

//Properties extends string | number | symbol



