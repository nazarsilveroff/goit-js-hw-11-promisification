const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];
// document.querySelector('.output').insertAdjacentHTML('beforeend',`<li>Resolved after ${updatedUsers}ms</li>`)
const logger = updatedUsers => document.querySelector('.output').insertAdjacentHTML('beforeend',`<li>Resolved after ${JSON.stringify(updatedUsers)}ms</li>`)


document.querySelector('.task2').addEventListener('click', (e) => {
    const toggleUserState = (allUsers, userName) => {
        return new Promise(res => {
            res(allUsers.map(user =>
                user.name === userName ? { ...user, active: !user.active } : user))
        })
    }

    toggleUserState(users, 'Mango').then(logger)
    toggleUserState(users, 'Lux').then(logger)
    
});



document.querySelector('.reload').addEventListener('click', (e) => {
    window.location.reload()
});