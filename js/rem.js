    
    (function (doc, win) {
        var docEl = doc.documentElement,
          
            resizeEvt = 'onorientationchange' in window ? 'onorientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                var clientHeight = docEl.clientHeight;
                if (!clientWidth) return;
                if(clientWidth>=750){
                    docEl.style.fontSize = '100px';
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                }
                
                if(clientWidth>=clientHeight){
                	document.querySelector('.screen').style.display = 'block'
                }else{
                	document.querySelector('.screen').style.display = 'none'
                }
                
                
                /*if( clientWidth /clientHeight > (400/667)){
                	console.log(1111)
                    docEl.style.fontSize = 100 * ((375/667 * clientHeight) / 750) + 'px';
                	
                }*/
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
        
    })(document, window);