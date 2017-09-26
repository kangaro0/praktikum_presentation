
Reveal.addEventListener( 'fragmentshown', ( event ) => {
    let element = event.fragment;

    if( element.classList.contains( 'shake' ) ){
        element.classList.add('shake-it');
        
        setTimeout( function(){
            element.classList.remove( 'shake-it' )
        }, 820 );
    }
});

Reveal.addEventListener( 'fragmenthidden', ( event ) => {
    let element = event.fragment;

});

