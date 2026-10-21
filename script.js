const dishes = [
  { id: "nyama-choma", name: "Nyama Choma", category: "Mains", price: 18, label: "A Kenyan classic", description: "Fire-grilled, tender beef with kachumbari and a bright squeeze of lemon.", image: "https://i.pinimg.com/736x/cb/bf/91/cbbf91054c6abd9da9c0e3d611b8d72e.jpg", alt: "Grilled nyama choma served with salad", detail: "A celebration-worthy Kenyan favorite. Beef is seasoned simply, grilled until smoky and tender, then served with fresh tomato-onion kachumbari. Add a side of ugali for the full experience.", photoCredit: "Image source: Pinterest", photoUrl: "https://i.pinimg.com/736x/cb/bf/91/cbbf91054c6abd9da9c0e3d611b8d72e.jpg" },
  { id: "githeri", name: "Githeri", category: "Mains", price: 14, label: "Kenyan soul food", description: "Maize and beans simmered together with vegetables for a hearty Kenyan classic.", image: "https://i.pinimg.com/736x/2d/58/4c/2d584c625cc74d6267c716ede4296575.jpg", alt: "A bowl of Kenyan githeri with beans, maize, and vegetables", detail: "A much-loved Kenyan staple of maize and beans, simmered until tender and cooked with vegetables and seasoning. Hearty, nourishing, and lovely with avocado or a side of greens.", photoCredit: "Image source: Pinterest", photoUrl: "https://i.pinimg.com/736x/2d/58/4c/2d584c625cc74d6267c716ede4296575.jpg" },
  { id: "kuku-kienyeji", name: "Kuku Kienyeji", category: "Mains", price: 20, label: "Kenyan home-style", description: "Indigenous chicken simmered low with tomato, onion, and ginger. Served with ugali and sukuma wiki.", image: "https://i.pinimg.com/736x/62/69/ca/6269ca579423cb83cbdf5c410ffe9279.jpg", alt: "Kuku kienyeji chicken pieces simmered in a rich tomato sauce", detail: "Faith's Kenyan-style take on kuku kienyeji: richly flavored indigenous chicken, slowly simmered with onion, tomato, and ginger until tender. Served the Kenyan way with ugali and sukuma wiki.", photoCredit: "Image source: Pinterest", photoUrl: "https://i.pinimg.com/736x/62/69/ca/6269ca579423cb83cbdf5c410ffe9279.jpg" },
  { id: "mukimo", name: "Mukimo", category: "Sides", price: 10, label: "Kenyan comfort food", description: "Mashed potatoes, maize, peas, and greens together in a hearty, savory side.", image: "https://i.pinimg.com/736x/7a/23/d8/7a23d877c675d4385bff9d9f37560d61.jpg", alt: "Green Kenyan mukimo served as a smooth mound on a plate", detail: "A beloved Kenyan comfort food made by mashing potatoes with maize, peas, and leafy greens until tender and flavorful. Served alongside stew, nyama choma, or your favorite main.", photoCredit: "Image source: Pinterest", photoUrl: "https://i.pinimg.com/736x/7a/23/d8/7a23d877c675d4385bff9d9f37560d61.jpg" },
  { id: "beef-wet-fry", name: "Beef Wet Fry", category: "Mains", price: 17, label: "Saucy & savory", description: "Tender beef tossed with tomato, onion, and cilantro in a rich, glossy sauce.", image: "https://i.pinimg.com/1200x/79/44/bc/7944bc1b0a7650fcf679b2dde5480d9d.jpg", alt: "Tender beef wet fry with potatoes and rich tomato gravy", detail: "A Kenyan-style wet fry with tender beef, softened onions, ripe tomatoes, and cilantro. Cooked down into a rich, clingy sauce and best enjoyed with ugali, rice, or chapati.", photoCredit: "Image source: Pinterest", photoUrl: "https://i.pinimg.com/1200x/79/44/bc/7944bc1b0a7650fcf679b2dde5480d9d.jpg" },
  { id: "kenyan-pilau", name: "Kenyan Pilau", category: "Mains", price: 18, label: "Spiced & satisfying", description: "Fragrant spiced rice cooked with tender beef and finished with fresh herbs.", image: "https://i.pinimg.com/736x/49/7d/8f/497d8fa5dca0875c3941ee348cb323ca.jpg", alt: "Kenyan beef pilau rice with tender beef and herbs", detail: "A deeply aromatic Kenyan pilau, with beef, rice, and warming whole spices cooked together until fragrant. Served hot with fresh kachumbari on the side.", photoCredit: "Image source: Pinterest", photoUrl: "https://i.pinimg.com/736x/49/7d/8f/497d8fa5dca0875c3941ee348cb323ca.jpg" },
  { id: "fish-stew", name: "Kenyan Fish Stew", category: "Mains", price: 17, label: "Coastal comfort", description: "Fish gently simmered with tomato, onion, and warming spices in a savory sauce.", image: "https://i.pinimg.com/736x/9d/85/45/9d8545166963f9391fa12aa87ef14556.jpg", alt: "Whole fish simmered in a rich tomato and pepper stew", detail: "A comforting Kenyan-style fish stew with tender fish, tomato, onion, and a hint of spice. The sauce is made for spooning over rice or serving alongside ugali.", photoCredit: "Image source: Pinterest", photoUrl: "https://i.pinimg.com/736x/9d/85/45/9d8545166963f9391fa12aa87ef14556.jpg" },
  { id: "fish-fry", name: "Kenyan Fish Fry", category: "Mains", price: 19, label: "Golden & crisp", description: "Seasoned fish pan-fried until golden, served with lemon and kachumbari.", image: "https://i.pinimg.com/736x/35/88/e8/3588e881e3a3446bfcc5a7f8bb3f5236.jpg", alt: "Whole grilled fish with lemon, onion, and herbs", detail: "Fish seasoned with a Kenyan-inspired spice mix, pan-fried until golden, and served with lemon and fresh kachumbari. Pair with ugali, chips, or greens.", photoCredit: "Image source: Pinterest", photoUrl: "https://i.pinimg.com/736x/35/88/e8/3588e881e3a3446bfcc5a7f8bb3f5236.jpg" },
  { id: "sukuma-wiki", name: "Sukuma Wiki", category: "Sides", price: 8, label: "Plant-forward", description: "Collard greens gently sauteed with tomato and onion. A plate essential.", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=850&q=80", alt: "Fresh leafy greens ready to serve", detail: "Meaning 'stretch the week,' this much-loved green is easy, nourishing, and full of flavor. Collards are sliced thin and cooked with tomato and onion until just tender." },
  { id: "minji", name: "Minji (Peas Stew)", category: "Sides", price: 10, label: "Comfort in a bowl", description: "Green peas, potatoes, and carrots in a gently spiced tomato sauce.", image: "https://i.pinimg.com/736x/34/ab/37/34ab37ceb79800b20771ca5786cc223a.jpg", alt: "Kenyan green pea stew with vegetables", detail: "A familiar Kenyan home-cooked stew of green peas, potatoes, and carrots in a tomato-onion sauce. Comforting on its own and lovely with rice, chapati, or ugali.", photoCredit: "Image source: Pinterest", photoUrl: "https://i.pinimg.com/736x/34/ab/37/34ab37ceb79800b20771ca5786cc223a.jpg" },
  { id: "chapati", name: "Soft Chapati", category: "Sides", price: 4, label: "Made by hand", description: "Golden, flaky layers, folded and griddled fresh. You will want another.", image: "https://i.pinimg.com/736x/03/43/4b/03434b4312e3cff4f87afc8344537fe9.jpg", alt: "Chapati image from the Pinterest pin shared by the site owner", detail: "Each chapati is rolled and cooked by hand on the griddle until it's soft inside with delicately crisp, golden layers. Sold individually.", photoCredit: "Image source: Pinterest", photoUrl: "https://www.pinterest.com/pin/242490761180474750/" },
  { id: "ugali", name: "Ugali", category: "Sides", price: 5, label: "The comfort side", description: "Warm, soft maize meal. Made the way it belongs beside a good stew.", image: "https://i.pinimg.com/1200x/22/1b/ef/221bef55071ed5e5040c346d25380208.jpg", alt: "Firm white ugali served in portions on a plate", detail: "A staple that brings a Kenyan meal together. This smooth, hearty maize-meal classic is shaped and served warm, ready to scoop up a little stew or greens.", photoCredit: "Image source: Pinterest", photoUrl: "https://i.pinimg.com/1200x/22/1b/ef/221bef55071ed5e5040c346d25380208.jpg" },
  { id: "mandazi", name: "Mandazi", category: "Snacks", price: 6, label: "Sweet & soft", description: "Pillowy, lightly sweet Kenyan doughnuts with a hint of cardamom.", image: "https://i.pinimg.com/736x/44/8f/b1/448fb17b70fcbb5658aaeb81c2813c41.jpg", alt: "Freshly made golden mandazi", detail: "Light, fluffy, and delicately scented with cardamom, these little golden treats are made for a slow morning and a hot cup of chai. Order a serving of three.", photoCredit: "Image source: Pinterest", photoUrl: "https://i.pinimg.com/736x/44/8f/b1/448fb17b70fcbb5658aaeb81c2813c41.jpg" },
  { id: "samosas", name: "Beef Samosas", category: "Snacks", price: 9, label: "A little crunch", description: "Crisp pastry parcels filled with warmly spiced beef. Three to a plate.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=850&q=80", alt: "Crispy stuffed pastries served fresh", detail: "Hand-folded pastry filled with a warmly spiced beef mixture, then cooked to a crisp golden finish. Each order comes with three." },
  { id: "bhajia", name: "Potato Bhajia", category: "Snacks", price: 8, label: "Crispy favorite", description: "Crispy, spiced potato bites with a cool and tangy dipping sauce.", image: "https://i.pinimg.com/1200x/f5/a2/3d/f5a23d1010614be629ac917b9e68becf.jpg", alt: "Golden Kenyan potato bhajia served as a crispy snack", detail: "Thin potato slices, coated in spiced gram-flour batter and fried until crisp. Best enjoyed warm with a tangy dipping sauce.", photoCredit: "Image source: Pinterest", photoUrl: "https://i.pinimg.com/1200x/f5/a2/3d/f5a23d1010614be629ac917b9e68becf.jpg" },
  { id: "chai", name: "Kenyan Chai", category: "Drinks", price: 4, label: "A warm welcome", description: "Strong black tea simmered with milk, ginger, and warming spice.", image: "https://i.pinimg.com/736x/0f/72/e7/0f72e7aa584220941395f7ff30f8c5f3.jpg", alt: "A freshly served cup of Kenyan tea", detail: "A proper cup of home: bold black tea simmered with milk, a little fresh ginger, and gentle warming spices. Served hot.", photoCredit: "Image source: Pinterest", photoUrl: "https://i.pinimg.com/736x/0f/72/e7/0f72e7aa584220941395f7ff30f8c5f3.jpg" },
  { id: "mango-juice", name: "Fresh Mango Juice", category: "Drinks", price: 5, label: "Bright & juicy", description: "Ripe mango blended into a refreshing, sunshine-bright drink.", image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=850&q=80", alt: "Fresh fruit juice served chilled", detail: "Ripe, juicy mango blended into a cool and refreshing drink. A little taste of sunshine, best enjoyed chilled." },
  { id: "kachumbari", name: "Fresh Kachumbari", category: "Sides", price: 6, label: "Fresh every day", description: "Tomato, onion, cilantro, and lemon: a fresh, zippy little side.", image: "https://i.pinimg.com/736x/e1/d2/e2/e1d2e2e07a85c885fac82caf0161fc0b.jpg", alt: "Fresh Kenyan kachumbari tomato and onion salad", detail: "Finely chopped ripe tomatoes, onion, cilantro, and a lively squeeze of lemon. The fresh, zippy side that belongs beside nyama choma and pilau.", photoCredit: "Image source: Pinterest", photoUrl: "https://i.pinimg.com/736x/e1/d2/e2/e1d2e2e07a85c885fac82caf0161fc0b.jpg" }
];

const menuGrid = document.querySelector("#menu-grid");
const searchInput = document.querySelector("#menu-search");
const categoryList = document.querySelector("#category-list");
const resultsCount = document.querySelector("#results-count");
const emptyState = document.querySelector("#empty-state");
const cart = new Map();
const cartDrawer = document.querySelector("#cart-drawer");
const overlay = document.querySelector("#overlay");
const toast = document.querySelector("#toast");
let activeCategory = "All";
let activeDialog = null;
let previousFocus = null;
let toastTimer;
let savedArea = getStoredValue("kitchen-kenya-area");
const favorites = loadFavorites();

function getStoredValue(key) {
  try {
    return localStorage.getItem(key) || "";
  } catch {
    return "";
  }
}

function loadFavorites() {
  try {
    return new Set(JSON.parse(localStorage.getItem("kitchen-kenya-favorites") || "[]"));
  } catch {
    return new Set();
  }
}

const formatPrice = (amount) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);

function renderMenu() {
  document.querySelector("#dish-count").textContent = dishes.length;
  const query = searchInput.value.trim().toLocaleLowerCase();
  const matches = dishes.filter((dish) => {
    const inCategory = activeCategory === "All" || (activeCategory === "Saved" ? favorites.has(dish.id) : dish.category === activeCategory);
    const searchable = `${dish.name} ${dish.description} ${dish.category} ${dish.label}`.toLocaleLowerCase();
    return inCategory && searchable.includes(query);
  });

  menuGrid.innerHTML = matches.map((dish, index) => `
    <article class="dish-card" style="animation-delay:${Math.min(index * 35, 245)}ms">
      <div class="dish-image-wrap">
        <img class="dish-image" src="${dish.image}" alt="${escapeHTML(dish.alt)}" loading="lazy">
        <span class="dish-tag">${escapeHTML(dish.label)}</span>
        <button class="favorite-toggle${favorites.has(dish.id) ? " is-favorite" : ""}" type="button" data-favorite="${dish.id}" aria-label="${favorites.has(dish.id) ? "Remove" : "Save"} ${escapeHTML(dish.name)} ${favorites.has(dish.id) ? "from" : "to"} saved dishes" aria-pressed="${favorites.has(dish.id)}">♥</button>
        <button class="quick-add" type="button" data-add="${dish.id}" aria-label="Add ${escapeHTML(dish.name)} to your bag">+</button>
      </div>
      <div class="dish-info">
        <div class="dish-name-row"><h3 class="dish-name">${escapeHTML(dish.name)}</h3><span class="dish-price">${formatPrice(dish.price)}</span></div>
        <p class="dish-description">${escapeHTML(dish.description)}</p>
        ${dish.photoCredit ? `<p class="photo-credit"><a href="${dish.photoUrl}" target="_blank" rel="noopener noreferrer">${escapeHTML(dish.photoCredit)}</a>${dish.license ? ` · <a href="${dish.licenseUrl}" target="_blank" rel="noopener noreferrer">${escapeHTML(dish.license)}</a>` : ""}</p>` : ""}
        <div class="dish-meta"><span class="dish-category">${escapeHTML(dish.category)}</span><button class="view-dish" type="button" data-detail="${dish.id}">A little more ↗</button></div>
      </div>
    </article>`).join("");

  resultsCount.textContent = query || activeCategory !== "All" ? `${matches.length} ${matches.length === 1 ? "dish" : "dishes"} to discover` : "Showing all dishes";
  emptyState.hidden = matches.length > 0;
  menuGrid.hidden = matches.length === 0;
}

function cartTotals() {
  const count = [...cart.values()].reduce((total, item) => total + item.quantity, 0);
  const subtotal = [...cart.values()].reduce((total, item) => total + item.dish.price * item.quantity, 0);
  const githeriQuantity = cart.get("githeri")?.quantity || 0;
  const chaiQuantity = cart.get("chai")?.quantity || 0;
  const discount = Math.min(githeriQuantity, chaiQuantity) * 2;
  return { count, subtotal, discount, total: subtotal - discount };
}

function renderCart() {
  const { count, subtotal, discount, total } = cartTotals();
  document.querySelector("#cart-count").textContent = count;
  document.querySelector("#cart-items").innerHTML = [...cart.values()].map(({ dish, quantity }) => `
    <article class="cart-item">
      <img src="${dish.image}" alt="" loading="lazy">
      <div><h3>${escapeHTML(dish.name)}</h3><span class="cart-item-price">${formatPrice(dish.price)} each</span>
        <div class="quantity-controls" aria-label="Quantity for ${escapeHTML(dish.name)}"><button type="button" data-quantity="${dish.id}" data-delta="-1" aria-label="Remove one ${escapeHTML(dish.name)}">−</button><span>${quantity}</span><button type="button" data-quantity="${dish.id}" data-delta="1" aria-label="Add one ${escapeHTML(dish.name)}">+</button></div>
      </div>
      <button class="remove-item" type="button" data-remove="${dish.id}" aria-label="Remove ${escapeHTML(dish.name)} from bag">×</button>
    </article>`).join("");
  document.querySelector("#cart-empty").hidden = count > 0;
  document.querySelector("#cart-footer").hidden = count === 0;
  document.querySelector("#cart-subtotal").textContent = formatPrice(subtotal);
  document.querySelector("#combo-discount-row").hidden = discount === 0;
  document.querySelector("#combo-discount").textContent = `−${formatPrice(discount)}`;
  document.querySelector("#cart-total").textContent = formatPrice(total);
  document.querySelector("#checkout-subtotal").textContent = formatPrice(total);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function addToCart(dishId) {
  const dish = dishes.find((item) => item.id === dishId);
  if (!dish) return;
  const existing = cart.get(dishId);
  cart.set(dishId, { dish, quantity: (existing?.quantity || 0) + 1 });
  renderCart();
  showToast(`${dish.name} added to your bag`);
}

function addLunchSet() {
  for (const dishId of ["githeri", "chai"]) {
    const dish = dishes.find((item) => item.id === dishId);
    const existing = cart.get(dishId);
    cart.set(dishId, { dish, quantity: (existing?.quantity || 0) + 1 });
  }
  renderCart();
  showToast("Lunch set added. You saved $2.00.");
}

function toggleFavorite(dishId) {
  if (favorites.has(dishId)) favorites.delete(dishId);
  else favorites.add(dishId);
  try {
    localStorage.setItem("kitchen-kenya-favorites", JSON.stringify([...favorites]));
  } catch {
    showToast("Saved for this visit only.");
  }
  renderMenu();
}

function updateAreaLabel() {
  document.querySelector("#area-label").textContent = savedArea || "Set ZIP";
  document.querySelector("#open-area").setAttribute("aria-label", savedArea ? `Delivery area ZIP ${savedArea}` : "Set delivery area");
}

function setOpen(element, open) {
  element.classList.toggle("is-open", open);
  element.setAttribute("aria-hidden", String(!open));
  element.inert = !open;
}

function openPanel(element) {
  previousFocus = document.activeElement;
  activeDialog = element;
  overlay.hidden = false;
  document.body.classList.add("dialog-open");
  setOpen(element, true);
  element.querySelector("button, input, select, textarea")?.focus();
}

function closePanel(element = activeDialog) {
  if (!element) return;
  setOpen(element, false);
  if (activeDialog === element) {
    activeDialog = null;
    overlay.hidden = true;
    document.body.classList.remove("dialog-open");
    previousFocus?.focus();
  }
}

function openDrawer() {
  openPanel(cartDrawer);
}

function openDetails(dishId) {
  const dish = dishes.find((item) => item.id === dishId);
  if (!dish) return;
  document.querySelector("#detail-content").innerHTML = `
    <div class="detail-layout"><img src="${dish.image}" alt="${escapeHTML(dish.alt)}">
      <div class="detail-copy"><p class="eyebrow"><span class="eyebrow-line"></span>${escapeHTML(dish.label)}</p><h2 id="detail-title">${escapeHTML(dish.name)}</h2><p>${escapeHTML(dish.detail)}</p>${dish.photoCredit ? `<p class="photo-credit detail-photo-credit"><a href="${dish.photoUrl}" target="_blank" rel="noopener noreferrer">${escapeHTML(dish.photoCredit)}</a>${dish.license ? ` · <a href="${dish.licenseUrl}" target="_blank" rel="noopener noreferrer">${escapeHTML(dish.license)}</a>` : ""}</p>` : ""}<p class="detail-price">${formatPrice(dish.price)}</p><button class="primary-button" type="button" data-add="${dish.id}">Add to your bag <span aria-hidden="true">+</span></button></div>
    </div>`;
  openPanel(document.querySelector("#detail-modal"));
}

function openCheckout() {
  if (!cart.size) return;
  closePanel(cartDrawer);
  renderCart();
  document.querySelector("#order-form [name='zip']").value = savedArea;
  openPanel(document.querySelector("#checkout-modal"));
}

categoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  categoryList.querySelectorAll("[data-category]").forEach((item) => item.classList.toggle("is-active", item === button));
  renderMenu();
});

searchInput.addEventListener("input", renderMenu);
document.querySelector("#open-cart").addEventListener("click", openDrawer);
document.querySelector("#open-area").addEventListener("click", () => {
  document.querySelector("#area-zip").value = savedArea;
  openPanel(document.querySelector("#area-modal"));
});
document.querySelector("#add-combo").addEventListener("click", addLunchSet);
document.querySelector("#keep-browsing").addEventListener("click", () => closePanel(cartDrawer));
document.querySelector("#checkout-button").addEventListener("click", openCheckout);
document.querySelector("#done-button").addEventListener("click", () => {
  cart.clear();
  renderCart();
  closePanel(document.querySelector("#confirmation-modal"));
});

document.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    toggleFavorite(favoriteButton.dataset.favorite);
    return;
  }
  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    addToCart(addButton.dataset.add);
    if (addButton.closest("#detail-modal")) closePanel(document.querySelector("#detail-modal"));
    return;
  }
  const detailButton = event.target.closest("[data-detail]");
  if (detailButton) {
    openDetails(detailButton.dataset.detail);
    return;
  }
  const quantityButton = event.target.closest("[data-quantity]");
  if (quantityButton) {
    const item = cart.get(quantityButton.dataset.quantity);
    if (!item) return;
    item.quantity += Number(quantityButton.dataset.delta);
    if (item.quantity <= 0) cart.delete(quantityButton.dataset.quantity);
    renderCart();
    return;
  }
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    cart.delete(removeButton.dataset.remove);
    renderCart();
    return;
  }
  const closeButton = event.target.closest("[data-close]");
  if (closeButton) closePanel(closeButton.closest(".cart-drawer, .modal-shell"));
});

overlay.addEventListener("click", () => closePanel());
document.querySelector("#area-form").addEventListener("submit", (event) => {
  event.preventDefault();
  savedArea = document.querySelector("#area-zip").value.trim();
  try {
    localStorage.setItem("kitchen-kenya-area", savedArea);
  } catch {
    showToast("ZIP saved for this visit only.");
  }
  updateAreaLabel();
  closePanel(document.querySelector("#area-modal"));
  showToast("Area saved. Faith confirms delivery availability.");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName) && !activeDialog) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && activeDialog) closePanel();
  if (event.key === "Tab" && activeDialog) {
    const focusable = [...activeDialog.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), a[href]')].filter((element) => element.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

document.querySelector("#order-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const customerName = form.elements.name.value.trim();
  const { total } = cartTotals();
  const requestNumber = `KK-${Date.now().toString().slice(-6)}`;
  document.querySelector("#customer-name").textContent = customerName.split(/\s+/)[0];
  document.querySelector("#order-number").textContent = requestNumber;
  document.querySelector("#confirmation-total").textContent = formatPrice(total);
  form.reset();
  closePanel(document.querySelector("#checkout-modal"));
  openPanel(document.querySelector("#confirmation-modal"));
});

renderMenu();
renderCart();
updateAreaLabel();