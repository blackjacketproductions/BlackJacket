/**
 * Created by JetBrains WebStorm.
 * User: James
 * Date: 17/02/12
 * Time: 07:54
 * To change this template use File | Settings | File Templates.
 */

function LoggedInUser() {
    //Variables
    this.loggedInFacebookUser = new FacebookUser();
    this.loggedInFacebookUserFriends = {};
    this.imageSource = new IImageSource();
    this.meme = new IMeme();
    this.access_token = {};

    //Methods
    this.GetDetails = function(callback) {
        window.facebook.GetLoggedInUser(function(data){
            window.currentSession.loggedInFacebookUser.id = data.id;
            window.currentSession.loggedInFacebookUser.name = data.name;

            callback();
        });
    };

    this.GetFriends = function(callback) {
        window.facebook.GetFriends(function(data){
            window.currentSession.loggedInFacebookUserFriends = data;

            callback();
        });
    };

    this.SetImageSourceType = function(imageSourceType){
        if (imageSourceType === FacebookImageSourceType)
        {
            this.imageSource = new FacebookImageSource();
        }
        else
        {
            this.imageSource = new LocalImageSource();
        }
    };

    this.GetImageSourceType = function(){
        return this.imageSource.GetImageSourceType();
    };
}
