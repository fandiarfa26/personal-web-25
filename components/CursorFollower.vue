<template>
  <div class="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
    <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <!-- FILTER BLUR -->
      <defs>
        <filter id="trail-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
      </defs>

      <!-- Trail path pakai filter -->
      <path
        :d="pathData"
        stroke="#05DF72"
        stroke-width="3"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        filter="url(#trail-blur)"
      />
    </svg>
    <!-- Lingkaran utama di kursor -->
    <div
      ref="cursorCircle"
      class="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 backdrop-blur-sm shadow-md pointer-events-none z-50"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";

const cursorCircle = ref(null);
const pathData = ref("");
const NUM_POINTS = 25;
const points = Array.from({ length: NUM_POINTS }, () => ({ x: 0, y: 0 }));

const mouse = { x: 0, y: 0 };

function getSmoothPath(points) {
  if (points.length < 2) return "";
  let d = `M${points[0].x},${points[0].y}`;
  for (let i = 1; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const midX = (p0.x + p1.x) / 2;
    const midY = (p0.y + p1.y) / 2;
    d += ` Q${p0.x},${p0.y} ${midX},${midY}`;
  }
  return d;
}

function animateTrail() {
  // Update semua titik secara smooth pakai GSAP
  for (let i = points.length - 1; i > 0; i--) {
    gsap.to(points[i], {
      x: points[i - 1].x,
      y: points[i - 1].y,
      duration: 0.15,
      ease: "power3.out",
    });
  }

  // Titik pertama langsung ikuti kursor
  gsap.to(points[0], {
    x: mouse.x,
    y: mouse.y,
    duration: 0.1,
    ease: "power2.out",
  });

  pathData.value = getSmoothPath(points);
  requestAnimationFrame(animateTrail);

  // Geser lingkaran ke posisi kursor
  gsap.set(cursorCircle.value, {
    x: mouse.x - 12, // setengah dari width/height (6x6)
    y: mouse.y - 12,
  });
}

function onMouseMove(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

onMounted(() => {
  window.addEventListener("mousemove", onMouseMove);
  animateTrail();
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", onMouseMove);
});
</script>
