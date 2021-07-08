controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(assets.image`p1p`, mySprite, 50, 100)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`p2p`, mySprite2, 50, 100)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    mySprite2.startEffect(effects.trail, 200)
})
let projectile: Sprite = null
let projectile2: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`p1`, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 50)
mySprite2 = sprites.create(assets.image`p2`, SpriteKind.Player)
controller.player2.moveSprite(mySprite2, 50, 100)
mySprite2.setStayInScreen(true)
mySprite.setStayInScreen(true)
