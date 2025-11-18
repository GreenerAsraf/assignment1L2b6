// problem 1
function formatValue(
  value: number | string | boolean
): number | string | boolean {
  if (typeof value === 'number') {
    return value * 10
  } else if (typeof value === 'string') {
    return value.toUpperCase()
  } else if (typeof value === 'boolean') {
    return !value
  } else {
    throw new Error('Unsupported type')
  }
}
// console.log(formatValue(3.14159)) // "3.14"
// console.log(formatValue('hello')) // "HELLO"
// console.log(formatValue(true)) // false

// problem 2
function getLength(value: string | any[]): number {
  if (typeof value === 'string') {
    return value.length
  } else if (Array.isArray(value)) {
    return value.length
  } else {
    throw new Error('Unsupported type')
  }
}
// console.log(getLength('TypeSc ript'), [7, 8, 9]) // 10
// console.log(getLength([1, 2, 3, 4, 5])) // 5
// console.log(getLength([true, true, true, true, true, false])) // 5

// Problem 3:
// Create a Person class with name and age properties. Add a method getDetails that returns a string with the person's name and age.

// Requirements:
// You must use a constructor to initialize the properties.
// The getDetails method should return a string in the format: "Name: [name], Age: [age]".
// Sample Input:
// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());
// Sample Output:
// 'Name: John Doe, Age: 30';
// 'Name: Alice, Age: 25';

class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  getDetails(name: string = this.name): string {
    // return `Name: ${this.name}, Age: ${this.age}'`
    return ` 'Name : [${this.name}],Age:[${this.age}]'`
  }
}
const boy1 = new Person('tahmid', 9)
const boy2 = new Person('SHihab', 28)
const boy3 = new Person('Alice', 25)
console.log(boy1.getDetails()) // Name: tahmid, Age: 9
console.log(boy1)
console.log(boy2.getDetails()) // Name: SHihab, Age: 28
console.log(boy3.getDetails()) // Name: Alice, Age: 25

// Problem 4:
function filterByRating(
  products: { title: string; rating: number }[],
  minRating: number
): { title: string; rating: number }[] {
  return products.filter((product) => product.rating >= minRating)
}
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
  { title: 'Book C', rating: 4.0 },
  { title: 'Book C', rating: 0.4 }
]
const highRatedBooks = filterByRating(books, 4.0)
console.log(highRatedBooks)

// problem 5:
// function filterActiveUsers():{ name: string; isActive: boolean }[] {
//   const users[] = [
//     // {id: 1, name: 'Alice',emqil: "asraf@gmail.com", isActive: true },
//     // {id: 2, name: 'Bob', email: "bob@gmail.com", isActive: false },
//     // {id: 3, name: 'Charlie',email: "charlie@gmail.com", isActive: true },
//     // {id: 4, name: 'David',  email: "david@gmail.com", isActive: false }
//   ]
//   return users.filter((user) => user.isActive)
// }
