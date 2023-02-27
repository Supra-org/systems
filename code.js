function validate(){
    let current  = document.getElementById("password").value /* Get password from form */
    if (current === "[password here]") {
        //valid password
        //open window "id='secure'"
    } else {
        document.getElementById("wrong").innerHTML="Wrong password!"
        document.getElementById("password").value = ""
    }
}