class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
    }

    //it reads the player count from db
    getCount(){
        database.ref('PlayerCount').on("value", function(data){
            playerCount = data.val();
        })
    }

    //updates the player count in the database
    updateCount(count){
        database.ref('/').update({
            PlayerCount : count
        })
    }

    //updates the name of the player in the database
    update(){
        var playerIndex = 'players/player' + this.index
        database.ref(playerIndex).set({
            name : this.name, 
            distance : this.distance
        })
    }

    //allPlayers here is the array containing the details of players
    static getPlayerInfo(){
        database.ref('players/player').on("value", (data) => {
            allPlayers = data.val();
        })
    }
}