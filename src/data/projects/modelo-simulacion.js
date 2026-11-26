const modeloSimulacion = {
		id: "simulacion-colas",
		title: "Modelos de simulación",
  shortTitle: "Simulación",
  subtitle: "Simulación de sistemas cliente-servidor con colas",
  year: "2025",
  kind: "Proyecto académico",
  theme: { bg: "bg-mustard", text: "text-ink", muted: "text-ink/75", button: "bg-ink text-mustard" },
		description:
			"Sistema de simulación dinámico cuya función es analizar comportamientos de sistemas estilo cliente-servidor con colas y con tiempos de espera variables.",
		longDescription:
			"Me encargué del diseño e implementación de un modelo matemático que simule un sistema de cliente-servidor con colas (descenso de clientes sobre una atracción 'alfombra magica')  y con tiempos de espera variables. El modelo permite analizar el rendimiento del sistema mediante métricas clave como el tiempo de espera promedio, la longitud promedio de la cola y la tasa de utilización del servidor. Permite a los usuarios evaluar cómo diferentes configuraciones del sistema afectan su rendimiento.",
		technologies: ["Python", "FastAPI", "Modelado", "Estadística"],
		repoUrl: "https://github.com/mateoestrada5/TP5-SIM.git",
		cover: "/projects/modelo-simulacion/0.png",
		gallery: [
			"/projects/modelo-simulacion/0.png",
			"/projects/modelo-simulacion/1.png",
			"/projects/modelo-simulacion/2.png",
			"/projects/modelo-simulacion/3.png",
			"/projects/modelo-simulacion/4.png",],
		highlights: [
			"Manejo de grandes volúmenes de datos de simulación",
			"Métricas clave para evaluación de rendimiento",
			"Parametrización para diferentes configuraciones del sistema",
			"Interfaz de usuario para visualización de resultados"
		],
	};

export default modeloSimulacion;
