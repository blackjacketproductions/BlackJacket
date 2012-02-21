/**
 * Created by JetBrains WebStorm.
 * User: Jhuntoo
 * Date: 19/02/12
 * Time: 9:50 PM
 * To change this template use File | Settings | File Templates.
 */

function DemotivationalEditor (){


    this.IsInitialised = false;
    this.MarginFromBottom = 150;
    this.MarginFromTop = 75;
    this.MarginFromSide = 75;
    this.BorderWidth = 2;
    this.TitleY = 500;
    this.WittyCommentY = 550;

    this.Initialise = function(){

        if (this.IsInitialised == false)
        {
            this.BuildBaseDemotivational();
        }
        this.IsInitialised = true;
    };

    this.BuildBaseDemotivational = function(){
       var stage = new Kinetic.Stage("demotivationalcanvas", 500, 500);
        var layer = new Kinetic.Layer();

        // Parameters


        var borderRightX = stage.width - this.MarginFromSide;
        var borderBottomY = stage.height - this.MarginFromBottom;
        var canvasLeftX = this.MarginFromSide + (this.BorderWidth *2);
        var canvasLeftY = this.MarginFromTop + (this.BorderWidth *2);
        var canvasWidth = stage.width - (canvasLeftX *2);
        var canvasHeight = stage.height - (canvasLeftY + this.MarginFromBottom + (borderWidth *2));



        // border
        var border = new Kinetic.Shape(function(){
            var context = this.getContext();
            context.beginPath();
            context.rect(0, 0, 200, 100);
            context.fillStyle = "#FFFFFF";
            context.fill();
            context.closePath();
        });

        layer.add(border);

        stage.add(layer);
    };
}
