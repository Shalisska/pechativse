(function(document) {
    var feedback = document.querySelector('.header__contacts-feedback');
    var esc = document.querySelector('.feedback__form-esc');
    var form = document.querySelector('.feedback__form');
    
    feedback.addEventListener('click', function(event) {
        event.preventDefault();
        form.classList.add('form__show');
    });

    esc.addEventListener('click', function(event) {
        event.preventDefault();
        form.classList.remove('form__show');
    });
                              
})(document)