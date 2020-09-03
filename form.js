class Form {

    constructor() {
      this.input = createInput("Name");
      this.add = createInput("Address")
      this.helper = createButton('Helper');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.ngo = createButton('NGO');
      this.doneH = createButton('DONE');
      this.sent = createElement('h2');
      this.doneN = createButton('DONE!')
      this.next = createButton('Next ')
      this.ngoname = createInput("Name");
      this.info = createElement('h2');
    }
    
    hide(){
      this.greeting.hide();
      this.helper.hide();
      this.input.hide();
      this.title.hide();
      this.ngo.hide();
      this.add.hide();
      this.doneH.hide();
      this.doneN.hide();
      this.sent.hide();
      this.next.hide();
    }
  
    display(){
      this.title.html("Are You Helper or NGO");
      this.title.position(displayWidth/2 -80, 150);
  
     
      this.helper.position(displayWidth/2 + 80, displayHeight/2);
      this.ngo.position(displayWidth/2 - 80, displayHeight/2);
      
  
      this.helper.mousePressed(()=>{
       // this.input.hide();
       this.input.position(displayWidth/2 - 40 , displayHeight/2 - 100);
       this.add.position(displayWidth/2 - 40 , displayHeight/2 - 60);
       this.doneH.position(displayWidth/2 - 40, displayHeight/2);

       this.title.hide();

        this.helper.hide();
        this.ngo.hide();
        this.doneN.hide()
      });

      this.ngo.mousePressed(()=>{
        
        //this.ngoname.position(displayWidth/2 - 40 , displayHeight/2 - 100);
        
        //this.doneN.position(displayWidth/2 - 40, displayHeight/2);

        this.title.hide();
        this.helper.hide();
        this.ngo.hide();
        Player.getInfo();
        game.play();







        
        
       // player.name = this.input.value();
       // playerCount+=1;
        //player.index = playerCount;
        //player.update();
        //player.updateCount(playerCount);
        //this.greeting.html("Hello " + player.name)
        //this.greeting.position(displayWidth/2 - 70, displayHeight/4);
  
        
  
      });

      this.doneH.mousePressed(()=>{
       
        this.add.hide();
        this.input.hide();
        this.helper.hide();
        this.ngo.hide();
        //this.doneN.hide()

        player.name = this.input.value();
        player.address = this.add.value();
        playerCount+=1;
        player.index = playerCount;
        player.updateH();
       player.updateAddress();
      // player.updateCount(playerCount);
        this.sent.html(player.name + "  Your Information is collected ")
        this.sent.position(displayWidth/2 - 80, displayHeight/2-100);
       
       
        
        
      });

      this.doneN.mousePressed(()=>{
        //this.add.hide();
        this.ngoname.hide();
        this.doneN.hide();

        this.next.position(displayWidth/2 - 40, displayHeight/2);

        player.ngo = this.ngoname.value();
        playerCount+=1;
        player.index = playerCount;
        player.updateNGO();
      // player.updateCount(playerCount);
        this.sent.html(player.name + "  Your NGO has been registered ")
        this.sent.position(displayWidth/2 - 80, displayHeight/2-100);
      });

      this.doneN.mousePressed(()=>{
        
        this.next.hide();

      //  player.getName();

        
        
     
        
      });
      

    }
  }
  