/* ============================================================
   KITCHEN kenya with Faith — Option B · script.js
   Pure vanilla JavaScript. No frameworks, no dependencies.

   Features: menu with search, category filters and favorites (♥),
   dish detail dialogs, bag with lunch-set discount, ZIP delivery
   checker (localStorage), order request form, confirmation screen,
   toast notifications, keyboard support and accessible dialogs.
   ============================================================ */
(() => {
  "use strict";

  /* ================= menu data ================= */
  const photo = (id) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800`;

  const DESC_PENDING = "Home-cooked Kenyan favorite, prepared fresh by Faith.";

  const DISHES = [{"id": "nyama-choma", "name": "Nyama Choma", "category": "Mains", "price": 18, "desc": "Fire-grilled, tender beef with kachumbari and a bright squeeze of lemon.", "img": "assets/image-17.jpg", "detail": "A celebration-worthy Kenyan favorite. Beef is seasoned simply, grilled until smoky and tender, then served with fresh tomato-onion kachumbari. Add a side of ugali for the full experience."}, {"id": "githeri", "name": "Githeri", "category": "Mains", "price": 14, "desc": "Maize and beans simmered together with vegetables for a hearty Kenyan classic.", "img": "assets/image-07.jpg", "detail": "A much-loved Kenyan staple of maize and beans, simmered until tender and cooked with vegetables and seasoning. Hearty, nourishing, and lovely with avocado or a side of greens."}, {"id": "kuku-kienyeji", "name": "Kuku Kienyeji", "category": "Mains", "price": 20, "desc": "Indigenous chicken simmered low with tomato, onion, and ginger. Served with ugali and sukuma wiki.", "img": "assets/image-12.jpg", "detail": "Faith's Kenyan-style take on kuku kienyeji: richly flavored indigenous chicken, slowly simmered with onion, tomato, and ginger until tender. Served the Kenyan way with ugali and sukuma wiki."}, {"id": "tumbukiza", "name": "Tumbukiza", "category": "Mains", "price": 20, "desc": "A hearty one-pot mix of meat, potatoes, and vegetables simmered in a savory broth.", "img": "assets/image-13.jpg", "detail": "A comforting Kenyan one-pot dish of meat and vegetables, gently simmered together so the broth takes on all their savory flavors. Enjoy it hot with ugali or chapati."}, {"id": "mukimo", "name": "Mukimo", "category": "Sides", "price": 10, "desc": "Mashed potatoes, maize, peas, and greens together in a hearty, savory side.", "img": "assets/image-14.jpg", "detail": "A beloved Kenyan comfort food made by mashing potatoes with maize, peas, and leafy greens until tender and flavorful. Served alongside stew, nyama choma, or your favorite main."}, {"id": "beef-wet-fry", "name": "Beef Wet Fry", "category": "Mains", "price": 17, "desc": "Tender beef tossed with tomato, onion, and cilantro in a rich, glossy sauce.", "img": "assets/image-02.jpg", "detail": "A Kenyan-style wet fry with tender beef, softened onions, ripe tomatoes, and cilantro. Cooked down into a rich, clingy sauce and best enjoyed with ugali, rice, or chapati."}, {"id": "kenyan-pilau", "name": "Kenyan Pilau", "category": "Mains", "price": 18, "desc": "Fragrant spiced rice cooked with tender beef and finished with fresh herbs.", "img": "assets/image-11.jpg", "detail": "A deeply aromatic Kenyan pilau, with beef, rice, and warming whole spices cooked together until fragrant. Served hot with fresh kachumbari on the side."}, {"id": "fish-stew", "name": "Kenyan Fish Stew", "category": "Mains", "price": 17, "desc": "Fish gently simmered with tomato, onion, and warming spices in a savory sauce.", "img": "assets/image-16.jpg", "detail": "A comforting Kenyan-style fish stew with tender fish, tomato, onion, and a hint of spice. The sauce is made for spooning over rice or serving alongside ugali."}, {"id": "fish-fry", "name": "Kenyan Fish Fry", "category": "Mains", "price": 19, "desc": "Seasoned fish pan-fried until golden, served with lemon and kachumbari.", "img": "assets/image-09.jpg", "detail": "Fish seasoned with a Kenyan-inspired spice mix, pan-fried until golden, and served with lemon and fresh kachumbari. Pair with ugali, chips, or greens."}, {"id": "sukuma-wiki", "name": "Sukuma Wiki", "category": "Sides", "price": 8, "desc": "Collard greens gently sauteed with tomato and onion. A plate essential.", "img": "assets/image-20.jpg", "detail": "Meaning 'stretch the week,' this much-loved green is easy, nourishing, and full of flavor. Collards are sliced thin and cooked with tomato and onion until just tender."}, {"id": "minji", "name": "Minji (Peas Stew)", "category": "Sides", "price": 10, "desc": "Green peas, potatoes, and carrots in a gently spiced tomato sauce.", "img": "assets/image-08.jpg", "detail": "A familiar Kenyan home-cooked stew of green peas, potatoes, and carrots in a tomato-onion sauce. Comforting on its own and lovely with rice, chapati, or ugali."}, {"id": "chapati", "name": "Soft Chapati", "category": "Sides", "price": 4, "desc": "Golden, flaky layers, folded and griddled fresh. You will want another.", "img": "assets/image-05.jpg", "detail": "Each chapati is rolled and cooked by hand on the griddle until it's soft inside with delicately crisp, golden layers. Sold individually."}, {"id": "ugali", "name": "Ugali", "category": "Sides", "price": 5, "desc": "Warm, soft maize meal. Made the way it belongs beside a good stew.", "img": "assets/image-01.jpg", "detail": "A staple that brings a Kenyan meal together. This smooth, hearty maize-meal classic is shaped and served warm, ready to scoop up a little stew or greens."}, {"id": "mandazi", "name": "Mandazi", "category": "Snacks", "price": 6, "desc": "Pillowy, lightly sweet Kenyan doughnuts with a hint of cardamom.", "img": "assets/image-10.jpg", "detail": "Light, fluffy, and delicately scented with cardamom, these little golden treats are made for a slow morning and a hot cup of chai. Order a serving of three."}, {"id": "samosas", "name": "Beef Samosas", "category": "Snacks", "price": 9, "desc": "Crisp pastry parcels filled with warmly spiced beef. Three to a plate.", "img": "assets/image-21.jpg", "detail": "Hand-folded pastry filled with a warmly spiced beef mixture, then cooked to a crisp golden finish. Each order comes with three."}, {"id": "bhajia", "name": "Potato Bhajia", "category": "Snacks", "price": 8, "desc": "Crispy, spiced potato bites with a cool and tangy dipping sauce.", "img": "assets/image-04.jpg", "detail": "Thin potato slices, coated in spiced gram-flour batter and fried until crisp. Best enjoyed warm with a tangy dipping sauce."}, {"id": "chai", "name": "Kenyan Chai", "category": "Drinks", "price": 4, "desc": "Strong black tea simmered with milk, ginger, and warming spice.", "img": "assets/image-06.jpg", "detail": "A proper cup of home: bold black tea simmered with milk, a little fresh ginger, and gentle warming spices. Served hot."}, {"id": "uji", "name": "Kenyan Uji", "category": "Drinks", "price": 5, "desc": "A smooth, gently spiced porridge made with traditional Kenyan grains.", "img": "assets/image-03.jpg", "detail": "A comforting Kenyan porridge traditionally made from fermented millet or sorghum flour, served warm for breakfast or a nourishing snack."}, {"id": "mango-juice", "name": "Tropical Fruit Juice", "category": "Drinks", "price": 5, "desc": "A chilled blend of sunny tropical fruit, including orange, carrot, and pineapple.", "img": "assets/image-15.jpg", "detail": "A refreshing chilled fruit blend with bright citrus and tropical flavors. Best enjoyed cold."}, {"id": "kachumbari", "name": "Fresh Kachumbari", "category": "Sides", "price": 6, "desc": "Tomato, onion, cilantro, and lemon: a fresh, zippy little side.", "img": "assets/image-18.jpg", "detail": "Finely chopped ripe tomatoes, onion, cilantro, and a lively squeeze of lemon. The fresh, zippy side that belongs beside nyama choma and pilau."}];

  const LUNCH_SET = {
    id: "lunch-set",
    name: "Githeri + Kenyan chai",
    detail: "Lunch set special",
    category: "Mains",
    price: 18,
    combo: true,
    img: "assets/image-07.jpg",
  };

  /* ================= helpers ================= */
  const $ = (sel, el) => (el || document).querySelector(sel);
  const $$ = (sel, el) => Array.from((el || document).querySelectorAll(sel));
  const money = (n) => "$" + n.toFixed(2);
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      } catch (err) {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (err) {
        /* storage unavailable: the demo still works in memory */
      }
    },
  };

  /* ================= state ================= */
  const state = {
    category: "All",
    query: "",
    savedOnly: false,
    saved: new Set(store.get("kkf-saved", [])),
    cart: new Map(),
    total: 0,
  };

  store.get("kkf-cart", []).forEach((entry) => {
    const item = entry.id === LUNCH_SET.id ? LUNCH_SET : DISHES.find((d) => d.id === entry.id);
    if (item && entry.qty > 0) state.cart.set(item.id, { item, qty: entry.qty });
  });

  /* ================= elements ================= */
  const els = {
    header: $(".navbar, .site-header"),
    menuToggle: $("#menu-toggle"),
    mobileMenu: $("#mobile-menu"),
    cartCount: $("#cart-count"),
    openCart: $("#open-cart"),
    drawer: $("#cart-drawer"),
    cartItems: $("#cart-items"),
    cartEmpty: $("#cart-empty"),
    cartFooter: $("#cart-footer"),
    cartSubtotal: $("#cart-subtotal"),
    comboDiscountRow: $("#combo-discount-row"),
    comboDiscount: $("#combo-discount"),
    cartTotal: $("#cart-total"),
    checkoutButton: $("#checkout-button"),
    keepBrowsing: $("#keep-browsing"),
    overlay: $("#overlay"),
    addCombo: $("#add-combo"),
    categoryList: $("#category-list"),
    dishCount: $("#dish-count"),
    search: $("#menu-search"),
    grid: $("#menu-grid"),
    emptyState: $("#empty-state"),
    resultsCount: $("#results-count"),
    heroOpenArea: $("#hero-open-area"),
    heroAreaLabel: $("#hero-area-label"),
    areaForm: $("#area-form"),
    areaZip: $("#area-zip"),
    detailContent: $("#detail-content"),
    orderForm: $("#order-form"),
    checkoutSubtotal: $("#checkout-subtotal"),
    customerName: $("#customer-name"),
    orderNumber: $("#order-number"),
    confirmationTotal: $("#confirmation-total"),
    doneButton: $("#done-button"),
    toast: $("#toast"),
    backToTop: $("#back-to-top"),
    year: $("#year"),
  };

  const SHELLS = {
    drawer: els.drawer,
    area: $("#area-modal"),
    detail: $("#detail-modal"),
    checkout: $("#checkout-modal"),
    confirmation: $("#confirmation-modal"),
  };
  const shellEntries = Object.entries(SHELLS);

  /* ================= toast ================= */
  let toastTimer = null;
  function toast(message) {
    els.toast.textContent = message;
    els.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove("show"), 2600);
  }

  /* ================= dialogs ================= */
  let lastFocus = null;

  function anyShellOpen() {
    return shellEntries.some(([, el]) => el.classList.contains("is-open"));
  }

  function refreshChrome() {
    if (anyShellOpen()) {
      els.overlay.hidden = false;
      document.body.classList.add("no-scroll");
    } else {
      els.overlay.hidden = true;
      document.body.classList.remove("no-scroll");
      if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
      lastFocus = null;
    }
  }

  function setShellState(el, open) {
    el.classList.toggle("is-open", open);
    el.setAttribute("aria-hidden", open ? "false" : "true");
    el.inert = !open;
  }

  function openShell(key) {
    lastFocus = document.activeElement;
    shellEntries.forEach(([, el]) => setShellState(el, false));
    setShellState(SHELLS[key], true);
    refreshChrome();
    setTimeout(() => {
      const target =
        SHELLS[key].querySelector("input, select, textarea") ||
        SHELLS[key].querySelector(".modal-close") ||
        SHELLS[key].querySelector("[data-close]");
      if (target) target.focus();
    }, 80);
  }

  function closeShell(key) {
    setShellState(SHELLS[key], false);
    refreshChrome();
  }

  function closeAllShells() {
    shellEntries.forEach(([, el]) => setShellState(el, false));
    refreshChrome();
  }

  /* ================= menu ================= */
  const heartSvg =
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 20.3 4.9 13a4.7 4.7 0 0 1 0-6.6 4.5 4.5 0 0 1 6.5 0l.6.7.6-.7a4.5 4.5 0 0 1 6.5 0 4.7 4.7 0 0 1 0 6.6Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>';

  function visibleDishes() {
    const q = state.query.trim().toLowerCase();
    return DISHES.filter((d) => {
      if (state.savedOnly) return state.saved.has(d.id);
      if (state.category !== "All" && d.category !== state.category) return false;
      if (q && (d.name + " " + d.desc + " " + d.category).toLowerCase().indexOf(q) === -1) return false;
      return true;
    });
  }

  function cardHTML(d, i) {
    const isSaved = state.saved.has(d.id);
    return (
      '<article class="dish-card card-in" style="animation-delay:' + Math.min(i * 45, 450) + 'ms" data-id="' + d.id + '">' +
        '<div class="dish-media">' +
          '<img src="' + d.img + '" alt="' + esc(d.name) + '" loading="lazy">' +
          '<span class="dish-tag">' + esc(d.category) + '</span>' +
          '<button class="save-button' + (isSaved ? " is-saved" : "") + '" type="button" data-save="' + d.id + '" aria-pressed="' + isSaved + '" aria-label="Save ' + esc(d.name) + '">' +
            heartSvg +
          '</button>' +
        '</div>' +
        '<div class="dish-body"><h3>' + esc(d.name) + '</h3><p>' + esc(d.desc) + '</p></div>' +
        '<div class="dish-foot"><div class="dish-price-group"><span class="dish-price">' + money(d.price) + '</span><small class="price-unit">per portion</small></div>' +
          '<button class="add-button" type="button" data-add="' + d.id + '">Add <span aria-hidden="true">+</span></button>' +
        '</div>' +
      '</article>'
    );
  }

  function renderMenu() {
    const list = visibleDishes();
    els.grid.innerHTML = list.map(cardHTML).join("");
    els.emptyState.hidden = list.length > 0;
    els.dishCount.textContent = DISHES.length;
    if (state.savedOnly) {
      els.resultsCount.textContent = "Showing " + list.length + " saved " + (list.length === 1 ? "dish" : "dishes");
    } else if (state.category !== "All" || state.query.trim()) {
      els.resultsCount.textContent = "Showing " + list.length + " of " + DISHES.length + " dishes";
    } else {
      els.resultsCount.textContent = "Showing all dishes";
    }
  }

  els.categoryList.addEventListener("click", (e) => {
    const btn = e.target.closest(".category-button");
    if (!btn) return;
    $$(".category-button", els.categoryList).forEach((b) => {
      const active = b === btn;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", String(active));
    });
    state.savedOnly = btn.dataset.category === "Saved";
    state.category = state.savedOnly ? "All" : btn.dataset.category;
    renderMenu();
  });

  els.search.addEventListener("input", () => {
    state.query = els.search.value;
    renderMenu();
  });

  /* ================= bag ================= */
  function cartEntries() {
    return Array.from(state.cart.values());
  }

  function addToCart(item, silent) {
    const entry = state.cart.get(item.id);
    if (entry) entry.qty += 1;
    else state.cart.set(item.id, { item, qty: 1 });
    renderCart();
    if (!silent) toast(item.name + " added to your bag");
  }

  function renderCart() {
    const entries = cartEntries();
    const count = entries.reduce((sum, e) => sum + e.qty, 0);

    els.cartCount.textContent = count;
    els.cartCount.classList.remove("pop");
    if (count > 0) {
      void els.cartCount.offsetWidth;
      els.cartCount.classList.add("pop");
    }

    const hasItems = entries.length > 0;
    els.cartEmpty.hidden = hasItems;
    els.cartFooter.hidden = !hasItems;

    els.cartItems.innerHTML = entries
      .map(({ item, qty }) =>
        '<div class="cart-item" data-id="' + item.id + '">' +
          '<img class="cart-item-media" src="' + item.img + '" alt="">' +
          '<div class="cart-item-info">' +
            '<h4>' + esc(item.name) + '</h4>' +
            (item.combo ? '<p class="cart-item-detail">' + esc(item.detail) + '</p>' : "") +
            '<p class="cart-item-unit">' + money(item.price) + (item.combo ? " (before lunch set saving)" : " per portion") + '</p>' +
            '<div class="qty-controls">' +
              '<button class="qty-button" type="button" data-dec="' + item.id + '" aria-label="Decrease quantity of ' + esc(item.name) + '">−</button>' +
              '<span class="qty-value">' + qty + '</span>' +
              '<button class="qty-button" type="button" data-inc="' + item.id + '" aria-label="Increase quantity of ' + esc(item.name) + '">+</button>' +
            '</div>' +
          '</div>' +
          '<div class="cart-item-side">' +
            '<span class="cart-item-price">' + money(item.price * qty) + '</span>' +
            '<button class="cart-item-remove" type="button" data-remove="' + item.id + '">Remove</button>' +
          '</div>' +
        '</div>'
      )
      .join("");

    const subtotal = entries.reduce((sum, e) => sum + e.item.price * e.qty, 0);
    const discount = entries.reduce((sum, e) => sum + (e.item.combo ? 2 * e.qty : 0), 0);
    const total = Math.max(subtotal - discount, 0);
    state.total = total;

    els.cartSubtotal.textContent = money(subtotal);
    els.comboDiscountRow.hidden = discount <= 0;
    els.comboDiscount.textContent = "−" + money(discount);
    els.cartTotal.textContent = money(total);

    store.set("kkf-cart", entries.map(({ item, qty }) => ({ id: item.id, qty })));
  }

  els.cartItems.addEventListener("click", (e) => {
    const inc = e.target.closest("[data-inc]");
    const dec = e.target.closest("[data-dec]");
    const rem = e.target.closest("[data-remove]");
    if (inc) {
      const entry = state.cart.get(inc.dataset.inc);
      if (entry) {
        entry.qty += 1;
        renderCart();
      }
    } else if (dec) {
      const entry = state.cart.get(dec.dataset.dec);
      if (entry) {
        entry.qty -= 1;
        if (entry.qty <= 0) state.cart.delete(entry.item.id);
        renderCart();
      }
    } else if (rem) {
      state.cart.delete(rem.dataset.remove);
      renderCart();
      toast("Removed from your bag");
    }
  });

  /* ================= menu interactions ================= */
  els.grid.addEventListener("click", (e) => {
    const saveBtn = e.target.closest("[data-save]");
    if (saveBtn) {
      const id = saveBtn.dataset.save;
      if (state.saved.has(id)) {
        state.saved.delete(id);
        saveBtn.classList.remove("is-saved");
        saveBtn.setAttribute("aria-pressed", "false");
      } else {
        state.saved.add(id);
        saveBtn.classList.add("is-saved");
        saveBtn.setAttribute("aria-pressed", "true");
        toast("Saved to your favorites");
      }
      store.set("kkf-saved", Array.from(state.saved));
      if (state.savedOnly) renderMenu();
      return;
    }

    const addBtn = e.target.closest("[data-add]");
    if (addBtn) {
      const dish = DISHES.find((d) => d.id === addBtn.dataset.add);
      if (dish) addToCart(dish);
      return;
    }

    const card = e.target.closest(".dish-card");
    if (card) {
      const dish = DISHES.find((d) => d.id === card.dataset.id);
      if (dish) openDetail(dish);
    }
  });

  /* ================= dish detail dialog ================= */
  function openDetail(d) {
    const isSaved = state.saved.has(d.id);
    els.detailContent.innerHTML =
      '<div class="detail-media"><img src="' + d.img + '" alt="' + esc(d.name) + '"></div>' +
      '<div class="detail-body">' +
        '<div class="detail-tags"><span class="detail-chip">' + esc(d.category) + '</span>' +
          (isSaved ? '<span class="detail-chip green">Saved</span>' : "") + '</div>' +
        '<h3 id="detail-title">' + esc(d.name) + '</h3>' +
        '<p class="detail-desc">' + esc(d.detail || d.desc) + '</p>' +
        '<div class="detail-meta"><span>Prepared fresh by Faith</span><span>·</span><span>Delivery or pickup, NJ area</span></div>' +
        '<div class="detail-foot"><div class="detail-price-group"><span class="detail-price">' + money(d.price) + '</span><small class="price-unit">per portion</small></div>' +
          '<button class="btn btn-primary" type="button" data-detail-add="' + d.id + '">Add to bag <svg class="ic ic-sm"><use href="#i-arrow"/></svg></button>' +
        '</div>' +
      '</div>';
    openShell("detail");
  }

  els.detailContent.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-detail-add]");
    if (!btn) return;
    const dish = DISHES.find((d) => d.id === btn.dataset.detailAdd);
    if (dish) {
      addToCart(dish);
      closeShell("detail");
    }
  });

  /* ================= lunch set special ================= */
  els.addCombo.addEventListener("click", () => {
    addToCart(LUNCH_SET, true);
    toast("Lunch set added. You save $2.00");
  });

  /* ================= ZIP delivery checker ================= */
  const savedZip = store.get("kkf-zip", "");
  if (savedZip) els.heroAreaLabel.textContent = savedZip;

  els.heroOpenArea.addEventListener("click", () => openShell("area"));

  els.areaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const zip = els.areaZip.value.trim();
    if (!/^[0-9]{5}(-[0-9]{4})?$/.test(zip)) {
      els.areaZip.focus();
      toast("Please enter a valid US ZIP code");
      return;
    }
    store.set("kkf-zip", zip);
    els.heroAreaLabel.textContent = zip;
    els.areaForm.reset();
    closeShell("area");
    toast("Delivery area saved: " + zip);
  });

  /* ================= bag drawer ================= */
  els.openCart.addEventListener("click", () => openShell("drawer"));
  els.keepBrowsing.addEventListener("click", () => closeShell("drawer"));

  /* ================= order request ================= */
  els.checkoutButton.addEventListener("click", () => {
    els.checkoutSubtotal.textContent = money(state.total);
    openShell("checkout");
  });

  els.orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!els.orderForm.checkValidity()) {
      els.orderForm.reportValidity();
      return;
    }
    const fd = new FormData(els.orderForm);
    const fullName = String(fd.get("name") || "").trim();
    const order = {
      number: "KK-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
      name: fullName,
      email: String(fd.get("email") || "").trim(),
      zip: String(fd.get("zip") || "").trim(),
      fulfillment: fd.get("fulfillment"),
      notes: String(fd.get("notes") || "").trim(),
      total: state.total,
      items: cartEntries().map(({ item, qty }) => ({ id: item.id, name: item.name, price: item.price, qty })),
      createdAt: new Date().toISOString(),
    };

    const orders = store.get("kkf-orders", []);
    orders.push(order);
    store.set("kkf-orders", orders);

    els.customerName.textContent = fullName.split(" ")[0] || "friend";
    els.orderNumber.textContent = order.number;
    els.confirmationTotal.textContent = money(order.total);

    state.cart.clear();
    renderCart();
    els.orderForm.reset();
    openShell("confirmation");
    toast("Order request sent to Faith");
  });

  els.doneButton.addEventListener("click", () => closeShell("confirmation"));

  /* ================= header, mobile menu, back to top ================= */
  els.menuToggle.addEventListener("click", () => {
    const open = els.mobileMenu.classList.toggle("is-open");
    els.menuToggle.setAttribute("aria-expanded", String(open));
    els.menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  $$("a", els.mobileMenu).forEach((a) =>
    a.addEventListener("click", () => {
      els.mobileMenu.classList.remove("is-open");
      els.menuToggle.setAttribute("aria-expanded", "false");
      els.menuToggle.setAttribute("aria-label", "Open menu");
    })
  );

  els.backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  let ticking = false;
  function onScroll() {
    const y = window.scrollY;
    if (els.header) els.header.classList.toggle("is-scrolled", y > 8);
    els.backToTop.classList.toggle("is-visible", y > 700);
    ticking = false;
  }
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(onScroll);
      }
    },
    { passive: true }
  );
  onScroll();

  /* ================= global listeners ================= */
  document.addEventListener("click", (e) => {
    const closer = e.target.closest("[data-close]");
    if (closer) {
      const shell = closer.closest(".modal-shell, .cart-drawer");
      const found = shell && shellEntries.find(([, el]) => el === shell);
      if (found) closeShell(found[0]);
      return;
    }
    if (e.target === els.overlay) {
      closeAllShells();
      return;
    }
    const backdrop = e.target.closest(".modal-shell");
    if (backdrop && e.target === backdrop) {
      const found = shellEntries.find(([, el]) => el === backdrop);
      if (found) closeShell(found[0]);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (anyShellOpen()) closeAllShells();
      else if (els.mobileMenu.classList.contains("is-open")) els.menuToggle.click();
    }
    if (e.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
      e.preventDefault();
      els.search.focus();
    }
  });

  /* ================= scroll reveals ================= */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = (entry.target.dataset.delay || 0) + "ms";
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
  );
  $$(".reveal").forEach((el) => revealObserver.observe(el));

  /* ================= init ================= */
  els.year.textContent = new Date().getFullYear();
  renderMenu();
  renderCart();
})();
