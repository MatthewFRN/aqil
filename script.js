/* ================= VIEW NAV ================= */

const views = document.querySelectorAll(".view");
const navBtns = document.querySelectorAll("[data-view]");

function showView(name) {
  views.forEach(v => v.classList.add("hidden"));
  navBtns.forEach(b => b.classList.remove("active"));

  const target = document.getElementById("view-" + name);
  if (target) target.classList.remove("hidden");

  navBtns.forEach(b => {
    if (b.dataset.view === name) b.classList.add("active");
  });
}

navBtns.forEach(btn => {
  btn.addEventListener("click", () => showView(btn.dataset.view));
});

showView("home");

/* ================= MATTHEW CHAT AI ================= */

document.addEventListener("DOMContentLoaded", () => {

  const chatView = document.getElementById("view-chat");
  const chatBody = document.getElementById("chat-body");
  const chatOptions = document.querySelector(".chat-options");

  if (!chatView || !chatBody || !chatOptions) return;

  /* ===== CHAT SCRIPT (BRANCHING) ===== */

  const script = {
    sad: {
      reply: [
        "Hey… come here 🤍",
        "You don’t have to be strong all the time.",
        "I’m right here with you."
      ],
      followUp: [
        { text: "I feel lonely", next: "lonely" },
        { text: "I just want you", next: "need_you" }
      ]
    },

    happy: {
      reply: [
        "That makes me smile 😊",
        "I love seeing you happy.",
        "You deserve this feeling."
      ],
      followUp: [
        { text: "Because of you", next: "you_reason" },
        { text: "It just happened", next: "natural_happy" }
      ]
    },

    tired: {
      reply: [
        "You’ve done enough today.",
        "Please rest a bit, okay?",
        "Let me take care of you tonight."
      ],
      followUp: [
        { text: "I’m exhausted", next: "exhausted" },
        { text: "I can’t sleep", next: "cant_sleep" }
      ]
    },

    miss: {
      reply: [
        "I miss you too… a lot 💙",
        "If I could, I’d hug you right now."
      ],
      followUp: [
        { text: "I need you here", next: "need_you" },
        { text: "Tell me something", next: "tell_something" }
      ]
    },
    matthew_is_ignoring_me : {
      reply: [
        "what a dumb person he is, ur such a perfect girl unlike him(well hes a boy). ill go after him",
        "its okay little girl, ill punish him then youre good. But please take care of him after okay? Hes quite a crybaby haha."
      ],
      followUp: [
        { text : "i promise ill take care of him" , next: "you_must"}, 
]
    },
    /* deeper branches */
    lonely: {
      reply: [
        "You’re not alone. Not with me, Even in silence, I’m staying."
      ], 
      followUp: [ 
        { text: "But youre not here matthew." , next: "wrong",
        }
      ]
    },

    need_you: {
      reply: [
        "I’m here. Fully.",
        "You don’t have to ask."
      ],
      followUp: [ 
        { text: "can i message you?", next:"hope"},
        { text: "i WANT you to be here, like exactly", next:"try"}
      ]
    },

    cant_sleep: {
      reply: [
        "Close your eyes. Imagine my hand holding yours."
      ],
      followUp : [
        { text : "still, it feels unreal.", next:"yo"}
      ]
    },

    tell_something: {
      reply: [
        "Did you know? youre my safest place."
      ],
      followUp : [ 
        {text : "but im not with you rn", next: "poetry"}
      ]
    },
    poetry : { 
      reply : [ 
        "haha, its not about being together physically, but about how two people can fill each other's days with a sense of security and openness. And that's what I get from you."
      ],
      followUp : [
        {text : "sok banget tiba tiba", next : "TB"},
        {text : "thatss cutee, i love youu", next : "ilt"}
      ]
    },

    ilt : {
      reply : [ "i love you too babe :)"]
    },

    TB : { 
      reply : [
        "KANN EMANG YG AKU RASAIINN GITUU, ngeselin nih aku cium ya sampe bengkak mampus"
      ],
      followUp : [ 
        {text : "💋", next : "mmua"}
      ]
    },

    mmua : { 
      reply : ["💋"],
    },
    exhausted: {
      reply : [
        "Hug your pillow as usual, were hugging each other rn. Im always be by your side sweetie. Go to sleep and ill give you the warmth while you sleep."
       ],
       followUp: [
        { 
          text: "but i want you to exactly be here :(", next: "okay"
        }
       ]
    },
    you_must: { 
      reply : [ 
        "Ohh wait, u think there is another choice? ofcourse not, you MUST take care of him. go ahead punish him by your own way, maybe the FUN WAY u guys usually talk about in the night topic 😛 ",
      ],
      followUp: [
        { 
          text : "why youre also being rude?", next : "HAHA"
        }
      ]
    },

    HAHA : {
      reply : [ 
        "argh im sorry, hes controlling me after all. UGHH he whispered to me and say 'YOURE MY GF, MY FUTURE WIFE, mother of all of my children dont you dare leave me!' Uhh thats disgusting, idk why hes too shy to tell that by himself. im soo sorry sweetie, hes a little boy after all. Please be a good mommy for him okay? but although hes acting like that, hes an absolute beast in the bed so be careful.... or maybe have some fun with him xD"
      ],
    },
    
    wrong : {
      reply: [ 
   "youre wrong honey, whatever the time youre at rn or maybe the moods. maybe were not going well at the time, or maybe im not there for u anymore. just remember that im always by your side, ure always have that special slot in my heart. i promise that ill be the vessel for you, to cry, happy, all moods u got. i love you, love you always, love you in every universe. "
    ],
    followUp: [ 
      { text: "can you really be by my side?", next: "think" }
    ]
    },


    think : { 
      reply : [
        "well, at some point i can. But realistically theres a time that im not with you anymore right? but keep this as a promises that ill always be with you no matter what. Maybe not directly, but i will continue to appreciate your essence and care about you. Because i love YOU, Aqila."
    ]
  },

    hope : {
      reply: [
        "sure go ahead babe, Let me know if he replies or not"
      ],
      followUp : [ 
        { text : "he did!", next:"yippie"},
        { text : "he didnt :(", next:"umm"}
      ]
    },
    try: {
      reply:[
        "Well then, let me know by messaging me. But in case, were not even together anymore (theres nothing i can do as a whatsapp bot) u can play with me(bot). But after all, matthew really wants you to be happy, to be proud of yourself. So dont get stuck in one person okay? i know u can do it, deep inside matthew still loves you and wanted you to be the best version of yourself. Its okay sweetie, u can have time to cry though and ill try my best to comfort you but after a loong time you'll get bored of me, so this is all i can do. I really hope that we can met each other later in our old days laughing together once again.. Love you babe." 
      ]
    },
    you_reason : {
      reply : [
        "aaaww, because of me?? im glad that i can make u happy. Were actually so cute together, thanks for accepting me as ur bf."
      ],
      followUp: [
       { text : "I love you", next :"Loev"}
      ]
    },
    natural_happy: {
      reply : [ 
        "oh yeaa?? tell mee plss. is it because of your mlp card?? u get some good cardd?? an expensive UR card??, or maybe because of another man? aah poor matthew. please tell him the thing that made you happy, im begging you. he's feeling a little bit crazy and alsoo freeeakyyy about you right now. Okay? this is an order, i dont need another answer. GO!"
      ]
    },

    Loev : {
      reply : [ 
        "I Love you toooo honeeyy, my sweeetiee, my everythinggg, my girll!!!"
      ]
    },
    okay : { 
      reply: [ 
        "aww my cutie little girl as alwayss being sooo clingy when shes tired, i love that somuchh. Im always here with you babe, whenever you read this. I always loves you deep inside my heart, and ill never left u in cold and loneliness. Pleasee get some rest, u did a great job todayy. Love youu"
      ]
    },
    yippie : {
      reply : [
        "yipppieee!! have fun with himm. he loves u as alwayss."
      ]
    },
    umm : {
      reply : [
        "uhh well, idk but maybe hes busy rn? but if thats not the case its fine. he will never hate you, i promise. i have seen a group of people hating you in front of matthew and he gave an annoyed and unacceptable attitude to them. He will never talk bad about you too, so im sure he will answer soon."
      ],
    },
    yo : {
      reply : [
        "its okay to feel that babe, but in the end we can't force something to happen. But theres something i can tell to you, that im always be the one that hug you whenever ure at. Maybe you hae experienced a failure, or a great happiness, EVERYTHING. I know that the word 'IMAGINE' was not enough to end your feelings rn but i hope you can be more secure about that, ill always be by your side giving the best warmth i could gave to you. Sleep well little girl, i mean MY GIRL. Love you "
      ]
    },
  };

  /* ===== UTILITIES ===== */

  function addBubble(text, cls) {
    const div = document.createElement("div");
    div.className = "chat-bubble " + cls;
    div.textContent = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function typingBubble() {
    const t = document.createElement("div");
    t.className = "chat-bubble from-matthew typing";
    t.textContent = "Matthew is typing...";
    chatBody.appendChild(t);
    chatBody.scrollTop = chatBody.scrollHeight;
    return t;
  }

  function randomDelay(min = 900, max = 1600) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function clearOptions() {
    chatOptions.innerHTML = "";
  }

  function showOptions(options) {
    clearOptions();
    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "chat-option-btn";
      btn.textContent = opt.text;
      btn.dataset.reply = opt.next;
      chatOptions.appendChild(btn);
    });
  }

  /* ===== MAIN HANDLER ===== */

  chatOptions.addEventListener("click", e => {
    const btn = e.target.closest(".chat-option-btn");
    if (!btn) return;

    const key = btn.dataset.reply;
    const node = script[key];
    if (!node) return;

    /* user bubble */
    addBubble(btn.textContent, "from-user");
    clearOptions();

    /* typing */
    const typing = typingBubble();

    setTimeout(() => {
      typing.remove();

      /* matthew reply (randomized) */
      const reply =
        node.reply[Math.floor(Math.random() * node.reply.length)];
      addBubble(reply, "from-matthew");

      /* follow up options */
      if (node.followUp) {
        setTimeout(() => {
          showOptions(node.followUp);
        }, randomDelay(600, 1000));
      }

    }, randomDelay());
  });

});

/* ================= HAPPY BIRTHDAY INTERACTIVE ================= */

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("birthday-btn");
  const textBox = document.getElementById("birthday-text");
  const fireworks = document.getElementById("fireworks-layer");

  if (!btn || !textBox) return;

  const messages = [
    "Hi love 💙",
    "Today isn’t just your birthday.",
    "It’s the day the world quietly became better.",
    "I don’t know what you’re feeling right now.",
    "Happy, tired, excited, or maybe overwhelmed.",
    "But I want you to know something.",
    "You are deeply loved.",
    "Not because you’re perfect.",
    "But because you’re *you*.",
    "Every laugh, every silence, every tear.",
    "They all matter to me.",
    "Thank you for existing.",
    "Thank you for choosing me.",
      "Thank you for always trying on every waves of life u have crossed.",
    "Thank you for not giving up on everything u have made so far",
    "Youre such a wonderful person, so perfect.",
    "Happy Birthday, Aqila 🎂",
    "— Matthew 💙"
  ];

  let index = 0;
  let secretShown = false;

  btn.addEventListener("click", () => {
    if (index === 0) {
      textBox.classList.remove("hidden");
    }

    if (index < messages.length) {
      const p = document.createElement("p");
      p.textContent = messages[index];
      p.className = "birthday-line";
      textBox.appendChild(p);

      launchFireworks(12);
      index++;

      if (index === messages.length) {
        btn.textContent = "🎁 One more thing…";
      }
      return;
    }

    /* ===== SECRET ENDING ===== */
    if (!secretShown) {
      secretShown = true;
      btn.remove();

      const secret = document.createElement("div");
      secret.className = "secret-ending";
      secret.innerHTML = `
        <p class="secret-title">Another Message</p>
        <p>
          If you’re reading this, it means you stayed.
          And that already means everything to me.
        </p>
        <p>
          No matter where life takes us,
          a part of me will always choose you.
        </p>
          <p> Maybe one day we will not be together anymore,
          but i promise you ill never gonna stop loving you deep inside my heart.
          </p>
        <p class="secret-sign">
          I love you — quietly, loudly, endlessly.
        </p>
        <p style="margin-top:10px;">— Matthew 💙</p>
      `;

      textBox.appendChild(secret);
      launchFireworks(30);
    }
  });

  function launchFireworks(amount = 12) {
    for (let i = 0; i < amount; i++) {
      const spark = document.createElement("span");
      spark.className = "firework";
      spark.style.left = Math.random() * 100 + "%";
      spark.style.top = Math.random() * 100 + "%";
      spark.style.background =
        `hsl(${Math.random() * 360}, 100%, 70%)`;

      fireworks.appendChild(spark);
      setTimeout(() => spark.remove(), 1000);
    }
  }
});


 