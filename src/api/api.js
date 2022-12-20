export const setAuthToken = user => {
    const currentUSer = {
        email: user.email
    }

    fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUSer)
    })
    .then(res => res.json())
    .then(data => {
       
        localStorage.setItem('personalService', data.token)
        console.log(data.token);
    })
    .catch(err => console.error(err))
}