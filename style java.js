function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button

themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*========================= Reduce the size and print on an A4 sheet =========================*/

function scalCv() {
  document.body.classList.add("scale-cv");
}

/*========================= Remove the size when cv is downloaded =========================*/
function removeScale() {
  document.body.classList.remove("scale-cv");
}

/*========================= Generate PDF =========================*/
//PDF generated area
let areaCv = document.getElementById("area-cv");

let resumeButton = document.getElementById("resume-button");

// Html2pdf options
let opt = {
  margin:-2,
  filename: "CV_HEINZE_TOM.pdf",
  image: { type: "svg", quality: 10 },
  html2canvas: { scale: 4 },
  jsPDF: { format: "a4", orientation: "portrait" },
};
//function to call areaCv   and Html2Pdf options
function generateResume() {
  html2pdf(areaCv, opt);
}
//When the button is clicked, it executes the three function
resumeButton.addEventListener("click", () => {
  //1. Th scaleCv(): void is added to the body, where it reduces the size of the
  scalCv();

  //2. The PDF is generated
  generateResume();
  //3.
  setTimeout(removeScale, 5000);
});
