const db = require("./connection");
const { Category, Instrument, User } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Guitar" },
    { name: "Brass" },
    { name: "Woodwind" },
    { name: "Percussion" },
  ]);

  await Instrument.deleteMany();

  const instruments = await Instrument.insertMany([
    {
      name: "Acousitc Guitar",
      brand: "Yamaha",
      description:
        "Includes a laminate spruce top, rosewood fingerboard and bridge, and meranti back and sides. Gold die-cast tuners provide smooth and accurate tuning while a tortoise-pattern pickguard gives a bit more style.",
      price: 15.0,
      quantity: 5,
      category: categories[0]._id,
    },
    {
      name: "Electric Guitar",
      brand: "Squire Stratocaster",
      description:
        "It includes a lightweight body, a vintage-style tremolo bridge for classic pitch effects and three single-coil pickups for classic Strat tone. Amp included.",
      price: 25.0,
      quantity: 5,
      category: categories[0]._id,
    },
    {
      name: "Trumpet",
      brand: "Bach TR300H2",
      description:
        "Features a red brass leadpipe seamlessly ending with a yellow brass bell. A clear laquer finish keeps resonance at an all time high for this beginner level instrument. Mouthpiece included.",
      price: 25.0,
      quantity: 5,
      category: categories[1]._id,
    },
    {
      name: "Trombone",
      brand: "Conn-Selmer TB711",
      description:
        "Yellow brass all around for the best projection and a nickel silver handslide for smooth motion. Mouthpiece included.",
      price: 25.0,
      quantity: 5,
      category: categories[1]._id,
    },
    {
      name: "Flute",
      brand: "Gemeinhardt 2SP",
      description:
        "Sterling silver plated for best resonance and offset G key which is perfect for smaller hands.",
      price: 30.0,
      quantity: 5,
      category: categories[2]._id,
    },
    {
      name: "Alto Saxophone",
      brand: "Yamaha YAS-280",
      description:
        "Gold lacquer for bright sound and great intonation are expected from this instrument. Also features an adjustable thumb rest to customize for each player. Mouthpiece, ligature, and strap included.",
      price: 30.0,
      quantity: 5,
      category: categories[2]._id,
    },
    {
      name: "Snare Drum",
      brand: "Vic Firth Snare Kit",
      description:
        "14-inch chrome plated snare drum with an 8-inch practice pad included. Also has a drum stand and travel case.",
      price: 20.0,
      quantity: 3,
      category: categories[3]._id,
    },
    {
      name: "Xylophone",
      brand: "Ludwig Xylophone Kit",
      description:
        "Durable Paduk bars on this 2.5 octave xylophone. Includes a stand and travel case.",
      price: 40.0,
      quantity: 4,
      category: categories[3]._id,
    },
  ]);

  await User.deleteMany();

  await User.create({
    firstName: "Joe",
    lastName: "Test",
    email: "test@email.com",
    password: "password12345",
  });

  process.exit();
});
