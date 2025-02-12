const products = [ 
    {
        name: "Kawasaki Ninja H2",
        itemNumber: "9999-01",
        price: "$32,799",
        description: "The Kawasaki Ninja H2 is a supercharged supersport motorcycle, offering unparalleled performance and cutting-edge technology for the ultimate riding experience.",
        img: "imgs/h2.png",
        reviews: [
            { name: "John Doe", stars: 5, comment: "Amazing bike!" },
            { name: "Jane Smith", stars: 5, comment: "Absolutely love it!" },
            { name: "Robert Johnson", stars: 4, comment: "Incredible speed, but expensive." }
        ],
    },
    {
        name: "Kawasaki Vulcan 900 Custom",
        itemNumber: "9999-02",
        price: "$8,799",
        description: "The Vulcan 900 Custom combines cruiser style with modern performance, featuring a 903cc V-twin engine and sleek, custom styling.",
        img: "imgs/vulcan900.png",
        reviews: [
            { name: "Alice Johnson", stars: 4, comment: "Great cruiser with a comfortable ride." },
            { name: "Bob Williams", stars: 5, comment: "Excellent value for the price." },
            { name: "Charlie Davis", stars: 3, comment: "Decent, but lacks some features." }
        ],
    },
    {
        name: "Kawasaki Ninja ZX-10R",
        itemNumber: "9999-03",
        price: "$23,799",
        description: "The Ninja ZX-10R is a track-focused sportbike with a 998cc engine, advanced electronics, and aerodynamic design for high-speed performance.",
        img: "imgs/zx10r.png",
        reviews: [
            { name: "Michael Lee", stars: 5, comment: "Best ride ever!" },
            { name: "Emma Brown", stars: 3, comment: "Good, but could be better." },
            { name: "David Kim", stars: 5, comment: "Top-tier track bike." },
            { name: "Sophia White", stars: 4, comment: "Great handling, but high maintenance." }
        ],
    },
    {
        name: "Kawasaki Z650",
        itemNumber: "9999-04",
        price: "$7,249",
        description: "The Z650 is a nimble naked bike featuring a 649cc parallel-twin engine, lightweight chassis, and aggressive styling.",
        img: "imgs/z650.png",
        reviews: [
            { name: "Chris Evans", stars: 4, comment: "Fun and agile bike for city riding." },
            { name: "Dana White", stars: 5, comment: "Perfect balance of power and handling." },
            { name: "Elliot Harris", stars: 4, comment: "Good mid-range bike." }
        ],
    },
    {
        name: "Kawasaki Versys 650",
        itemNumber: "9999-05",
        price: "$8,399",
        description: "The Versys 650 is a versatile adventure-touring motorcycle with a 649cc engine, long-travel suspension, and comfortable ergonomics.",
        img: "imgs/versys650.png",
        reviews: [
            { name: "Ethan Hunt", stars: 5, comment: "Great for long-distance touring." },
            { name: "Fiona Gallagher", stars: 4, comment: "Handles well on various terrains." },
            { name: "Gary Oldman", stars: 3, comment: "Could use better wind protection." },
            { name: "Holly Simmons", stars: 4, comment: "Solid bike, but not for everyone." }
        ],
    },
    {
        name: "Kawasaki KLX230",
        itemNumber: "9999-06",
        price: "$4,899",
        description: "The KLX230 is a lightweight dual-sport motorcycle with a 233cc engine, designed for both on-road and off-road adventures.",
        img: "imgs/klx230.png",
        reviews: [
            { name: "George Martin", stars: 4, comment: "Excellent beginner-friendly dual-sport." },
            { name: "Hannah Davis", stars: 5, comment: "Perfect for weekend trail rides." },
            { name: "Samuel Carter", stars: 3, comment: "Lacks top-end power but fun to ride." },
        ],
    },
    {
        name: "Kawasaki KX450",
        itemNumber: "9999-07",
        price: "$9,399",
        description: "The KX450 is a high-performance motocross bike with a 449cc engine, advanced suspension, and race-ready features.",
        img: "imgs/kx450.png",
        reviews: [
            { name: "Ian Wright", stars: 5, comment: "Unmatched power on the track." },
            { name: "Jackie Chan", stars: 4, comment: "Responsive handling and great suspension." },
            { name: "Elliot Parker", stars: 5, comment: "Lightweight and easy to control." },
            { name: "Sophia Moore", stars: 3, comment: "Maintenance can be tricky." },
        ],
    },
    {
        name: "Kawasaki W800 Cafe",
        itemNumber: "9999-08",
        price: "$9,799",
        description: "The W800 Cafe is a retro-styled motorcycle with a 773cc air-cooled engine, combining classic aesthetics with modern performance.",
        img: "imgs/w800cafe.png",
        reviews: [
            { name: "Karen Smith", stars: 5, comment: "Beautiful design and smooth ride." },
            { name: "Liam Neeson", stars: 4, comment: "Nostalgic feel with modern reliability." },
            { name: "Grace Thompson", stars: 4, comment: "Slightly heavy but very stylish." },
            { name: "David Lewis", stars: 5, comment: "Perfect for casual rides!" },
            { name: "Ella Johnson", stars: 3, comment: "Pricey for what it offers." },
        ],
    },
    {
        name: "Kawasaki Ninja 400",
        itemNumber: "9999-09",
        price: "$5,499",
        description: "The Ninja 400 is a lightweight sportbike with a 399cc engine, offering a balance of performance and everyday usability.",
        img: "imgs/ninja400.png",
        reviews: [
            { name: "Mia Wong", stars: 5, comment: "Great starter bike with sporty feel." },
            { name: "Noah Thompson", stars: 4, comment: "Impressive power for its class." },
            { name: "Benjamin Scott", stars: 5, comment: "Easy to handle and great for beginners." },
            { name: "Olivia Carter", stars: 3, comment: "Seat could be more comfortable." },
        ],
    },
    {
        name: "Kawasaki Z900",
        itemNumber: "9999-10",
        price: "$8,999",
        description: "The Z900 is a powerful naked bike featuring a 948cc engine, aggressive styling, and responsive handling.",
        img: "imgs/z900.png",
        reviews: [
            { name: "Olivia Brown", stars: 5, comment: "Thrilling performance and great looks." },
            { name: "Paul Walker", stars: 4, comment: "Smooth power delivery and comfortable ride." },
            { name: "Nathan Harris", stars: 5, comment: "Incredible value for the price!" },
            { name: "Sophia Green", stars: 4, comment: "A bit heavy but well balanced." },
            { name: "Henry White", stars: 3, comment: "Could use better stock tires." },
        ],
    },
    {
        name: "Kawasaki Ninja ZX-6R",
        itemNumber: "9999-11",
        price: "$10,199",
        description: "The Ninja ZX-6R is a supersport motorcycle with a 636cc engine, advanced electronics, and track-focused performance.",
        img: "imgs/zx6r.png",
        reviews: [
            { name: "Quincy Adams", stars: 5, comment: "Exceptional handling on the track." },
            { name: "Rachel Green", stars: 4, comment: "Powerful and responsive ride." },
            { name: "Dylan Parker", stars: 5, comment: "Fast and smooth acceleration!" },
            { name: "Jessica Lane", stars: 3, comment: "A bit aggressive for daily use." },
        ],
    },
];

export default products;
