import firebase from "../../firebase";
export let GoogleProvider = new firebase.auth.GoogleAuthProvider();
export let FaceBookProvider = new firebase.auth.FacebookAuthProvider();

let SocialLogin = async provider => {
    try {
        let DATA =  await firebase.auth().signInWithPopup(provider);
        
        // user is coming from firebase
        return  DATA.user;
    } catch (error) {
        return error;
    }
}
export default SocialLogin;