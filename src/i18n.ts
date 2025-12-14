import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      'worker-coop': 'Worker-owned cooperative',
      'worker-owned': 'Worker-Owned',
      cooperative: 'Cooperative',
      contact: 'Contact',
      'view-services': 'View services',
      description:
        'We are a worker-owned cooperative providing expert landscaping, construction, and manual labor services with a commitment to quality, equity, and sustainability.',
      ipsum:
        'Meggings freegan shabby chic humblebrag iceland swag kinfolk before they sold out. Synth live-edge taiyaki, cliche DIY crucifix before they sold out chambray 8-bit +1 kombucha heirloom air plant hot chicken.',
      'ipsum-small': 'cliche DIY crucifix before they sold out chambray 8-bit',

      'item-one': 'Residential and Commercial Construction',
      'item-one-desc':
        'general contracting, remodeling, roofing, painting, and structural repairs delivered with high craftsmanship and cooperative accountability.',

      'item-two': 'Landscaping and Outdoor Design',
      'item-two-desc':
        'sustainable landscape design, lawn care, irrigation systems, tree planting, and hardscaping.',

      'item-three': 'Eco-Friendly and Community-Focused Solutions',
      'item-three-desc':
        'use of environmentally responsible materials and practices, with a focus on serving local communities and creating dignified employment through worker ownership.',
    },
  },
  es: {
    translation: {
      'worker-coop': 'Cooperativa de trabajadores',
      'worker-owned': 'Propiedad de los Trabajadores',
      cooperative: 'Cooperativa',
      contact: 'Contacto',
      'view-services': 'Ver servicios',
      description:
        'Somos una cooperativa de trabajadores especializada en jardinería, construcción y trabajos manuales, comprometida con la calidad, la equidad y la sostenibilidad.',
      ipsum:
        'Lorem Ipsum es un tipo de texto de marcador de posición que se usa comúnmente en las industrias del diseño y la publicación para llenar un espacio en una página y dar una impresión de cómo se verá el contenido final. ',
      'ipsum-small': 'de posición que se usa comúnmente en las industrias',

      'item-one': 'Construcción residencial y comercial',
      'item-one-desc':
        'contratación general, remodelaciones, techado, pintura y reparaciones estructurales con mano de obra calificada y compromiso cooperativo.',

      'item-two': 'Paisajismo y diseño de exteriores',
      'item-two-desc':
        'diseño de jardines sostenibles, mantenimiento de áreas verdes, sistemas de riego, plantación de árboles y construcción de espacios exteriores.',

      'item-three': 'Soluciones ecológicas y con enfoque comunitario',
      'item-three-desc':
        'uso de materiales y prácticas responsables con el medio ambiente, con un enfoque en el servicio a comunidades locales y la generación de empleo digno a través de la propiedad colectiva.',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // TODO: this will always default to spanish on page load -- we should save the selection and/or derive the language from the browser agent
    lng: 'es', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

export const languageOptions = Object.keys(resources);
