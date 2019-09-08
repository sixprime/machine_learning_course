$(document).ready(function () {
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();

    // Upload Preview
    $("#image-upload").change(function () {
        $('#result').text('');
        $('#result').hide();
        $('.image-section').show();
        $('#btn-predict').show();
        readURL(this);
    });
    
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#image').hide();
                $('#image').attr('src', e.target.result);
                $('#image').fadeIn(500);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    // Predict
    $('#btn-predict').click(function () {
        let form_data = new FormData($('#upload-file')[0]);
        $(this).hide();
        $('.loader').show();
        predict(document.getElementById('image'));
    });

    function predict(image) {
        // Load the model.
        mobilenet.load().then(model => {
            // Classify the image.
            model.classify(image).then(predictions => {
                $('.loader').hide();
                $('#result').fadeIn(500);
                $('#result').text(' Result: ' + predictions[0].className +
                    ' (' + parseFloat(predictions[0].probability * 100).toFixed(2) + '%)');
                console.log(predictions);
            });
        });
    }
});
