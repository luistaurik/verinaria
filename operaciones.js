const fs = require('fs');

const register = (name, age, animal, color, disease) => {
    const newDate = {
        name,
        age,
        animal,
        color,
        disease,
    };
    
    const dates = getDates();
    dates.push(newDate);
    saveDates(dates);
};

const getDates = () => {
    try {
        const data = fs.readFileSync('citas.json', 'utf-8');
        return JSON.parse(data) || [];
    } catch (error) {
        return [];
    }
};

const saveDates = (dates) => {
    fs.writeFileSync('citas.json', JSON.stringify(dates, null, 2), 'utf-8');
};

const read = () => {
    const dates = getDates();
    
    if (dates.length === 0) {
        console.log('There are no dates yet');
    } else {
        console.log('Current dates>');
        dates.forEach((date, index) => {
            console.log(`date ${index + 1}:`);
            console.log(`name: ${date.name}`);
            console.log(`age: ${date.age}`);
            console.log(`animal: ${date.animal}`);
            console.log(`color: ${date.color}`);
            console.log(`disease: ${date.disease}`);
            console.log('------------------------');
        });
    }
};

module.exports = {register, read};
