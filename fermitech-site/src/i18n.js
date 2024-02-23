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
                        blob2: "I mainly develop web and microservices-oriented applications using the Gestione framework.",
                        blob3: "I've graduated from UniMore (University of Modena and Reggio Emilia) on october 2021 with the thesis \"BrumonApp: bringing the car disposal industry to the Web 2.0\". On march 2024 I should achieve my Master's Degree in Computer Science at UniBo (University of Bologna - Alma Mater Studiorum), with the thesis \"Micro Anagrafica: microservices architecture as source and aggregator of personal data\" developed within Cineca."
                    },
                    title: {
                        line1: "Fermitech Softworks, aka Lorenzo Balugani"
                    },
                    not_found:{
                        message1: "You're lost, aren't you?",
                        message2: "Here, let me help you get back on track...",
                        message3: "Click here to return home",
                    },
                    content:{
                        lot_more: "And more!",
                        get_in_touch: "If you want to get in touch, you can do so using the methods below.",
                        faqs:{
                            one:{
                                q: "Why the name \"Fermitech Softworks\"? What is this all about?",
                                a: "I first used the name inside the Condivisione software, for no real reason at all. It was my thesis work for my technical diploma at ITIS Enrico Fermi, and I wanted to make it sound professional. After that, it sort of just stuck around as a meme, but some folks took it as something real, and so I just roll with it."
                            },
                            two:{
                                q: "What's this \"Gestione Framework\" thing?",
                                a: "It started out as an inside joke between me and my teachers back at ITIS Enrico Fermi. Gestione was a software I had developed that was installed on my assigned VM in the IT lab, and it was used to deliver exercises and keep track of my classmates quotes. \"Based upon Gestione\" basically means that sortof uses that same set of technology. It's a library of sorts that adds many fancy thingamajigs that a microframework such as Flask does not come with."
                            }
                        }
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
                        blob1: "Sono Lorenzo Balugani, laureato in Informatica e sviluppatore di software Open-source, anche noto come Nemesis oppure Balu.",
                        blob2: "Sviluppo principalmente applicazioni web e a microservizi, utilizzando il framework Gestione.",
                        blob3: "Mi sono laureato all'UniMore (Università di Modena e Reggio Emilia) nell'ottobre 2021 con la tesi \"BrumonApp: portare l'industria delle autodemolizioni nel Web 2.0\". Otterrò nel marzo 2024 la laurea magistrale in Informatica presso l'UniBo (Università di Bologna - Alma Mater Studiorum) con la tesi \"Micro Anagrafica: aggregatore e sorgente unica di dati anagrafici a microservizi\", svolta presso Cineca."
                    },
                    title: {
                        line1: "Fermitech Softworks, ovvero Lorenzo Balugani"
                    },
                    not_found:{
                        message1: "Ti sei perso, vero?",
                        message2: "Lascia che ti rimetta sulla strada giusta...",
                        message3: "Clicca qui per proseguire.",
                    },
                    content:{
                        lot_more: "E tanto altro!",
                        get_in_touch: "Se vuoi contattarmi, puoi farlo usando i metodi sottostanti.",
                        faqs:{
                            one:{
                                q: "Come mai \"Fermitech Softworks\"? E' un soprannome?",
                                a: "Ho usato per la prima volta lo pseudonimo all'interno dell'applicativo Condivisione, la mia tesina delle superiori. Era un progetto a cui tenenvo parecchio, e dato che c'era intenzione di mantenerlo attivo come un servizio offerto dalla scuola decisi di farlo sembrare creato da una vera azienda. Nonostante fosse più uno scherzo che altro, alcune persone l'hanno preso sul serio, quindi è diventato uno pseudonimo che ancora uso."
                            },
                            two:{
                                q: "Cos'è il \"Framework Gestione\"?",
                                a: "E' cominciato come uno scherzo tra me e i miei professori all'ITIS Enrico Fermi. Gestione era un applicativo web che avevo sviluppato e installato sulla macchina virtuale nei laboratorio, e il suo scopo era consegnare esercizi, appunti e tenere traccia delle citazioni dei miei studenti. \"Basato su Gestione\" divenne molto rapidamente una gag ricorrente, e indica come un software utilizzi - fondamentalmente - le stesse tecnologie, e le stesse utility che ho sviluppato negli anni."
                            }
                        }
                    }
                }
            },
            spamtron:{
                translation: {
                    footer: {
                        line1: "Personal [hyperlink-powered interface] created by Lorenzo Balugani.",
                        line2: "This [shitpost] uses",
                        line3: "developed by [Big Shot Steffo]."
                    },
                    descriptions: {
                        line1: '"Modern problems require [Big Shot] solutions"',
                        blob1: "I'm Balugani L. Balugani, a [Microwave with grill functionality]  and Open-Source [Devil], also known as [Mastrota] or [Information Point].",
                        blob2: "I mainly develop [laughing coyotes], usually aimed at helping my peers at [becoming Big Shots], using the Gestione [weapon].",
                        blob3: "I've graduated from [9.99$/month excluding VAT] (University of [Big Shots] and [Mike]) on october 2021 with the thesis \"[Nightmare goggles: when worn, everything looks the same.]\". I'm currently pursuing a second-level degree in [Stonks] at [Hell] (University of [Hell])."
                    },
                    title: {
                        line1: "Fermi[For 4.99€/mo] Soft[Broken]"
                    },
                    not_found:{
                        message1: "You're lost, aren't you?",
                        message2: "Here, let me help you get [PIPIS]",
                        message3: "Click here to [provide Kromer]",
                    },
                    content:{
                        lot_more: "And more [for just 1.99$/year]!",
                        get_in_touch: "If you want to [burst into happiness], you can do so using [the automated payment via phone].",
                        faqs:{
                            one:{
                                q: "Why the name \"Fermitech Softworks\"? What is this all about?",
                                a: "I first used the name inside the Condivisione software, for no real reason at all. It was my thesis work for my technical diploma at ITIS Enrico Fermi, and I wanted to make it sound professional. After that, it sort of just stuck around as a meme, but some folks took it as something real, and so I just roll with it."
                            },
                            two:{
                                q: "What's this \"Gestione Framework\" thing?",
                                a: "It started out as an inside joke between me and my teachers back at ITIS Enrico Fermi. Gestione was a software I had developed that was installed on my assigned VM in the IT lab, and it was used to deliver exercises and keep track of my classmates quotes. \"Based upon Gestione\" basically means that sortof uses that same set of technology. It's a library of sorts that adds many fancy thingamajigs that a microframework such as Flask does not come with."
                            }
                        }
                    }
                }
            }
        }
    });

export default i18n;