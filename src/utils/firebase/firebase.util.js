// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth,
signInWithPopup,
GoogleAuthProvider,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged} from "firebase/auth"
import{
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqFEgch8VH8RCmDUErWWnSKBxWraxxVas",
  authDomain: "kineticflix.firebaseapp.com",
  projectId: "kineticflix",
  storageBucket: "kineticflix.appspot.com",
  messagingSenderId: "750332861324",
  appId: "1:750332861324:web:89c06f1e349ee080e8d4a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const googleProvider=new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt:"select_account"
  });
export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,googleProvider);
export const db=getFirestore();
export const createAuthUserWithEmailAndPassword =async(email,password) =>{
    return await createUserWithEmailAndPassword(auth,email,password);
 
 }
 
 export const SignInAuthWithEmailAndPassword= async (email,password) =>{
     return await signInWithEmailAndPassword(auth,email,password)
 }
 
 export const SignOutUser= async () =>await (signOut(auth));

 export const creatUserDocumentFromAuth=async (userAuth,additionalInformation={})=>{
    const userDocRef=doc(db,'users',userAuth.uid)
    const userSnapshot= await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists())
    {
        const {displayName,email,photoURL}=userAuth;
        const createdAt=new Date();
        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                photoURL,
                ...additionalInformation
            });
        }catch(error){
            console.log(error.message ,"error creating the user")
        }
    } 
    return userDocRef;
    
};


export const CreateFavsFromAuth= async(userAuth,favs)=>{
    try{
        const FavsRef= doc(db,"favs",userAuth.uid);
        const FavsSnapshot=await getDoc(FavsRef);
        if(!FavsSnapshot.exists())
        {
            setDoc(FavsRef,{favs})
            return null;
        }
        else{
            return FavsSnapshot.data()["favs"]
        }
    }catch(error)
    {
        console.log("Cant get FavsData");
        return null;
    }
    
    }

export const UpdateFavsAtServer=async(favs,userAuth)=>{
    try{
        const FavsRef=doc(db,"favs",userAuth.uid);
        await setDoc(FavsRef,{favs})
    }catch(error)
    {
        console.log("Cant Update FavsData");
    }
}

export const onAuthStateChangedListener=(callback) =>{ 
    onAuthStateChanged(auth,callback)
}

export const getDisplayName=async (currentUser)=>{
    const DocRef=doc(db,"users",currentUser.uid)
    const name=((await getDoc(DocRef)).data().displayName);
    const photo=((await getDoc(DocRef)).data().photoURL);
    return [name,photo];

}