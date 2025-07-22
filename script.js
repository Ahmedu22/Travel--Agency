fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("destinations");
    data.forEach(place => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${place.image}" alt="${place.name}">
        <div class="card-content">
          <h3>${place.name}</h3>
          <p>${place.description}</p>
          <button class="book-btn" data-name="${place.name}">Book Now</button>
        </div>
      `;
      container.appendChild(card);
    });
  });

// Modal functionality
const modal = document.getElementById("booking-modal");
const closeModal = document.getElementById("close-modal");
const destinationInput = document.getElementById("destination-input");
const bookingForm = document.getElementById("booking-form");

document.addEventListener("click", function(e) {
  if (e.target.classList.contains("book-btn")) {
    const place = e.target.getAttribute("data-name");
    destinationInput.value = place;
    modal.classList.remove("hidden");
  }
});

closeModal.onclick = () => modal.classList.add("hidden");

window.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
};

bookingForm.onsubmit = function(e) {
  e.preventDefault();
  const name = bookingForm.querySelector("input[type='text']").value;
  const email = bookingForm.querySelector("input[type='email']").value;
  const destination = destinationInput.value;

  alert(`🎉 Thank you ${name}! Your trip to ${destination} has been booked. 📧 Confirmation sent to ${email}`);
  modal.classList.add("hidden");
  bookingForm.reset();
};
