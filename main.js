$(document).ready(function() {
    // Function to handle button click
    $(".product-btn").click(function() {
        // Check if the element with class 'first' exists
        if ($(".first").length) {
            // Animate with a fadeOut effect for demonstration
            $(".first").fadeOut(400).fadeIn(400);
        } else {
            console.log("Element with class 'first' not found.");
        }
    });
});
$(document).ready(function() {
    $(".product-btn").click(function() {
        $(".first").addClass('animate-effect');
    });
});

