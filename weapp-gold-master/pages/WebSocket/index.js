var socketOpen=false;
var socketMsgQueue=[];

Page({

    data:{
        msg:"",        
    },
    onLoad: function(){
        console.log("onload");
        this.openSocket();
    },
    formSubmit:function(e){
        console.log("button ");
        this.sendSocketMessage(e.detail.value.testInput);
        //this.setData({msg:e.detail.value.testInput});
    },

    openSocket:function(){
        wx.connectSocket({
            url:"ws://localhost:7181/",
            method:"GET"
        });
        socketOpen=true;
        for(var i=0;i<socketMsgQueue.length;i++){
            this.sendSocketMessage(socketMsgQueue[i]);
        }
        wx.onSocketMessage(function(res){
            console.log(res.data);
        });
    },

    sendSocketMessage:function(msg){
        if(socketOpen){
            wx.sendSocketMessage({
                data:msg
            })
        }
        else{
            socketMsgQueue.push(msg);
        }
    },

    touches:function(e){
        console.log(e);
    }
    
   


})