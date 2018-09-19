define({
    //Type your controller code here
    withCopy: false,
    optionHeadAdded: false,
    cloneObj: null,
    whatsAppOptionHeadCB: function whatsAppOptionHeadCB(wdg, x, y, contx, conty) {
        var contentOffset = this.view.FlexScrollContainer0bac5d3c7f1c44c.contentOffsetMeasured;
        if (y <= 0) {
            if (contentOffset.y >= 0) {
                kony.print(contentOffset.y)
                this.view.FlexContOptionHead.top = contentOffset.y;
            } else {
                this.view.FlexContOptionHead.top = 0;
                prevOffsetY = -1;
            }
        } else {
            if (contentOffset.y < this.view.FlexContWhatsAppHead.frame.height) {
                this.view.FlexContOptionHead.top = this.view.FlexContWhatsAppHead.frame.height;
            } else {
                this.view.FlexContOptionHead.top = contentOffset.y;
            }
        }
    }
});
