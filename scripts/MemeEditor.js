function MemeEditor() {

    this.IsInitialised = false;
    this.CurrentMemeType = DemotivationalMemeType;
    this.DemotivEditor = new DemotivationalEditor();

    this.Initialise = function(){

      this.DemotivEditor = new DemotivationalEditor();

      // Attach MemeType Icon click handlers

      $("#demotivationalType").click(function () {
          memeEditor.SetMemeType(DemotivationalMemeType);

      });
      $("#failType").click(function () {
          memeEditor.SetMemeType(FailMemeType);
      });
      $("#awkwardType").click(function () {
          memeEditor.SetMemeType(AwkwardMomentMemeType);
      });
      $("#pricelessType").click(function () {
          memeEditor.SetMemeType(PricelessMemeType);
      });

        $("#editorContainer").hide();

        this.IsInitialised = true;
    };

    this.SetMemeType = function(memeType){

        this.CurrentMemeType = memeType;
        switch(memeType)
        {
            case DemotivationalMemeType:
                $("#demotivationalEditor").show();
                $("#failEditor").hide();
                $("#awkwardEditor").hide();
                $("#pricelessEditor").hide();
                this.DemotivEditor.Initialise();
                break;
            case FailMemeType:
                $("#demotivationalEditor").hide();
                $("#failEditor").show();
                $("#awkwardEditor").hide();
                $("#pricelessEditor").hide();
                break;
            case AwkwardMomentMemeType:
                $("#demotivationalEditor").hide();
                $("#failEditor").hide();
                $("#awkwardEditor").show();
                $("#pricelessEditor").hide();
                break;
            case PricelessMemeType:
                $("#demotivationalEditor").hide();
                $("#failEditor").hide();
                $("#awkwardEditor").hide();
                $("#pricelessEditor").show();
                break;
        }
    };

    this.OpenEditor = function(){
        $("#editorContainer").show("slow");
        this.SetMemeType(this.CurrentMemeType);

    }

    this.CanvasWidth = 740;
    this.CanvasHeight = 600;
}