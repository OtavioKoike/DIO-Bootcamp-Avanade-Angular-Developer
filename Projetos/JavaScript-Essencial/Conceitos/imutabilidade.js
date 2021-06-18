const user = {
    name: "Otavio",
    lastName: "Koike"
};

function getUserWithFullName(user) {
    return {
        // Para cada propriedade do user, coloca no novo objeto
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const  userWithFullName = getUserWithFullName(user);

console.log(user, userWithFullName);