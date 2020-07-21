import * as robot from "robotjs"

let texts: Array<string> = ['Hello', 'Auto', 'Comments', 'Using RobotJS', 'Whats', 'Up']

// you have 5 seconds to select where to put text (Change it if you need more time)
robot.setMouseDelay(5 * 1000)
robot.mouseClick("left")

texts.forEach(each => {
	// wait 3 seconds for each text to prove that human is typing
	robot.setKeyboardDelay(3 * 1000)
	robot.typeString(each)
	robot.keyTap('enter')
})

console.log('Finished');
