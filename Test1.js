function TestJs(){
    var element1=document.getElementsByTagName("input")
    var element2=document.getElementsByTagName("div");
    document.write(element1[0].value);
    document.write("<br>");
    document.write(element2[0].innerHTML);
    document.write("<br>");
    document.write(element2[1].innerHTML);
}