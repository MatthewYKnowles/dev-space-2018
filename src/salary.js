function giveRaise(employee, raiseAmount) {
    employee.salary += raiseAmount;
    employee.taxWithheld = employee.salary * .20;
}
