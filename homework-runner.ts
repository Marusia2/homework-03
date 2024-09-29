import {Calculator} from "./calculator";
import {Product} from "./product";
import {BankAccount} from "./bank-account";


// 1 task. Test addition and isGreater methods
const calculator = new Calculator()
const sumOfTwoValues = calculator.addition(2, 3)
const theFirstsValueIsGreater = calculator.isGreater(5, 4)

console.log(`The sum of two values is: ${sumOfTwoValues}`)
console.log(`The First value is greater than the Second one: ${theFirstsValueIsGreater}`)

// 2 task. Test the methods getTotalValue and isInStock.

const product = new Product('dress', 50, 5)

console.log(`Total value of the product is: ${product.getTotalValue()}`)
console.log(`Is the product in the stock: ${product.isInStock()}`)

// 3 task. Test the deposit and withdraw methods to change the balance.
const bankAccount = new BankAccount('112233445566', 500)

// 3.1 Balance after Deposit
console.log(`Balance after Deposit is: ` + bankAccount.deposit(100))

// 3.2 Balance after Withdrawal
console.log(`Balance after Withdrawal is: ` + bankAccount.withdraw(10))