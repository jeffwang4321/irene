function eyetoggle(){
  if ($("#password-input").attr("type") == "password") {
    $("#password-input").attr("type", "text");
    document.getElementById('eyes').style.color = 'black';
  } else {
    $("#password-input").attr("type", "password");
    document.getElementById('eyes').style.color = 'lightgrey';
  }
}

// 1217
function unlock(){
  if(document.getElementById('password-input').value == '1217'){
    document.getElementById('lock-page').style.display = 'none';
    document.getElementById('page1').style.display = 'block';
  }else{
    alert('How could you forget our anniversary 🥺 Hint: MMDD');
  }
}

// Grandpa Thai
function unlock1(){
  if(document.querySelector('input[name="page1-radio"]:checked').value === '1'){
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
  }else{
    alert('The place since closed down 😢');
  }
}

// Black Pink
function unlock2(){
  if(document.querySelector('input[name="page2-radio"]:checked').value === '1'){
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';
  }else{
    alert('DDU-DU DDU-DU~ 🔫');
  }
}

// Niagara Falls, Blue Mountain, Vancouver, Punta Cana
function unlock3(){
  if( document.getElementById("page3-check1").checked == true && 
      document.getElementById("page3-check2").checked == true &&
      document.getElementById("page3-check3").checked == true &&
      document.getElementById("page3-check4").checked == true){
    document.getElementById('page3').style.display = 'none';
    document.getElementById('page4').style.display = 'block';
  }else{
    alert('They are all the right answer! 💕');
  }
}

// 
function unlock4(){
  if( document.getElementById("page4-check1").checked == true && 
      document.getElementById("page4-check2").checked == false &&
      document.getElementById("page4-check3").checked == true &&
      document.getElementById("page4-check4").checked == true){
    document.getElementById('page4').style.display = 'none';
    document.getElementById('page5').style.display = 'block';
  }else{
    alert('I wont be annoying I promise 🥺');
  }
}
