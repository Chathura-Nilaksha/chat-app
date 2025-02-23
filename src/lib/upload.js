import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const storage = getStorage();
const storageRef = ref(storage, 'images/rivers.jpg');

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);

// Explain this code

// This code snippet uses Firebase Storage to upload a file.
// 
// It first initializes a storage reference (storageRef) to a specific 
// location ('images/rivers.jpg') within the storage bucket. 
//
// Then, it initiates an upload task (uploadTask) with uploadBytesResumable 
// and attaches three observers using uploadTask.on. 
// These observers track the upload's state_changed (progress, paused, running), 
// handle errors, and finally, upon successful completion, retrieve and log the 
// file's publicly accessible download URL using getDownloadURL. 
// 
// The confusing bit is that uploadBytesResumable only initiates the upload, and 
// then the progress, success, failure are all handled by uploadTask.on that takes 
// three functions. 
// 
// Another confusing part is the use of uploadTask.snapshot.ref within 
// getDownloadURL. 
// It is used because, uploadTask contains the snapshot of the storage at the 
// moment when the upload is done, and this snapshot has a ref property which 
// references to the file in the storage. 
// This is used to get the file's download url.
