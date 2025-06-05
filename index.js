const storyImages = [
     'images/KesF.gif',
    'images/latino-man-his-20s-learning-dance_1238364-88079.jpg',
    'images/low-angle-woman-looking-camera_23-2148312210.avif',
    'images/medium-shot-woman-with-yellow-suit_23-2149068946.jpg',
    'images/nigerian-man-dressed-as-construction-worker-site_1238364-43851.jpg',
    'images/young-man-rocking-urban-rap-style-vector-isolated-illustration_1310786-57769.jpg',
    'images/young-people-tracksuits_130951-1150.jpg',
    'images/young-woman-with-shopping-bags-female-person-walking-with-her-purchases_1170970-807.avif',
    'images/blazer-poster-1.png', 
    'images/curvaceous-woman-dressed-90s-streetwear-fashion-illustration-vector_893055-22621.avif',    
    'images/woman.avif',
    'images/woman-with-purple-shirt-purple-pants-is-carrying-bags_265721-3465.avif',
    'images/woman-with-purple-bow-purple-dress-with-purple-bow-it_265721-3470.avif',
    'images/woman-striped-top-is-walking-down-sidewalk_9493-63066.avif',
    'images/woman-jacket-poster-1.avif',
    'images/woman-holding-bags-woman-with-shopping-bag-her-hand_265721-3498.jpg',
    'images/wide-angle-shot-man-ruffled-pants-black-hair_1322560-107567.jpg',
    'images/what.avif',
    'images/vector-beautiful-girl-stylish-fashion_1129452-52.avif',
    'images/two-women-with-shopping-bags-one-has-picture-woman-holding-shopping-bag_265721-3476.jpg',
    'images/tuybc.avif',
    'images/trendy-shopaholic-girl-wear-fashionable-clothes-holding-purchases-paper-packs-young-caucasian-woman-holding-bags_1016-13631.avif',
    'images/trendy-girl-with-pink-sweater-jeans-fashion-portrait-illustration_782253-26.avif',
    'images/thai-woman-traditional-thai-silk-weavers-gear_1238364-64741.jpg',
    'images/teenage-boy-sportswear_130951-1149.jpg',
    'images/sweater-poster-1.png',
    'images/stylish-woman-shopping-young-fashionista-holding-bags-outdoors_1332469-13211.avif',
    'images/stylish-woman-dancing-bright-yellow-suit-sunglasses_348404-1580.avif',
    'images/stylish-simplicity-vector-illustration-black-man-casual-outfit_1168402-2038.jpg',
    'images/stylish-man-wearing-yellow-trench-coat-sunglasses_1310786-53469.jpg',
    'images/stylish-man-wearing-yellow-trench-coat-sunglasses_1310786-53033.jpg',
    'images/stylish-man-sunglasses-bending-with-hands_1120554-57408.jpg',
    'images/stylish-couple-walking-together-posing-colorful-fashionable-clothing_1266916-388.jpg',
    'images/stylish-black-man-wearing-suit-elegant-line-art-style-vector_72948-466.jpg',
    'images/stylish-black-man-elegant-art-style-vector_72948-3461.avif',
    'images/stylish-african-american-woman-with-waist-bag-fashionable-urban-lifestyle-shot_1310786-81096.jpg',
    'images/senegalese-man-traditional-wrestlers-outfit_1238364-57450.jpg',
    'images/portrait-young-woman-neon-light-gradient-backgound_489646-13892.avif',
    'images/portrait-smiley-teenage-girl_23-2149085854.avif',
    'images/portrait-beautiful-smiling-woman-city_1157-38040.avif',
    'images/pmmmk.jpg',
    'images/nigerian-man-traditional-highlife-musicians-outfit_1238364-58370.jpg',
    'images/nigerian-man-dressed-as-construction-worker-site_1238364-44096.jpg',
    'images/nigerian-man-dressed-as-construction-worker-site_1238364-43851.jpg',
    'images/mozambican-man-traditional-singers-outfit_1238364-67645.jpg',
    'images/mozambican-man-traditional-mozambican-attire-as-teacher_1238364-45576.avif',
    'images/minimalist-fashion-vector-illustration-confident-woman-stylish-beige-outfit-with-hearts_874914-3973.avif',
    'images/medium-shot-woman-with-yellow-suit_23-2149068946.jpg',
    'images/man-with-beard-sits-purple-background_1140815-4795.jpg',
    'images/man-face-artwork_961307-52291.jpg',
    'images/low-angle-woman-looking-camera_23-2148312210.avif',
    'images/latino-man-his-20s-learning-dance_1238364-88341.jpg',
    'images/latino-man-his-20s-learning-dance_1238364-88079.jpg',
    'images/KesF.gif',
    'images/jacket-poster-1.png',
    'images/jacket-poster-1 (2).png',
    'images/illustration-person-jumping-joyfully-wearing-sunglasses-casual-clothes_53876-651389.jpg',
    'images/illustration-arab-woman-hijab-with-shopping-bags_805465-346.jpg',
    'images/illustration-arab-woman-hijab-with-shopping-bags_805465-330.jpg',
    'images/hoffy.jpg',
    'images/happy-young-woman-jumping_23-2148885425.avif',
    'images/handsome-guy-stylish-summer-clothes_250538-1173.avif',
    'images/handsome-guy-stylish-clothes_250538-1115.jpg',
    'images/handsome-black-skinned-man-casual-clothes_169241-7801.jpg',
    'images/hand-drawn-black-woman-illustration_23-2149429511.avif',
    'images/hand-drawn-black-woman-illustration_23-2149429510.avif',
    'images/hand-drawn-black-man-illustration_23-2149429508.avif',
    'images/hand-drawn-black-man-illustration_23-2149429506.avif',
    'images/hand-drawn-abstract-stock-illustration-with-young-happy-beauty-man-portrait-fashion-outfit-white-background_200084-705.avif',
    'images/hand-drawn-abstract-stock-graphic-illustration-with-young-happy-black-beauty-female-with-piercing-her-face-white-background_200084-524.jpg',
    'images/group-male_24911-72262.jpg',
    'images/girl-teenager-athlete-pink-tracksuit-stylish-blue-hairstyle-man-full-length-pose_734900-3.avif',
    'images/girl-goes-sports_657328-107.avif',
    'images/gil.avif',
    'images/free-vector-african-american-people-casual-wear-outfit_1000823-297322.avif','images/free-vector-african-american-people-casual-wear-outfit_1000823-297281.jpg',
    'images/free-vector-african-american-people-casual-wear-outfit_1000823-297281.jpg',
    'images/free-vector-african-american-people-casual-wear-outfit_1000823-297172.jpg',
    'images/flat-illustration-dance-choreographer_9206-28812.avif',
    'images/flat-grovy-style-man-dancing-party_753224-231.avif',
    'images/fashionable-young-man-hat-coat-urban-style-vector-illustration_194708-3252.jpg',
    'images/fashionable-woman-holding-packages-with-clothes_169241-5316.avif',
    'images/fashionable-black-businessman-elegant-line-art-style-vector-abstract_72948-454.jpg',
    'images/fashion-illustration-with-male-model_23-2148215964.avif',
    'images/fashion-boy-listening-music-by-auricular_1196-768.jpg',
    'images/edm_02.gif',
    'images/drawing-woman-wearing-purple-outfit-with-purple-belt_1087929-12475.avif',
    'images/detailed-flat-vector-people-illustration-man-with-casual-outfit_1268604-784.jpg',
    'images/curvaceous-woman-dressed-90s-streetwear-fashion-illustration-vector_893055-22621.avif',
    'images/cool-black-hipster-girl-with-sunglasses_88272-7268.avif',
    'images/c3436f37d12cc1508eeb9c988fdc6ac7.jpg',
    'images/bshsw.jpg',
    'images/boy.jpg',
    'images/bloggerharry-27166142641942253.jpg',
    'images/blazer-poster-1.png',
    'images/1Y1A.gif',
    'images/3d-illustration-handsome-young-man-pink-shirt-white-jacket-pink-background_912214-91174.avif',
    'images/114d46dd7a1d7632f05fb4ae0ca52f42.gif',
    'images/4230a631755aab86740d4c444230e789.gif',
    'images/16908592558aecc95d7bdf620e90d1e62738dc51f7_thumbnail_720x.jpg',
    'images/170211049195197e5092f022c31c7d0b8f9c8d372b_thumbnail_720x.jpg',
    'images/aesthetic-pastel-fashion-girl-discord-profile-picture_742173-12686.avif',
    'images/african-american-boy-his-20s-practicing-parkour_1238364-73676.jpg',
    'images/african-american-boy-his-40s-running-business_1238364-75371.jpg',
    'images/african-american-boy-his-teens-practicing-gymnastics_1238364-88211.jpg',
    'images/african-american-woman-with-prosthetic-arm-sportswear-isolated-white-background_129422-417.avif',
    'images/african-american-women-taking-selfie-photo-posing-with-background-plant-pot-chair-illustration_664482-374.avif',
    'images/african-male-pilot-his-50s-flying-airplane_1238364-101857.jpg',
    'images/african-young-woman-with-braids-pink-background-portrait-red-suit-yellow-pants_242111-23967.avif',
    'images/african-young-woman-with-braids-pink-background-portrait-red-suit-yellow-pants_242111-23967.avif',
    'images/beautiful-woman-with-bright-silk-studio-fashion-concept_912214-84447.jpg',
    

  ];

const storyCards = document.getElementById('storyCards');
function renderStoryCards(activeIndex) {
    storyCards.innerHTML = '';
    // Show up to 5 story cards at a time, centered on the active one if possible
    const total = storyImages.length;
    const visibleCount = 5;
    let start = Math.max(0, activeIndex - Math.floor(visibleCount / 2));
    if (start + visibleCount > total) start = Math.max(0, total - visibleCount);

    for (let i = start; i < Math.min(start + visibleCount, total); i++) {
        const card = document.createElement('div');
        card.className = 'story-card' + (i === activeIndex ? ' active' : '');
        card.innerHTML = `
            <img src="${storyImages[i]}" class="story-img" alt="Story">
        `;
        storyCards.appendChild(card);
    }
}

let currentStory = 0;
renderStoryCards(currentStory);

setInterval(() => {
    currentStory = (currentStory + 1) % storyImages.length;
    renderStoryCards(currentStory);
}, 4000);

const fab = document.getElementById('fab');
const modal = document.getElementById('uploadModal');
const closeModal = document.getElementById('closeModal');
const uploadForm = document.getElementById('uploadForm');
const productList = document.getElementById('productList');
const priceNaira = document.getElementById('priceNaira');
const convertedPrice = document.getElementById('convertedPrice');
const productImageInput = document.getElementById('productImage');
const imagePreview = document.getElementById('imagePreview');

const NAIRA_TO_DOLLAR = 0.00067; // Example rate

fab.onclick = () => modal.classList.add('show');
closeModal.onclick = () => modal.classList.remove('show');
modal.onclick = e => { if (e.target === modal) modal.classList.remove('show'); };

priceNaira.oninput = function() {
    const val = parseFloat(priceNaira.value) || 0;
    convertedPrice.textContent = val ? `≈ $${(val * NAIRA_TO_DOLLAR).toFixed(2)}` : '';
};

// Show image preview before upload
productImageInput.onchange = function() {
    const file = productImageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
            imagePreview.src = evt.target.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.src = '';
        imagePreview.style.display = 'none';
    }
};

uploadForm.onsubmit = function(e) {
    e.preventDefault();
    const file = productImageInput.files[0];
    const price = parseFloat(priceNaira.value);
    if (!file || !price) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        addProductCard(evt.target.result, price);
        uploadForm.reset();
        convertedPrice.textContent = '';
        imagePreview.src = '';
        imagePreview.style.display = 'none';
        modal.classList.remove('show');
    };
    reader.readAsDataURL(file);
};

function addProductCard(imgSrc, price) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${imgSrc}" class="product-img" alt="Product">
        <div class="prices">
            <span>₦${price}</span>
            <span>$${(price * NAIRA_TO_DOLLAR).toFixed(2)}</span>
        </div>
        <div class="like-order">
            <button class="like-btn"><span class="material-icons">favorite_border</span><span class="like-count">0</span></button>
            <button class="order-btn">Order</button>
        </div>
    `;
    // Like button toggle and counter
    const likeBtn = card.querySelector('.like-btn');
    const likeIcon = likeBtn.querySelector('.material-icons');
    const likeCount = card.querySelector('.like-count');
    let count = 0;
    likeBtn.onclick = function() {
        if (likeBtn.classList.toggle('liked')) {
            count++;
            likeIcon.textContent = 'favorite';
        } else {
            count = Math.max(0, count - 1);
            likeIcon.textContent = 'favorite_border';
        }
        likeCount.textContent = count;
    };
    productList.prepend(card);
}


const searchPage = document.getElementById('searchPage');
const searchInput = document.getElementById('searchInput');
const closeSearchPage = document.getElementById('closeSearchPage');
const searchResults = document.getElementById('searchResults');

// Show search page when search icon is clicked (second header-btn)
document.querySelectorAll('.header-btn')[1].onclick = function() {
    searchPage.style.display = 'flex';
    searchInput.value = '';
    searchInput.focus();
    renderSearchResults('');
};

// Hide search page
closeSearchPage.onclick = function() {
    searchPage.style.display = 'none';
};

// Filter products as user types
searchInput.oninput = function() {
    renderSearchResults(searchInput.value.trim().toLowerCase());
};

// Example renderSearchResults function (customize as needed)
function renderSearchResults(query) {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    if (!query) {
        searchResults.innerHTML = '<div>No results found.</div>';
        return;
    }
    const filtered = products.filter(product =>
        (product.username && product.username.toLowerCase().includes(query)) ||
        (product.phone && product.phone.toLowerCase().includes(query)) ||
        (product.price && product.price.toString().includes(query))
    );
    searchResults.innerHTML = filtered.length
        ? filtered.map(product => `
            <div class="product-card">
                <img src="${product.image}" class="product-img" alt="Product">
                <div class="prices">
                    <span>₦${product.price}</span>
                </div>
                <div class="meta">
                    <span>${product.username || ''}</span>
                    <span>${product.phone || ''}</span>
                </div>
            </div>
        `).join('')
        : '<div>search for ussers.</div>';
}


