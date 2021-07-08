//Acount class
//this will allow the user to log in and access an account
//userName, password, amount
class Account{
    constructor(userName, password, balance){
        this.userName = userName;
        this.password = password;
        this.balance = balance;
    }
}

//ATM
//this will allow the account object to access the ATM
//the class holds an array of account objects used to manipulate the balances
class Atm{
    constructor(accounts = []){
        this.accounts = accounts;
    }

    //create account object and store it in the array
    Register(){
        let userName = prompt("Register a Username:");
        console.log("Username: " + userName);
        let password = prompt("Register a Password:");
        console.log("Password: " + password);

        let newAccount = new Account(userName, password, 1000);
        this.accounts.push(newAccount);
        
    }

    //ask user to log in
    //compare Account object to user input
    Login(){
        let name = prompt("Please enter your Username:")
        let pass = prompt("Please enter your Password")
        let account = this.accounts[0]
        if (account.userName === name && account.password === pass){
            console.log("Login successful")
            return true;
        }
        else{
            console.log("Login failed")
            return false;
        }
    }

    //this will ask the user to log out
    //yes = set array index to null
    //no = stay logged in
    Logout(){
        let notice = prompt("Would you like to log out? (y/n)");
        if(notice === "y" || notice === "yes"){
            for(let i = 0; i < this.accounts.length; i++){
                this.accounts[i] = null;
                console.log("status: " + this.accounts[i])
            }
            console.log("You have been successfully logged out");
        }
        else if(notice === "n" || notice === "no"){
            console.log("You are still logged in")
            return true;
        }
        else{
            return this.Logout();
        }
    }

    //check the balance of the account object
    CheckBalance(){
        console.log("Balance: " + this.accounts[0].balance);
    }

    //deposite into the account object
    Deposite(){
        let amount = prompt("How much would you like to Deposite?")
        let total = parseInt(this.accounts[0].balance) + parseInt(amount);
        console.log("New balance:" + parseInt(total)); 
    }

    //withdraw from the account object
    Withdraw(){
        let amount = prompt("How much would you like to Withdraw?")
        let currentBalance = this.accounts[0].balance
        if(currentBalance >= amount){
            let total = parseInt(this.accounts[0].balance) - parseInt(amount);
            console.log("New balance:" + parseInt(total)); 
        }
        else{
            console.log("insufficient funds.")
        }

    }
}

//create Atm object
let atm = new Atm();

//create new account
atm.Register();

let loggedIn = true;
while (loggedIn === true){
    //login using account
    let loginAttempt = atm.Login();
    if(loginAttempt === true){
        //check the account balance
        atm.CheckBalance();
        let input = prompt("Withdraw or Deposite (w/d)").toLowerCase();
        if(input === "withdraw" || input === "w"){
            atm.Withdraw();
            //ask user to log out of account
            loggedIn = atm.Logout();
        }
        else if(input === "deposite" || input === "d"){
            atm.Deposite();
            //ask user to log out of account
            loggedIn = atm.Logout();
        }
    }
    else{
        console.log("The username and password do not match")
        loggedIn = false;
    }
}





