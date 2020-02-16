function dates(){
    var x = document.getElementById("datemin").value;
    var y = document.getElementById('datemax').value;
    var dt1 = new Date(x);
    var dt2 = new Date(y);
    
    var a;

    a = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));

    if(a < 0){
        alert("Please select another date");
        return false;
    }
    else if(a >= 0){
        this.submit();
    }
    else if(x == "" || y == ""){
        alert("Please select dates");
        return false;
    }
    

}

