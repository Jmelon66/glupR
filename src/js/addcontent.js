function toajax(type,url,data){
        $.ajax({
            type : type,
            contentType: "application/json;charset=UTF-8",
            url :url,
            data : data,
            success : function(result) {
              return result;
            },
            error : function(e){
                console.log(e.status);
                console.log(e.responseText);
            }
        });
   });
function quickadd(container,content,cname){
	
}
