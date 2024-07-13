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
  
  let innerHTML = '<div class="row">';
  
  properties.forEach(property => {
    innerHTML += `
    
    <div class="col-sm-12 col-md-4 col-lg-4 mb-4">
            <div class="card" style="width: 100%; margin: auto;">
                <img src="assets/property/residential/rental/${property.id}.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title"> ${property.brand}:${property.project} - 📍 ${property.location}</h4>
                    <h6 class="card-text">${property.apvil} - ${property.structure} | 
                    `;
                    
                    if(property.twobhk != '')
                      {
                        innerHTML+=`
                    
                    2BHK - ${property.twobhk} sq. ft.`;
                       }
                       if(property.threebhk != '')
                        {
                          innerHTML+=`
                      
                      3BHK - ${property.threebhk} sq. ft.`;
                         }
                         if(property.fourbhk != '')
                          {
                            innerHTML+=`
                        
                        4BHK - ${property.fourbhk} sq. ft.`;
                           }
                           innerHTML+=`
                        </h6>
                    <p class="card-text">Amenities: ${property.amenities}</p>
                    <p class="card-text">UDS: ${property.uds} | Car Parking: ${property.carPark} | Facing: ${property.facing}</p>
                    <h6 class="card-text">Starting from Rs. ${property.rentMaintenance} (in k)</h6>
                    <div class="buttonsprop" style="display: flex; justify-content: space-between;">
                        <a href="https://wa.me/919176133166?text=Hi%20I%20was%20browsing%20your%20website%20and%20I%20am%20Interested%20in%20ResidentialRental%20-%20${property.location}%20.%20Please%20send%20more%20details."  target="_blank" class="btn btn-success" style="margin: 1%;">Enquire on Whatsapp</a>
                        <a href="#" class="btn btn-outline-secondary" style="margin: 1%;" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/ezyrealty/schedule-your-site-visit?a2=ResidentialRental - ${property.location}'});return false;">Schedule Your Site Visit</a>
                    </div>
                </div>
            </div>
        </div>
       `
        
  });

  innerHTML += `
            
   </div>`;
  residentialDisplay.innerHTML = innerHTML;
  
  
}


