import { Locale } from "./language.service";

export interface UiTexts {
  sections: {
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
  titles: {
    iam: string;
    stack: string;
    available: string;
    location: string;
    name: string;
    namePh: string;
    subject: string;
    subjectPh: string;
    message: string;
    messagePh: string;
    built: string;
  };
  actions: {
    hireMe: string;
    contactMe: string;
    sendMessage: string;
    viewProjects: string,
    downloadCV: string;
    scrollDown: string;
    scrollUp: string;
    loadingProjects:string[];
    loading:string[];

  };
  errors:{
    formName: string;
    formSubject: string;
    formEmail: string;
    formMessage: string;
    required: string;
    maxlength: string;
    minlength: string;
    forbiddenChars: string;
    email: string;
    invalidFormat: string;

  }
}

export const UI_TEXTS: Record<Locale, UiTexts> = {
  en: {
    sections: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Get in touch',
    },
    titles: {
      iam: "I'm ",
      stack: 'Tech stack',
      available: 'Availability',
      location: 'Location',
      name: 'Name',
      namePh: 'Your name :)',
      subject: 'Subject',
      subjectPh: "What's this about?",
      message: 'Message',
      messagePh: 'Your message...',
      built: 'Built with ❤️ '
      
    },
    actions: {
      hireMe: 'Hire Me',
      contactMe: 'Connect with me',
      sendMessage: 'Send message',
      viewProjects: 'View Projects',
      downloadCV: 'Download CV',
      scrollDown: 'scroll down',
      scrollUp: 'back to top',
      loadingProjects: ["Loading Projects","Fetching from Github","This maybe take a while (blame Render)", "Try reloading (F5)"],
      loading: ["Loading","Waking up the server (free tier 😅)", "Blame me for not pay hosting hehe", "This site has been built within Angular + SpringBoot"]

    },
    errors: {
      formName: 'Field name',
      formSubject: 'Field subject',
      formEmail: 'Field email',
      formMessage: 'Field message',
      required: 'is required',
      maxlength: 'is too long',
      minlength: 'is too short',
      forbiddenChars: 'has invalid characters',
      email : 'has to be an email',
      invalidFormat:  'has invalid format'
    },
  },
  es: {
    sections: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    titles: {
      iam: 'Soy ',
      stack: 'Tecnologías',
      available: 'Disponibilidad',
      location: 'Ubicacion',
      name: 'Nombre',
      namePh: 'Tu nombre :)',
      subject: 'Asunto',
      subjectPh: 'De que se trata?',
      message: 'Mensaje',
      messagePh: 'Tu mensaje...',
      built: 'Hecho con ❤️'
      
     
    },
    actions: {
      hireMe: 'Contratame',
      contactMe: 'Conectemos',
      sendMessage: 'Enviar mensaje',
      viewProjects: 'Ver Proyectos',
      downloadCV: 'Descargar CV',
      scrollDown: 'ir abajo',
      scrollUp: 'volver al inicio',
      loading: ["Cargando","Despertando el servidor (free tier 😅)...","¿Sabías que este sitio usa Angular + Spring Boot?", "¿Sabías que soy scuba diver? 🤿", "Intenta recargar la pagina con F5"],
      loadingProjects: ["Cargando proyectos","Leyendo desde Github","Puede que tarde (culpa del hosting)", "Intenta recargando la pagina con F5"],
    },
    errors: {
      formName: 'El campo nombre',
      formSubject: 'El campo asunto',
      formEmail: 'El campo correo',
      formMessage: 'El campo mensaje',
      required: 'es obligatorio',
      maxlength: 'es muy largo',
      minlength: 'es muy corto',
      forbiddenChars: 'tiene caracteres invalidos',
      email: 'tiene que ser un email',
      invalidFormat: 'formato invalido'
    },
    
  },
};

