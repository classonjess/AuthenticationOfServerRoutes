const admin = require('firebase-admin');

//firebase service account package
const type = "service account";
const project_id = "fir-authusing";
const private_key_id = "";
const private_key = "-----BEGIN PRIVATE KEY-----";
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
