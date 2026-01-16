(function () {
  const select = document.getElementById("model-select");
  if (!select) return;

  const path = window.location.pathname;

  // Detect current model from URL
  if (path.includes("/pacific/")) {
    select.value = "pacific";
  } else if (path.includes("/dorado/")) {
    select.value = "dorado";
  }

  select.addEventListener("change", function () {
    const model = this.value;
    const lang = document.documentElement.lang || "en";

    window.location.href = `/${model}/index.html`;
  });
})();
