import * as robot from "robotjs"

let comments: Array<string> = ['Hello', 'Auto', 'Comments', 'Using RobotJS', 'Whats', 'Up']

// you have 5 seconds to select where to put comment (Change it you need more time)
robot.setMouseDelay(5 * 1000)
robot.mouseClick("left")

comments.forEach(each => {
	// wait 3 seconds for each comment to prove that human is commenting
	robot.setKeyboardDelay(3 * 1000)
	robot.typeString(each)
	robot.keyTap('enter')
})

console.log('Finished');