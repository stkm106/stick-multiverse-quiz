let currentSceneIndex = 0;

const introScenes = [
    { 
        type: "dialogue", 
        text: "Hé lô, như mọi người đã thấy thì đây chỉ là chút khảo sát vui vui j4f thôi, để xem tính cách mọi người giống con multiverse nào nhất trong cả đám, tổng có 13 đứa!",
        sprite: "assets/intro2.png",
        buttonText: "TIẾP TỤC"
    },
    { 
        type: "dialogue", 
        text: "Kết quả sẽ là đôi lời mô tả về tính cách của các multiverse, có thể không khớp lắm như mấy cái personality quiz khác...<br>vì đằng nào bọn multiverse của tui cũng tính khí thất thường, người ngoài đời khó có ai có nết giống vậy lắm!",
        sprite: "assets/intro3.png",
        buttonText: "TIẾP TỤC"
    },
    { 
        type: "dialogue", 
        text: "Nên chơi cho vui thôi nha, giống được phần nào hay phần đó, hoặc cũng có thể là chúng nó hợp gu mọi người đấy chứ!<br>À, hoạt động tốt nhất trên desktop nha!",
        sprite: "assets/intro4.png",
        buttonText: "TIẾP TỤC"
    },
    {
        type: "dialogue",
        text: "Cảm ơn vì đã đọc! Bắt đầu thôi!",
        sprite: "assets/intro5.png",
        buttonText: "LÉT GÔ"
    }
];

const questions = [
    { 
        text: "Mới sáng ngủ dậy, bạn làm gì đầu tiên?", //1
        options: [
            { text: "Mở mắt chứ gì nữa, rồi có một bữa sáng thật ngon.", stick: ["LM", "April", "Santa"] },
            { text: "Ngủ thêm 5 phút nữa đi, còn sớm mà.", stick: ["Past", "Gris", "Stec"] },
            { text: "Tập thể dục, khởi động ngày mới liền luôn.", stick: ["X77", "Cielo", "Poly"] },
            { text: "Xem lại kế hoạch của ngày để biết sau đó cần làm gì.", stick: ["Doc", "Bast", "Pre"] }
        ]},
    
    {
        text: "Cầm điện thoại lên thì thấy tin vui! Là gì vậy ta?", //2
        options: [
            { text: "Tin nhắn mới từ người mình yêu quý!", stick: ["X77", "LM", "Cielo", "Pre"] },
            { text: "Game yêu thích mới tặng thêm quà!", stick: ["April", "Stec"] },
            { text: "Lúa về! (Nhận được tiền lương)", stick: ["Santa", "Bast", "Doc", "Gris"] },
            { text: "Ngày mai không phải đi học!", stick: ["Poly", "Past"] }
        ]},
    {
        text: "Nếu có thời gian rảnh, bạn muốn làm gì?", //3
        options: [
            { text: "Ở nhà chơi game, giải trí thôi.", stick: ["Past", "Bast", "Gris"] },
            { text: "Đi ra đường chơi với anh em, chạm cỏ tí!", stick: ["LM", "April", "Poly"] },
            { text: "Có mấy kế hoạch đang định làm, giờ sẽ thử luôn.", stick: ["X77", "Cielo", "Stec"] },
            { text: "Thân là họa nô, giờ phải chạy comm nè...", stick: ["Santa", "Doc", "Pre"] }
        ]},
    {
        text: "Giả dụ bạn đang ở một bữa tiệc, bạn thấy...", //4
        options: [
            { text: "Áp lực với quá tải vì đông đúc, muốn về...", stick: ["Past", "Gris", "Stec"] },
            { text: "Hào hứng, thích chung vui với mọi người!", stick: ["Cielo", "April", "Santa", "Doc"] },
            { text: "Ở đây có nước và đồ ăn miễn phí, cũng cũng đi!", stick: ["X77", "LM", "Poly"] },
            { text: "Im lặng ngồi bấm điện thoại tới khi có người rủ về.", stick: ["Bast", "Pre"] }
        ]},
    {
        text: "Thường thì ra đường bạn hay mặc gì?", //5
        options: [
            { text: "Cái gì an toàn, thoải mái nhất là được.", stick: ["X77", "Cielo", "LM", "Past"] },
            { text: "Phải slay, phải đẹp, quan trọng là thần thái.", stick: ["Santa", "Stec"] },
            { text: "Lịch sự, ưa nhìn, tạo cảm giác uy tín.", stick: ["Bast", "Doc", "Pre"] },
            { text: "Đơn giản thôi, nện cái hoodie vào là xong.", stick: ["April", "Poly", "Gris"] }
        ]},
    {
        text: "Phải lựa một thể loại game yêu thích\nthì bạn chọn gì nè?", //6
        options: [
            { text: "Horror", stick: ["LM", "Pre", "Gris"] },
            { text: "Sandbox", stick: ["X77", "Poly", "Past"] },
            { text: "Role-playing", stick: ["Cielo", "Bast", "Doc"] },
            { text: "Rhythm", stick: ["April", "Santa", "Stec"] }
        ]},
    {
        text: "Khi gặp rắc rối khiến bản thân quá tải,\nbạn có cách nào để vượt qua không?", //7
        options: [
            { text: "Kiên trì thêm, phải có cách loại bỏ triệt để ngay và luôn.", stick: ["X77", "LM", "April"] },
            { text: "Tìm sự cân bằng giữa sắp xếp rủi ro và hướng giải quyết.", stick: ["Poly", "Santa", "Pre"] },
            { text: "Thu hồi bản thân để có chút riêng tư và bình yên trước đã.", stick: ["Cielo", "Past", "Stec"] },
            { text: "Tìm đến ai đó, chia sẻ và giải tỏa áp lực để được an ủi.", stick: ["Bast", "Doc", "Gris"] }
        ]},
    {
        text: "Giả dụ phát nữa, đang chơi visual novel\nhoặc RPG mà gặp trường hợp khó đỡ...", //8
        options: [
            { text: "Save vội, có gì còn quay về làm lại từ save đó.", stick: ["X77", "Cielo", "Doc"] },
            { text: "Chiến tới cùng luôn để xem kết cục như nào.", stick: ["LM", "Santa", "Gris", "Stec"] },
            { text: "Alt F4 liền, game khó quá thôi đi ngủ.", stick: ["April"] },
            { text: "Save vội, nhưng sẽ load đi load lại tới khi ưng thì thôi.", stick: ["Poly", "Past", "Bast", "Pre"] }
        ]},
    {
        text: "Bạn nghĩ bạn là kiểu người như nào? :)))", //9
        options: [
            { text: "Hướng nội", stick: ["Past", "Bast", "Pre"] },
            { text: "Hướng ngoại", stick: ["X77", "LM", "Santa", "Stec"] },
            { text: "Hướng nửa trong nửa ngoài", stick: ["Cielo", "Doc", "Gris"] },
            { text: "Hướng về giấc ngủ", stick: ["April", "Poly"] }
        ]},
    {
        text: "Thôi nghiêm túc nè, bạn nghĩ chính mình\nsẽ có vibe như nào?", //10
        options: [
            { text: "Bình minh lãng mạn trên biển khơi lấp lánh.", stick: ["Doc", "Stec"] },
            { text: "Rừng xanh tĩnh lặng, có phần ảm đạm.", stick: ["Past", "Pre"] },
            { text: "Phố xá rộn rã sắc màu, tràn đầy năng lượng.", stick: ["X77", "LM", "April", "Poly", "Santa"] },
            { text: "Cánh đồng lúa miền quê bình dị và dịu dàng.", stick: ["Cielo", "Bast", "Gris"] }
        ]},
    {
        text: "Và bạn thấy mọi người nghĩ mình\nsẽ là kiểu người như nào?", //11
        options: [
            { text: "Biết lắng nghe, ủng hộ và thấu hiểu.", stick: ["LM", "Past", "Bast"] },
            { text: "Tâm điểm kết nối mọi người với nhau.", stick: ["X77", "April", "Gris"] },
            { text: "Kiên cường và siêng năng vì chí hướng.", stick:  ["Cielo", "Doc", "Stec"] },
            { text: "Là sự thông thái của những lời khuyên.", stick: ["Poly", "Santa", "Pre"] }
        ]},
    {
        text: "Tết đến xuân về :))) Bạn hóng gì nhất nè?", //12
        options: [
            { text: "Lì xì chớ gì nữa!", stick: ["X77", "Santa", "Bast"] },
            { text: "Được nghỉ ở nhà khỏe re!", stick: ["Poly", "Past", "Doc"] },
            { text: "Đi chơi, chạm cỏ đồ!", stick: ["LM", "Cielo", "April"] },
            { text: "Nah... Không mong gì cả.", stick: ["Pre", "Gris", "Stec"] }
        ]},
    {
        text: "Bốn mùa bốn quý, mùa nào peak nhất?", //13
        options: [
            { text: "Xuân", stick: ["April", "Doc", "Pre"] },
            { text: "Hạ", stick: ["Cielo", "Poly", "Past"] },
            { text: "Thu", stick: ["LM", "Bast", "Gris"] },
            { text: "Đông", stick: ["X77", "Santa", "Stec"] }
        ]},
    {
        text: "Một chuyến đi chơi thì bạn không thể thiếu...", //14
        options: [
            { text: "Tư trang cá nhân chứ còn gì nữa!", stick: ["LM", "Santa", "Doc"] },
            { text: "Quần áo chỉn chu để còn ngựa!", stick: ["April", "Bast", "Stec"] },
            { text: "Có tiền và điện thoại là có tất cả.", stick: ["Past", "Pre", "Gris"] },
            { text: "Một cái lịch trình hoàn hảo từ A tới Z.", stick: ["X77", "Cielo", "Poly"] }
        ]},    
    {
        text: "Đây là mấy con game khá ít người biết,\ncái tên nào thu hút bạn nhất?", //15
        options: [
            { text: "Petscop (nói về nhân tính)", stick: ["LM", "Past", "Gris"] },
            { text: "Mothered (nói về gia đình)", stick: ["X77", "Doc", "Stec"] },
            { text: "Umfend (nói về tình yêu)", stick: ["Cielo", "Poly", "Bast"] },
            { text: "How Fish Is Made (nói về lựa chọn)", stick: ["April", "Santa", "Pre"] }
        ]},
    {
        text: "Thật sự nha, tiền không phải là vấn đề (chính)\nthì bạn muốn tương lai sẽ ra sao?", //16
        options: [
            { text: "Về quê trồng rau nuôi cá, sống chilling.", stick: ["Bast", "Doc", "Pre"] },
            { text: "Được vẽ, viết, mở comm, sìn những gì mình thích.", stick: ["Poly", "Past", "Stec"] },
            { text: "Mở cửa tiệm nhỏ để bán thứ mình muốn.", stick: ["LM", "April", "Gris"] },
            { text: "Tiếp tục như hiện tại, nhưng bớt được một phần áp lực.", stick: ["X77", "Cielo", "Santa"] }
        ]},
    {
        text: "     Bạn có sợ cái chết không?     ", //17
        options: [
            { text: "Có", stick: ["X77", "Cielo", "Poly", "Past", "Bast", "Doc", "Gris", "Stec"] },
            { text: "Không", stick: ["LM", "April", "Santa", "Pre"] }
        ]},
    {
        text: "Haha lmao hù tí, bạn nghĩ trước khi ngủ\nthì mình thường làm gì đã?", //18
        options: [
            { text: "Vệ sinh cá nhân xong nhảy thẳng vào ngủ luôn.", stick: ["X77", "Santa", "Doc"] },
            { text: "Chơi tí game, đọc tí fic, để lúc mơ còn được delulu.", stick: ["LM", "Poly", "Past"] },
            { text: "Xem trước lịch trình ngày mai để chuẩn bị tinh thần.", stick: ["Cielo", "Pre", "Stec"] },
            { text: "Nằm đó ngẩn ngơ, bần thần suy nghĩ một lúc lâu.", stick: ["April", "Bast", "Gris"] }
        ]},
    {
        text: "Tụi này có vài điểm chung đấy, \nbạn thích điểm chung nào nhất của tụi nó?", //19
        options: [
            { text: "Chung thủy, khởi nguồn và kết thúc là duy nhất", stick: ["Cielo", "Bast", "Doc"] },
            { text: "Tự do, không lo ngại bất kì rào cản ngáng chân.", stick: ["LM", "April", "Santa"] },
            { text: "Khiêm tốn, sẵn lòng mở rộng con đường thành tựu.", stick: ["X77", "Poly", "Stec"] },
            { text: "Kín đáo, đôi khi bày tỏ đã là quá nhiều rồi.", stick: ["Past", "Pre", "Gris"] }
        ]},
    {
        text: "Xong hết rồi đó, bạn nghĩ kết quả\nsẽ rớt vào đứa nào?", //20
        options: [
            { text: "Đứa có tính năng nổ như pháo bông", stick: ["X77", "Cielo"] },
            { text: "Đứa trầm tính, hơi bí ẩn, quyến rũ đồ.", stick: ["Bast", "Pre", "Gris"] },
            { text: "Đứa cinnamon roll dễ thương cuti.", stick: ["LM", "Past", "Doc", "Stec"] },
            { text: "Đứa không bình thường nhất trong đám :)))", stick: ["April", "Poly", "Santa"] }
        ]}
];

let scores = {
        X77: 0, Cielo: 0, LM: 0, April: 0, 
        Poly: 0, Santa: 0, Past: 0, Bast: 0, 
        Doc: 0, Pre: 0, Gris: 0, Stec: 0
    };

function FadeIn(element) {
    element.classList.remove('fade-in');
    setTimeout(() => element.classList.add('fade-in'), 10);
}

function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
        screen.classList.remove('fade-in');
    });

    const target = document.getElementById(screenId);
    if(target) {
        target.classList.remove('hidden');
        FadeIn(target); 
    }
}

// Intro
function showIntroScene() {
    currentSceneIndex = 0;
    switchScreen('intro-screen');
    updateIntroScene();
}

function updateIntroScene() {
    const introTextElement = document.getElementById('intro-text');
    const nextButton = document.getElementById('next-intro-button');
    const introSpriteElement = document.getElementById('intro-sprite'); 

    const sceneData = introScenes[currentSceneIndex];

    introTextElement.innerHTML = sceneData.text; 
    
    if (introSpriteElement && sceneData.sprite) {
        introSpriteElement.src = sceneData.sprite;
    }
    if (sceneData.buttonText) {
        nextButton.innerHTML = `${sceneData.buttonText} <span class="icon-arrow"></span>`;
    }

    FadeIn(introTextElement); //animation each dialogue
    FadeIn(nextButton);
    if (introSpriteElement) FadeIn(introSpriteElement);
}

function nextScene() {
    if (currentSceneIndex < introScenes.length - 1) {
        currentSceneIndex++;
        updateIntroScene(); 
    } else {
        startQuiz(); 
    }
}

// Start
function startQuiz() {
    for (let key in scores) scores[key] = 0;
    
    currentQuestionIndex = 0;
    
    switchScreen('quiz-screen');
    loadQuestion();
    const stickerContainer = document.getElementById('sticker-container');
    if (stickerContainer) {
        stickerContainer.style.display = 'contents';
    }

}

// Restart
function resetQuizToStart() { 
    for (let key in scores) scores[key] = 0;
    currentQuestionIndex = 0;

    switchScreen('start-screen');
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) { 
        showResult();
        return;
    }

    const q = questions[currentQuestionIndex];
    
    document.getElementById('question-text').innerText = q.text;
    document.getElementById('current-q-num').innerText = currentQuestionIndex + 1;
    
    // progress
    const percent = ((currentQuestionIndex) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = percent + '%';

    // stickers
    updateStickers();

    const optsContainer = document.getElementById('options-container');
    optsContainer.innerHTML = '';
    
    const shuffledOpts = [...q.options].sort(() => Math.random() - 0.5); //random options
    
    shuffledOpts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn start-button'; // style keeping
        btn.innerText = opt.text;
        
        btn.onclick = function() {
            selectOption(opt.stick, btn);
        };
        
        optsContainer.appendChild(btn);
    });
}

// options
function selectOption(key, btnElement) {
    Array.from(document.getElementById('options-container').children).forEach(
        btn => btn.disabled = true
    );
    
    btnElement.classList.add('option-selected'); 
    
    if (Array.isArray(key)) {
        key.forEach(k => {
            if (scores[k] !== undefined) {
                scores[k]++;
            }
        });
    } else if (scores[key] !== undefined) {
        scores[key]++;
    }

    currentQuestionIndex++;
    setTimeout(loadQuestion, 300);
}

// stickers
function updateStickers() {
    // contain stickers
    const stickerContainer = document.getElementById('sticker-container'); 
    stickerContainer.innerHTML = ''; //clear old stickers
 
    const stickerPositions = {
        1: {X77: {top:'8%', right:'20%'}},
        2: {Cielo: {top:'25%', left:'15%'}},
        3: {LM: {bottom:'20%', right:'20%'}},
        4: {April: {top:'8%', left:'30%'}},
        5: {Poly: {top:'16%', right:'20%'}},
        6: {Santa: {top:'36%', right:'26%'}},
        7: {Past: {top:'2%', left:'680px'}},
        8: {Bast: {top:'40%', left:'20%'}},
        9: {Doc: {bottom:'27%', right:'20%'}},
        10: {Pre: {bottom:'8%', left:'18%'}},
        11: {Gris: {top:'11%', right:'36%'}},
        12: {Stec: {bottom:'33%', left:'20%'}},
        13: {PreAC: {top:'6%', left:'685px'}},
        14: {CieloA1: {top:'30%', right:'18%'}},
        15: {GrisB: {bottom:'18%', left:'20%'}},
        16: {BastW: {top:'36%', right:'16%'}},
        //17 18 none
        19: {
            LM: {top:'5%', left:'12%'}, X77: {top:'5%', left:'19%'}, Cielo: {bottom: '9%', right: '18%'},
            Santa: {bottom:'7%', right:'10%'}, Pre: {bottom:'14%', left:'17%'}, Bast: {top: '14%', right: '18%'}},  
        20: {
            April1: {top:'25%', left:'10%', rotate: '15deg'}, April2: {bottom:'25%', left:'27%', rotate: '85deg'},
            April3: {top:'10%', right:'50%', rotate: '190deg'}, April4: {top:'6%', right:'22%', rotate: '-20deg'},
            April5: {bottom:'7%', left:'14%', rotate: '-136deg'}, April6: {bottom:'32%', right:'5%', rotate: '106deg'}, April7: {bottom:'12%', right:'18%', rotate: '28deg'}},
    };
    const stickerNum = currentQuestionIndex + 1; 
    const positions = stickerPositions[stickerNum] || {}; 

    Object.keys(positions).forEach(name => {
        const pos = positions[name];
        const img = document.createElement('img');
            if (name.startsWith('April')) {
                img.src = `assets/sticker_April.png`; //so peak bro has bros own statement
            } else {
                img.src = `assets/sticker_${name}.png`;
            } 
        img.style.position = 'fixed';
        img.style.top = pos.top;
        img.style.left = pos.left;
        img.style.bottom = pos.bottom;
        img.style.right = pos.right;
        img.style.rotate = pos.rotate;
        img.style.width = '169px';
        img.style.height = '169px';
        img.classList.add('sticker');
        
        stickerContainer.appendChild(img);
    });
}

// Result
function showResult() {
    const stickerContainer = document.getElementById('sticker-container');
    if (stickerContainer) {
        stickerContainer.style.display = 'none';
    }

    switchScreen('loading-screen'); //wait for cooking

    setTimeout(() => {
        let finalKey = null;
        let maxScore = -1;

        for (let key in scores) {
            if (scores[key] > maxScore) {
                maxScore = scores[key];
                finalKey = key;
            }
        }
        // result image
        const resultImage = document.getElementById('result-image');
        const imagePath = `tstuff/${finalKey}.png`;

        if (resultImage) {
            resultImage.src = imagePath;
            FadeIn(resultImage);
        }
        switchScreen('result-screen');
    }, 5000);
}


function setupEventListeners() {
    const startBtn = document.getElementById('start-button');
    if (startBtn)
        startBtn.onclick = showIntroScene; 

    const nextIntroBtn = document.getElementById('next-intro-button');
    if (nextIntroBtn) 
        nextIntroBtn.onclick = nextScene;

    const restartBtn = document.getElementById('restart-button');
    if (restartBtn)
        restartBtn.onclick = resetQuizToStart; 
    const stickerContainer = document.getElementById('sticker-container');
    if (stickerContainer) {
        stickerContainer.style.display = 'none';
    }

}

document.addEventListener('DOMContentLoaded', setupEventListeners);