def barchart(y: number, v: number, vmax: number):
    global leds, x
    leds = 0
    x = 0
    v = min(v, vmax)
    leds = int(v * 5 / vmax)
    while x <= leds:
        led.plot(x, y)
        x += 1
reading = 0
w = 0
x = 0
leds = 0
P0_MAX = 812

def on_forever():
    global reading
    basic.clear_screen()
    reading = pins.analog_read_pin(AnalogPin.P0)
    barchart(4, reading, P0_MAX)
    basic.pause(1000)
basic.forever(on_forever)
