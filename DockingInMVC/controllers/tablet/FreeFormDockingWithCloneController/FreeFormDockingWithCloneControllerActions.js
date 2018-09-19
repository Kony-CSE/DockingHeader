define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** postShow defined for FreeFormDockingWithClone **/
    AS_Form_af47cc86831249aaa6f9b36eb467fb86: function AS_Form_af47cc86831249aaa6f9b36eb467fb86(eventobject) {
        var self = this;
        if (!this.cloneObj) {
            this.view.FlexContWhatsAppHead.onScrollWidgetPosition = self.whatsAppHeadCB;
            this.view.FlexContOptionHead.onScrollWidgetPosition = self.whatsAppOptionHeadCB;
            this.view.FlexScrollContainer0bac5d3c7f1c44c.enableOnScrollWidgetPosition = true;
            this.view.FlexScrollContainer0bac5d3c7f1c44c.enableOnScrollWidgetPosition = true;
            this.cloneObj = this.view.FlexContOptionHead.clone("FlexContOptionHead_1");
            this.cloneObj.onScrollWidgetPosition = null;
            this.cloneObj.top = 0;
            //kony.print("newobj:: "+cloneObj.id)
            this.view.add(this.cloneObj)
            this.optionHeadAdded = true;
            this.cloneObj.isVisible = false;
        }
    },
    /** onHide defined for FreeFormDockingWithClone **/
    AS_Form_f5a7eaf843fd4c8bad85c6d47416cb7b: function AS_Form_f5a7eaf843fd4c8bad85c6d47416cb7b(eventobject) {
        var self = this;
        kony.print("onhide");
    },
    /** onDestroy defined for FreeFormDockingWithClone **/
    AS_Form_c87eae7d735f4cc494b60dcb5acf3f22: function AS_Form_c87eae7d735f4cc494b60dcb5acf3f22(eventobject) {
        var self = this;
        kony.print("ondestroy")
    }
});