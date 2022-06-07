const firebaseConfig = {
    apiKey: "AIzaSyCK8__cjK6QvdXm-vWDyu4DzJKYBV2RWrw",
    authDomain: "fir-authusing.firebaseapp.com",
    databaseURL: "https://fir-authusing-default-rtdb.firebaseio.com",
    projectId: "fir-authusing",
    storageBucket: "fir-authusing.appspot.com",
    messagingSenderId: "504316518900",
    appId: "1:504316518900:web:a2f97dfd74c3f5211cd9a1"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get elements
const email    = document.getElementById('email');
const password = document.getElementById('password');
const login    = document.getElementById('login');
const signup   = document.getElementById('signup');
const logout   = document.getElementById('logout');
const loginMsg = document.getElementById('loginMsg');
const routeMsg = document.getElementById('routeMsg');

// Login
login.addEventListener('click', e => {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => console.log(e.message));
});

// Signup
signup.addEventListener('click', e => {
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch( e => console.log(e.message));
});

// logout
logout.addEventListener('click', e =>{
    firebase.auth().signOut();
});

// If Authenticated we hide login login and signup and we add a msg. Otherwise we do the opposite
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
        logout.style.display = 'inLine';
        login.style.display = 'none';
        signup.style.display = 'none';
        loginMsg.innerHTML   = 'Authentication Success!';
    }
    else {
        console.log('User is not logged in');
        logout.style.display = 'none';
        login.style.display  = 'inLine';
        signup.style.display = 'inLine';
        loginMsg.innerHTML   = 'Not Authenticated';
    }
});

function callOpenRoute(){
    (async () => {
        let response = await fetch('/open');
        let text     = await response.text();
        console.log('response.text:', response);
        routeMsg.innerHTML = text;
    })();
}

function callAuthRoute(){
    //call server with token
    firebase.auth().currentUser.getIdToken()
        .then(idToken => {
            console.log('idToken', idToken);

            (async () => {
                let response = await fetch('/auth', {
                    method: 'GET',
                    headers: {
                        'Authorization': idToken
                    }
                });
                let text = await response.text();
                console.log('response', response );
                routeMsg.innerHTML = text;
            })();
        }).catch(e => console.log('e', e));
}