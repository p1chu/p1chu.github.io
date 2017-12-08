var outputValue = 45;
var adaname = 'morourke';
var adafeedkey = 'triptofan';
var aiokey = '7290d199347c4a7cbae57969efcd18ed';

setInterval(function(){
    setAdaIO(adaname, adafeedkey, aiokey, outputValue); 
}, 30000);

$(document).ready(function(){
    $( "#output" ).on("change mousemove", function() {
        outputValue = this.value;
        $("#amount").text(outputValue);
    });
});