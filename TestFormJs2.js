function validate(){
    var nhaphoten = document.getElementById("hoten").value;
    var password1 = document.getElementById("password").value;
    var repassword2 = document.getElementById("repassword").value;
    var Gmail = document.getElementById("Email").value.indexOf("@");
    var Gmail1 = document.getElementById("Email").value.lastIndexOf(".");
    var Gmail2 = document.getElementById("Email").value.indexOf(" ");
    
    

    if( nhaphoten=="" )
    {
        alert("Bạn chưa nhập họ tên");
        return false;
    }
   
    if( password1=="")
    {
        alert("Bạn chưa nhập mật khẩu");
        return false;
    }
    if( repassword2!=password1)
    {
        alert("Mat khau nhap lai khong dung");
        return false;
    }
    if((Gmail >-1) && (Gmail != 0) && (Gmail1 !=-1) &&(Gmail1 > Gmail+1) &&(Gmail1<document.getElementById("Email").value.length -1) && Gmail2==-1)
    {
        alert("Email đúng"); 
        return true;
    }
    else
    {
        alert("Email sai");
        document.getElementById("Email").focus();
        return false;
    }

    

    return true;
}
function KiemTraSdt(){
    var t = document.getElementById("sodienthoai").value;
    if((document.getElementById("sodienthoai").value.length<10) || ( document.getElementById("sodienthoai").value.length>11))
    {
        alert("Số điện thoải phải nhập là 10 hoặc 11 số mời bạn nhập lại");
        return false;
    }
    return true;
}