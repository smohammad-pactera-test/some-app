export const registerFormKeys =  {
    userName: 'userName',
    password:'password',
    email:'email',
    phoneNumber:'phoneNumber'
};

export const registerForm  =  {

    [registerFormKeys.userName] : '',
    [registerFormKeys.password]:'',
    [registerFormKeys.email]:'',
    [registerFormKeys.phoneNumber]:''

}

export const loginPageKeys = {
    loginName: 'loginName',
    loginPassword: 'loginPassword'
};


export const loginPageProps = {
    [loginPageKeys.loginName] : '',
    [loginPageKeys.loginPassword]:''
}

export const pageTypes = {
    'login':'login',
    'registerPage':'registerPage',
    'adminPage':'adminPage'
}

export const testLoginNames = ['admin', 't1']