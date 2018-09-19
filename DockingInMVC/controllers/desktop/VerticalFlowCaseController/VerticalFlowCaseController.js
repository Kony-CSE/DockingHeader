define({
    //Type your controller code here 
    withCopy: true,
    optionHeadAdded: false,
    cloneObj: null,
    initialYVal: 0,
    onlyOnce: true,
    dateDock: function dateDock(wdg, x, y, contx, conty) {
        if (this.onlyOnce) {
            this.initialYVal = this.view.dockingDate.frame.y;
            this.onlyOnce = false;
        }
        if (!this.onlyOnce && y <= this.initialYVal && y>=-300) {
            var strId = wdg.id;
            var trimStr = strId.split("dateContainer")
            var oriObj = "wdg.cpylbl" + trimStr[1] + ".text";
            this.view.dockingDate.datelabel.text = eval(oriObj);
        }
        var contOffset = this.view.FlexScrollContainer0dde80355a00740.FlexScrollContainer0g527f32acbeb4e.contentOffsetMeasured;
        var contentSizeOfFlexScroll = this.view.FlexScrollContainer0dde80355a00740.FlexScrollContainer0g527f32acbeb4e.contentSizeMeasured.height;
        var flexHeight = this.view.FlexScrollContainer0dde80355a00740.FlexScrollContainer0g527f32acbeb4e.frame.height;
        var endOffSet = contentSizeOfFlexScroll - flexHeight;
       
        if (endOffSet >= contOffset.y) {
            this.view.downImage.isVisible = true;
        } else this.view.downImage.isVisible = false;
      
    },
    downImageAppear: function downImageAppear(wdg, x, y, contx, conty) {
       
        var contOffset = this.view.FlexScrollContainer0dde80355a00740.contentOffsetMeasured;
        var contentSizeOfFlexScroll = this.view.FlexScrollContainer0dde80355a00740.contentSizeMeasured.height;
        var flexHeight = this.view.FlexScrollContainer0dde80355a00740.frame.height;
        var endOffSet = contentSizeOfFlexScroll - flexHeight;
        
        if (endOffSet >= contOffset.y) {
            wdg.isVisible = true;
        } else wdg.isVisible = false;
    },
});
