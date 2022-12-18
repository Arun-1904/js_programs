
var down = document.getElementById("but");

var br = document.createElement("br");
function createnew() {

  var div = document.createElement(div)
  document.body.append(div);
  div.id = "one"


  var form = document.createElement(form)
  div.after(form);

  var label = document.createElement("label")
  label.innerHTML = "first name :"
  form.appendChild(label)


  var fn = document.createElement("input")
  fn.type = "Text"
  form.appendChild(fn);

  var br = document.createElement("br")
  form.appendChild(br);


  var label = document.createElement("label")
  label.innerHTML = "last name :"
  form.appendChild(label)

  var ln = document.createElement("input")
  ln.type = "text"
  form.appendChild(ln)


  var br = document.createElement("br")
  form.appendChild(br);


  var label = document.createElement("label")
  label.innerHTML = "date of birth :"
  form.appendChild(label)

  var dob = document.createElement("input")
  dob.setAttribute('type', 'Date')
  form.appendChild(dob)


  var br = document.createElement("br")
  form.appendChild(br);


  var label = document.createElement("label")
  label.innerHTML = "email :"
  form.appendChild(label)

  var mail = document.createElement("input")
  // email.setAttribute("type","email")
  mail.type = "email"
  form.appendChild(mail)


  var br = document.createElement("br")
  form.appendChild(br);


  var label = document.createElement("label")
  label.innerHTML = "Place :"
  form.appendChild(label)

  var place = document.createElement("input")
  place.type = "text"
  form.appendChild(place)


  var br = document.createElement("br")
  form.appendChild(br);

  var label = document.createElement("label")
  label.innerHTML = "gender :"
  form.appendChild(label)

  var rad = document.createElement("input")
  rad.setAttribute("type", "radio")
  rad.setAttribute("name", "gender")
  rad.setAttribute("value", "male")
  form.appendChild(rad)

  var label = document.createElement("label")
  label.innerHTML = "male"
  form.appendChild(label)

  var rad = document.createElement("input")
  rad.setAttribute("type", "radio")
  rad.setAttribute("name", "gender")
  rad.setAttribute("value", "female")
  form.appendChild(rad)

  var label = document.createElement("label")
  label.innerHTML = "female"
  form.appendChild(label)


  var br = document.createElement("br")
  form.appendChild(br);


  var button = document.createElement("button")
  button.innerHTML = "submit"
  button.onclick = function func() {
    console.log(fn.value)
    console.log(ln.value)
    console.log(dob.value)
    console.log(mail.value)
    console.log(place.value)
    var rad=document.querySelector('input[name="gender"]:checked')
    console.log(rad.value )
  }
  form.appendChild(button)


  var but = document.getElementById("but")
  button.after(but)



}


