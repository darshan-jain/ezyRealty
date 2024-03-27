const properties = [
  {
    id:"01",
brand:"Local",
project:"Vasantham",
location:"Anna Nagar",
apvil:"Apartment",
structure:"Still + 3",
twobhk:"",
threebhk:"1490",
fourbhk:"",
facing:"North ",
furnished:"Fully",
totalUnitsAvailable:"1",
uds:"",
rentMaintenance:"60 + 5",
amenities:"Lift & Car Park",
imageLocation: "",
  },

  {id:"02",
  brand:"Traventures",
  project:"",
  location:"Saligramam",
  apvil:"Apartment",
  structure:"Still + 3",
  twobhk:"",
  threebhk:"1450",
  fourbhk:"",
  facing:"South",
  furnished:"Semi",
  totalUnitsAvailable:"2",
  uds:"",
  rentMaintenance:"35 + 3",
  amenities:"Lift & Car Park",
  imageLocation:"",},

  {id:"03",
  brand:"Local ",
  project:"",
  location:"Mogappair",
  apvil:"Apartment",
  structure:"Still + 2",
  twobhk:"",
  threebhk:"1290",
  fourbhk:"",
  facing:"North",
  furnished:"Semi",
  totalUnitsAvailable:"1",
  uds:"",
  rentMaintenance:"19 + 1",
  amenities:"",
  imageLocation:"",}
];

//filter feature - based on zones i.e North, South, West, Central, OMR & ECR
// Elastic Search
// - Function to map id and then iterate over the array using map function
// or pre-define it with diff data set - not recommended worst case scenario - nightmare


displayallProperties();

function displayallProperties(){
  let residentialDisplay = document.querySelector(".residential-rental");
  
  let innerHTML = '';
  
  properties.forEach(property => {
    innerHTML += `<div class="fp-property">
    <div class="row" style="margin: 20px;">
      <div class="col-sm-6">
        <img src="assets/property/residential/rental/${property.id}.png" alt="propertyimage" style="width: 100%;"> 
      </div>
      <div class="col-sm-6">
        <table class="table table-striped">
          <thead>`
          if(property.brand != '')
          {
            innerHTML+=`
            <tr>
              <th scope="col">Brand</th>
              <td scope="col">${property.brand}</td>
              
            </tr>
          </thead>`;
          }
          if(property.project != '')
          {
            innerHTML+=`
          <tbody>
            <tr>
              <th scope="row">Project</th>
              <td>${property.project}</td>
              
            </tr>`;
          }

          if(property.location != '')
          {
            innerHTML+=`
    
            <tr>
              <th scope="row">Location</th>
              <td>${property.location}</td>
              
            </tr>`;
          }

          if(property.apvil != '')
          {
            innerHTML+=`
    
            <tr>
              <th scope="row">Apartment/ Villa</th>
              <td>${property.apvil}</td>
              
            </tr>`;
          }

          if(property.structure != '')
          {
            innerHTML+=`
    
            <tr>
              <th scope="row">Structure</th>
              <td>${property.structure}</td>
              
            </tr>`;
          }
          if(property.twobhk != '')
          {
            innerHTML+=`
    
            <tr>
              <th scope="row">2BHK</th>
              <td>${property.twobhk}</td>
              
            </tr>`;
          }
          if(property.threebhk != '')
          {
            innerHTML+=`
    
            <tr>
              <th scope="row">3BHK</th>
              <td>${property.threebhk}</td>
              
            </tr>`;
          }
          if(property.fourbhk != '')
          {
            innerHTML+=`
            <tr>
              <th scope="row">4BHK</th>
              <td>${property.fourbhk}</td>
            </tr>`;
          }
          if(property.facing != '')
          {
            innerHTML+=`
            <tr>
              <th scope="row">Facing</th>
              <td>${property.facing}</td>
            </tr>`;
          }
          if(property.furnished != '')
          {
            innerHTML+=`
            <tr>
              <th scope="row">Furnished</th>
              <td>${property.furnished}</td>
            </tr>`;
          }
          if(property.uds != '')
          {
            innerHTML+=`
            
            <tr>
              <th scope="row">UDS</th>
              <td>${property.uds}</td>
            </tr>`;
          }
          if(property.rentMaintenance != '')
          {
            innerHTML+=`
            <tr>
              <th scope="row">Rent + Maintenance</th>
              <td>${property.rentMaintenance} (in k)</td>
            </tr>`;
          }
          if(property.amenities != '')
          {
            innerHTML+=`
            <tr>
              <th scope="row">Amenities</th>
              <td>${property.amenities}</td>
            </tr>`;
          }
          innerHTML += `
           
    
            
          </tbody>
        </table>
        
        <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/ezyrealty/schedule-your-site-visit?a2=ResidentialRental - ${property.project}'});return false;"><button type="button" class="btn btn-dark">Schedule Your Site Visit</button></a>

      </div>

     




    </div>
    
    </div>
    
    <hr style="margin:2px 10px 2px 10px;">`;
  });

  residentialDisplay.innerHTML = innerHTML;
  
  
}




