function barchart (y: number, v: number, vmax: number) {
    leds = 0
    x = 0
    v = Math.min(v, vmax)
    leds = Math.trunc(v * 5 / vmax)
    while (x <= leds) {
        led.plot(x, y)
        x += 1
    }
}
let reading = 0
let v = 0
let x = 0
let leds = 0
let P0_MAX = 812
basic.forever(function () {
    basic.clearScreen()
    reading = pins.analogReadPin(AnalogPin.P0)
    barchart(4, reading, P0_MAX)
    basic.pause(1000)
})
