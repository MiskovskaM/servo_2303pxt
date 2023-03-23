



/*basic.forever(function() {
    
    pins.digitalWritePin(DigitalPin.P2, 0) //uvolní se
    pins.servoSetPulse(AnalogPin.P2, 1500)
    basic.pause(20)
})*/

let servo1 = servoPWM.createServo(AnalogPin.P2)


servo1.setPulse(1000)

input.onButtonPressed(Button.A, function() {
    servo1.setPulseBy(-100)
})

input.onButtonPressed(Button.B, function () {
    servo1.setPulseBy(100)
})

input.onButtonPressed(Button.AB, function () {
    servo1.stop()
})


