const checkbox = document.getElementById('checkbox');
const basic = document.getElementById('basic-price');
const professional = document.getElementById('professional-price');
const master = document.getElementById('master-price')

checkbox.addEventListener("change", () => {
    if(checkbox.checked === false) {
        basic.innerHTML = "$19.99";
        professional.innerHTML = "$24.99";
        master.innerHTML = "$39.99";
    } else if(checkbox.checked === true) {
        basic.innerHTML = "$199.99";
        professional.innerHTML = "$249.99";
        master.innerHTML = "$399.99";
    }
  });

