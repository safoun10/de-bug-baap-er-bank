document.getElementById("btn-withdraw").addEventListener("click", function () {

  const newWithdrawAmount = getInputFieldValueById("withdraw-field");

  if(typeof newWithdrawAmount !== "number" || isNaN(newWithdrawAmount)){
    alert("Please input a valid number!!");
    return;
  }

  const previousWithdrawTotal = getTextElementValueById("withdraw-total");

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById("withdraw-total", newWithdrawTotal);

  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  setTextElementValueById("balance-total", newBalanceTotal);
});
