UserData = [
    {
        name: "username",
        data: username
    },
    {
        name: "password",
        data: password
    },
    {
        name: "email",
        data: email
    }
]

localStorage.setItem('username')


username = document.getElementById('username').value
password = document.getElementById('password').value
email = document.getElementById('email').value

buffer = localStorage.getItem('data') 
if(buffer != null){
    window.location.replace("https://www.youtube.com/")
}

function equation(a,b){
    return -b/a

    console.log('aaaa')
}

x = equation(-5,10)
console.log(x)

JSON.stringify()


user = {
    username: username,
    password: password,
};

buffer = JSON.stringify(user)

localStorage.setItem('user_data',buffer)

