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
  
  let innerHTML = '<div class="row">';
  
  properties.forEach(property => {
    innerHTML += `
    
    <div class="col-sm-12 col-md-4 col-lg-4 mb-4">
            <div class="card" style="width: 100%; margin: auto;">
                <img src="assets/property/commercial/rental/${property.id}.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title"> ${property.brand} - 📍 ${property.location}</h4>
                    <h6 class="card-text">${property.structure}| ${property.size} sq. ft.</h6>
                    <p class="card-text">Amenities: ${property.amenities}</p>
                    <p class="card-text">Status: ${property.status}</p>
                    <h6 class="card-text">Starting from Rs. ${property.price} Lakhs</h6>
                    <div class="buttonsprop" style="display: flex; justify-content: space-between;">
                        <a href="https://wa.me/919176133166?text=Hi%20I%20was%20browsing%20your%20website%20and%20I%20am%20Interested%20in%20CommercialRental%20-%20${property.location}%20.%20Please%20send%20more%20details."  target="_blank" class="btn btn-success" style="margin: 1%;">Enquire on Whatsapp</a>
                        <a href="#" class="btn btn-outline-secondary" style="margin: 1%;" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/ezyrealty/schedule-your-site-visit?a2=CommercialRental - ${property.location}'});return false;">Schedule Your Site Visit</a>
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




