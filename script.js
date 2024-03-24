$(document).ready(function () { 
  $('.dropdown').hover(function () { 
      $(this).find('.dropdown-menu') 
         .stop(true, true).delay(100).fadeIn(300); 
  }, function () { 
      $(this).find('.dropdown-menu') 
        .stop(true, true).delay(100).fadeOut(300); 
  }); 
}); 


scheduleAppoinment();

function scheduleAppoinment(){


let scheduleElement = document.querySelector('.schedule-appointment');
scheduleElement.innerHTML = `<a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/ezyrealty/schedule-your-site-visit?a2=Consultation'});return false;"><button type="button" class="btn btn-dark">Schedule a Consultation Call</button></a>
`;

}

