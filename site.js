const CART_STORAGE_KEY = "novaCart";
const WISHLIST_STORAGE_KEY = "novaWishlist";
const DEAL_END_TIME = new Date("2026-11-04T23:59:59+01:00").getTime();

const NOVA_FALLBACK_PRODUCTS = {
    "nova-aura": {
        name: "NOVA AURA",
        category: "Phones",
        categoryId: "phones",
        image: "aura-graphite-01.png",
        images: [
            "aura-graphite-01.png",
            "aura-graphite-02.png",
            "aura-graphite-03.png"
        ],
        variants: [
            {
                name: "Graphite",
                images: [
                    "aura-graphite-01.png",
                    "aura-graphite-02.png",
                    "aura-graphite-03.png"
                ]
            },
            {
                name: "Titanium",
                images: [
                    "aura-titanium-01.png",
                    "aura-titanium-02.png",
                    "aura-titanium-03.png"
                ]
            },
            {
                name: "Violet",
                images: [
                    "aura-violet-01.png",
                    "aura-violet-02.png",
                    "aura-violet-03.png"
                ]
            }
        ],
        price: "₦850,000",
        oldPrice: "₦950,000",
        discount: "11% OFF"
    },

    "nova-pulse": {
        name: "NOVA PULSE",
        category: "Phones",
        categoryId: "phones",
        image: "pulse-midnight-01.png",
        images: [
            "pulse-midnight-01.png",
            "pulse-midnight-02.png",
            "pulse-midnight-03.png"
        ],
        variants: [
            {
                name: "Midnight",
                images: [
                    "pulse-midnight-01.png",
                    "pulse-midnight-02.png",
                    "pulse-midnight-03.png"
                ]
            },
            {
                name: "Silver",
                images: [
                    "pulse-silver-01.png",
                    "pulse-silver-02.png",
                    "pulse-silver-03.png"
                ]
            },
            {
                name: "Electric Blue",
                images: [
                    "pulse-blue-01.png",
                    "pulse-blue-02.png",
                    "pulse-blue-03.png"
                ]
            }
        ],
        price: "₦720,000",
        oldPrice: "₦800,000",
        discount: "10% OFF"
    },

    "nova-flex": {
        name: "NOVA FLEX",
        category: "Phones",
        categoryId: "phones",
        image: "flex-obsidian-01.png",
        images: [
            "flex-obsidian-01.png",
            "flex-obsidian-02.png",
            "flex-obsidian-03.png"
        ],
        variants: [
            {
                name: "Obsidian",
                images: [
                    "flex-obsidian-01.png",
                    "flex-obsidian-02.png",
                    "flex-obsidian-03.png"
                ]
            },
            {
                name: "Titanium",
                images: [
                    "flex-titanium-01.png",
                    "flex-titanium-02.png",
                    "flex-titanium-03.png"
                ]
            },
            {
                name: "Deep Purple",
                images: [
                    "flex-purple-01.png",
                    "flex-purple-02.png",
                    "flex-purple-03.png"
                ]
            }
        ],
        price: "₦1,150,000",
        oldPrice: "₦1,300,000",
        discount: "12% OFF"
    },

    "nova-core": {
        name: "NOVA CORE",
        category: "Phones",
        categoryId: "phones",
        image: "core-black-01.png",
        images: [
            "core-black-01.png",
            "core-black-02.png",
            "core-black-03.png"
        ],
        variants: [
            {
                name: "Black",
                images: [
                    "core-black-01.png",
                    "core-black-02.png",
                    "core-black-03.png"
                ]
            },
            {
                name: "Silver",
                images: [
                    "core-silver-01.png",
                    "core-silver-02.png",
                    "core-silver-03.png"
                ]
            },
            {
                name: "Ice Blue",
                images: [
                    "core-blue-01.png",
                    "core-blue-02.png",
                    "core-blue-03.png"
                ]
            }
        ],
        price: "₦480,000",
        oldPrice: "₦550,000",
        discount: "13% OFF"
    },

    "nova-luma": {
        name: "NOVA LUMA",
        category: "phones",
        categoryId: "phones",
        image: "luma-black-01.png",
        images: [
            "luma-black-01.png",
            "luma-black-02.png",
            "luma-black-03.png"
        ],
        variants: [
            {
                name: "Space Black",
                images: [
                    "luma-black-01.png",
                    "luma-black-02.png",
                    "luma-black-03.png"
                ]
            },
            {
                name: "Silver",
                images: [
                    "luma-silver-01.png",
                    "luma-silver-02.png",
                    "luma-silver-03.png"
                ]
            },
            {
                name: "Starlight",
                images: [
                    "luma-starlight-01.png",
                    "luma-starlight-02.png",
                    "luma-starlight-03.png"
                ]
            }
        ],
        price: "₦980,000",
        oldPrice: "₦1,100,000",
        discount: "11% OFF"
    },

    "nova-vantage": {
        name: "NOVA VANTAGE",
        category: "Laptops",
        categoryId: "laptops",
        image: "vantage-graphite-01.png",
        images: [
            "vantage-graphite-01.png",
            "vantage-graphite-02.png",
            "vantage-graphite-03.png"
        ],
        variants: [
            {
                name: "Graphite",
                images: [
                    "vantage-graphite-01.png",
                    "vantage-graphite-02.png",
                    "vantage-graphite-03.png"
                ]
            },
            {
                name: "Titanium",
                images: [
                    "vantage-titanium-01.png",
                    "vantage-titanium-02.png",
                    "vantage-titanium-03.png"
                ]
            },
            {
                name: "Deep Blue",
                images: [
                    "vantage-blue-01.png",
                    "vantage-blue-02.png",
                    "vantage-blue-03.png"
                ]
            }
        ],
        price: "₦1,350,000",
        oldPrice: "₦1,500,000",
        discount: "10% OFF"
    },

    "nova-edge": {
        name: "NOVA EDGE",
        category: "Laptops",
        categoryId: "laptops",
        image: "edge-midnight-01.png",
        images: [
            "edge-midnight-01.png",
            "edge-midnight-02.png",
            "edge-midnight-03.png"
        ],
        variants: [
            {
                name: "Midnight",
                images: [
                    "edge-midnight-01.png",
                    "edge-midnight-02.png",
                    "edge-midnight-03.png"
                ]
            },
            {
                name: "Silver",
                images: [
                    "edge-silver-01.png",
                    "edge-silver-02.png",
                    "edge-silver-03.png"
                ]
            },
            {
                name: "Violet",
                images: [
                    "edge-violet-01.png",
                    "edge-violet-02.png",
                    "edge-violet-03.png"
                ]
            }
        ],
        price: "₦780,000",
        oldPrice: "₦880,000",
        discount: "11% OFF"
    },

    "nova-sonic": {
        name: "NOVA SONIC",
        category: "Audio",
        categoryId: "audio",
        image: "sonic-black-01.png",
        images: [
            "sonic-black-01.png",
            "sonic-black-02.png",
            "sonic-black-03.png"
        ],
        variants: [
            {
                name: "Black",
                images: [
                    "sonic-black-01.png",
                    "sonic-black-02.png",
                    "sonic-black-03.png"
                ]
            },
            {
                name: "White",
                images: [
                    "sonic-white-01.png",
                    "sonic-white-02.png",
                    "sonic-white-03.png"
                ]
            },
            {
                name: "Violet",
                images: [
                    "sonic-violet-01.png",
                    "sonic-violet-02.png",
                    "sonic-violet-03.png"
                ]
            }
        ],
        price: "₦85,000",
        oldPrice: "₦100,000",
        discount: "15% OFF"
    },

    "nova-sonic-plus": {
        name: "NOVA SONIC+",
        category: "Audio",
        categoryId: "audio",
        image: "sonic-plus-graphite-01.png",
        images: [
            "sonic-plus-graphite-01.png",
            "sonic-plus-graphite-02.png",
            "sonic-plus-graphite-03.png"
        ],
        variants: [
            {
                name: "Graphite",
                images: [
                    "sonic-plus-graphite-01.png",
                    "sonic-plus-graphite-02.png",
                    "sonic-plus-graphite-03.png"
                ]
            },
            {
                name: "Silver",
                images: [
                    "sonic-plus-silver-01.png",
                    "sonic-plus-silver-02.png",
                    "sonic-plus-silver-03.png"
                ]
            },
            {
                name: "Deep Purple",
                images: [
                    "sonic-plus-purple-01.png",
                    "sonic-plus-purple-02.png",
                    "sonic-plus-purple-03.png"
                ]
            }
        ],
        price: "₦125,000",
        oldPrice: "₦145,000",
        discount: "14% OFF"
    },

    "nova-echo": {
        name: "NOVA ECHO",
        category: "Audio",
        categoryId: "audio",
        image: "echo-black-01.png",
        images: [
            "echo-black-01.png",
            "echo-black-02.png",
            "echo-black-03.png"
        ],
        variants: [
            {
                name: "Black",
                images: [
                    "echo-black-01.png",
                    "echo-black-02.png",
                    "echo-black-03.png"
                ]
            },
            {
                name: "Silver",
                images: [
                    "echo-silver-01.png",
                    "echo-silver-02.png",
                    "echo-silver-03.png"
                ]
            },
            {
                name: "Navy",
                images: [
                    "echo-navy-01.png",
                    "echo-navy-02.png",
                    "echo-navy-03.png"
                ]
            }
        ],
        price: "₦165,000",
        oldPrice: "₦190,000",
        discount: "13% OFF"
    },

    "nova-beam": {
        name: "NOVA BEAM",
        category: "Audio",
        categoryId: "audio",
        image: "beam-black-01.png",
        images: [
            "beam-black-01.png",
            "beam-black-02.png",
            "beam-black-03.png"
        ],
        variants: [
            {
                name: "Black",
                images: [
                    "beam-black-01.png",
                    "beam-black-02.png",
                    "beam-black-03.png"
                ]
            },
            {
                name: "White",
                images: [
                    "beam-white-01.png",
                    "beam-white-02.png",
                    "beam-white-03.png"
                ]
            },
            {
                name: "Deep Purple",
                images: [
                    "beam-purple-01.png",
                    "beam-purple-02.png",
                    "beam-purple-03.png"
                ]
            }
        ],
        price: "₦110,000",
        oldPrice: "₦130,000",
        discount: "15% OFF"
    },

    "nova-pulse-watch": {
        name: "NOVA PULSE WATCH",
        category: "Watches",
        categoryId: "watches",
        image: "pulse-watch-graphite-01.png",
        images: [
            "pulse-watch-graphite-01.png",
            "pulse-watch-graphite-02.png",
            "pulse-watch-graphite-03.png"
        ],
        variants: [
            {
                name: "Graphite",
                images: [
                    "pulse-watch-graphite-01.png",
                    "pulse-watch-graphite-02.png",
                    "pulse-watch-graphite-03.png"
                ]
            },
            {
                name: "Silver",
                images: [
                    "pulse-watch-silver-01.png",
                    "pulse-watch-silver-02.png",
                    "pulse-watch-silver-03.png"
                ]
            },
            {
                name: "Titanium",
                images: [
                    "pulse-watch-titanium-01.png",
                    "pulse-watch-titanium-02.png",
                    "pulse-watch-titanium-03.png"
                ]
            }
        ],
        price: "₦220,000",
        oldPrice: "₦250,000",
        discount: "12% OFF"
    },

    "nova-watch-se": {
        name: "NOVA WATCH SE",
        category: "Watches",
        categoryId: "watches",
        image: "watch-se-black-01.png",
        images: [
            "watch-se-black-01.png",
            "watch-se-black-02.png",
            "watch-se-black-03.png"
        ],
        variants: [
            {
                name: "Black",
                images: [
                    "watch-se-black-01.png",
                    "watch-se-black-02.png",
                    "watch-se-black-03.png"
                ]
            },
            {
                name: "Silver",
                images: [
                    "watch-se-silver-01.png",
                    "watch-se-silver-02.png",
                    "watch-se-silver-03.png"
                ]
            },
            {
                name: "Midnight Blue",
                images: [
                    "watch-se-blue-01.png",
                    "watch-se-blue-02.png",
                    "watch-se-blue-03.png"
                ]
            }
        ],
        price: "₦135,000",
        oldPrice: "₦160,000",
        discount: "16% OFF"
    },

    "nova-vault": {
        name: "NOVA VAULT",
        category: "Powerbank",
        categoryId: "powerbank",
        image: "vault-black-01.png",
        images: [
            "vault-black-01.png",
            "vault-black-02.png",
            "vault-black-03.png"
        ],
        variants: [
            {
                name: "Black",
                images: [
                    "vault-black-01.png",
                    "vault-black-02.png",
                    "vault-black-03.png"
                ]
            },
            {
                name: "Silver",
                images: [
                    "vault-silver-01.png",
                    "vault-silver-02.png",
                    "vault-silver-03.png"
                ]
            },
            {
                name: "Violet",
                images: [
                    "vault-violet-01.png",
                    "vault-violet-02.png",
                    "vault-violet-03.png"
                ]
            }
        ],
        price: "₦75,000",
        oldPrice: "₦90,000",
        discount: "17% OFF"
    },

    "nova-vault-pro": {
        name: "NOVA VAULT PRO",
        category: "Powerbank",
        categoryId: "powerbank",
        image: "vault-pro-graphite-01.png",
        images: [
            "vault-pro-graphite-01.png",
            "vault-pro-graphite-02.png",
            "vault-pro-graphite-03.png"
        ],
        variants: [
            {
                name: "Graphite",
                images: [
                    "vault-pro-graphite-01.png",
                    "vault-pro-graphite-02.png",
                    "vault-pro-graphite-03.png"
                ]
            },
            {
                name: "Titanium",
                images: [
                    "vault-pro-titanium-01.png",
                    "vault-pro-titanium-02.png",
                    "vault-pro-titanium-03.png"
                ]
            },
            {
                name: "Blue",
                images: [
                    "vault-pro-blue-01.png",
                    "vault-pro-blue-02.png",
                    "vault-pro-blue-03.png"
                ]
            }
        ],
        price: "₦115,000",
        oldPrice: "₦135,000",
        discount: "15% OFF"
    },

    "nova-arc": {
        name: "NOVA ARC",
        category: "Charger",
        categoryId: "charger",
        image: "arc-black-01.png",
        images: [
            "arc-black-01.png",
            "arc-black-02.png",
            "arc-black-03.png"
        ],
        variants: [
            {
                name: "Black",
                images: [
                    "arc-black-01.png",
                    "arc-black-02.png",
                    "arc-black-03.png"
                ]
            },
            {
                name: "Silver",
                images: [
                    "arc-silver-01.png",
                    "arc-silver-02.png",
                    "arc-silver-03.png"
                ]
            },
            {
                name: "White",
                images: [
                    "arc-white-01.png",
                    "arc-white-02.png",
                    "arc-white-03.png"
                ]
            }
        ],
        price: "₦65,000",
        oldPrice: "₦75,000",
        discount: "13% OFF"
    },

    "nova-grid": {
        name: "NOVA GRID",
        category: "Charger",
        categoryId: "charger",
        image: "grid-black-01.png",
        images: [
            "grid-black-01.png",
            "grid-black-02.png",
            "grid-black-03.png"
        ],
        variants: [
            {
                name: "Black",
                images: [
                    "grid-black-01.png",
                    "grid-black-02.png",
                    "grid-black-03.png"
                ]
            },
            {
                name: "White",
                images: [
                    "grid-white-01.png",
                    "grid-white-02.png",
                    "grid-white-03.png"
                ]
            },
            {
                name: "Violet",
                images: [
                    "grid-violet-01.png",
                    "grid-violet-02.png",
                    "grid-violet-03.png"
                ]
            }
        ],
        price: "₦55,000",
        oldPrice: "₦65,000",
        discount: "15% OFF"
    },

    "nova-link": {
        name: "NOVA LINK",
        category: "Accessories",
        categoryId: "accessories",
        image: "link-black-01.png",
        images: [
            "link-black-01.png",
            "link-black-02.png",
            "link-black-03.png"
        ],
        variants: [
            {
                name: "Black",
                images: [
                    "link-black-01.png",
                    "link-black-02.png",
                    "link-black-03.png"
                ]
            },
            {
                name: "White",
                images: [
                    "link-white-01.png",
                    "link-white-02.png",
                    "link-white-03.png"
                ]
            },
            {
                name: "Violet",
                images: [
                    "link-violet-01.png",
                    "link-violet-02.png",
                    "link-violet-03.png"
                ]
            }
        ],
        price: "₦25,000",
        oldPrice: "₦30,000",
        discount: "17% OFF"
    },

    "nova-hub": {
        name: "NOVA HUB",
        category: "Accessories",
        categoryId: "accessories",
        image: "hub-graphite-01.png",
        images: [
            "hub-graphite-01.png",
            "hub-graphite-02.png",
            "hub-graphite-03.png"
        ],
        variants: [
            {
                name: "Graphite",
                images: [
                    "hub-graphite-01.png",
                    "hub-graphite-02.png",
                    "hub-graphite-03.png"
                ]
            },
            {
                name: "Silver",
                images: [
                    "hub-silver-01.png",
                    "hub-silver-02.png",
                    "hub-silver-03.png"
                ]
            },
            {
                name: "Space Black",
                images: [
                    "hub-black-01.png",
                    "hub-black-02.png",
                    "hub-black-03.png"
                ]
            }
        ],
        price: "₦70,000",
        oldPrice: "₦85,000",
        discount: "18% OFF"
    },

    "nova-dock": {
        name: "NOVA DOCK",
        category: "Accessories",
        categoryId: "accessories",
        image: "dock-black-01.png",
        images: [
            "dock-black-01.png",
            "dock-black-02.png",
            "dock-black-03.png"
        ],
        variants: [
            {
                name: "Black",
                images: [
                    "dock-black-01.png",
                    "dock-black-02.png",
                    "dock-black-03.png"
                ]
            },
            {
                name: "Silver",
                images: [
                    "dock-silver-01.png",
                    "dock-silver-02.png",
                    "dock-silver-03.png"
                ]
            },
            {
                name: "Titanium",
                images: [
                    "dock-titanium-01.png",
                    "dock-titanium-02.png",
                    "dock-titanium-03.png"
                ]
            }
        ],
        price: "₦95,000",
        oldPrice: "₦110,000",
        discount: "14% OFF"
    }
};


const NOVA_PRODUCT_DETAILS = {
    "nova-aura": {
        price: "₦649,000", oldPrice: "₦729,000", discount: "11% OFF", rating: "4.8", reviews: 126,
        description: "A refined flagship smartphone built for fast performance, expressive photography and an immersive all-day experience.",
        specifications: { Display: "6.7-inch OLED, 120Hz", Processor: "NOVA X1 flagship chipset", Memory: "12GB RAM", Camera: "50MP triple-camera system", Battery: "5,000mAh with fast charging", Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.4" },
        reviewsList: [["Tobi A.","★★★★★","The display is gorgeous and everything feels very fluid. The graphite finish looks even better in person."],["Amara N.","★★★★★","Camera quality surprised me, especially at night. Battery easily carries me through the day."],["David O.","★★★★☆","Premium feel and excellent performance. I only wish the box included more accessories."]]
    },
    "nova-pulse": {
        price: "₦549,000", rating: "4.7", reviews: 94,
        description: "A performance-focused smartphone with a smooth display, dependable battery life and enough power for gaming, work and everyday creativity.",
        specifications: { Display: "6.6-inch OLED, 120Hz", Processor: "NOVA P8 performance chipset", Memory: "8GB RAM", Camera: "50MP dual-camera system", Battery: "5,100mAh with fast charging", Connectivity: "5G, Wi-Fi 6, Bluetooth 5.3" },
        reviewsList: [["Chinedu K.","★★★★★","Very fast phone. Games run smoothly and it does not feel bulky in the hand."],["Zainab M.","★★★★☆","Battery life has been solid and the blue finish is beautiful."],["Femi R.","★★★★★","Good balance of performance and price. The screen is my favourite part."]]
    },
    "nova-flex": {
        price: "₦899,000", oldPrice: "₦999,000", discount: "10% OFF", rating: "4.7", reviews: 71,
        description: "A premium foldable designed to move between pocket-sized convenience and a spacious canvas for work, entertainment and multitasking.",
        specifications: { MainDisplay: "7.6-inch foldable OLED, 120Hz", CoverDisplay: "6.2-inch OLED", Processor: "NOVA X1 flagship chipset", Memory: "12GB RAM", Camera: "50MP triple-camera system", Battery: "4,700mAh with fast charging" },
        reviewsList: [["Ifeanyi C.","★★★★★","The inner display changes how I multitask. It feels futuristic without being complicated."],["Morenike S.","★★★★☆","Beautiful hardware and the hinge feels reassuring. Battery is good, not exceptional."],["Kelvin E.","★★★★★","Reading, videos and split-screen apps are fantastic on this."]]
    },
    "nova-core": {
        price: "₦349,000", rating: "4.6", reviews: 138,
        description: "An everyday premium smartphone that keeps the essentials strong: a vivid display, reliable cameras, smooth performance and long battery life.",
        specifications: { Display: "6.5-inch AMOLED, 90Hz", Processor: "NOVA C6 chipset", Memory: "8GB RAM", Camera: "48MP dual-camera system", Battery: "5,000mAh", Connectivity: "5G, Wi-Fi 6, Bluetooth 5.3" },
        reviewsList: [["Adaeze P.","★★★★★","Does everything I need without feeling like a compromise."],["Samuel B.","★★★★☆","Clean design, good battery and a very nice screen for the price."],["Ruth I.","★★★★★","The Ice Blue finish is lovely and the phone has been consistently smooth."]]
    },
    "nova-luma": {
        price: "₦699,000", rating: "4.8", reviews: 82,
        description: "An everyday premium smartphone that keeps the essentials strong: a vivid display, reliable cameras, smooth performance and long battery life.",
        specifications: { Display: "14-inch 2.8K display", Processor: "NOVA M2 mobile processor", Memory: "16GB RAM", Battery: "Up to 16 hours", Ports: "2× USB-C, USB-A, audio jack", Weight: "1.25kg" },
        reviewsList: [["Precious U.","★★★★★","Does everything I need without feeling like a compromise."],["Daniel A.","★★★★★","Excellent screen and the battery lasts through most of my workday."],["Nneka J.","★★★★☆","Very portable and quiet. I would have liked one more full-size port."]]
    },
    "nova-vantage": {
        price: "₦899,000", rating: "4.8", reviews: 64,
        description: "A high-performance professional laptop built for demanding creative work, development and serious multitasking.",
        specifications: { Display: "16-inch 3K, 120Hz", Processor: "NOVA M2 Pro", Memory: "32GB RAM", Graphics: "NOVA Studio graphics", Battery: "Up to 13 hours", Ports: "USB-C, USB-A, HDMI, SD card" },
        reviewsList: [["Michael T.","★★★★★","Handles my development workflow and multiple apps without slowing down."],["Kemi L.","★★★★★","The larger display is excellent for editing and the build feels properly premium."],["Obinna E.","★★★★☆","Powerful machine. It is heavier than LUMA, but that is expected for this class."]]
    },
    "nova-edge": {
        price: "₦599,000", rating: "4.6", reviews: 77,
        description: "A slim professional laptop balancing portability, crisp visuals and responsive performance for work wherever the day takes you.",
        specifications: { Display: "14-inch 2.5K display", Processor: "NOVA M2", Memory: "16GB RAM", Battery: "Up to 15 hours", Ports: "2× USB-C, USB-A, HDMI", Weight: "1.35kg" },
        reviewsList: [["Temi F.","★★★★★","Looks clean, starts quickly and fits easily into my work bag."],["Joshua N.","★★★★☆","Strong everyday laptop with a very sharp display."],["Halima G.","★★★★★","I use it for work and light editing. It has been fast and dependable."]]
    },
    "nova-sonic": {
        price: "₦69,000", rating: "4.6", reviews: 153,
        description: "Comfortable wireless headphones tuned for rich everyday listening, clear calls and long sessions without cable clutter.",
        specifications: { Drivers: "40mm dynamic drivers", Battery: "Up to 38 hours", Charging: "USB-C fast charge", Connectivity: "Bluetooth 5.3", Microphones: "Dual beamforming microphones", Weight: "245g" },
        reviewsList: [["Tolu M.","★★★★★","Comfortable for long listening sessions and the bass is clean, not muddy."],["Grace E.","★★★★☆","Good sound and battery. Call quality has also been reliable."],["Bayo S.","★★★★★","For the price, these are an easy recommendation."]]
    },
    "nova-sonic-plus": {
        price: "₦99,000", oldPrice: "₦119,000", discount: "17% OFF", rating: "4.8", reviews: 117,
        description: "NOVA's flagship wireless headphones with deeper detail, active noise cancellation and a more spacious, immersive sound.",
        specifications: { Drivers: "45mm high-resolution drivers", NoiseControl: "Adaptive active noise cancellation", Battery: "Up to 45 hours", Charging: "USB-C fast charge", Connectivity: "Bluetooth 5.4, multipoint", Audio: "Spatial audio support" },
        reviewsList: [["Maya O.","★★★★★","The noise cancellation is excellent in traffic and the sound has plenty of detail."],["Emeka D.","★★★★★","Very comfortable and the battery seems to go forever."],["Lola A.","★★★★☆","Great headphones. The case could be smaller, but the audio is worth it."]]
    },
    "nova-echo": {
        price: "₦129,000", rating: "4.7", reviews: 88,
        description: "A portable smart speaker that fills a room with balanced sound while staying compact enough to move wherever the gathering goes.",
        specifications: { Audio: "360° room-filling sound", Battery: "Up to 18 hours", Connectivity: "Bluetooth 5.3, Wi-Fi", Protection: "IP67 water and dust resistance", Charging: "USB-C", Controls: "Touch controls with voice assistant support" },
        reviewsList: [["Aisha K.","★★★★★","Much bigger sound than I expected from the size."],["Victor O.","★★★★☆","Great for the balcony and small gatherings. Connection has been stable."],["Chioma N.","★★★★★","Clear vocals, good bass and I like that I can carry it around easily."]]
    },
    "nova-beam": {
        price: "₦89,000", rating: "4.6", reviews: 69,
        description: "A compact home sound system designed to give movies, music and games clearer dialogue, wider sound and satisfying low-end impact.",
        specifications: { System: "2.1-channel soundbar system", Output: "180W peak output", Subwoofer: "Wireless compact subwoofer", Connectivity: "Bluetooth 5.3, HDMI ARC, optical", Modes: "Movie, Music, Game, Voice", Control: "Remote and onboard controls" },
        reviewsList: [["Kunle J.","★★★★★","Movies sound dramatically better than my TV speakers."],["Seyi A.","★★★★☆","Easy setup and the subwoofer adds enough punch without overwhelming the room."],["Nora C.","★★★★★","Dialogue is much clearer now. Very happy with it."]]
    },
    "nova-pulse-watch": {
        price: "₦169,000", rating: "4.7", reviews: 102,
        description: "A premium smartwatch for fitness, notifications and everyday health insights, wrapped in a polished design that works beyond the gym.",
        specifications: { Display: "1.9-inch AMOLED", Battery: "Up to 5 days", Health: "Heart rate, SpO₂, sleep tracking", Fitness: "100+ workout modes", Protection: "5ATM water resistance", Connectivity: "Bluetooth, GPS, NFC" },
        reviewsList: [["Joy E.","★★★★★","The screen is bright outdoors and the fitness tracking has been consistent."],["Collins U.","★★★★☆","Looks premium enough to wear to work, not just the gym."],["Damilola P.","★★★★★","Notifications and sleep tracking are the features I use most. Battery is solid."]]
    },
    "nova-watch-se": {
        price: "₦99,000", rating: "4.5", reviews: 121,
        description: "An approachable smartwatch with the health, fitness and notification essentials in a comfortable everyday design.",
        specifications: { Display: "1.7-inch AMOLED", Battery: "Up to 7 days", Health: "Heart rate and sleep tracking", Fitness: "80+ workout modes", Protection: "5ATM water resistance", Connectivity: "Bluetooth, GPS" },
        reviewsList: [["Maryam A.","★★★★★","Simple to use and the battery easily lasts several days."],["Peter I.","★★★★☆","Good fitness features for the price and it is comfortable overnight."],["Esther N.","★★★★☆","Does the important things well. I especially like the sleep tracking."]]
    },
    "nova-vault": {
        price: "₦55,000", rating: "4.7", reviews: 146,
        description: "A slim high-capacity power bank made for dependable daily charging without turning your bag into a brick collection.",
        specifications: { Capacity: "20,000mAh", Output: "Up to 45W USB-C PD", Ports: "2× USB-C, USB-A", Charging: "USB-C input", Safety: "Overcharge and temperature protection", Indicator: "Digital battery display" },
        reviewsList: [["Ibrahim S.","★★★★★","Charges my phone several times and still fits comfortably in my backpack."],["Favour O.","★★★★☆","Fast charging works well. It has a little weight, but the capacity explains it."],["Henry C.","★★★★★","Reliable travel companion. The battery display is very useful."]]
    },
    "nova-vault-pro": {
        price: "₦85,000", oldPrice: "₦99,000", discount: "14% OFF", rating: "4.8", reviews: 93,
        description: "A high-output power bank for phones, tablets and compatible laptops, built for people who need serious portable power.",
        specifications: { Capacity: "27,000mAh", Output: "Up to 100W USB-C PD", Ports: "2× USB-C, USB-A", Charging: "65W USB-C fast input", Safety: "Multi-layer power protection", Display: "Smart power status display" },
        reviewsList: [["Ade B.","★★★★★","Being able to top up my laptop away from a socket is the killer feature."],["Sarah M.","★★★★★","Powerful, well built and charges surprisingly quickly for the capacity."],["Nnamdi O.","★★★★☆","Excellent output. It is substantial in the hand, but that is expected."]]
    },
    "nova-arc": {
        price: "₦49,000", rating: "4.6", reviews: 174,
        description: "A compact fast wall charger that delivers high power without occupying half the socket area around it.",
        specifications: { Output: "65W USB-C PD", Ports: "2× USB-C", Technology: "GaN charging technology", Input: "100–240V", Safety: "Overvoltage and temperature protection", Compatibility: "Phones, tablets and USB-C laptops" },
        reviewsList: [["Faith K.","★★★★★","Small charger, big output. It handles my laptop and phone nicely."],["Jide A.","★★★★☆","Compact enough for travel and does not get excessively hot."],["Mercy U.","★★★★★","One charger has replaced two in my bag."]]
    },
    "nova-grid": {
        price: "₦39,000", rating: "4.5", reviews: 109,
        description: "A multi-port charging station that keeps several everyday devices powered from one tidy desktop hub.",
        specifications: { Output: "100W shared output", Ports: "3× USB-C, 1× USB-A", Technology: "GaN power delivery", Input: "100–240V", Safety: "Smart power distribution", Use: "Desktop and travel charging" },
        reviewsList: [["Tosin B.","★★★★★","My desk finally has one charger instead of cables everywhere."],["Efe O.","★★★★☆","Power sharing works well with my phone, watch and laptop."],["Janet A.","★★★★☆","Very useful at home. I would buy another for the office."]]
    },
    "nova-link": {
        price: "₦19,000", rating: "4.4", reviews: 132,
        description: "A compact connectivity adapter for quickly adding the everyday ports your modern devices sometimes forget to bring along.",
        specifications: { Connection: "USB-C", Ports: "USB-A, HDMI, USB-C pass-through", Video: "Up to 4K HDMI output", Data: "Up to 5Gbps", Charging: "Up to 60W pass-through", Body: "Compact aluminium housing" },
        reviewsList: [["Chisom N.","★★★★★","Exactly what I needed for presentations and flash drives."],["Kayode T.","★★★★☆","Small, straightforward and works without installing anything."],["Rita E.","★★★★☆","Useful little adapter to keep in my laptop sleeve."]]
    },
    "nova-hub": {
        price: "₦55,000", rating: "4.7", reviews: 84,
        description: "A professional USB-C hub that turns one port into a flexible workstation for displays, storage, networking and power.",
        specifications: { Connection: "USB-C", Ports: "HDMI, USB-C, 2× USB-A, SD/microSD, Ethernet", Video: "Up to 4K 60Hz", Network: "Gigabit Ethernet", Charging: "Up to 100W pass-through", Body: "Aluminium enclosure" },
        reviewsList: [["Olamide F.","★★★★★","Everything I need for my desk comes through one cable now."],["Blessing I.","★★★★★","HDMI and Ethernet have been stable and the aluminium body feels premium."],["Paul E.","★★★★☆","Very capable hub. Cable could be a little longer for my setup."]]
    },
    "nova-dock": {
        price: "₦69,000", rating: "4.6", reviews: 76,
        description: "A clean desktop charging dock designed to keep compatible everyday devices powered, visible and organised in one place.",
        specifications: { Charging: "3-in-1 wireless charging", PhoneOutput: "Up to 15W", EarbudOutput: "Up to 5W", WatchOutput: "Dedicated watch charging area", Input: "USB-C", Safety: "Foreign-object and temperature protection" },
        reviewsList: [["Ngozi A.","★★★★★","My bedside table looks much cleaner and I wake up with everything charged."],["Deji K.","★★★★☆","Solid build and convenient. Alignment becomes second nature after a day."],["Anita O.","★★★★★","Simple product, but it makes my setup feel much more organised."]]
    }
};

Object.keys(NOVA_PRODUCT_DETAILS).forEach(function(id) {
    const product = NOVA_FALLBACK_PRODUCTS[id];
    const details = NOVA_PRODUCT_DETAILS[id];
    if (!product) return;
    delete product.oldPrice;
    delete product.discount;
    Object.assign(product, details);
});

if (NOVA_FALLBACK_PRODUCTS["nova-echo"]) {
    const echo = NOVA_FALLBACK_PRODUCTS["nova-echo"];
    echo.variants = echo.variants.map(function(variant) {
        if (variant.name === "Navy") {
            return { name: "Violet", images: ["echo-violet-01.png", "echo-violet-02.png", "echo-violet-03.png"] };
        }
        return variant;
    });
}

function getNovaProducts() {
    try {
        if (
            typeof products !== "undefined" &&
            products &&
            typeof products === "object" &&
            Object.keys(products).length > 0
        ) {
            return products;
        }
    } catch (error) {
        console.error("Unable to load products:", error);
    }

    return NOVA_FALLBACK_PRODUCTS;
}

window.NOVA_PRODUCTS = getNovaProducts();

function getCart() {
    try {
        const stored = JSON.parse(
            localStorage.getItem(CART_STORAGE_KEY)
        );

        if (!Array.isArray(stored)) {
            return [];
        }

        const catalog = getNovaProducts();

        const cleaned = stored.filter(function(item) {
            return (
                item &&
                typeof item.id === "string" &&
                catalog[item.id] &&
                Number(item.quantity) > 0
            );
        });

        if (cleaned.length !== stored.length) {
            saveCart(cleaned);
        }

        return cleaned;
    } catch (error) {
        localStorage.removeItem(CART_STORAGE_KEY);
        return [];
    }
}

function saveCart(cart) {
    try {
        localStorage.setItem(
            CART_STORAGE_KEY,
            JSON.stringify(cart)
        );
    } catch (error) {
        console.error("Cart could not be saved:", error);
    }
}

function getCartCount() {
    return getCart().reduce(function(total, item) {
        return total + Number(item.quantity || 0);
    }, 0);
}

function updateCartCount() {
    const elements = document.querySelectorAll("#cart-count");

    if (!elements.length) {
        return;
    }

    const count = getCartCount();

    elements.forEach(function(element) {
        element.textContent = count > 0 ? count : "";
        element.style.display = count > 0 ? "flex" : "none";
    });
}

function getWishlist() {
    try {
        const stored = JSON.parse(localStorage.getItem(WISHLIST_STORAGE_KEY));
        if (!Array.isArray(stored)) return [];
        const catalog = getNovaProducts();
        return stored.filter(function(id, index) {
            return typeof id === "string" && catalog[id] && stored.indexOf(id) === index;
        });
    } catch (error) {
        localStorage.removeItem(WISHLIST_STORAGE_KEY);
        return [];
    }
}

function saveWishlist(wishlist) {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    updateWishlistUI();
}

function isInWishlist(productId) {
    return getWishlist().includes(productId);
}

function toggleWishlist(productId) {
    const catalog = getNovaProducts();
    if (!catalog[productId]) return false;
    const wishlist = getWishlist();
    const index = wishlist.indexOf(productId);
    let added = false;
    if (index === -1) {
        wishlist.push(productId);
        added = true;
    } else {
        wishlist.splice(index, 1);
    }
    saveWishlist(wishlist);
    window.dispatchEvent(new CustomEvent("nova:wishlist-changed", { detail: { productId: productId, added: added } }));
    return added;
}

function setupWishlistStyles() {
    if (document.getElementById("nova-wishlist-styles")) return;
    const style = document.createElement("style");
    style.id = "nova-wishlist-styles";
    style.textContent = `
        .wishlist-header-link { position: relative; text-decoration: none; }
        .wishlist-count { position:absolute; top:-7px; right:-8px; min-width:17px; height:17px; padding:0 4px; display:none; align-items:center; justify-content:center; border-radius:999px; background:#440080; color:#fff; font-size:10px; font-weight:700; }
        .product-card { position: relative; }
        .product-wishlist-button { position:absolute; z-index:5; top:12px; right:12px; width:38px; height:38px; display:flex; align-items:center; justify-content:center; border:1px solid rgba(255,255,255,.14); border-radius:50%; background:rgba(0,0,0,.62); color:#fff; font-size:21px; line-height:1; cursor:pointer; backdrop-filter:blur(8px); transition:transform .2s ease, background .2s ease, border-color .2s ease; }
        .product-wishlist-button:hover { transform:scale(1.08); border-color:rgba(130,60,200,.8); background:rgba(68,0,128,.82); }
        .product-wishlist-button.active { background:#440080; border-color:#6d24ad; }
    `;
    document.head.appendChild(style);
}

function ensureWishlistHeaderLink() {
    const navRight = document.querySelector(".nav-right");
    if (!navRight || navRight.querySelector(".wishlist-header-link")) return;
    const cart = navRight.querySelector(".cart-button");
    const link = document.createElement("a");
    link.href = "Wishlist.html";
    link.className = "header-icon wishlist-header-link";
    link.setAttribute("aria-label", "Wishlist");
    link.innerHTML = '<span aria-hidden="true">♡</span><span class="wishlist-count" id="wishlist-count">0</span>';
    navRight.insertBefore(link, cart || navRight.firstChild);
}

function ensureProductWishlistButtons() {
    document.querySelectorAll(".product-card").forEach(function(card) {
        const productId = card.dataset.productId || (typeof getProductIdFromCard === "function" ? getProductIdFromCard(card) : "");
        if (!productId || card.querySelector(".product-wishlist-button")) return;
        const button = document.createElement("button");
        button.type = "button";
        button.className = "product-wishlist-button";
        button.dataset.productId = productId;
        button.setAttribute("aria-label", "Add to wishlist");
        button.addEventListener("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
            toggleWishlist(productId);
        });
        card.appendChild(button);
    });
}

function updateWishlistUI() {
    setupWishlistStyles();
    ensureWishlistHeaderLink();
    ensureProductWishlistButtons();
    const wishlist = getWishlist();
    document.querySelectorAll(".wishlist-count").forEach(function(count) {
        count.textContent = wishlist.length;
        count.style.display = wishlist.length ? "flex" : "none";
    });
    document.querySelectorAll(".product-wishlist-button").forEach(function(button) {
        const active = wishlist.includes(button.dataset.productId);
        button.classList.toggle("active", active);
        button.textContent = active ? "♥" : "♡";
        button.setAttribute("aria-pressed", active ? "true" : "false");
        button.setAttribute("aria-label", active ? "Remove from wishlist" : "Add to wishlist");
    });
}

function getProductPrice(value) {
    return Number(
        String(value || "")
            .replace(/₦/g, "")
            .replace(/,/g, "")
            .trim()
    ) || 0;
}

function formatPrice(value) {
    return "₦" +
        Number(value || 0).toLocaleString("en-NG");
}

function getPhoneStorageOptions() {
    return [
        "128GB",
        "256GB",
        "512GB",
        "1TB"
    ];
}

function getLaptopStorageOptions() {
    return [
        "256GB SSD",
        "512GB SSD",
        "1TB SSD"
    ];
}

function getStorageOptions(product) {
    if (!product) {
        return [];
    }

    if (product.categoryId === "phones") {
        return getPhoneStorageOptions();
    }

    if (product.categoryId === "laptops") {
        return getLaptopStorageOptions();
    }

    return [];
}

function getStoragePremiums(product) {
    if (!product) {
        return {};
    }

    const base = getProductPrice(product.price);

    if (product.categoryId === "phones") {
        if (base >= 700000) {
            return {
                "128GB": 0,
                "256GB": 70000,
                "512GB": 190000,
                "1TB": 370000
            };
        }

        if (base >= 400000) {
            return {
                "128GB": 0,
                "256GB": 60000,
                "512GB": 140000,
                "1TB": 250000
            };
        }

        if (base >= 250000) {
            return {
                "128GB": 0,
                "256GB": 50000,
                "512GB": 100000,
                "1TB": 180000
            };
        }

        return {
            "128GB": 0,
            "256GB": 35000,
            "512GB": 70000,
            "1TB": 120000
        };
    }

    if (product.categoryId === "laptops") {
        if (base >= 1200000) {
            return {
                "256GB SSD": 0,
                "512GB SSD": 120000,
                "1TB SSD": 300000
            };
        }

        if (base >= 800000) {
            return {
                "256GB SSD": 0,
                "512GB SSD": 100000,
                "1TB SSD": 250000
            };
        }

        if (base >= 400000) {
            return {
                "256GB SSD": 0,
                "512GB SSD": 80000,
                "1TB SSD": 180000
            };
        }

        return {
            "256GB SSD": 0,
            "512GB SSD": 60000,
            "1TB SSD": 120000
        };
    }

    return {};
}

function getStoragePrice(product, storage) {
    if (!product) {
        return 0;
    }

    const base = getProductPrice(product.price);
    const premiums = getStoragePremiums(product);

    return base + Number(premiums[storage] || 0);
}

function getDefaultStorage(product) {
    if (!product) {
        return "";
    }

    if (product.categoryId === "laptops") {
        return "256GB SSD";
    }

    if (product.categoryId === "phones") {
        return "128GB";
    }

    return "";
}

function getVariant(product, variantName) {
    if (!product || !Array.isArray(product.variants)) {
        return null;
    }

    return product.variants.find(function(variant) {
        return (
            String(variant.name || "").toLowerCase() ===
            String(variantName || "").toLowerCase()
        );
    }) || null;
}

function getDefaultVariant(product) {
    if (
        !product ||
        !Array.isArray(product.variants) ||
        !product.variants.length
    ) {
        return "";
    }

    return product.variants[0].name || "";
}

function getVariantImages(variant) {
    if (!variant) {
        return [];
    }

    if (
        Array.isArray(variant.images) &&
        variant.images.length
    ) {
        return variant.images;
    }

    if (variant.image) {
        return [variant.image];
    }

    return [];
}

function getProductImages(product, variantName = "") {
    if (!product) {
        return [];
    }

    const variant = getVariant(product, variantName);

    if (variant) {
        const variantImages = getVariantImages(variant);

        if (variantImages.length) {
            return variantImages;
        }
    }

    if (
        Array.isArray(product.images) &&
        product.images.length
    ) {
        return product.images;
    }

    if (product.image) {
        return [product.image];
    }

    return [];
}

function addProductToCart(
    productId,
    quantity = 1,
    storage = "",
    variantName = ""
) {
    const catalog = getNovaProducts();
    const product = catalog[productId];

    if (!product) {
        console.error("Product not found:", productId);
        return false;
    }

    const options = getStorageOptions(product);

    if (options.length > 0) {
        if (!options.includes(storage)) {
            storage = getDefaultStorage(product);
        }
    } else {
        storage = "";
    }

    const variants = Array.isArray(product.variants)
        ? product.variants
        : [];

    if (variants.length > 0) {
        const selectedVariant = getVariant(
            product,
            variantName
        );

        variantName = selectedVariant
            ? selectedVariant.name
            : getDefaultVariant(product);
    } else {
        variantName = "";
    }

    const amount = Math.max(
        1,
        Math.min(
            Math.floor(Number(quantity) || 1),
            10
        )
    );

    const unitPrice = getStoragePrice(
        product,
        storage
    );

    const cart = getCart();

    const existing = cart.find(function(item) {
        return (
            item.id === productId &&
            String(item.storage || "") ===
                String(storage || "") &&
            String(item.variant || "") ===
                String(variantName || "") &&
            item.isDeal !== true
        );
    });

    if (existing) {
        existing.quantity = Math.min(
            Number(existing.quantity || 0) + amount,
            10
        );

        existing.storage = storage;
        existing.variant = variantName;
        existing.unitPrice = unitPrice;
        existing.isDeal = false;
    } else {
        cart.push({
            id: productId,
            quantity: amount,
            storage: storage,
            variant: variantName,
            unitPrice: unitPrice,
            isDeal: false
        });
    }

    saveCart(cart);
    updateCartCount();

    return true;
}

function removeProductFromCart(
    productId,
    storage = "",
    variantName = ""
) {
    const updated = getCart().filter(function(item) {
        return !(
            item.id === productId &&
            String(item.storage || "") ===
                String(storage || "") &&
            String(item.variant || "") ===
                String(variantName || "")
        );
    });

    saveCart(updated);
    updateCartCount();
}

function updateCartItemQuantity(
    productId,
    quantity,
    storage = "",
    variantName = ""
) {
    const cart = getCart();

    const item = cart.find(function(entry) {
        return (
            entry.id === productId &&
            String(entry.storage || "") ===
                String(storage || "") &&
            String(entry.variant || "") ===
                String(variantName || "")
        );
    });

    if (!item) {
        return;
    }

    const amount = Number(quantity);

    if (
        !Number.isFinite(amount) ||
        amount <= 0
    ) {
        removeProductFromCart(
            productId,
            storage,
            variantName
        );

        return;
    }

    item.quantity = Math.min(
        Math.max(
            1,
            Math.floor(amount)
        ),
        10
    );

    saveCart(cart);
    updateCartCount();
}

function renderSearchResults(value) {
    const results =
        document.getElementById("search-results");

    if (!results) {
        return;
    }

    const catalog = getNovaProducts();

    const query = String(value || "")
        .trim()
        .toLowerCase();

    const matches = Object.entries(catalog)
        .filter(function(entry) {
            const product = entry[1];

            if (!query) {
                return true;
            }

            return (
                String(product.name || "")
                    .toLowerCase()
                    .includes(query) ||
                String(product.category || "")
                    .toLowerCase()
                    .includes(query) ||
                String(product.categoryId || "")
                    .toLowerCase()
                    .includes(query)
            );
        })
        .slice(0, 10);

    results.innerHTML = "";

    if (!matches.length) {
        results.innerHTML = `
            <div class="search-message">
                No products found.
            </div>
        `;

        results.classList.add("active");
        return;
    }

    matches.forEach(function(entry) {
        const id = entry[0];
        const product = entry[1];

        const result =
            document.createElement("button");

        result.type = "button";
        result.className = "search-result";

        const imageContainer =
            document.createElement("span");

        imageContainer.className =
            "search-result-image";

        const image =
            document.createElement("img");

        image.src = product.image || "";
        image.alt = product.name || "Product";
        image.loading = "lazy";

        image.onerror = function() {
            this.style.display = "none";
        };

        imageContainer.appendChild(image);

        const info =
            document.createElement("span");

        info.className =
            "search-result-info";

        const name =
            document.createElement("strong");

        name.textContent =
            product.name || "Product";

        const category =
            document.createElement("small");

        category.textContent =
            product.category || "";

        info.appendChild(name);
        info.appendChild(category);

        const price =
            document.createElement("span");

        price.className =
            "search-result-price";

        price.textContent =
            product.price || formatPrice(0);

        result.appendChild(imageContainer);
        result.appendChild(info);
        result.appendChild(price);

        result.addEventListener(
            "click",
            function() {
                window.location.href =
                    "Product-details.html?id=" +
                    encodeURIComponent(id);
            }
        );

        results.appendChild(result);
    });

    results.classList.add("active");
}

function openSearch() {
    const dropdown =
        document.getElementById("search-dropdown");

    const overlay =
        document.getElementById("dropdown-overlay");

    const input =
        document.getElementById("search-input");

    if (dropdown) {
        dropdown.classList.add("active");
    }

    if (overlay) {
        overlay.classList.add("active");
    }

    document.body.style.overflow = "hidden";

    renderSearchResults("");

    if (input) {
        setTimeout(function() {
            input.focus();
        }, 50);
    }
}

function closeSearch() {
    const dropdown =
        document.getElementById("search-dropdown");

    const overlay =
        document.getElementById("dropdown-overlay");

    const input =
        document.getElementById("search-input");

    const results =
        document.getElementById("search-results");

    if (dropdown) {
        dropdown.classList.remove("active");
    }

    if (overlay) {
        overlay.classList.remove("active");
    }

    if (input) {
        input.value = "";
    }

    if (results) {
        results.innerHTML = "";
        results.classList.remove("active");
    }

    document.body.style.overflow = "";
}

function setupSearch() {
    const button =
        document.getElementById("search-button");

    const closeButton =
        document.getElementById("close-search");

    const input =
        document.getElementById("search-input");

    const overlay =
        document.getElementById("dropdown-overlay");

    if (
        button &&
        button.dataset.searchReady !== "true"
    ) {
        button.dataset.searchReady = "true";

        button.addEventListener(
            "click",
            function(event) {
                event.preventDefault();
                event.stopPropagation();
                openSearch();
            }
        );
    }

    if (
        closeButton &&
        closeButton.dataset.searchReady !== "true"
    ) {
        closeButton.dataset.searchReady = "true";

        closeButton.addEventListener(
            "click",
            function(event) {
                event.preventDefault();
                closeSearch();
            }
        );
    }

    if (
        input &&
        input.dataset.searchReady !== "true"
    ) {
        input.dataset.searchReady = "true";

        input.addEventListener(
            "input",
            function() {
                renderSearchResults(
                    input.value
                );
            }
        );

        input.addEventListener(
            "keydown",
            function(event) {
                if (event.key === "Escape") {
                    closeSearch();
                }
            }
        );
    }

    if (
        overlay &&
        overlay.dataset.searchReady !== "true"
    ) {
        overlay.dataset.searchReady = "true";

        overlay.addEventListener(
            "click",
            function() {
                closeSearch();
            }
        );
    }
}

function getDealEndTime() {
    return DEAL_END_TIME;
}

function isDealActive() {
    return Date.now() < getDealEndTime();
}

function setupDealCountdown() {
    const stats =
        document.querySelector(".stats .stats-grid");

    if (!stats) {
        return;
    }

    const statNumbers =
        stats.querySelectorAll(".stat h2");

    if (statNumbers.length < 4) {
        console.error(
            "Deal countdown requires four .stat h2 elements."
        );

        return;
    }

    const daysElement = statNumbers[0];
    const hoursElement = statNumbers[1];
    const minutesElement = statNumbers[2];
    const secondsElement = statNumbers[3];

    function updateCountdown() {
        const remaining = Math.max(
            0,
            getDealEndTime() - Date.now()
        );

        if (remaining <= 0) {
            daysElement.textContent = "0";
            hoursElement.textContent = "0";
            minutesElement.textContent = "0";
            secondsElement.textContent = "0";

            disableExpiredDeals();
            return;
        }

        const totalSeconds =
            Math.floor(remaining / 1000);

        const days =
            Math.floor(totalSeconds / 86400);

        const hours =
            Math.floor(
                (totalSeconds % 86400) / 3600
            );

        const minutes =
            Math.floor(
                (totalSeconds % 3600) / 60
            );

        const seconds =
            totalSeconds % 60;

        daysElement.textContent = days;

        hoursElement.textContent =
            String(hours).padStart(2, "0");

        minutesElement.textContent =
            String(minutes).padStart(2, "0");

        secondsElement.textContent =
            String(seconds).padStart(2, "0");
    }

    updateCountdown();

    if (
        document.body.dataset.countdownReady !==
        "true"
    ) {
        document.body.dataset.countdownReady = "true";

        setInterval(
            updateCountdown,
            1000
        );
    }
}

function disableExpiredDeals() {
    if (isDealActive()) {
        return;
    }

    document
        .querySelectorAll(
            ".add-to-cart[data-deal='true']"
        )
        .forEach(function(button) {
            button.disabled = true;
            button.textContent = "Deal Ended";
            button.classList.add("deal-ended");
        });
}

function addDealProductToCart(
    productId,
    quantity = 1,
    discount = "",
    dealPrice = 0,
    originalPrice = 0,
    variantName = ""
) {
    if (!isDealActive()) {
        alert("This deal has ended.");
        disableExpiredDeals();
        return false;
    }

    const catalog = getNovaProducts();
    const product = catalog[productId];

    if (!product) {
        return false;
    }

    const amount = Math.max(
        1,
        Math.min(
            Math.floor(Number(quantity) || 1),
            10
        )
    );

    const unitPrice =
        Number(dealPrice) || 0;

    const regularPrice =
        Number(originalPrice) || 0;

    if (unitPrice <= 0) {
        return false;
    }

    const variants =
        Array.isArray(product.variants)
            ? product.variants
            : [];

    if (variants.length > 0) {
        const selectedVariant =
            getVariant(
                product,
                variantName
            );

        variantName =
            selectedVariant
                ? selectedVariant.name
                : getDefaultVariant(product);
    } else {
        variantName = "";
    }

    const cart = getCart();

    const existing =
        cart.find(function(item) {
            return (
                item.id === productId &&
                item.isDeal === true &&
                String(item.variant || "") ===
                    String(variantName || "")
            );
        });

    if (existing) {
        existing.quantity = Math.min(
            Number(existing.quantity || 0) +
                amount,
            10
        );

        existing.unitPrice = unitPrice;
        existing.isDeal = true;
        existing.discount = discount;
        existing.originalPrice = regularPrice;
        existing.variant = variantName;
    } else {
        cart.push({
            id: productId,
            quantity: amount,
            storage: "",
            variant: variantName,
            unitPrice: unitPrice,
            isDeal: true,
            discount: discount,
            originalPrice: regularPrice
        });
    }

    saveCart(cart);
    updateCartCount();

    return true;
}

function setupAddToCartButtons() {
    document
        .querySelectorAll(".add-to-cart")
        .forEach(function(button) {
            if (
                button.dataset.ready === "true"
            ) {
                return;
            }

            button.dataset.ready = "true";

            if (
                button.dataset.deal === "true" &&
                !isDealActive()
            ) {
                button.disabled = true;
                button.textContent = "Deal Ended";
                button.classList.add("deal-ended");
            }

            button.addEventListener(
                "click",
                function(event) {
                    event.preventDefault();
                    event.stopPropagation();

                    const productId =
                        button.dataset.productId;

                    if (!productId) {
                        console.error(
                            "No product ID found on Add to Cart button."
                        );

                        return;
                    }

                    let added = false;

                    if (
                        button.dataset.deal ===
                        "true"
                    ) {
                        const discount =
                            button.dataset.discount ||
                            "";

                        const dealPrice =
                            Number(
                                button.dataset.dealPrice
                            ) || 0;

                        const originalPrice =
                            Number(
                                button.dataset.originalPrice
                            ) || 0;

                        const variant =
                            button.dataset.variant ||
                            "";

                        added =
                            addDealProductToCart(
                                productId,
                                1,
                                discount,
                                dealPrice,
                                originalPrice,
                                variant
                            );
                    } else {
                        added =
                            addProductToCart(
                                productId,
                                1
                            );
                    }

                    if (!added) {
                        return;
                    }

                    const original =
                        button.textContent.trim();

                    button.textContent =
                        "Added ✓";

                    button.disabled = true;

                    setTimeout(
                        function() {
                            if (
                                isDealActive() ||
                                button.dataset.deal !==
                                    "true"
                            ) {
                                button.textContent =
                                    original;

                                button.disabled =
                                    false;
                            } else {
                                button.textContent =
                                    "Deal Ended";
                            }
                        },
                        1200
                    );
                }
            );
        });
}

function setupMobileMenu() {
    const menuButton =
        document.getElementById("menu-button");

    const nav =
        document.querySelector(".top-links");

    if (!menuButton || !nav) {
        return;
    }

    if (
        menuButton.dataset.menuReady ===
        "true"
    ) {
        return;
    }

    menuButton.dataset.menuReady = "true";

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    menuButton.addEventListener(
        "click",
        function(event) {
            event.preventDefault();
            event.stopPropagation();

            nav.classList.toggle("active");
            menuButton.classList.toggle("active");

            const isOpen =
                nav.classList.contains("active");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );
        }
    );

    nav.querySelectorAll("a")
        .forEach(function(link) {
            link.addEventListener(
                "click",
                function() {
                    nav.classList.remove("active");
                    menuButton.classList.remove(
                        "active"
                    );

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            );
        });

    window.addEventListener(
        "resize",
        function() {
            if (window.innerWidth > 700) {
                nav.classList.remove("active");
                menuButton.classList.remove(
                    "active"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        }
    );
}

function setupBackToTop() {
    let style =
        document.getElementById(
            "nova-back-to-top-style"
        );

    if (!style) {
        style =
            document.createElement("style");

        style.id =
            "nova-back-to-top-style";

        style.textContent = `
            .back-to-top {
                position: fixed;
                right: 25px;
                bottom: 25px;
                width: 42px;
                height: 42px;
                border: 1px solid rgba(168, 85, 247, 0.45);
                border-radius: 50%;
                background: rgba(16, 16, 24, 0.94);
                color: #ffffff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                line-height: 1;
                cursor: pointer;
                opacity: 0;
                visibility: hidden;
                transform: translateY(15px);
                transition:
                    opacity 0.3s ease,
                    visibility 0.3s ease,
                    transform 0.3s ease,
                    background 0.3s ease,
                    box-shadow 0.3s ease;
                z-index: 9999;
            }

            .back-to-top.show {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }

            .back-to-top:hover {
                background: #8b2cff;
                box-shadow: 0 0 20px rgba(139, 44, 255, 0.35);
                transform: translateY(-3px);
            }

            @media (max-width: 600px) {
                .back-to-top {
                    right: 16px;
                    bottom: 18px;
                    width: 38px;
                    height: 38px;
                    font-size: 16px;
                }
            }
        `;

        document.head.appendChild(style);
    }

    let button =
        document.getElementById("back-to-top");

    if (!button) {
        button =
            document.createElement("button");

        button.id = "back-to-top";
        button.className = "back-to-top";
        button.type = "button";

        button.setAttribute(
            "aria-label",
            "Back to top"
        );

        button.innerHTML = "↑";

        document.body.appendChild(button);
    }

    if (
        button.dataset.topReady === "true"
    ) {
        return;
    }

    button.dataset.topReady = "true";

    const updateButton = function() {
        if (window.scrollY > 350) {
            button.classList.add("show");
        } else {
            button.classList.remove("show");
        }
    };

    window.addEventListener(
        "scroll",
        updateButton,
        {
            passive: true
        }
    );

    button.addEventListener(
        "click",
        function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );

    updateButton();
}

function setupScrollReveal() {
    const revealElements =
        document.querySelectorAll(
            ".product-card, " +
            ".products-header, " +
            ".category-nav, " +
            ".sidebar, " +
            ".footer-content, " +
            ".footer-bottom"
        );

    if (!revealElements.length) {
        return;
    }

    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {
        revealElements.forEach(
            function(element) {
                element.classList.add("reveal");
            }
        );

        return;
    }

    if (
        "IntersectionObserver" in window
    ) {
        const observer =
            new IntersectionObserver(
                function(entries, observer) {
                    entries.forEach(
                        function(entry) {
                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }

                            entry.target.classList.add(
                                "reveal"
                            );

                            observer.unobserve(
                                entry.target
                            );
                        }
                    );
                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -60px 0px"
                }
            );

        revealElements.forEach(
            function(element) {
                observer.observe(element);
            }
        );
    } else {
        revealElements.forEach(
            function(element) {
                element.classList.add("reveal");
            }
        );
    }
}

function setupGlobalEscapeKey() {
    if (
        document.body.dataset.escapeReady ===
        "true"
    ) {
        return;
    }

    document.body.dataset.escapeReady = "true";

    document.addEventListener(
        "keydown",
        function(event) {
            if (event.key !== "Escape") {
                return;
            }

            closeSearch();

            const menuButton =
                document.getElementById(
                    "menu-button"
                );

            const nav =
                document.querySelector(
                    ".top-links"
                );

            if (menuButton && nav) {
                nav.classList.remove("active");
                menuButton.classList.remove(
                    "active"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        }
    );
}


function syncHomepageFeaturedProducts() {
    const catalog = window.NOVA_PRODUCTS || getNovaProducts();
    document.querySelectorAll(".products .product-card").forEach(function(card) {
        const button = card.querySelector(".add-to-cart[data-product-id]");
        if (!button) return;
        const product = catalog[button.dataset.productId];
        if (!product) return;

        const name = card.querySelector("h3");
        const image = card.querySelector(".product-image img");
        const price = card.querySelector(".price");
        const rating = card.querySelector(".rating span");
        const details = card.querySelector(".view-details");

        if (name) name.textContent = product.name;
        if (image) {
            image.src = product.image;
            image.alt = product.name;
        }
        if (price) price.textContent = product.price;
        if (rating) rating.textContent = product.rating || "0";
        if (details) details.href = "Product-details.html?id=" + button.dataset.productId;
    });
}
function initializeSite() {
    window.NOVA_PRODUCTS =
        getNovaProducts();

    syncHomepageFeaturedProducts();
    updateCartCount();
    updateWishlistUI();
    setupSearch();
    setupAddToCartButtons();
    setupMobileMenu();
    setupBackToTop();
    setupGlobalEscapeKey();
    setupDealCountdown();
    disableExpiredDeals();
    setupScrollReveal();
}

if (
    document.readyState === "loading"
) {
    document.addEventListener(
        "DOMContentLoaded",
        initializeSite
    );
} else {
    initializeSite();
}

function setupTypewriterStyles() {
    if (document.getElementById("nova-typewriter-styles")) {
        return;
    }

    const style = document.createElement("style");
    style.id = "nova-typewriter-styles";

    style.textContent = `
        [data-typewriter] {
            min-height: 1.2em;
        }

        [data-typewriter].typewriter-active::after {
            content: "";
            display: inline-block;
            width: 2px;
            height: 0.9em;
            margin-left: 6px;
            background: currentColor;
            vertical-align: -0.05em;
            animation: nova-typewriter-cursor 0.7s steps(1) infinite;
        }

        [data-typewriter].typewriter-finished::after {
            display: none;
        }

        @keyframes nova-typewriter-cursor {
            0%,
            49% {
                opacity: 1;
            }

            50%,
            100% {
                opacity: 0;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            [data-typewriter].typewriter-active::after {
                animation: none;
                opacity: 0;
            }
        }
    `;

    document.head.appendChild(style);
}

function initTypewriter() {
    const elements = document.querySelectorAll("[data-typewriter]");

    if (!elements.length) {
        return;
    }

    setupTypewriterStyles();

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    elements.forEach(function(element) {
        if (element.dataset.typewriterReady === "true") {
            return;
        }

        element.dataset.typewriterReady = "true";

        if (reduceMotion) {
            element.classList.add("typewriter-finished");
            return;
        }

        const speed = Math.max(
            15,
            Number(element.dataset.typeSpeed) || 65
        );

        const delay = Math.max(
            0,
            Number(element.dataset.typeDelay) || 300
        );

        const textNodes = [];
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT
        );

        let currentNode;

        while ((currentNode = walker.nextNode())) {
            const originalText = currentNode.nodeValue;

            if (!originalText || !originalText.trim()) {
                currentNode.nodeValue = "";
                continue;
            }

            textNodes.push({
                node: currentNode,
                text: originalText.replace(/\s+/g, " ").trim()
            });

            currentNode.nodeValue = "";
        }

        if (!textNodes.length) {
            element.classList.add("typewriter-finished");
            return;
        }

        element.classList.add("typewriter-active");

        let nodeIndex = 0;
        let characterIndex = 0;

        function typeNextCharacter() {
            if (nodeIndex >= textNodes.length) {
                element.classList.remove("typewriter-active");
                element.classList.add("typewriter-finished");
                return;
            }

            const current = textNodes[nodeIndex];

            if (characterIndex < current.text.length) {
                current.node.nodeValue +=
                    current.text.charAt(characterIndex);

                characterIndex += 1;

                setTimeout(
                    typeNextCharacter,
                    speed
                );

                return;
            }

            nodeIndex += 1;
            characterIndex = 0;

            setTimeout(
                typeNextCharacter,
                100
            );
        }

        setTimeout(
            typeNextCharacter,
            delay
        );
    });
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initTypewriter
    );
} else {
    initTypewriter();
}

function showNovaToast(message, actionText, actionHref){let host=document.getElementById('nova-toast-host');if(!host){host=document.createElement('div');host.id='nova-toast-host';host.style.cssText='position:fixed;right:22px;bottom:22px;z-index:99999;display:grid;gap:10px;max-width:360px';document.body.appendChild(host)}const t=document.createElement('div');t.style.cssText='background:#17171c;color:#fff;border:1px solid #33333b;border-left:3px solid #6e28ad;border-radius:10px;padding:14px 16px;box-shadow:0 16px 45px rgba(0,0,0,.4);font:14px/1.4 Arial,sans-serif';t.innerHTML='<span>'+message+'</span>'+(actionHref?'<a href="'+actionHref+'" style="color:#c896f5;margin-left:12px;text-decoration:none;font-weight:700">'+(actionText||'View')+'</a>':'');host.appendChild(t);setTimeout(()=>{t.style.opacity='0';t.style.transform='translateY(8px)';t.style.transition='.25s';setTimeout(()=>t.remove(),260)},2800)}
window.showNovaToast=showNovaToast;
window.addEventListener('nova:wishlist-changed',function(e){showNovaToast(e.detail&&e.detail.added?'Saved to wishlist.':'Removed from wishlist.','Wishlist','Wishlist.html')});
