const fs = require('fs')


const terminalCommands = 'Here are the commands'

fs.writeFileSync('about.txt', terminalCommands)


const {register, read} = require('./operaciones');

const args = process.argv.slice(2);

const operation = args[0];

if (operation === 'register') {
  const [, name, age, animal, color, disease] = args;
  register(name, age, animal, color, disease);
} else if (operation === 'read') {
  read();
} else {
  console.log('Yo only can use "register" or "read"');
}