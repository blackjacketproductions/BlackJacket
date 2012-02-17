/**
 * Created by JetBrains WebStorm.
 * User: James
 * Date: 17/02/12
 * Time: 07:54
 * To change this template use File | Settings | File Templates.
 */

function LoggedInUser(uid, name, profile_pic_url) {
    //Variables
    this.loggedInFacebookUser = new FacebookUser(uid, name, profile_pic_url)
    this.imageSource = new IImageSource();
    this.meme = new IMeme();

    //Methods
    this.prototype.DoSomething = function() {
        // code for move method goes here
    };
}
