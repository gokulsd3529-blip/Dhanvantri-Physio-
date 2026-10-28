/* Swaps default pictures for your own photos listed in PHOTOS (js/config.js). */
(function () {
  const swap = () =>
    document.querySelectorAll("img[src*='assets/images/']").forEach((img) => {
      const name = img
        .getAttribute("src")
        .split("/")
        .pop()
        .replace(/\.\w+$/, "");
      const photo = typeof PHOTOS !== "undefined" && PHOTOS[name];
      if (photo && !photo.includes("assets/images/"))
        img.setAttribute("src", photo);
    });
  swap();
  new MutationObserver(swap).observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
