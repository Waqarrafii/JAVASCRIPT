onmessage = (e) =>{

    console.log(e.data)
    let res = 0;
    for (let i = 1 ; i <= 10; i++){
        

        res += i ;
    }

    postMessage(res);
}