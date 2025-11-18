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

// problem 2
function getLength(value: string | any[]): number {
  if (typeof value === 'string') {
    return value.length
  } else if (Array.isArray(value)) {
    return value.length
  } else {
    throw new Error('type is not ')
  }
}

// problem 3:

class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  getDetails(name: string = this.name): string {
    return `'Name: ${this.name}, Age: ${this.age}'`
  }
}

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

// problem 5:

type User = {
  id: number
  name: string
  email: string
  isActive: boolean
}
function filterActiveUsers(users: User[]): User[] {
  if (!Array.isArray(users)) {
    throw new Error('Input must be an array of users')
  }
  return users.filter(
    (user): user is User =>
      typeof user.id === 'number' &&
      typeof user.name === 'string' &&
      typeof user.email === 'string' &&
      typeof user.isActive === 'boolean' &&
      user.isActive
  )
}

interface Book {
  title: string
  author: string
  publishedYear: number
  isAvailable: boolean
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? 'Yes' : 'No'
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  )
}

// problem 7:
// Function to get unique values from two arrays of strings or numbers
function getUniqueValues<T extends string | number>(
  array1: T[],
  array2: T[]
): T[] {
  const result: T[] = []

  // Helper to check if a value already exists in result
  function exists(value: T): boolean {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        return true
      }
    }
    return false
  }

  for (let i = 0; i < array1.length; i++) {
    if (!exists(array1[i])) {
      result.push(array1[i])
    }
  }

  for (let i = 0; i < array2.length; i++) {
    if (!exists(array2[i])) {
      result.push(array2[i])
    }
  }

  return result
}

// problem 8:

type Product = {
  name: string
  price: number
  quantity: number
  discount?: number // optional percentage (0–100)
}
function calculateTotalPrice(products: Product[]): number {
  if (!Array.isArray(products) || products.length === 0) {
    return 0
  }

  return products
    .map((product) => {
      // price = price * quantity
      let total = product.price * product.quantity

      //  discount if it exists
      if (
        typeof product.discount === 'number' &&
        product.discount >= 0 &&
        product.discount <= 100
      ) {
        total = total * (1 - product.discount / 100)
      }

      return total
    })
    .reduce((sum, current) => sum + current, 0)
}
