function afterSplashScreen() {
  var x = document.getElementById("form");
  x.style.display = "block";
  var y = document.getElementById("buttonFirst");
  y.style.display = "none";
}

function highLightElement(tagToChange) {
  //document.getElementById(tagToChange).style.backgroundColor = "salmon";
  //var afterRisk = document.createTextNode("*");
  //document.getElementById(tagToChange).appendChild(afterRisk);
}

function miscQuestionsNotFilled() {
  var x = document.getElementById("miscQuestionsMandatory");
  x.style.display = "block";
  x.style.backgroundColor = "salmon";
}

function locationQuestionsNotFilled() {
  var x = document.getElementById("locationQuestionsMandatory");
  x.style.display = "block";
  x.style.backgroundColor = "salmon";
}

function miscQuestionsNowFilled() {
  var x = document.getElementById("miscQuestionsMandatory");
  x.style.display = "none";
}

function locationQuestionsNowFilled() {
  var x = document.getElementById("locationQuestionsMandatory");
  x.style.display = "none";
}

function nameQuestionNotFilled() {
  var x = document.getElementById("nameQuestionMandatory");
  x.style.display = "block";
  x.style.backgroundColor = "salmon";
}

function phoneQuestionNotFilled() {
  var x = document.getElementById("phoneQuestionMandatory");
  x.style.display = "block";
  x.style.backgroundColor = "salmon";
}

function emailQuestionNotFilled() {
  var x = document.getElementById("emailQuestionMandatory");
  x.style.display = "block";
  x.style.backgroundColor = "salmon";
}

function nameQuestionNowFilled() {
  var x = document.getElementById("nameQuestionMandatory");
  x.style.display = "none";
}

function phoneQuestionNowFilled() {
  var x = document.getElementById("phoneQuestionMandatory");
  x.style.display = "none";
}

function emailQuestionNowFilled() {
  var x = document.getElementById("emailQuestionMandatory");
  x.style.display = "none";
}

function showQuestionsOne() {
  var x = document.getElementById("outsideTravelDiv");
  x.style.display = "block";
}

function showQuestionsTwo() {
  var x = document.getElementById("fullyVaxxedDiv");
  x.style.display = "block";
}

function showQuestionsThree() {
  var x = document.getElementById("closeContactDiv");
  x.style.display = "block";
}

function showQuestionsFour() {
  var x = document.getElementById("healthCheckDiv");
  x.style.display = "block";
}

function showQuestionsFive() {
  var x = document.getElementById("miscQuestionsDiv");
  x.style.display = "block";
}

function pleaseGoHome(goHomeNumber) {
  //LOAD MESSAGE TELLING YOU TO GO HOME

  document.getElementById("form").style.display = "none";
  document.getElementById(goHomeNumber).style.display = "block";
}

function selectOther(id) {
  document.getElementById(id).click();
}

function unHighLightElement(tagToChange) {
  document.getElementById(tagToChange).style.backgroundColor = "white";
}

function checkName(nameInput) {
  if (nameInput == "" || nameInput == " ") {
    return false;
  } else {
    return true;
  }
}

function otherCheck(idOfSet, nameOfOtherBox) {
  var tempArray = document.getElementsByName(idOfSet);
  if (tempArray[3].checked) {
    if (nameOfOtherBox == "" || nameOfOtherBox == " ") {
      //console.log("no");
      return false;
    } else {
      // console.log("yeah");
      return true;
    }
  } else {
    return true;
  }
}

//orion
function yesOrNoCheck(idOfSet) {
  var tempArray = document.getElementsByName(idOfSet);

  for (i = 0; i < tempArray.length; i++) {
    if (tempArray[i].checked) {
      return true;
    }
  }

  return false;

  /*

    if (document.getElementsByName(idOfSet).value == "yes" ||  document.getElementsByName(idOfSet).value == "no") {
      console.log("workedTrue");
      return true;

    } else {
      console.log("workedFalse");
      return false;
    }
  */
}

function checkEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function checkPhoneNumber(phoneNum) {
  return /^\d{10}$/.test(phoneNum);
}
/*
   && checkPhoneNumber(document.getElementById("closeContact")).value == true
    && yesOrNoCheck(document.getElementsByName("fullyVaccinated")).value == true
    && yesOrNoCheck(document.getElementsByName("travel")).value == true
    && yesOrNoCheck(document.getElementsByName("healthCheck")).value == true
    && yesOrNoCheck(document.getElementsByName("symptoms")).value == true



checkName(document.getElementById("fLname").value) == true
    && checkEmail(document.getElementById("emailCheck").value) == true
    && checkPhoneNumber(document.getElementById("phoneNumberCheck").value) == true

    && yesOrNoCheck(document.getElementsByName("visit").value) == true
    && yesOrNoCheck(document.getElementsByName("location").value) == true)
      {
*/

function goOverValues() {
  if (
    checkName(document.getElementById("fLname").value) == true &&
    checkEmail(document.getElementById("emailCheck").value) == true &&
    checkPhoneNumber(document.getElementById("phoneNumberCheck").value) ==
      true &&
    yesOrNoCheck("visit") == true &&
    yesOrNoCheck("location") == true &&
    otherCheck("visit", document.getElementById("otherInputVisit").value) &&
    otherCheck("location", document.getElementById("otherInputLocation").value)
  ) {
    return true;
  } else {
    return false;
  }
}

//This functionw will make sure every item of info is correct via an IF statment, if the data is not correct each individual function will be called to check which ones were not done correctly

function checkEverything() {
  //console.log("functional");
  if (goOverValues() == true) {
    window.location.href = "thankYou.html";

    //  console.log('sucess!');
  } else {
    //  console.log('notsucess!');
  }

  if (checkName(document.getElementById("fLname").value) == false) {
    highLightElement("fLname");
    nameQuestionNotFilled();
  } else {
    unHighLightElement("fLname");
    nameQuestionNowFilled();
  }

  if (checkEmail(document.getElementById("emailCheck").value) == false) {
    highLightElement("emailCheck");
    emailQuestionNotFilled();
  } else {
    unHighLightElement("emailCheck");
    emailQuestionNowFilled();
  }

  if (
    checkPhoneNumber(document.getElementById("phoneNumberCheck").value) == false
  ) {
    highLightElement("phoneNumberCheck");
    phoneQuestionNotFilled();
  } else {
    unHighLightElement("phoneNumberCheck");
    phoneQuestionNowFilled();
  }
  //Below here is the yes or no

  if (
    yesOrNoCheck("visit") == false ||
    otherCheck("visit", document.getElementById("otherInputVisit").value) ==
      false
  ) {
    highLightElement("visitParagraph");
    miscQuestionsNotFilled();
  } else {
    miscQuestionsNowFilled();
    unHighLightElement("visitParagraph");
  }

  if (
    yesOrNoCheck("location") == false ||
    otherCheck(
      "location",
      document.getElementById("otherInputLocation").value
    ) == false
  ) {
    locationQuestionsNotFilled();
    highLightElement("locationParagraph");
  } else {
    locationQuestionsNowFilled();
    unHighLightElement("locationParagraph");
  }
}

/*

  if (yesOrNoCheck("symptoms") == false) {
    highLightElement("symptomsParagraph")
  } else {
    unHighLightElement("symptomsParagraph");
  }





  if (yesOrNoCheck("fullyVaccinated") == false) {
    highLightElement("fullyVaccinatedParagraph")
  } else {
    unHighLightElement("fullyVaccinatedParagraph");
  }

  if (yesOrNoCheck("travel") == false) {
    highLightElement("outsideTravelParagraph")
  } else {
    unHighLightElement("outsideTravelParagraph");
  }

  if (yesOrNoCheck("closeContact") == false) {
    highLightElement("closeContactParagraph")
  } else {
    unHighLightElement("closeContactParagraph");
  }


  if (yesOrNoCheck("healthCheck") == false) {
    highLightElement("healthCheckParagraph")
  } else {
    unHighLightElement("healthCheckParagraph");
  }
*/
