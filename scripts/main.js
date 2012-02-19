/**
 * Created by JetBrains WebStorm.
 * User: Jhuntoo
 * Date: 16/02/12
 * Time: 8:32 PM
 * To change this template use File | Settings | File Templates.
 */
var currentSession = new LoggedInUser();
var facebook = new Facebook();
var view = new View();
var memeEditor = new MemeEditor();


$(document).ready(function() {

    //Authenticate the user with Facebook
    facebook.Authenticate(function(response) {
        if (response.status === 'connected') {
            currentSession.access_token = response.authResponse.accessToken;
            currentSession.GetDetails(function(){});
            currentSession.GetFriends(function(){});
        }
        else {
            facebook.Login(function(response){
                //
            });
        }

    });

    //hide 2nd section
    $("#sbcImageEditor .storyBoardContent").hide();
    $("#sbcPhotoSelector .storyBoardContent").hide();

    $("#sourceFb").click(function(){
        $("#sbcPhotoSelector .storyBoardContent").show("slow");
        $("#sbcImageSource .storyBoardContent").hide("slow");
        currentSession.SetImageSourceType(FacebookImageSourceType);
        //view.DrawFriendsAutoComplete(currentSession.loggedInFacebookUserFriends);

        facebook.GetAlbums(currentSession.loggedInFacebookUser.id, function(data) {
            currentSession.imageSource.friendFacebookUser = currentSession.loggedInFacebookUser.id;
            view.DrawAlbums(data, function(item){
                $("#albumsGrid").hide();
                currentSession.imageSource.friendAlbumId = item.id;
                facebook.GetPhotos(item.id, function(data){
                    view.DrawPhotos(data, function(item){
                        currentSession.imageSource.friendPhotoId = item.id;

                        $("#sbcPhotoSelector .storyBoardContent").hide("slow");
                        memeEditor.OpenEditor();
                        //imageObj.src = currentSession.imageSource.GetImage();
                    });
                });
            });
        });
    });

    $("#sourcePc").click(function(){
        $("#sbcImageEditor .storyBoardContent").show("slow");
        $("#sbcImageSource .storyBoardContent").hide("slow");
        currentSession.SetImageSourceType(LocalImageSourceType);
        $("#filepicker").click();
    });

    //Initialise Meme Editor
    memeEditor.Initialise();
});

function init() {
    var titleTextBox= document.getElementById("posterTitleTextBox");
    titleTextBox.onkeyup = buildPoster;

    var posterWittyCommentTextBox= document.getElementById("posterWittyCommentTextBox");
    posterWittyCommentTextBox.onkeyup = buildPoster;

    buildPoster();

}


function buildPoster(){
    var canvas = getCanvas();
    var context = getCanvasContext(canvas);
    buildBasePoster(context, canvas);

    var title = document.getElementById("posterTitleTextBox").value;



}

function buildBasePoster(context, canvas){

    // Parameters
    var marginFromBottom = 150;
    var marginFromTop = 75;
    var marginFromSide = 75;
    var borderWidth = 2;
    var titleY = 500;
    var wittyCommentY = 550;

    var borderRightX = canvas.width - marginFromSide;
    var borderBottomY = canvas.height - marginFromBottom;
    var canvasLeftX = marginFromSide + (borderWidth *2);
    var canvasLeftY = marginFromTop + (borderWidth *2);
    var canvasWidth = canvas.width - (canvasLeftX *2);
    var canvasHeight = canvas.height - (canvasLeftY + marginFromBottom + (borderWidth *2));

    // Black Background
    context.fillStyle = "#000000"; //Black
    context.fillRect(0, 0, canvas.width, canvas.height);

    //White Border
    context.beginPath();
    context.moveTo(marginFromSide, marginFromTop);
    context.lineTo(borderRightX, marginFromTop );
    context.lineTo(borderRightX, borderBottomY);
    context.lineTo(marginFromSide, borderBottomY);
    context.lineTo(marginFromSide, marginFromTop );
    context.strokeStyle = "#FFFFFF"; //White
    context.lineWidth = borderWidth;
    context.stroke();

    context.fillStyle = "#FFFFFF"; //White
    context.fillRect(marginFromSide + (borderWidth *2), marginFromTop + (borderWidth *2), canvasWidth, canvasHeight);

    //Text

    //Title
    var title = getTitle();
    var x = canvas.width / 2;

    context.font = "40pt Times New Roman";
    context.fillStyle = "#FFFFFF"; // White
    context.textAlign = "center";
    context.fillText(title, x, titleY);

    // Comment
    var wittyComment = getWittyComment();

    context.font = "20pt Times New Roman";
    context.fillStyle = "#FFFFFF"; // White
    context.textAlign = "center";
    wrapText(context, wittyComment, x, wittyCommentY, canvas.width - 20, 20);
    //context.fillText(wittyComment, x, wittyCommentY);



    // Image
    var destX = canvasLeftX;
    var destY = canvasLeftY;
    var imageObj = new Image();

    imageObj.onload = function(){
        context.drawImage(imageObj, 0, 0, this.width, this.height, canvasLeftX, canvasLeftY, canvasWidth, canvasHeight);
    };
    imageObj.src = "images/Test.jpg";


}

function wrapText(context, text, x, y, maxWidth, lineHeight){
    var words = text.split(" ");
    var line = "";

    for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + " ";
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth) {
            context.fillText(line, x, y);
            line = words[n] + " ";
            y += lineHeight;
        }
        else {
            line = testLine;
        }
    }
    context.fillText(line, x, y);
}

function getCanvas(){
    var canvas = document.getElementById("demotivationalcanvas");
    return canvas;
}

function getCanvasContext(canvas){
    var context = canvas.getContext("2d");
    return context;
}

function getTitle(){
    return document.getElementById("posterTitleTextBox").value;
}

function getWittyComment() {
    return document.getElementById("posterWittyCommentTextBox").value;
}
