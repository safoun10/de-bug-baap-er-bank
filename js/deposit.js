document.getElementById("btn-deposit").addEventListener("click", function () {

  const newDepositAmount = getInputFieldValueById("deposit-field");

  if(typeof newDepositAmount !== "number" || isNaN(newDepositAmount)){
    alert("Please input a valid number!!");
    return;
  }

  const previousDepositTotal = getTextElementValueById("deposit-total");

  const newDepositTotal = previousDepositTotal + newDepositAmount;
  console.log(newDepositTotal, previousDepositTotal, newDepositAmount);

  setTextElementValueById("deposit-total", newDepositTotal);

  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;

  setTextElementValueById("balance-total", newBalanceTotal);
});
