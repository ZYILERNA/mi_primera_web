/**
 * interactividad_practica13.js
 * Módulo IIFE para la Práctica 13 – DAW M09 · Unidad 4
 * Bloques: A (Chart.js)  B (Anime.js)  C (Canvas)  D (Arquitectura)
 *
 * Encapsulado en IIFE para no contaminar el scope global.
 */
(function () {
  'use strict';

  /* ══════════════════════════════════════════════════════════════
     BLOQUE A – Visualización Dinámica con Chart.js
     Requisitos: responsive, temático, interactividad externa
     ══════════════════════════════════════════════════════════════ */
  const chartModule = (function () {

    const LABELS  = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const PALETTE = ['#d97706', '#b45309', '#78350f', '#f59e0b'];

    const DATASETS_BASE = [
      { label: '🍞 Pan',      color: PALETTE[0] },
      { label: '🎂 Pasteles', color: PALETTE[1] },
      { label: '☕ Café',     color: PALETTE[2] },
      { label: '🥐 Bollería', color: PALETTE[3] },
    ];

    function randomData() {
      return LABELS.map(() => Math.floor(Math.random() * 80) + 20);
    }

    function buildDatasets(type) {
      return DATASETS_BASE.map(ds => ({
        label:           ds.label,
        data:            randomData(),
        backgroundColor: type === 'bar'
          ? ds.color + 'cc'          // semi-transparente en barras
          : ds.color + '33',
        borderColor:     ds.color,
        borderWidth:     2,
        borderRadius:    type === 'bar' ? 6 : 0,
        tension:         0.4,        // línea suavizada
        fill:            type === 'line',
        pointBackgroundColor: ds.color,
        pointRadius:     type === 'line' ? 4 : 0,
      }));
    }

    let chart       = null;
    let currentType = 'bar';

    function init() {
      const canvas = document.getElementById('p13-sales-chart');
      if (!canvas || typeof Chart === 'undefined') return;

      const ctx = canvas.getContext('2d');

      chart = new Chart(ctx, {
        type: currentType,
        data: {
          labels:   LABELS,
          datasets: buildDatasets(currentType),
        },
        options: {
          responsive:          true,
          maintainAspectRatio: false,
          animation: { duration: 600, easing: 'easeInOutQuart' },
          plugins: {
            legend: {
              labels: {
                color:  '#4a3f35',
                font:   { family: 'Poppins', size: 13 },
                boxWidth: 14,
              },
            },
            tooltip: {
              backgroundColor: '#78350f',
              titleColor:      '#fbbf24',
              bodyColor:       '#fef3c7',
              cornerRadius:    8,
            },
          },
          scales: {
            x: {
              ticks:  { color: '#92400e', font: { family: 'Poppins' } },
              grid:   { color: '#fde68a44' },
            },
            y: {
              beginAtZero: true,
              ticks:  { color: '#92400e', font: { family: 'Poppins' } },
              grid:   { color: '#fde68a44' },
            },
          },
        },
      });

      /* ── Botón: cambiar tipo bar ↔ line ── */
      const btnToggle = document.getElementById('p13-btn-toggle');
      if (btnToggle) {
        btnToggle.addEventListener('click', function () {
          currentType = currentType === 'bar' ? 'line' : 'bar';
          chart.config.type              = currentType;
          chart.data.datasets            = buildDatasets(currentType);
          btnToggle.textContent          = currentType === 'bar'
            ? '📈 Cambiar a Líneas'
            : '📊 Cambiar a Barras';
          chart.update();
        });
      }

      /* ── Botón: actualizar datos ── */
      const btnRefresh = document.getElementById('p13-btn-refresh');
      if (btnRefresh) {
        btnRefresh.addEventListener('click', function () {
          chart.data.datasets.forEach(ds => {
            ds.data = randomData();
          });
          chart.update();
        });
      }
    }

    return { init };
  })();


  /* ══════════════════════════════════════════════════════════════
     BLOQUE B – Animación de Interfaz con Anime.js
     Requisitos: staggering, micro-interacciones mouseenter/mousedown
     ══════════════════════════════════════════════════════════════ */
  const animeModule = (function () {

    function init() {
      if (typeof anime === 'undefined') return;

      /* ─ 1. Staggering de tarjetas al cargar ─ */
      const cards = document.querySelectorAll('.card');
      cards.forEach(c => {
        c.style.opacity   = '0';
        c.style.transform = 'translateY(40px)';
        c.classList.add('p13-anim-ready');
      });

      anime({
        targets:   cards,
        opacity:   [0, 1],
        translateY:[40, 0],
        duration:  600,
        easing:    'easeOutCubic',
        delay:     anime.stagger(120, { start: 200 }),
      });

      /* ─ 2. Micro-interacciones hover en tarjetas ─ */
      cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
          anime({
            targets:  card,
            scale:    1.06,
            boxShadow:['0 4px 10px rgba(0,0,0,0.1)',
                       '0 8px 28px rgba(217,119,6,0.35)'],
            duration: 220,
            easing:   'easeOutQuad',
          });
        });

        card.addEventListener('mouseleave', function () {
          anime({
            targets:  card,
            scale:    1,
            boxShadow:'0 4px 10px rgba(0,0,0,0.1)',
            duration: 350,
            easing:   'easeOutElastic(1, 0.5)',
          });
        });
      });

      /* ─ 3. Micro-interacciones press en botones .p13-btn ─ */
      const btns = document.querySelectorAll('.p13-btn');
      btns.forEach(btn => {
        btn.addEventListener('mousedown', function () {
          anime({
            targets:  btn,
            scale:    0.94,
            duration: 100,
            easing:   'easeOutQuad',
          });
        });

        const release = function () {
          anime({
            targets:  btn,
            scale:    1,
            duration: 300,
            easing:   'easeOutElastic(1, 0.6)',
          });
        };
        btn.addEventListener('mouseup',    release);
        btn.addEventListener('mouseleave', release);
      });
    }

    return { init };
  })();


  /* ══════════════════════════════════════════════════════════════
     BLOQUE C – Canvas 2D + requestAnimationFrame
     Requisitos: partículas reactivas al cursor, bucle continuo
     ══════════════════════════════════════════════════════════════ */
  const canvasModule = (function () {

    const PARTICLE_COUNT = 60;
    const ATTRACT_RADIUS = 120;
    const ATTRACT_FORCE  = 0.06;

    const COLORS = [
      'rgba(255,255,255,0.55)',
      'rgba(251,191,36,0.50)',
      'rgba(253,230,138,0.45)',
      'rgba(255,255,255,0.35)',
      'rgba(254,243,199,0.50)',
    ];

    class Particle {
      constructor(w, h) {
        this.reset(w, h);
      }

      reset(w, h) {
        this.x     = Math.random() * w;
        this.y     = h + Math.random() * 20;     // nace debajo
        this.size  = Math.random() * 3.5 + 1;
        this.speedY= -(Math.random() * 0.6 + 0.3); // sube
        this.speedX= (Math.random() - 0.5) * 0.4;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.alpha = Math.random() * 0.5 + 0.3;
        this.life  = 0;
        this.maxLife = Math.random() * 200 + 100;
      }
    }

    let canvas, ctx, particles = [], mouse = { x: -999, y: -999 }, rafId;
    let W, H;

    function resize() {
      const header = canvas.parentElement;
      W = canvas.width  = header.offsetWidth;
      H = canvas.height = header.offsetHeight;
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      particles.forEach(p => {
        /* Fuerza de atracción hacia el cursor */
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < ATTRACT_RADIUS) {
          const force = (ATTRACT_RADIUS - dist) / ATTRACT_RADIUS;
          p.x += dx * force * ATTRACT_FORCE;
          p.y += dy * force * ATTRACT_FORCE;
        }

        /* Movimiento normal */
        p.x += p.speedX;
        p.y += p.speedY;
        p.life++;

        /* Fade in/out */
        const lifeRatio = p.life / p.maxLife;
        const fadedAlpha = lifeRatio < 0.2
          ? p.alpha * (lifeRatio / 0.2)
          : lifeRatio > 0.8
            ? p.alpha * ((1 - lifeRatio) / 0.2)
            : p.alpha;

        ctx.save();
        ctx.globalAlpha = fadedAlpha;
        ctx.fillStyle   = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        /* Reciclar partícula cuando muere o sale del canvas */
        if (p.life >= p.maxLife || p.y < -10) {
          p.reset(W, H);
        }
      });

      rafId = requestAnimationFrame(draw);
    }

    function init() {
      canvas = document.getElementById('p13-bg-canvas');
      if (!canvas) return;

      ctx = canvas.getContext('2d');
      resize();

      /* Crear partículas repartidas por altura */
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = new Particle(W, H);
        p.y    = Math.random() * H;   // inicio disperso
        p.life = Math.random() * p.maxLife;
        particles.push(p);
      }

      /* Seguimiento del ratón sobre el header */
      const header = canvas.parentElement;
      header.addEventListener('mousemove', function (e) {
        const rect = header.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      });
      header.addEventListener('mouseleave', function () {
        mouse.x = -999;
        mouse.y = -999;
      });

      window.addEventListener('resize', resize);

      draw();
    }

    return { init };
  })();


  /* ══════════════════════════════════════════════════════════════
     BLOQUE D – Arquitectura: punto de entrada
     ══════════════════════════════════════════════════════════════ */
  function bootstrap() {
    canvasModule.init();   // canvas ya puede iniciarse (no depende de librerías externas)
    chartModule.init();    // necesita Chart.js ya cargado
    animeModule.init();    // necesita Anime.js ya cargado
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }

})();
