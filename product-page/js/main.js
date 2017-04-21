$(document).ready(function() {
//   $("h2").click(function() {  
//          $(this).text("welcome");
//         });
//          $("img").hover(function() {
//              alert("overlay");
//           });
        $('#subscirbe').submit(function(event) {
            var formData = $(this).seralize();
        }); 
        
     $.ajax({ 
         type   :'POST',
         url    :'https://web2-product-page.thriftyapp.com/subscribers',
         data   :formData,
         dataType   :'json'
     }).done(function(data) {
         console.log(data);
     
         
     }).fail(function(data) {
         console.log(data);  
          var errorMessage = JSON.parse(data.responseText).email[0];;
          
    function clicked() {
       if (confirm('Do you want to submit?')) {
           yourformelement.submit();
       } else {
           return false;
       }
    }
          
    event.preventDefault();
    
     });
}); 

 