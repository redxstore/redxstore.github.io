const navbar = document.querySelector('#navbar');
const desktopNav = document.querySelector('#desktop-nav');
const catalogMenu = document.querySelector('#catalog-menu');
const navIndicator = document.querySelector('#nav-indicator');
const navLinks = [...document.querySelectorAll('.nav-link')];
const menuButton = document.querySelector('#menu-open');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileBackdrop = document.querySelector('#mobile-backdrop');
const currentTime = document.querySelector('#current-time');
const currentDate = document.querySelector('#current-date');
const navSearchForm = document.querySelector('#nav-search');
const navSearchInput = document.querySelector('#nav-search-input');
const productSearchSuggestions = document.querySelector('#product-search-suggestions');
const searchModal = document.querySelector('#search-modal');
const searchInput = document.querySelector('#product-search');
const searchStatus = document.querySelector('#search-status');
const searchResults = document.querySelector('#search-results');
const productDetailDialog = document.querySelector('#product-detail-dialog');
const productDetailContent = document.querySelector('#product-detail-content');
const productMoneyRain = document.querySelector('#product-money-rain');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  && !document.documentElement.classList.contains('android-motion-enabled');
const sizeChartDialog = document.querySelector('#size-chart-dialog');
const sizeChartImage = document.querySelector('#size-chart-image');
const sizeChartCloseButton = document.querySelector('[data-size-chart-close]');
const checkoutDialog = document.querySelector('#checkout-dialog');
const checkoutItemsContainer = document.querySelector('#checkout-items');
const checkoutTotal = document.querySelector('#checkout-total');
const checkoutCreateOrderButton = document.querySelector('#checkout-create-order');
const checkoutShowQrisButton = document.querySelector('#checkout-show-qris');
const checkoutQrisSection = document.querySelector('#checkout-qris');
const checkoutQrisAmount = document.querySelector('#checkout-qris-amount');
const checkoutQrisImage = document.querySelector('#checkout-qris-image');
const checkoutWhatsAppLink = document.querySelector('#checkout-whatsapp-link');
const storeVideoPlayer = document.querySelector('#store-video-player');
const storeVideoEmpty = document.querySelector('#store-video-empty');
const adminOrderList = document.querySelector('#admin-order-list');
const adminOrdersEmpty = document.querySelector('#admin-orders-empty');
const isAndroid = /Android/i.test(navigator.userAgent);
document.documentElement.classList.toggle('android-device', isAndroid);
const cartButton = document.querySelector('#cart-open');
const cartPopover = document.querySelector('#cart-popover');
const cartCount = document.querySelector('#cart-count');
const cartItemCount = document.querySelector('#cart-item-count');
const cartTotal = document.querySelector('#cart-total');
const cartPopoverCount = document.querySelector('#cart-popover-count');
const cartItemsContainer = document.querySelector('#cart-items');
const cartPopoverTotal = document.querySelector('#cart-popover-total');
const checkoutButton = document.querySelector('#checkout-button');
const adminOpenButton = document.querySelector('#admin-open');
const adminPanel = document.querySelector('#admin-panel');
const adminQrisPanel = document.querySelector('#admin-qris-panel');
const adminQrisOpenButton = document.querySelector('#admin-qris-open');
const adminQrisCloseButtons = [...document.querySelectorAll('[data-admin-qris-close]')];
const adminStoreVideoPanel = document.querySelector('#admin-store-video-panel');
const adminStoreVideoOpenButton = document.querySelector('#admin-store-video-open');
const adminStoreVideoCloseButtons = [...document.querySelectorAll('[data-admin-store-video-close]')];
const adminLoginDialog = document.querySelector('#admin-login-dialog');
const adminLoginForm = document.querySelector('#admin-login-form');
const adminLoginEmail = document.querySelector('#admin-login-email');
const adminLoginPassword = document.querySelector('#admin-login-password');
const adminLoginPasswordToggle = document.querySelector('#admin-login-password-toggle');
const adminLoginError = document.querySelector('#admin-login-error');
const adminLoginSubmit = document.querySelector('#admin-login-submit');
const adminLogoutButton = document.querySelector('#admin-logout');
const adminCloseButtons = [...document.querySelectorAll('[data-admin-close]')];
const adminProductImageInput = document.querySelector('#admin-product-images');
const adminProductImagePreviews = document.querySelector('#admin-product-image-previews');
const adminProductImageStatus = document.querySelector('#admin-product-image-status');
const adminProductSizeChartInput = document.querySelector('#admin-product-size-chart');
const adminProductSizeChartPreview = document.querySelector('#admin-product-size-chart-preview');
const adminProductSizeChartRemoveButton = document.querySelector('#admin-product-size-chart-remove');
const adminProductSizeChartStatus = document.querySelector('#admin-product-size-chart-status');
const adminProductForm = document.querySelector('[data-admin-form="product"]');
const adminProductColorStockFields = document.querySelector('#admin-product-color-stock-fields');
const adminProductSubmit = adminProductForm.querySelector('button[type="submit"]');
const adminProductPreviewButton = document.querySelector('#admin-product-preview');
const adminProductCancelEdit = document.querySelector('#admin-product-cancel-edit');
const adminCategoryStatus = document.querySelector('#admin-category-status');
const feedbackNameInput = document.querySelector('#feedback-name');
const feedbackMessageInput = document.querySelector('#feedback-message');
const feedbackNote = document.querySelector('.feedback-note');
const feedbackSubmitButton = document.querySelector('#feedback-submit');
const adminQrisForm = document.querySelector('#admin-qris-form');
const adminQrisImageInput = document.querySelector('#admin-qris-image');
const adminQrisPreviewImage = document.querySelector('#admin-qris-preview-image');
const adminQrisStatus = document.querySelector('#admin-qris-status');
const adminQrisSaveButton = document.querySelector('#admin-qris-save');
const adminStoreVideoForm = document.querySelector('#admin-store-video-form');
const adminStoreVideoInput = document.querySelector('#admin-store-video-file');
const adminStoreVideoPreview = document.querySelector('#admin-store-video-preview');
const adminStoreVideoEmpty = document.querySelector('#admin-store-video-empty');
const adminStoreVideoStatus = document.querySelector('#admin-store-video-status');
const adminStoreVideoSaveButton = document.querySelector('#admin-store-video-save');
const adminProductImageObjectUrls = new Map();
let adminProductSizeChartObjectUrl = null;
let adminProductRemoveSizeChart = false;
const actionNotice = document.querySelector('#action-notice');
const wishlistButton = document.querySelector('#wishlist-open');
const wishlistCount = document.querySelector('#wishlist-count');
const wishlistIcon = wishlistButton.querySelector('.emoji-icon');
const productGrid = document.querySelector('#product-grid');
const productResultCount = document.querySelector('#product-result-count');
const productEmpty = document.querySelector('#product-empty');
const productFilterList = document.querySelector('.product-filters');
const builtInProductFilterButtons = [...document.querySelectorAll('.product-filter')];
const adminCategoryForm = document.querySelector('[data-admin-form="category"]');
const adminCategorySubmit = adminCategoryForm.querySelector('button[type="submit"]');

const cartStorageKey = 'redx-cart';
const wishlistStorageKey = 'redx-wishlist';
const SUPABASE_PRODUCT_BUCKET = 'product-images';
const SUPABASE_QRIS_BUCKET = 'qris-images';
const SUPABASE_STORE_VIDEO_BUCKET = 'store-videos';
const SUPABASE_SIZE_CHART_BUCKET = 'size-chart-images';
const DEFAULT_QRIS_IMAGE = 'assets/images/qris-code.png';
const MAX_PRODUCT_IMAGES = 10;
const MAX_PRODUCT_SLOTS = 20;
const adminSessionStorageKey = 'redx-admin-preview-session';
const savedAdminSessionState = JSON.parse(sessionStorage.getItem(adminSessionStorageKey) || '{}');
let adminPreviewAuthenticated = false;
let adminProductEditingId = null;
let adminProductSelectedFiles = [];
let adminProductRemovedImageIndexes = new Set();
let adminProductStockByColor = {};
let adminProductBaseColors = [];
const adminProductDetectedColorsByFile = new Map();
let adminImageSelectionVersion = 0;
let qrisImageObjectUrl = null;
let savedQrisImagePath = null;
let storeVideoObjectUrl = null;
let savedStoreVideoPath = null;
const adminProductPreviewDatabaseName = 'redx-admin-product-preview';
const adminProductPreviewStoreName = 'products';
const adminCategoryPreviewStoreName = 'categories';
const adminOrderPreviewStoreName = 'orders';
let adminProductPreviewDatabase;
let adminOrderImageObjectUrls = [];
const adminPreviewCategories = [];
const catalogProducts = [
  {
    id: 'afterhours-oversized',
    name: 'Afterhours Oversized Tee',
    category: 'oversized',
    categoryLabel: 'OVERSIZED TEE',
    badge: 'HOT',
    price: 249000,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Kaos streetwear putih dengan potongan relaxed',
    colors: ['bone', 'black', 'red']
  },
  {
    id: 'signal-graphic-tee',
    name: 'Signal Graphic Tee',
    category: 'graphic',
    categoryLabel: 'GRAPHIC TEE',
    badge: 'NEW',
    price: 279000,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Kaos grafis streetwear dipadukan dengan outfit urban',
    colors: ['black', 'bone', 'olive']
  },
  {
    id: 'uniform-basic-tee',
    name: 'Uniform Heavyweight Tee',
    category: 'basic',
    categoryLabel: 'BASIC / 240 GSM',
    badge: '',
    price: 199000,
    image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Kaos basic heavyweight untuk streetwear sehari-hari',
    colors: ['black', 'bone', 'blue']
  },
  {
    id: 'static-oversized-tee',
    name: 'Static Oversized Tee',
    category: 'oversized',
    categoryLabel: 'OVERSIZED TEE',
    badge: 'NEW',
    price: 259000,
    image: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Kaos hitam oversized dengan styling minimal',
    colors: ['black', 'olive', 'red']
  },
  {
    id: 'no-signal-graphic-tee',
    name: 'No Signal Graphic Tee',
    category: 'graphic',
    categoryLabel: 'GRAPHIC TEE',
    badge: 'HOT',
    price: 289000,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Kaos grafis streetwear dengan siluet santai',
    colors: ['black', 'bone', 'blue']
  },
  {
    id: 'daily-rotation-basic',
    name: 'Daily Rotation Tee',
    category: 'basic',
    categoryLabel: 'BASIC / 240 GSM',
    badge: '',
    price: 189000,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85&sat=-35',
    imageAlt: 'Kaos basic dengan bahan tebal dan potongan santai',
    colors: ['black', 'bone']
  },
  {
    id: 'riot-oversized-tee',
    name: 'Riot Oversized Tee',
    category: 'oversized',
    categoryLabel: 'OVERSIZED TEE',
    badge: 'NEW',
    price: 269000,
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Kaos oversized untuk tampilan streetwear urban',
    colors: ['black', 'bone', 'olive']
  },
  {
    id: 'off-grid-graphic-tee',
    name: 'Off Grid Graphic Tee',
    category: 'graphic',
    categoryLabel: 'GRAPHIC TEE',
    badge: 'HOT',
    price: 299000,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'T-shirt streetwear dengan grafis bold',
    colors: ['black', 'red', 'bone']
  },
  {
    id: 'core-daily-basic',
    name: 'Core Daily Basic',
    category: 'basic',
    categoryLabel: 'BASIC / 240 GSM',
    badge: '',
    price: 179000,
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Kaos basic bersih untuk outfit harian',
    colors: ['black', 'bone', 'blue']
  },
  {
    id: 'riot-washed-oversized',
    name: 'Riot Washed Oversized',
    category: 'oversized',
    categoryLabel: 'OVERSIZED TEE',
    badge: '',
    price: 279000,
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Model memakai kaos oversized bergaya urban',
    colors: ['black', 'olive', 'red']
  },
  {
    id: 'signal-flare-graphic',
    name: 'Signal Flare Graphic',
    category: 'graphic',
    categoryLabel: 'GRAPHIC TEE',
    badge: 'NEW',
    price: 289000,
    image: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Kaos grafis dengan paduan warna streetwear',
    colors: ['black', 'bone', 'red']
  },
  {
    id: 'field-notes-basic',
    name: 'Field Notes Basic Tee',
    category: 'basic',
    categoryLabel: 'BASIC / 240 GSM',
    badge: '',
    price: 189000,
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Kaos basic streetwear berpotongan santai',
    colors: ['black', 'bone']
  },
  {
    id: 'night-shift-oversized',
    name: 'Night Shift Oversized',
    category: 'oversized',
    categoryLabel: 'OVERSIZED TEE',
    badge: 'HOT',
    price: 299000,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Streetwear gelap dengan siluet relaxed',
    colors: ['black', 'red', 'olive']
  },
  {
    id: 'afterhours-print-tee',
    name: 'Afterhours Print Tee',
    category: 'graphic',
    categoryLabel: 'GRAPHIC TEE',
    badge: '',
    price: 269000,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Kaos grafis streetwear dengan warna kontras',
    colors: ['black', 'bone', 'blue']
  },
  {
    id: 'standard-issue-basic',
    name: 'Standard Issue Tee',
    category: 'basic',
    categoryLabel: 'BASIC / 240 GSM',
    badge: 'NEW',
    price: 199000,
    image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Kaos basic heavyweight dalam styling minimal',
    colors: ['black', 'bone', 'blue']
  }
];
catalogProducts.splice(0);
const demoProductGalleryImages = [...new Map(catalogProducts.map((product) => [
  product.image.split('?')[0],
  product.image
])).values()]
  .slice(0, MAX_PRODUCT_IMAGES);
catalogProducts.forEach((product) => {
  product.images = [
    product.image,
    ...demoProductGalleryImages.filter((image) => image !== product.image)
  ].slice(0, MAX_PRODUCT_IMAGES);
  product.demoGallery = true;
});
const demoProductColorImageIndexes = {
  'afterhours-oversized': { bone: 0, black: 1, red: 0 },
  'signal-graphic-tee': { black: 0, bone: 1, olive: 0 }
};
catalogProducts.forEach((product) => {
  product.colorImageIndexes = demoProductColorImageIndexes[product.id] || {};
});
const productColors = {
  black: 'Black',
  bone: 'White',
  red: 'Red',
  olive: 'Olive',
  blue: 'Blue'
};
const builtInProductColors = { ...productColors };
const productColorSwatches = {
  black: '#171717',
  bone: '#e6dece',
  red: '#9e2327',
  olive: '#626344',
  blue: '#455a70'
};
const productSizes = ['S', 'M', 'L', 'XL'];
let lastFocusedElement = null;
let noticeTimer;
let cartItems = loadCart();
let previewOrders = [];
let wishlistItems = loadWishlist();
let activeProductFilter = 'all';
let activeProductQuery = '';
const selectedProductOptions = new Map();

function updateNavbar() {
  navbar.classList.toggle('is-scrolled', window.scrollY > 24);
}

let navbarUpdateScheduled = false;

function scheduleNavbarUpdate() {
  if (!isAndroid) {
    updateNavbar();
    return;
  }

  if (navbarUpdateScheduled) return;
  navbarUpdateScheduled = true;
  window.requestAnimationFrame(() => {
    navbarUpdateScheduled = false;
    updateNavbar();
  });
}

function updateClock() {
  const now = new Date();
  currentTime.textContent = new Intl.DateTimeFormat('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23'
  }).format(now);
  currentTime.dateTime = now.toISOString();
  currentDate.textContent = new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(now);
  currentDate.dateTime = now.toISOString();
}

function moveIndicator(target) {
  if (!target || !desktopNav || !navIndicator) return;
  const navBounds = desktopNav.getBoundingClientRect();
  const targetBounds = target.getBoundingClientRect();
  navIndicator.style.left = `${targetBounds.left - navBounds.left}px`;
  navIndicator.style.width = `${targetBounds.width}px`;
  navIndicator.classList.add('is-visible');
}

function resetIndicator() {
  moveIndicator(desktopNav?.querySelector('.nav-link.is-current') || navLinks[0]);
}

function alignMobileMenuWithDate() {
  const dateItem = document.querySelector('.header-date-item');
  if (!dateItem || window.innerWidth > 1023) {
    mobileMenu.style.removeProperty('left');
    mobileMenu.style.removeProperty('right');
    mobileMenu.style.removeProperty('width');
    return;
  }

  const dateBounds = dateItem.getBoundingClientRect();
  const left = Math.max(16, Math.min(dateBounds.left, window.innerWidth - 16));
  const width = Math.min(dateBounds.width, window.innerWidth - left - 16);
  mobileMenu.style.left = `${left}px`;
  mobileMenu.style.right = 'auto';
  mobileMenu.style.width = `${width}px`;
}

function setMobileMenu(open) {
  if (open) alignMobileMenuWithDate();
  document.body.classList.toggle('menu-open', open);
  menuButton.classList.toggle('is-active', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
  mobileMenu.setAttribute('aria-hidden', String(!open));
  mobileMenu.inert = !open;
  mobileBackdrop.setAttribute('aria-hidden', String(!open));
  if (open) mobileMenu.querySelector('a')?.focus();
  else menuButton.focus();
}

function setSearch(open) {
  searchModal.classList.toggle('is-open', open);
  searchModal.setAttribute('aria-hidden', String(!open));
  searchModal.inert = !open;
  document.body.classList.toggle('search-open', open);
  if (open) {
    lastFocusedElement = document.activeElement;
    window.setTimeout(() => searchInput.focus(), 30);
  } else {
    lastFocusedElement?.focus();
  }
}

function showNotice(message) {
  actionNotice.textContent = message;
  actionNotice.classList.add('is-visible');
  window.clearTimeout(noticeTimer);
  noticeTimer = window.setTimeout(() => actionNotice.classList.remove('is-visible'), 2200);
}

function loadCart() {
  try {
    const savedItems = JSON.parse(window.localStorage.getItem(cartStorageKey) || '[]');
    if (!Array.isArray(savedItems)) return [];

    return savedItems
      .filter((item) => item && item.id && item.name && Number.isFinite(Number(item.price)) && Number(item.price) >= 0)
      .map((item) => ({
        id: String(item.id),
        name: String(item.name),
        price: Math.round(Number(item.price)),
        quantity: Math.max(1, Math.floor(Number(item.quantity) || 1)),
        color: item.color ? String(item.color) : '',
        size: item.size ? String(item.size) : '',
        image: item.image ? String(item.image) : '',
        imageAlt: item.imageAlt ? String(item.imageAlt) : String(item.name)
      }));
  } catch {
    return [];
  }
}

function getCartQuantity() {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}

function formatRupiah(amount) {
  return `Rp ${Math.round(amount).toLocaleString('id-ID')}`;
}

function getSupabaseClient() {
  if (!window.rdxSupabaseClient) {
    throw new Error('Penyimpanan online belum siap. Buka website melalui Live Server atau hosting dan muat ulang halaman.');
  }
  return window.rdxSupabaseClient;
}

function getProductImageUrl(image) {
  if (/^https?:\/\//i.test(image)) return image;
  return getSupabaseClient().storage.from(SUPABASE_PRODUCT_BUCKET).getPublicUrl(image).data.publicUrl;
}

function getQrisImageUrl(imagePath) {
  if (!imagePath) return DEFAULT_QRIS_IMAGE;
  return getSupabaseClient().storage.from(SUPABASE_QRIS_BUCKET).getPublicUrl(imagePath).data.publicUrl;
}

function getSizeChartImageUrl(imagePath) {
  return getSupabaseClient().storage.from(SUPABASE_SIZE_CHART_BUCKET).getPublicUrl(imagePath).data.publicUrl;
}

async function loadQrisImageSetting() {
  const { data, error } = await getSupabaseClient()
    .from('store_settings')
    .select('value')
    .eq('key', 'qris_image_path')
    .maybeSingle();
  if (error) throw error;
  savedQrisImagePath = data?.value || null;
  const imageUrl = getQrisImageUrl(savedQrisImagePath);
  checkoutQrisImage.src = imageUrl;
  adminQrisPreviewImage.src = imageUrl;
  adminQrisStatus.textContent = savedQrisImagePath
    ? 'QRIS tersimpan online.'
    : 'QRIS bawaan sedang digunakan.';
}

function getStoreVideoUrl(videoPath) {
  if (!videoPath) return '';
  return getSupabaseClient().storage.from(SUPABASE_STORE_VIDEO_BUCKET).getPublicUrl(videoPath).data.publicUrl;
}

function resetStoreVideoAspectRatio(video) {
  const container = video.closest('.store-video');
  if (!container) return;
  container.style.removeProperty('aspect-ratio');
  container.style.removeProperty('width');
}

function syncStoreVideoAspectRatio(video) {
  const container = video.closest('.store-video');
  if (!container || !video.videoWidth || !video.videoHeight) return;
  const ratio = video.videoWidth / video.videoHeight;
  const maxWidth = Number.parseFloat(getComputedStyle(container).getPropertyValue('--video-max-width'));
  const maxHeight = Number.parseFloat(getComputedStyle(container).getPropertyValue('--video-max-height'));
  const availableWidth = container.parentElement.clientWidth;
  const width = Math.min(availableWidth, maxWidth, maxHeight * ratio);
  container.style.aspectRatio = `${video.videoWidth} / ${video.videoHeight}`;
  container.style.width = `${width}px`;
}

[storeVideoPlayer, adminStoreVideoPreview].forEach((video) => {
  video.addEventListener('loadedmetadata', () => {
    syncStoreVideoAspectRatio(video);
    video.defaultMuted = false;
    video.muted = false;
    video.volume = 1;
  });
  video.addEventListener('play', () => {
    video.defaultMuted = false;
    video.muted = false;
    video.volume = 1;
  });
});

function getStoreVideoPlaybackError(video) {
  switch (video.error?.code) {
    case 1:
      return 'Pemutaran video dibatalkan.';
    case 2:
      return 'Video gagal dimuat karena masalah jaringan.';
    case 3:
      return 'Video tidak dapat diproses. Pastikan codec video dan audio didukung browser.';
    case 4:
      return 'Format video atau alamat file tidak didukung.';
    default:
      return 'Video gagal diputar. Coba muat ulang halaman.';
  }
}

storeVideoPlayer.addEventListener('error', () => {
  if (!storeVideoPlayer.currentSrc) return;
  storeVideoPlayer.hidden = true;
  storeVideoEmpty.hidden = false;
  storeVideoEmpty.textContent = getStoreVideoPlaybackError(storeVideoPlayer);
});

adminStoreVideoPreview.addEventListener('error', () => {
  if (!adminStoreVideoPreview.currentSrc) return;
  adminStoreVideoPreview.hidden = true;
  adminStoreVideoEmpty.hidden = false;
  adminStoreVideoStatus.textContent = getStoreVideoPlaybackError(adminStoreVideoPreview);
  adminStoreVideoStatus.classList.add('is-error');
});

window.addEventListener('resize', () => {
  [storeVideoPlayer, adminStoreVideoPreview].forEach(syncStoreVideoAspectRatio);
});

function showStoreVideo(videoPath) {
  const videoUrl = getStoreVideoUrl(videoPath);
  storeVideoPlayer.pause();
  adminStoreVideoPreview.pause();
  [storeVideoPlayer, adminStoreVideoPreview].forEach((video) => {
    video.defaultMuted = false;
    video.muted = false;
    video.volume = 1;
  });
  resetStoreVideoAspectRatio(storeVideoPlayer);
  resetStoreVideoAspectRatio(adminStoreVideoPreview);
  storeVideoPlayer.hidden = !videoUrl;
  storeVideoEmpty.hidden = Boolean(videoUrl);
  adminStoreVideoPreview.hidden = !videoUrl;
  adminStoreVideoEmpty.hidden = Boolean(videoUrl);
  storeVideoEmpty.textContent = videoUrl ? 'Video toko gagal dimuat.' : 'Video toko belum tersedia.';
  adminStoreVideoEmpty.textContent = videoUrl ? 'Video toko gagal dimuat.' : 'Belum ada video toko.';
  if (videoUrl) {
    storeVideoPlayer.src = videoUrl;
    adminStoreVideoPreview.src = videoUrl;
    storeVideoPlayer.load();
    adminStoreVideoPreview.load();
  } else {
    storeVideoPlayer.removeAttribute('src');
    adminStoreVideoPreview.removeAttribute('src');
    storeVideoPlayer.load();
    adminStoreVideoPreview.load();
  }
}

async function loadStoreVideoSetting() {
  const { data, error } = await getSupabaseClient()
    .from('store_settings')
    .select('value')
    .eq('key', 'store_video_path')
    .maybeSingle();
  if (error) throw error;
  savedStoreVideoPath = data?.value || null;
  showStoreVideo(savedStoreVideoPath);
  adminStoreVideoStatus.textContent = savedStoreVideoPath
    ? 'Video toko tersimpan online.'
    : 'Belum ada video toko.';
  adminStoreVideoStatus.classList.remove('is-error');
}

function productFromSupabaseRow(row) {
  const imagePaths = Array.isArray(row.images) ? row.images : [];
  const images = imagePaths.map(getProductImageUrl);
  const sizeChartImagePath = row.size_chart_image || '';
  return {
    ...row,
    categoryLabel: row.category_label,
    colorLabels: row.color_labels || {},
    colorSwatches: row.color_swatches || {},
    stockByColor: row.stock_by_color || {},
    imagePaths,
    images,
    image: images[0] || '',
    sizeChartImagePath,
    sizeChartImage: sizeChartImagePath ? getSizeChartImageUrl(sizeChartImagePath) : '',
    imageAlt: row.description || row.name,
    demoGallery: false,
    colorImageIndexes: {}
  };
}

async function isSupabaseAdmin(user) {
  const { data, error } = await getSupabaseClient()
    .from('admin_users')
    .select('user_id')
    .eq('user_id', user.id)
    .maybeSingle();
  if (error) throw error;
  return Boolean(data);
}

function getAdminProductPreviewDatabase() {
  if (adminProductPreviewDatabase) return Promise.resolve(adminProductPreviewDatabase);
  if (!window.indexedDB) return Promise.reject(new Error('Penyimpanan lokal browser tidak tersedia.'));

  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(adminProductPreviewDatabaseName, 5);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (database.objectStoreNames.contains(adminProductPreviewStoreName)) {
        database.deleteObjectStore(adminProductPreviewStoreName);
      }
      if (!database.objectStoreNames.contains(adminCategoryPreviewStoreName)) {
        database.createObjectStore(adminCategoryPreviewStoreName, { keyPath: 'id' });
      }
      if (!database.objectStoreNames.contains(adminOrderPreviewStoreName)) {
        database.createObjectStore(adminOrderPreviewStoreName, { keyPath: 'id' });
      }
    };
    request.onsuccess = () => {
      adminProductPreviewDatabase = request.result;
      resolve(adminProductPreviewDatabase);
    };
    request.onerror = () => reject(request.error || new Error('Database preview gagal dibuka.'));
    request.onblocked = () => reject(new Error('Database preview sedang dipakai tab lain.'));
  });
}

function persistAdminSessionState(updates) {
  Object.assign(savedAdminSessionState, updates);
  sessionStorage.setItem(adminSessionStorageKey, JSON.stringify(savedAdminSessionState));
}

async function getAdminOrderPreviewRecords() {
  const { data, error } = await getSupabaseClient()
    .from('orders')
    .select('id, items, total, created_at')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data.map((order) => ({
    id: order.id,
    items: order.items,
    total: Number(order.total),
    createdAt: order.created_at
  }));
}

async function saveAdminOrderPreviewRecord(order) {
  const { error } = await getSupabaseClient()
    .from('orders')
    .insert({
      id: order.id,
      items: order.items,
      total: order.total
    });
  if (error) throw error;
}

async function getAdminCategoryPreviewRecords() {
  const database = await getAdminProductPreviewDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(adminCategoryPreviewStoreName, 'readonly');
    const request = transaction.objectStore(adminCategoryPreviewStoreName).getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('Kategori lokal gagal dibaca.'));
  });
}

async function saveAdminCategoryPreviewRecord(category) {
  const database = await getAdminProductPreviewDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(adminCategoryPreviewStoreName, 'readwrite');
    transaction.objectStore(adminCategoryPreviewStoreName).put(category);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error || new Error('Kategori gagal disimpan di browser.'));
    transaction.onabort = () => reject(transaction.error || new Error('Penyimpanan kategori dibatalkan.'));
  });
}

async function loadAdminProductPreview() {
  try {
    const { data, error } = await getSupabaseClient()
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    const demoProducts = catalogProducts.filter((product) => product.demoGallery);
    catalogProducts.splice(0, catalogProducts.length, ...demoProducts, ...data.map(productFromSupabaseRow));
    renderProductCategoryFilters();
    renderProductGrid();
    renderAdminCatalogManagement();
  } catch (error) {
    showNotice(`Produk gagal dimuat: ${error.message}`);
  }
}

async function initializeAdminPreview() {
  try {
    const client = getSupabaseClient();
    client.auth.onAuthStateChange((event, session) => {
      if (event === 'INITIAL_SESSION') return;
      adminPreviewAuthenticated = false;
      if (session?.user) {
        void isSupabaseAdmin(session.user).then((isAdmin) => {
          adminPreviewAuthenticated = isAdmin;
          updateAdminLoginButton();
          return loadAdminOrderPreviews();
        }).catch((authError) => {
          showNotice(`Status admin gagal diperiksa: ${authError.message}`);
        });
      } else {
        previewOrders = [];
        renderAdminOrderPreviews();
        updateAdminLoginButton();
      }
    });
    const { data, error } = await client.auth.getSession();
    if (error) throw error;
    const user = data.session?.user;
    adminPreviewAuthenticated = user ? await isSupabaseAdmin(user) : false;
  } catch (error) {
    adminPreviewAuthenticated = false;
    showNotice(`Koneksi penyimpanan gagal: ${error.message}`);
  }
  await loadAdminProductPreview();
  try {
    await loadQrisImageSetting();
  } catch (error) {
    adminQrisStatus.textContent = `Pengaturan QRIS gagal dimuat: ${error.message}`;
    adminQrisStatus.classList.add('is-error');
  }
  try {
    await loadStoreVideoSetting();
  } catch (error) {
    adminStoreVideoStatus.textContent = `Video toko gagal dimuat: ${error.message}`;
    adminStoreVideoStatus.classList.add('is-error');
    showNotice(`Video toko gagal dimuat: ${error.message}`);
  }
  await loadAdminCategoryPreview();
  await loadAdminOrderPreviews();
  document.querySelector('.admin-local-note').textContent = 'KATALOG TERSINKRON';
  document.querySelector('#admin-product-save-note').textContent = 'Produk dan gambar disimpan online.';
  adminProductImageStatus.textContent = 'Gambar diunggah saat produk disimpan.';
  updateAdminLoginButton();
  selectAdminTab(savedAdminSessionState.activeTab);
  if (adminPreviewAuthenticated && savedAdminSessionState.panelOpen) setAdminPanel(true);
  const lastSavedProduct = catalogProducts.find((product) =>
    product.id === savedAdminSessionState.lastSavedProductId
  );
  if (lastSavedProduct) {
    adminProductPreviewButton.dataset.productId = lastSavedProduct.id;
    adminProductPreviewButton.hidden = false;
  }
}

async function loadAdminCategoryPreview() {
  try {
    const records = await getAdminCategoryPreviewRecords();
    records.forEach((category) => {
      if (!getProductCategories().some((item) => item.id === category.id)) {
        adminPreviewCategories.push(category);
      }
    });
    renderProductCategoryFilters();
    renderProductGrid();
    renderAdminCatalogManagement();
  } catch (error) {
    showNotice(`Kategori preview lokal gagal dimuat: ${error.message}`);
  }
}

function loadWishlist() {
  try {
    const savedItems = JSON.parse(window.localStorage.getItem(wishlistStorageKey) || '[]');
    return Array.isArray(savedItems) ? [...new Set(savedItems.map(String))] : [];
  } catch {
    return [];
  }
}

function saveWishlist() {
  try {
    window.localStorage.setItem(wishlistStorageKey, JSON.stringify(wishlistItems));
  } catch {
    showNotice('Wishlist tidak dapat disimpan di browser ini.');
  }
}

function renderWishlistCount() {
  wishlistCount.textContent = String(wishlistItems.length);
  wishlistCount.hidden = wishlistItems.length === 0;
  wishlistButton.setAttribute('aria-label', `Wishlist, ${wishlistItems.length} item`);
  wishlistButton.classList.toggle('has-items', wishlistItems.length > 0);
  wishlistIcon.textContent = wishlistItems.length > 0 ? '💚' : '🤍';
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function getAvailableProductStock(product, color, size) {
  if (product.stockByColor && Object.keys(product.stockByColor).length > 0) {
    return Object.prototype.hasOwnProperty.call(product.stockByColor, color)
      ? Math.max(0, Math.floor(Number(product.stockByColor[color]) || 0))
      : undefined;
  }
  const variantStocks = product.stockByVariant;
  const variantKey = `${color}-${size}`;
  if (variantStocks && Object.keys(variantStocks).length > 0) {
    return Object.prototype.hasOwnProperty.call(variantStocks, variantKey)
      ? Math.max(0, Math.floor(Number(variantStocks[variantKey]) || 0))
      : 0;
  }
  if (product.stock === undefined || product.stock === null) return undefined;
  return Math.max(0, Math.floor(Number(product.stock) || 0));
}

function getCartVariantQuantity(productId, color, size) {
  const variantId = `${productId}-${color}-${size}`;
  return cartItems
    .filter((item) => item.id === variantId)
    .reduce((total, item) => total + item.quantity, 0);
}

function getCartColorQuantity(productId, color) {
  return cartItems
    .filter((item) => item.id.startsWith(`${productId}-${color}-`))
    .reduce((total, item) => total + item.quantity, 0);
}

function getProductStockLabel(product) {
  if (product.stockByColor && Object.keys(product.stockByColor).length > 0) {
    const allColorsOutOfStock = product.colors.every((color) =>
      Object.prototype.hasOwnProperty.call(product.stockByColor, color)
      && Number(product.stockByColor[color]) <= 0
    );
    return allColorsOutOfStock ? 'HABIS' : null;
  }
  if (product.stockByVariant && Object.keys(product.stockByVariant).length > 0) {
    return Object.values(product.stockByVariant).some((stock) => Number(stock) > 0) ? null : 'HABIS';
  }
  return product.stock !== undefined && product.stock !== null && Number(product.stock) <= 0 ? 'HABIS' : null;
}

function createProductDetail(product) {
  const availableSizes = product.sizes?.length ? product.sizes : productSizes;
  const options = selectedProductOptions.get(product.id) || { color: product.colors[0], size: 'M' };
  if (!product.colors.includes(options.color)) options.color = product.colors[0];
  if (!availableSizes.includes(options.size)) options.size = availableSizes[0];
  selectedProductOptions.set(product.id, options);

  const content = createElement('div', 'product-detail-content');
  const gallery = createElement('div', 'product-detail-gallery');
  const productImages = (product.images?.length ? product.images : [product.image]).filter(Boolean);
  let activeImageIndex = 0;
  let selectGalleryImage = () => {};
  const sizeChartButton = createElement('button', 'product-size-chart-button', 'Lihat size chart');
  sizeChartButton.type = 'button';
  sizeChartButton.hidden = !product.sizeChartImagePath;
  sizeChartButton.addEventListener('click', () => {
    const currentProduct = catalogProducts.find((item) => item.id === product.id);
    if (currentProduct?.sizeChartImage) sizeChartImage.src = currentProduct.sizeChartImage;
    sizeChartImage.hidden = !currentProduct?.sizeChartImagePath;
    sizeChartDialog.showModal();
  });
  const imageTrack = createElement('div', 'product-detail-image-track');
  imageTrack.tabIndex = 0;
  imageTrack.setAttribute('role', 'region');
  imageTrack.setAttribute('aria-label', `Galeri gambar ${product.name}. Gulir ke samping untuk melihat gambar yang bertumpuk.`);
  const imageCards = productImages.map((source, index) => {
    const card = createElement('div', 'product-detail-image-card');
    card.style.setProperty('--stack-index', String(index));
    card.dataset.imageIndex = String(index);
    const image = createElement('img', 'product-detail-image');
    image.src = source;
    image.alt = index === 0 ? (product.imageAlt || product.name) : `${product.name} · Gambar ${index + 1}`;
    image.draggable = false;
    image.loading = index === 0 ? 'eager' : 'lazy';
    card.append(image);
    imageTrack.append(card);
    return card;
  });
  gallery.append(imageTrack);
  if (productImages.length > 1) {
    const imageCounter = createElement('span', 'product-detail-image-counter', `1 / ${productImages.length}`);
    imageCounter.setAttribute('aria-live', 'polite');
    const thumbnails = createElement('div', 'product-detail-thumbnails');
    let imageCardOffsets = [];
    requestAnimationFrame(() => {
      imageCardOffsets = imageCards.map((card) => card.offsetLeft);
    });
    const updateActiveImage = (index) => {
      activeImageIndex = Math.max(0, Math.min(index, productImages.length - 1));
      imageCounter.textContent = `${activeImageIndex + 1} / ${productImages.length}`;
      thumbnails.querySelectorAll('.product-detail-thumbnail').forEach((item, itemIndex) => {
        item.setAttribute('aria-pressed', String(itemIndex === activeImageIndex));
      });
    };
    const showImage = (index) => {
      const targetIndex = (index + productImages.length) % productImages.length;
      updateActiveImage(targetIndex);
      if (imageCardOffsets.length !== productImages.length) {
        imageCardOffsets = imageCards.map((card) =>
          imageTrack.scrollLeft + card.getBoundingClientRect().left - imageTrack.getBoundingClientRect().left
        );
      }
      imageTrack.scrollTo({
        left: imageCardOffsets[targetIndex],
        behavior: 'auto'
      });
    };
    selectGalleryImage = showImage;
    imageTrack.addEventListener('scroll', () => {
      const trackLeft = imageTrack.getBoundingClientRect().left;
      let currentIndex = 0;
      imageCards.forEach((card, index) => {
        const stickyLeft = Number.parseFloat(getComputedStyle(card).left);
        const cardLeft = card.getBoundingClientRect().left - trackLeft;
        if (cardLeft <= stickyLeft + 10) currentIndex = index;
      });
      updateActiveImage(currentIndex);
    }, { passive: true });
    imageTrack.addEventListener('wheel', (event) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        imageTrack.scrollLeft += event.deltaY;
      }
    }, { passive: false });
    imageTrack.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        showImage(activeImageIndex + (event.key === 'ArrowRight' ? 1 : -1));
      }
    });
    gallery.append(imageCounter);

    productImages.forEach((imageSource, index) => {
      const thumbnail = createElement('button', 'product-detail-thumbnail');
      thumbnail.type = 'button';
      thumbnail.setAttribute('aria-label', `Lihat gambar ${index + 1} dari ${productImages.length}`);
      thumbnail.setAttribute('aria-pressed', String(index === 0));
      const thumbnailImage = createElement('img');
      thumbnailImage.src = imageSource;
      thumbnailImage.alt = '';
      thumbnailImage.loading = 'lazy';
      thumbnail.append(thumbnailImage);
      thumbnail.addEventListener('click', () => showImage(index));
      thumbnails.append(thumbnail);
    });
    gallery.append(thumbnails);
  }
  gallery.append(sizeChartButton);
  content.append(gallery);

  const info = createElement('div', 'product-detail-info');
  info.append(createElement('p', 'product-category', product.categoryLabel));

  const nameRow = createElement('div', 'product-name-row');
  const title = createElement('h2', 'product-name', product.name);
  title.id = 'product-detail-title';
  nameRow.append(title);
  nameRow.append(createElement('strong', 'product-price', formatRupiah(product.price)));
  info.append(nameRow, createElement('p', 'product-description', product.description || product.imageAlt || product.name));

  const optionsWrapper = createElement('div', 'product-options');
  const colorGroup = createElement('div', 'product-color-group');
  const colorLabel = createElement('div', 'product-option-label');
  colorLabel.append(createElement('span', '', 'Warna'));
  const selectedColorName = createElement('span', '', getProductColorLabel(product, options.color));
  const selectedColorStock = createElement('span', 'product-color-stock');
  colorLabel.append(selectedColorName);
  colorLabel.append(selectedColorStock);
  colorGroup.append(colorLabel);

  const swatches = createElement('div', 'product-color-list');
  product.colors.forEach((color) => {
    const swatch = createElement('button', 'product-swatch');
    swatch.type = 'button';
    swatch.dataset.color = color;
    swatch.setAttribute('aria-label', getProductColorLabel(product, color));
    swatch.style.backgroundColor = getProductColorSwatch(product, color);
    swatch.setAttribute('aria-pressed', String(options.color === color));
    swatch.addEventListener('click', () => {
      options.color = color;
      selectedColorName.textContent = getProductColorLabel(product, color);
      swatches.querySelectorAll('.product-swatch').forEach((item) => {
        item.setAttribute('aria-pressed', String(item === swatch));
      });
      const colorImageIndex = product.colorImageIndexes?.[color];
      if (Number.isInteger(colorImageIndex) && colorImageIndex < productImages.length) {
        selectGalleryImage(colorImageIndex);
      }
      updateStockState();
    });
    swatches.append(swatch);
  });
  const initialColorImageIndex = product.colorImageIndexes?.[options.color];
  if (Number.isInteger(initialColorImageIndex) && initialColorImageIndex < productImages.length) {
    selectGalleryImage(initialColorImageIndex);
  }
  colorGroup.append(swatches);
  optionsWrapper.append(colorGroup);

  const sizeGroup = createElement('div', 'product-size-group');
  const sizeLabel = createElement('div', 'product-option-label');
  sizeLabel.append(createElement('span', '', 'Ukuran'));
  const selectedSizeLabel = createElement('span', '', options.size);
  sizeLabel.append(selectedSizeLabel);
  sizeGroup.append(sizeLabel);

  const sizeList = createElement('div', 'product-size-list');
  const addButton = createElement('button', 'product-add');
  addButton.type = 'button';
  const addButtonLabel = createElement('span', '');
  addButton.append(addButtonLabel);
  addButton.append(createElement('span', 'emoji-icon', '🛒'));
  const updateStockState = () => {
    const stock = getAvailableProductStock(product, options.color, options.size);
    const soldOut = stock === 0;
    const alreadyInCart = product.stockByColor
      ? getCartColorQuantity(product.id, options.color)
      : getCartVariantQuantity(product.id, options.color, options.size);
    const limitReached = stock !== undefined && alreadyInCart >= stock;
    addButton.disabled = soldOut || limitReached;
    addButton.classList.toggle('is-sold-out', soldOut);
    addButtonLabel.textContent = soldOut ? 'Stok Habis' : limitReached ? 'Stok sudah di keranjang' : 'Masuk Keranjang';
    selectedColorStock.textContent = stock === undefined ? '' : `Stok: ${Math.max(0, stock - alreadyInCart)}`;
    sizeList.querySelectorAll('.product-size').forEach((button) => {
      const sizeStock = getAvailableProductStock(product, options.color, button.textContent);
      button.disabled = sizeStock === 0;
    });
    swatches.querySelectorAll('.product-swatch').forEach((button) => {
      const hasStockForColor = availableSizes.some((availableSize) =>
        getAvailableProductStock(product, button.dataset.color, availableSize) !== 0
      );
      button.disabled = !hasStockForColor;
    });
  };
  availableSizes.forEach((size) => {
    const sizeButton = createElement('button', 'product-size', size);
    sizeButton.type = 'button';
    sizeButton.setAttribute('aria-pressed', String(options.size === size));
    sizeButton.addEventListener('click', () => {
      options.size = size;
      selectedSizeLabel.textContent = size;
      sizeList.querySelectorAll('.product-size').forEach((item) => {
        item.setAttribute('aria-pressed', String(item === sizeButton));
      });
      updateStockState();
    });
    sizeList.append(sizeButton);
  });
  sizeGroup.append(sizeList);
  optionsWrapper.append(sizeGroup);
  info.append(optionsWrapper);

  addButton.addEventListener('click', () => {
    const stock = getAvailableProductStock(product, options.color, options.size);
    if (stock === 0 || (stock !== undefined && getCartVariantQuantity(product.id, options.color, options.size) >= stock)) {
      showNotice('Stok produk habis.');
      updateStockState();
      return;
    }
    const added = addRedxToCart({
      id: `${product.id}-${options.color}-${options.size}`,
      name: product.name,
      price: product.price,
      quantity: 1,
      color: getProductColorLabel(product, options.color),
      size: options.size,
      image: imageCards[activeImageIndex]?.querySelector('img')?.src || product.image,
      imageAlt: product.imageAlt || product.name,
      ...(stock === undefined ? {} : { stock })
    });
    if (added) productDetailDialog.close();
  });
  updateStockState();
  info.append(addButton);
  content.append(info);
  return content;
}

function startProductMoneyRain() {
  productMoneyRain.replaceChildren();
  if (reduceMotion) return;

  for (let index = 0; index < 12; index += 1) {
    const bill = createElement('span', 'product-money-bill', '💵');
    bill.style.left = `${Math.random() * 100}%`;
    const duration = 9 + Math.random() * 6;
    bill.style.setProperty('--fall-duration', `${duration}s`);
    bill.style.setProperty('--fall-delay', `${Math.random() * -duration}s`);
    bill.style.setProperty('--fall-drift', `${Math.round(Math.random() * 120 - 60)}px`);
    bill.style.fontSize = `${21 + Math.round(Math.random() * 9)}px`;
    productMoneyRain.append(bill);
  }
}

function createProductCard(product) {
  const card = createElement('article', 'product-card');
  card.dataset.productId = product.id;
  const media = createElement('div', 'product-media');
  const image = createElement('img');
  image.src = product.image;
  image.alt = product.imageAlt;
  image.loading = 'lazy';
  media.append(image);

  if (getProductStockLabel(product) === 'HABIS') {
    media.append(createElement('span', 'product-badge is-sold-out', 'HABIS'));
  } else if (product.badge) {
    const badge = createElement('span', `product-badge${product.badge === 'HOT' ? ' is-hot' : ''}`, product.badge);
    media.append(badge);
  }

  const wishlist = createElement('button', `product-wishlist${wishlistItems.includes(product.id) ? ' is-saved' : ''}`);
  wishlist.type = 'button';
  wishlist.setAttribute('aria-label', wishlistItems.includes(product.id) ? 'Hapus dari wishlist' : 'Tambah ke wishlist');
  wishlist.setAttribute('aria-pressed', String(wishlistItems.includes(product.id)));
  const heart = createElement('span', 'emoji-icon', wishlistItems.includes(product.id) ? '💚' : '🤍');
  heart.setAttribute('aria-hidden', 'true');
  wishlist.append(heart);
  wishlist.addEventListener('click', () => {
    wishlistItems = wishlistItems.includes(product.id)
      ? wishlistItems.filter((id) => id !== product.id)
      : [...wishlistItems, product.id];
    saveWishlist();
    renderWishlistCount();
    renderProductGrid();
    showNotice(wishlistItems.includes(product.id) ? 'Produk ditambahkan ke wishlist.' : 'Produk dihapus dari wishlist.');
  });
  media.append(wishlist);
  card.append(media);

  const details = createElement('div', 'product-details');
  details.append(createElement('p', 'product-category', product.categoryLabel));

  const nameRow = createElement('div', 'product-name-row');
  nameRow.append(createElement('h3', 'product-name', product.name));
  nameRow.append(createElement('strong', 'product-price', formatRupiah(product.price)));
  details.append(nameRow);

  const detailButton = createElement('button', 'product-detail-toggle');
  detailButton.type = 'button';
  detailButton.append(createElement('span', '', 'Detail'), createElement('span', 'emoji-icon', '＋'));
  detailButton.addEventListener('click', () => {
    const scrollPosition = window.scrollY;
    productDetailContent.replaceChildren(createProductDetail(product));
    startProductMoneyRain();
    productDetailDialog.showModal();
    window.requestAnimationFrame(() => {
      const cardBounds = card.getBoundingClientRect();
      const dialogBounds = productDetailDialog.getBoundingClientRect();
      const maxLeft = Math.max(16, window.innerWidth - dialogBounds.width - 16);
      const maxTop = Math.max(16, window.innerHeight - dialogBounds.height - 16);
      const desiredLeft = cardBounds.left + (cardBounds.width - dialogBounds.width) / 2;
      const desiredTop = cardBounds.top + (cardBounds.height - dialogBounds.height) / 2;
      productDetailDialog.style.left = `${Math.min(Math.max(desiredLeft, 16), maxLeft)}px`;
      productDetailDialog.style.top = `${Math.min(Math.max(desiredTop, 16), maxTop)}px`;
      window.scrollTo({ top: scrollPosition, left: 0, behavior: 'instant' });
    });
  });
  details.append(detailButton);
  card.append(details);
  return card;
}

function createEmptyProductSlot(slotIndex) {
  const slot = createElement('button', 'product-slot-empty');
  const slotNumber = String(slotIndex + 1).padStart(2, '0');
  slot.type = 'button';
  slot.setAttribute('aria-label', `Upload produk untuk slot ${slotNumber}`);

  const media = createElement('span', 'product-slot-media');
  media.append(createElement('span', 'product-slot-plus', '+'));
  const label = createElement('span', 'product-slot-label');
  label.append(createElement('span', '', 'SLOT'), createElement('span', '', slotNumber));
  slot.append(media, label);
  slot.addEventListener('click', () => {
    selectAdminTab('products');
    adminOpenButton.click();
  });
  return slot;
}

function getStorefrontProducts() {
  return catalogProducts.filter((product) => !product.demoGallery);
}

function renderProductGrid() {
  const query = activeProductQuery.toLocaleLowerCase('id');
  const filteredProducts = getStorefrontProducts().filter((product) => {
    const categoryMatches = activeProductFilter === 'all' || product.category === activeProductFilter;
    const queryMatches = !query || `${product.name} ${product.categoryLabel}`.toLocaleLowerCase('id').includes(query);
    return categoryMatches && queryMatches;
  });

  const visibleProducts = filteredProducts.slice(0, MAX_PRODUCT_SLOTS);
  const productSlots = Array.from({ length: MAX_PRODUCT_SLOTS }, (_, index) =>
    visibleProducts[index] ? createProductCard(visibleProducts[index]) : createEmptyProductSlot(index)
  );
  productGrid.replaceChildren(...productSlots);
  productResultCount.textContent = `${visibleProducts.length} / ${MAX_PRODUCT_SLOTS}`;
  productEmpty.textContent = activeProductQuery
    ? `Tidak ada produk yang cocok dengan “${activeProductQuery}”.`
    : 'Tidak ada produk di kategori ini.';
  productEmpty.hidden = filteredProducts.length > 0 || (activeProductFilter === 'all' && !query);
}

function findProductCard(productId) {
  return productGrid.querySelector(`[data-product-id="${CSS.escape(productId)}"]`);
}

function setActiveProductFilter(filterId) {
  activeProductFilter = filterId;
  productFilterList.querySelectorAll('.product-filter').forEach((button) => {
    const active = button.dataset.productFilter === filterId;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  renderProductGrid();
}

function getProductCategories() {
  const builtInCategories = builtInProductFilterButtons
    .filter((button) => button.dataset.productFilter !== 'all')
    .map((button) => ({
      id: button.dataset.productFilter,
      name: button.textContent.trim()
    }));
  const productCategories = catalogProducts
    .filter((product) => !product.demoGallery)
    .map((product) => ({ id: product.category, name: product.categoryLabel }));
  return [...new Map([...builtInCategories, ...adminPreviewCategories, ...productCategories]
    .map((category) => [category.id, category])).values()];
}

function renderProductCategoryFilters() {
  const allButton = productFilterList.querySelector('[data-product-filter="all"]');
  productFilterList.replaceChildren(allButton);
  getProductCategories().forEach((category) => {
    const button = createElement('button', 'product-filter', category.name);
    button.type = 'button';
    button.dataset.productFilter = category.id;
    button.setAttribute('aria-pressed', String(activeProductFilter === category.id));
    button.classList.toggle('is-active', activeProductFilter === category.id);
    productFilterList.append(button);
  });
  if (!getProductCategories().some((category) => category.id === activeProductFilter) && activeProductFilter !== 'all') {
    activeProductFilter = 'all';
  }
  const activeButton = productFilterList.querySelector(`[data-product-filter="${activeProductFilter}"]`);
  activeButton?.classList.add('is-active');
  activeButton?.setAttribute('aria-pressed', 'true');
}

function renderAdminCatalogManagement() {
  const productList = document.querySelector('#admin-product-list');
  const categoryList = document.querySelector('#admin-category-list');
  const productCategorySelect = document.querySelector('#admin-product-category');
  const categories = getProductCategories();

  productCategorySelect.replaceChildren(createElement('option', '', 'Pilih kategori'));
  productCategorySelect.firstElementChild.value = '';
  categories.forEach((category) => {
    const option = createElement('option', '', category.name);
    option.value = category.id;
    productCategorySelect.append(option);
  });

  productList.replaceChildren();
  const uploadedProducts = catalogProducts.filter((product) => !product.demoGallery);
  if (uploadedProducts.length === 0) {
    productList.append(createElement('p', 'admin-form-note', 'Belum ada produk yang diupload.'));
  }
  uploadedProducts.forEach((product) => {
    const row = createElement('div', 'admin-catalog-row');
    const image = createElement('img', 'admin-catalog-product-image');
    image.src = product.image;
    image.alt = product.imageAlt || product.name;
    image.loading = 'lazy';
    const details = createElement('div', 'admin-catalog-row-info');
    details.append(
      createElement('strong', '', product.name),
      createElement('small', '', `${product.categoryLabel} · ${formatRupiah(product.price)}`)
    );
    const actions = createElement('div', 'admin-catalog-actions');
    const editButton = createElement('button', 'admin-catalog-action', 'Edit');
    editButton.type = 'button';
    editButton.addEventListener('click', () => beginAdminProductEdit(product));
    const deleteButton = createElement('button', 'admin-catalog-action is-danger', 'Hapus');
    deleteButton.type = 'button';
    deleteButton.disabled = false;
    deleteButton.addEventListener('click', async () => {
      if (!window.confirm(`Hapus produk "${product.name}" dari katalog online?`)) return;
      deleteButton.disabled = true;
      try {
        const { error } = await getSupabaseClient()
          .from('products')
          .delete()
          .eq('id', product.id);
        if (error) throw error;
        const index = catalogProducts.findIndex((item) => item.id === product.id);
        if (index !== -1) catalogProducts.splice(index, 1);
        const imagePaths = (product.imagePaths || []).filter((image) => !/^https?:\/\//i.test(image));
        let cleanupWarning = '';
        if (imagePaths.length > 0) {
          const { error: storageError } = await getSupabaseClient()
            .storage.from(SUPABASE_PRODUCT_BUCKET).remove(imagePaths);
          if (storageError) {
            cleanupWarning = ` Gambar gagal dihapus: ${storageError.message}`;
          }
        }
        if (product.sizeChartImagePath) {
          const { error: sizeChartStorageError } = await getSupabaseClient()
            .storage.from(SUPABASE_SIZE_CHART_BUCKET).remove([product.sizeChartImagePath]);
          if (sizeChartStorageError) {
            cleanupWarning += ` Size chart gagal dihapus: ${sizeChartStorageError.message}`;
          }
        }
        renderProductGrid();
        renderAdminCatalogManagement();
        showNotice(`${product.name} dihapus dari katalog online.${cleanupWarning}`);
      } catch (error) {
        deleteButton.disabled = false;
        showNotice(`Produk gagal dihapus: ${error.message}`);
      }
    });
    actions.append(editButton, deleteButton);
    row.append(image, details, actions);
    productList.append(row);
  });

  categoryList.replaceChildren();
  categories.forEach((category) => {
    const row = createElement('div', 'admin-catalog-row');
    const details = createElement('div', 'admin-catalog-row-info');
    details.append(
      createElement('strong', '', category.name),
      createElement('small', '', category.id)
    );
    const deleteButton = createElement('button', 'admin-catalog-action is-danger', 'Hapus');
    deleteButton.type = 'button';
    deleteButton.disabled = true;
    row.append(details, deleteButton);
    categoryList.append(row);
  });
}

function renderAdminOrderPreviews() {
  adminOrderImageObjectUrls.forEach((imageUrl) => URL.revokeObjectURL(imageUrl));
  adminOrderImageObjectUrls = [];
  adminOrderList.replaceChildren();
  adminOrdersEmpty.hidden = previewOrders.length > 0;

  [...previewOrders].sort((first, second) => second.createdAt.localeCompare(first.createdAt)).forEach((order) => {
    const card = createElement('article', 'admin-order-card');
    const heading = createElement('div', 'admin-order-heading');
    const orderInfo = createElement('div', 'admin-order-id');
    orderInfo.append(
      createElement('strong', '', order.id),
      createElement('small', '', new Date(order.createdAt).toLocaleString('id-ID'))
    );
    heading.append(orderInfo, createElement('span', 'admin-draft-badge', 'ONLINE'));
    card.append(heading);

    order.items.forEach((item) => {
      const row = createElement('div', 'admin-order-item');
      if (item.imageBlob || item.image) {
        const image = createElement('img', 'admin-order-product-image');
        image.src = item.imageBlob ? URL.createObjectURL(item.imageBlob) : item.image;
        if (item.imageBlob) adminOrderImageObjectUrls.push(image.src);
        image.alt = item.imageAlt || item.name;
        image.loading = 'lazy';
        row.append(image);
      }

      const details = createElement('div', 'admin-order-item-info');
      details.append(
        createElement('strong', '', item.name),
        createElement('small', '', `${formatRupiah(item.price)} / pcs`),
        createElement('small', '', `Jumlah: ${item.quantity} pcs`),
        createElement('small', '', `Ukuran: ${item.size || 'Belum dipilih'}`)
      );
      if (item.color) details.append(createElement('small', '', `Warna: ${item.color}`));
      const subtotal = createElement('strong', 'admin-order-subtotal', formatRupiah(item.price * item.quantity));
      row.append(details, subtotal);
      card.append(row);
    });

    const total = createElement('div', 'admin-order-total');
    total.append(createElement('span', '', 'Total pesanan'), createElement('strong', '', formatRupiah(order.total)));
    card.append(total);
    adminOrderList.append(card);
  });
}

async function loadAdminOrderPreviews() {
  if (!adminPreviewAuthenticated) {
    previewOrders = [];
    renderAdminOrderPreviews();
    return;
  }
  try {
    previewOrders = await getAdminOrderPreviewRecords();
    renderAdminOrderPreviews();
  } catch (error) {
    showNotice(`Pesanan gagal dimuat: ${error.message}`);
  }
}

async function createAdminOrderPreview() {
  if (cartItems.length === 0) return false;
  checkoutCreateOrderButton.disabled = true;
  checkoutCreateOrderButton.textContent = 'Menyimpan pesanan...';

  try {
    const items = await Promise.all(cartItems.map(async (item) => {
      const orderItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        color: item.color,
        size: item.size,
        image: item.image,
        imageAlt: item.imageAlt
      };
      if (item.image?.startsWith('blob:')) {
        orderItem.image = '';
      }
      return orderItem;
    }));

    const order = {
      id: `RDX-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      items,
      total: items.reduce((total, item) => total + item.price * item.quantity, 0)
    };
    await saveAdminOrderPreviewRecord(order);
    if (adminPreviewAuthenticated) {
      previewOrders.unshift(order);
      renderAdminOrderPreviews();
    }
    cartItems = [];
    saveCart();
    renderCart();
    checkoutDialog.close();
    showNotice('Pesanan tersimpan permanen. WhatsApp akan dibuka untuk mengirim bukti pembayaran.');
    return true;
  } catch (error) {
    showNotice(`Pesanan gagal disimpan: ${error.message}`);
    return false;
  } finally {
    checkoutCreateOrderButton.disabled = false;
    checkoutCreateOrderButton.textContent = 'Kirim pesanan via WhatsApp';
  }
}

function clearAdminProductImagePreviews() {
  adminProductImageObjectUrls.forEach((imageUrl) => URL.revokeObjectURL(imageUrl));
  adminProductImageObjectUrls.clear();
  adminProductImagePreviews.replaceChildren();
}

function renderAdminProductImagePreviews(images) {
  adminProductImagePreviews.replaceChildren();
  images.forEach(({ src, name, onRemove }) => {
    const preview = createElement('figure', 'admin-image-preview');
    const image = createElement('img');
    const caption = createElement('figcaption', '', name);
    image.src = src;
    image.alt = `Preview ${name}`;
    image.addEventListener('load', () => {
      caption.textContent = `${name} · ${image.naturalWidth} × ${image.naturalHeight}`;
    }, { once: true });
    const removeButton = createElement('button', 'admin-image-preview-remove', '×');
    removeButton.type = 'button';
    removeButton.setAttribute('aria-label', `Hapus ${name}`);
    removeButton.addEventListener('click', onRemove);
    preview.append(image, removeButton, caption);
    adminProductImagePreviews.append(preview);
  });
}

function renderAdminProductColorStockFields() {
  const selectedColors = [...adminProductForm.querySelectorAll('input[name="colors"]:checked')]
    .map((input) => input.value);
  adminProductColorStockFields.replaceChildren();
  if (selectedColors.length === 0) {
    adminProductColorStockFields.append(createElement('p', 'admin-form-note', 'Pilih warna produk untuk mengatur stoknya.'));
    return;
  }

  selectedColors.forEach((color) => {
    const label = createElement('label', 'admin-color-stock-field');
    const name = createElement('span', '', productColors[color] || color);
    const input = createElement('input');
    input.type = 'number';
    input.name = `stockByColor-${color}`;
    input.min = '0';
    input.step = '1';
    input.placeholder = 'Tidak dibatasi';
    input.value = adminProductStockByColor[color] ?? '';
    input.setAttribute('aria-label', `Jumlah stok ${productColors[color] || color}`);
    input.addEventListener('input', () => {
      adminProductStockByColor[color] = input.value;
    });
    label.append(name, input);
    adminProductColorStockFields.append(label);
  });
}

function getProductColorLabel(product, color) {
  return builtInProductColors[color] || product.colorLabels?.[color] || productColors[color] || color;
}

function getProductColorSwatch(product, color) {
  return product.colorSwatches?.[color] || productColorSwatches[color] || '#777777';
}

function renderAdminProductColorChoices(extraColors = []) {
  const choiceList = adminProductForm.querySelector('.admin-color-choices');
  const customColors = new Set([
    ...extraColors,
    ...adminProductBaseColors.filter((color) => color.startsWith('custom-')),
    ...getDetectedAdminProductColors()
  ]);
  choiceList.querySelectorAll('[data-custom-color-choice]').forEach((label) => label.remove());
  customColors.forEach((color) => {
    if (!color.startsWith('custom-')) return;
    const label = createElement('label');
    label.dataset.customColorChoice = '';
    label.style.setProperty('--color-swatch', productColorSwatches[color] || '#777777');
    const input = createElement('input');
    input.type = 'checkbox';
    input.name = 'colors';
    input.value = color;
    const caption = createElement('span', '', productColors[color] || color);
    label.append(input, caption);
    choiceList.append(label);
  });
}

function getDetectedAdminProductColors() {
  return new Set([...adminProductDetectedColorsByFile.values()].filter(Boolean));
}

function syncAdminProductColorsFromImages() {
  const availableColors = new Set([
    ...adminProductBaseColors,
    ...getDetectedAdminProductColors()
  ]);
  renderAdminProductColorChoices([...availableColors]);
  adminProductForm.querySelectorAll('input[name="colors"]').forEach((input) => {
    input.checked = availableColors.has(input.value);
  });
  renderAdminProductColorStockFields();
}

function getAdminProductImagesForEdit() {
  const product = catalogProducts.find((item) => item.id === adminProductEditingId);
  if (!product) return [];
  return product.demoGallery ? [product.image] : (product.images || [product.image]).filter(Boolean);
}

function refreshAdminProductImagePreviews(existingImages = getAdminProductImagesForEdit()) {
  const previews = existingImages
    .map((src, index) => ({ src, name: `Gambar ${index + 1}`, index }))
    .filter(({ index }) => !adminProductRemovedImageIndexes.has(index))
    .map(({ src, name, index }) => ({
      src,
      name,
      onRemove: () => {
        adminProductRemovedImageIndexes.add(index);
        refreshAdminProductImagePreviews(existingImages);
      }
    }));

  adminProductSelectedFiles.forEach((file) => {
    let src = adminProductImageObjectUrls.get(file);
    if (!src) {
      src = URL.createObjectURL(file);
      adminProductImageObjectUrls.set(file, src);
    }
    previews.push({
      src,
      name: file.name,
      onRemove: () => {
        adminProductSelectedFiles = adminProductSelectedFiles.filter((selectedFile) => selectedFile !== file);
        adminProductDetectedColorsByFile.delete(file);
        URL.revokeObjectURL(src);
        adminProductImageObjectUrls.delete(file);
        refreshAdminProductImagePreviews(existingImages);
        syncAdminProductColorsFromImages();
      }
    });
  });

  renderAdminProductImagePreviews(previews);
  const imageCount = previews.length;
  adminProductImageInput.required = imageCount === 0;
  adminProductImageStatus.textContent = `${imageCount} dari maksimal ${MAX_PRODUCT_IMAGES} gambar dipilih. Klik × pada gambar untuk menghapusnya.`;
  adminProductImageStatus.classList.remove('is-error');
}

function beginAdminProductEdit(product) {
  adminImageSelectionVersion += 1;
  adminProductEditingId = product.id;
  persistAdminSessionState({ editingProductId: product.id });
  adminProductForm.elements.name.value = product.name;
  adminProductForm.elements.category.value = product.category;
  adminProductForm.elements.price.value = String(product.price);
  adminProductForm.elements.description.value = product.description || product.imageAlt || '';
  Object.entries(product.colorLabels || {}).forEach(([color, label]) => {
    if (color.startsWith('custom-')) productColors[color] = label;
  });
  Object.entries(product.colorSwatches || {}).forEach(([color, swatch]) => {
    if (color.startsWith('custom-')) productColorSwatches[color] = swatch;
  });
  adminProductBaseColors = [...(product.colors || [])];
  renderAdminProductColorChoices(adminProductBaseColors);
  adminProductForm.querySelectorAll('input[name="sizes"]').forEach((input) => {
    input.checked = (product.sizes || productSizes).includes(input.value);
  });
  adminProductForm.querySelectorAll('input[name="colors"]').forEach((input) => {
    input.checked = (product.colors || []).includes(input.value);
  });
  adminProductStockByColor = { ...(product.stockByColor || {}) };
  if (Object.keys(adminProductStockByColor).length === 0 && product.stockByVariant) {
    product.colors.forEach((color) => {
      const variantStock = product.sizes || productSizes;
      const colorTotal = variantStock.reduce((total, size) =>
        total + Math.max(0, Math.floor(Number(product.stockByVariant[`${color}-${size}`]) || 0)), 0);
      if (variantStock.some((size) => Object.prototype.hasOwnProperty.call(product.stockByVariant, `${color}-${size}`))) {
        adminProductStockByColor[color] = String(colorTotal);
      }
    });
  }
  adminProductImageInput.required = false;
  adminProductImageInput.value = '';
  adminProductSizeChartInput.value = '';
  adminProductRemoveSizeChart = false;
  if (adminProductSizeChartObjectUrl) URL.revokeObjectURL(adminProductSizeChartObjectUrl);
  adminProductSizeChartObjectUrl = null;
  adminProductSizeChartPreview.parentElement.hidden = !product.sizeChartImagePath;
  adminProductSizeChartPreview.hidden = !product.sizeChartImagePath;
  adminProductSizeChartPreview.src = product.sizeChartImage || '';
  adminProductSizeChartRemoveButton.hidden = !product.sizeChartImagePath;
  adminProductSizeChartStatus.textContent = product.sizeChartImagePath
    ? 'Size chart produk ini tersimpan. Pilih gambar untuk mengganti.'
    : 'Belum ada size chart khusus untuk produk ini.';
  adminProductSizeChartStatus.classList.remove('is-error');
  adminProductSelectedFiles = [];
  adminProductDetectedColorsByFile.clear();
  adminProductRemovedImageIndexes = new Set();
  renderAdminProductColorStockFields();
  clearAdminProductImagePreviews();
  const existingImages = product.demoGallery ? [product.image] : (product.images || [product.image]);
  refreshAdminProductImagePreviews(existingImages.filter(Boolean));
  adminProductImageStatus.classList.remove('is-error');
  adminProductSubmit.textContent = 'Simpan perubahan';
  adminProductCancelEdit.hidden = false;
  adminProductForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetAdminProductForm() {
  adminImageSelectionVersion += 1;
  adminProductForm.reset();
  adminProductEditingId = null;
  persistAdminSessionState({ editingProductId: null });
  adminProductSelectedFiles = [];
  adminProductRemovedImageIndexes = new Set();
  adminProductStockByColor = {};
  adminProductBaseColors = [];
  adminProductDetectedColorsByFile.clear();
  adminProductForm.querySelectorAll('input[name="colors"]').forEach((input) => {
    input.checked = false;
  });
  renderAdminProductColorChoices();
  renderAdminProductColorStockFields();
  adminProductImageInput.required = true;
  adminProductImageInput.value = '';
  adminProductSizeChartInput.value = '';
  adminProductRemoveSizeChart = false;
  if (adminProductSizeChartObjectUrl) URL.revokeObjectURL(adminProductSizeChartObjectUrl);
  adminProductSizeChartObjectUrl = null;
  adminProductSizeChartPreview.removeAttribute('src');
  adminProductSizeChartPreview.hidden = true;
  adminProductSizeChartPreview.parentElement.hidden = true;
  adminProductSizeChartRemoveButton.hidden = true;
  adminProductSizeChartStatus.textContent = 'Belum ada size chart khusus untuk produk ini.';
  adminProductSizeChartStatus.classList.remove('is-error');
  clearAdminProductImagePreviews();
  adminProductImageStatus.textContent = 'Gambar diunggah saat produk disimpan.';
  adminProductImageStatus.classList.remove('is-error');
  adminProductSubmit.disabled = false;
  adminProductSubmit.textContent = 'Simpan Permanen';
  adminProductPreviewButton.hidden = true;
  adminProductCancelEdit.hidden = true;
}

function createProductId(name) {
  const baseId = name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || 'produk';
  let id = baseId;
  let suffix = 2;
  while (catalogProducts.some((product) => product.id === id)) {
    id = `${baseId}-${suffix}`;
    suffix += 1;
  }
  return id;
}

async function saveAdminCategory(event) {
  event.preventDefault();
  if (!adminCategoryForm.reportValidity()) return;

  const formData = new FormData(adminCategoryForm);
  const name = String(formData.get('name')).trim();
  const id = String(formData.get('slug')).trim().toLowerCase();
  if (getProductCategories().some((category) => category.id === id || category.name.toLocaleLowerCase('id') === name.toLocaleLowerCase('id'))) {
    adminCategoryStatus.textContent = 'Nama atau ID kategori sudah digunakan.';
    adminCategoryStatus.classList.add('is-error');
    return;
  }

  adminCategorySubmit.disabled = true;
  adminCategorySubmit.textContent = 'Menyimpan...';
  adminCategoryStatus.classList.remove('is-error');
  try {
    const category = { id, name };
    await saveAdminCategoryPreviewRecord(category);
    adminPreviewCategories.push(category);
    renderProductCategoryFilters();
    renderProductGrid();
    renderAdminCatalogManagement();
    adminCategoryForm.reset();
    adminCategoryStatus.textContent = `${name} ditambahkan dan disimpan lokal di browser ini.`;
  } catch (error) {
    adminCategoryStatus.textContent = `Kategori gagal disimpan: ${error.message}`;
    adminCategoryStatus.classList.add('is-error');
  } finally {
    adminCategorySubmit.disabled = false;
    adminCategorySubmit.textContent = 'Tambah kategori';
  }
}

function describeCustomColor(red, green, blue) {
  const maximum = Math.max(red, green, blue);
  const minimum = Math.min(red, green, blue);
  const lightness = (maximum + minimum) / 510;
  const delta = maximum - minimum;
  if (delta < 24) {
    if (lightness < 0.18) return 'Charcoal';
    if (lightness > 0.88) return 'Ivory';
    return 'Gray';
  }

  let hue;
  if (maximum === red) hue = ((green - blue) / delta) % 6;
  else if (maximum === green) hue = (blue - red) / delta + 2;
  else hue = (red - green) / delta + 4;
  hue = (hue * 60 + 360) % 360;
  const family = hue < 15 || hue >= 345 ? 'Red'
    : hue < 42 ? 'Orange'
      : hue < 68 ? 'Yellow'
        : hue < 155 ? 'Green'
          : hue < 190 ? 'Teal'
            : hue < 250 ? 'Blue'
              : hue < 290 ? 'Purple'
                : hue < 345 ? 'Pink' : 'Red';
  const shade = lightness < 0.28 ? 'Dark ' : lightness > 0.76 ? 'Light ' : '';
  return `${shade}${family}`;
}

async function detectDominantProductColor(file) {
  const bitmap = await createImageBitmap(file);
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const context = canvas.getContext('2d', { willReadFrequently: true });
  if (!context) {
    bitmap.close();
    throw new Error('Analisis warna gambar tidak tersedia.');
  }

  const sourceSize = Math.min(bitmap.width, bitmap.height);
  const sourceX = (bitmap.width - sourceSize) / 2;
  const sourceY = (bitmap.height - sourceSize) / 2;
  context.drawImage(bitmap, sourceX, sourceY, sourceSize, sourceSize, 0, 0, canvas.width, canvas.height);
  bitmap.close();

  const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
  const palette = {
    black: [23, 23, 23],
    bone: [230, 222, 206],
    red: [158, 35, 39],
    olive: [98, 99, 68],
    blue: [69, 90, 112]
  };
  const counts = new Map();
  for (let index = 0; index < pixels.length; index += 4) {
    if (pixels[index + 3] < 128) continue;
    const red = pixels[index];
    const green = pixels[index + 1];
    const blue = pixels[index + 2];
    const brightness = red * 0.2126 + green * 0.7152 + blue * 0.0722;
    const channelRange = Math.max(red, green, blue) - Math.min(red, green, blue);
    const saturation = Math.max(red, green, blue) === 0
      ? 0
      : channelRange / Math.max(red, green, blue);
    if (brightness < 58 || (brightness < 105 && saturation < 0.22)) {
      const current = counts.get('black') || { count: 0, red: 0, green: 0, blue: 0 };
      current.count += 1;
      current.red += red;
      current.green += green;
      current.blue += blue;
      counts.set('black', current);
      continue;
    }

    let nearestColor = '';
    let nearestDistance = Number.POSITIVE_INFINITY;
    Object.entries(palette).filter(([color]) => color !== 'black').forEach(([color, [paletteRed, paletteGreen, paletteBlue]]) => {
      const distance = (red - paletteRed) ** 2 + (green - paletteGreen) ** 2 + (blue - paletteBlue) ** 2;
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestColor = color;
      }
    });
    let colorKey = nearestDistance <= 65 ** 2 ? nearestColor : '';
    if (!colorKey) {
      const quantized = [red, green, blue].map((channel) =>
        Math.min(255, Math.round(channel / 16) * 16)
      );
      const hex = quantized.map((channel) => channel.toString(16).padStart(2, '0')).join('');
      colorKey = `custom-${hex}`;
      const current = counts.get(colorKey) || { count: 0, red: 0, green: 0, blue: 0 };
      current.count += 1;
      current.red += red;
      current.green += green;
      current.blue += blue;
      counts.set(colorKey, current);
      continue;
    }
    const current = counts.get(colorKey) || { count: 0, red: 0, green: 0, blue: 0 };
    current.count += 1;
    current.red += red;
    current.green += green;
    current.blue += blue;
    counts.set(colorKey, current);
  }
  if (counts.size === 0) return null;
  const [dominantColor, dominantValue] = [...counts.entries()]
    .reduce((dominant, entry) => entry[1].count > dominant[1].count ? entry : dominant);
  if (dominantColor.startsWith('custom-')) {
    const average = [
      Math.round(dominantValue.red / dominantValue.count),
      Math.round(dominantValue.green / dominantValue.count),
      Math.round(dominantValue.blue / dominantValue.count)
    ];
    const colorName = describeCustomColor(...average);
    const colorSwatch = `#${average.map((channel) => channel.toString(16).padStart(2, '0')).join('')}`;
    productColors[dominantColor] = colorName;
    productColorSwatches[dominantColor] = colorSwatch;
  }
  return dominantColor;
}

async function saveAdminProduct(event) {
  event.preventDefault();
  if (!adminProductForm.reportValidity()) return;

  const formData = new FormData(adminProductForm);
  const sizes = formData.getAll('sizes').map(String);
  const colors = formData.getAll('colors').map(String);
  const sizeChartFile = adminProductSizeChartInput.files[0];
  if (sizes.length === 0 || colors.length === 0) {
    showNotice('Pilih setidaknya satu ukuran dan satu warna.');
    return;
  }
  if (sizeChartFile && (
    !['image/jpeg', 'image/png', 'image/webp'].includes(sizeChartFile.type)
    || sizeChartFile.size > 5 * 1024 * 1024
  )) {
    adminProductSizeChartStatus.textContent = 'Pilih gambar size chart JPG, PNG, atau WebP berukuran maksimal 5 MB.';
    adminProductSizeChartStatus.classList.add('is-error');
    return;
  }

  adminProductSubmit.disabled = true;
  adminProductSubmit.textContent = 'Menyimpan...';
  const uploadedImagePaths = [];
  let uploadedSizeChartPath = null;
  let productSaved = false;
  try {
    const existingProduct = adminProductEditingId
      ? catalogProducts.find((product) => product.id === adminProductEditingId)
      : null;
    const uploadedProductCount = catalogProducts.filter((product) => !product.demoGallery).length;
    if ((!existingProduct || existingProduct.demoGallery) && uploadedProductCount >= MAX_PRODUCT_SLOTS) {
      throw new Error(`Maksimal ${MAX_PRODUCT_SLOTS} produk dapat ditampilkan.`);
    }
    const name = String(formData.get('name')).trim();
    const category = String(formData.get('category'));
    const categoryName = getProductCategories().find((item) => item.id === category)?.name;
    if (!categoryName) throw new Error('Pilih kategori produk yang tersedia.');

    const existingImages = existingProduct?.demoGallery
      ? [existingProduct.image]
      : (existingProduct?.images || [existingProduct?.image]);
    const existingMedia = existingImages
      .map((src, index) => ({ src, index }))
      .filter(({ src, index }) => Boolean(src) && !adminProductRemovedImageIndexes.has(index))
      .map(({ src, index }) => ({ src, path: existingProduct?.imagePaths?.[index] }));
    const media = [
      ...existingMedia,
      ...adminProductSelectedFiles.map((file, fileIndex) => ({ fileIndex }))
    ];
    if (media.length === 0) throw new Error('Upload setidaknya satu gambar produk.');
    if (media.length > MAX_PRODUCT_IMAGES) {
      throw new Error(`Satu produk hanya dapat memiliki maksimal ${MAX_PRODUCT_IMAGES} gambar.`);
    }

    const id = adminProductEditingId || createProductId(name);
    let sizeChartImagePath = adminProductRemoveSizeChart
      ? null
      : existingProduct?.sizeChartImagePath || null;
    if (sizeChartFile) {
      const extensionByType = {
        'image/jpeg': 'jpg',
        'image/png': 'png',
        'image/webp': 'webp'
      };
      const extension = extensionByType[sizeChartFile.type];
      if (!extension) throw new Error('Format size chart harus JPG, PNG, atau WebP.');
      uploadedSizeChartPath = `${id}/size-chart-${crypto.randomUUID()}.${extension}`;
      const { error: sizeChartUploadError } = await getSupabaseClient()
        .storage.from(SUPABASE_SIZE_CHART_BUCKET)
        .upload(uploadedSizeChartPath, sizeChartFile, {
          contentType: sizeChartFile.type,
          cacheControl: '3600',
          upsert: false
        });
      if (sizeChartUploadError) throw sizeChartUploadError;
      sizeChartImagePath = uploadedSizeChartPath;
    }
    const record = {
      id,
      name,
      category,
      categoryLabel: categoryName.toUpperCase(),
      price: Math.round(Number(formData.get('price'))),
      description: String(formData.get('description')).trim(),
      colors,
      colorLabels: Object.fromEntries(colors.map((color) => [color, productColors[color] || color])),
      colorSwatches: Object.fromEntries(colors.map((color) => [color, productColorSwatches[color] || '#777777'])),
      sizes,
      stockByColor: Object.fromEntries(colors
        .filter((color) => adminProductStockByColor[color] !== undefined && adminProductStockByColor[color] !== '')
        .map((color) => [color, Math.max(0, Math.floor(Number(adminProductStockByColor[color]) || 0))])),
    };
    const allowedImageTypes = {
      'image/jpeg': 'jpg',
      'image/png': 'png',
      'image/webp': 'webp',
      'image/gif': 'gif'
    };
    const images = [];
    for (const item of media) {
      if (Number.isInteger(item.fileIndex)) {
        const file = adminProductSelectedFiles[item.fileIndex];
        const extension = allowedImageTypes[file.type];
        if (!extension) throw new Error('Format gambar harus JPG, PNG, GIF, atau WebP.');
        if (file.size > 5 * 1024 * 1024) throw new Error('Ukuran setiap gambar maksimal 5 MB.');
        const imagePath = `${id}/${crypto.randomUUID()}.${extension}`;
        const { error: uploadError } = await getSupabaseClient()
          .storage.from(SUPABASE_PRODUCT_BUCKET)
          .upload(imagePath, file, { contentType: file.type, cacheControl: '3600', upsert: false });
        if (uploadError) throw uploadError;
        uploadedImagePaths.push(imagePath);
        images.push(imagePath);
      } else {
        images.push(item.path || item.src);
      }
    }

    const now = new Date().toISOString();
    const supabaseRecord = {
      id: record.id,
      name: record.name,
      category: record.category,
      category_label: record.categoryLabel,
      badge: '',
      price: record.price,
      description: record.description,
      colors: record.colors,
      color_labels: record.colorLabels,
      color_swatches: record.colorSwatches,
      sizes: record.sizes,
      stock_by_color: Object.keys(record.stockByColor).length ? record.stockByColor : null,
      images,
      size_chart_image: sizeChartImagePath,
      created_at: existingProduct?.created_at || now,
      updated_at: now
    };
    const productQuery = getSupabaseClient().from('products');
    const saveRequest = existingProduct
      ? productQuery.update(supabaseRecord).eq('id', id)
      : productQuery.insert(supabaseRecord);
    const { data: savedRow, error: saveError } = await saveRequest.select('*').single();
    if (saveError) throw saveError;
    productSaved = true;

    const oldImagePaths = (existingProduct?.imagePaths || [])
      .filter((image) => !/^https?:\/\//i.test(image));
    const retainedImagePaths = new Set(images.filter((image) => !/^https?:\/\//i.test(image)));
    const removedImagePaths = oldImagePaths.filter((image) => !retainedImagePaths.has(image));
    let cleanupWarning = '';
    if (removedImagePaths.length > 0) {
      const { error: cleanupError } = await getSupabaseClient()
        .storage.from(SUPABASE_PRODUCT_BUCKET).remove(removedImagePaths);
      if (cleanupError) cleanupWarning = ` Produk tersimpan, tetapi gambar lama gagal dihapus: ${cleanupError.message}`;
    }
    const oldSizeChartPath = existingProduct?.sizeChartImagePath;
    if (oldSizeChartPath && oldSizeChartPath !== sizeChartImagePath) {
      const { error: sizeChartCleanupError } = await getSupabaseClient()
        .storage.from(SUPABASE_SIZE_CHART_BUCKET).remove([oldSizeChartPath]);
      if (sizeChartCleanupError) {
        cleanupWarning += ` Size chart lama gagal dihapus: ${sizeChartCleanupError.message}`;
      }
    }

    const savedProduct = productFromSupabaseRow(savedRow);
    if (existingProduct) Object.assign(existingProduct, savedProduct);
    else catalogProducts.unshift(savedProduct);
    activeProductQuery = '';
    searchInput.value = '';
    navSearchInput.value = '';
    setActiveProductFilter('all');
    renderProductGrid();
    renderAdminCatalogManagement();
    resetAdminProductForm();
    adminProductPreviewButton.dataset.productId = savedProduct.id;
    adminProductPreviewButton.hidden = false;
    persistAdminSessionState({ lastSavedProductId: savedProduct.id });
    showNotice(`${savedProduct.name} tersimpan online.${cleanupWarning}`);
  } catch (error) {
    if (!productSaved && uploadedImagePaths.length > 0) {
      const { error: cleanupError } = await getSupabaseClient()
        .storage.from(SUPABASE_PRODUCT_BUCKET).remove(uploadedImagePaths);
      if (cleanupError) {
        console.error('Gagal membersihkan gambar setelah penyimpanan produk gagal:', cleanupError);
      }
    }
    if (!productSaved && uploadedSizeChartPath) {
      const { error: cleanupError } = await getSupabaseClient()
        .storage.from(SUPABASE_SIZE_CHART_BUCKET).remove([uploadedSizeChartPath]);
      if (cleanupError) {
        console.error('Gagal membersihkan size chart setelah penyimpanan produk gagal:', cleanupError);
      }
    }
    adminProductSubmit.disabled = false;
    adminProductSubmit.textContent = adminProductEditingId ? 'Simpan perubahan' : 'Simpan Permanen';
    adminProductImageStatus.textContent = `Gagal menyimpan: ${error.message}`;
    adminProductImageStatus.classList.add('is-error');
  }
}

function renderSearchResults(query) {
  searchResults.replaceChildren();
  if (!query) {
    searchStatus.textContent = 'Cari produk, informasi halaman, FAQ, kritik & saran, hingga footer.';
    return;
  }

  const normalizedQuery = query.toLocaleLowerCase('id');
  const productMatches = getStorefrontProducts().filter((product) =>
    `${product.name} ${product.categoryLabel}`.toLocaleLowerCase('id').includes(normalizedQuery)
  );
  const pageMatches = [...document.querySelectorAll(
    'main h1, main h2, main h3, main h4, main p, main summary, main a, main button, main label, main strong, main small, main img[alt], .site-footer h2, .site-footer p'
  )]
    .filter((element) => !element.closest('[hidden], [inert], .product-card'))
    .map((element) => ({
      element,
      text: (element.getAttribute('aria-label') || element.getAttribute('alt') || element.textContent).replace(/\s+/g, ' ').trim()
    }))
    .filter(({ text }) => text.toLocaleLowerCase('id').includes(normalizedQuery));

  const addGroup = (label, items, renderItem) => {
    if (items.length === 0) return;
    searchResults.append(createElement('p', 'search-result-group', label));
    items.slice(0, 6).forEach(renderItem);
  };

  addGroup('PRODUK', productMatches, (product) => {
    const result = createElement('button', 'search-result');
    result.type = 'button';
    result.append(createElement('strong', '', product.name));
    result.append(createElement('span', '', `${product.categoryLabel} · ${formatRupiah(product.price)}`));
    result.addEventListener('click', () => {
      setActiveProductFilter('all');
      activeProductQuery = query;
      renderProductGrid();
      setSearch(false);
      window.setTimeout(() => {
        const card = findProductCard(product.id);
        card?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 30);
    });
    searchResults.append(result);
  });

  addGroup('HALAMAN', pageMatches, ({ element, text }) => {
    const result = createElement('button', 'search-result');
    result.type = 'button';
    result.append(createElement('strong', '', text.slice(0, 110)));
    result.append(createElement('span', '', element.closest('.site-footer') ? 'Footer' : 'Halaman RDX Store'));
    result.addEventListener('click', () => {
      const details = element.closest('details');
      if (details) details.open = true;
      setSearch(false);
      element.classList.add('search-result-highlight');
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      window.setTimeout(() => element.classList.remove('search-result-highlight'), 1800);
    });
    searchResults.append(result);
  });

  const totalMatches = productMatches.length + pageMatches.length;
  searchStatus.textContent = totalMatches
    ? `${totalMatches} hasil ditemukan di produk dan seluruh halaman.`
    : `Tidak ada hasil untuk “${query}”.`;
}

function renderProductSearchSuggestions(query) {
  const normalizedQuery = query.trim().toLocaleLowerCase('id');
  productSearchSuggestions.replaceChildren();
  navSearchInput.setAttribute('aria-expanded', String(Boolean(normalizedQuery)));
  productSearchSuggestions.hidden = !normalizedQuery;
  if (!normalizedQuery) return;

  const matches = getStorefrontProducts().filter((product) =>
    product.name.toLocaleLowerCase('id').includes(normalizedQuery)
  ).slice(0, 6);

  if (matches.length === 0) {
    const emptyMessage = createElement('p', 'product-search-empty', 'Produk tidak ditemukan.');
    productSearchSuggestions.append(emptyMessage);
    return;
  }

  matches.forEach((product) => {
    const result = createElement('button', 'product-search-suggestion');
    result.type = 'button';
    result.setAttribute('role', 'option');
    result.setAttribute('aria-label', `${product.name}, ${formatRupiah(product.price)}`);
    const image = document.createElement('img');
    image.src = product.image;
    image.alt = '';
    image.loading = 'lazy';
    const details = createElement('span', 'product-search-suggestion-info');
    details.append(createElement('strong', '', product.name));
    details.append(createElement('small', '', `${product.categoryLabel} · ${formatRupiah(product.price)}`));
    result.append(image, details);
    result.addEventListener('click', () => {
      setActiveProductFilter('all');
      navSearchInput.value = product.name;
      activeProductQuery = product.name;
      renderProductGrid();
      productSearchSuggestions.hidden = true;
      navSearchInput.setAttribute('aria-expanded', 'false');
      findProductCard(product.id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    productSearchSuggestions.append(result);
  });
}

productFilterList.addEventListener('click', (event) => {
  const button = event.target.closest('.product-filter');
  if (button) setActiveProductFilter(button.dataset.productFilter);
});

function saveCart() {
  try {
    window.localStorage.setItem(cartStorageKey, JSON.stringify(cartItems));
  } catch {
    showNotice('Keranjang tidak dapat disimpan di browser ini.');
  }
}

function renderCart() {
  const quantity = getCartQuantity();
  const total = getCartTotal();
  const itemLabel = `${quantity} ITEM`;

  cartCount.textContent = String(quantity);
  cartItemCount.textContent = itemLabel;
  cartTotal.textContent = formatRupiah(total);
  cartPopoverCount.textContent = itemLabel;
  cartPopoverTotal.textContent = formatRupiah(total);
  cartButton.setAttribute('aria-label', `Keranjang, ${quantity} item, total ${formatRupiah(total)}`);
  cartButton.classList.toggle('has-items', quantity > 0);
  cartCount.hidden = quantity === 0;
  cartButton.disabled = quantity === 0;
  checkoutButton.disabled = quantity === 0;
  cartItemsContainer.replaceChildren();
  renderCheckoutSummary();

  if (cartItems.length === 0) {
    cartPopover.hidden = true;
    cartButton.setAttribute('aria-expanded', 'false');
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'cart-empty';
    emptyMessage.textContent = 'Keranjang masih kosong.';
    cartItemsContainer.append(emptyMessage);
    return;
  }

  cartItems.forEach((item) => {
    cartItemsContainer.append(createCartItemRow(item));
  });
}

function createCartItemRow(item) {
  const row = document.createElement('div');
  row.className = 'cart-popover-row';
  if (item.image) {
    const image = document.createElement('img');
    image.className = 'cart-item-image';
    image.src = item.image;
    image.alt = item.imageAlt || item.name;
    image.loading = 'lazy';
    row.append(image);
  }
  const itemInfo = document.createElement('div');
  itemInfo.className = 'cart-popover-item-info';
  const name = document.createElement('span');
  name.className = 'cart-popover-item-name';
  name.textContent = `${item.name} × ${item.quantity}`;
  itemInfo.append(name);
  [
    item.color && `Warna: ${item.color}`,
    item.size && `Ukuran: ${item.size}`
  ].filter(Boolean).forEach((label) => {
    const variant = document.createElement('small');
    variant.className = 'cart-popover-variant';
    variant.textContent = label;
    itemInfo.append(variant);
  });
  const itemTotal = document.createElement('strong');
  itemTotal.className = 'cart-popover-item-total';
  itemTotal.textContent = formatRupiah(item.price * item.quantity);
  const removeButton = document.createElement('button');
  removeButton.className = 'cart-item-remove';
  removeButton.type = 'button';
  removeButton.setAttribute('aria-label', `Hapus ${item.name} dari keranjang`);
  removeButton.textContent = '×';
  removeButton.addEventListener('click', () => removeCartItem(item.id));
  row.append(itemInfo, itemTotal, removeButton);
  return row;
}

function renderCheckoutSummary() {
  checkoutItemsContainer.replaceChildren();
  if (cartItems.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'cart-empty';
    emptyMessage.textContent = 'Keranjang masih kosong.';
    checkoutItemsContainer.append(emptyMessage);
  } else {
    cartItems.forEach((item) => {
      checkoutItemsContainer.append(createCartItemRow(item));
    });
  }
  checkoutTotal.textContent = formatRupiah(getCartTotal());
  const messageItems = cartItems.map((item, index) => {
    const product = catalogProducts.find((catalogItem) => catalogItem.name === item.name);
    const color = item.color ? getProductColorLabel(product || {}, item.color) : 'Tidak dipilih';
    const size = item.size || 'Tidak dipilih';
    return `Pesanan ${index + 1}:\nNama produk: ${item.name}\nUkuran: ${size}\nWarna: ${color}\nJumlah: ${item.quantity}`;
  });
  const message = [
    'Halo, saya sudah melakukan pembayaran pesanan RDX STORE.',
    '',
    'Detail pesanan:',
    messageItems.join('\n\n'),
    `Total: ${formatRupiah(getCartTotal())}`,
    '',
    'Saya lampirkan bukti pembayaran.'
  ].join('\n');
  checkoutWhatsAppLink.href = `https://wa.me/62895326582488?text=${encodeURIComponent(message)}`;
}

function removeCartItem(productId) {
  const item = cartItems.find((cartItem) => cartItem.id === productId);
  if (!item) return;
  cartItems = cartItems.filter((cartItem) => cartItem.id !== productId);
  saveCart();
  renderCart();
  showNotice(`${item.name} dihapus dari keranjang.`);
}

function addRedxToCart(product) {
  if (!product?.id || !product.name || !Number.isFinite(Number(product.price)) || Number(product.price) < 0) return false;

  const productId = String(product.id);
  const quantity = Math.max(1, Math.floor(Number(product.quantity) || 1));
  const existingItem = cartItems.find((item) => item.id === productId);
  const stock = Number(product.stock);
  if (product.stock !== undefined && product.stock !== null && Number.isFinite(stock)) {
    const requestedQuantity = (existingItem?.quantity || 0) + quantity;
    if (stock <= 0 || requestedQuantity > stock) {
      showNotice(stock <= 0 ? 'Stok produk habis.' : 'Jumlah melebihi stok yang tersedia.');
      return false;
    }
  }

  if (existingItem) {
    existingItem.quantity += quantity;
    if (product.color || product.size) {
      existingItem.name = String(product.name);
      existingItem.color = product.color ? String(product.color) : '';
      existingItem.size = product.size ? String(product.size) : '';
    }
    if (product.image) {
      existingItem.image = String(product.image);
      existingItem.imageAlt = product.imageAlt ? String(product.imageAlt) : String(product.name);
    }
  } else {
    cartItems.push({
      id: productId,
      name: String(product.name),
      price: Math.round(Number(product.price)),
      quantity,
      color: product.color ? String(product.color) : '',
      size: product.size ? String(product.size) : '',
      image: product.image ? String(product.image) : '',
      imageAlt: product.imageAlt ? String(product.imageAlt) : String(product.name)
    });
  }

  saveCart();
  renderCart();
  cartPopover.hidden = false;
  cartButton.setAttribute('aria-expanded', 'true');
  showNotice(`${product.name} ditambahkan · ${getCartQuantity()} item · Total ${formatRupiah(getCartTotal())}`);
  return true;
}

window.addRedxToCart = addRedxToCart;
window.addEventListener('redx:add-to-cart', (event) => addRedxToCart(event.detail));
window.addEventListener('storage', (event) => {
  if (event.key === cartStorageKey) {
    cartItems = loadCart();
    renderCart();
  }
  if (event.key === wishlistStorageKey) {
    wishlistItems = loadWishlist();
    renderWishlistCount();
    renderProductGrid();
  }
});

function closeActionPopovers() {
  document.querySelectorAll('.action-popover').forEach((popover) => {
    popover.hidden = true;
  });
  document.querySelectorAll('[aria-controls="cart-popover"]').forEach((button) => {
    button.setAttribute('aria-expanded', 'false');
  });
}

function toggleActionPopover(button, popover) {
  const shouldOpen = popover.hidden;
  closeActionPopovers();
  if (shouldOpen) {
    popover.hidden = false;
    button.setAttribute('aria-expanded', 'true');
  }
}

function setAdminPanel(open) {
  if (open && !adminPreviewAuthenticated) return;
  persistAdminSessionState({ panelOpen: open });
  adminPanel.classList.toggle('is-open', open);
  adminPanel.setAttribute('aria-hidden', String(!open));
  adminPanel.inert = !open;
  document.body.classList.toggle(
    'admin-open',
    open || adminQrisPanel.classList.contains('is-open') || adminStoreVideoPanel.classList.contains('is-open')
  );
  if (open) adminCloseButtons.at(-1)?.focus();
  else adminOpenButton.focus();
}

function setAdminQrisPanel(open) {
  adminQrisPanel.classList.toggle('is-open', open);
  adminQrisPanel.setAttribute('aria-hidden', String(!open));
  adminQrisPanel.inert = !open;
  document.body.classList.toggle(
    'admin-open',
    open || adminPanel.classList.contains('is-open') || adminStoreVideoPanel.classList.contains('is-open')
  );
  if (open) adminQrisCloseButtons.at(-1)?.focus();
  else adminQrisOpenButton.focus();
}

function setAdminStoreVideoPanel(open) {
  if (open && !adminPreviewAuthenticated) return;
  adminStoreVideoPanel.classList.toggle('is-open', open);
  adminStoreVideoPanel.setAttribute('aria-hidden', String(!open));
  adminStoreVideoPanel.inert = !open;
  document.body.classList.toggle(
    'admin-open',
    open || adminPanel.classList.contains('is-open') || adminQrisPanel.classList.contains('is-open')
  );
  if (open) adminStoreVideoCloseButtons.at(-1)?.focus();
  else adminStoreVideoOpenButton.focus();
}

function selectAdminTab(tabName) {
  const tabs = [...document.querySelectorAll('[data-admin-tab]')];
  const selectedTab = tabs.find((tab) => tab.dataset.adminTab === tabName) || tabs[0];
  tabs.forEach((tab) => {
    const active = tab === selectedTab;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
  });
  persistAdminSessionState({ activeTab: selectedTab.dataset.adminTab });
}

function updateAdminLoginButton() {
  adminOpenButton.querySelector('.emoji-icon').textContent = adminPreviewAuthenticated ? '✏️' : '🔐';
  adminOpenButton.querySelector('.admin-login-trigger-label').textContent = adminPreviewAuthenticated ? 'Edit' : 'Login Admin';
  adminOpenButton.setAttribute('aria-label', adminPreviewAuthenticated ? 'Buka menu Edit Admin' : 'Login Admin');
  adminOpenButton.title = adminPreviewAuthenticated ? 'Edit Admin' : 'Login Admin';
}

window.addEventListener('scroll', scheduleNavbarUpdate, { passive: true });
window.addEventListener('resize', resetIndicator);
window.addEventListener('resize', alignMobileMenuWithDate);
updateClock();
window.setInterval(updateClock, 1000);
updateNavbar();

navLinks.forEach((link) => {
  link.addEventListener('pointerenter', () => moveIndicator(link));
  link.addEventListener('focus', () => moveIndicator(link));
});
desktopNav?.addEventListener('pointerleave', resetIndicator);
resetIndicator();

document.querySelectorAll('.catalog-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const wrap = toggle.closest('.catalog-wrap');
    const isOpen = wrap.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    catalogMenu.classList.toggle('is-open', isOpen);
    catalogMenu.setAttribute('aria-hidden', String(!isOpen));
    catalogMenu.inert = !isOpen;
  });
});

catalogMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    catalogMenu.classList.remove('is-open');
    catalogMenu.setAttribute('aria-hidden', 'true');
    catalogMenu.inert = true;
    document.querySelectorAll('.catalog-toggle').forEach((toggle) => {
      toggle.closest('.catalog-wrap').classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});

menuButton.addEventListener('click', () => {
  setMobileMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});
mobileBackdrop.addEventListener('click', () => setMobileMenu(false));
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMobileMenu(false));
});

document.querySelector('.mobile-catalog-toggle').addEventListener('click', (event) => {
  const toggle = event.currentTarget;
  const items = document.querySelector('.mobile-catalog-items');
  const expanded = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(expanded));
  items.classList.toggle('is-open', expanded);
  items.setAttribute('aria-hidden', String(!expanded));
  items.inert = !expanded;
});

navSearchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  productSearchSuggestions.hidden = true;
  navSearchInput.setAttribute('aria-expanded', 'false');
  searchInput.value = navSearchInput.value.trim();
  searchInput.dispatchEvent(new Event('input', { bubbles: true }));
  setSearch(true);
});

navSearchInput.addEventListener('input', () => {
  activeProductQuery = navSearchInput.value.trim();
  renderProductGrid();
  renderProductSearchSuggestions(navSearchInput.value);
});

navSearchInput.addEventListener('focus', () => {
  renderProductSearchSuggestions(navSearchInput.value);
});

navSearchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    productSearchSuggestions.hidden = true;
    navSearchInput.setAttribute('aria-expanded', 'false');
  }
});

cartButton.addEventListener('click', () => {
  toggleActionPopover(cartButton, cartPopover);
  if (getCartQuantity() > 0) {
    showNotice(`${getCartQuantity()} item di keranjang · Total ${formatRupiah(getCartTotal())}`);
  }
});
adminOpenButton.addEventListener('click', () => {
  closeActionPopovers();
  if (adminPreviewAuthenticated) {
    setAdminPanel(true);
    return;
  }
  adminLoginError.hidden = true;
  adminLoginError.textContent = '';
  adminLoginPassword.type = 'password';
  adminLoginPasswordToggle.setAttribute('aria-pressed', 'false');
  adminLoginPasswordToggle.setAttribute('aria-label', 'Tampilkan kata sandi');
  adminLoginDialog.showModal();
  adminLoginEmail.focus();
});
adminQrisOpenButton.addEventListener('click', () => {
  setAdminPanel(false);
  setAdminQrisPanel(true);
});
adminStoreVideoOpenButton.addEventListener('click', () => {
  setAdminPanel(false);
  setAdminStoreVideoPanel(true);
});
adminProductImageInput.addEventListener('change', async () => {
  const selectionVersion = ++adminImageSelectionVersion;
  const files = [...adminProductImageInput.files];
  adminProductImageStatus.classList.remove('is-error');
  adminProductSubmit.disabled = false;
  adminProductSubmit.textContent = adminProductEditingId ? 'Simpan perubahan' : 'Simpan Permanen';

  const invalidFile = files.find((file) => !file.type.startsWith('image/'));
  if (invalidFile) {
    adminProductImageInput.value = '';
    adminProductImageStatus.textContent = `${invalidFile.name} bukan file gambar yang didukung.`;
    adminProductImageStatus.classList.add('is-error');
    return;
  }

  const oversizedFile = files.find((file) => file.size > 5 * 1024 * 1024);
  if (oversizedFile) {
    adminProductImageInput.value = '';
    adminProductImageStatus.textContent = `${oversizedFile.name} melebihi batas 5 MB. Pilih gambar yang lebih kecil.`;
    adminProductImageStatus.classList.add('is-error');
    return;
  }

  if (files.length === 0) {
    adminProductImageStatus.textContent = adminProductEditingId
      ? 'Gambar lama dipertahankan. Pilih gambar lagi untuk menambahkan foto.'
      : 'Pilih gambar untuk produk baru.';
    return;
  }

  const uniqueNewFiles = files.filter((file) => !adminProductSelectedFiles.some((selectedFile) =>
    selectedFile.name === file.name
      && selectedFile.size === file.size
      && selectedFile.lastModified === file.lastModified
  ));
  const existingProduct = adminProductEditingId
    ? catalogProducts.find((product) => product.id === adminProductEditingId)
    : null;
  const existingMediaImages = existingProduct
    ? (existingProduct.demoGallery ? [existingProduct.image] : (existingProduct.images || [existingProduct.image]))
    : [];
  const existingImageCount = existingMediaImages.filter((_, index) =>
    !adminProductRemovedImageIndexes.has(index)
  ).length;
  const selectedFiles = [...adminProductSelectedFiles, ...uniqueNewFiles];
  if (existingImageCount + selectedFiles.length > MAX_PRODUCT_IMAGES) {
    adminProductImageInput.value = '';
    adminProductImageStatus.textContent = `Produk ini sudah memiliki ${existingImageCount} gambar. Maksimal ${MAX_PRODUCT_IMAGES} gambar; tambahkan ${Math.max(0, MAX_PRODUCT_IMAGES - existingImageCount)} gambar lagi.`;
    adminProductImageStatus.classList.add('is-error');
    return;
  }
  adminProductSelectedFiles = selectedFiles;
  adminProductImageInput.value = '';
  adminProductSubmit.disabled = true;
  adminProductSubmit.textContent = 'Mendeteksi warna...';
  refreshAdminProductImagePreviews(existingMediaImages);
  adminProductImageStatus.textContent = `${existingImageCount + selectedFiles.length} dari maksimal ${MAX_PRODUCT_IMAGES} gambar dipilih. Mendeteksi perkiraan warna...`;
  const detectedColorResults = await Promise.all(selectedFiles.map(async (file) => {
    try {
      return { file, color: await detectDominantProductColor(file) };
    } catch {
      return { file, color: null };
    }
  }));
  if (selectionVersion !== adminImageSelectionVersion) return;
  adminProductSubmit.disabled = false;
  adminProductSubmit.textContent = adminProductEditingId ? 'Simpan perubahan' : 'Simpan Permanen';

  detectedColorResults.forEach(({ file, color }) => {
    if (color) adminProductDetectedColorsByFile.set(file, color);
    else adminProductDetectedColorsByFile.delete(file);
  });
  syncAdminProductColorsFromImages();
  const detectedColors = [...getDetectedAdminProductColors()];
  const failedDetectionCount = detectedColorResults.filter((result) => !result.color).length;
  const colorNames = detectedColors.map((color) => productColors[color]).join(', ');
  adminProductImageStatus.textContent = `${existingImageCount + selectedFiles.length} dari maksimal ${MAX_PRODUCT_IMAGES} gambar siap. Perkiraan warna dominan: ${colorNames || 'tidak terdeteksi'}${failedDetectionCount ? `; ${failedDetectionCount} gambar perlu dipilih warnanya manual` : ''}. Gambar diunggah saat produk disimpan.`;
});
adminCloseButtons.forEach((button) => button.addEventListener('click', () => setAdminPanel(false)));
adminQrisCloseButtons.forEach((button) => button.addEventListener('click', () => setAdminQrisPanel(false)));
adminStoreVideoCloseButtons.forEach((button) => button.addEventListener('click', () => setAdminStoreVideoPanel(false)));
document.querySelector('#admin-login-close').addEventListener('click', () => adminLoginDialog.close());
sizeChartCloseButton.addEventListener('click', () => sizeChartDialog.close());
sizeChartDialog.addEventListener('click', (event) => {
  if (event.target === sizeChartDialog) sizeChartDialog.close();
});
adminLoginPasswordToggle.addEventListener('click', () => {
  const isVisible = adminLoginPassword.type === 'text';
  adminLoginPassword.type = isVisible ? 'password' : 'text';
  adminLoginPasswordToggle.setAttribute('aria-pressed', String(!isVisible));
  adminLoginPasswordToggle.setAttribute(
    'aria-label',
    isVisible ? 'Tampilkan kata sandi' : 'Sembunyikan kata sandi'
  );
});

adminQrisImageInput.addEventListener('change', () => {
  const [file] = adminQrisImageInput.files;
  if (!file) return;
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 5 * 1024 * 1024) {
    adminQrisStatus.textContent = 'Pilih gambar JPG, PNG, atau WebP berukuran maksimal 5 MB.';
    adminQrisStatus.classList.add('is-error');
    adminQrisImageInput.value = '';
    return;
  }
  if (qrisImageObjectUrl) URL.revokeObjectURL(qrisImageObjectUrl);
  qrisImageObjectUrl = URL.createObjectURL(file);
  adminQrisPreviewImage.src = qrisImageObjectUrl;
  adminQrisStatus.textContent = 'Pratinjau QRIS siap. Klik Simpan QRIS untuk menyimpan perubahan.';
  adminQrisStatus.classList.remove('is-error');
});

adminStoreVideoInput.addEventListener('change', () => {
  const [file] = adminStoreVideoInput.files;
  if (!file) return;
  if (!['video/mp4', 'video/webm'].includes(file.type) || file.size > 50 * 1024 * 1024) {
    adminStoreVideoStatus.textContent = 'Pilih video MP4 atau WebM berukuran maksimal 50 MB.';
    adminStoreVideoStatus.classList.add('is-error');
    adminStoreVideoInput.value = '';
    return;
  }
  if (storeVideoObjectUrl) URL.revokeObjectURL(storeVideoObjectUrl);
  storeVideoObjectUrl = URL.createObjectURL(file);
  resetStoreVideoAspectRatio(adminStoreVideoPreview);
  adminStoreVideoPreview.defaultMuted = false;
  adminStoreVideoPreview.muted = false;
  adminStoreVideoPreview.volume = 1;
  adminStoreVideoPreview.src = storeVideoObjectUrl;
  adminStoreVideoPreview.hidden = false;
  adminStoreVideoEmpty.hidden = true;
  adminStoreVideoPreview.load();
  adminStoreVideoStatus.textContent = 'Pratinjau video siap. Klik Simpan video untuk menerbitkannya.';
  adminStoreVideoStatus.classList.remove('is-error');
});

async function saveAdminQrisImage(event) {
  event.preventDefault();
  const [file] = adminQrisImageInput.files;
  if (!file) {
    adminQrisStatus.textContent = 'Pilih gambar QRIS terlebih dahulu.';
    adminQrisStatus.classList.add('is-error');
    return;
  }

  adminQrisSaveButton.disabled = true;
  adminQrisSaveButton.textContent = 'Menyimpan QRIS...';
  let uploadedPath = null;
  let settingSaved = false;
  try {
    const extensionByType = {
      'image/jpeg': 'jpg',
      'image/png': 'png',
      'image/webp': 'webp'
    };
    const extension = extensionByType[file.type];
    if (!extension || file.size > 5 * 1024 * 1024) {
      throw new Error('Pilih gambar JPG, PNG, atau WebP berukuran maksimal 5 MB.');
    }

    uploadedPath = `store/qris-${crypto.randomUUID()}.${extension}`;
    const { error: uploadError } = await getSupabaseClient()
      .storage.from(SUPABASE_QRIS_BUCKET)
      .upload(uploadedPath, file, { contentType: file.type, cacheControl: '3600', upsert: false });
    if (uploadError) throw uploadError;

    const { error: settingError } = await getSupabaseClient()
      .from('store_settings')
      .upsert({
        key: 'qris_image_path',
        value: uploadedPath,
        updated_at: new Date().toISOString()
      });
    if (settingError) throw settingError;
    settingSaved = true;

    const oldPath = savedQrisImagePath;
    savedQrisImagePath = uploadedPath;
    const publicImageUrl = getQrisImageUrl(savedQrisImagePath);
    checkoutQrisImage.src = publicImageUrl;
    adminQrisPreviewImage.src = publicImageUrl;
    if (oldPath && oldPath !== uploadedPath) {
      const { error: removeError } = await getSupabaseClient()
        .storage.from(SUPABASE_QRIS_BUCKET).remove([oldPath]);
      if (removeError) {
        adminQrisStatus.textContent = `QRIS tersimpan, tetapi gambar lama gagal dihapus: ${removeError.message}`;
      } else {
        adminQrisStatus.textContent = 'QRIS baru berhasil disimpan online.';
      }
    } else {
      adminQrisStatus.textContent = 'QRIS berhasil disimpan online.';
    }
    if (qrisImageObjectUrl) URL.revokeObjectURL(qrisImageObjectUrl);
    qrisImageObjectUrl = null;
    adminQrisForm.reset();
    showNotice('Gambar QRIS berhasil diperbarui.');
  } catch (error) {
    adminQrisStatus.textContent = `QRIS gagal disimpan: ${error.message}`;
    adminQrisStatus.classList.add('is-error');
    if (!settingSaved && uploadedPath) {
      const { error: cleanupError } = await getSupabaseClient()
        .storage.from(SUPABASE_QRIS_BUCKET).remove([uploadedPath]);
      if (cleanupError) console.error('Gagal membersihkan unggahan QRIS yang tidak tersimpan:', cleanupError);
    }
  } finally {
    adminQrisSaveButton.disabled = false;
    adminQrisSaveButton.textContent = 'Simpan QRIS';
  }
}

async function saveAdminStoreVideo(event) {
  event.preventDefault();
  const [file] = adminStoreVideoInput.files;
  if (!file) {
    adminStoreVideoStatus.textContent = 'Pilih video terlebih dahulu.';
    adminStoreVideoStatus.classList.add('is-error');
    return;
  }

  adminStoreVideoSaveButton.disabled = true;
  adminStoreVideoSaveButton.textContent = 'Menyimpan video...';
  let uploadedPath = null;
  let settingSaved = false;
  try {
    const extensionByType = {
      'video/mp4': 'mp4',
      'video/webm': 'webm'
    };
    const extension = extensionByType[file.type];
    if (!extension || file.size > 50 * 1024 * 1024) {
      throw new Error('Pilih video MP4 atau WebM berukuran maksimal 50 MB.');
    }

    uploadedPath = `store/video-${crypto.randomUUID()}.${extension}`;
    const { error: uploadError } = await getSupabaseClient()
      .storage.from(SUPABASE_STORE_VIDEO_BUCKET)
      .upload(uploadedPath, file, { contentType: file.type, cacheControl: '3600', upsert: false });
    if (uploadError) throw uploadError;

    const { error: settingError } = await getSupabaseClient()
      .from('store_settings')
      .upsert({
        key: 'store_video_path',
        value: uploadedPath,
        updated_at: new Date().toISOString()
      });
    if (settingError) throw settingError;
    settingSaved = true;

    const oldPath = savedStoreVideoPath;
    savedStoreVideoPath = uploadedPath;
    showStoreVideo(savedStoreVideoPath);
    if (oldPath && oldPath !== uploadedPath) {
      const { error: removeError } = await getSupabaseClient()
        .storage.from(SUPABASE_STORE_VIDEO_BUCKET).remove([oldPath]);
      if (removeError) {
        adminStoreVideoStatus.textContent = `Video baru tersimpan, tetapi video lama gagal dihapus: ${removeError.message}`;
      } else {
        adminStoreVideoStatus.textContent = 'Video baru berhasil disimpan online.';
      }
    } else {
      adminStoreVideoStatus.textContent = 'Video berhasil disimpan online.';
    }
    if (storeVideoObjectUrl) URL.revokeObjectURL(storeVideoObjectUrl);
    storeVideoObjectUrl = null;
    adminStoreVideoForm.reset();
    showNotice('Video toko berhasil diperbarui.');
  } catch (error) {
    adminStoreVideoStatus.textContent = `Video toko gagal disimpan: ${error.message}`;
    adminStoreVideoStatus.classList.add('is-error');
    if (!settingSaved && uploadedPath) {
      const { error: cleanupError } = await getSupabaseClient()
        .storage.from(SUPABASE_STORE_VIDEO_BUCKET).remove([uploadedPath]);
      if (cleanupError) console.error('Gagal membersihkan video yang tidak tersimpan:', cleanupError);
    }
  } finally {
    adminStoreVideoSaveButton.disabled = false;
    adminStoreVideoSaveButton.textContent = 'Simpan video';
  }
}

adminProductSizeChartInput.addEventListener('change', () => {
  const [file] = adminProductSizeChartInput.files;
  if (!file) return;
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 5 * 1024 * 1024) {
    adminProductSizeChartStatus.textContent = 'Pilih gambar JPG, PNG, atau WebP berukuran maksimal 5 MB.';
    adminProductSizeChartStatus.classList.add('is-error');
    adminProductSizeChartInput.value = '';
    return;
  }
  if (adminProductSizeChartObjectUrl) URL.revokeObjectURL(adminProductSizeChartObjectUrl);
  adminProductSizeChartObjectUrl = URL.createObjectURL(file);
  adminProductSizeChartPreview.parentElement.hidden = false;
  adminProductSizeChartPreview.src = adminProductSizeChartObjectUrl;
  adminProductSizeChartPreview.hidden = false;
  adminProductSizeChartRemoveButton.hidden = false;
  adminProductRemoveSizeChart = false;
  adminProductSizeChartStatus.textContent = 'Size chart dipilih. Klik Simpan Permanen atau Simpan perubahan pada produk.';
  adminProductSizeChartStatus.classList.remove('is-error');
});

adminProductSizeChartRemoveButton.addEventListener('click', () => {
  const product = catalogProducts.find((item) => item.id === adminProductEditingId);
  const hasSavedChart = Boolean(product?.sizeChartImagePath);
  if (adminProductSizeChartObjectUrl) URL.revokeObjectURL(adminProductSizeChartObjectUrl);
  adminProductSizeChartObjectUrl = null;
  adminProductSizeChartInput.value = '';
  adminProductRemoveSizeChart = hasSavedChart;
  adminProductSizeChartPreview.removeAttribute('src');
  adminProductSizeChartPreview.hidden = true;
  adminProductSizeChartPreview.parentElement.hidden = true;
  adminProductSizeChartRemoveButton.hidden = true;
  adminProductSizeChartStatus.textContent = hasSavedChart
    ? 'Size chart akan dihapus dari produk saat menyimpan perubahan.'
    : 'Size chart yang dipilih dibatalkan.';
  adminProductSizeChartStatus.classList.remove('is-error');
});

feedbackSubmitButton.addEventListener('click', async () => {
  const name = feedbackNameInput.value.trim();
  const message = feedbackMessageInput.value.trim();
  if (!name || !message || name.length > 100 || message.length < 3 || message.length > 2000) {
    feedbackNote.textContent = 'Isi nama dan komentar (3–2000 karakter) sebelum mengirim.';
    feedbackNote.classList.add('is-error');
    return;
  }

  feedbackSubmitButton.disabled = true;
  feedbackNote.classList.remove('is-error');
  feedbackNote.textContent = 'Mengirim komentar...';
  try {
    const { error } = await getSupabaseClient()
      .from('feedback')
      .insert({ name, message });
    if (error) throw error;
    feedbackNameInput.value = '';
    feedbackMessageInput.value = '';
    feedbackNote.textContent = 'Terima kasih! Kritik dan saran kamu berhasil disimpan.';
  } catch (error) {
    feedbackNote.textContent = `Komentar gagal disimpan: ${error.message}`;
    feedbackNote.classList.add('is-error');
  } finally {
    feedbackSubmitButton.disabled = false;
  }
});

adminLoginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!adminLoginForm.reportValidity()) return;
  adminLoginSubmit.disabled = true;
  adminLoginError.hidden = true;
  adminLoginError.textContent = '';
  try {
    const client = getSupabaseClient();
    const { data, error } = await client.auth.signInWithPassword({
      email: adminLoginEmail.value.trim(),
      password: adminLoginPassword.value
    });
    if (error) throw error;
    if (!data.user || !await isSupabaseAdmin(data.user)) {
      await client.auth.signOut();
      throw new Error('Akun ini belum diberi akses admin. Tambahkan User ID akun ke tabel admin_users.');
    }
    adminPreviewAuthenticated = true;
    adminLoginDialog.close();
    adminLoginForm.reset();
    updateAdminLoginButton();
    await loadAdminOrderPreviews();
    selectAdminTab('products');
    setAdminPanel(true);
  } catch (error) {
    adminLoginError.textContent = error.message;
    adminLoginError.hidden = false;
  } finally {
    adminLoginSubmit.disabled = false;
  }
});

adminLogoutButton.addEventListener('click', async () => {
  adminLogoutButton.disabled = true;
  try {
    const { error } = await getSupabaseClient().auth.signOut();
    if (error) throw error;
    adminPreviewAuthenticated = false;
    resetAdminProductForm();
    setAdminQrisPanel(false);
    setAdminPanel(false);
    updateAdminLoginButton();
    showNotice('Sesi admin sudah keluar.');
  } catch (error) {
    showNotice(`Logout gagal: ${error.message}`);
  } finally {
    adminLogoutButton.disabled = false;
  }
});

document.querySelectorAll('[data-admin-tab]').forEach((tab) => {
  tab.addEventListener('click', () => {
    selectAdminTab(tab.dataset.adminTab);
  });
});

adminProductForm.querySelector('.admin-color-choices').addEventListener('change', (event) => {
  if (event.target.matches('input[name="colors"]')) {
    const detectedColors = getDetectedAdminProductColors();
    adminProductBaseColors = [...adminProductForm.querySelectorAll('input[name="colors"]:checked')]
      .map((colorInput) => colorInput.value)
      .filter((color) => !detectedColors.has(color));
    renderAdminProductColorStockFields();
  }
});

document.querySelectorAll('[data-admin-form]').forEach((form) => {
  if (form === adminProductForm) {
    form.addEventListener('submit', saveAdminProduct);
    return;
  }
  if (form === adminCategoryForm) {
    form.addEventListener('submit', saveAdminCategory);
    return;
  }
  if (form === adminQrisForm) {
    form.addEventListener('submit', saveAdminQrisImage);
    return;
  }
  if (form === adminStoreVideoForm) {
    form.addEventListener('submit', saveAdminStoreVideo);
    return;
  }
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    showNotice('Fitur ini belum tersedia pada mode tes.');
  });
});
adminProductCancelEdit.addEventListener('click', resetAdminProductForm);
adminProductPreviewButton.addEventListener('click', () => {
  const productId = adminProductPreviewButton.dataset.productId;
  activeProductQuery = '';
  searchInput.value = '';
  navSearchInput.value = '';
  setActiveProductFilter('all');
  setAdminPanel(false);
  const productCard = findProductCard(productId);
  if (!productCard) {
    showNotice('Produk tersimpan, tetapi belum ditemukan di katalog.');
    return;
  }
  productCard.scrollIntoView({ behavior: 'instant', block: 'center' });
  productCard.querySelector('.product-detail-toggle')?.click();
});

checkoutButton.addEventListener('click', () => {
  if (getCartQuantity() === 0) return;
  window.dispatchEvent(new CustomEvent('redx:checkout', {
    detail: { items: [...cartItems], total: getCartTotal() }
  }));
  closeActionPopovers();
  renderCheckoutSummary();
  checkoutQrisSection.hidden = true;
  checkoutShowQrisButton.setAttribute('aria-expanded', 'false');
  checkoutShowQrisButton.textContent = 'Tampilkan QRIS';
  checkoutDialog.showModal();
});
checkoutShowQrisButton.addEventListener('click', () => {
  const isHidden = checkoutQrisSection.hidden;
  checkoutQrisAmount.textContent = formatRupiah(getCartTotal());
  checkoutQrisSection.hidden = !isHidden;
  checkoutShowQrisButton.setAttribute('aria-expanded', String(isHidden));
  checkoutShowQrisButton.textContent = isHidden ? 'Sembunyikan QRIS' : 'Tampilkan QRIS';
});
let isSavingWhatsAppOrder = false;
async function saveOrderAndOpenWhatsApp(event) {
  event.preventDefault();
  if (isSavingWhatsAppOrder) return;
  if (cartItems.length === 0) {
    showNotice('Keranjang kosong. Tambahkan produk sebelum menghubungi WhatsApp.');
    return;
  }

  isSavingWhatsAppOrder = true;
  const whatsappUrl = checkoutWhatsAppLink.href;
  const whatsappWindow = window.open('about:blank', '_blank');
  if (whatsappWindow) whatsappWindow.opener = null;

  try {
    const saved = await createAdminOrderPreview();
    if (!saved) {
      whatsappWindow?.close();
      return;
    }
    if (whatsappWindow) {
      whatsappWindow.location.href = whatsappUrl;
    } else {
      window.location.href = whatsappUrl;
    }
  } finally {
    isSavingWhatsAppOrder = false;
  }
}
checkoutCreateOrderButton.addEventListener('click', saveOrderAndOpenWhatsApp);
checkoutWhatsAppLink.addEventListener('click', saveOrderAndOpenWhatsApp);

document.querySelectorAll('[data-add-to-cart]').forEach((button) => {
  button.addEventListener('click', () => addRedxToCart({
    id: button.dataset.productId,
    name: button.dataset.productName,
    price: Number(button.dataset.productPrice),
    quantity: Number(button.dataset.productQuantity) || 1
  }));
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.popover-anchor')) closeActionPopovers();
  if (!event.target.closest('.product-search-wrap')) {
    productSearchSuggestions.hidden = true;
    navSearchInput.setAttribute('aria-expanded', 'false');
  }
  if (!event.target.closest('.catalog-wrap') && !event.target.closest('#catalog-menu')) {
    catalogMenu.classList.remove('is-open');
    catalogMenu.setAttribute('aria-hidden', 'true');
    catalogMenu.inert = true;
    document.querySelectorAll('.catalog-toggle').forEach((toggle) => {
      toggle.closest('.catalog-wrap').classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }
});

document.querySelectorAll('[data-search-close]').forEach((button) => {
  button.addEventListener('click', () => setSearch(false));
});

document.querySelector('[data-product-detail-close]').addEventListener('click', () => {
  productDetailDialog.close();
});

document.querySelectorAll('[data-checkout-close]').forEach((button) => {
  button.addEventListener('click', () => checkoutDialog.close());
});

productDetailDialog.addEventListener('click', (event) => {
  if (event.target === productDetailDialog) productDetailDialog.close();
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();
  navSearchInput.value = query;
  activeProductQuery = query;
  renderProductGrid();
  renderSearchResults(query);
});

document.querySelectorAll('[data-query]').forEach((button) => {
  button.addEventListener('click', () => {
    searchInput.value = button.dataset.query;
    searchInput.dispatchEvent(new Event('input'));
    searchInput.focus();
  });
});

wishlistButton.addEventListener('click', () => {
  showNotice(wishlistItems.length > 0
    ? `${wishlistItems.length} produk tersimpan di wishlist.`
    : 'Wishlist masih kosong.');
});

renderCart();
renderWishlistCount();
renderProductGrid();
renderAdminCatalogManagement();
renderAdminProductColorStockFields();
updateAdminLoginButton();
selectAdminTab(savedAdminSessionState.activeTab);
void initializeAdminPreview();

const footerThanks = document.querySelector('.footer-thanks');
if (footerThanks && 'IntersectionObserver' in window && !reduceMotion) {
  const lines = [...footerThanks.querySelectorAll('.footer-thanks-line > span')];
  const messages = lines.map((line) => line.textContent);
  lines.forEach((line) => { line.textContent = ''; });
  footerThanks.classList.add('will-type');
  const footerObserver = new IntersectionObserver((entries, observer) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      footerThanks.classList.add('is-typing');
      observer.disconnect();

      const typeLine = (lineIndex, characterIndex = 0) => {
        if (lineIndex >= lines.length) {
          window.setTimeout(eraseLine, 1800, lines.length - 1, messages.length ? messages[messages.length - 1].length : 0);
          return;
        }
        if (characterIndex >= messages[lineIndex].length) {
          window.setTimeout(typeLine, 180, lineIndex + 1, 0);
          return;
        }
        lines[lineIndex].textContent = messages[lineIndex].slice(0, characterIndex + 1);
        window.setTimeout(typeLine, 110, lineIndex, characterIndex + 1);
      };
      const eraseLine = (lineIndex, characterIndex) => {
        if (lineIndex < 0) {
          window.setTimeout(typeLine, 700, 0, 0);
          return;
        }
        if (characterIndex <= 0) {
          lines[lineIndex].textContent = '';
          window.setTimeout(eraseLine, 35, lineIndex - 1, lineIndex > 0 ? messages[lineIndex - 1].length : 0);
          return;
        }
        lines[lineIndex].textContent = messages[lineIndex].slice(0, characterIndex - 1);
        window.setTimeout(eraseLine, 35, lineIndex, characterIndex - 1);
      };

      typeLine(0);
    }
  }, { threshold: 0.35 });
  footerObserver.observe(footerThanks);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (searchModal.classList.contains('is-open')) setSearch(false);
    if (document.body.classList.contains('menu-open')) setMobileMenu(false);
    if (adminStoreVideoPanel.classList.contains('is-open')) setAdminStoreVideoPanel(false);
    if (adminQrisPanel.classList.contains('is-open')) setAdminQrisPanel(false);
    if (adminPanel.classList.contains('is-open')) setAdminPanel(false);
      closeActionPopovers();
    catalogMenu.classList.remove('is-open');
    catalogMenu.setAttribute('aria-hidden', 'true');
    catalogMenu.inert = true;
    document.querySelectorAll('.catalog-wrap.is-open').forEach((wrap) => {
      wrap.classList.remove('is-open');
      wrap.querySelector('.catalog-toggle').setAttribute('aria-expanded', 'false');
    });
  }
});
