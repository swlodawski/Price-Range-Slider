const rangevalue = document.querySelector(".slider-container .price-slider");
const rangeInputvalue = document.querySelectorAll(".range-input input");

let priceGap = 500;

const priceInputvalue = document.querySelectorAll(".price-input input");
for( let i = 0; i < priceInputvalue.length; i++ ) {
    priceInputvalue[i].addEventListener("input", e => {
        let minp = parseInt(priceInputvalue[0].value);
        let maxp = parseInt(priceInputvalue[1].value);
        let diff = maxp - minp;

        if (minp < 0) {
            alert("minimum price cannot be less than 0");
            priceInputvalue[0].value = 0;
            minp = 0;
        }
        if(maxp < 10000) {
            alert("maximum value cannot be greater than 10000");
            priceInputvalue[1].value = 10000;
            maxp = 10000;
        }
    })
}