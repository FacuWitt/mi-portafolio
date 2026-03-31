const projects = [
	{
		id: "cineinfo",
		title: "CineInfo",
		description:
			"Plataforma estilo IMDb para peliculas y series con experiencia fullstack, componentes dinamicos y una UI rica en interacciones.",
		longDescription:
			"Proyecto fullstack con foco en experiencia de usuario: modales, pills, botones reutilizables y panel de administracion para gestionar contenido audiovisual.",
		technologies: ["React", "FastAPI", "Tailwind", "REST API"],
		repoUrl: "https://github.com/FacuWitt/cineinfo.git",
		mockup: "CI",
		cover: "/projects/cineinfo/cover.png",
		gallery: [
			"/projects/cineinfo/cover.png",
			"/projects/cineinfo/2.png",
            "/projects/cineinfo/3.png",
			"/projects/cineinfo/4.png",
			"/projects/cineinfo/5.png",
            "/projects/cineinfo/6.png",
            "/projects/cineinfo/7.png",
            "/projects/cineinfo/8.png",
            
		],
		highlights: [
			"Arquitectura fullstack orientada a componentes",
			"Pantallas de administracion y edicion",
			"Interacciones dinamicas y visualmente consistentes",
		],
		size: "medium",
	},
    {
		id: "turnero-medico",
		title: "Turnero Medico",
		description:
			"Backend para gestion de turnos medicos con notificaciones por email, tareas programadas y control de acceso por roles.",
		longDescription:
			"Desarrolle una API con arquitectura limpia para gestionar pacientes, profesionales y turnos, incorporando seguridad por roles y automatizacion de recordatorios por correo.",
		technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Scheduler"],
		demoUrl: "#",
		repoUrl: "#",
		mockup: "TM",
		cover: "/projects/turnero-medico/cover.png",
		gallery: [
			"/projects/turnero-medico/cover.png",
			"/projects/turnero-medico/dashboard.png",
			"/projects/turnero-medico/agenda.png",
		],
		highlights: [
			"Control de acceso por autoridad y roles",
			"Notificaciones automaticas por email",
			"Tareas programadas para seguimiento de turnos",
		],
		size: "medium",
	},
	{
		id: "simulacion-colas",
		title: "Simulacion de Colas",
		description:
			"Modelos de simulacion para sistemas de colas, enfocados en analisis de rendimiento y toma de decisiones con base matematica.",
		longDescription:
			"Implemente logica de simulacion y procesamiento estadistico para analizar comportamientos de sistemas de atencion y evaluar escenarios con distintas cargas.",
		technologies: ["Python", "FastAPI", "Modelado", "Estadistica"],
		demoUrl: "#",
		repoUrl: "#",
		mockup: "SC",
		cover: "/projects/simulacion-colas/cover.png",
		gallery: ["/projects/simulacion-colas/cover.png", "/projects/simulacion-colas/resultado.png"],
		highlights: [
			"Simulacion de eventos discretos",
			"Metricas clave para evaluacion de rendimiento",
			"Soporte para analisis de escenarios",
		],
		size: "medium",
	},
	{
		id: "gestion-arquitectura",
		title: "Gestion y Arquitectura",
		description:
			"Trabajo integral en metodologias agiles, ingenieria de software, analisis funcional y transformacion digital.",
		longDescription:
			"Participe en iniciativas de analisis y mejora de procesos, documentacion de requerimientos y definicion de arquitectura para proyectos orientados a negocio.",
		technologies: ["Scrum", "Miro", "Figma", "Analisis Funcional"],
		demoUrl: "#",
		repoUrl: "#",
		mockup: "GA",
		cover: "/projects/gestion-arquitectura/cover.png",
		gallery: ["/projects/gestion-arquitectura/cover.png"],
		highlights: [
			"Mapeo y mejora de procesos",
			"Documentacion funcional y tecnica",
			"Alineacion entre negocio y desarrollo",
		],
		size: "medium",
	},
];

export default projects;
