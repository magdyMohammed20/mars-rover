// rover: If Function That Takes Command As Argument And Return Object Of x , y And Direction
export default function rover(command) {

    // Split The String as Array
    let splitCommand = command.split('')

    // Counters For Each Character In The Array
    let numOfF = 0,
        numOfB = 0,
        numOfL = 0,
        numOfR = 0;

    // Variables Of Store Coordinates And Direction
    let xCoordinate = 0,
        yCoordinate = 0,
        direction = '';

    // Loop Through The Array Of Characters And Count Number Of Times That Characters Repeated
    for (let x = 0; x < splitCommand.length; x++) {
        if (splitCommand[x] == 'F') { numOfF += 1 }
        if (splitCommand[x] == 'B') { numOfB += 1 }
        if (splitCommand[x] == 'L') { numOfL += 1 }
        if (splitCommand[x] == 'R') { numOfR += 1 }
    }

    // Get X Coordinate By Sum Of Forward Times And Backward Times
    xCoordinate = numOfF + numOfB;

    // Get Y Coordinate By Subtract Sum Of Backward Times From Sum Of Forward Times
    yCoordinate = numOfF - numOfB;

    // Store Directions Times Repeated In Array Of Object To Loop Through For Finding The Most Repeated To Guess The Direction
    let allDirections = [
        { name: 'F', num: numOfF },
        { name: 'B', num: numOfB },
        { name: 'L', num: numOfL },
        { name: 'R', num: numOfR }
    ]


    // Loop Through allDirections To Find Most Repeated Direction
    const max = allDirections.reduce(function (prev, current) {
        return (prev.num > current.num) ? prev : current
    })

    // If The Most Repeated Charcater Is F Then Direction Is North
    if (max.name == 'F') {
        direction = 'North'
    }

    // If The Most Repeated Charcater Is B Then Direction Is South
    if (max.name == 'B') {
        direction = 'South'
    }

    // If The Most Repeated Charcater Is L Then Direction Is West
    if (max.name == 'L') {
        direction = 'West'
    }

    // If The Most Repeated Charcater Is R Then Direction Is East
    if (max.name == 'R') {
        direction = 'East'
    }

    return { x: xCoordinate, y: yCoordinate, direction }
}
