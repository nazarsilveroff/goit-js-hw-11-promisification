const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

document.querySelector('.task2').addEventListener('click', (e) => {
    const toggleUserState = (allUsers, userName) => {
        return new Promise(res => {
            res(allUsers.map(user =>
                user.name === userName ? { ...user, active: !user.active } : user))
        })
    }

    toggleUserState(users, 'Mango').then(updatedUsers => console.table(updatedUsers));
    toggleUserState(users, 'Lux').then(updatedUsers => console.table(updatedUsers))
    
});


document.querySelector('.reload').addEventListener('click', (e) => {
    window.location.reload()
});