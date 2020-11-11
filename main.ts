input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 90)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
})
pins.servoWritePin(AnalogPin.P0, 180)
pins.servoWritePin(AnalogPin.P1, 180)
basic.forever(function () {
    if (input.lightLevel() < 50) {
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P1, 180)
    }
})
