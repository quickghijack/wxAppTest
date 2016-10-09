var lineArr=new Array();


Page({
  data:{
    text:"Page IDETest"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  errorCanvas:function(e){
    console.log(e.detail.errMsg);
  },
  buttonTap:function(e){
    var context2=wx.createContext();
    context2.rect(5,5,25,15);
    context2.stroke();
    wx.drawCanvas({
      canvasId:1,
      actions:context2.getActions()
    })

  },
  canvasTap:function(e){
    console.log(e)
     var context2=wx.createContext();
    context2.rect(e.detail.x,e.detail.y,25,15);
    context2.stroke();
    wx.drawCanvas({
      canvasId:1,
      actions:context2.getActions()
    })
  },
  canvasTouchMove:function(e){
    //console.log(e.touches[0]);
    var pos=new Object();
    pos.x=e.touches[0].clientX;
    pos.y=e.touches[0].clientY;
    lineArr.push(pos);
    var context2=wx.createContext();
    lineArr.forEach(function(element) {
      //console.log(element)
      
      context2.setLineWidth(10);
      context2.lineTo(element.x,element.y-60);
    }, this);
    //context2.rect(e.touches[0].clientX,e.touches[0].clientY-60,25,15);
    context2.stroke();
    wx.drawCanvas({
      canvasId:1,
      actions:context2.getActions()
    })
  },
  canvasTouchEnd:function(e){
    console.log(e);
    lineArr=[];
  }
  
})