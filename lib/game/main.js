ig.module(
	'game.main'
)
.requires(
	'impact.debug.debug',
	'impact.game',
	'impact.font',
	'game.entities.player'
)
.defines(function(){

MyGame = ig.Game.extend({

	font: new ig.Font( 'media/04b03.font.png' ),

	init: function() {
		ig.input.bind(ig.KEY.MOUSE1, 'click');
		this.spawnEntity(EntityPlayer, 0, 0);
	},

	update: function() {
		this.parent();
	},

	draw: function() {
		this.parent();
	}
});

ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
