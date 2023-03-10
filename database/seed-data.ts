import bcrypt from 'bcryptjs';

interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    slug: string;
    tags: string[];
    title: string;
    category: 'papeleria'|'mobiliario'|'electronica'
}

interface SeedUser {
    name     : string;
    email    : string;
    password : string;
    role     : 'admin'|'client'
}

interface SeedData {
    users: SeedUser[];
    products: SeedProduct[];
}



export const initialData: SeedData = {

    users: [
        {
            name: 'Argenis Centeno',
            email: 'argeniscentenno@gmail.com',
            password: bcrypt.hashSync('123456'),
            role: 'admin'
        },
        {
            name: 'Aaron Campos',
            email: 'aaroncampos@google.com',
            password: bcrypt.hashSync('123456'),
            role: 'client'
        },
        {
            name: 'Mary Valdiviezo',
            email: 'maryvaldiviezo@github.com',
            password: bcrypt.hashSync('123456'),
            role: 'admin'
        },
    ],

    products: [
        {
            description: "Marcadores De Diseño Touch Doble Punta Permanente 48 Pcs",
            images: [
                'marcador1.jpg',
                'marcador2.jpg',
            ],
            inStock: 7,
            price: 75,
            slug: "mar_cadores_De_Diseño_Touch_Doble_Punta_Permanente",
            tags: ['marcador'],
            title: "Marcadores De Diseño Touch Doble Punta Permanente",
            category: 'papeleria'
        },
        {
            description: "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
            images: [
                'rotulador.jpg',
                'rotulador2.jpg',
            ],
            inStock: 5,
            price: 2,
            slug: "men_quilted_shirt_jacket",
            tags: ['resaltador'],
            title: "Resaltador Highlighter Marcador Colores Pasteles Set X 6",
            category: 'papeleria'
        },
        
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
            images: [
                'papel.jpg',
                'papel2.jpg'
            ],
            inStock: 10,
            price: 6,
            slug: "Resma_de_Papel_carta_Marca_Hp_500_Hojas",
            tags: ['papel'],
            title: "Resma De Papel Carta Marca Hp 500 Hojas",
            category: 'papeleria'
        },

        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            images: [
                'colores.jpg',
                'colores2.jpg',
            ],
            inStock: 50,
            price: 45,
            slug: "men_turbine_long_sleeve_tee",
            tags: ['colores'],
            title: "Estuche Creyones Faber Castell Eco Supersoft X 100 Unidades",
            category: 'papeleria'
        },
        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            images: [
                'cuaderno.jpg',
                'cuaderno2.jpg',
            ],
            inStock: 50,
            price: 40,
            slug: "men_turbine_short_sleeve_tee",
            tags: ['cuaderno'],
            title: "Oxford Cuaderno de papel de piedra, 8-1/2 x 11 pulgadas, tapa azul,",
            category: 'papeleria'
        },
        
        {
            description: "Inspired by our fully integrated home solar and storage system, the Tesla Solar Roof Tee advocates for clean, sustainable energy wherever you go. Designed for fit, comfort and style, the tee features an aerial view of our seamless Solar Roof design on the front with our signature T logo above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
            images: [
                'silla3.jpg',
                'silla4.jpg',
            ],
            inStock: 15,
            price: 35,
            slug: "men_solar_roof_tee",
            tags: ['silla'],
            title: "Silla Ejecutiva Ergonomica A6",
            category: 'mobiliario'
        },
        {
            description: "Inspired by the world’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla wordmark on the front and our signature T logo printed above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
            images: [
                'escritorio.jpg',
                'escritorio2.jpg',
            ],
            inStock: 17,
            price: 35,
            slug: "men_let_the_sun_shine_tee",
            tags: ['escritorio'],
            title: "Escritorio Secretarial Ofilook Sz-cda01 Con Dos Gavetas",
            category: 'mobiliario'
        },
        {
            description: "Designed for fit, comfort and style, the Men's 3D Large Wordmark Tee is made from 100% Peruvian cotton with a 3D silicone-printed Tesla wordmark printed across the chest.",
            images: [
                'impresora.jpg',
                'impresora2.jpg',
            ],
            inStock: 12,
            price: 399,
            slug: "men_3d_large_wordmark_tee",
            tags: ['impresora'],
            title: "Impresora Epson L4260 Multifunción Ecotank Wifi, Duplex",
            category: 'electronica'
        },
        {
            description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
            images: [
                'lapiz.jpg',
                'lapiz2.jpg',
            ],
            inStock: 5,
            price: 35,
            slug: "men_3d_t_logo_tee",
            tags: ['lapiz'],
            title: "3 Cajas De Lapices Kores Nro 2 Hb Grafito Redondos",
            category: 'papeleria'
        },
        {
            description: "Designed for comfort and style in any size, the Tesla Small Wordmark Tee is made from 100% Peruvian cotton and features a 3D silicone-printed wordmark on the left chest.",
            images: [
                'teclado.jpg',
                'teclado2.jpg',
            ],
            inStock: 2,
            price: 35,
            slug: "men_3d_small_wordmark_tee",
            tags: ['teclado'],
            title: "Teclado Usb Ultra Delgado Imexx Ime-20320",
            category: 'electronica'
        },
        
         
        {
            description: "Designed for fit, comfort and style, the limited edition S3XY Tee is made from 100% cotton with a 3D silicone-printed “S3XY” logo across the chest. Made in Peru. Available in black.",
            images: [
                'tinta.jpg',
                'tinta2.jpg',
            ],
            inStock: 34,
            price: 35,
            slug: "men_s3xy_tee",
            tags: ['tinta'],
            title: "Tinta Epson 544 70ml Para L3150 L1210 L3210 L3250 L3110",
            category: 'electronica'
        },

        {
            description: "Designed for fit, comfort and style, the Men's 3D T Logo Long Sleeve Tee is made from 100% cotton and features an understated T logo on the left chest.",
            images: [
                'laptop.jpg',
                'lato2.jpg',
            ],
            inStock: 12,
            price: 300,
            slug: "men_3d_t_logo_long_sleeve_tee",
            tags: ['laptop'],
            title: "Laptop Asus E410m Ultra Thin 14 Hd Windows 11 8 Hora De Us",
            category: 'electronica'
        },
         
        {
            description: "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'libro.jpg',
                'libro2.jpg',
            ],
            inStock: 10,
            price: 130,
            slug: "chill_pullover_hoodie",
            tags: ['libro'],
            title: "Libros Contable Para La Conformación De Empresa (5 Unidades)",
            category: 'papeleria'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men's Chill Full Zip Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'impresora3.jpg',
                'impresora4.jpg',
            ],
            inStock: 100,
            price: 85,
            slug: "men_chill_full_zip_hoodie",
            tags: ['impresora'],
            title: "Impresora Multifuncional 1515 Hp",
            category: 'electronica'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'monitor.jpg',
                'monitor.jpeg',
            ],
            inStock: 7,
            price: 85,
            slug: "men_chill_quarter_zip_pullover_-_gray",
            tags: ['monitor'],
            title: "Monitor Xiaomi Mi Desktop Monitor 23,8 1c Full Hd Ips",
            category: 'electronica'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'sacapuntas.jpg',
                'sacapuntas2.jpg',
            ],
            inStock: 15,
            price: 85,
            slug: "men_chill_quarter_zip_pullover_-_white",
            tags: ['sacapuntas'],
            title: "Sacapuntas electrico",
            category: 'papeleria'
        },
       
        {
            description: "As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.",
            images: [
                'laptop.png',
                'laptop2.png',
            ],
            inStock: 13,
            price: 60,
            slug: "cybertruck_graffiti_hoodie",
            tags: ['laptop'],
            title: "Laptop Hp Elitebook 840 G3 I5 6ta 16 Ram 256 Disco Salido",
            category: 'electronica'
        },
        {
            description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            images: [
                'ray.jpg',
                'ray2.jpg',
            ],
            inStock: 11,
            price: 477,
            slug: "relaxed_t_logo_hat",
            tags: ['procesador'],
            title: "Procesador Amd Ryzen 5 5600g 3.9ghz",
            category: 'electronica'
        },
        {
            description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            images: [
                'sata.jpg',
                'sata2.jpg',
            ],
            inStock: 13,
            price: 35,
            slug: "thermal_cuffed_beanie",
            tags: ['disco'],
            title: "Disco Duro De 500gb 3.5 Sata 7200rpm",
            category: 'electronica'
        },
        {
            description: "The Women's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.",
            images: [
                'xia.jpg',
                'xia2.jpg',
            ],
            inStock: 85,
            price: 147,
            slug: "women_cropped_puffer_jacket",
            tags: ['disco'],
            title: "Disco Duro Externo 4tb Seagate Expansion Usb 3.0",
            category: 'electronica'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Women's Chill Half Zip Cropped Hoodie has a premium, soft fleece exterior and cropped silhouette for comfort in everyday lifestyle. The hoodie features an elastic hem that gathers at the waist, subtle thermoplastic polyurethane Tesla logos along the hood and on the sleeve, a double layer single seam hood and a custom ring zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'color.jpg',
                'color2.jpg',
            ],
            inStock: 10,
            price: 24,
            slug: "women_chill_half_zip_cropped_hoodie",
            tags: ['colores'],
            title: "Color De Madera Prismacolor Junior 48 Creyones Original",
            category: 'papeleria'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Women's Raven Slouchy Crew Sweatshirt has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The slouchy crew features a subtle thermoplastic polyurethane Tesla wordmark on the left sleeve and a french terry interior for a cozy look and feel in every season. Pair it with your Raven Joggers or favorite on the go fit. Made from 70% bamboo and 30% cotton.",
            images: [
                'air.jpeg',
                'air.jpg',
            ],
            inStock: 9,
            price: 110,
            slug: "women_raven_slouchy_crew_sweatshirt",
            tags: ['audifonos'],
            title: "Audifonos Inalambricos Bluetooth Manos Libres AirPods Oferta",
            category: 'electronica'
        },
        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Long Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50%",
            images: [
                'mesa.jpg',
                'mesa2.jpg',
            ],
            inStock: 10,
            price: 45,
            slug: "women_turbine_cropped_long_sleeve_tee",
            tags: ['mesa'],
            title: "Mesa De Conferencia 10",
            category: 'mobiliario'
        },
        {
            description: "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
            images: [
                'pizarra.jpg',
                'pizarra2.jpg',
            ],
            inStock: 0,
            price: 40,
            slug: "women_turbine_cropped_short_sleeve_tee",
            tags: ['marcador'],
            title: "Marcadores De Pizarra Acrílico Expo X 12 Unidades",
            category: 'papeleria'
        },
        {
            description: "Designed for style and comfort, the ultrasoft Women's T Logo Short Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
            images: [
                'tablet.jpg',
                'tablet2.jpg',
            ],
            inStock: 30,
            price: 35,
            slug: "women_t_logo_short_sleeve_scoop_neck_tee",
            tags: ['tablet'],
            title: "Tablet Gráfica Ugee M708 10",
            category: 'electronica'
        },
        {
            description: "Designed for style and comfort, the ultrasoft Women's T Logo Long Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
            images: [
                'monitor4.jpg',
                'monitor6.jpg',
            ],
            inStock: 16,
            price: 40,
            slug: "women_t_logo_long_sleeve_scoop_neck_tee",
            tags: ['monitor'],
            title: "Monitor Sceptre 30'' Curve Gaming Ultrawide 2560x1080p 85hz",
            category: 'electronica'
        },
        {
            description: "Designed for style and comfort, the Women's Small Wordmark Short Sleeve V-Neck Tee features a tonal 3D silicone-printed wordmark on the left chest. Made of 100% Peruvian cotton.",
            images: [
                'laptop6.jpg',
                'laptop7.jpg',
            ],
            inStock: 18,
            price: 347,
            slug: "women_small_wordmark_short_sleeve_v-neck_tee",
            tags: ['shirt'],
            title: "Laptop Gaming Acer Nitro Intel I5 8gb Ram 256gb Ssd Rtx3050",
            category: 'electronica'
        },
        {
            description: "Designed for style and comfort, the Women's Large Wordmark Short Sleeve Crew Neck Tee features a tonal 3D silicone-printed wordmark across the chest. Made of 100% Peruvian pima cotton.",
            images: [
                'router.jpg',
                'router3.jpg',
            ],
            inStock: 5,
            price: 35,
            slug: "women_large_wordmark_short_sleeve_crew_neck_tee",
            tags: ['router'],
            title: "Router Xiaomi 4a Original 4 Antenas Doble Banda 2.4gz Y 5gz",
            category: 'electronica'
        },
        {
            description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
            images: [
                'tempera.png',
                'tempera2.jpg',
            ],
            inStock: 16,
            price: 35,
            slug: "women_plaid_mode_tee",
            tags: ['tempera'],
            title: "Tempera Escolar Parchesitos Pastel 6 Colores",
            category: 'papeleria'
        },
        {
            description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any",
            images: [
                'mouse.jpg',
                'mouse2.jpg',
            ],
            inStock: 10,
            price: 8,
            slug: "women_powerwall_tee",
            tags: ['mouse'],
            title: "Mouse Hp-x500 Optico Cable Gamer Usb 1200 Dpi 8694",
            category: 'electronica'
        },
        
        {
            description: "Introducing the Tesla Raven Collection. The Women's Raven Joggers have a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The joggers feature a subtle thermoplastic polyurethane Tesla wordmark and T logo and a french terry interior for a cozy look and feel in every season. Pair them with your Raven Slouchy Crew Sweatshirt, Raven Lightweight Zip Up Jacket or other favorite on the go fit. Made from 70% bamboo and 30% cotton.",
            images: [
                'carpeta.jpg',
                'carpeta2.jpg',
            ],
            inStock: 162,
            price: 100,
            slug: "women_raven_joggers",
            tags: ['carpeta'],
            title: "Carpeta 3 Aros 1 Neon Colores Surtidos Pointer",
            category: 'papeleria'
        },
        
    ]
}