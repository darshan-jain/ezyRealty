const properties = [
  {id:"01",
  brand:"Traventures",
  project:"Atrium",
  location:"Saligramam",
  structure:"Stilt + 3",
  twobhk:"",
  threebhk:"1458",
  fourbhk:"",
  facing:"South",
  totalUnitsAvailable:"1",
  uds:"0",
  price:"1.75",
  amenities:"Lift & Car park",
  carPark:"1",
  imageLocation:"",},
  {id:"02",
  brand:"Kalpatharu",
  project:"Yuga Kalpatharu",
  location:"Koyambedu",
  structure:"Stilt + 4",
  twobhk:"",
  threebhk:"1602",
  fourbhk:"",
  facing:"North West",
  totalUnitsAvailable:"1",
  uds:"931",
  price:"1.48",
  amenities:"Lift & Car park",
  carPark:"1",
  imageLocation:"",},

  {id:"03",
  brand:"Pushkar ",
  project:"Sunshine Villa",
  location:"Anna Nagar - Behind jesi Moses School",
  structure:"Stilt + 4",
  twobhk:"",
  threebhk:"1364",
  fourbhk:"",
  facing:"South",
  totalUnitsAvailable:"1",
  uds:"764",
  price:"1.9 Cr",
  amenities:"Lift & Car park",
  carPark:"2",
  imageLocation:"",},
  
  {id:"04",
  brand:"Sreerosh",
  project:" Cassia",
  location:"Kilpauk - Halls Road",
  structure:"Stilt + 4",
  twobhk:"",
  threebhk:"1755",
  fourbhk:"",
  facing:"East",
  totalUnitsAvailable:"1",
  uds:"1000",
  price:"3.1 Cr",
  amenities:"Lift & Car park",
  carPark:"2",
  imageLocation:"",},

  {id:"05",
  brand:"CASA GRAND",
  project:"Aristo",
  location:"Alandur",
  structure:"Stilt + 4",
  twobhk:"1167",
  threebhk:"",
  fourbhk:"",
  facing:"East",
  totalUnitsAvailable:"1",
  uds:"608",
  price:"1.45",
  amenities:"Club House & Swimming Pool",
  carPark:"1",
  imageLocation:"",},

  {id:"06",
  brand:"Traventures",
  project:"Traventures Ventures garden",
  location:"Ayanambakkam",
  structure:"",
  twobhk:"",
  threebhk:"",
  fourbhk:"2200",
  facing:"North",
  totalUnitsAvailable:"1",
  uds:"",
  price:"0.98",
  amenities:"Park",
  carPark:"1",
  imageLocation:"",},

  {id:"07",
  brand:"CASA GRAND",
  project:"Tudor",
  location:"Mogappair",
  structure:"Stilt + 8",
  twobhk:"999",
  threebhk:"",
  fourbhk:"",
  facing:"North",
  totalUnitsAvailable:"1",
  uds:"656",
  price:"1.05",
  amenities:"Club House & Swimming Pool",
  carPark:"1",
  imageLocation:"",},

  {id:"08",
  brand:"CASA GRAND",
  project:"Tudor",
  location:"Mogappair",
  structure:"Stilt + 8",
  twobhk:"",
  threebhk:"1947",
  fourbhk:"",
  facing:"North",
  totalUnitsAvailable:"1",
  uds:"",
  price:"2",
  amenities:"Club House & Swimming Pool",
  carPark:"2",
  imageLocation:"",},

  {id:"09",
  brand:"Local",
  project:"Local",
  location:"Anna Nagar West Ext - Imayam Colony ",
  structure:"",
  twobhk:"",
  threebhk:"",
  fourbhk:"",
  facing:"East",
  totalUnitsAvailable:"1",
  uds:"",
  price:"1.45",
  amenities:"",
  carPark:"",
  imageLocation:"",},

  {id:"10",
  brand:"Local",
  project:"Local",
  location:"Thirvallur ",
  structure:"",
  twobhk:"",
  threebhk:"",
  fourbhk:"",
  facing:"East",
  totalUnitsAvailable:"1",
  uds:"",
  price:"0.55",
  amenities:"",
  carPark:"",
  imageLocation:"",},

  {id:"11",
  brand:"CASA GRAND",
  project:"Irene ",
  location:"Manapakkam",
  structure:"Still + 4",
  twobhk:"964",
  threebhk:"",
  fourbhk:"",
  facing:"North / South",
  totalUnitsAvailable:"2",
  uds:"",
  price:"0.85",
  amenities:"Club House & Swimming Pool",
  carPark:"1",
  imageLocation:"",},

  {id:"12",
  brand:"CASA GRAND",
  project:"Utopia",
  location:"Manapakkam",
  structure:"Still + 4",
  twobhk:"",
  threebhk:"1683",
  fourbhk:"",
  facing:"East",
  totalUnitsAvailable:"1",
  uds:"",
  price:"1.25",
  amenities:"Club House & Swimming Pool",
  carPark:"1",
  imageLocation:"",},

  {id:"13",
  brand:"CASA GRAND",
  project:"Utopia",
  location:"Manapakkam",
  structure:"Still + 4",
  twobhk:"",
  threebhk:"1683",
  fourbhk:"",
  facing:"East",
  totalUnitsAvailable:"1",
  uds:"",
  price:"1.25",
  amenities:"Club House & Swimming Pool",
  carPark:"1",
  imageLocation:"",},

  {id:"14",
  brand:"OMR ",
  project:"Local",
  location:"Cheminjerry",
  structure:"Stilt + 3",
  twobhk:"",
  threebhk:"1351",
  fourbhk:"",
  facing:"East",
  totalUnitsAvailable:"",
  uds:"750",
  price:"0.6",
  amenities:"Lift & Car park",
  carPark:"1",
  imageLocation:"",}

  
];

//filter feature - based on zones i.e North, South, West, Central, OMR & ECR
// Elastic Search
// - Function to map id and then iterate over the array using map function
// or pre-define it with diff data set - not recommended worst case scenario - nightmare


displayallProperties();

function displayallProperties(){
  let residentialDisplay = document.querySelector(".residential-resale");
  
  let innerHTML = '';
  
  properties.forEach(property => {
    innerHTML += `<div class="fp-property">
    <div class="row" style="margin: 20px;">
      <div class="col-sm-6">
        <img src="assets/property/residential/resale/${property.id}.png" alt="propertyimage" style="width: 100%;"> 
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
              <th scope="row">Project</th>
              <td>${property.project}</td>
              
            </tr>
    
            <tr>
              <th scope="row">Location</th>
              <td>${property.location}</td>
              
            </tr>
    
            <tr>
              <th scope="row">Structure</th>
              <td>${property.structure}</td>
              
            </tr>
    
            <tr>
              <th scope="row">2BHK</th>
              <td>${property.twobhk}</td>
              
            </tr>
    
            <tr>
              <th scope="row">3BHK</th>
              <td>${property.threebhk}</td>
              
            </tr>
    
            <tr>
              <th scope="row">4BHK</th>
              <td>${property.fourbhk}</td>
            </tr>
            <tr>
              <th scope="row">Facing</th>
              <td>${property.facing}</td>
            </tr>
           
            <tr>
              <th scope="row">Total Units Available</th>
              <td>${property.totalUnitsAvailable}</td>
            </tr>
            <tr>
              <th scope="row">UDS</th>
              <td>${property.uds}</td>
            </tr>
            <tr>
              <th scope="row">Total Cost</th>
              <td>${property.price} (in Cr.)</td>
            </tr>
            <tr>
              <th scope="row">Amenities</th>
              <td>${property.amenities}</td>
            </tr>
            <tr>
              <th scope="row">Car Parking</th>
              <td>${property.carPark}</td>
            </tr>
           
    
            
          </tbody>
        </table>
        
        <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/ezyrealty/schedule-your-site-visit?a2=ResidentialResale - ${property.project}'});return false;"><button type="button" class="btn btn-dark">Schedule Your Site Visit</button></a>

      </div>

     




    </div>
    
    </div>
    
    <hr style="margin:2px 10px 2px 10px;">`;
  });

  residentialDisplay.innerHTML = innerHTML;
  
  
}




