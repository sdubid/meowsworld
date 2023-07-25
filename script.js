let data = [
  { image_path: "assets/mouth/rainbow.png", rarity: 10, category: "mouth", name: "Rainbow", description: "A mouth full of joy and colors, it's for kitties that want to express happiness to the world. Rare and delightful, like a rainbow after a storm." },
  { image_path: "assets/mouth/big.png", rarity: 22.4, category: "mouth", name: "Big", description: "Loud and proud, this kitty isn't afraid to show off their mighty maw. A larger-than-life character." },
  { image_path: "assets/mouth/cigarette.png", rarity: 5.4, category: "mouth", name: "Cigarette", description: "This cool cat is a smooth operator, always ready for a quick smoke break. It's all about the attitude, baby." },
  { image_path: "assets/mouth/classic.png", rarity: 26.7, category: "mouth", name: "Classic", description: "Some kitties prefer the timeless appeal of a classic smile, because elegance never goes out of style." },
  { image_path: "assets/mouth/joint.png", rarity: 6, category: "mouth", name: "Joint", description: "Chill and relaxed, these kitties are always ready to kick back and enjoy the good vibes." },
  { image_path: "assets/mouth/kissing.png", rarity: 7.5, category: "mouth", name: "Kissing", description: "Sending kisses to all our feline lovers. Mwah!" },
  { image_path: "assets/mouth/money.png", rarity: 3.8, category: "mouth", name: "Money", description: "If money talks, these kitties are making a statement. For those kitties with a taste for luxury" },
  { image_path: "assets/mouth/sad.png", rarity: 14.7, category: "mouth", name: "Sad", description: "Even kitties have blue days. This expression shows a touch of melancholy in our otherwise joyful world." },
  { image_path: "assets/mouth/tongue.png", rarity: 11.9, category: "mouth", name: "Tongue", description: "Playful and mischievous, these kitties aren't afraid to stick their tongue out at the world." },
  { image_path: "assets/eyes/stoned.png", rarity: 7.8, category: "eyes", name: "Stoned", description: "An ultra-relaxed gaze for kitties who know how to take life slow." },
  { image_path: "assets/eyes/classic.png", rarity: 24, category: "eyes", name: "Classic", description: "The timeless gaze of curiosity and wisdom. Perfect for kitties who appreciate tradition." },
  { image_path: "assets/eyes/closed.png", rarity: 20, category: "eyes", name: "Closed", description: "Inner peace comes easily to these kitties. They're enjoying a purrfect meditation session." },
  { image_path: "assets/eyes/happy.png", rarity: 16.2, category: "eyes", name: "Happy", description: "These kitties can't hide their joy. Happiness twinkles in their eyes." },
  { image_path: "assets/eyes/hearts.png", rarity: 4.4, category: "eyes", name: "Hearts", description: "Infatuated and full of love, these kitties wear their hearts on their... eyes." },
  { image_path: "assets/eyes/laser.png", rarity: 0.3, category: "eyes", name: "Laser", description: "Beam into the future with these dazzling laser eyes. For kitties who aren't afraid to stand out." },
  { image_path: "assets/eyes/lashes.png", rarity: 8.1, category: "eyes", name: "Lashes", description: "These kitties know how to flutter their way into hearts. All about the glamour." },
  { image_path: "assets/eyes/side.png", rarity: 12.2, category: "eyes", name: "Side", description: "Sly and cunning, these kitties are always one step ahead of the game." },
  { image_path: "assets/eyes/spiral.png", rarity: 6.4, category: "eyes", name: "Spiral", description: "Hypnotizing and captivating, spiral-eyed kitties always draw attention." },
  { image_path: "assets/background/gold_purple.png", rarity: 31.7, category: "background", name: "Gold Purple", description: "A grandiose backdrop for your kitty's royal moments. Why fit in when you're meant to stand out?" },
  { image_path: "assets/background/gold_purple_star.png", rarity: 0.97, category: "background", name: "Gold Purple Stars", description: "Add a little magic to your kitty's life with a sky full of golden stars." },
  { image_path: "assets/background/purple_blue.png", rarity: 64.2, category: "background", name: "Purple Blue", description: "A surreal blend of purple and blue, like the twilight sky of a magical realm." },
  { image_path: "assets/background/purple_blue_star.png", rarity: 2.6, category: "background", name: "Purple Blue Stars", description: "Get lost in the cosmos with this stellar background." },
  { image_path: "assets/skin/coffee.png", rarity: 18, category: "skin", name: "Coffee", description: "Warm and comforting, like a cup of your favorite brew." },
  { image_path: "assets/skin/dark_blue.png", rarity: 17.7, category: "skin", name: "Dark Blue", description: "For kitties who are bold, deep, and mysterious." },
  { image_path: "assets/skin/grey.png", rarity: 18.2, category: "skin", name: "Grey", description: "The perfect neutral for those who believe in the power of subtlety." },
  { image_path: "assets/skin/light_blue.png", rarity: 17.8, category: "skin", name: "Light Blue", description: "A gentle hue for kitties with a soft and calming presence." },
  { image_path: "assets/skin/milk_coffee.png", rarity: 18.1, category: "skin", name: "Milk Coffee", description: "Creamy and smooth, this skin tone is an irresistible blend." },
  { image_path: "assets/skin/pink.png", rarity: 9.5, category: "skin", name: "Pink", description: "For the kitty that's not afraid to embrace their playful, feminine side." },
  { image_path: "assets/chain/gold.png", rarity: 0.8, category: "chain", name: "Gold", description: "A symbol of opulence, perfect for the high-flying kitty." },
  { image_path: "assets/chain/diamond.png", rarity: 0.3, category: "chain", name: "Diamond", description: "Ice out your kitty with this cool, sparkling chain. Because a little bling never hurt anybody." },
  { image_path: "assets/clothing/coat_berry.png", rarity: 0.96, category: "clothing", name: "Coat Berry", description: "A cozy coat in a juicy berry hue to keep your kitty warm and stylish" },
  { image_path: "assets/clothing/coat_brown.png", rarity: 0.8, category: "clothing", name: "Coat Brown", description: "A classic brown coat for kitties with a taste for timeless fashion." },
  { image_path: "assets/clothing/coat_cream_brown.png", rarity: 0.9, category: "clothing", name: "Coat Cream Brown", description: "A luxe cream and brown coat to keep your kitty purring in comfort." },
  { image_path: "assets/clothing/coat_grey.png", rarity: 3.4, category: "clothing", name: "Coat Grey", description: "Sophisticated and versatile, a grey coat to match any kitty's style." },
  { image_path: "assets/clothing/hoodie_dark_purple.png", rarity: 4, category: "clothing", name: "Hoodie Dark Purple", description: "A cozy dark purple hoodie for the hipster kitty in your life." },
  { image_path: "assets/clothing/hoodie_grey.png", rarity: 3.4, category: "clothing", name: "Hoodie Grey", description: "A casual grey hoodie for kitties who prioritize comfort." },
  { image_path: "assets/clothing/hoodie_hot_pink.png", rarity: 3.5, category: "clothing", name: "Hoodie Hot Pink", description: "For kitties who want to stand out and make a statement." },
  { image_path: "assets/clothing/hoodie_pink_dust.png", rarity: 3.5, category: "clothing", name: "Hoodie Pink Dust", description: "A soft, dusty pink hoodie for kitties who love a hint of color." },
  { image_path: "assets/clothing/hoodie_purple.png", rarity: 3.3, category: "clothing", name: "Hoodie Purple", description: "A snug purple hoodie for the cool, chilled-out kitty." },
  { image_path: "assets/clothing/hoodie_yellow.png", rarity: 3.5, category: "clothing", name: "Hoodie Yellow", description: "Bright and cheerful, this yellow hoodie radiates positivity." },
  { image_path: "assets/clothing/puffer_coat_berry.png", rarity: 1.7, category: "clothing", name: "Puffer Coat Berry", description: "Puffed-up and warm, this berry-colored coat is both stylish and practical." },
  { image_path: "assets/clothing/puffer_coat_cream.png", rarity: 1.7, category: "clothing", name: "Puffer Coat Cream", description: "Creamy and plush, this puffer coat is all about comfort." },
  { image_path: "assets/clothing/puffer_coat_pink.png", rarity: 1.5, category: "clothing", name: "Puffer Coat Pink", description: "A cute pink puffer coat for kitties who like to bundle up in style." },
  { image_path: "assets/clothing/puffer_coat_purple.png", rarity: 1.5, category: "clothing", name: "Puffer Coat Purple", description: "A toasty purple puffer coat for a colorful and cozy look." },
  { image_path: "assets/clothing/puffer_coat_sunset.png", rarity: 1.9, category: "clothing", name: "Puffer Coat Sunset", description: "A beautiful blend of sunset hues to keep your kitty warm as the day turns into night." },
  { image_path: "assets/clothing/suit.png", rarity: 1.3, category: "clothing", name: "Suit", description: "For the business-savvy kitty, a suit that means business." },
  { image_path: "assets/clothing/tee_blue.png", rarity: 8.6, category: "clothing", name: "Tee Blue", description: "A casual blue tee for the laid-back kitty. Keep it simple, keep it cool." },
  { image_path: "assets/clothing/tee_dark_purple.png", rarity: 8.6, category: "clothing", name: "Tee Dark Purple", description: "A sophisticated dark purple tee for the style-conscious kitties." },
  { image_path: "assets/clothing/tee_golden_hour.png", rarity: 8.7, category: "clothing", name: "Tee Golden Hour", description: "Embody the enchanting beauty of the golden hour with this stylish tee." },
  { image_path: "assets/clothing/tee_pink.png", rarity: 9.2, category: "clothing", name: "Tee Pink", description: "A warm, playful tee in a bright pink hue, perfect for fun-loving kitties." },
  { image_path: "assets/clothing/turtle_neck_barbie.png", rarity: 4.8, category: "clothing", name: "Turtle Neck Barbie", description: "A Barbie-pink turtleneck combining timeless fashion with a modern twist." },
  { image_path: "assets/clothing/turtle_neck_cream.png", rarity: 6, category: "clothing", name: "Turtle Neck Cream", description: "A subtle cream turtleneck radiating calm elegance." },
  { image_path: "assets/clothing/turtle_neck_grey.png", rarity: 6.3, category: "clothing", name: "Turtle Neck Grey", description: "A chic grey turtleneck for kitties that appreciate understated style." },
  { image_path: "assets/clothing/turtle_neck_orange.png", rarity: 6.1, category: "clothing", name: "Turtle Neck Orange", description: "A vibrant orange turtleneck for those kitties who dare to make a fashion statement." },
  { image_path: "assets/clothing/turtle_neck_purple.png", rarity: 6.4, category: "clothing", name: "Turtle Neck Purple", description: "A rich purple turtleneck for kitties who want to show off a little." },
  { image_path: "assets/ears/classic.png", rarity: 69.5, category: "ears", name: "Classic", description: "Timeless ear attributes for a universally appealing kitty look." },
  { image_path: "assets/ears/flames.png", rarity: 9.8, category: "ears", name: "Flames", description: "Pink-hot ears to add a fiery touch to your kitty's style." },
  { image_path: "assets/ears/heart.png", rarity: 20.1, category: "ears", name: "Hearts", description: "Ears that speak love and passion, purr-fect for romantic kitties." },
  { image_path: "assets/accessory/face_tattoo.png", rarity: 1.7, category: "accessory", name: "Face Tattoo", description: "A daring decoration adding a unique, rebellious flair to your kitty's face." },
  { image_path: "assets/accessory/rosy_cheeks.png", rarity: 3.5, category: "accessory", name: "Rosy Cheeks", description: "A charming blush accessory that adds a sweet touch to your kitty's face." },
  { image_path: "assets/accessory/snot.png", rarity: 5.2, category: "accessory", name: "Snot", description: "Kitties who aren't afraid to be humorously different and show that they are bored." },
  { image_path: "assets/accessory/tear.png", rarity: 9, category: "accessory", name: "Tear", description: "A tear symbolizing emotional depth, purr-fect for empathetic kitties." },
  { image_path: "assets/eyewear/3d.png", rarity: 2.2, category: "eyewear", name: "3D", description: "Glasses to make your kitty see all dementions. Anyone knows what's hot in cinemas?" },
  { image_path: "assets/eyewear/dark_disco.png", rarity: 12.9, category: "eyewear", name: "Dark Disco", description: "The perfect shades for party-loving kitties who want to groove with style." },
  { image_path: "assets/eyewear/pixel.png", rarity: 9.8, category: "eyewear", name: "Pixel", description: "Digital age-inspired glasses for kitties who are ahead of their time." },
  { image_path: "assets/eyewear/red_disco.png", rarity: 7.5, category: "eyewear", name: "Red Disco", description: "These party-ready shades are perfect for kitties who love to shine." },
  { image_path: "assets/eyewear/round.png", rarity: 5.1, category: "eyewear", name: "Round", description: "Classic yet chic glasses suitable for any kitty occasion or style." },
  { image_path: "assets/head accessory/banana.png", rarity: 1.5, category: "head_accessory", name: "Banana", description: "Add a fun and fruity flair to your kitty with this playful head accessory." },
  { image_path: "assets/head accessory/bandana_dust.png", rarity: 1.8, category: "head_accessory", name: "Bandana Dust", description: "Stylish dusty bandana for fashionable feline heads." },
  { image_path: "assets/head accessory/bandana_pink.png", rarity: 1.5, category: "head_accessory", name: "Bandana Pink", description: "For kitties that want to be stylish and go a little extra in their fashion." },
  { image_path: "assets/head accessory/earring.png", rarity: 1.3, category: "head_accessory", name: "Earrin", description: "A cool and stylish accessory that brings a modern edge to your kitty's look." },
  { image_path: "assets/head accessory/eco_head.png", rarity: 0.8, category: "head_accessory", name: "Eco Head", description: "Show your love for nature with this earth-friendly head accessory." },
  { image_path: "assets/head accessory/flower.png", rarity: 0.9, category: "head_accessory", name: "Flower", description: "A beautiful floral adornment for a touch of nature and elegance." },
  { image_path: "assets/head accessory/milk_box.png", rarity: 1, category: "head_accessory", name: "Milk Box", description: "A quirky and unique accessory for kitties who love to stand out... and milk" },
  { image_path: "assets/head accessory/nimbus.png", rarity: 0.2, category: "head_accessory", name: "Nimbus", description: "A cloud of enlightenment, purr-fect for your intellectual kitty." },
  { image_path: "assets/head accessory/yarn_ball.png", rarity: 0.6, category: "head_accessory", name: "Yarn Ball", description: "A playful accessory for kitties who love a good old ball of yarn." },
  { image_path: "assets/stripes and freckles/blue.png", rarity: 5.2, category: "stripes_freckles", name: "Blue", description: "Splash some serene ocean vibes on your kitty with these cool blue stripes and freckles. A purrfect choice for a relaxed, go-with-the-flow personality." },
  { image_path: "assets/stripes and freckles/brown.png", rarity: 10.1, category: "stripes_freckles", name: "Brown", description: "For kitties with an earthy and grounded demeanor, these brown stripes and freckles add a touch of nature-inspired elegance." },
  { image_path: "assets/stripes and freckles/grey.png", rarity: 10.8, category: "stripes_freckles", name: "Grey", description: "These grey stripes and freckles give your kitty a classic, timeless look. Ideal for those who appreciate subtle and understated charm." },
  { image_path: "assets/nose/black.png", rarity: 44.7, category: "nose", name: "Black", description: "A classic black nose, a purrfect touch for kitties looking to maintain a traditional feline look." },
  { image_path: "assets/nose/dark_pink.png", rarity: 45.2, category: "nose", name: "Dark Pink", description: "Add a pop of playful color to your kitty with this charming dark pink nose. Ideal for those seeking a cute and cheery aesthetic." },
  { image_path: "assets/nose/tesla.png", rarity: 9.6, category: "nose", name: "Tesla", description: " A nod to the future, this Tesla nose adds a tech-inspired flair to your kitty. It's all about pioneering the next-generation cat-titude." },
  { image_path: "assets/print/cheetah.png", rarity: 4.3, category: "print", name: "Cheetah", description: "Unleash your kitty's inner wildcat with this fast and fierce cheetah print." },
  { image_path: "assets/print/tiger.png", rarity: 5, category: "print", name: "Tiger", description: "Show off the power and strength of your kitty with this daring tiger print. A clear choice for leaders and big cat enthusiasts." },
  { image_path: "assets/print/leopard.png", rarity: 4.6, category: "print", name: "Leopard", description: "A bold and elegant leopard print for kitties who love to flaunt their unique style." },
  { image_path: "assets/whiskers/classic.png", rarity: 62.2, category: "whiskers", name: "Classic", description: "The timeless charm of classic whiskers never fails to add grace to any kitty's look." },
  { image_path: "assets/whiskers/wavy.png", rarity: 24.7, category: "whiskers", name: "Wavy", description: "For kitties that love to stand out, these wavy whiskers add a fun and eccentric twist to their look." },
  { image_path: "assets/whiskers/zorro.png", rarity: 12.5, category: "whiskers", name: "Zorro", description: "Inspired by the iconic hero, Zorro, these whiskers represent courage, mystery, and a dash of theatrical flair. Perfect for kitties with an adventurous spirit." },
];

$(document).ready(function () {
  // Unique category names
  const categories = [...new Set(data.map(item => item.category))];

  // Generate category HTML dynamically
  categories.forEach(function (category) {
    const categoryHtml = `
      <div class="category">
          <h2>${category.split('_').join(' ').charAt(0).toUpperCase() + category.split('_').join(' ').slice(1)}</h2>
          <div id="${category}" class="item-container d-flex flex-row">
              <!-- ${category.split('_').join(' ').charAt(0).toUpperCase() + category.split('_').join(' ').slice(1)} NFTs go here -->
          </div>
      </div>
    `;
    $("#container").append(categoryHtml);
  });

  // Intersection Observer
  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let rarityBar = entry.target;
        $(rarityBar).animate({ width: `${rarityBar.getAttribute('data-rarity')}%` }, 2000);
        observer.unobserve(rarityBar);
      }
    });
  }, { threshold: 0.1 }); // start observing when 10% of the element is in view

  // Add items to categories
  data.forEach(function (nft, index) {
    const item = `
      <div class="item">
          <img src="${nft.image_path}" alt="${nft.name} MeowsWolrd" class="item-img">
          <div class="item-name">${nft.name}</div>
          <div class="rarity-bar">
              <div id="rarity-level-${index}" class="rarity-level" data-rarity="${nft.rarity}"></div>
          </div>
      </div>
    `;
    const categoryElement = $("#" + nft.category);
    categoryElement.append(item);
    observer.observe(document.querySelector(`#rarity-level-${index}`));

    // Add click listener for the modal
    categoryElement.children().last().on("click", function () {
      $('#modalContent').html(`
    <img id="modalImage" src="${nft.image_path}" alt="${nft.name}" class="modal-img">
    <div id="modalCategoryName" class="modal-category-name">
        <span id="modalName">${nft.name}</span>
        <span id="modalCategory">${nft.category}</span>
    </div>
    <p id="modalDescription">${nft.description}</p>  <!-- Here, we've used the 'description' field -->
    <div id="modalRarity">Rarity Level: ${nft.rarity}</div>
  `);
      $('#modal').show();
    });

    // close the modal when 'x' is clicked
    $(".close").click(function () {
      $("#modal").hide(); // Changed from addClass to hide()
    });

    // close the modal when user clicks outside of the modal content
    $(window).click(function (event) {
      if (event.target == document.getElementById('modal')) {
        $("#modal").hide();
      }
    });
  })
});