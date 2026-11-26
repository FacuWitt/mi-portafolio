const mind = {
  id: "mind",
  title: "MIND",
  subtitle: "Plataforma de soporte a terapias psicológicas",
  year: "2026",
  kind: "Proyecto final",
  award: "Nominado a Mejor Tesis de Producto del año",
  theme: { bg: "bg-plum", text: "text-paper", muted: "text-paper/75", button: "bg-paper text-plum" },
  description:
    "Acompaña la terapia entre sesiones: el paciente registra su ánimo, sus notas y sus charlas con Mindy, y el psicólogo llega a cada sesión con un resumen generado por IA.",
  longDescription:
    "Proyecto final de Ingeniería en Sistemas, desarrollado en equipo. Es una plataforma web para psicólogos y una app mobile para pacientes, sobre una arquitectura de tres servicios: backend en Spring Boot, frontend en React y React Native, y un microservicio de IA en FastAPI.",
  highlights: [
    "Resumen clínico con IA: diseñé la arquitectura de un pipeline que sintetiza el historial del paciente antes de cada sesión, con secciones tipadas, síntesis incremental entre sesiones, trazabilidad de cada afirmación a su nota de origen y detección de riesgo determinística.",
    "Lectura de manuscritos: integré de punta a punta (app, Spring, FastAPI y Gemini) la transcripción de fotos de notas a texto editable que conserva su estructura visual: tablas, recuadros, flechas y listas.",
    "Modo offline: cola local en mobile que sincroniza sola al recuperar conexión, con idempotencia en el backend para no duplicar datos ante reintentos.",
    "Tiempo real: notificaciones in-app con SSE y persistencia de las no leídas.",
    "Desarrollo con agentes: definí arquitectura y contratos entre los 3 repositorios y delegué la implementación en agentes, revisando cada entrega y respaldándola con tests en Java y Python.",
  ],
  technologies: ["Java", "Spring Boot", "React", "React Native", "TypeScript", "FastAPI", "Gemini", "PostgreSQL", "Auth0"],
  repoUrl: null,
  cover: "/projects/mind/cover.jpg",
  gallery: [
    "/projects/mind/cover.jpg",
    "/projects/mind/dashboard.jpg",
    "/projects/mind/resumen-presesion.jpg",
    "/projects/mind/mobile.jpg",
    "/projects/mind/agenda.jpg",
    "/projects/mind/notas-clinicas.jpg",
    "/projects/mind/mobile-home.jpg",
    "/projects/mind/poster.jpg",
  ],
};

export default mind;
