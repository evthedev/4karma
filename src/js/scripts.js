/**
 * Form label transition
 */
var inputs = document.querySelectorAll('.input')

inputs.forEach(function(input) {
    input.addEventListener('focus', function() {
        this.classList.add('focused');
    })
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.classList.remove('focused');
        }
    })
})
