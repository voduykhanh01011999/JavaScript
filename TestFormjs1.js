function click(){
    var a_list = document.getElementsByClassName("show");
    for(var i =0;i<=a_list.length;i++)
    {
        a_list[i].onclick = function()
        {
            alert("Xin chào, bạn vừa click vào tôi");
            return false;
        };
    }

}