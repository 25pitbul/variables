input.onButtonPressed(Button.A, function () {
    BTS += 1
    basic.pause(1000)
    basic.showNumber(BTS)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    let TIE = 0
    basic.showString("" + (TIE))
    basic.showNumber(TIE)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    NCT += 1
    basic.pause(1000)
    basic.showNumber(NCT)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(BTS)
    basic.clearScreen()
    basic.showNumber(NCT)
    basic.clearScreen()
})
let NCT = 0
let BTS = 0
BTS = 0
NCT = 0
