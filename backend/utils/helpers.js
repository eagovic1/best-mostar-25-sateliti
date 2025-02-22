const getRandomUsesrStreakCount = (users, num) => {
    let usersWithStreak = [];
    users.forEach(user => {
        for (let i = 0; i <= user.streakCount; i++) {
            usersWithStreak.push(user);
        }
    });
    
    let randomUsers = [];
    for (let i = 0; i < num; i++) {
        const randomIndex = Math.floor(Math.random() * usersWithStreak.length);
        let randomUser = usersWithStreak[randomIndex];
        randomUsers.push(randomUser);
        usersWithStreak = usersWithStreak.filter((user, index) => user.id !== randomUser.id);
    }

    return randomUsers;
}

module.exports = { getRandomUsesrStreakCount };