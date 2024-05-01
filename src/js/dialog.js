document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("myDialog");
  const closeButton = document.getElementById("closeButton");

  if (dialog && typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", true);
  }

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });
});
