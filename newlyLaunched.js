const properties =[
  {
    id: "01",
    brand: "Traventures",
    project: "Luxe",
    location: "Saligramam",
    area:"Logaiah Colony",
    structure:"Stilt+5",
    twobhk:"1033/1134",
    threebhk:"1240-2428",
    fourbhk:"",
    facing:"South/North/East",
    totalUnitsAvailable: "2/13",
    uds: "311/342/373-735",
    baserate: "10000/10500",
    amenities:"Lift/ Car Parking",
    handing:"June 2025",
    imageLocation:"01.jpeg",

  },

 

{id:"07",
brand:"Sri Priya Construction",
project:"EZY001",
location:"Saligramam",
area:"",
structure:"",
twobhk:"",
threebhk:"",
fourbhk:"",
facing:"",
totalUnitsAvailable:"",
uds:"",
baserate:"",
amenities:"",
handing:"",
imageLocation:"",},

{id:"08",
brand:"TVH",
project:"",
location:"Saligramam",
area:"Near Arcot Road",
structure:"Stilt + 4",
twobhk:"1183 / 1201 ",
threebhk:"",
fourbhk:"",
facing:"East & South",
totalUnitsAvailable:"12",
uds:"",
baserate:"10500",
amenities:"LIFT / CAR PARK",
handing:"45352",
imageLocation:"",},

{id:"09",
brand:"Excel construction co",
project:"Mathura Apartment",
location:"Virgambakkam ",
area:"Barathi Dasan St, Baskar Colony",
structure:"Stilt +3",
twobhk:"1066",
threebhk:"1243",
fourbhk:"",
facing:"South & North",
totalUnitsAvailable:"",
uds:"",
baserate:"10500",
amenities:"LIFT / CAR PARK",
handing:"Sept 2024",
imageLocation:"",},




];

//filter feature - based on zones i.e North, South, West, Central, OMR & ECR
// Elastic Search
// - Function to map id and then iterate over the array using map function
// or pre-define it with diff data set - not recommended worst case scenario - nightmare


displayallProperties();

function displayallProperties(){
  let residentialDisplay = document.querySelector(".new-launch");
  
  let innerHTML = '';
  
  properties.forEach(property => {
    innerHTML += `<div class="fp-property">
    <div class="row" style="margin: 20px;">
      <div class="col-sm-6">
        <img src="assets/property/residential/newSale/${property.id}.png" alt="propertyimage" style="width: 100%;"> 
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
              <th scope="row">Area</th>
              <td>${property.area}</td>
              
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
              <th scope="row">Base Rate per sq ft</th>
              <td>${property.baserate}</td>
            </tr>
            <tr>
              <th scope="row">Amenities</th>
              <td>${property.amenities}</td>
            </tr>
            <tr>
              <th scope="row">Handing Over</th>
              <td>${property.handing}</td>
            </tr>
           
    
            
          </tbody>
        </table>
        
        <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/ezyrealty/schedule-your-site-visit?a2=ResidentialNewSale - ${property.project}'});return false;"><button type="button" class="btn btn-dark">Schedule Your Site Visit</button></a>

      </div>

     




    </div>
    
    </div>
    
    <hr style="margin:2px 10px 2px 10px;">`;
  });

  residentialDisplay.innerHTML = innerHTML;
  
  
}




