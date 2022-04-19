var today = moment().format("MMM Do YY");
$("#currentDay").text(today)

var nowtime = moment().hour()
$("textarea").each(function(){
    var textareatime = $(this).attr("id")
    console.log (textareatime)
    if (nowtime === parseInt(textareatime)){
        $(this).addClass("present")
    }
    else if (nowtime > parseInt(textareatime)){
        $(this).addClass("past")    
    }
    else {
        
        $(this).addClass("future")
    }
})

$("button").on("click",function(event){
    event.preventDefault()
    var textareatime = $(this).siblings("textarea").attr("id")
    var textareainput = $(this).siblings("textarea").val()
    localStorage.setItem(textareatime, textareainput)
})

for (var i = 0; i < localStorage.length; i++){
    var keynumber = localStorage.key(i)
    $ ("#"+keynumber).val(localStorage.getItem(keynumber))
}