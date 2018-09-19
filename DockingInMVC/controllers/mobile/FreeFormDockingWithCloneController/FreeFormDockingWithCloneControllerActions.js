define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** postShow defined for FreeFormDockingWithClone **/
    AS_Form_f1a48cae67e647928f35c1faab3fbe69: function AS_Form_f1a48cae67e647928f35c1faab3fbe69(eventobject) {
        var self = this;
        if (!this.cloneObj) {
            //this.view.FlexContWhatsAppHead.onScrollWidgetPosition=self.whatsAppHeadCB;
            this.view.FlexContOptionHead.onScrollWidgetPosition = self.whatsAppOptionHeadCB;
            this.view.FlexScrollContainer0bac5d3c7f1c44c.enableOnScrollWidgetPosition = true;
            this.view.FlexScrollContainer0bac5d3c7f1c44c.enableOnScrollWidgetPositionForSubwidgets = true;
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
    AS_Form_a3cc4e1c29b5459e89561fbf4d29a56d: function AS_Form_a3cc4e1c29b5459e89561fbf4d29a56d(eventobject) {
        var self = this;
        kony.print("onhide");
    },
    /** onDestroy defined for FreeFormDockingWithClone **/
    AS_Form_h353b2af58a248b5abcd3cea6e2317ca: function AS_Form_h353b2af58a248b5abcd3cea6e2317ca(eventobject) {
        var self = this;
        kony.print("ondestroy")
    }
});