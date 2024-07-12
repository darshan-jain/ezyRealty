const properties = [
  {id:"01",
  brand:"Local",
  project:"",
  location:"Thirvallur ",
  land:"2400 Sq ft",
  facing:"East",
  price:"55 L",
  landMark:"From Railway station 4 km",
  totalUnitsAvailable:"1",
  imageLocation:"",}
];


//filter feature - based on zones i.e North, South, West, Central, OMR & ECR
// Elastic Search
// - Function to map id and then iterate over the array using map function
// or pre-define it with diff data set - not recommended worst case scenario - nightmare


displayallProperties();

function displayallProperties(){
  let residentialDisplay = document.querySelector(".land-resale");
  
  
  let innerHTML = '<div class="row">';
  
  properties.forEach(property => {
    innerHTML += `
    
    <div class="col-sm-12 col-md-8 col-lg-8 mb-4">
            <div class="card" style="width: 100%; margin: auto;">
                <img src="assets/general/hd3.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title"> ${property.brand} - 📍 ${property.location}</h4>
                    <h6 class="card-text">${property.land} sq. ft. | ${property.facing} Facing</h6>
                    <p class="card-text">Landmark: ${property.landMark}</p>
                    <h6 class="card-text">Starting from Rs. ${property.price}</h6>
                    <div class="buttonsprop" style="display: flex; justify-content: space-between;">
                        <a href="https://wa.me/919176133166?text=Hi%20I%20was%20browsing%20your%20website%20and%20I%20am%20Interested%20in%20LandResale%20-%20${property.location}%20.%20Please%20send%20more%20details."  target="_blank" class="btn btn-success" style="margin: 1%;">Enquire on Whatsapp</a>
                        <a href="#" class="btn btn-outline-secondary" style="margin: 1%;" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/ezyrealty/schedule-your-site-visit?a2=LandNewSale - ${property.location}'});return false;">Schedule Your Site Visit</a>
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




