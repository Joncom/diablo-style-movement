ig.module('game.entities.player')
.requires('impact.entity')
.defines(function() {

    EntityPlayer = ig.Entity.extend({

        speed: 128,
        color: '#FD971F',

        init: function( x, y, settings ) {
            this.parent( x, y, settings );
        },

        update: function() {

            if(ig.input.state('click')) {

                // Calculate angle to mouse.
                var centerX = this.pos.x + this.size.x/2;
                var centerY = this.pos.y + this.size.y/2;
                var mouseX = ig.input.mouse.x + ig.game.screen.x;
                var mouseY = ig.input.mouse.y + ig.game.screen.y;
                var angle = Math.atan2(mouseY - centerY, mouseX - centerX);

                // Move entity toward mouse.
                this.vel.x = Math.cos(angle) * this.speed;
                this.vel.y = Math.sin(angle) * this.speed;

            } else this.vel.x = this.vel.y = 0;

            this.parent();
        },

        draw: function() {
            var x = this.pos.x * ig.system.scale;
            var y = this.pos.y * ig.system.scale;
            var width = this.size.x * ig.system.scale;
            var height = this.size.y * ig.system.scale;
            ig.system.context.fillStyle = this.color;
            ig.system.context.fillRect(x, y, width, height);
            this.parent();
        }
    });

});