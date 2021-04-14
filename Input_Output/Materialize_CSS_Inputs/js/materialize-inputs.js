//code for datepicker
const Calender = document.querySelector(".datepicker");
M.Datepicker.init(Calender, {
    format: "dd-mm-yyyy",
    autoClose: true
});

//code for select 
$(document).ready(function () {
    $('select').formSelect();
});

//code for range selector value
function getAmount(val) {
    document.getElementById('salaryAmount').innerHTML = val;
}