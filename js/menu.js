var menuState = {

	create: function() {
		game.add.image(0, 0, 'background');

		var nameLabel = game.add.text(game.world.centerX, -50, 'Super Coin Box', {font: '50px Arial', fill: '#fffff'});
		nameLabel.anchor.setTo(0.5, 0.5);

		var scoreLabel = game.add.text(game.world.centerX, game.world.centerY, 'Score: ' + game.global.score, {font: '25px Arial', fill: '#fffff'});
		scoreLabel.anchor.setTo(0.5, 0.5);

		var startLabel = game.add.text(game.world.centerX, game.world.height-80, 'Press the UP arrow key to start!', {font:'25px Arial', fill:'#fffff'});
		startLabel.anchor.setTo(0.5, 0.5);

		var tween = game.add.tween(nameLabel);
		tween.to({y:80}, 1000);
		tween.start();

		var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.addOnce(this.start, this);

	},

	start: function() {
		game.state.start('play');
	},

};