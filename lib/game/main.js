ig.module(
	'game.main'
)
.requires(
	'impact.game',
	'impact.font'
)
.defines(function(){

MyGame = ig.Game.extend({

	font: new ig.Font( 'media/04b03.font.png' ),

	init: function() {
		ig.input.bind(ig.KEY.MOUSE1, 'click');
	},

	update: function() {
		this.parent();
	},

	draw: function() {
		this.parent();

		var x = ig.system.width/2,
			y = ig.system.height/2;
		this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
	}
});

ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
