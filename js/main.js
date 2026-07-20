const MENU_CATEGORIES = [
  { id: "phin-coffee", label: "Phin Coffee" },
  { id: "espresso", label: "Espresso based" },
  { id: "tea-series", label: "Tea Series" },
  { id: "freeze", label: "Freeze" },
  { id: "other-drinks", label: "Other drinks" },
  { id: "ice-cream", label: "Ice cream" },
  { id: "dessert", label: "Dessert" },
];

const MENU_ITEMS = [
  { id: "phin-da-den", name: "Phin Đá Đen", price: 29, category: "phin-coffee", desc: "Cà phê phin nguyên chất, đậm và đắng.", img: "assets/images/menu/phindaden-removebg-preview.png" },
  { id: "phin-sua-da", name: "Phin Sữa Đá", price: 35, category: "phin-coffee", desc: "Phin truyền thống hòa quyện sữa đặc.", img: "assets/images/menu/phinsuada-removebg-preview.png" },
  { id: "bac-xiu-sua-tuoi-kem-beo", name: "Bạc Xỉu Sữa Tươi Kem Béo", price: 45, category: "phin-coffee", desc: "Sữa tươi thanh mát phủ lớp kem béo mịn.", img: "assets/images/menu/bacxiusuatuoikembeo-removebg-preview.png" },
  { id: "kem-ca-phe", name: "Kem Phin", price: 50, category: "phin-coffee", desc: "Kem tươi vị cà phê phin đậm đà.", img: "assets/images/menu/kemphin-removebg-preview.png" },
  { id: "ca-phe-sua-pha-may", name: "Cà Phê Sữa Pha Máy", price: 40, category: "espresso", desc: "Espresso pha máy cùng sữa, vị hiện đại.", img: "assets/images/menu/caphesuaphamay-removebg-preview.png" },
  { id: "americano", name: "Americano", price: 30, category: "espresso", desc: "Espresso pha loãng, nhẹ nhàng tỉnh táo.", img: "assets/images/menu/americano-removebg-preview.png" },
  { id: "latte", name: "Latte", price: 45, category: "espresso", desc: "Espresso, sữa và thạch cà phê mềm mượt.", img: "assets/images/menu/latte-removebg-preview.png" },
  { id: "mocha-latte", name: "Mocha Macchiato", price: 50, category: "espresso", desc: "Cà phê, cacao và kem, ngọt ngào béo ngậy.", img: "assets/images/menu/mochalatte-removebg-preview.png" },
  { id: "bac-xiu", name: "Bạc Xỉu", price: 40, category: "espresso", desc: "Nhiều sữa, ít cà phê, ngọt dịu dễ uống.", img: "assets/images/menu/bacxiu-removebg-preview.png" },
  { id: "tra-thach-dao", name: "Trà Thạch Đào", price: 40, category: "tea-series", desc: "Trà thơm mát cùng thạch đào giòn ngọt.", img: "assets/images/menu/tra-thach-dao.png" },
  { id: "tra-thach-vai", name: "Trà Thạch Vải", price: 45, category: "tea-series", desc: "Trà thanh nhẹ hòa quyện vải thơm ngọt.", img: "assets/images/menu/tra-thach-vai.png" },
  { id: "ca-phe-da-xay-kem-whipping", name: "Cà Phê Đá Xay Kem Whipping", price: 55, category: "freeze", desc: "Cà phê xay đá phủ kem whipping béo mịn.", img: "assets/images/menu/ca-phe-da-xay-kem-whipping.png" },
  { id: "cookies", name: "Cookies", price: 60, category: "freeze", desc: "Đá xay vị cookie phủ kem và vụn bánh giòn.", img: "assets/images/menu/cookies.png" },
  { id: "freeze-socolate", name: "Freeze Socolate", price: 55, category: "freeze", desc: "Đá xay socola đậm đà, béo ngậy.", img: "assets/images/menu/freeze-socolate.png" },
  { id: "freeze-matcha", name: "Freeze Matcha", price: 69, category: "freeze", desc: "Đá xay trà xanh matcha thơm dịu.", img: "assets/images/menu/freeze-matcha.png" },
  { id: "ca-phe-da-xay-caramel", name: "Cà Phê Đá Xay Caramel", price: 60, category: "freeze", desc: "Cà phê xay đá vị caramel ngọt ngào.", img: "assets/images/menu/ca-phe-da-xay-caramel.png" },
  { id: "chanh-day-da-xay", name: "Chanh Dây Đá Xay", price: 40, category: "other-drinks", desc: "Chanh dây xay đá chua ngọt sảng khoái.", img: "assets/images/menu/chanh-day-da-xay.png" },
  { id: "chanh", name: "Chanh", price: 29, category: "other-drinks", desc: "Nước chanh tươi mát, giải khát tức thì.", img: "assets/images/menu/chanh.png" },
  { id: "chanh-da-xay", name: "Chanh Đá Xay", price: 39, category: "other-drinks", desc: "Chanh xay đá mịn, chua ngọt hài hòa.", img: "assets/images/menu/chanh-da-xay.png" },
  { id: "quat-da-xay", name: "Quất Đá Xay", price: 39, category: "other-drinks", desc: "Quất xay đá thơm mát, vị chua thanh.", img: "assets/images/menu/quat-da-xay.png" },
  { id: "quat", name: "Quất", price: 29, category: "other-drinks", desc: "Nước quất tươi, chua ngọt dễ uống.", img: "assets/images/menu/quat.png" },
  { id: "kem-oreo", name: "Kem Oreo", price: 50, category: "ice-cream", desc: "Kem tươi phủ bánh Oreo giòn tan.", img: "assets/images/menu/kemoreo-removebg-preview.png" },
  { id: "kem-vanilla", name: "Kem Vanilla", price: 50, category: "ice-cream", desc: "Kem vanilla thơm dịu, tinh tế.", img: "assets/images/menu/kemvanilla-removebg-preview.png" },
  { id: "kem-dau-tay", name: "Kem Dâu Tây", price: 50, category: "ice-cream", desc: "Kem tươi sốt dâu tây chua ngọt tươi mát.", img: "assets/images/menu/KEMDAUTAY-removebg-preview.png" },
  { id: "cheesecake-coffee", name: "Cheesecake Coffee", price: 50, category: "dessert", desc: "Cheesecake béo mịn phủ lớp caramel cà phê.", img: "assets/images/menu/cheesecake-coffee.png" },
  { id: "tiramisu-dau", name: "Tiramisu Dâu", price: 40, category: "dessert", desc: "Tiramisu mềm mịn hòa quyện vị dâu.", img: "assets/images/menu/tiramisu-dau.png" },
  { id: "mousse-cacao", name: "Mousse Cacao", price: 40, category: "dessert", desc: "Mousse cacao đậm đà, tan mềm trong miệng.", img: "assets/images/menu/mousse-cacao.png" },
  { id: "mousse-dao", name: "Mousse Đào", price: 39, category: "dessert", desc: "Mousse thanh mát phủ đào tươi ngọt dịu.", img: "assets/images/menu/mousse-dao.png" },
  { id: "banh-kem-dau", name: "Bánh Kem Dâu", price: 50, category: "dessert", desc: "Bánh kem mềm mịn cùng dâu tươi ngọt.", img: "assets/images/menu/banh-kem-dau.png" },
  { id: "cheesecake-matcha", name: "Cheesecake Matcha", price: 50, category: "dessert", desc: "Cheesecake béo mịn vị trà xanh matcha.", img: "assets/images/menu/cheesecake-matcha.png" },
  { id: "croissant", name: "Croissant", price: 39, category: "dessert", desc: "Bánh sừng bò bơ giòn tan, thơm lừng.", img: "assets/images/menu/croissant.png" },
  { id: "cheesecake-chanh-day", name: "Cheesecake Chanh Dây", price: 39, category: "dessert", desc: "Cheesecake béo mịn phủ chanh dây chua ngọt.", img: "assets/images/menu/cheesecake-chanh-day.png" },
  { id: "banh-socola", name: "Bánh Socola", price: 50, category: "dessert", desc: "Bánh socola đậm đà, béo ngậy.", img: "assets/images/menu/banh-socola.png" },
];

function menuCardHTML(item) {
  return `
    <article class="menu-card">
      <button class="menu-card__fav" type="button" aria-label="Yêu thích ${item.name}" aria-pressed="false">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
      </button>
      <div class="menu-card__media-wrap">
        <img class="menu-card__media" src="${item.img}" alt="${item.name}"
             loading="lazy" width="480" height="360" />
      </div>
      <h3 class="menu-card__name">${item.name}</h3>
      <div class="menu-card__foot">
        <span class="menu-card__price">${item.price}.000 VNĐ</span>
        <button class="menu-card__add" type="button" aria-label="Thêm ${item.name}"
                data-add-to-cart data-id="${item.id}" data-name="${item.name}"
                data-price="${item.price}" data-img="${item.img}">+</button>
      </div>
    </article>`;
}

function initYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function renderMenu() {
  const root = document.getElementById("menu-sections");
  if (!root) return;

  root.innerHTML = MENU_CATEGORIES.map((cat) => {
    const items = MENU_ITEMS.filter((item) => item.category === cat.id);
    if (!items.length) return "";
    return `
      <section class="menu-section">
        <h2 class="menu-section__title">${cat.label}</h2>
        <div class="menu-grid">
          ${items.map(menuCardHTML).join("")}
        </div>
      </section>`;
  }).join("");

  root.querySelectorAll(".menu-card__media").forEach((img) => {
    img.addEventListener("error", () => {
      img.classList.add("is-hidden");
    });
  });

  root.querySelectorAll(".menu-card__fav").forEach((btn) => {
    btn.addEventListener("click", () => {
      const active = btn.classList.toggle("is-active");
      btn.setAttribute("aria-pressed", String(active));
    });
  });

  root.querySelectorAll("[data-add-to-cart]").forEach((btn) => {
    btn.addEventListener("click", () => {
      addToCart({
        id: btn.dataset.id,
        name: btn.dataset.name,
        price: Number(btn.dataset.price),
        img: btn.dataset.img,
      });
      showToast(`Đã thêm "${btn.dataset.name}" vào giỏ hàng`);
    });
  });
}

function initMenu() {
  if (!document.getElementById("menu-sections")) return;
  renderMenu();
}

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz6rbGq4t4lWk82lEtzty7bPpvwURbaOd2WPSFC5TtZR7n4Nol27wguAmG4-tHh21n_/exec";

function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      status.textContent = "Vui lòng điền đầy đủ các trường hợp lệ.";
      return;
    }

    const formData = new FormData(form);
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      message: formData.get("message"),
    };

    status.textContent = "Đang gửi...";

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      status.textContent = "Cảm ơn bạn! Tin nhắn của bạn đã được ghi nhận.";
      form.reset();
    } catch (error) {
      console.error(error);
      status.textContent = "Gửi thất bại, vui lòng thử lại sau.";
    }
  });
}

function initNewsletter() {
  document.querySelectorAll("[data-newsletter]").forEach((form) => {
    const status = form.querySelector(".form-status");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        if (status) status.textContent = "Vui lòng nhập email hợp lệ.";
        return;
      }
      if (status) status.textContent = "Đã đăng ký nhận tin. Cảm ơn bạn!";
      form.reset();
    });
  });
}

const CART_KEY = "gumi-cart";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SIZES = ["S", "M", "XL"];
const SIZE_STEP = 5;
const NO_SIZE_CATEGORIES = ["dessert"];

function itemHasSize(productId) {
  const menuItem = MENU_ITEMS.find((entry) => entry.id === productId);
  return !menuItem || !NO_SIZE_CATEGORIES.includes(menuItem.category);
}

function sizeIndex(size) {
  const index = SIZES.indexOf(size);
  return index === -1 ? 0 : index;
}

function unitPrice(item) {
  if (!item.size) return item.price;
  return item.price + SIZE_STEP * sizeIndex(item.size);
}

function cartItemId(productId, size) {
  return size ? `${productId}::${size}` : productId;
}

function readCart() {
  try {
    const value = JSON.parse(localStorage.getItem(CART_KEY));
    if (!Array.isArray(value)) return [];
    return value.map((item) => {
      const productId = item.productId || item.name;
      const size = itemHasSize(productId) ? (SIZES.includes(item.size) ? item.size : "S") : null;
      return { ...item, size, productId, id: cartItemId(productId, size) };
    });
  } catch (err) {
    return [];
  }
}

function writeCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(item) {
  const cart = readCart();
  const productId = item.id;
  const size = itemHasSize(productId) ? (SIZES.includes(item.size) ? item.size : "S") : null;
  const id = cartItemId(productId, size);
  const existing = cart.find((entry) => entry.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, productId, name: item.name, price: item.price, img: item.img, qty: 1, size });
  }
  writeCart(cart);
}

function setSize(id, size) {
  if (!SIZES.includes(size)) return;
  const cart = readCart();
  const entry = cart.find((item) => item.id === id);
  if (!entry || !entry.size) return;
  const newId = cartItemId(entry.productId, size);
  if (newId === id) return;
  const target = cart.find((item) => item.id === newId);
  if (target) {
    target.qty += entry.qty;
    writeCart(cart.filter((item) => item.id !== id));
  } else {
    entry.size = size;
    entry.id = newId;
    writeCart(cart);
  }
}

function setQty(id, qty) {
  const cart = readCart();
  const entry = cart.find((item) => item.id === id);
  if (!entry) return;
  entry.qty = Math.max(1, qty);
  writeCart(cart);
}

function removeFromCart(id) {
  writeCart(readCart().filter((item) => item.id !== id));
}

function cartCount() {
  return readCart().reduce((total, item) => total + item.qty, 0);
}

function cartSubtotal() {
  return readCart().reduce((total, item) => total + unitPrice(item) * item.qty, 0);
}

function formatVnd(thousands) {
  return (thousands * 1000).toLocaleString("vi-VN") + " VNĐ";
}

function updateCartCount() {
  const count = cartCount();
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = String(count);
    el.hidden = count === 0;
  });
}

function showToast(message) {
  let region = document.querySelector(".toast-region");
  if (!region) {
    region = document.createElement("div");
    region.className = "toast-region";
    document.body.appendChild(region);
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.textContent = message;
  region.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("is-visible"));
  setTimeout(() => {
    toast.classList.remove("is-visible");
    toast.addEventListener("transitionend", () => toast.remove(), { once: true });
  }, 2600);
}

function cartRowHTML(item) {
  return `
    <tr data-cart-row data-id="${item.id}">
      <td class="cart-cell-product">
        <div class="cart-product">
          <img class="cart-product__img" src="${item.img}" alt="${item.name}" width="60" height="60" />
          <span class="cart-product__name">${item.name}</span>
        </div>
      </td>
      <td class="cart-cell-size">
        ${item.size
          ? `<div class="cart-size" role="group" aria-label="Kích cỡ ${item.name}">
              ${SIZES.map((size) => `<button type="button" class="cart-size__btn${size === item.size ? " is-active" : ""}" data-size="${size}" aria-pressed="${size === item.size}">${size}</button>`).join("")}
            </div>`
          : `<span class="cart-size-none">—</span>`}
      </td>
      <td class="cart-cell-qty">
        <div class="qty-stepper">
          <button type="button" class="qty-stepper__btn" data-qty-dec aria-label="Giảm số lượng">−</button>
          <span class="qty-stepper__value" data-qty-value>${item.qty}</span>
          <button type="button" class="qty-stepper__btn" data-qty-inc aria-label="Tăng số lượng">+</button>
        </div>
      </td>
      <td class="cart-cell-remove">
        <button type="button" class="cart-remove" data-cart-remove aria-label="Xóa ${item.name}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /></svg>
        </button>
      </td>
      <td class="cart-cell-total">${formatVnd(unitPrice(item) * item.qty)}</td>
    </tr>`;
}

function renderCart() {
  const body = document.getElementById("cart-items");
  if (!body) return;
  const cart = readCart();
  const empty = document.getElementById("cart-empty");

  body.innerHTML = cart.map(cartRowHTML).join("");
  if (empty) empty.hidden = cart.length > 0;

  const subtotal = cartSubtotal();
  document.querySelectorAll("[data-cart-subtotal]").forEach((el) => {
    el.textContent = formatVnd(subtotal);
  });
  document.querySelectorAll("[data-cart-total]").forEach((el) => {
    el.textContent = formatVnd(subtotal);
  });
  const payBtn = document.querySelector("[data-cart-pay]");
  if (payBtn) payBtn.textContent = `THANH TOÁN ${formatVnd(subtotal)}`;

  body.querySelectorAll("[data-cart-row]").forEach((row) => {
    const id = row.dataset.id;
    row.querySelector("[data-qty-dec]").addEventListener("click", () => {
      const entry = readCart().find((item) => item.id === id);
      if (entry) setQty(id, entry.qty - 1);
      renderCart();
    });
    row.querySelector("[data-qty-inc]").addEventListener("click", () => {
      const entry = readCart().find((item) => item.id === id);
      if (entry) setQty(id, entry.qty + 1);
      renderCart();
    });
    row.querySelector("[data-cart-remove]").addEventListener("click", () => {
      removeFromCart(id);
      renderCart();
      showToast("Đã xóa sản phẩm khỏi giỏ hàng");
    });
    row.querySelectorAll("[data-size]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setSize(id, btn.dataset.size);
        renderCart();
      });
    });
  });

  body.querySelectorAll(".cart-product__img").forEach((img) => {
    img.addEventListener("error", () => img.classList.add("is-hidden"));
  });
}

function initCartPage() {
  if (!document.getElementById("cart-items")) return;
  renderCart();

  const voucher = document.querySelector("[data-voucher]");
  if (voucher) {
    const status = document.querySelector("[data-voucher-status]");
    voucher.addEventListener("submit", (event) => {
      event.preventDefault();
      const code = voucher.querySelector("input").value.trim();
      if (status) {
        status.textContent = code
          ? `Đã áp dụng mã "${code}".`
          : "Vui lòng nhập mã voucher.";
      }
    });
  }

  const checkout = document.querySelector("[data-checkout]");
  if (checkout) {
    const status = document.querySelector("[data-checkout-status]");
    checkout.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!readCart().length) {
        if (status) status.textContent = "Giỏ hàng của bạn đang trống.";
        return;
      }
      const email = checkout.querySelector('input[type="email"]').value.trim();
      if (email && !EMAIL_RE.test(email)) {
        if (status) status.textContent = "Email không hợp lệ.";
        return;
      }
      if (!checkout.checkValidity()) {
        if (status) status.textContent = "Vui lòng điền đầy đủ thông tin giao hàng.";
        return;
      }
      writeCart([]);
      renderCart();
      checkout.reset();
      if (status) status.textContent = "";
      showToast("Đặt hàng thành công! Cảm ơn bạn đã mua sắm cùng GUMI.");
    });
  }
}

function initPasswordToggles() {
  document.querySelectorAll("[data-password-toggle]").forEach((btn) => {
    const control = btn.closest(".field__control");
    const input = control ? control.querySelector("input") : null;
    if (!input) return;
    btn.addEventListener("click", () => {
      const visible = btn.classList.toggle("is-visible");
      input.type = visible ? "text" : "password";
    });
  });
}

function initAuth() {
  document.querySelectorAll("[data-auth]").forEach((form) => {
    const mode = form.dataset.auth;
    const card = form.closest(".auth-card") || document;
    const status = card.querySelector("[data-auth-status]");
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && !EMAIL_RE.test(emailInput.value.trim())) {
        if (status) status.textContent = "Email không hợp lệ, vui lòng kiểm tra lại.";
        return;
      }

      if (!form.checkValidity()) {
        if (status) status.textContent = "Vui lòng điền đầy đủ thông tin.";
        return;
      }

      const password = form.querySelector('input[name="password"]');
      const confirm = form.querySelector('input[name="confirm"]');
      if (password && confirm && password.value !== confirm.value) {
        if (status) status.textContent = "Mật khẩu xác nhận không khớp.";
        return;
      }

      if (status) {
        status.textContent = mode === "register"
          ? "Đăng ký thành công!"
          : "Đăng nhập thành công!";
      }
      showToast(mode === "register" ? "Đăng ký thành công!" : "Đăng nhập thành công!");
      form.reset();
      if (mode === "login") {
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1000);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initYear();
  initNavToggle();
  initMenu();
  initContactForm();
  initNewsletter();
  updateCartCount();
  initCartPage();
  initPasswordToggles();
  initAuth();
});
