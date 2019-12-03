//Add Event listener to listen for a click and fetch the data in the text file when clicked
document.getElementById('button1').addEventListener('click', () => {
    event.preventDefault();
    fetch('test.txt')
    .then(response => {
        //We find that there is another promise inside this one that's being returned. That's the response.text(). So we return that and do a chaining.
        return response.text();
    }).then(text => { //This then applies to the promise above.
        document.getElementById('output').innerHTML = `<br/> ${text} <br/>`;
        setTimeout(() => {
            document.getElementById('output').innerHTML = '';
        }, 3000);
    }).catch(error => {
        console.log(error);
    });
});

//Add event listener to the second button to fetch json data
document.getElementById('button2').addEventListener('click', () => {
    event.preventDefault();
    fetch('posts.json').then(response => {
        return response.json();
    }).then(json => {
        let output = '<ul> <br/>';
        json.forEach(element => {
            output += ` <li> ${element.body} </li>`;
        });
        output += '</ul>';
        document.getElementById('output').innerHTML = output;
        setTimeout(() => {
            document.getElementById('output').innerHTML = '';
        }, 3000);
    }).catch(error => {
        console.log(error);
    });
});

//Final Event Listener to get data from an API
document.getElementById('button3').addEventListener('click', () => {
    event.preventDefault();
    fetch('https://api.github.com/users').then(response => {
        return response.json();
    }).then(json => {
        let output = '<ul> <br/>';
        json.forEach(element => {
            output += ` <li> ${element.login} </li>`;
        });
        output += '</ul>';
        document.getElementById('output').innerHTML = output;
        setTimeout(() => {
            document.getElementById('output').innerHTML = '';
        }, 3000);
    }).catch(error => {
        console.log(error);
    });
});