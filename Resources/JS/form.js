function validate(form) {
    var errors=[]
    if (form.inputName.value == '') {
        errors.push("Please enter name")
    }
    
    if (form.p1.value ==''){
        errors.push("Please enter a password"); 
    }
    
    if (form.p2.value ==''){
        errors.push("Please repeat your password"); 
    }
    
    if (form.p1.value != form.p2.value){
        errors.push("Passwords dont match"); 
    }
    
    if (form.ages.value <=17)
        errors.push("Must be over 18");
    
    if (form.ages.value == '')
        errors.push("Please enter age");
    
    if (errors.length >0){
        var problems = errors
        alert(problems);
        return false;
    }
    return true;
}

