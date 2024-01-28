controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Nave_DITF,
    assets.animation`Nave`,
    200,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Bala_DITF = sprites.createProjectileFromSprite(img`
        4 1 4 1 2 d . . . . 
        1 4 1 4 1 1 2 d . . 
        4 1 4 1 2 d . . . . 
        `, Nave_DITF, 200, 0)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
})
let Meteorito_DITF: Sprite = null
let Bala_DITF: Sprite = null
let Nave_DITF: Sprite = null
Nave_DITF = sprites.create(img`
    2 . . . . 5 . . . . . . . . . 
    d 2 . 5 . f 5 . . . 5 5 8 9 . 
    2 2 2 . 5 4 f 5 . . 5 . . . . 
    . d 2 2 5 f 4 f 5 5 5 5 5 6 . 
    d 2 . 2 5 4 f 4 f 4 f 4 f 5 9 
    . . 2 2 5 f 4 f 4 f 4 f 4 5 8 
    d 2 . 2 5 4 f 4 f 4 f 4 f 5 9 
    . d 2 2 5 f 4 f 5 5 5 5 5 6 . 
    2 2 2 . 5 4 f 5 . . 5 . . . . 
    d 2 . 5 . f 5 . . . 5 5 8 9 . 
    2 . . . . 5 . . . . . . . . . 
    `, SpriteKind.Player)
Nave_DITF.setStayInScreen(true)
controller.moveSprite(Nave_DITF, 200, 200)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    Meteorito_DITF = sprites.create(img`
        . . 7 . . . . . 7 . . 
        . . . 7 . . . 7 . . . 
        . . 7 7 7 7 7 7 7 . . 
        . 7 7 . 7 7 7 . 7 7 . 
        7 7 7 7 7 7 7 7 7 7 7 
        7 . 7 7 7 7 7 7 7 . 7 
        7 . 7 . . . . . 7 . 7 
        . . . 7 7 . 7 7 . . . 
        `, SpriteKind.Enemy)
    Meteorito_DITF.setVelocity(-80, 0)
    Meteorito_DITF.setPosition(180, randint(8, 112))
})
