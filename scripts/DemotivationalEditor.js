/**
 * Created by JetBrains WebStorm.
 * User: Jhuntoo
 * Date: 19/02/12
 * Time: 9:50 PM
 * To change this template use File | Settings | File Templates.
 */

function DemotivationalEditor (){

    var self = this;

    this.PhotoHeight = 600;
    this.PhotoWidth = 740;
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
            $("#demotivationalCanvasDelete").remove();
            this.BuildBaseDemotivational();
        }
        this.IsInitialised = true;
    };

    this.BuildBaseDemotivational = function(){
       var stage = new Kinetic.Stage("demotivationalcanvas", self.PhotoWidth, self.PhotoHeight);
        var layer = new Kinetic.Layer();

        // Parameters
        var borderRightX = stage.width - self.MarginFromSide;
        var borderBottomY = stage.height - self.MarginFromBottom;
        var canvasLeftX = self.MarginFromSide + (self.BorderWidth *2);
        var canvasLeftY = self.MarginFromTop + (self.BorderWidth *2);
        var canvasWidth = stage.width - (canvasLeftX *2);
        var canvasHeight = stage.height - (canvasLeftY + self.MarginFromBottom + (self.BorderWidth *2));



        // black border
        var border = new Kinetic.Shape(function(){
            var context = this.getContext();
            context.beginPath();
            context.rect(0, 0, self.PhotoWidth, self.MarginFromTop);
            context.rect(0, self.MarginFromTop, self.MarginFromSide, self.PhotoHeight - self.MarginFromBottom);
            context.rect(self.PhotoWidth - self.MarginFromSide, 0, self.PhotoHeight - self.MarginFromBottom, self.PhotoWidth);
            context.rect(0, self.PhotoHeight - self.MarginFromBottom, self.PhotoWidth, self.PhotoHeight);
            context.fillStyle = "#000000";
            context.fill();
            context.closePath();
        });

        // border
        var photoBox = new Kinetic.Shape(function(){
            var context = this.getContext();
            context.beginPath();
            context.rect(canvasLeftX, canvasLeftY, canvasWidth, canvasHeight);
            context.fillStyle = "#FFFFFF";
            context.fill();
            context.closePath();
        });



        layer.add(border);

        stage.add(layer);
    };
}
