(function(document) {
    //ищем кнопки
    var callback = document.querySelector('.header__contacts-feedback');
    var orders = [document.querySelector('.sidebar__ordering'), document.querySelector('.footer__ordering')];
    
    //ищем формы
    var callback__form = document.querySelector('.form--callback').parentNode;
    var order__form = document.querySelector('.form--order').parentNode;
    
    //открытие формы обратной связи
	callback.addEventListener('click', function(event) {
		event.preventDefault();
		if (callback__form.classList.contains('popup-show') != true) {
            callback__form.classList.add('popup-show');
        }			
    })
	
    //открытие формы заказа
	for (var i = 0; i < orders.length; i++) {
		var order = orders[i];
		
		order.addEventListener('click', function(event) {
			event.preventDefault();
			if (order__form.classList.contains('popup-show') != true) {
				order__form.classList.add('popup-show');
			}			
		})
	}
    
    	//закрытие окон
	var esc = document.querySelectorAll('.form__esc');
	
	for (var i = 0; i < esc.length; i++) {
		esc[i].addEventListener('click', function(event) {
			event.preventDefault();
			
			var close = this.parentNode.parentNode;
			close.classList.remove('popup-show');
		});       
	}
    
   var shims = document.querySelectorAll('.shim');
    
    for(i = 0; i < shims.length; i++) {
        var closing = function(j) {
            var shim = shims[j];
            
            //закрытие по клику вне формы
            shim.addEventListener('click', function(event) {
                var a = event.target;
                if(a == shim) {
                    shim.classList.remove('popup-show');
                }
            });
            
            //закрытие по Esc
            window.addEventListener('keydown', function(event) {
                if (event.keyCode==27
                   &&shim.classList.contains('popup-show')){
                   shim.classList.remove('popup-show');
                }
            });
        } (i)
    }                       
})(document)


	
	
	
	
	

    
    