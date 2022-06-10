
// let button = document.getElementById("btn").addEventListener("click", checkErrors);

function checkErrors(callback) {
    debugger;

    let form = document.querySelectorAll("myForm");
    let nome = document.form.nome.value;
    let cognome = document.form.cognome.value;
    let email = document.form.email.value;
    let password = document.form.password.value;
    let eta = document.form.eta.value;


    // console.log(nome);
    // console.log(cognome);
     console.log(email);
    // console.log(password);
    // console.log(eta);


    var avviso = "";
    if (!checkNome(nome)) {
        avviso += "Nome non valido\n"
    } else if (!checkCognome(cognome)) {
        avviso += "Cognome non valido\n"
    } else if (!checkEmail(email)) {
        avviso += "Email non valido\n"
    } else if (!checkPassword(password)) {
        avviso += "Password non valido\n"
    } else if (!checkEta(eta)){
        avviso += "Eta non valido\n"
    }


    callback(avviso);
}



function checkNome(nome) {
    let result = /^[a-zA-Z]+$/.test(nome);
    return result
}


function checkCognome(cognome) {
    let result = /^[a-zA-Z]+$/.test(cognome);
    return result
}

function checkEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return true
  }
    return false
}

function checkPassword(password) {
    let result = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
    return result
}

function checkEta(eta){
    let result = eta;
    if (ageNumericVal < 0 || ageNumericVal > 200) {
        return result
      }
}



