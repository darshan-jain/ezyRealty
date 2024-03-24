const properties = [
 

  
  
];


//filter feature - based on zones i.e North, South, West, Central, OMR & ECR
// Elastic Search
// - Function to map id and then iterate over the array using map function
// or pre-define it with diff data set - not recommended worst case scenario - nightmare


displayallProperties();

function displayallProperties(){
  let residentialDisplay = document.querySelector(".commercial-new");
  
  let innerHTML = '';

  if(properties.length == 0)
  {
    innerHTML += `<h2 style = "text-align: center; margin: 3%;font-weight: 600;">We'll come back with more<br>amazing properties soon! :) </h2>`;

  }
  else{
  properties.forEach(property => {
    innerHTML += `<div class="fp-property">
    <div class="row" style="margin: 20px;">
      <div class="col-sm-6">
        <img src="assets/general/logoEzyRealty.jpg" alt="propertyimage" style="width: 100%;"> 
      </div>
      <div class="col-sm-6">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Brand</th>
              <td scope="col">${property.brand}</td>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Location</th>
              <td>${property.location}</td>
              
            </tr>

            <tr>
            <th scope="row">Structure</th>
            <td>${property.structure}</td>
            
          </tr>
          <tr>
          <th scope="row">Size</th>
          <td>${property.size}</td>
          
        </tr>

        <tr>
              <th scope="row">Total Units Available</th>
              <td>${property.totalUnitsAvailable}</td>
            </tr>
            <tr>
            <th scope="row">Total Cost (in L)</th>
            <td>${property.price}</td>
          </tr>
            <tr>
              <th scope="row">Amenities</th>
              <td>${property.amenities}</td>
              
            </tr>
    
           
          
            <tr>
              <th scope="row">Car Parking</th>
              <td>${property.carParking}</td>
            </tr>
             
           
            
            

            <tr>
            <th scope="row">Status</th>
            <td>${property.status}</td>
          </tr>     
           
            
    
            
          </tbody>
        </table>
        
        <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/ezyrealty/schedule-your-site-visit?a2=CommercialRental - ${property.location}'});return false;"><button type="button" class="btn btn-dark">Schedule Your Site Visit</button></a>

      </div>

     




    </div>
    
    </div>
    
    <hr style="margin:2px 10px 2px 10px;">`;
  });
}

  residentialDisplay.innerHTML = innerHTML;
  
  
}




