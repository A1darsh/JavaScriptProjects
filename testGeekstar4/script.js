const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const phoneList = document.getElementById("phoneList");

async function fetchPhones(searchTerm = "") {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchTerm}`
  );
  const data = await response.json();
  return data.data; 
}

function displayPhones(phones) {
  phoneList.innerHTML = "";

  if (!Array.isArray(phones)) {
    console.error("Invalid data returned from API");
    return;
  }

  phones.forEach((phone) => {
    console.log("Showing forEach of phones", phone.phone_name);
    const phoneCard = document.createElement("div");
    phoneCard.classList.add("phoneCard");
    phoneCard.innerHTML = `
            <h2>${phone.phone_name}</h2>
            <p>Brand: ${phone.brand}</p>
            <img src="${phone.image}" alt="${phone.phone_name}" class="phoneImage">
            <button class="showDetailsButton">Show Details</button>   
        `;
    const showDetailsButton = phoneCard.querySelector(".showDetailsButton");
    showDetailsButton.addEventListener("click", () => {
      showPhoneDetails(phone);
    });

    phoneList.appendChild(phoneCard);
  });
}

function showPhoneDetails(phone) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const detailsCard = document.createElement('div');
    detailsCard.classList.add('detailsCard');
    detailsCard.innerHTML = `
        <h2>${phone.phone_name}</h2>
        <img src="${phone.image}" alt="${phone.phone_name}" class="phoneImage">
        <p>Brand: ${phone.brand}</p>
        <p>Slug: ${phone.slug}</p>
        <button class="closeButton">Close</button>
    `;

    modal.appendChild(detailsCard);
    document.body.appendChild(modal);

    detailsCard.querySelector('.closeButton').addEventListener('click', () => {
        modal.remove(); 
    });
}

searchButton.addEventListener("click", async () => {
  const searchTerm = searchInput.value.trim();
  const phones = await fetchPhones(searchTerm);
  displayPhones(phones);
  searchInput.value = '';
  
});



window.onload = async () => {
  const phones = await fetchPhones();
  displayPhones(phones);
};

