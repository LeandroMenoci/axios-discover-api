const url = "http://localhost:5500/api"

function getUsers() {
  axios.get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}
getUsers()

function addNewUser() {
  axios.post(url, newUser)
    .then(response => {
      console.log(response)
    })
    .catch(error => console.error(error))
}
const newUser = {
  name: "Olivia Zars",
  avatar: "http://picsum.photos/200/300",
  city: "Rio de Janeiro"
}
// addNewUser()

function getUser(id) {
  axios.get(`${url}/${id}`)
    .then(response => {
      const data = response.data
      userName.textContent = data.name
      userCity.textContent = data.city
      userID.textContent = data.id
      userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}
getUser(1)

function updateUser(id, userUpdated) {
  axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}
const userUpdated = {
  name: "Leandro Romano",
  avatar: "http://picsum.photos/200/300",
  city: "Curitiba"

}
// updateUser(3, userUpdated)


function deleteUser(id) {
  axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}
deleteUser(1)

