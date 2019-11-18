$('document').ready(()=>
{
    $('#btn1').click(()=>{
        console.log('Button 1 Clicked!');
        $('#btn2').show();
        $('#btn1').hide();
        $('#btn2').css('border-color' , "white")
        $('#body').css('background-color' , "black")
        $('#html').css('color' , "white")
        $('#heading').css('color' , "white")
        $('#css').css('color' , "white")
        $('#js').css('color' , "white")
        $('.img').css('filter' , "grayscale(100%)")

    });
    $('#btn2').click(()=>{
        console.log('Button 2 Clicked!');
        $('#btn1').show();
        $('#btn2').hide();
        $('#body').css('background-color' , "white")
        $('#html').css('color' , "#E44D26")
        $('#css').css('color' , "#2299f8")
        $('#js').css('color' , "#DAB92D")
        $('.img').css('filter' , "grayscale(0%)")
        $('#heading').css('color' , "black")


    });
})