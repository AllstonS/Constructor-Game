//Drag Queen constructor
    function DragQueen (name) {
    this.name = name;
    this.life = 100;
    this.profile = function(image) {
      console.log(image/"")
    }
    this.weapon = function(attack){
      for (var i = 0; i < 3; i++) {
        clickHandler();
      }
      var hits = Math.floor(Math.random() - 5);
        if(this.life > 0 || this.life - 5 > 0){
        console.log("Oh no she did ent" + this.name);

      }else if (this.life < 0);
        console.log(this.name + "you're a washed up queen!");
      }
      DragQueen1 = new DragQueen1 ("Starlight")
      DragQueen1.profile (image)
      //DragQueen1.weapon (Stiletto heel)
      DragQueen1.talk ("Make a wish on me, baby!")
      console.log(DragQueen1.talk);

      DragQueen2 = new DragQueen2 ("Arsenia")
      DragQueen2.profile (image)
      //DragQueen2.weapon (hairspray + lighter)
      DragQueen2.talk ("I have AquaNet and I know how to use it!")
      console.log(DragQueen2.talk);

      DragQueen3 = new DragQueen3 ("Terminatirx")
      DragQueen3.profile (image)
      //DragQueen3.weapon (bejewled encrusted glove)
      DragQueen3.talk ("I'll slap you so hard, you'll think I'm staright!")
      console.log(DragQueen3.talk);

      DragQeen4 = new DragQueen4 ("Glam Moore")
      DragQueen4.profile (image)
      //DragQueen4.weapon (Pesky pearls)
      DragQueen4.talk ("I'm fabulous, Dahling!")

      var myGame = {
        init: function () {
          myGame.initEvents();
  },
        initStyling: function () {

  },
        initEvents: function () {

          $("#createGame").on('submit', function (e) {
            e.preventDefault();
            var traits = {
              name: $('#character input[name="name"]').val(),
              profile:$()
    };
        myGame.DragQueen = new DragQueen(traits);
        myGame.renderBoard();

    });
    $("#board").on("click", "button", function (e) {
      e.preventDefault();

      myGame.DragQueen.attack(myGame.DragQueen);
      $("#p1-button").text(myGame.DragQueen.name + "'s life is: " + myGame.DragQueen.life);
    })

  },
  renderBoard: function () {
    $("#board").append("<img src='images/dramatic.jpeg'><button>Attack</button>");
    $("#board").append("<img src='images/AquaNet.jpeg'><button>Attack</button>");
    $("#board").append("<img src='images/face.jpeg'><button>Attack</button");
    $("#board").append("<img src='images/glamour.jpeg'>");

  }
};

$(document).ready(function () {
  myPage.init();
});
