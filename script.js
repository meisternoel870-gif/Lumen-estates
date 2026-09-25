/* =========================================================
   LUMEN ESTATES
   ========================================================= */


const properties = [

{
id:1,
title:"Casa Aurelia",
location:"Maputo · Sommerschield",
type:"Villa",
status:"For Sale",
mode:"buy",
price:620000,
bedrooms:4,
baths:3,
area:420,
year:2022,
featured:true,
description:"A contemporary private residence defined by generous proportions, natural light and seamless indoor-outdoor living.",
images:[
"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90",
"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
]
},

{
id:2,
title:"The Linden Residence",
location:"Lisbon · Estrela",
type:"Apartment",
status:"For Sale",
mode:"buy",
price:485000,
bedrooms:3,
baths:2,
area:148,
year:2019,
featured:true,
description:"A refined city apartment combining historic character with contemporary finishes and carefully considered interiors.",
images:[
"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=90",
"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"
]
},

{
id:3,
title:"Cliff House",
location:"Cape Town · Clifton",
type:"House",
status:"For Sale",
mode:"buy",
price:890000,
bedrooms:5,
baths:4,
area:510,
year:2021,
featured:true,
description:"An architectural coastal residence with expansive views, generous entertaining spaces and private outdoor areas.",
images:[
"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90",
"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
"https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=85"
]
},

{
id:4,
title:"Mara Penthouse",
location:"Maputo · Polana",
type:"Penthouse",
status:"For Sale",
mode:"buy",
price:745000,
bedrooms:4,
baths:3,
area:290,
year:2023,
featured:true,
description:"A sophisticated penthouse with panoramic city views, private terraces and understated contemporary interiors.",
images:[
"https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1600&q=90",
"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
]
},

{
id:5,
title:"Oak Garden House",
location:"Lisbon · Cascais",
type:"House",
status:"For Sale",
mode:"buy",
price:680000,
bedrooms:4,
baths:3,
area:350,
year:2018,
featured:false,
description:"A warm family home surrounded by mature gardens and designed around relaxed indoor and outdoor living.",
images:[
"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=90",
"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85",
"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
]
},

{
id:6,
title:"The Atelier",
location:"Cape Town · De Waterkant",
type:"Apartment",
status:"For Rent",
mode:"rent",
price:3200,
bedrooms:2,
baths:2,
area:110,
year:2024,
featured:false,
description:"A beautifully finished apartment in a walkable neighborhood close to restaurants, galleries and the waterfront.",
images:[
"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90",
"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85"
]
},

{
id:7,
title:"Palm Court",
location:"Maputo · Sommerschield",
type:"Apartment",
status:"For Rent",
mode:"rent",
price:2400,
bedrooms:3,
baths:2,
area:165,
year:2020,
featured:false,
description:"Bright three-bedroom residence with generous living areas, secure parking and landscaped communal gardens.",
images:[
"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90",
"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
]
},

{
id:8,
title:"Casa Sol",
location:"Lisbon · Alfama",
type:"House",
status:"For Sale",
mode:"buy",
price:395000,
bedrooms:2,
baths:2,
area:125,
year:2017,
featured:false,
description:"Character-filled urban home with original details, warm materials and a carefully restored interior.",
images:[
"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=90",
"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
]
},

{
id:9,
title:"Ocean House",
location:"Cape Town · Camps Bay",
type:"Villa",
status:"For Sale",
mode:"buy",
price:1250000,
bedrooms:6,
baths:5,
area:620,
year:2020,
featured:true,
description:"A dramatic coastal villa created for entertaining, with sweeping ocean views and expansive terraces.",
images:[
"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=90",
"https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=85",
"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
]
},

{
id:10,
title:"Nera Loft",
location:"Lisbon · Chiado",
type:"Apartment",
status:"For Rent",
mode:"rent",
price:2800,
bedrooms:2,
baths:2,
area:135,
year:2022,
featured:false,
description:"A high-ceilinged loft apartment with dramatic windows, natural materials and a refined urban atmosphere.",
images:[
"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90",
"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
]
},

{
id:11,
title:"The Olive Estate",
location:"Maputo · Sommerschield",
type:"House",
status:"For Sale",
mode:"buy",
price:510000,
bedrooms:5,
baths:4,
area:460,
year:2016,
featured:false,
description:"A private family estate with mature landscaping, generous entertaining spaces and a calm residential setting.",
images:[
"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=90",
"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
"https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=85"
]
},

{
id:12,
title:"Aurelia Residence",
location:"Cape Town · Sea Point",
type:"Penthouse",
status:"For Rent",
mode:"rent",
price:4200,
bedrooms:3,
baths:3,
area:210,
year:2024,
featured:false,
description:"A contemporary penthouse with rooftop entertaining space and easy access to the Atlantic seafront.",
images:[
"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=90",
"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
]
}

];


/* =========================================================
   FAVORITES
   ========================================================= */

let favorites =
JSON.parse(localStorage.getItem("lumenFavorites") || "[]");


function saveFavorites(){

localStorage.setItem(
"lumenFavorites",
JSON.stringify(favorites)
);

}


function updateFavoriteCount(){

document.querySelectorAll("#favoriteCount")
.forEach(el => {
el.textContent = favorites.length;
});

}


updateFavoriteCount();


function toggleFavorite(id){

if(favorites.includes(id)){

favorites =
favorites.filter(item => item !== id);

}else{

favorites.push(id);

}

saveFavorites();
updateFavoriteCount();

renderCurrentProperties();

}


/* =========================================================
   PROPERTY CARD
   ========================================================= */

function propertyCard(property){

const saved =
favorites.includes(property.id);


return `

<article class="property-card">

<a href="property.html?id=${property.id}">

<div class="property-image">

<span class="property-tag">
${property.status}
</span>

<img
src="${property.images[0]}"
alt="${property.title}"
loading="lazy"
>

</div>

</a>


<button
class="favorite-btn ${saved ? "saved" : ""}"
data-favorite="${property.id}"
title="Save property"
>
${saved ? "♥" : "♡"}
</button>


<div class="property-info">

<div class="property-top">

<h3>
${property.title}
</h3>

<span class="property-price">
${formatPrice(property)}
</span>

</div>

<p class="property-location">
${property.location}
</p>

<div class="property-meta">

<span>
${property.bedrooms} beds
</span>

<span>
${property.baths} baths
</span>

<span>
${property.area} m²
</span>

</div>

</div>

</article>

`;

}


function formatPrice(property){

if(property.mode === "rent"){

return "€" +
property.price.toLocaleString() +
"/mo";

}

return "€" +
property.price.toLocaleString();

}


/* =========================================================
   RENDER PROPERTY LIST
   ========================================================= */

function renderProperties(
container,
list
){

if(!container) return;

container.innerHTML =
list.map(propertyCard).join("");


container
.querySelectorAll("[data-favorite]")
.forEach(button => {

button.addEventListener(
"click",
event => {

event.preventDefault();

toggleFavorite(
Number(button.dataset.favorite)
);

}
);

});

}


function renderCurrentProperties(){

const container =
document.querySelector("#propertyResults");

if(!container) return;

let list =
window.lumenFilteredProperties ||
properties;

renderProperties(
container,
list
);

}


/* =========================================================
   HOME
   ========================================================= */

const featured =
document.querySelector("#featuredProperties");


if(featured){

renderProperties(
featured,
properties
.filter(item => item.featured)
.slice(0,6)
);

}


/* =========================================================
   PROPERTY SEARCH
   ========================================================= */

const propertyResults =
document.querySelector("#propertyResults");


if(propertyResults){

let mode = "all";


function applyFilters(){

const location =
(document.querySelector("#filterLocation")?.value || "")
.toLowerCase();


const type =
document.querySelector("#filterType")?.value || "All";


const bedrooms =
Number(
document.querySelector("#filterBedrooms")?.value || 0
);


const maxPrice =
Number(
document.querySelector("#filterPrice")?.value || 0
);


let result =
properties.filter(property => {

const matchesMode =
mode === "all" ||
property.mode === mode;


const matchesLocation =
!location ||
property.location
.toLowerCase()
.includes(location);


const matchesType =
type === "All" ||
property.type === type;


const matchesBedrooms =
!bedrooms ||
property.bedrooms >= bedrooms;


const matchesPrice =
!maxPrice ||
property.price <= maxPrice;


return (
matchesMode &&
matchesLocation &&
matchesType &&
matchesBedrooms &&
matchesPrice
);

});


const sort =
document.querySelector("#sortProperties")?.value;


if(sort === "low"){

result.sort(
(a,b) => a.price - b.price
);

}


if(sort === "high"){

result.sort(
(a,b) => b.price - a.price
);

}


if(sort === "newest"){

result.sort(
(a,b) => b.year - a.year
);

}


window.lumenFilteredProperties =
result;


renderProperties(
propertyResults,
result
);


const count =
document.querySelector(
"#propertyResultsCount"
);


if(count){

count.textContent =
`${result.length} properties`;

}

}


document
.querySelectorAll(".listing-mode")
.forEach(button => {

button.addEventListener(
"click",
() => {

document
.querySelectorAll(".listing-mode")
.forEach(item =>
item.classList.remove("active")
);

button.classList.add("active");

mode =
button.dataset.mode;

applyFilters();

}
);

});


document
.querySelector("#applyFilters")
?.addEventListener(
"click",
applyFilters
);


document
.querySelector("#sortProperties")
?.addEventListener(
"change",
applyFilters
);


const urlParams =
new URLSearchParams(
window.location.search
);


const location =
urlParams.get("location");


if(location){

document.querySelector(
"#filterLocation"
).value = location;

}


applyFilters();

}


/* =========================================================
   HOME SEARCH
   ========================================================= */

const homeSearch =
document.querySelector("#homeSearch");


if(homeSearch){

let searchMode = "buy";


document
.querySelectorAll(".search-tab")
.forEach(tab => {

tab.addEventListener(
"click",
() => {

document
.querySelectorAll(".search-tab")
.forEach(item =>
item.classList.remove("active")
);

tab.classList.add("active");

searchMode =
tab.dataset.mode;

}
);

});


homeSearch.addEventListener(
"submit",
event => {

event.preventDefault();


const location =
document.querySelector(
"#homeLocation"
).value;


const type =
document.querySelector(
"#homeType"
).value;


const bedrooms =
document.querySelector(
"#homeBedrooms"
).value;


const params =
new URLSearchParams();


if(location)
params.set("location",location);


if(type !== "All")
params.set("type",type);


if(bedrooms !== "0")
params.set("bedrooms",bedrooms);


if(searchMode !== "buy")
params.set("mode",searchMode);


window.location.href =
"properties.html?" +
params.toString();

});

}


/* =========================================================
   PROPERTY DETAIL
   ========================================================= */

const propertyDetail =
document.querySelector("#propertyDetail");


if(propertyDetail){

const id =
Number(
new URLSearchParams(
window.location.search
).get("id") || 1
);


const property =
properties.find(
item => item.id === id
) || properties[0];


document.title =
`${property.title} — LUMEN Estates`;


propertyDetail.innerHTML = `

<section class="property-detail-hero">

<div class="container">

<a
href="properties.html"
class="back-link"
>
← Back to properties
</a>


<div class="detail-gallery">

${property.images.map(image => `
<img
src="${image}"
alt="${property.title}"
>
`).join("")}

</div>


<div class="detail-content">


<div class="detail-title">

<p class="eyebrow">
${property.status} · ${property.type}
</p>

<h1>
${property.title}
</h1>

<p class="detail-location">
${property.location}
</p>

<p class="detail-description">
${property.description}
</p>


<div class="detail-features">

<div class="detail-feature">

<span>
Bedrooms
</span>

<strong>
${property.bedrooms}
</strong>

</div>

<div class="detail-feature">

<span>
Bathrooms
</span>

<strong>
${property.baths}
</strong>

</div>

<div class="detail-feature">

<span>
Area
</span>

<strong>
${property.area} m²
</strong>

</div>

<div class="detail-feature">

<span>
Year
</span>

<strong>
${property.year}
</strong>

</div>

</div>

</div>


<aside class="detail-contact-card">

<p class="eyebrow">
${property.status}
</p>

<div class="detail-price">
${formatPrice(property)}
</div>

<p>
Interested in this property?
Contact our property team for
availability and viewing information.
</p>


<div class="agent-mini">

<img
src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
>

<div>

<small>
Your advisor
</small>

<strong>
Daniel Morgan
</strong>

</div>

</div>


<form id="viewingForm">

<input
required
type="text"
placeholder="Your name"
>

<input
required
type="email"
placeholder="Email address"
>

<textarea
required
rows="4"
placeholder="I'd like to arrange a viewing..."
></textarea>

<button>
Request a viewing →
</button>

</form>

</aside>

</div>

</div>

</section>

`;


const similar =
document.querySelector(
"#similarProperties"
);


if(similar){

renderProperties(
similar,
properties
.filter(
item =>
item.id !== property.id &&
item.type === property.type
)
.slice(0,3)
);

}


document
.querySelector("#viewingForm")
?.addEventListener(
"submit",
event => {

event.preventDefault();

alert(
"Thank you. Our property advisor will contact you shortly."
);

event.target.reset();

});

}


/* =========================================================
   CONTACT
   ========================================================= */

const contactForm =
document.querySelector("#contactForm");


if(contactForm){

contactForm.addEventListener(
"submit",
event => {

event.preventDefault();

alert(
"Thank you. Your enquiry has been received."
);

contactForm.reset();

});

}


/* =========================================================
   MOBILE NAV
   ========================================================= */

document
.querySelectorAll(".mobile-toggle")
.forEach(button => {

button.addEventListener(
"click",
() => {

const nav =
document.querySelector(".desktop-nav");


if(!nav) return;


nav.classList.toggle("mobile-visible");


if(nav.classList.contains("mobile-visible")){

nav.style.display = "flex";
nav.style.position = "absolute";
nav.style.top = "78px";
nav.style.left = "0";
nav.style.right = "0";
nav.style.background = "#fff";
nav.style.padding = "25px";
nav.style.flexDirection = "column";
nav.style.gap = "20px";
nav.style.borderBottom = "1px solid #ddd8ce";

}else{

nav.style.display = "";

}

}
);

});
