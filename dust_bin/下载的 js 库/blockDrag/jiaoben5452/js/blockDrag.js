function blockDrag(b) {
    this.set = {
        boxNode: "#box",    //父元素id
        dragNode: "#drag",  //子元素id
        blockW: 150,        //拖动元素宽度
        blockH: 100,        //拖动元素高度
        block: "(05,05)",   //总共位置几行几列
        startPos: "(01,01)" //开始位置几行几列
    };
    jQuery.extend(this.set, b);
    this.startX = this.set.startPos.substring(4, 6);
    this.startY = this.set.startPos.substring(1, 3);
    this.row = this.set.block.substring(1, 3);
    this.col = this.set.block.substring(4, 6);
    if (this.startY > this.row || this.startX > this.col) {
        this.startX = 1;
        this.startY = 1;
    }
    this.dragId = this.set.dragNode.substring(1, this.set.dragNode.length);
    this.wrapId = this.dragId + "Wrap";
    this.wrapNode = "#" + this.wrapId;
    var a = this;
    $(this.set.dragNode).wrap("<div id='" + this.wrapId + "'></div>");
    $(this.wrapNode).css({
        width: this.set.blockW + "px",
        height: this.set.blockH + "px",
        position: "absolute",
        top: (this.startY - 1) * this.set.blockH + "px",
        left: (this.startX - 1) * this.set.blockW + "px"
    });
    $(this.set.boxNode).css({
        width: this.col * this.set.blockW + "px",
        height: this.row * this.set.blockH + "px"
    });
    $(this.wrapNode).mousedown(function(e) {
        var c = parseInt($(this).css("left"));
        var d = parseInt($(this).css("top"));
        var f = e.pageX;
        var g = e.pageY;
        e.stopPropagation();
        a.moveFn = function(h) {
            var i = h.pageX;
            var j = h.pageY;
            $(a.wrapNode).css({
                left: (c + i - f) + "px",
                top: (d + j - g) + "px"
            })
        };
        $(document).on("mousemove", a.moveFn);
        if ($(a.wrapNode).get(0).setCapture) {
            $(a.wrapNode).get(0).setCapture()
        }
        $(document).mouseup(function(j) {
            var l = parseInt($(a.wrapNode).css("left"));
            var m = parseInt($(a.wrapNode).css("top"));
            var i = a.set.blockW / 2;
            var h = a.set.blockH / 2;
            var k = parseInt(l / i);
            var n = parseInt(m / h);
            k < 0 ? k = 0 : null;
            n < 0 ? n = 0 : null;
            k > (a.col - 1) * 2 ? k = (a.col - 1) * 2 : null;
            n > (a.row - 1) * 2 ? n = (a.row - 1) * 2 : null;
			/*动画 移动到方格位置
            if (k % 2 == 0) {
                $(a.wrapNode).animate({
                    left: (((k + 2) / 2) - 1) * a.set.blockW + "px"
                }, 50)
            } else {
                $(a.wrapNode).animate({
                    left: (((k + 3) / 2) - 1) * a.set.blockW + "px"
                }, 50)
            } if (n % 2 == 0) {
                $(a.wrapNode).animate({
                    top: (((n + 2) / 2) - 1) * a.set.blockH + "px"
                }, 50)
            } else {
                $(a.wrapNode).animate({
                    top: (((n + 3) / 2) - 1) * a.set.blockH + "px"
                }, 50)
            }*/
			if (k % 2 == 0) {
                $(a.wrapNode).css({
                    left: (((k + 2) / 2) - 1) * a.set.blockW + "px"
                })
            } else {
                $(a.wrapNode).css({
                    left: (((k + 3) / 2) - 1) * a.set.blockW + "px"
                })
            } if (n % 2 == 0) {
                $(a.wrapNode).css({
                    top: (((n + 2) / 2) - 1) * a.set.blockH + "px"
                })
            } else {
                $(a.wrapNode).css({
                    top: (((n + 3) / 2) - 1) * a.set.blockH + "px"
                })
            }
            $(document).off("mousemove").off("mouseup");
            $(a.wrapNode).off("mouseup")
        })
    });
    if ($(a.wrapNode).get(0).releaseCapture) {
        $(a.wrapNode).get(0).releaseCapture()
    }
    return false
};