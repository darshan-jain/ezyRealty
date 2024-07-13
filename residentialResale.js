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
  price:"1.9",
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
  price:"3.1",
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
  
  let innerHTML = '<div class="row">';
  
  properties.forEach(property => {
    innerHTML += `
    
    <div class="col-sm-12 col-md-4 col-lg-4 mb-4">
            <div class="card" style="width: 100%; margin: auto;">
                <img src="assets/property/residential/resale/${property.id}.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title"> ${property.brand}:${property.project} - 📍 ${property.location}</h4>
                    <h6 class="card-text">${property.structure} | 
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
                    <p class="card-text">UDS: ${property.uds} | Car Parking: ${property.carPark}</p>
                    <h6 class="card-text">Starting from Rs. ${property.price} Cr</h6>
                    <div class="buttonsprop" style="display: flex; justify-content: space-between;">
                        <a href="https://wa.me/919176133166?text=Hi%20I%20was%20browsing%20your%20website%20and%20I%20am%20Interested%20in%20ResidentialResale%20-%20${property.location}%20.%20Please%20send%20more%20details."  target="_blank" class="btn btn-success" style="margin: 1%;">Enquire on Whatsapp</a>
                        <a href="#" class="btn btn-outline-secondary" style="margin: 1%;" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/ezyrealty/schedule-your-site-visit?a2=ResidentialResale - ${property.location}'});return false;">Schedule Your Site Visit</a>
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


