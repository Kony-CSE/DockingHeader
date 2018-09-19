define({
    //Type your controller code here
    withCopy: true,
    optionHeadAdded: false,
    cloneObj: null,
    whatsAppHeadCB: function whatsAppHeadCB(wdg, x, y, contx, conty) {
        var contentOffset = this.view.FlexScrollContainer0bac5d3c7f1c44c.contentOffsetMeasured;
            if (y <= 0) {
                if (contentOffset.y > 0) {
                    this.view.FlexContOptionHead.top = contentOffset.y;
                }
            } else {
                if (contentOffset.y < 0) {
                    this.view.FlexContOptionHead.top = this.view.FlexContWhatsAppHead.frame.height;
                }
            }
    },
    whatsAppOptionHeadCB: function whatsAppOptionHeadCB(wdg, x, y, contx, conty) {
        if (this.withCopy) {
            if (y <= 0 && !this.optionHeadAdded) {} else if (y < 0 && this.optionHeadAdded) {
                this.cloneObj.isVisible = true;
            }
            if (y >= 0 && this.optionHeadAdded) {
                this.cloneObj.isVisible = false;
            }
        }
    },
});
