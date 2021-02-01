class Game{
    constructor(){

    }

    getState(){
        database.ref('GameState').on("value", function(data){
            gameState = data.val()
        })
    }

    update(state){
        database.ref('/').update({
            GameState : state
        })
    }

    // waiting for players to join: wait state
    start(){
        if(gameState === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }

        car1 = createSprite(100, 200)
        car2 = createSprite(300, 200)
        car3 = createSprite(500, 200)
        car4 = createSprite(700, 200)

        cars = [car1, car2, car3, car4]
    }

    // allPlayers = [p1, p2, p3, p4] (4 players' names)
    play(){
        form.hide()

        Player.getPlayerInfo()
     
        if(allPlayers !== undefined){
            var index = 0
            var x = 0
            var y

            for(var p in allPlayers){

                console.log("hello")

                index = index + 1
                x = x + 200
                y = displayHeight - allPlayers[p].distance

                cars[index - 1].x = x
                cars[index - 1].y = y
            }
        }

        if(keyDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 50
            player.update()
        }

        drawSprites()
    }
}