radio.onReceivedNumber(function (receivedNumber) {
    if (true) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        radio.sendNumber(0)
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (true) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
        radio.sendNumber(1)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    }
    if (true) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
        radio.sendNumber(2)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
    }
})
