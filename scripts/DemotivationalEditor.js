/**
 * Created by JetBrains WebStorm.
 * User: Jhuntoo
 * Date: 19/02/12
 * Time: 9:50 PM
 * To change this template use File | Settings | File Templates.
 */

function DemotivationalEditor (){

    this.Iinitialise() = function(){
        BuildBaseDemotivational();
    };


    this.BuildBaseDemotivational = function(){

        var stage = new Kinetic.Stage("demotivationalcanvas", 760, 600);
        var layer = new Kinetic.Layer("demotivationalLayer");

        // border
        var border = new Kinetic.Shape(function(){
            var context = this.getContext();
            context.beginPath();
            context.rect(this._x, this._y, 200, 100);
            context.fillStyle = "#ddd";
            context.fill();
            context.closePath();
        };

        stage.add(layer);
    };
}
