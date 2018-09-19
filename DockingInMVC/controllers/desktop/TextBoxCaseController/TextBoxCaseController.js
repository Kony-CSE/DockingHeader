define({
    //Type your controller code here 
    headerDockAdded: false,
    cloneObj: null,
    getData: function getData(param1) {
        this.view.add();
        kony.mvc.Navigation("HorizontalFlowCase", model)
    },
    headerDock: function headerDock(wdg, x, y, contx, conty) {
        var contentOffset = this.view.FlexScrollContainer0bac5d3c7f1c44c.contentOffsetMeasured;

        if (y <= 0 && this.headerDockAdded) {
            this.cloneObj.isVisible = true;
            if (contentOffset.y < 0) this.cloneObj.top = contentOffset.y;
            if (y + contentOffset.y < 0) this.cloneObj.top = -y;
        }
        if (y >= 0 && this.headerDockAdded) {
            this.cloneObj.isVisible = false;
        }
    }
});
