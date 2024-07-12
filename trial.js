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
  
  let innerHTML = '';
  
  properties.forEach(property => {
    innerHTML += `<div class="fp-property">
    <div class="row" style="margin: 20px;">
      <div class="col-sm-6">
        <img src="assets/general/logoEzyRealty.jpg" style="width: 100%;"> 
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
              <th scope="row">Land</th>
              <td>${property.land}</td>
              
            </tr>
    
           
          
            <tr>
              <th scope="row">Facing</th>
              <td>${property.facing}</td>
            </tr>
             
           
            
            <tr>
              <th scope="row">Total Cost</th>
              <td>${property.price}</td>
            </tr>

            <tr>
            <th scope="row">Land Mark</th>
            <td>${property.landMark}</td>
          </tr>     
           
           
          </tbody>
        </table>
        
        <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/ezyrealty/schedule-your-site-visit?a2=LandResale - ${property.project}'});return false;"><button type="button" class="btn btn-dark">Schedule Your Site Visit</button></a>

      </div>

     




    </div>
    
    </div>
    
    <hr style="margin:2px 10px 2px 10px;">`;
  });

  residentialDisplay.innerHTML = innerHTML;
  
  
}




