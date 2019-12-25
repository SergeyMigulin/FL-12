let email = prompt('Please, enter your email');

const _five = 5;
const creds = {
    defoltUserEmail: 'user@gmail.com',
    defoltUserPassword: 'UserPass',
    defoltAdminEmail: 'admin@gmail.com',
    defoltAdminPassword: 'AdminPass',
    willBeChanged: null,
    isUser: false,
    isAdmin: false
}
// debugger;
if(email === '' || email === null){
    alert('Canceled');
}else if(email.length < _five){
    alert('I don\'t know any emails having name length less than 5 symbols');
}else if(
    email === creds.defoltUserEmail ||
    email === creds.defoltAdminEmail    
){
    creds.isUser = creds.defoltUserEmail === email;
    creds.isAdmin = creds.defoltAdminEmail === email;
    
    const pwdBuffer = prompt('Please enter your password');

    if(creds.isUser){
        creds.isUser = creds.defoltUserPassword === pwdBuffer;
    }
    if(creds.isAdmin){
        creds.isAdmin = creds.defoltAdminPassword === pwdBuffer;
    }

    if(pwdBuffer === '' || pwdBuffer === null){
        alert('Canceled');
    }else if(creds.isUser || creds.isAdmin){
        creds.willBeChanged = confirm('Do you want to change your password?');
        
        if(!creds.willBeChanged){
            alert('You have failed the change.');
        }else if(creds.willBeChanged){
            const oldPwdForCheck = prompt('Please write your old password');
            
            if(oldPwdForCheck === '' || oldPwdForCheck === null){
                alert('Canceled');
            }else{
                if(creds.isAdmin){
                    if(creds.defoltAdminPassword === oldPwdForCheck){
                        const newPwd = prompt('Please enter your new password');

                        if(newPwd === '' || newPwd === null){
                            alert('Canceled');
                        }else if(newPwd.length < _five+1){
                            alert('It’s too short password. Sorry.');
                        }else{
                            const repeatNewPwd = prompt('Please repeat your new password');

                            if(newPwd !== repeatNewPwd){
                                alert('You wrote the wrong password.');
                            }else{
                                alert('You have successfully changed your password.');
                            }
                        }
                    }else {
                        alert('admin, wrong old pwd')
                    }
                }

                if(creds.isUser){
                    if(creds.defoltUserPassword === oldPwdForCheck){
                        const newPwd = prompt('Please enter your new password');

                        if(newPwd === '' || newPwd === null){
                            alert('Canceled');
                        }else if(newPwd.length < _five+1){
                            alert('It’s too short password. Sorry.');
                        }else{
                            const repeatNewPwd = prompt('Please repeat your new password');

                            if(newPwd !== repeatNewPwd){
                                alert('You wrote the wrong password.');
                            }else{
                                alert('You have successfully changed your password.');
                            }
                        }
                    }else {
                        alert('user, wrong old pwd')
                    }
                }
            }
        }
    }else {
        alert('Wrong password');
    }
}else {
    alert('I don’t know you');
}