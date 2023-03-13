let h1 = document.querySelector("h1");

let property = getComputedStyle(h1).getPropertyValue('font-size');
console.info("The value is : " + property);
