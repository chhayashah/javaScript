console.log("chhaya");
// const is a predefined keyword , in const ner change and update the value

// let means does not create declare same variable but initialise the value  and solve the scope problem.

/*
prefer not to use var
because of issue in block scope and function scope
*/

/*
javascript me bina variable likhe v value decalre kar skte hai
*/


const accountId=124433;
let accountEmail="@344.com";
var accountPassword=34543;
accountCity="jabalpur";
let accountState;

// accountId=45444;//not allowed
accountEmail="df@gmai.com";
accountPassword=67876;
accountCity="bhopal";

console.log(accountEmail);

console.table([accountEmail,accountId,accountPassword,accountCity, accountState]);