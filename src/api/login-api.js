
export async function loginUser(credentials) {   
   // return fetch('http://localhost:3001/login', {
    return fetch('http://18.202.168.174:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
