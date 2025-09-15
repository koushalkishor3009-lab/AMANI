document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  // collect values
  const arrival = document.getElementById("arrival").value;
  const departure = document.getElementById("departure").value;
  const promo = document.getElementById("Promo").value || "None";
  const rooms = document.getElementById("rooms").value || "Not selected";
  const flexible = document.querySelector("#flexible").previousElementSibling.checked
    ? "Yes"
    : "No";

  // prepare content
  const details = `
    <p><b>Arrival:</b> ${arrival}</p>
    <p><b>Departure:</b> ${departure}</p>
    <p><b>Promo Code:</b> ${promo}</p>
    <p><b>Rooms:</b> ${rooms}</p>
    <p><b>Flexible Dates:</b> ${flexible}</p>
  `;

  // inject into modal body
  document.getElementById("modalContent").innerHTML = details;

  // show modal
  $("#bookingModal").modal("show");

  // reset form after showing modal
  document.getElementById("bookingForm").reset();
});

