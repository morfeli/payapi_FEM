const benefitsBox = document.getElementById("benefits__container");

let benefits = [
  {
    image: "../assets/home/desktop/icon-personal-finances.svg",
    title: "Personal Finances",
    description:
      "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.",
  },
  {
    image: "../assets/home/desktop/icon-banking-and-coverage.svg",
    title: "Banking & Coverage",
    description:
      "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.",
  },
  {
    image: "../assets/home/desktop/icon-consumer-payments.svg",
    title: "Consumer Payments",
    description:
      "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.",
  },
];

const renderBenefits = (arr) => {
  let benefits = arr
    .map((benefit) => {
      return `
                <div class="benefit__container">
                    <img class="benefit__container--img" src="${benefit.image}" alt="benefit-img"/>
                    <h2 class="benefit__container--title">${benefit.title}</h2>
                    <p class="benefit__container--description">${benefit.description}</p>
                </div>

        `;
    })
    .join("");
  benefitsBox.innerHTML = benefits;
};

renderBenefits(benefits);

console.log(benefitsBox);
