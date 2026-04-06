//
//

// mb-nav
const menu = document.querySelector(".mb-menu");
const btn = document.querySelector(".mb-menu i");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

//
//

// introduce
const caption = document.querySelector(".introduce-section .caption");
const boxes = document.querySelectorAll(".introduce-section .s-box");

window.addEventListener("scroll", () => {
  const rect = caption.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);

  boxes.forEach((el, i) => {
    // 🔥 줄마다 딜레이 주기 (핵심)
    const delay = i * 0.05; // 숫자 줄이면 더 자연스러움
    const adjusted = Math.min(Math.max(progress - delay, 0), 1);

    const x = 100 - adjusted * 100;
    const y = 100 - adjusted * 100;

    el.style.backgroundPosition = `${x}% ${y}%`;
  });
});

// show 효과
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -200px 0px",
  },
);

sections.forEach((section) => observer.observe(section));

//
// app-img
const appImages = document.querySelectorAll(".app-img img");

const appGap = 4; // 보여줄 시간을 바꾸실 여기 수정
const appTotal = appImages.length * appGap;

appImages.forEach((img, i) => {
  img.style.animationDuration = `${appTotal}s`;
  img.style.animationDelay = `${i * appGap}s`;
});

// branding-img
const brandingImages = document.querySelectorAll(".branding-img img");

const brandingGap = 4; // 보여줄 시간을 바꾸실 여기 수정
const brandingTotal = brandingImages.length * brandingGap;

brandingImages.forEach((img, i) => {
  img.style.animationDuration = `${brandingTotal}s`;
  img.style.animationDelay = `${i * brandingGap}s`;
});

//

// detail-page
const detailPg = gsap.timeline();
detailPg
  .from("#detail .info1", {
    y: -100,
    autoAlpha: 0,
    borderRadius: 200,
  })
  .from("#detail .info2", {
    y: 100,
    autoAlpha: 0,
    borderRadius: 200,
  });
ScrollTrigger.create({
  animation: detailPg, // 미리 정의된 GSAP 애니메이션 객체
  trigger: "#detail", // 스크롤 트리거를 활성화 할 요소의 선택자
  start: "top top", // 스크롤 트리거가 시작되는 지점을 설정
  end: "+=2000", // 스크롤 트리거가 끝나는 지점을 설정(2000픽셀 길이 동안 지속됨)
  scrub: true, // 스크롤 동기화
  pin: true, // 스크롤 트리거가 활성화되는 동안 요소를 고정
  anticipatePin: 1, // 값이 높을수록 더 부드러운 핀 동작을 제공(1은 약간지연)
});
//
//

const detailImgs = document.querySelectorAll(".detail-img");
const popups = document.querySelectorAll(".popupbox");

detailImgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    // document.body.style.overflow = "hidden";
    popups[index].classList.add("active");
  });
});

popups.forEach((popup) => {
  popup.addEventListener("click", () => {
    // document.body.style.overflow = "auto";
    popup.classList.remove("active");
  });
});

// card-news
const cardNews = gsap.timeline();
cardNews
  .from("#cardnews .img1", {
    y: -100,
    autoAlpha: 0,
    borderRadius: 200,
  })
  .from("#cardnews .img2", {
    y: 100,
    autoAlpha: 0,
    borderRadius: 200,
  })
  .from("#cardnews .img3", {
    y: -100,
    autoAlpha: 0,
    borderRadius: 200,
  })
  .from("#cardnews .img4", {
    y: 100,
    autoAlpha: 0,
    borderRadius: 200,
  });
ScrollTrigger.create({
  animation: cardNews, // 미리 정의된 GSAP 애니메이션 객체
  trigger: "#cardnews", // 스크롤 트리거를 활성화 할 요소의 선택자
  start: "top top", // 스크롤 트리거가 시작되는 지점을 설정
  end: "+=2000", // 스크롤 트리거가 끝나는 지점을 설정(2000픽셀 길이 동안 지속됨)
  scrub: true, // 스크롤 동기화
  pin: true, // 스크롤 트리거가 활성화되는 동안 요소를 고정
  anticipatePin: 1, // 값이 높을수록 더 부드러운 핀 동작을 제공(1은 약간지연)
});

const newsImgs = document.querySelectorAll(".news-img");
const newsPopups = document.querySelectorAll(".news-popupbox");

newsImgs.forEach((newsImgs, index) => {
  newsImgs.addEventListener("click", () => {
    // document.body.style.overflow = "hidden";
    newsPopups[index].classList.add("active");
  });
});

newsPopups.forEach((newsPopup) => {
  newsPopup.addEventListener("click", () => {
    // document.body.style.overflow = "auto";
    newsPopup.classList.remove("active");
  });
});

//
//

// porfile - mb 제어
const buttons = document.querySelectorAll(".mb-respons-btn .btn");
const infos = document.querySelectorAll(".info-wrap .info");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // 버튼 상태 초기화
    buttons.forEach((b) => b.classList.remove("show"));

    // info 초기화
    infos.forEach((info) => info.classList.remove("show"));

    // 클릭한 것만 활성화
    btn.classList.add("show");
    infos[index].classList.add("show");
  });
});

/**
 *
 * 안 쓰는 JS
 *
 * const panels = gsap.utils.toArray(".item");
panels.forEach((panel, index) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    end: "+=100%",
    pin: true,
    pinSpacing: false,
    scrub: true,
  });
});

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const panels = gsap.utils.toArray(".item");

const triggers = panels.map((panel) => {
  return ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    end: "+=100%",
    pin: true,
    scrub: true,
    pinSpacing: false,
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    // 👉 해당 panel index 찾기
    const panelIndex = panels.indexOf(target);

    if (panelIndex === -1) return;

    const y = triggers[panelIndex].start; // 🔥 핵심

    gsap.to(window, {
      scrollTo: y,
      duration: 1,
      ease: "power2.out",
    });
  });
});

초기 계산 보정
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});



gsap.utils.toArray(".item").forEach((section) => {
  const title = section.querySelector(".title");
  const contents = section.querySelectorAll(
    ".info, .publisher-card, .app-wrap, .branding-wrap",
  );

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
  });

  // title
  if (section.classList.contains("profile-section")) {
    tl.from(title.querySelectorAll("div"), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    });
  } else {
    tl.from(title, {
      y: 50,
      opacity: 0,
      duration: 0.8,
    });
  }

  // contents (🔥 핵심)
  tl.from(
    contents,
    {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    },
    "+=0.2",
  );
});
 */
