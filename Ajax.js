// xml http requist
// function users() {
//     let requist = new XMLHttpRequest();
//     requist.addEventListener('load', function () {
//         let mosuliInformacia = requist.responseText;
//         let gadaketebuliJs = JSON.parse(mosuliInformacia);
//         let ul = document.createElement('ul');
//         ul.classList.add('ul-users')
//         gadaketebuliJs.data.forEach(item => {
//             let li = document.createElement('li');
//             li.classList.add('li-users');
//             // li.innerText = item.first_name + item.last_name;
//             li.innerText = `${item.first_name} ${item.last_name}`;
//             ul.appendChild(li);
//         });



//         document.getElementById('apiusers').appendChild(ul)
// })
//     requist.open('GET', 'https://reqres.in/api/users?page=2');
//     requist.send();
// }
// users();


// fetch

let currentPage = 1;
let total;
function users(gverdi) {
    fetch('https://reqres.in/api/users?page=' + gverdi, {
    method: 'GET'
})
    .then(function (dabrunebuliText) {
        if (dabrunebuliText.status !== 200) {
            throw dabrunebuliText.status;
        }
        return dabrunebuliText.json();
})
    .then(function (dabrunebuliJs) {
        const fragment = new DocumentFragment();
        dabrunebuliJs.data.forEach(item => {
        let li = document.createElement('li');        
        li.innerText = `${item.first_name} ${item.last_name}`;
        // document.getElementById('ul-users').innerHTML = '';
        fragment.appendChild(li);

        });
        document.getElementById('ul-users').innerHTML = " ";
        document.getElementById("ul-users").appendChild(fragment);
        total = dabrunebuliJs.total_pages;
        
             
})
    .catch(function () {
    
})
}
document.getElementById('loadpre').addEventListener('click', function () {
    if (currentPage == 1) {
        return;
    }
    currentPage--;
    users(currentPage);
})
document.getElementById('loadnext').addEventListener('click', function () {
    if (currentPage == total) {
        return;
    }
    currentPage++;
    users(currentPage);
})

users(currentPage);