function add() {
    var sum = parseInt(document.getElementById("first").value) + parseInt(document.getElementById("second").value);
    document.getElementById("demo").innerHTML = sum
    return sum;
}

function sub() {
    var sum = parseInt(document.getElementById("first").value) - parseInt(document.getElementById("second").value);
    document.getElementById("demo").innerHTML = sum
    return sum;
}

function mul() {
    var sum = parseInt(document.getElementById("first").value) * parseInt(document.getElementById("second").value);
    document.getElementById("demo").innerHTML = sum
    return sum;
}

function div() {
  
    var sum = parseInt(document.getElementById("first").value) / parseInt(document.getElementById("second").value);
    document.getElementById("demo").innerHTML = sum
    return sum;
}


function per() {
  
    var sum = parseInt(document.getElementById("first").value) * parseInt(document.getElementById("second").value);
    document.getElementById("demo").innerHTML = sum/100
    return sum;
}

function abs() {
  
    var sum = parseInt(document.getElementById("first").value) 
    if(sum < 0)
       document.getElementById("demo").innerHTML = -1 * sum
    else
       document.getElementById("demo").innerHTML = sum

    return sum;
}

function sqrt() {
  
    var sum = parseInt(document.getElementById("first").value) 
    if(sum < 0)
       document.getElementById("demo").innerText = "no square root for negative integers"
    else {
       var num = Math.sqrt(sum)
       document.getElementById("demo").innerHTML =  +(Math.round(num + "e+3")  + "e-3")
    }
    return sum;
}


function validateForm() {
    var name = document.reg.name
    var phone = document.reg.phone
    var email = document.reg.email

    var letters = /^[A-Za-z]+[0-9]*$/;
    if(name.value.match(letters))
    {
        var numbers = /^[0-9]+$/;
        if(phone.value.match(numbers) && phone.value.length() == 10)
        {
        return true;
        }
        else
        {
        alert('Phone number must have numeric characters only');
        phone.focus();
        return false;
        }    
    
    }
    else
    {
    alert('Name must have alphabet as first letter only');
    name.focus();
    return false;
    }

    


}


function palin() {
    var a = document.getElementById("first_palin").value
    for(i = 0; i < (a.length)/2; i++) {
        if(a[i] != a[a.length - 1- i]) {
            document.getElementById('dem').innerText = "false"
            return false
        }
        
    }
    document.getElementById('dem').innerText = "true"
    return true;
}

function ana() {
    var a = document.getElementById("first_palin").value
    var b = document.getElementById("second_palin").value
    
    var map = {}

    for(i = 0; i < a.length; i++) {
       if(a[i] != ' ') 
         map[a[i]]++
    }

    for(i = 0; i < b.length; i++) {
        if(b[i] in map && map[b[i]] != 0)
            map[b[i]]--
        else {
            
            document.getElementById('dem').innerText = "false"
            return false
        }
}
  document.getElementById('dem').innerText = "true"
  return true

}

function generate() {
    document.getElementById("obj1").value = parseInt(Math.random() * 1000)
    document.getElementById('obj2').value = parseInt(Math.random() * 1000)
}

function win() {
    var a = String(document.getElementById("obj1").value % 3);
    var b = String(document.getElementById('obj2').value % 3);

    var map = {}
    map['0'] = 'Cockroach'
    map['1'] = 'Human'
    map['2'] = 'Bomb'
    

    if(a in map && b in map && map[a] == map[b]) {
        document.getElementById('demo').innerHTML = "TIE"
        return "TIE"
    }

    if(map[a] == 'Cockroach' && map[b] == 'Human') {
        document.getElementById('demo').innerHTML = "Human wins"
        return "human wins"
    }
        
    else if(map[a] == 'Cockroach' && map[b] == 'Bomb') {
        document.getElementById('demo').innerHTML = "Cockroach wins"
        return "cockroach wins"
    }
    
    else if(map[a] == 'Human' && map[b] == 'Bomb') {
        document.getElementById('demo').innerHTML = "nuclear bomb wins"
        return "nuclear bomb wins"
    }

    


       
}