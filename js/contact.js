if (aboutUS != null) {

    let aboutPage = `
        <h2 class="app_page_header">About us</h2>

        <div class="about_page_contents">
            <h3>Luminosa, where unparalleled ambience meets exceptional style.</h3>

            <section>
                <span>
                    Welcome to Luminosa. If you're here, you appreciate the beauty of thoughtful design. Whether you're searching for exquisite lighting to set the mood, stunning mirrors to enhance your walls, or unique home décor to complete your space, we’re delighted to have you with us. Whether for your personal sanctuary or a trade project, we’re here to guide you through our curated collection of premium pieces. So sit back, relax, and let us share the story behind the craftsmanship and passion that bring our lighting, mirrors, and décor to life.
                </span>
                <img class="img_float_even" src="./icons/AB_69384.jpg">
            </section>
        </div>

        <div class="about_page_contents">
            <h3>From Idea to Illumination</h3>

            <section>
                <img class="img_float_odd" id="about_img_rand" src="">
                <span>
                    Luminosa was founded by lifelong friends Glen and Josh, who have always shared a passion for modern art, interior design, and premium lighting. In 2022, both ventured into the world of interior design and home renovations, each undertaking their own separate projects. In early 2023, a conversation between them revealed that they were encountering similar recurring challenges...
                </span>
            </section>
        </div>

        <div class="about_page_contents">
            <h3>We All Know the Feeling, Right?</h3>

            <section>
                <img class="img_float_odd" src="./icons/AB_37872.jpg">
                <span>
                    You’ve spent countless hours scouring the web, juggling hundreds of shopping tabs,
                    desperately searching for that perfect piece to complete your vision. You have a keen eye and know exactly what you want. Finally, you find it!
                    But a new dilemma arises: multiple businesses offer the same product. Which one is trustworthy? The cheaper option has a longer delivery time & questionable reviews, making the purchase a gamble. You reach out for assistance, only to face a frustrating 3-5 business day response time. After much deliberation, you take the plunge and place your order. Weeks pass by – one, two, three, four –and finally, it arrives.
                    Your excitement turns to disappointment as you unbox your purchase, only to discover it’s of terrible quality and falsely advertised. Trust us, we’ve been there. We know the feeling.
                </span>
            </section>
        </div>

        <div class="about_page_contents">
            <h3>The Lightbulb Moment</h3>

            <section>
                <span>
                    After that conversation, Glen and Josh decided it was time to take action. This realisation led to the creation of Luminosa. Our mission is simple: to achieve unparalleled customer satisfaction. We collaborate with top brands in the lighting and interior design market to bring you the best options under one roof, all while offering competitive prices. Say goodbye to juggling multiple shopping tabs –everything you need is conveniently found in one place. We pride ourselves on exceptional customer service with quick response times. We always provide high-quality products with the quickest delivery times available. We want to ensure you have no more disappointing package openings. Our goal is to make your shopping experience as seamless and enjoyable as possible.
                </span>
                <img class="img_float_even" src="./icons/AB_86784.jpg">
            </section>
        </div>
    
    `
    

   $("#app_main").html(aboutPage)
}

let randNum = Math.floor(Math.random() * 3);
$("#about_img_rand").attr('src', `./icons/about${randNum}.webp`)

setInterval(() => {
   let randNum = Math.floor(Math.random() * 3);
   $("#about_img_rand").attr('src', `./icons/about${randNum}.webp`)
}, 10000);
