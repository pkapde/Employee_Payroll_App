//Salary range button synchronised with values of user
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');

salary.addEventListener('input', function() {
    output.textContent = salary.value;
});