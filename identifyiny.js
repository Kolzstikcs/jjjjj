

function playPopSound() {
  let popSound = document.getElementById('popSound');
  popSound.currentTime = 0;
  popSound.play();
}



function negativeSound(){
  let negativeSound = document.getElementById('nB6008');
  negativeSound.currentTime = 0;
  negativeSound.play();
}




function updateMarkerOption2(selectId, markerClass, codeContainerId) {
  let select = document.getElementById(selectId);
  let marker = document.querySelector(markerClass);
  const codeContainer = document.getElementById(codeContainerId);

  if (select.value === 'option1') {
    marker.style.display = 'none';
    marker.className = markerClass.replace('.', '');
  } else if (select.value === 'option2') {
    codeContainer.classList.add('shower');
    playPopSound();
    setTimeout(function () {
      codeContainer.classList.remove('shower');
    }, 2000);
    marker.style.display = 'block';
    marker.innerHTML = '✔';
    marker.style.color = 'rgb(4, 255, 4)';
  } else if (select.value === 'option3' || select.value === 'option4') {
    marker.style.display = 'inline-block';
    marker.innerHTML = '⊗';
    marker.style.color = 'red';
    negativeSound();
  }
}


function updateMarker1(){
  updateMarkerOption2('mySelect', '.marker', 'codeContainer');
}
function updateMarker2() {
  updateMarkerOption2('mySelect1', '.marker1', 'codeContainer1');
}

function updateMarker3() {
  updateMarkerOption2('mySelect2', '.marker2', 'codeContainer2');
}

function updateMarker4() {
  updateMarkerOption2('mySelect3', '.marker3', 'codeContainer3');
}

function updateMarker5() {
  updateMarkerOption2('mySelect4', '.marker4', 'codeContainer4');
}


function updateMarker7() {
  updateMarkerOption2('mySelect7', '.marker7', 'codeContainer7');
}

function updateMarker19() {
  updateMarkerOption2('mySelect19', '.marker19', 'codeContainer19');
}

function updateMarker23() {
  updateMarkerOption2('mySelect23', '.marker23', 'codeContainer23');
}

function updateMarker35() {
  updateMarkerOption2('mySelect35', '.marker35', 'codeContainer35');
}



function updateMarker21() {
  updateMarkerOption2('mySelect21', '.marker21', 'codeContainer21');
}

function updateMarker24() {
  updateMarkerOption2('mySelect24', '.marker24', 'codeContainer24');
}

function updateMarker15() {
  updateMarkerOption2('mySelect15', '.marker15', 'codeContainer15');
}

function updateMarker8() {
  updateMarkerOption2('mySelect8', '.marker8', 'codeContainer8');
}

function updateMarker31() {
  updateMarkerOption2('mySelect31', '.marker31', 'codeContainer31');
}

function updateMarker37() {
  updateMarkerOption2('mySelect37', '.marker37', 'codeContainer37');
}

function updateMarker10() {
  updateMarkerOption2('mySelect10', '.marker10', 'codeContainer10');
}

function updateMarker32() {
  updateMarkerOption2('mySelect32', '.marker32', 'codeContainer32');
}






function updateMarkerOption3(selectId, markerClass, codeContainerId) {
  let select = document.getElementById(selectId);
  let marker = document.querySelector(markerClass);
  const codeContainer = document.getElementById(codeContainerId);
  //let markerG = document.querySelector('oohhh').lastChild;
  if (select.value === 'option1') {
    marker.style.display = 'none';
    marker.className = markerClass.replace('.', '');
  } else if (select.value === 'option2' || select.value === 'option4') {
    marker.style.display = 'inline-block';
    marker.innerHTML = '⊗';
    marker.style.color = 'red';
    negativeSound();
  } else if (select.value === 'option3') {
    codeContainer.classList.add('shower');
    playPopSound();
    setTimeout(function () {
      codeContainer.classList.remove('shower');
    }, 2000);
    marker.style.display = 'block';
    marker.innerHTML = '✔';
    marker.style.color = 'rgb(4, 255, 4)';
  } 

}

function updateMarker22() {
  updateMarkerOption3('mySelect22', '.marker22', 'codeContainer22');
}

function updateMarker40() {
  updateMarkerOption3('mySelect40', '.marker40', 'codeContainer40');
}

function updateMarker13() {
  updateMarkerOption3('mySelect13', '.marker13', 'codeContainer13');
}

function updateMarker18() {
  updateMarkerOption3('mySelect4', '.marker4', 'codeContainer4');
}

function updateMarker6() {
  updateMarkerOption3('mySelect5', '.marker5', 'codeContainer5');
}



function updateMarker41() {
  updateMarkerOption3('mySelect22', '.marker22', 'codeContainer22');
}

function updateMarker17() {
  updateMarkerOption3('mySelect17', '.marker17', 'codeContainer17');
}

function updateMarker38() {
  updateMarkerOption3('mySelect38', '.marker38', 'codeContainer38');
}

function updateMarker39() {
  updateMarkerOption3('mySelect39', '.marker39', 'codeContainer39');
}

function updateMarker41() {
  updateMarkerOption3('mySelect41', '.marker41', 'codeContainer41');
}

function updateMarker9() {
  updateMarkerOption3('mySelect9', '.marker9', 'codeContainer9');
}

function updateMarker12() {
  updateMarkerOption3('mySelect12', '.marker12', 'codeContainer12');
}

function updateMarker16() {
  updateMarkerOption3('mySelect16', '.marker16', 'codeContainer16');
}


function updateMarker31() {
  updateMarkerOption3('mySelect31', '.marker31', 'codeContainer31');
}

function updateMarker34() {
  updateMarkerOption3('mySelect34', '.marker34', 'codeContainer34');
}








function updateMarkerOption4(selectId, markerClass, codeContainerId) {
  let select = document.getElementById(selectId);
  let marker = document.querySelector(markerClass);
  const codeContainer = document.getElementById(codeContainerId);
  //let markerG = document.querySelector('oohhh').lastChild;
  if (select.value === 'option1') {
    marker.style.display = 'none';
    marker.className = markerClass.replace('.', '');
  } else if (select.value === 'option2' || select.value === 'option3') {
    marker.style.display = 'inline-block';
    marker.innerHTML = '⊗';
    marker.style.color = 'red';
    negativeSound();
  }  else if (select.value === 'option4') {
    codeContainer.classList.add('shower');
    playPopSound();
    setTimeout(function () {
      codeContainer.classList.remove('shower');
    }, 2000);
    marker.style.display = 'block';
    marker.innerHTML = '✔';
    marker.style.color = 'rgb(4, 255, 4)';
  }

}

function updateMarker26() {
  updateMarkerOption4('mySelect26', '.marker26', 'codeContainer26');
}

function updateMarker42() {
  updateMarkerOption4('mySelect42', '.marker42', 'codeContainer42');
}

function updateMarker33() {
  updateMarkerOption4('mySelect33', '.marker33', 'codeContainer33');
}

function updateMarker28() {
  updateMarkerOption4('mySelect28', '.marker28', 'codeContainer28');
}

function updateMarker14() {
  updateMarkerOption4('mySelect14', '.marker14', 'codeContainer14');
}

function updateMarker25() {
  updateMarkerOption4('mySelect25', '.marker25', 'codeContainer25');
}

function updateMarker27() {
  updateMarkerOption4('mySelect27', '.marker27', 'codeContainer27');
}

function updateMarker36() {
  updateMarkerOption4('mySelect36', '.marker36', 'codeContainer36');
}

function updateMarker29() {
  updateMarkerOption4('mySelect29', '.marker29', 'codeContainer29');
}

function updateMarker35() {
  updateMarkerOption4('mySelect35', '.marker35', 'codeContainer35');
}

function updateMarker20() {
  updateMarkerOption4('mySelect20', '.marker20', 'codeContainer20');
}

function updateMarker30() {
  updateMarkerOption4('mySelect30', '.marker30', 'codeContainer30');
}

function updateMarker11() {
  updateMarkerOption4('mySelect11', '.marker11', 'codeContainer11');
}

function updateMarker18() {
  updateMarkerOption4('mySelect18', '.marker18', 'codeContainer18');
}