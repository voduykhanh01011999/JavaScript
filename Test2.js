function TestJavaScript(){
    var bien1= document.getElementsByClassName("html");
    var bien2= document.getElementsByClassName("js");
    var bien3=document.getElementsByClassName("css");
    document.write(bien1[0].value);
    document.write(bien2[0].innerHTML);
    document.write(bien3[0].innerHTML);

}