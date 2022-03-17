import rover from './rover.js'

// Calling rover() And Store Value In firstCommand Variable
const firstCommand = rover('FLFFFRFLB')
const secondCommand = rover('FLRRFRFLB')


// Get The Output
console.log(firstCommand) // {x: 6, y: 4, direction: 'North'}
console.log(secondCommand) // {x: 4, y: 2, direction: 'East'}