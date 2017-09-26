
function grabWebcam(){
    return new Promise( ( resolve, reject ) => {
        if( !navigator.mediaDevices.getUserMedia )
            reject( new Error( 'UserMedia not supported by your browser' ) );
        
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        })
        .then( ( stream ) => {
            resolve( stream );
        })
        .catch( ( error ) => {
            reject( error );
        });
    });
}    