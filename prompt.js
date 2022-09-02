console.log('prompt connected');
// alert('Ki khobor dosto')
const showAlert = () =>{
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
        alert('ki khobor dosto');
    }
}

const askSomething = () =>{
    const decision = confirm('Are you coming Picnic?')
    console.log(decision);
    if(decision === true){
        alert('dosto 500 tk bkash kor')
    }
    else{
        console.log('DGM !!! Door e giya mor')
    }
}


 const getUserInfo = () =>{
    const name = prompt('Tell us your name.')
    console.log(name);
    if(!!name){
        console.log('Welcome here', name);
    }
 }