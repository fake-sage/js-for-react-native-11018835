function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((originalName, index) => {
        return {
            originalName: originalName,
            modifiedName: modifiedNames[index],
            id: index + 1
        };
    });
}

const originalNames = ["Kwame", "Bob", "Marley", "Rastaman", "Eve"];
const modifiedNames = ["KWAME", "BOB", "MARLEY", "RASTAMAN", "EVE"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);

