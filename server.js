// server.js
// Backend for the Car Sales Website - IGNITION DRIVEKE

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// API Endpoint: Send car data to the frontend
app.get('/api/cars', (req, res) => {
    const cars = [
        {
            id: 1,
            images: [
                "/images/" + encodeURIComponent("WhatsApp Image 2026-05-28 at 21.28.08.jpeg"),
                "/images/" + encodeURIComponent("WhatsApp Image 2026-05-28 at 21.28.13.jpeg"),
                "/images/" + encodeURIComponent("WhatsApp Image 2026-05-28 at 21.28.17.jpeg"),
                "/images/" + encodeURIComponent("WhatsApp Image 2026-05-28 at 21.28.19.jpeg")
            ],
            make: "Mazda",
            model: "Demio",
            year: 2016,
            engineSize: "1.3L",
            transmission: "Automatic",
            mileage: 123000,
            description: "Mazda Demio 2016. 1.3L petrol, new tires, alloy rims, xenon lights. Original paint.",
            price: 1100000
        },
        {
            id: 2,
            images: [
                "/images/" + encodeURIComponent("WhatsApp Image 2026-05-28 at 21.28.46.jpeg"),
                "/images/" + encodeURIComponent("WhatsApp Image 2026-05-28 at 21.28.51.jpeg"),
                "/images/" + encodeURIComponent("WhatsApp Image 2026-05-28 at 21.28.53.jpeg"),
                "/images/" + encodeURIComponent("WhatsApp Image 2026-05-28 at 21.28.56.jpeg")
            ],
            make: "Subaru",
            model: "Forester Sg5",
            year: 2008,
            engineSize: "2.0L",
            transmission: "Automatic",
            description: "2008 Subaru Sg5. Clean and reliable unit. Performance and economy in one package.",
            price: 1150000
        },
        {
            id: 3,
            images: [
                "/images/" + encodeURIComponent("WhatsApp Image 2026-05-28 at 21.30.19 (2).jpeg"),
                "/images/" + encodeURIComponent("WhatsApp Image 2026-05-28 at 21.30.11.jpeg"),
                "/images/" + encodeURIComponent("WhatsApp Image 2026-05-28 at 21.30.12.jpeg"),
                "/images/" + encodeURIComponent("WhatsApp Image 2026-05-28 at 21.30.16.jpeg")
            ],
            make: "Mazda",
            model: "Demio",
            year: 2011,
            engineSize: "1.3L",
            transmission: "Automatic",
            description: "Reliable and fuel-efficient Mazda Demio 2011. Perfect for city driving.",
            price: 650000
        },
        {
            id: 4,
            images: [
                "/images/" + encodeURIComponent("WhatsApp Image 2026-05-28 at 21.30.37.jpeg"),
                "/images/" + encodeURIComponent("WhatsApp Image 2026-05-28 at 21.30.37 (4).jpeg"),
                "/images/" + encodeURIComponent("WhatsApp Image 2026-05-28 at 21.30.37 (3).jpeg"),
                "/images/" + encodeURIComponent("WhatsApp Image 2026-05-28 at 21.30.37 (2).jpeg"),
                "/images/" + encodeURIComponent("WhatsApp Image 2026-05-28 at 21.30.37 (1).jpeg")
            ],
            make: "Volkswagen",
            model: "Touareg GH",
            year: 2004,
            engineSize: "3.1L",
            transmission: "Automatic",
            description: "Robust and luxurious SUV. Comfort and capability for on and off-road driving.",
            price: 1350000
        },
        {
            id: 5,
            images: [
                "/images/" + encodeURIComponent("MercedesImage 2026-05-31 at 15.54.06 (1).jpeg"),
                "/images/" + encodeURIComponent("MercedesImage 2026-05-31 at 15.54.06 (2).jpeg"),
                "/images/" + encodeURIComponent("MercedesImage 2026-05-31 at 15.54.06 (3).jpeg"),
                "/images/" + encodeURIComponent("MercedesImage 2026-05-31 at 15.54.06 (4).jpeg"),
                "/images/" + encodeURIComponent("MercedesImage 2026-05-31 at 15.54.06 (5).jpeg"),
                "/images/" + encodeURIComponent("MercedesImage 2026-05-31 at 15.54.06.jpeg")
            ],
            make: "Mercedes-Benz",
            model: "C200",
            year: 2012,
            engineSize: "1.8L",
            transmission: "Automatic",
            description: "Elegance, comfort, and innovation. Premium interior with advanced technology.",
            price: 1600000
        },
        {
            id: 6,
            images: [
                "/images/" + encodeURIComponent("Vtoureg Image 2026-05-31 at 16.02.36.jpeg"),
                "/images/" + encodeURIComponent("Vtoureg Image 2026-05-31 at 16.02.36 (2).jpeg"),
                "/images/" + encodeURIComponent("Vtoureg Image 2026-05-31 at 16.02.35.jpeg"),
                "/images/" + encodeURIComponent("Vtoureg Image 2026-05-31 at 16.02.36 (1).jpeg")
            ],
            make: "Volkswagen",
            model: "Touareg",
            year: 2012,
            engineSize: "3.6L",
            transmission: "Automatic",
            description: "Perfect blend of strength, comfort, and sophistication. Premium SUV.",
            price: 2300000
        },
        {
            id: 7,
            images: [
                "/images/" + encodeURIComponent("Mercb Image 2026-05-31 at 16.16.04 (1).jpeg"),
                "/images/" + encodeURIComponent("Mercb Image 2026-05-31 at 16.16.04 (2).jpeg"),
                "/images/" + encodeURIComponent("Mercb Image 2026-05-31 at 16.16.04 (3).jpeg"),
                "/images/" + encodeURIComponent("Mercb Image 2026-05-31 at 16.16.04 (4).jpeg"),
                "/images/" + encodeURIComponent("Mercb Image 2026-05-31 at 16.16.04 (5).jpeg"),
                "/images/" + encodeURIComponent("Mercb Image 2026-05-31 at 16.16.04 (6).jpeg"),
                "/images/" + encodeURIComponent("Mercb Image 2026-05-31 at 16.16.04 (7).jpeg"),
                "/images/" + encodeURIComponent("Mercb Image 2026-05-31 at 16.16.04.jpeg"),
                "/images/" + encodeURIComponent("Mercb Image 2026-05-31 at 16.16.05.jpeg")
            ],
            make: "Mercedes-Benz",
            model: "C200",
            year: 2012,
            engineSize: "1.8L",
            transmission: "Automatic",
            description: "Mercedes-Benz C200 - Elegance and performance combined.",
            price: 1950000
        },
        {
            id: 8,
            images: [
                "/images/" + encodeURIComponent("VellfireImage 2026-05-31 at 16.01.42.jpeg"),
                "/images/" + encodeURIComponent("VellfireImage 2026-05-31 at 16.01.41.jpeg"),
                "/images/" + encodeURIComponent("VellfireImage 2026-05-31 at 16.01.39.jpeg"),
                "/images/" + encodeURIComponent("VellfireImage 2026-05-31 at 16.01.37.jpeg"),
                "/images/" + encodeURIComponent("VellfireImage 2026-05-31 at 16.01.35.jpeg"),
                "/images/" + encodeURIComponent("VellfireImage 2026-05-31 at 16.01.33.jpeg"),
                "/images/" + encodeURIComponent("VellfireImage 2026-05-31 at 16.01.31.jpeg"),
                "/images/" + encodeURIComponent("VellfireImage 2026-05-31 at 16.01.29.jpeg"),
                "/images/" + encodeURIComponent("VellfireImage 2026-05-31 at 16.01.27.jpeg"),
                "/images/" + encodeURIComponent("VellfireImage 2026-05-31 at 16.01.26.jpeg"),
                "/images/" + encodeURIComponent("VellfireImage 2026-05-31 at 16.01.24.jpeg"),
                "/images/" + encodeURIComponent("VellfireImage 2026-05-31 at 16.01.22.jpeg"),
                "/images/" + encodeURIComponent("VellfireImage 2026-05-31 at 16.01.20.jpeg"),
                "/images/" + encodeURIComponent("VellfireImage 2026-05-31 at 16.01.17.jpeg"),
                "/images/" + encodeURIComponent("VellfireImage 2026-05-31 at 16.01.13.jpeg"),
                "/images/" + encodeURIComponent("VellfireImage 2026-05-31 at 16.01.11.jpeg")
            ],
            make: "Toyota",
            model: "Vellfire",
            year: 2013,
            engineSize: "2.4L",
            transmission: "Automatic",
            description: "Toyota Vellfire - Ultimate luxury MPV with spacious interior.",
            price: 1380000
        },
        {
            id: 9,
            images: [
                "/images/" + encodeURIComponent("Vellhybrid Image 2026-05-31 at 16.05.36.jpeg"),
                "/images/" + encodeURIComponent("Vellhybrid Image 2026-05-31 at 16.05.37 (1).jpeg"),
                "/images/" + encodeURIComponent("Vellhybrid Image 2026-05-31 at 16.05.37 (2).jpeg"),
                "/images/" + encodeURIComponent("Vellhybrid Image 2026-05-31 at 16.05.37.jpeg"),
                "/images/" + encodeURIComponent("Vellhybrid Image 2026-05-31 at 16.05.38.jpeg")
            ],
            make: "Toyota",
            model: "Vellfire Hybrid",
            year: 2013,
            engineSize: "2.4L",
            transmission: "Automatic",
            description: "Toyota Vellfire Hybrid - Eco-friendly luxury MPV.",
            price: 1650000
        },
        {
            id: 10,
            images: [
                "/images/" + encodeURIComponent("Rush Image 2026-05-31 at 16.06.33.jpeg"),
                "/images/" + encodeURIComponent("Rush Image 2026-05-31 at 16.06.34 (1).jpeg"),
                "/images/" + encodeURIComponent("Rush Image 2026-05-31 at 16.06.34 (2).jpeg"),
                "/images/" + encodeURIComponent("Rush Image 2026-05-31 at 16.06.34 (3).jpeg"),
                "/images/" + encodeURIComponent("Rush Image 2026-05-31 at 16.06.35 (1).jpeg"),
                "/images/" + encodeURIComponent("Rush Image 2026-05-31 at 16.06.35 (2).jpeg"),
                "/images/" + encodeURIComponent("Rush Image 2026-05-31 at 16.06.35.jpeg"),
                "/images/" + encodeURIComponent("Rush Image 2026-05-31 at 16.06.36 (1).jpeg"),
                "/images/" + encodeURIComponent("Rush Image 2026-05-31 at 16.06.36 (2).jpeg"),
                "/images/" + encodeURIComponent("Rush Image 2026-05-31 at 16.06.36.jpeg"),
                "/images/" + encodeURIComponent("Rush Image 2026-05-31 at 16.06.37.jpeg")
            ],
            make: "Toyota",
            model: "Rush",
            year: 2018,
            engineSize: "1.5L",
            transmission: "Automatic",
            description: "Toyota Rush - Compact SUV with great versatility and style.",
            price: 2350000
        },
        {
            id: 11,
            images: [
                "/images/" + encodeURIComponent("ML350 Image 2026-05-31 at 16.07.27.jpeg"),
                "/images/" + encodeURIComponent("ML350 Image 2026-05-31 at 16.07.26.jpeg"),
                "/images/" + encodeURIComponent("ML350 Image 2026-05-31 at 16.07.27 (1).jpeg"),
                "/images/" + encodeURIComponent("ML350 Image 2026-05-31 at 16.07.26 (2).jpeg"),
                "/images/" + encodeURIComponent("ML350 Image 2026-05-31 at 16.07.26 (1).jpeg"),
                "/images/" + encodeURIComponent("ML350 Image 2026-05-31 at 16.07.25.jpeg"),
                "/images/" + encodeURIComponent("ML350 Image 2026-05-31 at 16.07.25 (1).jpeg"),
                "/images/" + encodeURIComponent("ML350 Image 2026-05-31 at 16.07.24.jpeg"),
                "/images/" + encodeURIComponent("ML350 Image 2026-05-31 at 16.07.23.jpeg")
            ],
            make: "Mercedes-Benz",
            model: "ML 350 4Matic",
            year: 2010,
            engineSize: "3.0L",
            transmission: "Automatic",
            description: "Mercedes-Benz ML 350 4Matic - Premium SUV with all-wheel drive.",
            price: 2450000
        },
        {
            id: 12,
            images: [
                "/images/" + encodeURIComponent("DemioCW Image 2026-05-31 at 16.09.33 (1).jpeg"),
                "/images/" + encodeURIComponent("DemioCW Image 2026-05-31 at 16.09.33.jpeg"),
                "/images/" + encodeURIComponent("DemioCW Image 2026-05-31 at 16.09.34 (1).jpeg"),
                "/images/" + encodeURIComponent("DemioCW Image 2026-05-31 at 16.09.34 (2).jpeg"),
                "/images/" + encodeURIComponent("DemioCW Image 2026-05-31 at 16.09.34.jpeg"),
                "/images/" + encodeURIComponent("DemioCW Image 2026-05-31 at 16.09.35.jpeg")
            ],
            make: "Mazda",
            model: "Demio",
            year: 2013,
            engineSize: "1.3L",
            transmission: "Automatic",
            description: "Mazda Demio 2013 - Reliable and fuel-efficient city car.",
            price: 630000
        },
        {
            id: 13,
            images: [
                "/images/" + encodeURIComponent("Audi Image 2026-05-31 at 16.10.37.jpeg"),
                "/images/" + encodeURIComponent("Audi Image 2026-05-31 at 16.10.38 (1).jpeg"),
                "/images/" + encodeURIComponent("Audi Image 2026-05-31 at 16.10.38.jpeg"),
                "/images/" + encodeURIComponent("Audi Image 2026-05-31 at 16.10.40.jpeg"),
                "/images/" + encodeURIComponent("Audi Image 2026-05-31 at 16.10.41 (1).jpeg"),
                "/images/" + encodeURIComponent("Audi Image 2026-05-31 at 16.10.41 (2).jpeg"),
                "/images/" + encodeURIComponent("Audi Image 2026-05-31 at 16.10.41.jpeg"),
                "/images/" + encodeURIComponent("Audi Image 2026-05-31 at 16.10.42.jpeg")
            ],
            make: "Audi",
            model: "A4 S-Line Trim",
            year: 2017,
            engineSize: "2.0L",
            transmission: "Automatic",
            description: "Audi A4 S-Line - Sporty elegance with premium features.",
            price: 1950000
        },
        {
            id: 14,
            images: [
                "/images/" + encodeURIComponent("Gwagon Image 2026-05-31 at 16.11.45.jpeg"),
                "/images/" + encodeURIComponent("Gwagon Image 2026-05-31 at 16.11.46.jpeg"),
                "/images/" + encodeURIComponent("Gwagon Image 2026-05-31 at 16.11.47 (1).jpeg"),
                "/images/" + encodeURIComponent("Gwagon Image 2026-05-31 at 16.11.47 (2).jpeg"),
                "/images/" + encodeURIComponent("Gwagon Image 2026-05-31 at 16.11.47.jpeg"),
                "/images/" + encodeURIComponent("Gwagon Image 2026-05-31 at 16.11.48 (1).jpeg"),
                "/images/" + encodeURIComponent("Gwagon Image 2026-05-31 at 16.11.48 (2).jpeg"),
                "/images/" + encodeURIComponent("Gwagon Image 2026-05-31 at 16.11.48 (3).jpeg"),
                "/images/" + encodeURIComponent("Gwagon Image 2026-05-31 at 16.11.48.jpeg"),
                "/images/" + encodeURIComponent("Gwagon Image 2026-05-31 at 16.11.49.jpeg")
            ],
            make: "Mercedes-Benz",
            model: "290GD G Wagon",
            year: 1996,
            engineSize: "2.9L",
            transmission: "Automatic",
            description: "Mercedes-Benz 290GD G Wagon - Legendary off-road icon.",
            price: 2250000
        },
        {
            id: 15,
            images: [
                "/images/" + encodeURIComponent("MercBCW Image 2026-05-31 at 16.13.38.jpeg"),
                "/images/" + encodeURIComponent("MercBCW Image 2026-05-31 at 16.13.39 (1).jpeg"),
                "/images/" + encodeURIComponent("MercBCW Image 2026-05-31 at 16.13.39.jpeg"),
                "/images/" + encodeURIComponent("MercBCW Image 2026-05-31 at 16.13.40 (1).jpeg"),
                "/images/" + encodeURIComponent("MercBCW Image 2026-05-31 at 16.13.40 (2).jpeg"),
                "/images/" + encodeURIComponent("MercBCW Image 2026-05-31 at 16.13.40.jpeg"),
                "/images/" + encodeURIComponent("MercBCW Image 2026-05-31 at 16.13.41 (1).jpeg"),
                "/images/" + encodeURIComponent("MercBCW Image 2026-05-31 at 16.13.41 (2).jpeg"),
                "/images/" + encodeURIComponent("MercBCW Image 2026-05-31 at 16.13.41.jpeg"),
                "/images/" + encodeURIComponent("MercBCW Image 2026-05-31 at 16.13.42 (1).jpeg"),
                "/images/" + encodeURIComponent("MercBCW Image 2026-05-31 at 16.13.42.jpeg"),
                "/images/" + encodeURIComponent("MercBCW Image 2026-05-31 at 16.13.43.jpeg")
            ],
            make: "Mercedes-Benz",
            model: "C200 Avant-Garde",
            year: 2014,
            engineSize: "1.8L",
            transmission: "Automatic",
            description: "Mercedes-Benz C200 Avant-Garde - Luxury sedan with sporty styling.",
            price: 1950000
        }
    ];

    // Apply filters
    let filteredCars = [...cars];
    const { make, model, year, engineSize, transmission } = req.query;

    if (make) filteredCars = filteredCars.filter(car => car.make.toLowerCase().includes(make.toLowerCase()));
    if (model) filteredCars = filteredCars.filter(car => car.model.toLowerCase().includes(model.toLowerCase()));
    if (year) filteredCars = filteredCars.filter(car => car.year.toString() === year);
    if (engineSize) filteredCars = filteredCars.filter(car => car.engineSize === engineSize);
    if (transmission) filteredCars = filteredCars.filter(car => car.transmission.toLowerCase() === transmission.toLowerCase());

    res.json(filteredCars);
});

// API Endpoint: Get filter options
app.get('/api/filters', (req, res) => {
    const cars = [
        { make: "Audi", engineSize: "2.0L", transmission: "Automatic" },
        { make: "Mazda", engineSize: "1.3L", transmission: "Automatic" },
        { make: "Mercedes-Benz", engineSize: "1.8L", transmission: "Automatic" },
        { make: "Mercedes-Benz", engineSize: "2.9L", transmission: "Automatic" },
        { make: "Mercedes-Benz", engineSize: "3.0L", transmission: "Automatic" },
        { make: "Subaru", engineSize: "2.0L", transmission: "Automatic" },
        { make: "Toyota", engineSize: "1.5L", transmission: "Automatic" },
        { make: "Toyota", engineSize: "2.4L", transmission: "Automatic" },
        { make: "Volkswagen", engineSize: "3.1L", transmission: "Automatic" },
        { make: "Volkswagen", engineSize: "3.6L", transmission: "Automatic" }
    ];

    const makes = [...new Set(cars.map(car => car.make))].sort();
    const engineSizes = [...new Set(cars.map(car => car.engineSize))].sort();
    const transmissions = [...new Set(cars.map(car => car.transmission))].sort();

    res.json({ makes, engineSizes, transmissions });
});

app.listen(PORT, () => {
    console.log(`IGNITION DRIVEKE Server running on http://localhost:${PORT}`);
});