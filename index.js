document.addEventListener("DOMContentLoaded", function() {
    console.log('Script running');
    var countDownElement = document.getElementById('countdown');
    var initialCountDownVal = countDownElement.innerHTML;
    var backImgElement = document.getElementById('backgbImg')
    

     var interval = setInterval(function(){
        initialCountDownVal = initialCountDownVal > 0 ? initialCountDownVal-1 : 0;
        countDownElement.innerHTML = initialCountDownVal;
        
        countDownElement.style.fontSize = initialCountDownVal * 100 + "px"; // size of elemeent begins to decrease with decreasing px value

        var backImgPath = initialCountDownVal % 2 === 0 ? '/assets/grad-1.jpeg' : '/assets/grad-2.jpeg';
        backImgElement.src = backImgPath;

        if (initialCountDownVal <=0){
            clearInterval(interval);
        }
    }, 1000)
 
});
