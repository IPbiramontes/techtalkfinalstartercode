// JavaScript File
// JavaScript File
$( document ).ready(function() {
    $("#jtb").click(function(){
        $("#jtb").hide();
         for (var j= 0; j<=10; j=j+1) {
        $("body").append("<img src='https://res.cloudinary.com/equities-com/image/upload/v1/u/06524331e2c63c0ed3479bf1be85ce3b/mki1xwvsfxyazoezoq8t'>")
         }
    });
    $("#lgcb").click(function(){
        $("#lgcb").hide();
        for (var l= 0; l<=10;l=l+1) {
        $("body").append("<img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Logic_backstage_in_Orlando_on_April_8_2014.jpg/220px-Logic_backstage_in_Orlando_on_April_8_2014.jpg'>")
        }
        
    });
    
    $("#urr").click(function() {
    var inputval = $("#bar").val();
    var ans = "Yeah";
    
    if (inputval === ans){
      alert("I apperciate you");
    }
    else { 
      alert("What's wrong with you");   
    }
    });

});