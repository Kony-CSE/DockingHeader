define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for Button0fc79324d750a45 **/
    AS_Button_e570505b861a4c00a4917b76f4302b81: function AS_Button_e570505b861a4c00a4917b76f4302b81(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("MainForm");
        ntf.navigate();
    },
    /** postShow defined for TextBoxCase **/
    AS_Form_gad492f12ed849d181c743d13d463bae: function AS_Form_gad492f12ed849d181c743d13d463bae(eventobject) {
        var self = this;
        if (!this.cloneObj) {
            this.view.enableOnScrollWidgetPosition = true;
            this.view.FlexContWhatsAppHead.onScrollWidgetPosition = self.headerDock;
            this.view.FlexScrollContainer0bac5d3c7f1c44c.enableOnScrollWidgetPosition = true;
            this.cloneObj = this.view.FlexContWhatsAppHead.clone("FlexContWhatsAppHead_2")
            this.cloneObj.onScrollWidgetPosition = null;
            this.cloneObj.top = 0;
            this.view.add(this.cloneObj)
            this.headerDockAdded = true;
            //kony.print("newobj:: "+cloneObj.id)
        }
    }
});