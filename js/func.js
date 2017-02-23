//导航栏切换效果
  $(document).ready(function () {
    $('ul.nav > li').click(function (e) {
      e.preventDefault();
      $('ul.nav > li').removeClass('active');
      $(this).addClass('active');
    });
  });


//TabChange
$(function(){
    //初始化显示组图 
    $('#myNav a:first').tab('show');
    $('#myNav>li>a').click(function (e) { 
      //点击导航栏切换
      var hrefValue = $(e.target).attr("id");
      var num = hrefValue.replace("Tab","");
      for(var i=1;i<5;i++){
          document.getElementById('myTab'+i).style.display='none';
        }
        document.getElementById('myTab'+num).style.display='block';
      }) 

    //初始化显示标签页
    $('#myTab1 a:first').tab('show');


    //点击动图二级菜单切换
    $('#dongall>li>a').click(function (e) { 
      //点击导航栏切换
      var hrefValue = $(e.target).attr("id");
      var num = hrefValue.replace("dong","");
      for(var i=1;i<5;i++){
          document.getElementById('myTab'+i).style.display='none';
        }
        //document.getElementById('myTab3').style.display='block';
        if (num==1) {
          document.getElementById('mydong1').style.display='block';
        }else{
          document.getElementById('mydong2').style.display='block';
        }
        
      }) 


  //点击显示大图
  $("#standard>div").each(function(){
    $(this).click(function(){
      var numindex=$(this).attr("id").replace("container","");
      openwin(numindex);
    });
  });
  function openwin(i) {
　　  window.open ("datu"+i+".html?"+i, "newwindow", "height=700, width=1100, toolbar =no, menubar=no, scrollbars=yes, resizable=no, location=no, status=no") //写成一行
　}
 

  //简报图跳转弹出新页面
  $("#jianbaoid>li>a").click(function(e){
    var jianbaoid = $(e.target).attr("id");
    var num = jianbaoid.replace("jianbaoid","");
    window.open ("jianbao"+num+".html", "newwindow", "height=1000, width=1500, toolbar =no, menubar=no, scrollbars=yes, resizable=no, location=no, status=no") //写成一行
  });


  //合成拖拽
  $("#btnMix").click(function(){
    var checkarr = new Array;     //选中的序号
    var checkboxArray = document.getElementsByName("test");
    for (var j = 0; j < checkboxArray.length; j++) {
      if (checkboxArray[j].checked===true) {
        var checkindex = checkboxArray[j].getAttribute("id").replace("check","");
        checkarr.push(checkindex)
      }
    }
    if (checkarr.length===0) {alert("请选择要合成的图表")}
    else{
      var imgUrl;
      var storage = window.sessionStorage;

      if (checkarr.indexOf("1")>=0) {
          var img = new Image();
          var image = myChart1.getDataURL({
              pixelRatio: 2,
              backgroundColor: '#fff'
          });
          storage.setItem('cvs1',image);
      }
      if (checkarr.indexOf("2")>=0) {
          var img = new Image();
          var image = myChart2.getDataURL({
              pixelRatio: 2,
              backgroundColor: '#fff'
          });
          storage.setItem('cvs2',image);
      }
      if (checkarr.indexOf("3")>=0) {
          var img = new Image();
          var image = myChart3.getDataURL({
              pixelRatio: 2,
              backgroundColor: '#fff'
          });
          storage.setItem('cvs3',image);
      }
      if (checkarr.indexOf("4")>=0) {
          var img = new Image();
          var image = myChart4.getDataURL({
              pixelRatio: 2,
              backgroundColor: '#fff'
          });
          storage.setItem('cvs4',image); 
      }
      if (checkarr.indexOf("5")>=0) {
          var img = new Image();
          var image = myChart5.getDataURL({
              pixelRatio: 2,
              backgroundColor: '#fff'
          });
          storage.setItem('cvs5',image);
      }
      if (checkarr.indexOf("6")>=0) {
          var img = new Image();
          var image = myChart6.getDataURL({
              pixelRatio: 2,
              backgroundColor: '#fff'
          });
          storage.setItem('cvs6',image);
      }

      setTimeout(function () {
  　　　　　window.open("hecheng.html?"+checkarr, "newwindow", "height=00, width=1300, toolbar =no, menubar=no, scrollbars=yes, resizable=no, location=no, status=no");
  　　　}, 500);

    }

  });


/*    $("#save").click(function(){
      html2canvas($("#container1")).then(function(canvas){
        var imgUrl = canvas.toDataURL("image/png");
        var w=window.open('about:blank','image from canvas'); 
        w.document.write("<img src='"+imgUrl+"' alt='from canvas'/>"); 
           // w.document.getElementById("emb").innerHTML="<img src='" + imgUrl + "' alt='from canvas'/>"
      });
    });*/

    //动图下拉框
      $('.inactive').click(function(e){
    e.preventDefault();
    if($(this).siblings('ul').css('display')=='none'){
      $(this).addClass('inactives');
      $(this).siblings('ul').slideDown(100).children('li');
    }else{
      $(this).removeClass('inactives');
      $(this).siblings('ul').slideUp(100);
    }
  })

 

/*
html2canvas($("#container3")).then(function(canvas){
          console.log(canvas);
          var imgUrl = canvas.toDataURL("image/png").replace("image/png","image/octet-stream")
          storage.setItem('cvs'+i,imgUrl);
        }); */

/*    for(let i=1;i<=6;i++){
        html2canvas($("#container"+i)).then(function(canvas){
          console.log(canvas);
          var imgUrl = canvas.toDataURL("image/png").replace("image/png","image/octet-stream")
          storage.setItem('cvs'+i,imgUrl);
        }); 
    }

    var storage = window.sessionStorage;
    for(let i=1;i<=6;i++){  
        var exp = storage.getItem('cvs'+i);
        $("#chatu"+i).attr("src",exp);
    }*/

//简报图
$("#chartone").click(function(){
    window.open("jianbao1.html", "newwindow", "height=00, width=1600, toolbar =no, menubar=no, scrollbars=yes, resizable=no, location=no, status=no");

});
$("#charttwo").click(function(){
    window.open("jianbao2.html", "newwindow", "height=00, width=1600, toolbar =no, menubar=no, scrollbars=yes, resizable=no, location=no, status=no");
});
$("#chartthree").click(function(){
    window.open("jianbao3.html", "newwindow", "height=00, width=1600, toolbar =no, menubar=no, scrollbars=yes, resizable=no, location=no, status=no");
});



  });




