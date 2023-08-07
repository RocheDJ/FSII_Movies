
export async function loginUser(credentials) {   
    //return fetch('http://localhost:3001/login', {
    return fetch('https://www.kilderryds00.com:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
