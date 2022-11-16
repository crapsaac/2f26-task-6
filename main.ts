let C = 0
let F = 0
input.onButtonPressed(Button.A, function () {
    C = input.temperature()
    basic.showNumber(C)
})
input.onButtonPressed(Button.B, function () {
    F = C * 1.8 + 32
    basic.showNumber(F)
})
