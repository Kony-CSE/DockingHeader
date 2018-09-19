define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** postShow defined for FreeFormDockingWithClone **/
    AS_Form_e29565fefe224e59abb7057c7104779e: function AS_Form_e29565fefe224e59abb7057c7104779e(eventobject) {
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
    AS_Form_e66cef254b3c416488ddff2f91d066aa: function AS_Form_e66cef254b3c416488ddff2f91d066aa(eventobject) {
        var self = this;
        kony.print("onhide");
    },
    /** onDestroy defined for FreeFormDockingWithClone **/
    AS_Form_ea3d8c947f424e8d8197c4e6a959a77e: function AS_Form_ea3d8c947f424e8d8197c4e6a959a77e(eventobject) {
        var self = this;
        kony.print("ondestroy")
    }
});