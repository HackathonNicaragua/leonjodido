var estado = true;
setTimeout("cambio()", 9000);
function cambio() {
    estado = !estado;
    if (estado == true)
        img.src = "img/Hand Taking Strawberrys And Cream Cake.jpg"
    else
        img.src = "img/AZ3NPVPEZ6.jpg"
    setTimeout("cambio()", 5000);
}
$(document).ready(function(){
    $('.carousel').carousel({
        dist:0,
        shift:0,
        padding:20,

    });

});

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});
$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});
$('#modal1').modal('open');

$('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            alert("Ready");
            console.log(modal, trigger);
        },
        complete: function() { alert('Closed'); } // Callback for Modal close
    }
);