var config = {
  type:Phaser.AUTO,
  width:1152,
  height:648,
  physics: {
    default:'arcade',
    arcade: {
      gravity: {y: 200}
    }
  },
  scene:[ Battle ]
};


//initiate Phaser framework
var game = new Phaser.Game(config);
