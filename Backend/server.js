const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

const data = [
  {
    "title": "Kayaking Adventure",
    "location": "Udupi, India",
    "description": "Curated small-group kayaking experience with certified guide. Safety gear included.",
    "sub_description": "Paddle through calm waters surrounded by coastal beauty.",
    "complete_description": "Experience the thrill of kayaking in Udupi’s serene backwaters with professional guidance and top-notch safety gear. Perfect for beginners and adventure lovers alike, this small-group tour lets you explore hidden waterways and connect with nature in a peaceful, energizing way.",
    "price_start": 999,
    "image_url": "https://blogger.googleusercontent.com/img/a/AVvXsEhnwMuSce7z9L4CkvWhjAUuZ6eZcIA83L7kMNI4FiN_wVkv_MT2kRuo4oPtNu4CeAli3hTSjvjrboakP59PL-XeNmEeqTrRAL1HolgFc4OvlA5yZPkgdZZE2s8T5ktblxWbUT5jxdS9oPLAc5xr6pUylASs6HlV1M9-PCctC5gJnxxjTJDa0no=s800"
  },
  {
    "title": "Morning Meditation",
    "location": "Virtual",
    "description": "Five-minute guided meditation focused on gratitude and mindfulness.",
    "sub_description": "Start your day with calm and clarity.",
    "complete_description": "Join a guided virtual meditation designed to center your mind and boost positivity. In just five minutes, you’ll practice gratitude and mindfulness techniques that help reduce stress, improve focus, and set a peaceful tone for your day.",
    "price_start": 3400,
    "image_url": "https://widgets.insighttimer.com/api/image?slug=five-minute-morning-meditation-on-gratitude&size=tiny_rectangle_small"
  },
  {
    "title": "Coffee Trail",
    "location": "Coorg, India",
    "description": "Explore lush plantations and local brews on a curated coffee trail.",
    "sub_description": "Sip, stroll, and discover the roots of India’s finest coffee.",
    "complete_description": "Walk through the misty plantations of Coorg as you uncover the journey of coffee—from bean to cup. Learn traditional brewing methods, meet local farmers, and enjoy tastings of freshly roasted blends in this aromatic and immersive experience.",
    "price_start": 1299,
    "image_url": "https://i0.wp.com/holidayonsale.com/wp-content/uploads/2024/02/coorg-featured.jpg?fit=1024%2C683&ssl=1"
  },
  {
    "title": "Nature Escape",
    "location": "Frankfurt, Germany",
    "description": "Peaceful retreat surrounded by nature. Ideal for reflection and relaxation.",
    "sub_description": "Unplug and reconnect with the earth’s calm energy.",
    "complete_description": "Escape the city’s chaos and immerse yourself in Frankfurt’s serene countryside. Enjoy nature walks, open-air meditation, and tranquil lodging amidst lush greenery. This retreat is perfect for anyone seeking mental clarity and rejuvenation.",
    "price_start": 28490,
    "image_url": "https://emirej.pl/_next/image?url=https%3A%2F%2Ffrpyol0mhkke.compat.objectstorage.eu-frankfurt-1.oraclecloud.com%2Fblogcms-assets%2Fthumbnail%2FIG7IBCbhB0wvjpYlDS62ms13ncU2fH%2Fdf7670b18e9ab4cae268c6a25edc5e1a.webp&w=256&q=75"
  },
  {
    "title": "Wellness Workshop",
    "location": "Online",
    "description": "Interactive wellness and self-care workshop. Tools for balance and clarity.",
    "sub_description": "Learn to master your mind and energy from home.",
    "complete_description": "Participate in an online session designed to improve your physical, emotional, and mental wellness. Guided by experts, this workshop offers simple yet powerful practices to manage stress, build focus, and restore inner balance.",
    "price_start": 3453,
    "image_url": "https://jpcom.imgix.net/cms/blog/Untitled-design-1.png?w=290&h=180&fit=crop&auto=format&ixlib=imgixjs-3.6.1"
  },
  {
    "title": "Boat Cruise",
    "location": "Goa, India",
    "description": "Scenic boat cruise with sunset views and local snacks.",
    "sub_description": "Sail into the sunset with Goan vibes and good food.",
    "complete_description": "Relax on a stunning evening boat cruise along Goa’s beautiful coastlines. Watch the sunset paint the sky while you enjoy refreshing drinks and Goan delicacies, all set to the rhythm of the sea breeze and soft music.",
    "price_start": 999,
    "image_url": "https://images.unsplash.com/photo-1722031671305-4940bbba29bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvYXQlMjBjcnVpc2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
  },
  {
    "title": "Bungee Jumping",
    "location": "Rishikesh, India",
    "description": "Adrenaline-packed bungee jump with certified instructors and safety gear.",
    "sub_description": "Face your fears and feel the ultimate freefall rush.",
    "complete_description": "Leap off India’s highest bungee point in Rishikesh for the experience of a lifetime. With top-tier safety measures and trained instructors, this adventure delivers pure adrenaline and unforgettable views of the Ganges valley.",
    "price_start": 3999,
    "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMzji0FWlUiklnVoFrTY1I63ep4oPD_QWFwj4Z4mfWP5OQyyFfdo1ryMEw5FOxYay3Btg&usqp=CAU"
  },
  {
    "title": "Sunrise Trek",
    "location": "Nandi Hills, India",
    "description": "Early morning trek with panoramic sunrise views and group guide.",
    "sub_description": "Chase the sunrise from the top of Nandi Hills.",
    "complete_description": "Wake up before dawn to trek up the scenic Nandi Hills and witness a breathtaking sunrise. With an expert guide and friendly group, you’ll enjoy local stories, misty views, and the fresh mountain air that makes it all worth it.",
    "price_start": 899,
    "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6x_CZRsJ8Dr4Lrb2_DuS2d26J1Pt1v889IKRh25XyoHDWNvbM1_ekZnCE0R0lp7puPDk&usqp=CAU"
  }
]

app.get("/experience", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});