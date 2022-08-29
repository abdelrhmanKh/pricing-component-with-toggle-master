let dollarValue = document.querySelectorAll(".dollar");
const slider = document.querySelector('.slider');
let monthlyarr = [19.99, 24.99, 39.99];
let annuallyarr = [199.99, 249.99, 399.99];


slider.addEventListener('click', () => {
    if (slider.dataset.plan == "Monthly") {
        dollarValue.forEach((e, i) => {
            e.innerHTML = `<span>&dollar;</span>${annuallyarr[i]}`
        })
        slider.dataset.plan = "Annually"

    } else {
        dollarValue.forEach((e, i) => {
            e.innerHTML = `<span>&dollar;</span>${monthlyarr[i]}`
        })

        slider.dataset.plan = "Monthly";
    }
})