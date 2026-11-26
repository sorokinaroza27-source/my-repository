document.addEventListener("DOMContentLoaded", () => {
  const points = document.querySelectorAll(".map-point");
  const modal = document.getElementById("placeModal");
  const closeBtn = document.getElementById("closeModal");
  const titleEl = document.getElementById("modalTitle");
  const textEl = document.getElementById("modalText");
  const moreLink = document.getElementById("modalMoreLink");

  if (!modal || !points.length) return;

  function openModal(point) {
    points.forEach((p) => p.classList.remove("is-active"));
    point.classList.add("is-active");

    const id = point.dataset.id || "";
    const title = point.dataset.title || "Объект";
    const text = point.dataset.short || "Нажмите «Узнать больше», чтобы открыть подробную информацию.";

    if (titleEl) titleEl.textContent = title;
    if (textEl) textEl.textContent = text;
    if (moreLink) moreLink.href = `place.html?id=${encodeURIComponent(id)}`;

    modal.removeAttribute("hidden");
    modal.hidden = false;
    modal.style.display = "flex";
    modal.classList.add("is-open");
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.style.display = "none";
    modal.hidden = true;
    modal.setAttribute("hidden", "");
    points.forEach((p) => p.classList.remove("is-active"));
  }

  points.forEach((point) => {
    point.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal(point);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });
});