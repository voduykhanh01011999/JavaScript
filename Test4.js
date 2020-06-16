function set_content(){
    document.getElementById("content").innerHTML="<h4> Nội dung đã được thay đổi </h4>";
    document.write("<br>");
    document.getElementById("content1").innerHTML="<h4>Nôi dung 2 đã được thay đổi</h4>";
}
function get_content(){
    var html = document.getElementById("content").innerHTML;
    alert("Nội dung cần lấy là:"+html);
    var html1=document.getElementById("content1").innerHTML;
    alert("Nội dung cần lấy là: "+html1);
}
function TruyVanNoiDung(){
    var element=document.querySelectorAll("div input.js");
    document.write("<h3>Thẻ cần lấy: "+element[0].value+"/h3>");
}