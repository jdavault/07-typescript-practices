// type HelloType = 'hello' | 'goodbye';
// const text: HelloType = 'hello';
//console.log(text);


// const featureFlag: boolean = true;
// console.log(featureFlag);


// enum ConnectionStatus {
//   OFFLINE,
//   ONLINE
// }


// const myStatus = ConnectionStatus.OFFLINE;


// const array = [1, 2, 3, 4, 5] as const;
// //array.push(6);

// console.log(array);

// //: 71 | 72 | 73
// function returnLuckyNumber(): 72 {
//   return 72;
// }


// const luckyNumber = returnLuckyNumber();


// const states: ["on", "off"] = ["on", "off"];
// const currState = states[0]

// type User = {
//   id: string;
//   name: string;
// }

// type Employee = {
//   id: string;
//   email: string;
// }

// const people: (User  | Employee)[] = [
//   {id: '1', name: 'John'}, //users
//   {id: '2', name: 'Jane'}, //users },
//   {id: '3', email: 'john@test.com' },
//   {id: '4', email: 'mike@test.com' }
// ]

// people.forEach(person => {
//   // type 'in' guard
//   if (isEmployee(person)) {
//     console.log(person.email);
//   }else {
//     console.log(person.name);
//   }
// })


// function isEmployee(person: User | Employee) {
//   return "email" in person;
// }

//Index Signature
interface TransactionObj {
  [key: string]: number
}
// interface TransactionObj {
//   Pizza: number,
//   Books: number,
//   Job: number
// }

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50
}

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);


const todaysNet = (transactions: TransactionObj): 
number => {
  let total = 0;
  for(const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
}

console.log(todaysNet(todaysTransactions));

type Student = {
  name: string,
  age: number,
  gpa: number,
  classes: number[]
}

// interface Student {
//   name: string,
//   age: number,
//   classes: number[]
// }


const student: Student = {
  name: 'John',
  age: 25,
  gpa: 3.5,
  classes: [100, 200]
}

for (const key in todaysTransactions) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

for (const key in todaysTransactions) {
  console.log(`${key}: ${student[key as keyof typeof student]}`);
}

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`${key}: ${student[key]}`);
}

logStudentKey(student, 'gpa');