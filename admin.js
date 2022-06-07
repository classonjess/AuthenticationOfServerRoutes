const admin = require('firebase-admin');

//firebase service account package
const type = "service account";
const project_id = "fir-authusing";
const private_key_id = "bbe9fe819db87b42ec300e7777649c4294334e88";
const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCtn9zDRkXQERlZ\nQJiiogsBpEBZtDJSt7eYh06yzCNfFJgHD2b/9GwuOH5m4SowbR2Xe6++xKk8Gzbc\nYejzHhozlb1pn9lHMhDZBNCh+Qsxv4IGJucgsLPYpf+bL+wR2gv/k38+niWjPOh9\nID0zH7FCZ/qXtkQMl00LkUrHCYs3bHJ7/tq0sHPPn2MDNnLYJ4XfzKaCCR2QwKk6\nPbBW+DdI/eC4pK8bQHbQ/62reTpR/2p4fXewodIytvT7UXdvMl95HyCS5TMhJWsQ\nGxSbY1CH2ZEs0VQdXa/f7/An2QRHWV0Ry2wtPQUlrNXgWbRUtO3t2809ZrVjYc+z\nYvU2R8ahAgMBAAECggEAQEQF8PnX6XYKzfCNDtWwAUGM2CdM4TVDbd/Xj3LkPNNg\nmmxnEaKlUE506xu5BAe/hkyv9orQoYDpQ5WyJhskU6e/XpNeV23+snWHzAxkyls6\ng5BuyLjfOPforsaEOO9etZEg7kqXX96xp28BeCTo9c2LAhDjC04NpJR4+0dbEn4j\npOMJrzGYwLken2r4PE1IqBZL9DN2s1uDnhFNh80AU2LyKlwvhOqYr5VzcjmzKKwv\nHucZqtqsaggYc2VSr4BgOiYNRBkEER/YEkeZQTt2ETd/PLBMq4MKS6Opt8B5bj+D\nJElCqKpkDcyTPO2+VBHKB6Y7nSajyw52wPqTnCtziQKBgQDVHMXN6a2u6tBScSG+\nGCXbD4D9zRyW07IwGvEd3FvGvJkAWHtW7V8odFAc58AqfKrw7PiBtnruVieXPdBA\nBkGUhDJTIp+2ce9Mq6nYnVup/AnVw1gT8m6A0SOfHxnzT4dWi7Ot9272yrwA6P8A\n0vVZeqTp7cP7MSQZmLa7ReVbLwKBgQDQkLs6fGsDrpveDqfHhXZayOCLHDmY9z6m\nGsBjMFpgCgGTTV+BPZ/RKCEbdVe0T9a0JWdyshHgM+Shj4QmPd9MZaFlNqB0PYh2\noxb3jnQlIqns98ybVBLl3+ZpL6S77C5JxWL/pBMxdAeYRPPLRk+29wreIBntMU9G\nHorUaL5HLwKBgFVGXiA3ETic3R8gBdB6+Sre2U61dGsl6nc1UKYSNucfMFnjDfeK\npDkb0bK/STW3DO+64vWEf0w/TThHk70Kw9MZ0slRYXcvwAF970iuLq+mGole0S+q\nIm2JQie52jhx6kXHQO6rw8sc9H2oveEmiOZ1HOg+K92nnDph0Ty+izghAoGAG+GN\nNedWAvr/mTLKWRDNXpuF8PLH/FvpAxmGaHwZSMdtqHxqbQOI7tP3gQ0xuUgHArQR\nXTLS0u78/GAMIXSZ+kOHzNj9oCxtprZsppFjk2dL4gLKVmVp1VMWIS+eTQTotzHs\n5xHPAwhoz4FAOgdfNq1VxZXzAVNbLpt8oaKS9T8CgYEAt8SYnMNIcON6lLPhHP4U\nk3jtHVMdFMdz6vH57idg+P57sW2BiqMg1NcO/IVAN4inGzIhfGoweOv7i99gOxes\nou+R4fVoeQzZAnln9nayRZX9PZmSmP7yAB+J/rz5A/HbhsDksBxaXKPqRTzKmRnp\n53lERApXoFNpiv9+nnALRHs=\n-----END PRIVATE KEY-----\n";
const client_email = "firebase-adminsdk-pdy27@fir-authusing.iam.gserviceaccount.com";
const client_i ="115379758598617516163";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url =  "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-pdy27%40fir-authusing.iam.gserviceaccount.com"

// credential grants access to Firebase service
admin.initializeApp({
    credential: admin.credential.cert({
        type,
        project_id,
        private_key_id,
        private_key:
          private_key.replace(/\\n/g,'\n'),
        client_email,
        client_i,
        auth_uri,
        token_uri,
        auth_provider_x509_cert_url,
        client_x509_cert_url
    }),
});

module.exports = admin;