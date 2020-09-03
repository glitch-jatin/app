class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = name;
    this.info = null;
    this.address = address;
    this.ngo = null;
  }

 /* static getName(){
    var playerCountRef = database.ref('Helpers/Name');
    playerCountRef.on("name",(data)=>{
      playerCount = data.val();
    })
  }*/

  updateAddress(){
    var address = "Helpers/" + this.address;
    database.ref(address).set({
      address :this.address
     // address:this.address
    });
  }

  updateH(){
     Name = "Helpers/" + this.name;
    database.ref(Name).set({
      name :this.name
     // address:this.address
    });
  }

  updateNGO(){
    var playerIndex = "NGOs/" + this.index;
    database.ref(playerIndex).set({
      name:this.ngo
      //distance:this.distance
    });
  }

  static getInfo(){
    var playerInfoRef = database.ref('Helpers');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
      
     // game.play();
     // text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
     //text(Name , 200,200);
    })
    game.play();
  }
  
  
}
