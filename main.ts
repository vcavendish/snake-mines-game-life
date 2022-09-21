namespace SpriteKind {
    export const TrailingSnake = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath4, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    snakeHead.setVelocity(0, -50)
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    game.over(false)
})
function spawnFood () {
    fruit = sprites.create(img`
        . . f f . 7 7 7 . . . . . . . . 
        . . 7 f f 7 7 7 . . . . . . . . 
        . 7 7 . . f f f 2 2 2 2 . . . . 
        . . 2 2 2 2 2 f 2 . . 2 2 2 . . 
        . 2 2 . 2 . 2 2 2 2 2 . . 2 2 . 
        2 2 . 2 2 2 2 . 2 . 2 . . . . 2 
        2 . 2 2 2 2 . 2 . . 2 2 2 . . 2 
        . 2 2 2 2 . . 2 2 2 2 . 2 . . 2 
        . 2 2 . . 2 2 2 2 . 2 2 2 . 2 2 
        . . 2 . . . . 2 2 2 2 2 2 2 2 . 
        . . 2 2 . 2 2 . . 2 2 2 . 2 2 . 
        . . . 2 2 . . 2 2 2 2 . . 2 2 . 
        . . . . 2 . . . . 2 2 2 2 2 . . 
        . . . . . 2 . . . . . 2 2 2 . . 
        . . . . . 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(fruit, sprites.castle.tileGrass2)
    info.startCountdown(5)
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath2, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    snakeHead.setVelocity(-50, 0)
})
info.onCountdownEnd(function () {
    info.changeScoreBy(50)
    info.startCountdown(5)
    growSnake()
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath9, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
})
function growSnake () {
    snakeLength = 1 + snakeLength
    for (let index = 0; index <= snakeLength; index++) {
        snake[1 + index] = sprites.create(img`
            a a a a a a a a a a a a a a a a 
            a a a . . . . . . . . . . 2 2 a 
            a . a a . . . . . . . . 2 2 . a 
            a . . . 7 7 7 7 7 7 7 7 . . . a 
            a . . . 7 7 7 8 8 8 7 7 . . . a 
            a . . . 7 8 7 7 8 7 8 7 . . . a 
            a . . . 7 8 8 7 7 8 8 7 . . . a 
            a . . . 7 5 5 5 7 7 8 7 . . . a 
            a . . . 7 a 8 a 5 7 7 7 . . . a 
            a . . . 7 a 9 a a 9 7 7 . . . a 
            a . . . 7 7 7 7 7 7 7 7 . . . a 
            a . . . . . a . . . 2 2 . . . a 
            a . . . . a a . . . 2 . 2 2 . a 
            a . . a a . . . . . . . . 2 2 a 
            a a a a . . . . . . . . . . 2 a 
            a a a a a a a a a a a a a a a a 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(snake[1 + index], sprites.castle.tileGrass3)
    }
    music.knock.play()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    snakeHead.setVelocity(50, 0)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath3, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
})
function moveSnake () {
    for (let index3 = 0; index3 <= snakeLength; index3++) {
        snake[1 + index3] = sprites.create(assets.image`SnakeHead`, SpriteKind.TrailingSnake)
        snake[1 + index3].x = snakeHead.x
        snake[1 + index3].y = snakeHead.y
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    snakeHead.setVelocity(0, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath1, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath8, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.trail, 200)
    snakeLength = snakeLength + 1
    music.powerUp.play()
    growSnake()
    spawnFood()
    info.changeScoreBy(10)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath6, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let fruit: Sprite = null
let snakeLength = 0
let snakeHead: Sprite = null
let snake: Sprite[] = []
tiles.setCurrentTilemap(tilemap`level1`)
let FruitCount = 1
snake = sprites.allOfKind(SpriteKind.Player)
snakeHead = sprites.create(assets.image`SnakeHead`, SpriteKind.Player)
snakeHead.setVelocity(50, 0)
snake[0] = snakeHead
snakeLength = 0
scene.cameraFollowSprite(snakeHead)
snakeHead.setStayInScreen(false)
snakeHead.setBounceOnWall(false)
snakeHead.setFlag(SpriteFlag.DestroyOnWall, true)
info.setScore(0)
info.setLife(3)
spawnFood()
