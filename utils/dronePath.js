function dronePath () {
  let inputArray = [...arguments]
  if (arguments.length === 1) {
    inputArray = parseArguments(arguments)
  }

  const [size, ...droneInfo] = inputArray
  const output = []
  let index = 0
  while (index < droneInfo.length) {
    const currentDrone = droneInfo.slice(index, index + 2)
    output.push(getDroneFinalPosition(currentDrone, size.split(' ').map(str => str.trim())))
    index += 2
  }
  return output.join('\n')
}

function parseArguments (args) {
  if (typeof args[0] === 'string') {
    const separator = args[0].match((/\n|,/))
    if (!separator) throw new Error('Argument string must be separated by comas or new line')
    return args[0].split(separator[0]).map(str => str.trim())
  }

  if (Array.isArray(args[0])) {
    return args[0]
  }

  throw TypeError('Input must be a string or an array')
}

function getDroneFinalPosition ([position, action], [sizeX, sizeY]) {
  const directions = [{
    N: [0, 1]
  },
  {
    E: [1, 0]
  },
  {
    S: [0, -1]
  },
  {
    W: [-1, 0]
  }
  ]
  const [, x, y, direction] = position.match(/(\d+)\s(\d+)\s([A-Z]+)/)
  const currentPosition = {
    x: parseInt(x, 10),
    y: parseInt(y, 10),
    direction
  }
  if (!x || !y || !direction) throw new Error(`Drone position ${position} is not valid`)

  let index
  for (index = 0; index < action.length; index++) {
    const currentAction = action[index]
    const currentDirectionIndex = directions.findIndex(el => Object.keys(el)[0] === currentPosition.direction)
    switch (currentAction) {
      case 'R':
        currentPosition.direction = Object.keys(directions[(currentDirectionIndex + 1) % 4])[0]
        break
      case 'L':
        currentPosition.direction = Object.keys((directions[((currentDirectionIndex || 4) - 1) % 4]))[0]
        break
      case 'M':
        const moveVectors = Object.values(directions[currentDirectionIndex])[0]
        currentPosition.x += moveVectors[0]
        currentPosition.y += moveVectors[1]
        if (currentPosition.x > sizeX || currentPosition.y > sizeY) throw new Error('out of bounds')
        break
      default:
        throw new Error('Incorrect action')
    }
  }
  return `${currentPosition.x} ${currentPosition.y} ${currentPosition.direction}`
}

export default dronePath
