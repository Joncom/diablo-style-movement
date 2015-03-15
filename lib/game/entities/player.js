ig.module('game.entities.player')
.requires('impact.entity')
.defines(function() {

    EntityPlayer = ig.Entity.extend({

        init: function( x, y, settings ) {
            this.parent( x, y, settings );
        },

        update: function() {
            this.parent();
        },

        draw: function() {
            var x = this.pos.x * ig.system.scale;
            var y = this.pos.y * ig.system.scale;
            var width = this.size.x * ig.system.scale;
            var height = this.size.y * ig.system.scale;
            ig.system.context.rect(x, y, width, height);
            ig.system.context.fillStyle = '#FD971F';
            ig.system.context.fill();
            this.parent();
        }
    });

});