import './styles/styles.scss';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const title = 'Task1';

const products = [ { No: '1', SKU: "327038", name: 'Tommy Hilfiger Blue Ion Plated Ladies Watch', price: '67', oldPrice: '88', discount: '22%', description: 'Tick tock. You’ll never wonder what time it is again when you browse through all watches, including designer brands like Gucci, Daniel Wellington. From stainless steel and ceram...', vendor: 'Emporio Armani', type: 'Diving', barcode: '555-6322-1', weight: '32.6 kg', tags: [ 'Activity' ], Collections: ['Ladies','Sale'], img: '1.png', images: ['1.1.png','1.2.png','1.3.png','1.4.png','1.5.png'], reviews: [] },
{ No: '2',SKU: "327038", name: 'Olivia Burton Glasshouse Rose Gold Plated Mesh Ladies Watch', price: '20', oldPrice: '22', discount: '9%', description: 'Our vast range of sports watches includes popular brands, such as Casio, G-Shock and Citizen, all packed with the special features any budding sportsman could need. If it’s vers... ', vendor: 'Gucci', type: 'Diving', barcode: '555-6322-1', weight: '32.6 kg', tags: [ 'Activity' ], Collections: ['Accessories', 'Kids’','Ladies','Luxury','Sale','Sport'], img: '2.png', images: ['2.1.png','2.2.png','2.3.png','2.4.png','2.5.png'], reviews: [] },
{ No: '3',SKU: "-", name: 'Gucci G Timeless Gold Plated Leather Watch', price: '17', oldPrice: '19', discount: '10%', description: 'Solar watches are another option for those who want to energize their watch collection. Powered by a solar panel, these watches are environmentally friendly and ideal for the se...  ', vendor: 'Vivienne Westwood', type: 'Men’s', barcode: '-', weight: ' 11.0 lb', tags: [ 'Bracelet' ], Collections: ['Accessories', 'Men’s','Unisex','Luxury','Sale','Sport','Vintage'], img: '3.png', images: ['3.1.png','3.2.png','3.3.png','3.4.png','3.5.png'], reviews: [] },
{ No: '4',SKU: "327AE-6", name: 'Tissot Lepine Rose Gold Tone Mechanical Pocket Watch', price: '100', oldPrice: '', discount: '', description: 'Solar watches are another option for those who want to energize their watch collection. Powered by a solar panel, these watches are environmentally friendly and ideal for the se...  ', vendor: 'Vivienne Westwood', type: 'Vintage', barcode: '327038522', weight: '-', tags: [ ' Chronograph' ], Collections: ['Kids’','Ladies','Sale'], img: '4.png', images: ['4.1.png','4.2.png','4.3.png','4.4.png','4.5.png'], reviews: [] },
{ No: '5',SKU: "-", name: 'Loewe Gold Blue Round Sunglasses', price: '28', oldPrice: '29', discount: '3%', description: 'Tick tock. You’ll never wonder what time it is again when you browse through all watches, including designer brands like Gucci, Daniel Wellington. From stainless steel and ceram...', vendor: 'Michael Kors', type: 'Men’s', barcode: '-', weight: '  11.0 lb', tags: [ 'Bracelet' ], Collections: ['Accessories','Kids’','Ladies','Luxury','Men’s','Sale','Sport','Unisex','Vintage'], img: '5.png', images: ['5.1.png','5.2.png','5.3.png','5.4.png','5.5.png'], reviews: [] },
{ No: '6',SKU: "-", name: 'Michael Kors Dylan Rose Gold Tone Chronograph Mens Watch', price: '40', oldPrice: '44', discount: '9%', description: 'Our vast range of sports watches includes popular brands, such as Casio, G-Shock and Citizen, all packed with the special features any budding sportsman could need. If it’s vers... ', vendor: 'Michael Kors', type: 'Men’s', barcode: '-', weight: '  11.0 lb', tags: [ 'Bracelet' ], Collections: ['Accessories','Kids’','Ladies','Luxury','Men’s','Sale','Sport','Unisex','Vintage'], img: '6.png', images: ['6.1.png','6.2.png','6.3.png','6.4.png','6.5.png'], reviews: [] },
{ No: '7',SKU: "327038", name: 'Hugo Boss Grand Prix Black Ion Plated Chronograph Mens Watch', price: '34', oldPrice: '36', discount: '5%', description: 'Solar watches are another option for those who want to energize their watch collection. Powered by a solar panel, these watches are environmentally friendly and ideal for the se...', vendor: 'Hugo Boss', type: 'Diving', barcode: '555-6322-1', weight: '32.6 kg', tags: [ 'Activity' ], Collections: ['Accessories','Kids’','Ladies','Luxury','Men’s','Sale','Sport','Unisex','Vintage'], img: '7.png', images: ['7.1.png','7.2.png','7.3.png','7.4.png','7.5.png'], reviews: [] },
{ No: '8',SKU: "327AE-6", name: 'Gucci Plexiglass Fashion Ladies Watch', price: '80', oldPrice: '', discount: '', description: 'Our vast range of sports watches includes popular brands, such as Casio, G-Shock and Citizen, all packed with the special features any budding sportsman could need. If it’s vers... ', vendor: 'Gucci', type: 'Vintage', barcode: '327038522', weight: '-', tags: [ 'Chronograph' ], Collections: ['Accessories','Kids’','Luxury','Men’s','Sale','Sport','Unisex','Vintage'], img: '8.png', images: ['7.8.png','7.8.png','7.8.png','7.8.png','7.8.png'], reviews: [] },
{ No: '9',SKU: "327038", name: 'Emporio Armani Rose Gold Tone Mens Watch', price: '80', oldPrice: '88', discount: '9%', description: 'Tick tock. You’ll never wonder what time it is again when you browse through all watches, including designer brands like Gucci, Daniel Wellington. From stainless steel and ceram... ', vendor: 'Emporio Armani', type: 'Diving', barcode: '555-6322-1', weight: '32.6 kg', tags: [ 'Activity' ], Collections: ['Accessories','Men’s','Sale','Sport','Unisex','Vintage'], img: '9.png', images: ['9.1.png','9.2.png','9.3.png','9.4.png','9.5.png'], reviews: [] },
{ No: '10',SKU: "327AE-6", name: 'Emporio Armani Mens Watch', price: '119', oldPrice: '', discount: '', description: 'Solar watches are another option for those who want to energize their watch collection. Powered by a solar panel, these watches are environmentally friendly and ideal for the se...', vendor: 'Emporio Armani', type: 'Vintage', barcode: '327038522', weight: '-', tags: [ 'Chronograph' ], Collections: ['Men’s','Sale','Unisex','Vintage'], img: '10.png', images: ['10.1.png','10.2.png','10.3.png','10.4.png','10.5.png'], reviews: [] }
];

const container = document.getElementById('products');

const containerProducts = products.map(({ name, price, img }) => {
    const productTitle = document.createElement('p');
    productTitle.append(name);
    productTitle.setAttribute('class','product__title');

    const productImage = document.createElement('div');
    productImage.setAttribute('class','product__img');
    const productImg = document.createElement('img');
    let src = '../images/products/'+ img;
    productImg.setAttribute('src', src);
    productImage.append(productImg);

    const productPrice = document.createElement('p');
    productPrice.setAttribute('class','product__price');
    productPrice.append('$', price);

    const product = document.createElement('div');
    product.setAttribute('class','product__item');
    product.append(productImage, productTitle, productPrice);

    return product;
});

container.append(...containerProducts);

const dots = document.getElementById('pagination');

const productDots = products.map(({ No }) => {
    const productDot = document.createElement('span');
    productDot.setAttribute('class','product-dots__item');
    productDot.setAttribute('data-index', No);

    return productDot;
}).splice(-products.length,5);

dots.append(...productDots);

/*----------------Slider--------------------*/

var slideIndex = 1;
showSlides(slideIndex);

const points = document.querySelectorAll(".product-dots__item");

points.forEach( point => {
    
    point.addEventListener('click', function() {
        let n = point.getAttribute('data-index');
        currentSlide(n);
    });
}  
);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("product__item");
  var slidesList = document.getElementById("products");
  var dotsList = document.getElementsByClassName("product-dots__item");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < dotsList.length; i++) {
      dotsList[i].className = dotsList[i].className.replace(" product-dots__item_active", "");
  }
  
  dotsList[slideIndex-1].className += " product-dots__item_active";
  
  let trans = 'translate3d(' + (n-1)*(-10) + '%, 0px, 0px)';
  
  slidesList.style.width = products.length*20+'%';
  slidesList.style.transform = trans;
} 

/*-----------------------------------Menu-------------------------------*/

const topMenu = [ { title: "Home", items: [ "Home", "Blog", "About Us" ] }, 
{ title: "Catalog", items: [ "Ladies", "Kids'","Luxury", "Sport", "Unisex", "Vintage", "Sale", "Accessories", "Men’s", "Search" ] }, 
{ title: "Collections", items: [ "Ladies", "Kids'","Luxury", "Sport", "Unisex", "Vintage", "Sale", "Accessories", "Men’s", "Search" ] }, 
{ title: "Clearance", items: [] }, { title: "Contact Us", items: [] } ];

const headerMenu = document.querySelector('.header-menu');
console.log(headerMenu);

const topMenuItems = topMenu.map(({ title, items }) => {
    const menuTitle = document.createElement('li');
    menuTitle.setAttribute('class','header-menu__item');

    const menuLink = document.createElement('a');
    menuLink.setAttribute('class','header-menu__link');
    menuLink.append(title);

    const subMenu = document.createElement('ul');
    subMenu.setAttribute('class',"sub-menu");

    if(items.length>0) {

        const subMenuList = items.map(function(item){
            
            const subMenuItem = document.createElement('li');
            subMenuItem.setAttribute('class','sub-menu__item');

            const subMenuLink = document.createElement('a');
            subMenuLink.setAttribute('class','sub-menu__link');
            subMenuLink.append(item);
            
            subMenuItem.append(subMenuLink);

            return subMenuItem;
        });

       
       subMenu.append(...subMenuList);
    }

    menuTitle.append(menuLink);

    if(subMenu) {
       menuTitle.append(subMenu);
    }

    return menuTitle;
});


headerMenu.append(...topMenuItems);

/*window.addEventListener('scroll', function() {
    if(pageYOffset >= 10 && !document.querySelector(".header-menu_fixed")) {
       headerMenu.className += " header-menu_fixed";
    }

   if(pageYOffset < 10) {
       headerMenu.className = headerMenu.className.replace(" header-menu_fixed","");
   }
});*/