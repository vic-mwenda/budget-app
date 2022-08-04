class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseName = document.getElementById("expense-name");
    this.expenseInput = document.getElementById("expense-input");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }

  //submit budget method
  submitBudgetForm(){
    const value = this.budgetInput.value;
    if (value ===''|| value < 0){
      this.budgetFeedback.classList.add('showItem');
      this.budgetFeedback.innerHTML='<p>value cannot be empty or negative</p>';
    const self = this;
      setTimeout(function () {
      self.budgetFeedback.classList.remove("showItem");

    },4000)
    }
    else {
      this.budgetAmount.textContent = value;
      this.budgetInput.value= '';
      this.showBalance();
    }
  }

  //submit expense method
  submitExpenseForm(){
    const expenseName = this.expenseName.value;
    const expenseAmount = this.expenseInput.value;
    if (expenseName === '' || expenseAmount ==='' || expenseAmount < 0){
      this.expenseFeedback.classList.add('showItem');
      this.expenseFeedback.innerHTML='<p>value cannot be empty or negative</p>';
      const self = this;
      setTimeout(function () {
        self.expenseFeedback.classList.remove("showItem");

      },4000)
    }
    else {
      let amount = parseInt(expenseAmount);
      this.expenseName.value ="";
      this.expenseAmount.value ="";
      const expense = {
        id:this.itemID,
        tittle:expenseName,
        amount:amount,
      };
      this.itemID++;
      this.itemList.push(expense);
      this.addExpense()
      this.showBalance()
    }


  }
  addExpense(expense){
    const div = document.createElement('div');
    div.classList.add('expense');
    div.innerHTML =' <div class="expense">\n' +
        '  <div class="expense-item d-flex justify-content-between align-items-baseline">\n' +
        '\n' +
        '  <h6 class="expense-title mb-0 text-uppercase list-item">${expense.title}</h6>\n' +
        '  <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>\n' +
        '\n' +
        '  <div class="expense-icons list-item">\n' +
        '\n' +
        '  <a href="#" class="edit-icon mx-2" data-id="${expense.id}">\n' +
        '  <i class="fas fa-edit"></i>\n' +
        '  </a>\n' +
        '  <a href="#" class="delete-icon" data-id="${expense.id}">\n' +
        '   <i class="fas fa-trash"></i>\n' +
        '  </a>\n' +
        ' </div>\n' +
        ' </div>\n' +
        '\n' +
        ' </div>\n';
    this.expenseList.appendChild(div);

  }


  //show balance method
  showBalance(){
    const  expense = this.totalExpense()
    const  total = parseInt(this.budgetAmount.textContent)- expense;
    this.balanceAmount.textContent = total;
    if (total < 0){
      this.balance.classList.remove('showGreen','showBlack');
      this.balance.classList.add('showRed');

    }
    else if (total > 0){
      this.balance.classList.remove('showRed','showBlack');
      this.balance.classList.add('showGreen');

    }
    else if (total === 0){
      this.balance.classList.remove('showRed','showGreen');
      this.balance.classList.add('showBlack');

    }
  }

  //total expense method
  totalExpense(){
    let total = 0;
    if (this.itemList.length > 0){
     total=this.itemList.reduce(function (acc,curr) {
       acc+= curr.amount;
       return acc;
     },0)
    }
    this.expenseAmount.textContent = total;
    return total;
  }
}

function eventListeners() {
const budgetForm = document.getElementById('budget-form');
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');

//new instance of ui class
  const ui = new UI()
  //budget form submit listener
  budgetForm.addEventListener('submit',function (event) {

    event.preventDefault()
    ui.submitBudgetForm()
  });
  //expense-form listener

  expenseForm.addEventListener('submit',function (event) {
event.preventDefault()
    ui.submitExpenseForm();
  });

  expenseList.addEventListener('click',function (event) {

  });
}

document.addEventListener('DOMContentLoaded',function () {
  eventListeners()
})