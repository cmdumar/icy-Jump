import Phaser from 'phaser';

function isNameValid(name) {
  if (name.length < 1) {
    return false;
  }
  return true;
}

const player = { name: 'player' };
const form = `
    <div class="form">
      <input type="text" name="name" id="name" placeholder="Enter your name">
      <input type="button" name="continue-btn" value="Continue" class="continue-btn">
    </div>
`;

const config = {
  width: 480,
  height: 640,
};

export default class NamesScene extends Phaser.Scene {
  constructor() {
    super('PreEnd');
  }

  create() {
    const graphics = this.add.graphics();

    graphics.fillGradientStyle(0xcfd9df, 0xe2ebf0,
      0xfccaff, 0xe2ebf0, 1);

    graphics.fillRect(0, 0, config.width, config.height);

    this.enterNamesText = this.add.text(
      0, 0,
      'Enter your name to continue: ', { fontSize: '20px', fill: '#000' },
    );

    this.zone = this.add.zone(config.width / 2,
      config.height / 3, config.width, config.height);

    Phaser.Display.Align.In.Center(
      this.enterNamesText,
      this.zone,
    );

    this.namesForm = this.add.dom((config.width / 2),
      (config.height / 2)).createFromHTML(form);
    this.namesForm.addListener('click');

    this.namesForm.on('click', event => {
      const clickedElement = event.target;
      if (clickedElement.name === 'continue-btn') {
        const enteredNames = document.querySelector('#name').value;
        if (isNameValid(enteredNames)) {
          player.name = enteredNames;
          this.namesForm.removeListener('click');
          this.scene.stop('PreEnd');
          this.scene.start('EndScene');
        } else {
          this.enterNamesText.setText('Your name is required');
        }
      }
    });
  }
}

export { player };