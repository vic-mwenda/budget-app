let amount =parseInt(amountValue);
this.expenseInput = "\n" +
    "       <div class=\"expense\">\n" +
    "        <div class=\"expense-item d-flex justify-content-between align-items-baseline\">\n" +
    "\n" +
    "         <h6 class=\"expense-title mb-0 text-uppercase list-item\">- title</h6>\n" +
    "         <h5 class=\"expense-amount mb-0 list-item\">amount</h5>\n" +
    "\n" +
    "         <div class=\"expense-icons list-item\">\n" +
    "\n" +
    "          <a href=\"#\" class=\"edit-icon mx-2\" data-id=\"${expense.id}\">\n" +
    "           <i class=\"fas fa-edit\"></i>\n" +
    "          </a>\n" +
    "          <a href=\"#\" class=\"delete-icon\" data-id=\"${expense.id}\">\n" +
    "           <i class=\"fas fa-trash\"></i>\n" +
    "          </a>\n" +
    "         </div>\n" +
    "        </div>\n" +
    "\n" +
    "       </div>\n";
this.expenseInput = "";
let  expense = {
    id:this.itemID,
    title:expenseValue,
    amount:amount,
}
this.itemID++;
this.itemList.push(expense);
this.addExpense(expense)
//show balance