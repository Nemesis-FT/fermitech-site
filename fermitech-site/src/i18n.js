import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    footer: {
                        line1: "Personal site created by Lorenzo Balugani.",
                        line2: "This website uses",
                        line3: "developed by Steffo."
                    },
                    descriptions: {
                        line1: '"Modern problems require software solutions"',
                        blob1: "I'm Lorenzo Balugani, a Computer Scientist and Open-Source developer, also known as Nemesis or Balu.",
                        blob2: "I mainly develop web applications, usually aimed at helping my peers at reaching their objectives, using the Gestione framework.",
                        blob3: "I've graduated from UniMore (University of Modena and Reggio Emilia) on october 2021 after accomplishing a technical diploma in informatics and telecommunications. I'm currently pursuing a second-level degree in Computer Science at UniBo (University of Bologna)."
                    },
                    title: {
                        line1: "Fermitech Softworks"
                    },
                    not_found:{
                        message1: "You're lost, aren't you?",
                        message2: "Here, let me help you get back on track...",
                        message3: "Click here to return home",
                    }
                }
            },
            it: {
                translation: {
                    footer: {
                        line1: "Sito personale creato da Lorenzo Balugani.",
                        line2: "Questo sito usa",
                        line3: "sviluppato da Steffo."
                    },
                    descriptions: {
                        line1: '"Problemi moderni necessitano di soluzioni software."',
                        blob: "In questo luogo puoi esplorare i miei lavori come sviluppatore di software open-source, e contattarmi se necessario."
                    },
                    title: {
                        line1: "Fermitech Softworks"
                    }
                }
            }
        }
    });

export default i18n;