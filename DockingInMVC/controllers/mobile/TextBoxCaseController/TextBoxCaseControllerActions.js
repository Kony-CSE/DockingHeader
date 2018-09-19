define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for Button0fc79324d750a45 **/
    AS_Button_d31911b960844bf0964a5a0f14201ab0: function AS_Button_d31911b960844bf0964a5a0f14201ab0(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("MainForm");
        ntf.navigate();
    },
    /** postShow defined for TextBoxCase **/
    AS_Form_fa98c7b3179448ffb6cd010c51d876fc: function AS_Form_fa98c7b3179448ffb6cd010c51d876fc(eventobject) {
        var self = this;
        if (!this.cloneObj) {
            this.view.enableOnScrollWidgetPositionForSubwidgets = true;
            this.view.FlexContWhatsAppHead.onScrollWidgetPosition = self.headerDock;
            this.view.FlexScrollContainer0bac5d3c7f1c44c.enableOnScrollWidgetPositionForSubwidgets = true;
            this.cloneObj = this.view.FlexContWhatsAppHead.clone("FlexContWhatsAppHead_2")
            this.cloneObj.onScrollWidgetPosition = null;
            this.cloneObj.top = 0;
            this.view.add(this.cloneObj)
            this.headerDockAdded = true;
            //kony.print("newobj:: "+cloneObj.id)
        }
    }
});