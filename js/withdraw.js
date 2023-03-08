document.getElementById("btn-withdraw").addEventListener("click", function () {

  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const previousBalanceTotal = getTextElementValueById("balance-total");

  if (typeof newWithdrawAmount !== "number" || isNaN(newWithdrawAmount)) {
    alert("Please input a valid number!!");
    return;
  }

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Sorry , you can't withdraw more than your balance!!");
    return;
  }

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById("withdraw-total", newWithdrawTotal);

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  setTextElementValueById("balance-total", newBalanceTotal);
});
