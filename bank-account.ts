export class BankAccount {
    accountNumber: string
    balance: number

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    // Method Deposit
    deposit(amount: number){
        return this.balance += amount
    }
    // method Withdrawal
    withdraw(amount: number){
        return this.balance -= amount
    }
}