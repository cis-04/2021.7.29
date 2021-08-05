function NumberChange() {
    var number =
    document.getElementById('front1').value;
    document.getElementById('h1').innerText = number;
    const len = (document.getElementById('front1').value).length;
    if (len == 0) {
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('body').style.color = 'black';
        document.getElementById('h1').innerText = 'put your text'
    }
    else if (len <= 3) {
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('body').style.color = 'white';
    }
    else if (len <= 5) {
        document.querySelector('body').style.backgroundColor = 'orange';
        document.querySelector('body').style.color = 'white';
    }
    else if (len <= 7) {
        document.querySelector('body').style.backgroundColor = 'yellow';
        document.querySelector('body').style.color = 'white';
    }
    else if (len <= 9) {
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('body').style.color = 'white';
    }
    else if (len <= 11) {
        document.querySelector('body').style.backgroundColor = 'blue';
        document.querySelector('body').style.color = 'white';
    }
    else if (len <= 13) {
        document.querySelector('body').style.backgroundColor = 'darkblue';
        document.querySelector('body').style.color = 'white';
    }
    else {
        document.querySelector('body').style.backgroundColor = 'purple';
        document.querySelector('body').style.color = 'white'
    }
}
