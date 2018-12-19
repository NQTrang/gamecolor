var lvl1 = document.getElementById('lvl1');
var lvl2 = document.getElementById('lvl2');
var lvl3 = document.getElementById('lvl3');
var lvl4 = document.getElementById('lvl4');
var lvl5 = document.getElementById('lvl5');
var lvl6 = document.getElementById('lvl6');
var lvl7 = document.getElementById('lvl7');


function init() {
    lvl2.style.display = 'none';
    lvl3.style.display = 'none';
    lvl4.style.display = 'none';
    lvl5.style.display = 'none';
    lvl6.style.display = 'none';
    lvl7.style.display = 'none';

}

var DOMButtons = document.getElementsByClassName('btnn'); //DOMButtons la 1 list
for (var i = 0; i < DOMButtons.length; i++) {
    DOMButtons[i].addEventListener('click', function(event){
        var IDBTN = event.target.id;
        console.log(IDBTN);
        
        if (IDBTN == 'btn4') {
            document.getElementById('btn4').style.backgroundColor = 'red';
            lvl2.style.display = 'block';
            lvl1.remove();
        }          
        else if (IDBTN == 'btn5') {
            lvl3.style.display = 'block';
            lvl2.remove();
        }
        else if (IDBTN == 'btn13') {
            lvl4.style.display = 'block';
            lvl3.remove();
        }
        else if (IDBTN =='btn20'){
            lvl5.style.display = 'block';
            lvl4.remove()
        }
        else if (IDBTN =='btn30'){
            lvl6.style.display = 'block';
            lvl5.remove()
        }
        else if (IDBTN =='btn46'){
            lvl7.style.display = 'block';
            lvl6.remove()
        }
        else if (IDBTN =='btn63'){
            lvl7.remove()
            var winner = document.getElementById('winner');
            winner.insertAdjacentHTML('beforeend','<p>You Win</p>');
        } else {
            var winner = document.getElementById('winner');
            winner.insertAdjacentHTML('beforeend','<p>You Lose</p>');
            lvl1.style.display = 'none';
            lvl2.style.display = 'none';
            lvl3.style.display = 'none';
            lvl4.style.display = 'none';
            lvl5.style.display = 'none';
            lvl6.style.display = 'none';
            lvl7.style.display = 'none';
        }
    });   
}






init()
