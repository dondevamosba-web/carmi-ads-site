// Datos reales de los clientes actuales de Carmi Ads.
// logoUrl: null hasta que Guido apruebe una imagen puntual para cada cliente —
// mientras tanto se muestra el monograma de respaldo (client-logo-fallback).
const CLIENTS = [
  {
    name: "Sur del Sur",
    category: "Cervecería Artesanal",
    accent: "#d97706",
    igHandle: "@sur.del.sur",
    igUrl: "https://www.instagram.com/sur.del.sur/",
    logoUrl: "assets/clientes/sur-del-sur.jpg", // foto de perfil IG, descargada y aprobada 2026-08-17
    services: ["Redes Sociales", "Contenido", "Comunidad"],
    result: "+280% alcance orgánico en 4 meses",
    description: "Gestión integral de Instagram para la cervecería artesanal de Sierras Bayas. Estrategia de contenido, fotografía de producto y comunidad.",
  },
  {
    name: "Pietra",
    category: "Restaurante",
    accent: "#ea580c",
    igHandle: "@pietraolavarria",
    igUrl: "https://www.instagram.com/pietraolavarria/",
    logoUrl: "assets/clientes/pietra.jpg", // foto de perfil IG, descargada y aprobada 2026-08-17
    services: ["Redes Sociales", "Reservas Online", "Gastronomía"],
    result: "3× más consultas y reservas en 3 meses",
    description: "Estrategia digital y sistema de reservas para el restaurante. Contenido gastronómico que convierte seguidores en comensales.",
  },
  {
    name: "Maroni Maps",
    category: "E-commerce",
    accent: "#38bdf8",
    igHandle: "maronimaps.com",
    igUrl: "https://maronimaps.com/",
    logoUrl: "http://dcdn-us.mitiendanube.com/stores/007/046/685/themes/common/logo-510322869785701948-1781048887-9e0069aa637aa09b262b7fc8219629d91781048887.png?0", // logo real de su tienda Tiendanube, no expira
    services: ["Diseño Web", "Tienda Online", "Marketing Digital"],
    result: "Tienda activa · envíos a todo el país",
    description: "Diseño y lanzamiento de tienda online para venta de mapas de relieve de Argentina. Alcance nacional desde Olavarría.",
  },
  {
    name: "Juan Tellez Arte",
    category: "Artista",
    accent: "#a78bfa",
    igHandle: "@juantellez.arte",
    igUrl: "https://www.instagram.com/juantellez.arte/",
    logoUrl: "assets/clientes/juan-tellez.jpg", // foto de perfil IG, descargada y aprobada 2026-08-17
    services: ["Redes Sociales", "Difusión de obra"],
    result: null,
    description: "Murales y pinturas por encargo, más clases de pintura. Gestión de redes para un artista independiente de Olavarría.",
  },
  {
    name: "Maui Bebidas",
    category: "Bebidas · Olavarría",
    accent: "#22c55e",
    igHandle: "@mauibebidas",
    igUrl: "https://www.instagram.com/mauibebidas/",
    logoUrl: "assets/clientes/maui-bebidas.jpg", // foto de perfil IG, descargada y aprobada 2026-08-17
    services: ["Redes Sociales"],
    result: null,
    description: "Presencia digital para la sucursal Olavarría de la cadena de bebidas.",
  },
  {
    name: "Narvagro",
    category: "Producción Audiovisual Ganadera",
    accent: "#f59e0b",
    igHandle: "@narvagro",
    igUrl: "https://www.instagram.com/narvagro/",
    logoUrl: "assets/clientes/narvagro.jpg", // foto de perfil IG, descargada y aprobada 2026-08-17
    services: ["Redes Sociales", "Foto y Video"],
    result: null,
    description: "Foto y video para remates, cabañas y hacienda. Presencia digital para producción audiovisual del campo.",
  },
];
