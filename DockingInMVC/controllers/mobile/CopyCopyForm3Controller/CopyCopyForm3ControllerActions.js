define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for Button0e79a70d9e09342 **/
    AS_Button_a1d4fa7d0d564cdd8f47b58acae4ebe0: function AS_Button_a1d4fa7d0d564cdd8f47b58acae4ebe0(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("MainForm");
        ntf.navigate();
    },
    /** postShow defined for CopyCopyForm3 **/
    AS_Form_b9cbeaf5c4904d83b37cecf94851f4c0: function AS_Form_b9cbeaf5c4904d83b37cecf94851f4c0(eventobject) {
        var self = this;
        this.view.enableOnScrollWidgetPositionForSubwidgets = true;
        this.view.FlexScrollContainer0a320900bf1204c.enableOnScrollWidgetPositionForSubwidgets = true;
        this.view.FlexCont1.onScrollWidgetPosition = this.FlexCont1CB;
        //this.view.FlexCont2.onScrollWidgetPosition = this.FlexCont2CB;
        //this.view.FlexCont3.onScrollWidgetPosition = this.FlexCont3CB;
        //this.view.FlexCont4.onScrollWidgetPosition = this.FlexCont4CB;
        this.FlexCont1CBYpos = this.view.FlexCont1.frame.y;
        this.FlexCont2CBYpos = this.view.FlexCont2.frame.y;
        this.FlexCont3CBYpos = this.view.FlexCont3.frame.y;
        this.FlexCont4CBYpos = this.view.FlexCont4.frame.y;
        this.FlexCont3CBHeight = this.view.FlexCont3.frame.height;
        this.FlexCont2CBHeight = this.view.FlexCont2.frame.height;
        this.halfHeightOfCont3 = this.FlexCont3CBHeight / 2;
        kony.print("YPOS ", this.FlexCont3CBYpos, this.FlexCont2CBYpos)
        kony.print("Heights ", this.FlexCont3CBHeight, this.FlexCont2CBHeight)
        kony.print("Main height ", this.view.FlexCont1.frame.height)
    }
});