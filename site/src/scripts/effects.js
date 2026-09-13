const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const scrollBehavior = reduceMotion ? "auto" : "smooth";

function onScrollFrame(callback) {
  let queued = false;
  const run = () => {
    queued = false;
    callback();
  };
  const schedule = () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(run);
    }
  };
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  callback();
}

function initReveal() {
  const elements = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
  );
  elements.forEach((el) => observer.observe(el));
}

function initFlipWords() {
  if (reduceMotion) return;
  document.querySelectorAll("[data-flip]").forEach((el) => {
    const words = JSON.parse(el.dataset.flip);
    const word = el.querySelector(".flip-word");
    if (!word || words.length < 2) return;
    let index = 0;
    setInterval(() => {
      word.classList.add("is-leaving");
      setTimeout(() => {
        index = (index + 1) % words.length;
        word.textContent = words[index];
        word.style.transition = "none";
        word.classList.remove("is-leaving");
        word.classList.add("is-entering");
        void word.offsetWidth;
        word.style.transition = "";
        word.classList.remove("is-entering");
      }, 420);
    }, 2600);
  });
}

function initSpotlights() {
  if (!finePointer) return;
  const spotlights = [...document.querySelectorAll("[data-spotlight]")];
  const pointer = { x: -9999, y: -9999 };

  const place = (el) => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${pointer.x - rect.left}px`);
    el.style.setProperty("--my", `${pointer.y - rect.top}px`);
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    },
    { passive: true },
  );

  spotlights.forEach((el) => {
    el.addEventListener("pointermove", () => place(el));
    el.addEventListener("pointerenter", (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      place(el);
    });
  });

  // pointermove doesn't fire while scrolling, so a still cursor would leave the glow behind
  onScrollFrame(() => {
    for (const el of spotlights) {
      if (el.matches(":hover")) place(el);
    }
  });
}

function initTilt() {
  if (!finePointer || reduceMotion) return;
  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty("--gx", `${x * 100}%`);
      card.style.setProperty("--gy", `${y * 100}%`);
      card.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 8}deg) translateY(-4px)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function initMagnetic() {
  if (!finePointer || reduceMotion) return;
  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    el.addEventListener("pointermove", (event) => {
      const rect = el.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
    });
    el.addEventListener("pointerleave", () => {
      el.style.transform = "";
    });
  });
}

function initTimeline() {
  const timeline = document.querySelector("[data-timeline]");
  if (!timeline) return;
  const beam = timeline.querySelector("[data-timeline-beam]");
  const dots = [...timeline.querySelectorAll("[data-timeline-dot]")];
  onScrollFrame(() => {
    const rect = timeline.getBoundingClientRect();
    const anchor = window.innerHeight * 0.6;
    const progress = Math.min(1, Math.max(0, (anchor - rect.top) / rect.height));
    beam.style.transform = `scaleY(${progress})`;
    const reach = rect.top + progress * rect.height;
    for (const dot of dots) {
      dot.classList.toggle("is-lit", dot.getBoundingClientRect().top <= reach);
    }
  });
}

function initScrollProgress() {
  const bar = document.querySelector("[data-scroll-progress]");
  if (!bar) return;
  onScrollFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  });
}

// nav links point at blocks nested inside pages (e.g. #now inside #home), so each set gets its own observer
function trackActive(links, onActive) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onActive(`#${entry.target.id}`);
      }
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  links.forEach((link) => {
    const target = document.getElementById(link.getAttribute("href").slice(1));
    if (target) observer.observe(target);
  });
}

function initActiveNav() {
  const pad = (n) => String(n).padStart(2, "0");
  const counter = document.querySelector("[data-page-counter]");
  const navLinks = [...document.querySelectorAll("[data-nav-link]")];
  const pageLinks = [...document.querySelectorAll("[data-page-link]")];

  trackActive(navLinks, (href) => {
    navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === href));
  });

  trackActive(pageLinks, (href) => {
    pageLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === href));
    const index = pageLinks.findIndex((link) => link.getAttribute("href") === href);
    if (counter && index >= 0) counter.textContent = `${pad(index + 1)} / ${pad(pageLinks.length)}`;
  });
}

function initSkillExplorer() {
  const explorer = document.querySelector("[data-explorer]");
  if (!explorer) return;

  const root = document.documentElement;
  const sheet = explorer.querySelector("[data-explorer-sheet]");
  const launch = explorer.querySelector("[data-explorer-launch]");
  const counter = explorer.querySelector("[data-explorer-counter]");
  const prevButton = explorer.querySelector("[data-explorer-prev]");
  const nextButton = explorer.querySelector("[data-explorer-next]");
  const closeButton = explorer.querySelector("[data-explorer-close]");
  const chipRow = explorer.querySelector("[data-explorer-chips]");
  const list = explorer.querySelector("[data-explorer-results]");
  const hero = document.querySelector("[data-hero]");
  const chips = [...document.querySelectorAll("[data-skill]")];
  const targets = [...document.querySelectorAll("[data-skills]")];
  const { pick, usedInOne, usedInMany } = explorer.dataset;

  let open = false;
  let pastHero = false;
  let active = null;
  let matches = [];
  let current = -1;

  const labelFor = (key) =>
    chipRow.querySelector(`[data-skill="${key}"]`)?.dataset.label ??
    chips.find((chip) => chip.dataset.skill === key)?.dataset.label ??
    key;

  const updateLaunch = () => explorer.classList.toggle("show-launch", pastHero && !open);

  // keeps the footer reachable instead of hidden behind the open sheet
  const syncFooterSpace = () => {
    root.style.setProperty("--explorer-space", open ? `${sheet.offsetHeight + 32}px` : "0px");
  };

  const setOpen = (value) => {
    open = value;
    explorer.classList.toggle("is-open", open);
    root.classList.toggle("explorer-open", open);
    sheet.inert = !open;
    syncFooterSpace();
    updateLaunch();
  };

  const renderCounter = () => {
    if (!active) counter.textContent = "";
    else if (current >= 0) counter.textContent = `${current + 1} / ${matches.length}`;
    else counter.textContent = (matches.length === 1 ? usedInOne : usedInMany).replace("{n}", String(matches.length));
    prevButton.disabled = nextButton.disabled = matches.length === 0;
  };

  const scrollPageTo = (el) => {
    const top = el.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top, behavior: scrollBehavior });
  };

  const focusMatch = (index) => {
    if (matches.length === 0) return;
    current = (index + matches.length) % matches.length;
    matches.forEach((el, i) => el.classList.toggle("is-current", i === current));
    const items = [...list.querySelectorAll(".explorer-result")];
    items.forEach((item, i) => item.classList.toggle("is-current", i === current));
    list.scrollTo({ left: items[current].parentElement.offsetLeft - 8, behavior: scrollBehavior });
    scrollPageTo(matches[current]);
    renderCounter();
  };

  const renderResults = () => {
    if (!active) {
      const hint = document.createElement("li");
      hint.className = "explorer-hint";
      hint.textContent = pick;
      list.replaceChildren(hint);
      return;
    }
    list.replaceChildren(
      ...matches.map((el, i) => {
        const item = document.createElement("li");
        const button = document.createElement("button");
        button.type = "button";
        button.className = "explorer-result";
        const kind = document.createElement("span");
        kind.className = "explorer-result-kind";
        kind.textContent = el.dataset.kind;
        const title = document.createElement("span");
        title.className = "explorer-result-title";
        title.textContent = el.dataset.title;
        button.append(kind, title);
        button.addEventListener("click", () => focusMatch(i));
        item.append(button);
        return item;
      }),
    );
    list.scrollTo({ left: 0 });
  };

  const select = (key) => {
    active = key;
    matches = key ? targets.filter((el) => el.dataset.skills.split(" ").includes(key)) : [];
    current = -1;

    if (key) root.setAttribute("data-skill-active", key);
    else root.removeAttribute("data-skill-active");

    for (const chip of chips) {
      const selected = chip.dataset.skill === key;
      chip.classList.toggle("is-selected", selected);
      chip.setAttribute("aria-pressed", String(selected));
    }
    for (const el of targets) {
      el.classList.toggle("is-match", matches.includes(el));
      el.classList.remove("is-current");
    }

    renderResults();
    renderCounter();

    const sheetChip = key && chipRow.querySelector(`[data-skill="${key}"]`);
    if (sheetChip) chipRow.scrollTo({ left: sheetChip.offsetLeft - 8, behavior: scrollBehavior });
    if (open) syncFooterSpace();
  };

  const close = () => {
    select(null);
    setOpen(false);
  };

  document.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-skill]");
    if (!chip) return;
    const key = chip.dataset.skill;
    select(active === key ? null : key);
    if (active) setOpen(true);
    else if (!explorer.contains(chip)) setOpen(false);
  });

  launch.addEventListener("click", () => setOpen(true));
  closeButton.addEventListener("click", close);
  prevButton.addEventListener("click", () => focusMatch(current < 0 ? matches.length - 1 : current - 1));
  nextButton.addEventListener("click", () => focusMatch(current + 1));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && open) close();
  });

  window.addEventListener("resize", () => {
    if (open) syncFooterSpace();
  });

  if (hero) {
    new IntersectionObserver(([entry]) => {
      pastHero = !entry.isIntersecting;
      updateLaunch();
    }).observe(hero);
  }
}

function initScrollRows() {
  document.querySelectorAll("[data-scroll-row]").forEach((row) => {
    const update = () => {
      const max = row.scrollWidth - row.clientWidth;
      row.classList.toggle("can-scroll-left", row.scrollLeft > 2);
      row.classList.toggle("can-scroll-right", row.scrollLeft < max - 2);
    };

    // a plain mouse wheel only scrolls vertically, so map it onto the row and ease towards
    // the target; at either end the page takes over again instead of trapping the wheel
    let target = 0;
    let current = 0;
    let frame = null;

    const glide = () => {
      current += (target - current) * 0.2;
      if (Math.abs(target - current) < 0.5) {
        current = target;
        frame = null;
      } else {
        frame = requestAnimationFrame(glide);
      }
      row.scrollLeft = current;
    };

    row.addEventListener(
      "wheel",
      (event) => {
        if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
        const max = row.scrollWidth - row.clientWidth;
        if (max <= 0) return;

        if (!frame) target = current = row.scrollLeft;
        const unit = event.deltaMode === 1 ? 40 : event.deltaMode === 2 ? row.clientWidth : 1;
        const next = Math.min(max, Math.max(0, target + event.deltaY * unit));
        if (next === target) return;

        event.preventDefault();
        target = next;
        if (reduceMotion) {
          current = target;
          row.scrollLeft = target;
        } else if (!frame) {
          frame = requestAnimationFrame(glide);
        }
      },
      { passive: false },
    );

    row.addEventListener("scroll", update, { passive: true });
    new ResizeObserver(update).observe(row);
    new MutationObserver(update).observe(row, { childList: true });
    update();
  });
}

// CSS scroll snapping can't be limited to one page (it would block scrolling past Toolkit),
// so the jump between page one and Toolkit is handled here and everything below scrolls freely
function initFirstPageJump() {
  const next = document.getElementById("skills");
  if (!next) return;

  const root = document.documentElement;
  const largeScreen = window.matchMedia("(min-width: 768px) and (min-height: 560px)");
  const enabled = () => largeScreen.matches && !root.classList.contains("explorer-open");
  const nextTop = () => next.getBoundingClientRect().top + window.scrollY - (parseFloat(getComputedStyle(root).scrollPaddingTop) || 0);

  let animating = false;
  let settleTimer;

  const jumpTo = (top) => {
    animating = true;
    clearTimeout(settleTimer);
    window.scrollTo({ top, behavior: scrollBehavior });
    setTimeout(() => {
      animating = false;
    }, reduceMotion ? 50 : 800);
  };

  window.addEventListener(
    "wheel",
    (event) => {
      if (!enabled() || Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
      const y = window.scrollY;
      const snap = nextTop();
      const down = event.deltaY > 0;

      if (animating) {
        if (y < snap - 2) event.preventDefault();
        return;
      }
      if (down && y < snap - 2) {
        event.preventDefault();
        jumpTo(snap);
      } else if (!down && y > 2 && y <= snap + 2) {
        event.preventDefault();
        jumpTo(0);
      }
    },
    { passive: false },
  );

  // catches scrollbar drags, keys and touch that stop half-way through page one
  window.addEventListener(
    "scroll",
    () => {
      if (!enabled() || animating) return;
      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        const y = window.scrollY;
        const snap = nextTop();
        if (enabled() && !animating && y > 2 && y < snap - 2) jumpTo(y < snap / 2 ? 0 : snap);
      }, 180);
    },
    { passive: true },
  );
}

initFirstPageJump();
initScrollRows();
initReveal();
initFlipWords();
initSpotlights();
initTilt();
initMagnetic();
initTimeline();
initScrollProgress();
initActiveNav();
initSkillExplorer();
