"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import type { Language } from "./locale";
export type { Language } from "./locale";

const labels: Record<Language, Record<string, string>> = {
  en: { Home: "Home", About: "About", "Full Stack": "Full Stack", "QA Assurance": "Quality Practice", "AI Learning": "AI Learning", Projects: "Projects", "Let's talk ?": "Let's talk ?", Menu: "Menu", Close: "Close", Language: "Language" },
  fr: { Home: "Accueil", About: "A propos", "Full Stack": "Full Stack", "QA Assurance": "Pratique qualit�", "AI Learning": "Apprentissage IA", Projects: "Projets", "Let's talk ?": "�changeons ?", Menu: "Menu", Close: "Fermer", Language: "Langue" },
};

const fr: Record<string, string> = {
  "FULL STACK DEVELOPER � JAVA / SPRING BOOT � REACT": "D�VELOPPEUR FULL STACK � JAVA / SPRING BOOT � REACT",
  "Junior full-stack developer and computer-engineering graduate, building secure APIs, real-time products, and scalable backend systems.": "D�veloppeur full stack junior et ing�nieur en informatique, je con�ois des API s�curis�es, des produits temps r�el et des syst�mes backend �volutifs.",
  "Explore my work": "D�couvrir mon travail", "Email me": "M'�crire", "FIND ME ON": "ME RETROUVER SUR", "BASED IN": "BAS� A", "Available immediately.": "Disponible imm�diatement.", "Open to national & international roles.": "Ouvert aux opportunit�s nationales et internationales.", "EXPLORE MY PATHS": "EXPLORER MES PARCOURS", "Quality": "Qualit�", "Practice": "Pratique", "Testing / Detail / Delivery": "Tests / Pr�cision / Livraison", "AI": "IA", "Learning": "Apprentissage", "Python / Data / Models": "Python / Donn�es / Mod�les",
  "ABOUT / 01": "A PROPOS / 01", "Reliable systems need a human point of view.": "Les syst�mes fiables n�cessitent un point de vue humain.", "I am Hamza Lachiq, a computer engineer from EMSI Marrakech. I build practical digital products with Java, Spring Boot, React, and a focus on security, clarity, and operational scale.": "Je suis Hamza Lachiq, ing�nieur en informatique dipl�m� de l'EMSI Marrakech. Je cr�e des produits num�riques pratiques avec Java, Spring Boot et React, en privil�giant la s�curit�, la clart� et la mont�e en charge.", "EDUCATION": "FORMATION", "Engineering Degree in Computer Science": "Dipl�me d'ing�nieur en informatique", "LANGUAGES": "LANGUES", "OUTSIDE OF WORK": "EN DEHORS DU TRAVAIL", "Open source � Games � Basketball": "Open source � Jeux � Basketball",
  "FULL STACK / 01": "FULL STACK / 01", "Systems that are built to hold up.": "Des syst�mes con�us pour durer.", "I design and build secure APIs, responsive interfaces, and real-time services that transform operational needs into useful products.": "Je con�ois des API s�curis�es, des interfaces r�actives et des services temps r�el qui transforment les besoins op�rationnels en produits utiles.", "THE TOOLBOX": "LA BOITE A OUTILS", "Full-stack, end to end.": "Full stack, de bout en bout.", "Core languages": "Langages principaux", "Secure services": "Services s�curis�s", "Product interfaces": "Interfaces produit", "Useful persistence": "Persistance utile", "From commit to production": "Du commit � la production", "Production systems for real operations.": "Des syst�mes de production pour les op�rations r�elles.", "EXPERIENCE & PROJECTS": "EXP�RIENCES & PROJETS", "What I've built.": "Ce que j'ai construit.",
  "QUALITY PRACTICE / 02": "PRATIQUE QUALIT� / 02", "Quality is a daily practice.": "La qualit� est une pratique quotidienne.", "From clear API contracts to code reviews and Agile feedback loops, I treat quality as part of building-not a final checkpoint.": "Des contrats d'API clairs aux revues de code et aux retours Agile, je consid�re la qualit� comme une partie de la construction, pas une �tape finale.", "DELIVERY CHECK / API-014": "CONTROLE DE LIVRAISON / API-014", "Authenticated user can create and retrieve an appointment": "Un utilisateur authentifi� peut cr�er et r�cup�rer un rendez-vous", "API Design": "Conception d'API", "Code Review": "Revue de code", "JWT Security": "S�curit� JWT", "Regression Thinking": "Logique de r�gression", "role-based endpoint access": "acc�s aux endpoints bas� sur les r�les", "COLLABORATION": "COLLABORATION", "Small feedback loops, clear tickets, and practical review.": "Des boucles de retour courtes, des tickets clairs et des revues pragmatiques.", "WORKFLOW": "PROCESSUS", "CONTINUOUS QUALITY": "QUALIT� CONTINUE", "QUALITY MINDSET": "CULTURE QUALIT�", "Making releases calmer.": "Des mises en production plus sereines.", "Designing endpoints with roles in mind": "Concevoir les endpoints en pensant aux r�les", "Spring Security and JWT patterns that make access rules explicit.": "Des patterns Spring Security et JWT qui rendent les r�gles d'acc�s explicites.", "Useful feedback, early": "Du feedback utile, t�t", "How short delivery cycles and review create healthier products.": "Comment des cycles courts et la revue am�liorent les produits.", "Reliability starts in the details": "La fiabilit� commence dans les d�tails", "Practical habits for clearer services, interfaces, and releases.": "Des habitudes concr�tes pour des services, interfaces et livraisons plus clairs.",
  "AI LEARNING / 03": "APPRENTISSAGE IA / 03", "Curious about how systems learn.": "Curieux de comprendre comment les syst�mes apprennent.", "I am growing from Python and data analysis into machine learning, neural networks, and practical AI applications.": "Je progresse de Python et l'analyse de donn�es vers le machine learning, les r�seaux de neurones et les applications pratiques de l'IA.", "LEARNING SIGNAL / ACTIVE": "SIGNAL D'APPRENTISSAGE / ACTIF", "MODEL / 03": "MODELE / 03", "NEURAL NETWORK": "R�SEAU DE NEURONES", "INPUT": "ENTR�E", "OUTPUT": "SORTIE", "EXPERIMENT MODE": "MODE EXP�RIMENTATION", "Python & NumPy": "Python & NumPy", "Data analysis with Pandas": "Analyse de donn�es avec Pandas", "Machine learning": "Machine learning", "Neural networks": "R�seaux de neurones", "Applied AI projects": "Projets d'IA appliqu�e", "CURRENT PROJECT": "PROJET ACTUEL", "Autonomous car mini-game": "Mini-jeu de voiture autonome", "LEARNING LOG & EXPERIMENTS": "JOURNAL D'APPRENTISSAGE & EXP�RIENCES", "Small experiments, real curiosity.": "De petites exp�riences, une vraie curiosit�.", "A neural network behind the wheel": "Un r�seau de neurones au volant", "Using a visual driving simulation to understand inputs, training signals, and decisions.": "Utiliser une simulation de conduite visuelle pour comprendre les entr�es, les signaux d'entra�nement et les d�cisions.", "Building with Claude Code": "D�velopper avec Claude Code", "Using AI assistance for generation, refactoring, tests, and code review while staying accountable for the result.": "Utiliser l'assistance IA pour g�n�rer, refactorer, tester et relire le code tout en restant responsable du r�sultat.",
  "SELECTED WORK / 04": "TRAVAUX S�LECTIONN�S / 04", "Projects with a reason to exist.": "Des projets qui ont une raison d'�tre.", "Production-minded systems, useful internal tools, and hands-on experiments in AI and automation.": "Des syst�mes pens�s pour la production, des outils internes utiles et des exp�rimentations concr�tes en IA et automatisation.", "Autonomous Car Mini-Game": "Mini-jeu de voiture autonome", "Albion MarketFlipper": "Albion MarketFlipper", "Internal HR Platform": "Plateforme RH interne", "T360 Planning System": "Syst�me de planification T360",
};

type LocaleContext = { language: Language; setLanguage: (language: Language) => void; t: (value: string) => string };
const LocaleContext = createContext<LocaleContext | null>(null);

function translateNode(node: Text, language: Language) {
  const element = node.parentElement;
  if (!element || element.closest("script, style, textarea, select, option")) return;
  const source = element.dataset.i18nSource ?? node.nodeValue ?? "";
  const leading = source.match(/^\s*/)?.[0] ?? "";
  const trailing = source.match(/\s*$/)?.[0] ?? "";
  const key = source.trim();
  element.dataset.i18nSource = source;
  node.nodeValue = `${leading}${language === "fr" ? fr[key] ?? key : key}${trailing}`;
}
function translatePage(language: Language, root: Node = document.body) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  nodes.forEach((node) => translateNode(node, language));
}

export function LanguageProvider({ children, initialLanguage = "en" }: { children: React.ReactNode; initialLanguage?: Language }) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const pathname = usePathname();
  const setLanguage = (next: Language) => { localStorage.setItem("portfolio-language", next); setLanguageState(next); };
  const t = (value: string) => labels[language][value] ?? value;
  useEffect(() => { const saved = localStorage.getItem("portfolio-language") as Language | null; if (saved === "en" || saved === "fr") setLanguageState(saved); }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    const run = () => translatePage(language);
    const frame = requestAnimationFrame(run);
    const observer = new MutationObserver((records) => records.forEach((record) => record.addedNodes.forEach((node) => translatePage(language, node))));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [language, pathname]);
  const value = useMemo(() => ({ language, setLanguage, t }), [language]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
export function useLanguage() { const context = useContext(LocaleContext); if (!context) throw new Error("useLanguage must be used inside LanguageProvider"); return context; }

