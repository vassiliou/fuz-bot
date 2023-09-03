input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
pins.onPulsed(DigitalPin.P1, PulseValue.Low, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
pins.onPulsed(DigitalPin.P15, PulseValue.Low, function () {
    radio.sendNumber(3)
})
let Channel = 20
radio.setGroup(Channel)
