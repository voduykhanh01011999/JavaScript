function QuanLySinhVien(){
    var sinhvien={
        ten:"Võ duy khanh",
        namsinh:"1999",
        lop:"18th1",
        mssv:"DTH175159",
        nganh:"Công nghệ thông tin"
    }
    for(x in sinhvien)
    {
        document.write(sinhvien[x]);
        document.write("<hr>");
    }
}
function TimSoChan(){
    var t = parseInt(prompt("Nhập một số nguyên: "));
    var mod = (t%2)
    switch(mod)
    {
        case 0:
            {
            document.write("Số chẵn là: "+t);
            break;
        }
        case 1:
            {
            document.write("Số lẻ là: "+t);
            break;
            }
        default:
            {
            document.write("Bạn phải nhập là số!!! ");
            }
    }
}
function TestAlert(){
    var t=prompt("Nhập tên của bạn: ");
    alert("Xin chào"+t);
}
function set_content(){
    document.getElementById("content").innerHTML="Nội dung đã được thay đổi";


}
function get_content(){
    var html=document.getElementById("content").innerHTML;
    alert("nội dung cần lấy là " +html);
}