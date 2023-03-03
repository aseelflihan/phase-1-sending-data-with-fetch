// Add your code here
const destinationURL = "http://localhost:3000/users";
const submitData = (getName, geatEmil) => {
  const formData = {
    name: getName,
    email: getEmail,
  };
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  return fetch(destinationURL, configurationObject)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("body").append(data.id);
    })
    .catch((err) => {
      document.querySelector("body").innerHTML = err.message;
    });
};