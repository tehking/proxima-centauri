class Battle extends Phaser.Scene {
  constructor() {
    super({key:"Battle"});
  }
  preload() {
    this.load.image('GAMEBOARD', 'assets/images/proxima_centari_board_v1.png');
    this.load.image('CARDBACK', 'assets/images/proxima_centari_cardback_v1.png');
    this.load.image('CARDFACE', 'assets/images/proxima_centari_cardface.png');
  }
  create() {
    this.image = this.add.image(690,360,'GAMEBOARD');
    this.image = this.add.image(1050,550,'CARDBACK');
    this.image.scaleX = 0.8;
    this.image.scaleY = 0.8;
    this.image = this.add.image(360,550,'CARDFACE')
    this.image.scaleX = 0.8;
    this.image.scaleY = 0.8;
  }
  update(delta) {

  }
}
