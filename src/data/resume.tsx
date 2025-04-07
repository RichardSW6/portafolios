import { Icons } from "@/components/icons";
import { Contact, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ricardo López",
  initials: "RL",
  url: "https://orlandomm.net",
  location: "Ciudad de México, México",
  locationLink: "https://www.google.com/maps/place/Cali",
  description: "Estudiante de Licenciatura en Informática.",
  summary:
    "Estudiante de la Licenciatura en Informática en la UNAM, con un año de experiencia en el área de desarrollo de software y soporte técnico. Cuento con formación sólida en desarrollo web Full Stack y participación en proyectos de automatización de auditorías y digitalización de procesos que han mejorado la eficiencia y reducido costos operativos. Poseo habilidades en programación Back-End y Front-End, manejo de bases de datos, herramientas de desarrollo y soporte a infraestructura. Me caracterizo por mi pensamiento crítico, adaptabilidad, liderazgo y capacidad para trabajar en equipo. Interesado en seguir creciendo profesionalmente en áreas como desarrollo Full Stack, redes, soporte técnico y ciberseguridad.",
  avatarUrl: "/me.webp",
  telegramQR: "/qrtelegram.webp",
  telegram: "https://t.me/RicardoL_Bot",

  // skills: [
  //   {
  //     tipo: "Programación Back - End:",
  //     description: {
  //       pbackend: [
  //         "C",
  //         "C++",
  //         "Java",
  //         "JavaScript",
  //         "PHP",
  //         "SQL",
  //       ],
  //     },
  //   },
  //   {
  //     tipo: "Herramientas Back-End:",
  //     description: {
  //       hbackend: [
  //         "XAMPP",
  //         "Laragon",
  //         "phpMyAdmin",
  //         "DBeaver",
  //         "HeidiSQL",
  //         "Microsoft SQL Server",
  //         "VsCode",
  //         "NetBeans",
  //         "Eclipse",
  //         "Git",
  //         "GitHub",
  //       ],
  //     },
  //   },

  //   {
  //     tipo: "Programación Front - End:",
  //     description: {
  //       pfrontend: [
  //         "HTML",
  //         "CSS",
  //         "JavaScript",
  //         "Bootstrap",
  //         "Tailwind CSS",
  //         "React",
  //         "Next.js",
  //         "TypeScript",
  //       ],
  //     },
  //   },

  //   {
  //     tipo: "Sistemas Operativos:",
  //     description: {
  //       Systems: [
  //         "Windows",
  //         "Linux",
  //         "Ubuntu",
  //         "Debian",
  //         "Kali Linux",
  //         "Parrot OS",
  //         "MacOS",
  //         "Android",
  //         "iOS",
  //       ],
  //     },
  //   },

  //   {
  //     tipo: "Redes y Telecomunicaciones:",
  //     description: {
  //       Networking: [
  //         "ServiceNow",
  //         "TeamViewer",
  //         "AnyDesk",
  //         "Webex",
  //         "Meraki",
  //         "Fortigate",
  //         "Fortinet",
  //         "DVR",
  //         "NVR",
  //         "Administracion de Switches",
  //         "Administracion de SSID",
  //         "Administracion de Acces Point",
  //       ],
  //     },
  //   },
  // ],

  skills: {
    pbackend: [
      "C",
      "C++",
      "Java",
      "JavaScript",
      "PHP",
      "SQL",
      "Python",
      "Node.js",
    ],

    hbackend: [
      "XAMPP",
      "Laragon",
      "phpMyAdmin",
      "DBeaver",
      "HeidiSQL",
      "Microsoft SQL Server",
      "VsCode",
      "NetBeans",
      "Eclipse",
      "Git",
      "GitHub",
    ],

    pfrontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "React",
      "Next.js",
      "TypeScript",
    ],

    Systems: [
      "Windows",
      "Linux",
      "Ubuntu",
      "Debian",
      "Kali Linux",
      "Parrot OS",
      "MacOS",
      "Android",
      "iOS",
    ],

    Networking: [
      "ServiceNow",
      "TeamViewer",
      "AnyDesk",
      "Webex",
      "Meraki",
      "Fortigate",
      "Fortinet",
      "DVR",
      "NVR",
      "Administracion de Switches",
      "Administracion de SSID",
      "Administracion de Acces Point",
      "Administración de servidores",
      "Configuración de redes",
    ],
  },

  Professional: [
    "Tester de software.",
    "Desarrollador Full Stack.",
    "Ciberseguridad.",
    "Redes.",
    "Telecomunicaciones.",
    "Soporte técnico.",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email:  "JoseRicardo_Lopezb@hotmail.com",
    tel: "+52 56 1074 6350",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/RichardSW6",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "www.linkedin.com/in/ricardolopezb",
        icon: Icons.linkedin,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto: JoseRicardo_Lopezb@hotmail.com",
        icon: Icons.email,
        navbar: true,
      },

      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/525610746350",
        icon: Icons.whatsapp,
        navbar: true,
      },

      Telegram: {
        name: "Telegram",
        url: "https://t.me/RicardoL_Bot",
        icon: Icons.Telegram,
        navbar: true,
      },
    },
  },
  
  work: [
    {
      company: "ATIO Group",
      href: "https://atiogroup.com.mx/",
      badges: ["Hibrido"],
      location: "Insurgentes, México",
      title: "Becario Soporte de Primer Nivel",
      logoUrl: "/atio_logo.webp",
      start: "Abril 2025",
      end: "Presente",
      description: {
        intro:
          "Como becario en el área de soporte técnico de primer nivel, brindé asistencia a usuarios en la operación de aplicaciones clave como Control Gas y Cloud. Mi rol se centró en resolver incidencias básicas, proporcionar soporte remoto y asegurar la continuidad operativa de los sistemas.",
        bullets: [
          "Atendí solicitudes y brindé soporte de primer nivel para las aplicaciones Control Gas y Cloud, resolviendo incidencias frecuentes y garantizando la operatividad del sistema.",
          "Utilicé herramientas de asistencia remota como TeamViewer, AnyDesk y Webex para realizar diagnósticos y soluciones rápidas a distancia.",
          "Registré y gestioné incidentes a través de ServiceNow, cumpliendo con los tiempos establecidos por los acuerdos de nivel de servicio (SLA).",
          "Escalé incidencias complejas a los niveles superiores, documentando correctamente cada caso para facilitar su resolución.",
          "Desarrollé habilidades clave en atención al cliente, comunicación efectiva y resolución de problemas técnicos.",
        ],
      },
    },
    {
      company: "Mitsubishi Electric",
      href: "https://melmex.mx/",
      badges: ["Hibrido"],
      location: "Tlalnepantla, México",
      title: "Becario TI",
      logoUrl: "/Mitsubishi_logo.webp",
      start: "Mayo 2024",
      end: "Abril 2025",
      description: {
        intro:
          "Durante mi estancia como becario en el área de TI de Mitsubishi, tuve la oportunidad de participar en el desarrollo de soluciones tecnológicas internas y brindar soporte técnico a usuarios, lo que me permitió fortalecer mis conocimientos en programación web, redes y atención al cliente en un entorno corporativo.",
        bullets: [
          "Desarrollo de aplicaciones web internas con PHP, HTML, JavaScript y Bootstrap, en base a requerimientos específicos de distintas áreas para mejorar sus procesos.",
          "Soporte técnico a usuarios: atención a incidencias relacionadas con equipos de cómputo, mobiliario tecnológico y dispositivos periféricos.",
          "Apoyo al área de telecomunicaciones: monitoreo y configuración de dispositivos de red (Meraki), cámaras de seguridad y solución de problemas de conectividad.",
          "Trabajo en equipo con personal de TI y usuarios de diversas áreas, mejorando habilidades de comunicación, gestión de tareas y resolución de problemas."
        ],
      },
    },
  ],

  education: [
    {
      school: "Facultad de Estudios Superiores Cuautitlán (UNAM)",
      href: "http://informatica.cuautitlan.unam.mx/",
      degree: "Licenciatura en informática.",
      logoUrl: "/unam.webp",
      start: "Agosto de 2022",
      end: "Presente",
    },

    {
      school: "ONE - Oracle Next Education",
      href: "",
      degree: "Oracle Next Education F2 T4 Back-end",
      logoUrl: "/one.webp",
      start: "Noviembre 2022",
      end: "Junio 2023",
    },
  ],

  projects: [
    {
      title: "Orlandomm Portfolio",
      href: "https://orlandomm.vercel.app",
      dates: "Apr 2023 - Aug 2024",
      active: true,
      description:
        "This is my personal portfolio showcasing a responsive design, bilingual content, and customizable light/dark themes. Discover my projects, skills, and dynamic integrations like Spotify and real-time weather updates.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Firebase"],
      links: [
        {
          type: "Website",
          href: "https://orlandomm.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/orlandomm.webp",
      video:
        "",
    },
  ],

} as const;
