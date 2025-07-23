import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product {
  private products = [
  {
    "id": 1,
    "name": "Wireless Bluetooth Headphones",
    "price": 89.99,
    "image": "https://picsum.photos/400/300?random=1",
    "category": "Electronics",
    "availability": "Instock",
    "description": "Experience crystal-clear sound with these wireless Bluetooth headphones. Featuring noise cancellation, 20-hour battery life, and comfortable over-ear design. Perfect for music lovers and frequent travelers. Includes built-in microphone for hands-free calls.",
    "terms": "1-year warranty. 30-day return policy. Original packaging required for returns."
  },
  {
    "id": 2,
    "name": "Organic Cotton T-Shirt",
    "price": 24.95,
    "image": "https://picsum.photos/400/300?random=2",
    "category": "Clothing",
    "availability":  "OutStock",
    "description": "Made from 100% organic cotton, this comfortable t-shirt is perfect for everyday wear. Breathable fabric with a relaxed fit. Available in multiple colors. Machine washable. Sustainable and eco-friendly production.",
    "terms": "No returns on final sale items. Exchange within 14 days with receipt."
  },
  {
    "id": 3,
    "name": "Stainless Steel Water Bottle",
    "price": 19.50,
    "image": "https://picsum.photos/400/300?random=3",
    "category": "Home & Kitchen",
    "availability": "Instock",
    "description": "Keep your drinks hot or cold for hours with this durable stainless steel water bottle. Leak-proof design with carrying loop. BPA-free and eco-friendly. Holds 24oz of liquid. Perfect for gym, office, or outdoor activities.",
    "terms": "Lifetime warranty against manufacturing defects. Not covered if damaged by misuse."
  },
  {
    "id": 4,
    "name": "Smart Fitness Tracker",
    "price": 59.99,
    "image": "https://picsum.photos/400/300?random=4",
    "category": "Electronics",
    "availability": "Instock",
    "description": "Monitor your health with this smart fitness tracker. Tracks steps, heart rate, sleep patterns, and calories burned. Water-resistant design with 7-day battery life. Syncs with your smartphone via Bluetooth.",
    "terms": "6-month warranty. Does not cover water damage from swimming or diving."
  },
  {
    "id": 5,
    "name": "Non-Stick Cooking Set (5-Piece)",
    "price": 129.99,
    "image": "https://picsum.photos/400/300?random=5",
    "category": "Home & Kitchen",
    "availability":  "OutStock",
    "description": "Complete your kitchen with this premium non-stick cookware set. Includes fry pans, saucepans, and lids. Even heat distribution and easy cleaning. Oven safe up to 350°F. PFOA-free coating for healthier cooking.",
    "terms": "10-year limited warranty. Use only wooden or silicone utensils to preserve coating."
  },
  {
    "id": 6,
    "name": "Yoga Mat (1/2 inch thick)",
    "price": 34.95,
    "image": "https://picsum.photos/400/300?random=6",
    "category": "Sports & Fitness",
    "availability":  "OutStock",
    "description": "Premium extra-thick yoga mat provides cushioning for joints while maintaining stability. Non-slip surface with alignment markers. Lightweight and comes with carrying strap. Eco-friendly materials, free from toxic chemicals.",
    "terms": "30-day satisfaction guarantee. Must show proof of purchase for returns."
  },
  {
    "id": 7,
    "name": "Wireless Phone Charger",
    "price": 29.99,
    "image": "https://picsum.photos/400/300?random=7",
    "category": "Electronics",
    "availability":  "OutStock",
    "description": "Charge your Qi-enabled smartphone wirelessly with this fast charging pad. LED charging indicator. Compact design for home or office. Includes anti-slip surface to keep your phone in place while charging.",
    "terms": "90-day warranty. Does not include charging cable or adapter."
  },
  {
    "id": 8,
    "name": "Leather Wallet (Genuine Leather)",
    "price": 45.00,
    "image": "https://picsum.photos/400/300?random=8",
    "category": "Accessories",
    "availability": "Instock",
    "description": "Handcrafted genuine leather wallet with multiple card slots and cash compartment. Slim design fits comfortably in your pocket. Ages beautifully over time. Available in brown or black.",
    "terms": "Free returns within 30 days if unused. Natural leather variations are not defects."
  },
  {
    "id": 9,
    "name": "Electric Toothbrush",
    "price": 79.95,
    "image": "https://picsum.photos/400/300?random=9",
    "category": "Health & Beauty",
    "availability":  "OutStock",
    "description": "Professional-grade electric toothbrush with 3 cleaning modes and pressure sensor. Includes travel case and 2 brush heads. 2-week battery life. Removes up to 100% more plaque than manual brushing.",
    "terms": "2-year limited warranty. Brush heads not covered under warranty."
  },
  {
    "id": 10,
    "name": "Ceramic Coffee Mug Set (4-Piece)",
    "price": 32.50,
    "image": "https://picsum.photos/400/300?random=10",
    "category": "Home & Kitchen",
    "availability":  "OutStock",
    "description": "Beautiful set of ceramic coffee mugs with comfortable handles. Microwave and dishwasher safe. Holds 12oz each. Elegant matte finish. Perfect for home or office use.",
    "terms": "Fragile item - inspect upon delivery. 15-day return window for damaged items."
  },
  {
    "id": 11,
    "name": "Portable Bluetooth Speaker",
    "price": 65.00,
    "image": "https://picsum.photos/400/300?random=11",
    "category": "Electronics",
    "availability": "Instock",
    "description": "Take your music anywhere with this waterproof Bluetooth speaker. 12-hour playtime, built-in microphone for calls, and rugged design. Connects to smartphones and tablets wirelessly up to 30 feet away.",
    "terms": "1-year warranty. Waterproof rating does not cover saltwater damage."
  },
  {
    "id": 12,
    "name": "Memory Foam Pillow",
    "price": 49.99,
    "image": "https://picsum.photos/400/300?random=12",
    "category": "Home & Kitchen",
    "availability": "Instock",
    "description": "Orthopedic memory foam pillow adjusts to your head and neck for optimal support. Hypoallergenic and dust mite resistant. Removable, washable cover. Helps reduce neck pain and improve sleep quality.",
    "terms": "60-night trial period. Must use protective cover to maintain warranty."
  },
  {
    "id": 13,
    "name": "Running Shoes (Men's)",
    "price": 89.95,
    "image": "https://picsum.photos/400/300?random=13",
    "category": "Footwear",
    "availability": "Instock",
    "description": "Lightweight running shoes with responsive cushioning and breathable mesh upper. Durable rubber outsole provides excellent traction. Arch support and padded collar for comfort. Perfect for road or treadmill running.",
    "terms": "30-day comfort guarantee. Must show signs of wear for returns."
  },
  {
    "id": 14,
    "name": "Wireless Gaming Mouse",
    "price": 59.99,
    "image": "https://picsum.photos/400/300?random=14",
    "category": "Electronics",
    "availability": "Instock",
    "description": "High-performance wireless gaming mouse with customizable RGB lighting. 6 programmable buttons and precision sensor. 50-hour battery life. Ergonomic design for comfortable extended use.",
    "terms": "2-year warranty. Does not cover damage from drops or liquid spills."
  },
  {
    "id": 15,
    "name": "Cast Iron Skillet (10-inch)",
    "price": 39.95,
    "image": "https://picsum.photos/400/300?random=15",
    "category": "Home & Kitchen",
    "availability": "Instock",
    "description": "Pre-seasoned cast iron skillet provides even heating and excellent heat retention. Perfect for searing, frying, baking, and more. Naturally non-stick when properly cared for. Includes helper handle.",
    "terms": "Lifetime warranty. Must follow seasoning instructions to maintain coverage."
  },
  {
    "id": 16,
    "name": "Acoustic Guitar (Beginner)",
    "price": 149.99,
    "image": "https://picsum.photos/400/300?random=16",
    "category": "Musical Instruments",
    "availability":  "OutStock",
    "description": "Full-size acoustic guitar perfect for beginners. Spruce top with mahogany back and sides. Includes gig bag, picks, and extra strings. Comfortable neck profile with smooth fretboard.",
    "terms": "45-day return policy. Must be returned in original packaging with all accessories."
  },
  {
    "id": 17,
    "name": "Smart LED Light Bulb",
    "price": 22.95,
    "image": "https://picsum.photos/400/300?random=17",
    "category": "Home Improvement",
    "availability": "Instock",
    "description": "WiFi-enabled smart LED bulb controllable via smartphone app. Change colors, set schedules, and adjust brightness. Works with voice assistants. Energy efficient with 25,000 hour lifespan.",
    "terms": "1-year warranty. Not compatible with all dimmer switches."
  },
  {
    "id": 18,
    "name": "Backpack (Water-Resistant)",
    "price": 54.50,
    "image": "https://picsum.photos/400/300?random=18",
    "category": "Accessories",
    "availability":  "OutStock",
    "description": "Durable water-resistant backpack with padded laptop compartment (fits up to 15.6-inch). Multiple organizational pockets. Comfortable padded shoulder straps. Great for school, work, or travel.",
    "terms": "1-year warranty against defects. Does not cover normal wear and tear."
  },
  {
    "id": 19,
    "name": "Electric Kettle (1.7L)",
    "price": 42.99,
    "image": "https://picsum.photos/400/300?random=19",
    "category": "Home & Kitchen",
    "availability": "Instock",
    "description": "Fast-boiling electric kettle with automatic shut-off and boil-dry protection. Stainless steel exterior with removable filter. 1500 watts for quick heating. Cordless design with 360° base.",
    "terms": "2-year limited warranty. Descaling required to maintain warranty."
  },
  {
    "id": 20,
    "name": "Resistance Band Set (5-Piece)",
    "price": 29.95,
    "image": "https://picsum.photos/400/300?random=20",
    "category": "Sports & Fitness",
    "availability": "Instock",
    "description": "Complete set of 5 resistance bands with varying tension levels. Includes door anchor, handles, and ankle straps. Perfect for home workouts, physical therapy, or gym training. Latex-free material.",
    "terms": "90-day warranty. Inspect for damage before each use."
  },
  {
    "id": 21,
    "name": "Wireless Earbuds",
    "price": 75.00,
    "image": "https://picsum.photos/400/300?random=21",
    "category": "Electronics",
    "availability": "Instock",
    "description": "True wireless earbuds with 6-hour battery life (24h with charging case). Touch controls and built-in microphone. IPX5 water resistance. Comfortable fit with multiple ear tip sizes included.",
    "terms": "1-year warranty. Loss or theft not covered."
  },
  {
    "id": 22,
    "name": "French Press Coffee Maker",
    "price": 28.95,
    "image": "https://picsum.photos/400/300?random=22",
    "category": "Home & Kitchen",
    "availability": "Instock",
    "description": "34-ounce French press made from heat-resistant borosilicate glass and stainless steel. Micro-mesh filter for grit-free coffee. Easy to use and clean. Makes rich, flavorful coffee or tea.",
    "terms": "Handle with care - glass is breakable. 30-day return policy."
  },
  {
    "id": 23,
    "name": "Digital Kitchen Scale",
    "price": 19.99,
    "image": "https://picsum.photos/400/300?random=23",
    "category": "Home & Kitchen",
    "availability": "Instock",
    "description": "Precision digital kitchen scale measures up to 11lbs in 0.1oz increments. LCD display with tare function. Stainless steel platform. Runs on included batteries. Perfect for baking and meal prep.",
    "terms": "1-year warranty. Not waterproof - keep dry."
  },
  {
    "id": 24,
    "name": "Hair Dryer (Professional)",
    "price": 89.95,
    "image": "https://picsum.photos/400/300?random=24",
    "category": "Health & Beauty",
    "availability": "Instock",
    "description": "Ionic hair dryer with ceramic technology reduces frizz and enhances shine. 1875 watts with 2 speed/3 heat settings. Includes concentrator nozzle and diffuser attachment. Lightweight and quiet.",
    "terms": "2-year warranty. Regular cleaning required to maintain performance."
  },
  {
    "id": 25,
    "name": "Folding Camping Chair",
    "price": 39.50,
    "image": "https://picsum.photos/400/300?random=25",
    "category": "Outdoor",
    "availability": "Instock",
    "description": "Portable folding chair with 250lb capacity. Durable steel frame with breathable mesh fabric. Includes cup holder and carrying bag. Sets up in seconds. Perfect for camping, beaches, or outdoor events.",
    "terms": "90-day warranty. Weight limit must not be exceeded."
  },
  {
    "id": 26,
    "name": "Graphic Novel (Bestseller)",
    "price": 17.99,
    "image": "https://picsum.photos/400/300?random=26",
    "category": "Books",
    "availability": "OutStock",
    "description": "Award-winning graphic novel with 200+ pages of full-color artwork. Hardcover edition with dust jacket. Engaging story suitable for teens and adults. From acclaimed author and artist team.",
    "terms": "New books may be returned within 30 days if unread and in original condition."
  },
  {
    "id": 27,
    "name": "Yoga Block (2-Pack)",
    "price": 22.95,
    "image": "https://picsum.photos/400/300?random=27",
    "category": "Sports & Fitness",
    "availability": "Instock",
    "description": "High-density foam yoga blocks provide support and stability during practice. Lightweight yet sturdy. Textured non-slip surface. Helps improve alignment and deepen stretches. Set of 2 blocks.",
    "terms": "30-day return policy. Must show proof of purchase."
  },
  {
    "id": 28,
    "name": "Smart Plug",
    "price": 24.99,
    "image": "https://picsum.photos/400/300?random=28",
    "category": "Home Improvement",
    "availability": true,
    "description": "WiFi smart plug lets you control devices remotely via app. Set schedules, timers, and energy monitoring. Works with voice assistants. No hub required. 15A maximum load.",
    "terms": "1-year warranty. For indoor use only."
  },
  {
    "id": 29,
    "name": "Insulated Lunch Bag",
    "price": 18.50,
    "image": "https://picsum.photos/400/300?random=29",
    "category": "Home & Kitchen",
    "availability": true,
    "description": "Leak-proof insulated lunch bag keeps food cold for up to 6 hours. Lightweight and easy to clean. Front pocket for utensils. Fits standard containers. Available in multiple colors.",
    "terms": "30-day return policy. Not dishwasher safe."
  },
  {
    "id": 30,
    "name": "Wireless Keyboard and Mouse Combo",
    "price": 49.95,
    "image": "https://picsum.photos/400/300?random=30",
    "category": "Electronics",
    "availability": true,
    "description": "Slim wireless keyboard and mouse set with 2.4GHz USB receiver. Quiet keys and precise scrolling. 12-month battery life. Compatible with Windows and Mac. Compact design saves desk space.",
    "terms": "1-year limited warranty. Batteries not included."
  },
  {
    "id": 31,
    "name": "Essential Oil Diffuser",
    "price": 32.99,
    "image": "https://picsum.photos/400/300?random=31",
    "category": "Home & Kitchen",
    "availability": true,
    "description": "Ultrasonic essential oil diffuser with 4 timer settings and 7 color LED lights. Whisper-quiet operation covers up to 300 sq ft. Auto shut-off when water runs low. BPA-free plastic.",
    "terms": "90-day warranty. Use only water and essential oils - no other liquids."
  },
  {
    "id": 32,
    "name": "Pocket Knife (Multi-tool)",
    "price": 44.95,
    "image": "https://picsum.photos/400/300?random=32",
    "category": "Outdoor",
    "availability": true,
    "description": "Stainless steel pocket knife with 12 functions including pliers, screwdrivers, and scissors. Folding design with locking mechanism. Includes belt clip and nylon pouch. Great for camping or everyday carry.",
    "terms": "Lifetime warranty against defects. Does not cover loss or misuse."
  },
  {
    "id": 33,
    "name": "Air Fryer (5-Quart)",
    "price": 99.99,
    "image": "https://picsum.photos/400/300?random=33",
    "category": "Home & Kitchen",
    "availability": true,
    "description": "Healthy cooking with little to no oil. Digital touchscreen with 7 preset functions. Non-stick basket is dishwasher safe. Cooks 30% faster than conventional ovens. Includes recipe book.",
    "terms": "1-year warranty. Regular cleaning required to maintain performance."
  },
  {
    "id": 34,
    "name": "Blender (High-Speed)",
    "price": 79.95,
    "image": "https://picsum.photos/400/300?random=34",
    "category": "Home & Kitchen",
    "availability": false,
    "description": "Powerful 1200-watt blender with 6 blades for smooth results. 64-ounce BPA-free pitcher. 10 variable speeds with pulse function. Crushes ice and blends frozen fruit with ease.",
    "terms": "2-year warranty. Not covered for commercial use."
  },
  {
    "id": 35,
    "name": "Weighted Blanket (15 lbs)",
    "price": 89.99,
    "image": "https://picsum.photos/400/300?random=35",
    "category": "Home & Kitchen",
    "availability": true,
    "description": "Therapeutic weighted blanket provides deep pressure stimulation to reduce anxiety and improve sleep. Breathable cotton cover with glass bead filling. Machine washable. Queen size fits most beds.",
    "terms": "30-night trial. Must use duvet cover to maintain warranty."
  },
  {
    "id": 36,
    "name": "Wireless Security Camera",
    "price": 129.99,
    "image": "https://picsum.photos/400/300?random=36",
    "category": "Electronics",
    "availability": true,
    "description": "1080p HD wireless security camera with night vision and motion detection. Two-way audio and weather-resistant design. Works with smartphone app. Includes cloud storage option.",
    "terms": "1-year warranty. Subscription required for some features."
  },
  {
    "id": 37,
    "name": "Hiking Backpack (35L)",
    "price": 74.95,
    "image": "https://picsum.photos/400/300?random=37",
    "category": "Outdoor",
    "availability": true,
    "description": "Durable hiking backpack with adjustable suspension system. Multiple compartments including hydration sleeve. Breathable back panel and padded straps. Compression straps and gear loops included.",
    "terms": "Lifetime warranty against manufacturing defects. Normal wear not covered."
  },
  {
    "id": 38,
    "name": "Massage Gun (Deep Tissue)",
    "price": 149.99,
    "image": "https://picsum.photos/400/300?random=38",
    "category": "Sports & Fitness",
    "availability": true,
    "description": "Professional-grade percussion massager with 5 speed settings and 6 attachments. Rechargeable battery lasts up to 4 hours. Quiet operation under 50dB. Helps relieve muscle tension and soreness.",
    "terms": "2-year warranty. Not for use on certain medical conditions."
  },
  {
    "id": 39,
    "name": "Desk Organizer Set",
    "price": 29.50,
    "image": "https://picsum.photos/400/300?random=39",
    "category": "Office",
    "availability": true,
    "description": "Keep your workspace tidy with this 5-piece desk organizer set. Includes pen holders, file tray, and accessory compartments. Modern minimalist design. Made from durable materials.",
    "terms": "30-day return policy. Assembly required."
  },
  {
    "id": 40,
    "name": "Smart Watch (Fitness Tracker)",
    "price": 129.95,
    "image": "https://picsum.photos/400/300?random=40",
    "category": "Electronics",
    "availability": true,
    "description": "Feature-packed smart watch with heart rate monitor, GPS, and waterproof design. Tracks 20+ sports activities. 7-day battery life. Compatible with iOS and Android. Customizable watch faces.",
    "terms": "1-year warranty. Screen damage not covered."
  },
  {
    "id": 41,
    "name": "Ceramic Cookware Set (10-Piece)",
    "price": 199.99,
    "image": "https://picsum.photos/400/300?random=41",
    "category": "Home & Kitchen",
    "availability": true,
    "description": "Non-toxic ceramic non-stick cookware set free from PFOA, PTFE and cadmium. Oven safe to 450°F. Even heat distribution. Includes pots, pans, and utensils. Dishwasher safe for easy cleaning.",
    "terms": "5-year limited warranty. Use only medium or low heat to preserve coating."
  },
  {
    "id": 42,
    "name": "Noise Cancelling Headphones",
    "price": 199.99,
    "image": "https://picsum.photos/400/300?random=42",
    "category": "Electronics",
    "availability": true,
    "description": "Premium over-ear headphones with active noise cancellation. 30-hour battery life with quick charge. Built-in microphone for calls. Plush ear cushions for all-day comfort. Foldable design for travel.",
    "terms": "2-year warranty. Includes 1-year manufacturer service."
  },
  {
    "id": 43,
    "name": "Electric Blanket (Queen)",
    "price": 69.95,
    "image": "https://picsum.photos/400/300?random=43",
    "category": "Home & Kitchen",
    "availability": true,
    "description": "Soft microplush electric blanket with 10 heat settings and auto shut-off. Machine washable. Dual controls for personalized comfort. Warms up quickly and evenly distributes heat.",
    "terms": "3-year limited warranty. Do not fold while in use."
  },
  {
    "id": 44,
    "name": "Standing Desk Converter",
    "price": 149.99,
    "image": "https://picsum.photos/400/300?random=44",
    "category": "Office",
    "availability": true,
    "description": "Adjustable height standing desk converter fits most workstations. Smooth pneumatic lift mechanism. Spacious work surface holds monitors and keyboard. Encourages better posture and movement.",
    "terms": "5-year warranty. Weight limit of 35lbs must not be exceeded."
  },
  {
    "id": 45,
    "name": "Robot Vacuum Cleaner",
    "price": 249.99,
    "image": "https://picsum.photos/400/300?random=45",
    "category": "Home & Kitchen",
    "availability": true,
    "description": "Smart robot vacuum with laser navigation and app control. Automatically returns to charging station. Strong suction for carpets and hard floors. Works with voice assistants. Self-emptying base available separately.",
    "terms": "1-year warranty. Regular maintenance required."
  },
  {
    "id": 46,
    "name": "Gaming Chair",
    "price": 179.99,
    "image": "https://picsum.photos/400/300?random=46",
    "category": "Furniture",
    "availability": true,
    "description": "Ergonomic gaming chair with adjustable lumbar support and headrest. 360° swivel and reclining back. Durable PU leather with thick padding. Supports up to 300lbs. Assembly required.",
    "terms": "2-year warranty. Normal wear and tear not covered."
  },
  {
    "id": 47,
    "name": "Solar-Powered Charger",
    "price": 49.95,
    "image": "https://picsum.photos/400/300?random=47",
    "category": "Outdoor",
    "availability": true,
    "description": "Portable solar charger with 20W output and 10,000mAh battery. Charges phones, tablets, and USB devices. Water-resistant and durable design. Includes multiple charging cables. Perfect for camping.",
    "terms": "1-year warranty. Performance varies by sunlight conditions."
  },
  {
    "id": 48,
    "name": "Espresso Machine",
    "price": 159.99,
    "image": "https://picsum.photos/400/300?random=48",
    "category": "Home & Kitchen",
    "availability": true,
    "description": "15-bar pump espresso machine with steam wand. Makes lattes, cappuccinos, and espresso. Removable water tank and drip tray. Includes milk frothing pitcher and measuring spoon.",
    "terms": "2-year warranty. Descaling required every 3-6 months."
  },
  {
    "id": 49,
    "name": "Digital Drawing Tablet",
    "price": 89.99,
    "image": "https://picsum.photos/400/300?random=49",
    "category": "Electronics",
    "availability": true,
    "description": "10x6 inch drawing tablet with pressure-sensitive pen. Works with major creative software. No batteries needed for the pen. Perfect for digital art, photo editing, and design work.",
    "terms": "1-year warranty. Driver installation required."
  },
 
]
  constructor() {}

  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}
