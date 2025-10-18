if (productID != null) {

    let appProducts = ""
    for (let i = 0; i < pageJson.length; i++) {
        
        if (pageJson[i].desc == productID) {
            let productHeader = pageJson[i].id;

            appProducts = `
            <h2 class="app_page_header">${productHeader.replace("_"," ").toUpperCase()}</h2>

            <section id="app_product_append">
                <div class="app_light_img"> 
                    <img src="./gallary/${pageJson[i].id}/${pageJson[i].photo}" alt="${pageJson[i].desc}">
                    <button>Buy</button>
                </div>

                <div class="app_light_contents">
                    <h2>${pageJson[i].desc}</h2>
                    
                    <span>${currency}${pageJson[i].price}</span>

                    <p>
                        <h3>Details</h3>
                        <div class="product_details_paragraph">${pageJson[i].details}</div>
                    </p>

                    <ul>
                        <h3>Specifications</h3>
                        ${pageJson[i].spec}
                    </ul>

                    <ul>
                        <h3>Dimensions</h3>
                        ${pageJson[i].dimension}
                    </ul>
                </div>
            </section>
            
            `
        }
        
    }

   $("#app_main").html(appProducts)
   document.getElementById("app_main").scrollIntoView()
}