function SetUsername(username){
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}
const willow = new createUser("willow", "w@gmail.com", "123")
console.log(willow);
