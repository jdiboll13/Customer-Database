//Use this to create the HTML so that it looks as close to the mock-up as possible.
//customers is the object that contains all the customer information.

console.log(customers);

let dirlist = document.getElementById('dirlist')

for (var i = 0; i < customers.results.length; i++) {
  cust = customers.results[i]
  let li = document.createElement('li')
  let img = document.createElement('img')
  let name = document.createElement('p')
  let email = document.createElement('p')
  let addy = document.createElement('p')
  let addy2 = document.createElement('p')
  let phn = document.createElement('p')
  let ssn = document.createElement('p')

  img.src = `${cust.picture.large}`
  name.textContent = `${cust.name.first} ${cust.name.last}`
  email.textContent = `${cust.email}`
  addy.textContent = `${cust.location.street}`
  addy2.textContent = `${cust.location.city}, ${cust.location.state} ${cust.location.postcode}`
  phn.textContent = `${cust.phone}`
  ssn.textContent = `${cust.id.value}`

  name.classList.add('name')
  email.classList.add('email')
  addy.classList.add('addy')
  addy2.classList.add('addy2')
  phn.classList.add('phn')
  ssn.classList.add('ssn')

  dirlist.appendChild(li)
  li.appendChild(img)
  li.appendChild(name)
  li.appendChild(email)
  li.appendChild(addy)
  li.appendChild(addy2)
  li.appendChild(phn)
  li.appendChild(ssn)

  //phone number
    //customers.phone
  //ssn (blurred and unblurred on hard mode)
    //ssn is under cutomers.id.value


}
