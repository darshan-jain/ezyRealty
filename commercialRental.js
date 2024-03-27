const properties = [
  {id:"01",
  brand:"5th Square",
  location:"Shanthi Colony -  Anna nagar",
  structure:"Stilt +3",
  size:"1500",
  totalUnitsAvailable:"1",
  price:"0.9",
  amenities:"Car Park & Lift",
  carParking:"2",
  status:"Ready to Move in",},

  {id:"02",
  brand:"Local ",
  location:"Luz Church road",
  structure:"Base + 3",
  size:"2000",
  totalUnitsAvailable:"1",
  price:"0.75",
  amenities:"Car Park & Lift",
  carParking:"1",
  status:"Ready to Move in",},

  {id:"03",
  brand:"Local",
  location:"Anna nagar west ext",
  structure:"Stilt +3",
  size:"1500",
  totalUnitsAvailable:"3",
  price:"1.75",
  amenities:"Car Park & Lift",
  carParking:"2",
  status:"Under Construction",},

  {id:"04",
  brand:"Traventures",
  location:"Mogappair",
  structure:"Stilt +3",
  size:"2400",
  totalUnitsAvailable:"3",
  price:"1.5",
  amenities:"Car Park & Lift",
  carParking:"2",
  status:"Ready to Move in",},

  {id:"05",
  brand:"Traventures",
  location:"Virugambakkam",
  structure:"Stilt +3",
  size:"1800",
  totalUnitsAvailable:"3",
  price:"1.25",
  amenities:"Car Park & Lift",
  carParking:"2",
  status:"Ready to Move in",}
  
];


//filter feature - based on zones i.e North, South, West, Central, OMR & ECR
// Elastic Search
// - Function to map id and then iterate over the array using map function
// or pre-define it with diff data set - not recommended worst case scenario - nightmare


displayallProperties();

function displayallProperties(){
  let residentialDisplay = document.querySelector(".commercial-rental");
  
  let innerHTML = '';
  
  properties.forEach(property => {
    innerHTML += `<div class="fp-property">
    <div class="row" style="margin: 20px;">
      <div class="col-sm-6">
        <img src="assets/property/commercial/rental/${property.id}.png" alt="propertyimage" style="width: 100%;"> 
      </div>
      <div class="col-sm-6">
        <table class="table table-striped">
          <thead>
        
            <tr>
              <th scope="col">Brand</th>
              <td scope="col">${property.brand}</td>
              
            </tr>
          

          </thead>
          <tbody>`

            if(property.location != '')
          {
            innerHTML +=`
            <tr>
              <th scope="row">Location</th>
              <td>${property.location}</td>
              
            </tr>`;
          }
          if(property.structure != '')
          {
            innerHTML +=`
            <tr>
            <th scope="row">Structure</th>
            <td>${property.structure}</td>
            
          </tr>`;
          }
          if(property.size != '')
          {
            innerHTML +=`
          <tr>
          <th scope="row">Size</th>
          <td>${property.size}</td>
          
        </tr>`;
          }
          if(property.price != '')
          {
            innerHTML +=`
            <tr>
            <th scope="row">Total Cost (in L)</th>
            <td>${property.price}</td>
          </tr>`;
          }
          if(property.amenities != '')
          {
            innerHTML +=`
            <tr>
              <th scope="row">Amenities</th>
              <td>${property.amenities}</td>
              
            </tr>`;
          }

          if(property.carParking != '')
          {
            innerHTML +=`
            <tr>
              <th scope="row">Car Parking</th>
              <td>${property.carParking}</td>
            </tr>`;
          }
          if(property.status != '')
          {
            innerHTML +=`
            <tr>
            <th scope="row">Status</th>
            <td>${property.status}</td>
          </tr>  `;
          }
          innerHTML += `   
           
            
    
            
          </tbody>
        </table>
        
        <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/ezyrealty/schedule-your-site-visit?a2=CommercialRental - ${property.location}'});return false;"><button type="button" class="btn btn-dark">Schedule Your Site Visit</button></a>

      </div>

     




    </div>
    
    </div>
    
    <hr style="margin:2px 10px 2px 10px;">`;
  });

  residentialDisplay.innerHTML = innerHTML;
  
  
}




