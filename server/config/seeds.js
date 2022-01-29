const db = require("./connection");
const { Category, Product, User } = require("../models");

db.once("open", async () => {
  
  await Product.deleteMany();

  const instruments = await Product.insertMany([
    {
      name: "Acousitc Guitar",
      brand: "Yamaha",
      description:
        "Includes a laminate spruce top, rosewood fingerboard and bridge, and meranti back and sides. Gold die-cast tuners provide smooth and accurate tuning while a tortoise-pattern pickguard gives a bit more style.",
      price: 15.00,
      image: 'acousticGuitar_512x512.jpg',
      quantity: 100,
    },
    {
      name: "Electric Guitar",
      brand: "Squire Stratocaster",
      description:
        "It includes a lightweight body, a vintage-style tremolo bridge for classic pitch effects and three single-coil pickups for classic Strat tone. Amp included.",
      price: 25.00,
      image: 'electricGuitar_512x512.jpg',
      quantity: 100,
    },
    {
      name: "Bass Guitar",
      brand: "Fender American",
      description:
        "Born in Corona, California, the American Performer Precision Bass with rosewood fingerboard delivers the exceptional tone and feel you expect from an authentic Fender—along with new, player-oriented features that make it even more exciting to play.",
      price: 20.00,
      image: 'bassGuitar_512x512.jpg',
      quantity: 100,
    },
    {
      name: "Trumpet",
      brand: "Bach TR300H2",
      description:
        "Features a red brass leadpipe seamlessly ending with a yellow brass bell. A clear laquer finish keeps resonance at an all time high for this beginner level instrument. Mouthpiece included.",
      price: 25.00,
      image: 'trumpet_512x512.jpg',
      quantity: 100,
    },
    {
      name: "Trombone",
      brand: "Conn-Selmer TB711",
      description:
        "Yellow brass all around for the best projection and a nickel silver handslide for smooth motion. Mouthpiece included.",
      price: 25.00,
      image: 'trombone_512x512.jpg',
      quantity: 100,
    },
    {
      name: "French Horn",
      brand: "Yamaha",
      description:
        "Have you exceeded the capacities of your beginner French horn? If you answered yes, it's time to step up to the Yamaha YHR-567, an intermediate-level horn with the effortless response and rock-solid note centering you need to take your playing to a higher level.",
      price: 40.00,
      image: 'frenchHorn_512x512.jpg',
      quantity: 100,
    },
    {
      name: "Flute",
      brand: "Gemeinhardt 2SP",
      description:
        "Sterling silver plated for best resonance and offset G key which is perfect for smaller hands.",
      price: 30.00,
      image: 'flute_512x512.jpg',
      quantity: 100,
    },
    {
      name: "Alto Saxophone",
      brand: "Yamaha YAS-280",
      description:
        "Gold lacquer for bright sound and great intonation are expected from this instrument. Also features an adjustable thumb rest to customize for each player. Mouthpiece, ligature, and strap included.",
      price: 30.00,
      image: 'altoSax_512x512.jpg',
      quantity: 100,
    },
    {
      name: "Hurdy-gurdy",
      brand: "WorkshopMedieval",
      description:
        "The Hurdy-Gurdy (or so-called in Ukraine Ukrainian lira or wheel lira) is an absolutely handmade unique musical instrument.",
      price: 30.00,
      image: 'hurdy_512x512.jpg',
      quantity: 100,
    },
    {
      name: "Snare Drum",
      brand: "Vic Firth Snare Kit",
      description:
        "14-inch chrome plated snare drum with an 8-inch practice pad included. Also has a drum stand and travel case.",
      price: 20.00,
      image: 'snare_512x512.jpg',
      quantity: 100,
    },
    {
      name: "Bongo Drums",
      brand: "Pearl Elite",
      description:
        "Pearl Elite Series Bongos offer up that warm, traditional bongo tone that percussionists around the world adore. Made with Thai Oak shells, these drums have a smooth tone that you will be sure to love.",
      price: 15.00,
      image: 'bongo_512x512.jpg',
      quantity: 100,
    },
    {
      name: "Xylophone",
      brand: "Ludwig Xylophone Kit",
      description:
        "Durable Paduk bars on this 2.5 octave xylophone. Includes a stand and travel case.",
      price: 40.00,
      image: 'xylophone_512x512.jpg',
      quantity: 100,
    },
    {
      name: "Maintenance",
      brand: "playitagaintunes",
      description:
        "Rental Insurance, Maintenance services, Includes starter accessories",
      price: 35.00,
      image: 'service_512x512.jpg',
      quantity: 100,
    },
    {
      name: "MaintenancePLUS",
      brand: "playitagaintunes",
      description:
        "Rental Insurance, Loaner instrument during maintenance, Includes starter accessories, Includes textbook, 1 Semester (Aug-Dec or Jan-May)",
      price: 160.00,
      image: 'service_512x512.jpg',
      quantity: 100,
    },
    {
      name: "ConcertMaster",
      brand: "playitagaintunes",
      description:
        "Rental Insurance, Loaner instrument during maintenance, Includes starter accessories, Includes textbook, 1 School Year (Aug-May)",
      price: 300.00,
      image: 'service_512x512.jpg',
      quantity: 100,
    },
  ]);
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Guitar", products: [instruments[0]._id, instruments[1]._id, instruments[2]._id] },
    { name: "Brass", products: [instruments[3]._id, instruments[4]._id, instruments[5]._id] },
    { name: "Woodwind", products: [instruments[6]._id, instruments[7]._id, instruments[8]._id] },
    { name: "Percussion", products: [instruments[9]._id, instruments[10]._id, instruments[11]._id] },
    { name: "Services"},
  ]);


  await User.deleteMany();

  await User.create({
    firstName: "Joe",
    lastName: "Test",
    email: "test@email.com",
    password: "password12345",
    order: [
      {
        instruments: [instruments[0]._id, instruments[0]._id, instruments[1]._id]

      }
    ]
  });

  process.exit();
});