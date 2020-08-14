let input = document.getElementById('input'),
    button = document.getElementById('submitBtn'),
    lists = document.getElementById('runInput'),
    totalDist = document.getElementById('totalDist'),
    avgDist = document.getElementById('avgDist'),
    highDist = document.getElementById('highDist'),
    year = document.getElementById('year'),
    errDisp = document.getElementById('errDisp'),
    listArr = [];

(function(){
    let curYear = new Date().getFullYear();
    year.innerHTML = curYear;
    }());

function submitFunc(e){
    let inpVal = input.value;
    if(!isNaN(inpVal) && inpVal !=''){
        
        var newList = document.createElement('LI');
        newValue= document.createTextNode(inpVal);
        newList.appendChild(newValue);
        newList.className = 'runInputs';
        lists.appendChild(newList);
        $(document).ready(function(){
            $( "ul li" ).first().remove();
        });
        listArr.push(Number(inpVal));
        addTotal();
        
    } else{
        errDisp.innerHTML = 'Please enter a number!';
    }
};

function addTotal(){
    var total = listArr.reduce(function (previous, current) {
        return previous + current;
    }, 0);

    var totalDistVal = totalDist.innerText = total.toFixed(2) + 'km';
    avgDist.innerText = (total/7).toFixed(2) + 'km';
    var highest = Math.max(...listArr);
    highDist.innerText = highest + 'km';
}

$(document).ready(function(){
    $('#menuBtn').click(function(){
        $(this).toggleClass('fa-times');
        $('#infoDiv').toggleClass('hider');
    });
});

