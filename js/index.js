$(document).ready(()=>{
    $("#apploader").fadeOut("slow")
})

// 
const myEmail = "luminosalighting2@gmail.com"
const myWhatsApp = "+44 7861412255"

// 
let pageJson = ""
$.ajax(
    {
        url: "./json/products.json",
        type: "GET",
        async: false,
success:function(response){
    pageJson = response
},
error:function(err){
    console.log(err)
}
})

// console.log(pageJson)
const urlParams = new URLSearchParams(window.location.search);
const lights = urlParams.get('page');
const productID = urlParams.get('product');
const aboutUS = urlParams.get('contact');

const currency = "£"

if (lights != null) {

    let appPage = ""
    let pageHeader = ""
    for (let i = 0; i < pageJson.length; i++) {
        
        if (pageJson[i].id == lights) {

            pageHeader = pageJson[i].id

            appPage += `
                <a href="./?product=${pageJson[i].desc}">
                    <h3></h3>
                    <img src="./gallary/${lights}/${pageJson[i].photo}" alt="${pageJson[i].desc}">
                    <ol> <li>${pageJson[i].desc.slice(0, 25)}...</li> <li>${currency}${pageJson[i].price}</li>   </ol>
                </a>
            `
        }
        
    }

   $("#app_main").html(`
        <h2 class="app_page_header">${pageHeader.replace("_"," ").toUpperCase()}</h2>
        <section id="app_page_append">
            ${appPage}
        </section>
    `)
}

// 
$("#email_container").html(`<b>Email: </b> ${myEmail}`);
$("#whatsapp_container").html(`<b>WhatsApp: </b> ${myWhatsApp}`);