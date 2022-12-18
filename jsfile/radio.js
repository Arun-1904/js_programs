// radio button validation
var form = myform.elements.gender
console.log(form)

var array = [...form]
console.log(array)

var container = document.querySelector("#container")

container.addEventListener("change", (func) => {
    var checked = array.find((func2) => {
        return func2.checked
    }
    )
    console.log("your gender is : ", checked.value);
    // console.log("your gender is :  ", event.target.value);
})


// select tag validation

var countryEl = mycountry.elements.country
console.log(countryEl)

countryEl.addEventListener("change", (event) => {
    console.log(event.target.options[event.target.selectedIndex]);
    console.log(`Selected value: ${event.target.options[event.target.selectedIndex].value}`); // get value
    console.log(`Selected Text: ${event.target.options[event.target.selectedIndex].text}`); // get text
    console.log(event.target.options[event.target.selectedIndex].text)
});