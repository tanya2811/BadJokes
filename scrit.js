const jokes = document.getElementById('joke');
const jokesbtn = document.getElementById('jokeBtn');
jokesbtn.addEventListener('click', generate);

generate();
async function generate(){
    const config ={
        headers :{
            Accept : 'application/json',
        },
    }
 const response = await  fetch('https://icanhazdadjoke.com', config)
 const data = await response.json();
        jokes.innerHTML = data.joke
    
//    fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data)=>{
//         jokes.innerHTML = data.joke
//     })
}