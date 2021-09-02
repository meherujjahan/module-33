const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddy(data))
}
loadBuddy();

const displayBuddy = (data) => {
    const buddies = data.results;
    const buddiesContainer = document.getElementById('buddy');
    for(const buddy of buddies){
        console.log(buddy.email);
const p = document.createElement('p');
p.innerText = `email: ${buddy.email}
name :${buddy.name.title} ${buddy.name.frist} ${buddy.name.last}`
buddiesContainer.appendChild(p);
}
}