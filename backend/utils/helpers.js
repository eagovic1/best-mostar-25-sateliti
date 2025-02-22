const getRandomUserStreakCount = (users) => {
    let usersWithStreak = [];
    users.forEach(user => {
        for (let i = 0; i <= user.streakCount; i++) {
            usersWithStreak.push(user);
        }
    });

    const randomIndex = Math.floor(Math.random() * usersWithStreak.length);
    return usersWithStreak[randomIndex];
}

module.exports = { getRandomUser };