
const title = document.getElementById("title");
const message = document.getElementById("message");
const actions = document.getElementById("actions");

// Screen 1: The opening
document.getElementById("start-btn").addEventListener("click", function () {
  title.textContent = "Okay, hear me out... 😭";

  message.textContent =
    "I could have just texted you like a normal person. " +
    "But no. I opened VS Code and made a whole website. " +
    "This is either dedication or a cry for help.";

  actions.innerHTML = `
    <button class="primary-btn" id="continue-btn">
      I'm listening... 👀
    </button>
  `;

  document.getElementById("continue-btn").addEventListener(
    "click",
    showChoices
  );
});

// Screen 2: Let her choose the surprise
function showChoices() {
  title.textContent = "So, here's the situation... 💌";

  message.textContent =
    "You have reached the important part of this very " +
    "serious and definitely professional investigation. " +
    "Choose your next move.";

  actions.innerHTML = `
    <button class="primary-btn" id="compliment-btn">
      Tell me the truth 💗
    </button>

    <button class="secondary-btn" id="plot-twist-btn">
      I want the plot twist 👀
    </button>
  `;

  document.getElementById("compliment-btn").addEventListener(
    "click",
    showCompliment
  );

  document.getElementById("plot-twist-btn").addEventListener(
    "click",
    showInvitation
  );
}

// Ending 1: The compliment
function showCompliment() {
  title.textContent = "Well... you asked. 🤭";

  message.textContent =
    "I think you're really cute. Like, distract-me-mid-sentence " +
    "cute. And I wanted to make you smile. " +
    "There. My reputation is in your hands now. 😭💗";

  showRestartButton();
}

// Ending 2: The plot twist
function showInvitation() {
  title.textContent = "THE ACTUAL PLOT TWIST 😳";

  message.textContent =
    "Okay, so... would you let me take you out sometime? " +
    "We could get something to eat, talk nonsense, " +
    "and see where the vibe goes. No pressure, though. 💗";

  actions.innerHTML = `
    <button class="primary-btn" id="yes-btn">
      I'd like that 🥹
    </button>

    <button class="secondary-btn" id="maybe-btn">
      Let me think about it 👀
    </button>

    <button class="secondary-btn" id="back-btn">
      I want to see that compliment again 😂
    </button>
  `;

  document.getElementById("yes-btn").addEventListener("click", () => {
    title.textContent = "WAIT, REALLY?! 😭💗";
    message.textContent =
      "Okay, trying to act cool about this. " +
      "Failing spectacularly. Let's plan something cute!";

    showRestartButton();
  });

  document.getElementById("maybe-btn").addEventListener("click", () => {
    title.textContent = "No pressure, pretty girl 💗";
    message.textContent =
      "Take your time! I just wanted you to know. " +
      "Your answer is yours to give, and we're still cool. ♡";

    showRestartButton();
  });

  document.getElementById("back-btn").addEventListener(
    "click",
    showCompliment
  );
}

// Add a button to replay the website
function showRestartButton() {
  actions.innerHTML = `
    <button class="primary-btn" id="restart-btn">
      Run this operation again ↻
    </button>
  `;

  document.getElementById("restart-btn").addEventListener("click", () => {
    title.textContent = "Oh, look who showed up!";

    message.textContent =
      "I was going to act normal, but then you had to exist. " +
      "Very inconsiderate of you, honestly. 😭";

    actions.innerHTML = `
      <button class="primary-btn" id="start-btn">
        What is this? 👀
      </button>
    `;

    document.getElementById("start-btn").addEventListener(
      "click",
      function () {
        title.textContent = "Okay, hear me out... 😭";

        message.textContent =
          "I could have just texted you like a normal person. " +
          "But no. I opened VS Code and made a whole website. " +
          "This is either dedication or a cry for help.";

        actions.innerHTML = `
          <button class="primary-btn" id="continue-btn">
            I'm listening... 👀
          </button>
        `;

        document.getElementById("continue-btn").addEventListener(
          "click",
          showChoices
        );
      }
    );
  });
}
