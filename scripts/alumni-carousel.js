const alumniData = [
    {
        image: "/_images/homepage-images/newperson.png",
        quote: "Jalaluddin School has been a cornerstone in my life, shaping my values and aspirations. The teachers' dedication and the school's nurturing environment have left an indelible mark on my journey.",
        name: "Mohamed Athif"
    },
    {
        image: "/_images/homepage-images/muizzu.png",
        quote: "The opportunities I got at Jalaluddin were unmatched. I gained confidence, direction, and friends for life.",
        name: "Dr. Mohammed Muizzu"
    },
    {
        image: "/_images/homepage-images/woman.png",
        quote: "ޖަލާލުއްދީން ސުކޫލުގެ ހިތްގައިމު މާހައުލުގެ ސަބަބުން ވަރަށް ފަސޭހަވި ކިޔަވާށާއި ކިޔަވައިދިނުމަށް",
        name: "އައިޝާ މިސް"
    }
];

let currentAlumniIndex = 0;

const avatarImg = document.querySelector(".avatar__image");
const quoteText = document.querySelector(".alumni__quote");
const nameText = document.querySelector(".alumni__name");

const prevBtn = document.querySelector(".alumni__prev-arrow");
const nextBtn = document.querySelector(".alumni__next-arrow");

function updateAlumniDisplay(index) {
    const alumni = alumniData[index];
    avatarImg.src = alumni.image;
    quoteText.textContent = alumni.quote;
    nameText.textContent = `- ${alumni.name} -`;
}

prevBtn.addEventListener("click", () => {
    currentAlumniIndex = (currentAlumniIndex - 1 + alumniData.length) % alumniData.length;
    updateAlumniDisplay(currentAlumniIndex);
});

nextBtn.addEventListener("click", () => {
    currentAlumniIndex = (currentAlumniIndex + 1) % alumniData.length;
    updateAlumniDisplay(currentAlumniIndex);
});
