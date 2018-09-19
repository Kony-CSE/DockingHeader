define({
    //Type your controller code here
    FlexCont1CBYpos: 0,
    FlexCont2CBYpos: 0,
    FlexCont3CBYpos: 0,
    FlexCont4CBYpos: 0,
    currenIter1: 0,
    currenIter2: 0,
    currenIter3: 0,
    currenIter4: 0,
    relCount: 1,
    FlexCont1CB: function FlexCont1CB(wdg, x, y, contx, conty) {
        if (this.currenIter1 < this.relCount) {
            this.currenIter1 += 1;
            return;
        }
        this.currenIter1 = 0;
        kony.print(wdg.id, y);
        //var contentOffset = this.view.FlexScrollContainer0a320900bf1204c.contentOffsetMeasured;
        if (y <= this.FlexCont1CBYpos) {
            this.view.FlexCont1.top = -1*y;
            // this.view.FlexCont1.parent.forceLayout();
        };
    },
    FlexCont2CB: function FlexCont2CB(wdg, x, y, contx, conty) {
       var contentOffset = this.view.FlexScrollContainer0a320900bf1204c.contentOffsetMeasured;
        if (this.currenIter2 < this.relCount) {
            this.currenIter2 += 1;
            return;
        }
        this.currenIter2 = 0;
        kony.print(wdg.id, y,this.FlexCont3CBYpos);
        if (y <= this.FlexCont2CBYpos && this.FlexCont3CBYpos <=194) {
            this.view.FlexCont2.top -=contentOffset.y;
       //this.FlexCont2CBYpos += y;
            //this.view.FlexCont2.parent.forceLayout();
        }
    },
    FlexCont3CB: function FlexCont3CB(wdg, x, y, contx, conty) {
       var contentOffset = this.view.FlexScrollContainer0a320900bf1204c.contentOffsetMeasured;
        if (this.currenIter3 < this.relCount) {
            this.currenIter3 += 1;
            return;
        }
        this.currenIter3 = 0;
        kony.print(wdg.id, y);
        if (y <= this.FlexCont3CBYpos) {
            this.view.FlexCont3.top -=contentOffset.y;
            this.FlexCont3CBYpos = y;
       kony.print(contentOffset.y)
            // this.view.FlexCont3.parent.forceLayout();
        }
    },
    FlexCont4CB: function FlexCont4CB(wdg, x, y, contx, conty) {
        if (this.currenIter4 < this.relCount) {
            this.currenIter4 += 1;
            return;
        }
        this.currenIter4 = 0;
        kony.print(wdg.id, y);
        //       if(y<this.FlexCont4CBYpos)
        //       this.view.FlexCont4.top=-1*y;
    }
});
