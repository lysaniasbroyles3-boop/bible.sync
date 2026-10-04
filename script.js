```javascript
/* =====================================
   FAITHPATH BIBLE STUDY
===================================== */


const lessons = [

  {
    title: "Trusting God",
    category: "Faith",

    verse:
      "Trust in the Lord with all your heart and lean not on your own understanding.",

    reference: "Proverbs 3:5",

    explanation:
      "This verse reminds us that we don't have to figure everything out by ourselves. We can trust God and ask Him to guide our choices.",

    question:
      "What does Proverbs 3:5 encourage us to do?",

    answers: [
      "Trust God",
      "Only trust ourselves",
      "Never ask for help"
    ],

    correct: 0
  },


  {
    title: "Loving Others",
    category: "Love",

    verse:
      "Love one another. As I have loved you, so you must love one another.",

    reference: "John 13:34",

    explanation:
      "Jesus teaches His followers that love should be at the center of how we treat other people.",

    question:
      "What does Jesus tell His followers to do?",

    answers: [
      "Ignore other people",
      "Love one another",
      "Only help friends"
    ],

    correct: 1
  },


  {
    title: "Being Thankful",
    category: "Gratitude",

    verse:
      "Give thanks in all circumstances; for this is God's will for you in Christ Jesus.",

    reference: "1 Thessalonians 5:18",

    explanation:
      "Being thankful helps us notice the good things God has given us, even when circumstances aren't perfect.",

    question:
      "What attitude does this verse encourage?",

    answers: [
      "Gratitude",
      "Complaining",
      "Giving up"
    ],

    correct: 0
  },


  {
    title: "God Is With You",
    category: "Courage",

    verse:
      "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",

    reference: "Joshua 1:9",

    explanation:
      "God encouraged Joshua to be courageous because he didn't have to face difficult situations alone.",

    question:
      "Why could Joshua be courageous?",

    answers: [
      "He was the strongest person",
      "God would be with him",
      "He never had problems"
    ],

    correct: 1
  },


  {
    title: "Walking in Kindness",
    category: "Character",

    verse:
      "Be kind and compassionate to one another, forgiving each other.",

    reference: "Ephesians 4:32",

    explanation:
      "God calls us to treat others with kindness and compassion and to be willing to forgive.",

    question:
      "Which behavior does this verse encourage?",

    answers: [
      "Kindness",
      "Anger",
      "Revenge"
    ],

    correct: 0
  },


  {
    title: "God Gives Wisdom",
    category: "Wisdom",

    verse:
      "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault.",

    reference: "James 1:5",

    explanation:
      "When we don't know what to do, we can ask God for wisdom and guidance.",

    question:
      "What should we do when we need wisdom?",

    answers: [
      "Give up",
      "Ask God",
      "Pretend we know everything"
    ],

    correct: 1
  },


  {
    title: "Let Your Light Shine",
    category: "Purpose",

    verse:
      "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",

    reference: "Matthew 5:16",

    explanation:
      "Jesus teaches us that our actions can point other people toward God.",

    question:
      "What can our good actions do?",

    answers: [
      "Point people toward God",
      "Make us perfect",
      "Make us better than everyone"
    ],

    correct: 0
  },


  {
    title: "Do Not Give Up",
    category: "Perseverance",

    verse:
      "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",

    reference: "Galatians 6:9",

    explanation:
      "Doing the right thing can sometimes be difficult, but Scripture encourages us to keep going.",

    question:
      "What should we do when doing good becomes difficult?",

    answers: [
      "Give up",
      "Keep going",
      "Stop caring"
    ],

    correct: 1
  }

];


/* =====================================
   STATE
===================================== */

let currentLesson =
  Number(localStorage.getItem("currentLesson")) || 0;

let xp =
  Number(localStorage.getItem("bibleXP")) || 0;

let completed =
  Number(localStorage.getItem("bibleCompleted")) || 0;

let streak =
  Number(localStorage.getItem("bibleStreak")) || 0;

let selectedAnswer = null;

let answerChecked = false;


/* =====================================
   ELEMENTS
===================================== */

const lessonTitle =
  document.getElementById("lessonTitle");

const lessonNumber =
  document.getElementById("lessonNumber");

const category =
  document.getElementById("category");

const verse =
  document.getElementById("verse");

const reference =
  document.getElementById("reference");

const explanation =
  document.getElementById("explanation");

const question =
  document.getElementById("question");

const answers =
  document.getElementById("answers");

const lessonList =
  document.getElementById("lessonList");

const progressFill =
  document.getElementById("progressFill");

const progressPercent =
  document.getElementById("progressPercent");

const levelDisplay =
  document.getElementById("level");

const xpDisplay =
  document.getElementById("xp");

const completedDisplay =
  document.getElementById("completed");

const streakDisplay =
  document.getElementById("streak");

const completeBtn =
  document.getElementById("completeBtn");

const previousBtn =
  document.getElementById("previousBtn");

const reflectionText =
  document.getElementById("reflectionText");

const message =
  document.getElementById("message");


/* =====================================
   LEVEL SYSTEM
===================================== */

function getLevel() {

  return Math.floor(xp / 100) + 1;

}


/* =====================================
   SAVE
===================================== */

function saveProgress() {

  localStorage.setItem(
    "currentLesson",
    currentLesson
  );

  localStorage.setItem(
    "bibleXP",
    xp
  );

  localStorage.setItem(
    "bibleCompleted",
    completed
  );

  localStorage.setItem(
    "bibleStreak",
    streak
  );

}


/* =====================================
   UPDATE STATS
===================================== */

function updateStats() {

  levelDisplay.textContent =
    getLevel();

  xpDisplay.textContent =
    xp;

  completedDisplay.textContent =
    completed;

  streakDisplay.textContent =
    "🔥 " + streak;

}


/* =====================================
   LOAD LESSON
===================================== */

function loadLesson() {

  const lesson =
    lessons[currentLesson];


  lessonTitle.textContent =
    lesson.title;

  lessonNumber.textContent =
    "LESSON " + (currentLesson + 1);

  category.textContent =
    lesson.category;

  verse.textContent =
    lesson.verse;

  reference.textContent =
    lesson.reference;

  explanation.textContent =
    lesson.explanation;

  question.textContent =
    lesson.question;


  selectedAnswer = null;

  answerChecked = false;

  message.textContent = "";

  completeBtn.textContent =
    "Complete Lesson ✓";


  /* Reflection */

  reflectionText.value =
    localStorage.getItem(
      "reflection_" + currentLesson
    ) || "";


  /* Answers */

  answers.innerHTML = "";


  lesson.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement("button");

      button.className =
        "answer";

      button.textContent =
        answer;


      button.addEventListener(
        "click",
        () => {

          if (answerChecked) {
            return;
          }

          selectedAnswer =
            index;


          document
            .querySelectorAll(".answer")
            .forEach(button => {

              button.classList.remove(
                "selected"
              );

            });


          button.classList.add(
            "selected"
          );

        }
      );


      answers.appendChild(button);

    }
  );


  updateProgress();

  renderLessonList();

  updateStats();

  saveProgress();

}


/* =====================================
   PROGRESS
===================================== */

function updateProgress() {

  const percent =
    Math.round(
      ((currentLesson + 1) /
        lessons.length) *
        100
    );


  progressFill.style.width =
    percent + "%";


  progressPercent.textContent =
    percent + "%";

}


/* =====================================
   LESSON LIST
===================================== */

function renderLessonList() {

  lessonList.innerHTML = "";


  lessons.forEach(
    (lesson, index) => {

      const button =
        document.createElement("button");


      button.className =
        "lesson-item";


      if (index === currentLesson) {

        button.classList.add(
          "current"
        );

      }


      const finished =
        index < completed;


      button.innerHTML = `

        <div class="lesson-icon">
          ${finished ? "✓" : "📖"}
        </div>

        <div>

          <strong>
            ${index + 1}. ${lesson.title}
          </strong>

          <small>
            ${lesson.category}
          </small>

        </div>

      `;


      button.addEventListener(
        "click",
        () => {

          currentLesson =
            index;

          loadLesson();

        }
      );


      lessonList.appendChild(
        button
      );

    }
  );

}


/* =====================================
   COMPLETE LESSON
===================================== */

completeBtn.addEventListener(
  "click",
  () => {

    const lesson =
      lessons[currentLesson];


    /* Check answer */

    if (!answerChecked) {

      if (
        selectedAnswer === null
      ) {

        message.textContent =
          "Choose an answer first.";

        return;

      }


      const answerButtons =
        document.querySelectorAll(
          ".answer"
        );


      if (
        selectedAnswer ===
        lesson.correct
      ) {

        answerButtons[
          selectedAnswer
        ].classList.add(
          "correct"
        );


        answerChecked = true;


        xp += 50;

        completed++;


        if (streak === 0) {
          streak = 1;
        } else {
          streak++;
        }


        message.textContent =
          "Correct! You earned 50 XP. 🎉";


        completeBtn.textContent =
          currentLesson <
          lessons.length - 1
            ? "Next Lesson →"
            : "Finish Journey ✓";


        saveProgress();

        updateStats();

        renderLessonList();


      } else {

        answerButtons[
          selectedAnswer
        ].classList.add(
          "incorrect"
        );


        message.textContent =
          "Not quite. Read the verse again and try once more.";

      }

      return;
    }


    /* Go to next lesson */

    if (
      currentLesson <
      lessons.length - 1
    ) {

      currentLesson++;

      loadLesson();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    } else {

      message.textContent =
        "🎉 You completed the entire Bible study journey!";

      completeBtn.textContent =
        "Journey Complete ✓";

    }

  }
);


/* =====================================
   PREVIOUS LESSON
===================================== */

previousBtn.addEventListener(
  "click",
  () => {

    if (currentLesson > 0) {

      currentLesson--;

      loadLesson();

    } else {

      message.textContent =
        "You're already on the first lesson.";

    }

  }
);


/* =====================================
   SAVE REFLECTION
===================================== */

reflectionText.addEventListener(
  "input",
  () => {

    localStorage.setItem(
      "reflection_" + currentLesson,
      reflectionText.value
    );

  }
);


/* =====================================
   DASHBOARD
===================================== */

document
  .getElementById("dashboardBtn")
  .addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      message.textContent =
        "Welcome back to your Bible study dashboard.";

    }
  );


/* =====================================
   PROGRESS
===================================== */

document
  .getElementById("progressBtn")
  .addEventListener(
    "click",
    () => {

      message.textContent =
        `Level ${getLevel()} • ${xp} XP • ${completed} lessons completed • ${streak} day streak`;

    }
  );


/* =====================================
   RESET
===================================== */

document
  .getElementById("resetBtn")
  .addEventListener(
    "click",
    () => {

      const confirmed =
        confirm(
          "Are you sure you want to reset all Bible study progress?"
        );


      if (!confirmed) {
        return;
      }


      xp = 0;

      completed = 0;

      streak = 0;

      currentLesson = 0;


      localStorage.clear();


      loadLesson();

      updateStats();


      message.textContent =
        "Your Bible study progress has been reset.";

    }
  );


/* =====================================
   START APP
===================================== */

updateStats();

loadLesson();
```
