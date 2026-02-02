
import { FAQItem, GalleryImage, NavLink } from './types';

export const COLORS = {
  primary: '#4B3621', // Earthy Brown
  secondary: '#2D4F1E', // Forest Green
  accent: '#D4A373', // Warm Beige/Tan
  bg: '#FCFBF7', // Creamy White
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Cacao', href: '#cacao' },
  { label: 'Ganado', href: '#ganado' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export const CACAO_FAQ: FAQItem[] = [
  { question: '¿Qué variedad de cacao producen?', answer: 'Nos especializamos en variedades seleccionadas por su perfil sensorial y resistencia, adaptadas a nuestro microclima particular.' },
  { question: '¿Cómo garantizan la calidad del grano?', answer: 'Realizamos un control riguroso en cada etapa, desde la cosecha en el punto óptimo de madurez hasta un proceso de fermentación monitoreado.' },
  { question: '¿Venden cacao en pequeñas cantidades?', answer: 'Atendemos tanto pedidos personalizados como volúmenes mayores para la industria. Contáctenos para discutir su requerimiento.' },
  { question: '¿Ofrecen cacao ya tostado o procesado?', answer: 'Nuestra especialidad principal es el cacao en grano seco. Subproductos como nibs o pasta están disponibles según la temporada.' },
  { question: '¿Cuáles son las épocas de cosecha?', answer: 'Aunque tenemos producción constante, los picos de cosecha varían según los ciclos climáticos anuales. Solicite nuestro calendario de disponibilidad.' },
];

export const GANADO_FAQ: FAQItem[] = [
  { question: '¿Cuál es el sistema de alimentación de su ganado?', answer: 'Nuestro ganado se alimenta principalmente de pasturas naturales mediante un manejo de pastoreo rotativo que respeta el suelo.' },
  { question: '¿Cómo manejan el bienestar animal?', answer: 'Seguimos protocolos estrictos de sanidad y trato digno, asegurando que los animales vivan en un entorno libre de estrés.' },
  { question: '¿Qué tipo de genética manejan?', answer: 'Trabajamos con razas adaptadas a nuestro entorno, enfocándonos en la rusticidad, salud y calidad de la producción final.' },
  { question: '¿Está disponible el ganado para la venta todo el año?', answer: 'La disponibilidad depende de nuestros ciclos de crecimiento y selección. Recomendamos contactarnos con antelación.' },
  { question: '¿Realizan entregas o transporte?', answer: 'Coordinamos los procesos logísticos para asegurar que el traslado se realice bajo los más altos estándares de seguridad y bienestar.' },
];

export const GALLERY_DATA: GalleryImage[] = [
  { id: 1, url: 'https://picsum.photos/800/600?random=10', category: 'cacao', title: 'Cosecha de Mazorcas' },
  { id: 2, url: 'https://picsum.photos/800/600?random=11', category: 'cacao', title: 'Granos en Fermentación' },
  { id: 3, url: 'https://picsum.photos/800/600?random=12', category: 'cacao', title: 'Secado Natural al Sol' },
  { id: 4, url: 'https://picsum.photos/800/600?random=13', category: 'cacao', title: 'Selección Manual de Grano' },
  { id: 5, url: 'https://picsum.photos/800/600?random=14', category: 'cacao', title: 'Plantación de Cacao' },
  { id: 6, url: 'https://picsum.photos/800/600?random=15', category: 'cacao', title: 'Vivero de Plántulas' },
  { id: 7, url: 'https://picsum.photos/800/600?random=20', category: 'ganado', title: 'Ganado en Pastoreo' },
  { id: 8, url: 'https://picsum.photos/800/600?random=21', category: 'ganado', title: 'Manejo de Corral' },
  { id: 9, url: 'https://picsum.photos/800/600?random=22', category: 'ganado', title: 'Crías en Crecimiento' },
  { id: 10, url: 'https://picsum.photos/800/600?random=23', category: 'ganado', title: 'Entorno Natural de la Finca' },
  { id: 11, url: 'https://picsum.photos/800/600?random=24', category: 'ganado', title: 'Sanidad Animal' },
  { id: 12, url: 'https://picsum.photos/800/600?random=25', category: 'ganado', title: 'Infraestructura Ganadera' },
];

export const SEO_DATA = {
  title: 'Finca Marfid | Cacao y Ganado de Alta Calidad en Ecuador',
  description: 'Descubra Finca Marfid, líderes en producción responsable de cacao de aroma y ganado de selección. Calidad, trazabilidad y compromiso ambiental desde el origen.',
  keywords: [
    'Cacao Ecuador', 'Ganado de alta calidad', 'Producción responsable', 
    'Finca Marfid', 'Cacao en grano', 'Trazabilidad agrícola', 
    'Agroindustria premium', 'Agricultura sostenible', 'Ganadería responsable', 
    'Chocolate de origen'
  ],
  googleQuestions: [
    '¿Dónde comprar cacao en grano de alta calidad?',
    '¿Qué es la producción agrícola responsable?',
    '¿Cómo se garantiza la trazabilidad del cacao?',
    '¿Cuáles son los beneficios del ganado de pastoreo?',
    '¿Por qué elegir cacao de origen ecuatoriano?'
  ]
};

export const RECOMMENDED_PHOTOS = [
  "Cacao: Plano detalle de una mazorca abierta mostrando los granos frescos (Luz natural, mañana).",
  "Cacao: Granos en las camas de secado con el sol de fondo.",
  "Cacao: Foto de las manos del productor seleccionando granos (Transmite trabajo artesanal).",
  "Ganado: Panorámica del ganado pastando en un campo verde (Luz de atardecer).",
  "Ganado: Retrato individual de un ejemplar destacando su salud y pelaje.",
  "General: Foto de la familia Marfid o encargados frente a la entrada de la finca.",
  "Entorno: El paisaje natural que rodea la finca para mostrar pureza."
];
