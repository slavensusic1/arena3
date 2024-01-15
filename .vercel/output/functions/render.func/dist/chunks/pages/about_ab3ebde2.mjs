/* empty css                           */import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderComponent, m as maybeRenderHead, g as renderSlot, h as renderTransition, i as renderHead } from '../astro_e165efc1.mjs';
import 'html-escaper';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                           *//* empty css                           *//* empty css                           */import { useSpring, animated } from '@react-spring/web';
/* empty css                           */
const $$Astro$d = createAstro("https://example.com");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/node_modules/astro/components/ViewTransitions.astro", void 0);

const languages = {
  en: "EN",
  hr: "HR"
};
const defaultLang = "en";
const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.services/it": "It",
    "nav.portfolio": "Portfolio",
    "nav.Contact": "Contact",
    "nav.project": "Project",
    "nav.projectDetail": "Project Detail",
    "about.us": "About Us",
    "hero.headline": "Navigate Your Path to Success in the Digital Frontier with ",
    "hero.digiralArena": "Digital Arena",
    "hero.sub": "Founded in 2014, Digital Arena has been a leader in IT innovation, setting industry benchmarks. We turn complex challenges into pioneering solutions, shaping the digital future. Our approach is transformative, mirroring the innovative spirit that revolutionized print and typesetting. Digital Arena stands for turning uncertainty into potential, redefining technological possibilities. Our legacy is crafting transformative, cutting-edge technologies.",
    "button.services": "Our Services",
    "button.contact": "Contact Us",
    "button.learn": "Learn More ",
    "about.company.headline": "ABOUT OUR COMPANY",
    "about.company.subheadline": "Providing Your Business With Quality IT Service",
    "about.company.parag": "At Digital Arena, we are driven by a passion to deliver top-notch IT services for your business",
    "about.company.paragraf1": "Our team of over 50 IT engineers, in partnership with leading firms, specializes in IT outsourcing and project development. We have notable collaborations with PBZ, Addiko Bank, Raiffeisen, Zagrebačka Banka, CROZ, Ericsson Nikola Tesla in Croatia, and have undertaken projects for the Croatian National Television and Post. With deep expertise in the TelCo and Banking sectors, our services span:",
    "about.company.paragraf2": "While these are our core strengths, we're adept at adapting to and learning new technologies as needed.",
    "about.company.li1": "Development (Python, Java, full-stack, React, Angular, JavaScript, databases)",
    "about.company.li2": "Testing (automation and manual)",
    "about.company.li3": "DevOps (Linux, Docker, Kubernetes, CI/CD)",
    "about.company.li4": "IT Support and Maintenance",
    "why.headline": "WHY CHOOSE US?",
    "why.subheadline": "Embrace the Future: Propel Your Brand with the Latest in Technology",
    "why.parag": "Stay at the forefront of innovation by choosing us to elevate your brand.",
    "why.trustus.headline": "WHY TRUST US??",
    "why.trustus.subheadline": "Rely on Certified Industry Experts for Your Business",
    "why.trustus.parag": "Our engineers hold industry-recognized certifications, ensuring a high level of expertise and reliability. Trust us to drive the digital transformation of your business. With our certified professionals, we bring unparalleled excellence to every aspect of our services.",
    "yearsHelping": "Years of Helping Businesses",
    "workingEmp": "Employees Working",
    "completedPro": "Completed Projects",
    "happyCustomer": "Happy Customers",
    "workwithus.headline": "WANT TO WORK WITH US?",
    "workwithus.subheadline": "Digitally Transform & Grow Your Business",
    "workwithus.parag": "Embrace the digital era with us and lead your industry. Our expert IT team is committed to digitally transforming your business, focusing on efficiency and growth. We offer tailored, cutting-edge solutions to streamline your processes and enhance customer engagement. With a focus on innovation and excellence, we'll help your business not just adapt, but thrive in the digital landscape. Join us and elevate your business to new heights.",
    "work.proces.headline": "4-STEP WORK PROCESS",
    "work.proces.subHeadline": "Working Process",
    "work.proces.discoverHeadline": "Discover",
    "work.proces.discoverText": "Embark on a journey of exploration with Digital Arena. Discover innovative solutions tailored to meet your unique business needs. We delve deep into understanding your requirements, ensuring a foundation for success..",
    "work.proces.DesignHeadline": "Design & Development",
    "work.proces.DesignText": "At Digital Arena, we transform ideas into reality through cutting-edge design and development. Our expert team crafts solutions that not only meet but exceed expectations. Experience the power of seamless integration and captivating design..",
    "work.proces.InstallHeadline": "Install & Testing",
    "work.proces.InstallText": "Seamless implementation and rigorous testing are the cornerstones of our approach. Digital Arena ensures that every solution is not only installed seamlessly but rigorously tested for optimal performance. Your success is our priority",
    "work.proces.ProjectHeadline": "Project Delivery",
    "work.proces.ProjectText": "Experience the culmination of precision and dedication at Digital Arena. Our project delivery is a testament to our commitment to excellence. From concept to completion, we ensure a smooth and successful journey for every project.",
    "partners": "Our Partners",
    "portfolio.headline": "RECENT WORKS",
    "portfolio.subHeadline": "Our Portfolio",
    "portfolio.apps": "Applications",
    "portfolio.Miscellaneous": "Miscellaneous",
    "ser.headline": "Our Services",
    "ser.sub": "What we provide",
    "ser.it": "IT Solution",
    "ser.it-text": "Embark on a journey of continuous improvement as we seamlessly integrate groundbreaking technologies into your operations.Our commitment to staying on the leading edge ensures that your experience with us",
    "ser.ict": "ICT infrastructure",
    "ser.ict-text": "At Digital Arena, we specialize in the construction and maintenance of state-of-the-art ICT infrastructure. Our dedicated team is committed to building and sustaining all types of infrastructure necessary for seamless data services.",
    "ser.Energetics": "Energetics",
    "ser.Energetics-text": "Digital Arena is dedicated to revolutionizing the energy sector through strategic consulting and cutting-edge technology solutions. We focus on optimizing energy consumption and fostering innovation to create a sustainable future",
    "ser.gdpr-text": "Our commitment extends to GDPR compliance, safeguarding the personal data of all stakeholders in your business.",
    "ser.ciso-text": "Digital Arena offers CISO outsourcing services to strengthen your cybersecurity posture.Our comprehensive approach includes.",
    "ser.iso-text": "At Digital Arena, we specialize in providing comprehensive information system audit services",
    "read-more": "Read More",
    "baner.years": "Years of Helping Business",
    "about.flexHeadline": "Flexibility & Responsiveness",
    "about.flex": "In the dynamic landscape of todays business world, Flexibility & Responsiveness are not just attributes but essential qualities for success. Our approach embraces adaptability, ensuring that we can pivot swiftly to meet the ever-changing needs of our clients. By being flexible and responsive, we not only navigate challenges seamlessly but also create tailored solutions",
    "about.TeamworkHeadline": "Teamwork",
    "about.Teamwork": "Teamwork is the heartbeat of our success. We believe in the collective strength of diverse minds working in unison towards a common goal. Collaboration and shared expertise are woven into the fabric of our culture, fostering an environment where innovation flourishes and challenges are conquered collectively. Together, we build not just solutions but a collaborative legacy of achievement",
    "about.GrowthHeadline": "Growth",
    "about.Growth": "Growth is not just a destination; it's a continuous journey. At Digital Arena, we nurture an environment that encourages individual and collective growth. Our commitment to personal and professional development ensures that each team member and the organization as a whole is on a trajectory of constant improvement. As we grow, so does our capacity to deliver exceptional value to our clients and stakeholders.",
    "kauflandTitle": "Kaufland Market",
    "kauflandText1": "The k-marke(t) application as an integral part of Kaufland's prize game, which took place from August 30, 2023, to October 3, 2023. During the prize game, users could win rich Kaufland prizes every day. The application was successfully delivered to the client and satisfied the service in every aspect. NUXT was used as a 'fullstack' JavaScript framework for the application development",
    "kauflandSubheadline": "Interactive application where customers win prizes",
    "kauflandText2": "The first 1000 users with the best results on the leaderboard receive a code in their mailbox, entitling them to a daily prize – one Kaufland brand product",
    "pvsc.title": "pvsmartclick",
    "pvsc.headline": "Solar Power Plant Cost and Efficiency Simulation",
    "pvsc.text1": "The software platform provides a comprehensive solution for all phases of solar power plant development. It includes design tools that enable precise planning and visualization, energy production monitoring, and maintenance systems. Additionally, the software offers the ability to select equipment crucial for the optimal functioning of solar power plants. By integrating these key aspects, our platform facilitates management, enhances efficiency, and ensures long-term reliability of solar energy systems.",
    "pvsc.subheadline": "Innovation and Green Energy",
    "pvsc.text2": "We are developing an innovative application that will address the challenges associated with designing photovoltaic systems. Our goal is to provide users with a tool that considers electricity prices, time-differentiated tariffs, and the legal frameworks of individual countries in the region. Furthermore, we will implement artificial intelligence to search for products, provide recommendations, and optimize responses to generate designs in a matter of minutes, instead of weeks.",
    "pvsc.text3": "This application will resolve the uncertainty of investors in renewable energy sources, optimize small power plants according to consumption and the local energy distributor, and provide accurate documentation with minimal user input. Also, we encourage existing electric power consumers to invest in photovoltaic power plants for their own needs, using artificial intelligence to assist in selecting equipment based on availability, price range, and location. Through monitoring of production and consumption, the application will provide analyses and insights necessary for efficient use of renewable energy sources.",
    "edu.headline": "Developing Knowledge through Interactive Learning from First to Eighth Grade",
    "edu.text1": "Eduvision is an innovative educational platform that provides comprehensive learning for students from first to eighth grade. This interactive platform is exclusively focused on education, offering users a unique learning experience. Through advanced technologies and customized lessons, Eduvision encourages students to develop knowledge and skills. It is solely dedicated to education, offering high-quality learning resources.",
    "edu.subheadline": "Refresh Your Education with Eduvision",
    "edu.text2": "Eduvision is designed to enable users interactive learning without distractions. The platform focuses on creating a stimulating environment for education. All users have the opportunity to explore and assimilate material in a way tailored to their needs, providing an unparalleled educational experience.",
    "live.project": "Live Projekt",
    "Category": "Category",
    "category.app": "App",
    "category.ener": "Energetics",
    "footer.paragraf": "Crafting IT solutions can pose significant challenges, especially for those without a technical background. Collaborate with us, bringing your ideas to the table, and leverage our technical expertise to create a top-tier final product that will elevate your business",
    "footer.energetika": "Energetics",
    "footer.locationsHR": "Headquarters in Croatia",
    "footer.locationsBiH": "Headquarters in BiH"
  },
  hr: {
    "nav.home": "Početna",
    "nav.about": "O nama",
    "nav.services": "Usluge",
    "nav.portfolio": "Portfelj",
    "nav.Contact": "Kontakt",
    "nav.projectDetail": "Izrada Projekta",
    "nav.project": "Projekt",
    "ser.headline": "Naše Usluge",
    "hero.headline": "Kreirajte svoj put uspjeha u digitalnom svijetu uz ",
    "hero.digiralArena": "Digital Arenu",
    "hero.sub": "Osnovana 2014. godine, Digital Arena je lider u inovacijama informacijskih tehnologija, postavljajući industrijske standarde. Pretvaramo složene izazove u vrhunska rješenja, oblikujući digitalnu budućnost. Digital Arena znači pretvaranje neizvjesnosti u potencijal, redefinirajući tehnološke mogućnosti. Naša misija je stvaranje transformativnih tehnologija posljednje generacije.",
    "about.us": "O nama",
    "about.company.li1": "Development (Python, Java, full-stack, React, Angular, JavaScript, baze podataka)",
    "about.company.li2": "Testiranje (automatizacija i ručno)",
    "about.company.li3": "DevOps (Linux, Docker, Kubernetes, CI/CD)",
    "about.company.li4": "IT podrška i održavanje",
    "why.headline": "ZAŠTO NAS ODABRATI?",
    "why.subheadline": "Zagrebite u Budućnost: Ojačajte svoj Brand s Najnovijom Tehnologijom",
    "why.parag": "Ostanite u samom vrhu inovacija odabirom nas za unaprjeđenje svog branda.",
    "why.trustus.headline": "ZAŠTO NAM VJEROVATI??",
    "why.trustus.subheadline": "Oslonite se na certificirane IT stručnjake za Vaš posao",
    "why.trustus.parag": "Naši inženjeri posjeduju industrijski priznate certifikate, osiguravajući visoku razinu stručnosti i pouzdanosti. Vjerujte nam u vođenju digitalne transformacije vašeg poslovanja. S našim certificiranim profesionalcima, donosimo neprikosnovenu izvrsnost u svakom aspektu naših usluga.",
    "workwithus.headline": "ŽELITE RADITI S NAMA?",
    "workwithus.subheadline": "Digitalno Transformirajte & Razvijajte Svoje Poslovanje",
    "workwithus.parag": "Pridružite se nama u digitalnom dobu i budite lider u svojoj industriji. Naš stručni IT tim posvećen je digitalnoj transformaciji vašeg poslovanja, usmjeravajući se na efikasnost i rast. Nudimo prilagođena, najmodernija rješenja za pojednostavljenje vaših procesa i poboljšanje angažmana kupaca. S fokusom na inovacije i izvrsnost, pomoći ćemo vašem poslovanju ne samo da se prilagodi, već i da prosperira u digitalnom pejzažu. Pridružite nam se i podignite svoje poslovanje na nove visine.",
    "about.flexHeadline": "Fleksibilnost",
    "yearsHelping": "Godina u poslovanju",
    "workingEmp": "Zaposlenih Djelatnika",
    "completedPro": "Dovršenih Projekata",
    "happyCustomer": "Zadovoljnih Kupaca",
    "portfolio.headline": "NAJNOVIJI RADOVI",
    "portfolio.subHeadline": "Naš Portfolio",
    "portfolio.apps": "Aplikacije",
    "portfolio.Miscellaneous": "Razno",
    "partners": "Naši partneri",
    "about.TeamworkHeadline": "Timski Rad",
    "about.Teamwork": "Timski rad je srž našeg uspjeha. Vjerujemo u kolektivnu snagu različitih umova koji rade zajedno prema zajedničkom cilju. Suradnja i zajedničko stručno znanje utkani su u tkaninu naše kulture, stvarajući okruženje u kojem cvjeta inovacija i izazovi se zajednički savladavaju. Zajedno ne gradimo samo rješenja, već i suradničko nasljeđe postignuća",
    "about.GrowthHeadline": "Rast",
    "about.Growth": "Rast nije samo cilj; to je neprekidno putovanje. U digital areni, njegujemo okruženje koje potiče individualni i kolektivni rast. Naša predanost osobnom i profesionalnom razvoju osigurava da je svaki član tima i organizacija kao cjelina na putu stalnog usavršavanja. Kako rastemo, tako raste i naša sposobnost pružanja izuzetne vrijednosti našim klijentima i dionicima.",
    "work.proces.headline": "PROCES RAZVOJA U 4 KORAKA",
    "work.proces.subHeadline": "Proces rada",
    "work.proces.discoverHeadline": "Ideja",
    "work.proces.discoverText": "Krenite na put istraživanja s Digital Arena. Otkrijte inovativna rješenja prilagođena vašim jedinstvenim poslovnim potrebama. Detaljno se posvećujemo razumijevanju vaših zahtjeva, osiguravajući temelj za uspjeh.",
    "work.proces.DesignHeadline": "Dizajn i razvoj",
    "work.proces.DesignText": "U Digital Arena, pretvaramo ideje u stvarnost kroz vrhunski dizajn i razvoj. Naš stručni tim stvara rješenja koja ne samo da ispunjavaju, već i nadmašuju očekivanja.",
    "work.proces.InstallHeadline": "Instalacija i testiranje",
    "work.proces.InstallText": "Savršena primjena i detaljno ispitivanje su ključni aspekti naše metodologije. U Digital Areni, svaka implementacija se izvodi s najvišom preciznošću, a svako rješenje prolazi temeljite provjere za maksimalnu efikasnost. Postizanje vašeg uspjeha je na vrhu naše liste prioriteta.",
    "work.proces.ProjectHeadline": "Realizacija projekta",
    "work.proces.ProjectText": "U Digital Areni, svaki projekt je odraz vrhunske točnosti i predanog rada.  Od početne ideje do finalne realizacije, jamčimo nesmetanu i uspješnu provedbu svakog projekta.",
    "button.services": "Naše usluge ",
    "button.contact": "Kontaktirajte nas",
    "button.learn": "Saznajte više",
    "about.company.headline": "O DIGITAL ARENI",
    "about.company.subheadline": "Osiguravamo Vašem Poslovanju Kvalitetne IT Usluge",
    "about.company.parag": "U Digital Areni, pokreće nas strast da pružimo vrhunske IT usluge za vaše poslovanje.",
    "about.company.paragraf1": "Naš tim broji više od 50 iskusnih IT inženjera koji se specijaliziraju za pružanje IT usluga i razvoj projekata u okviru outsourcinga. U našem portfoliju ističu se značajne suradnje s renomiranim financijskim institucijama kao što su Privredna banka Zagreb (PBZ), Addiko Bank, Raiffeisen Bank, Zagrebačka banka, te uspješni projekti realizirani za Hrvatsku radioteleviziju i Hrvatsku poštu. S dubokim stručnostima u područjima telekomunikacija i bankarstva, naše usluge obuhvaćaju:",
    "about.company.paragraf2": "Unatoč našim primarnim kompetencijama, istaknuli smo se kao stručnjaci sposobni prilagoditi se novim izazovima i tražiti rješenja u nepoznatim područjima.",
    "ser.sub": "Što nudimo",
    "ser.it": "IT rješenja",
    "ser.it-text": "Krenite na put stalnog poboljšanja dok neprimjetno integriramo revolucionarne tehnologije u vaše operacije. Naša predanost da ostanemo na vrhu osigurava vaše iskustvo s nama",
    "ser.ict": "ICT infrastruktura",
    "ser.ict-text": "U Digital Areni specijalizirani smo za izgradnju i održavanje najsuvremenije ICT infrastrukture. Naš predani tim predan je izgradnji i održavanju svih vrsta infrastrukture potrebne za besprijekorne podatkovne usluge.",
    "ser.Energetics": "Energetika",
    "ser.Energetics-text": "Digital Arena posvećena je revolucioniranju energetskog sektora kroz strateško savjetovanje i vrhunska tehnološka rješenja. Usredotočeni smo na optimizaciju potrošnje energije i poticanje inovacija za stvaranje održive budućnosti",
    "ser.gdpr-text": "Naša se obveza proteže na usklađenost s GDPR-om, čuvajući osobne podatke svih dionika u vašem poslovanju.",
    "ser.ciso-text": "Digital Arena nudi usluge CISO outsourcinga za jačanje vaše sigurnosti od hakerskih napada. Naš sveobuhvatni pristup uključuje.",
    "ser.iso-text": "U Digital Areni specijalizirani smo za pružanje sveobuhvatnih usluga revizije informacijskog sustava",
    "read-more": "Pročitaj više",
    "baner.years": "godine u poslu",
    "kauflandTitle": "Kaufland market",
    "kauflandText1": "Aplikacija k-marke(t) kao sastavni dio Kauflandove nagradne igre koja se odvijalau periodu od 30.08.2023. do 03.10.2023. Tijekom naradne igre korisnicu su svaki dan mogli dobiti bogate Kauflandove nagrade. Aplikacija je uspješno isporučena naručitelju te je zadovoljila uslugom u svkom aspektu. Za izradu aplikacije je korišten NUXT kao 'fullstack' javascript framework",
    "kauflandSubheadline": "Interaktivna aplikacija u kojoj kupci osvajaju  nagrade",
    "kauflandText2": "Prvih 1000 korisnika koji imaju najbolje rezultate na rang- listi u svoj pretinac dobivaju kod kojim ostvaruju pravo na dnevnu nagradu – jedan proizvod Kauflandove robne marke",
    "pvsc.headline": "Simulacija troškova i učinkovitosti solarnih elektrana",
    "pvsc.text1": "Softverska platforma pruža sveobuhvatno rješenje za sve faze razvoja solarnih elektrana. Uključuje alate za dizajn koji omogućuju precizno planiranje i vizualizaciju, praćenje proizvodnje energije te sustave održavanja. Osim toga, softver nudi mogućnost odabira opreme koja je ključna za optimalno funkcioniranje solarnih elektrana. Integriranjem ovih ključnih aspekata, naša platforma olakšava upravljanje, povećava učinkovitost i osigurava dugoročnu pouzdanost solarnih energetskih sustava.",
    "pvsc.subheadline": "Inovativnost i zelena energija",
    "pvsc.text2": "Razvijamo inovativnu aplikaciju koja će riješiti izazove povezane s projektiranjem fotovoltačkih sustava. Naš cilj je pružiti korisnicima alat koji uzima u obzir cijene električne energije, vremenski diferencirane tarife i zakonske okvire pojedinih zemalja u regiji. Nadalje, implementirat ćemo umjetnu inteligenciju za pretraživanje proizvoda, davanje preporuka i optimizaciju odgovora kako bismo generirali dizajn u pitanju minuta, umjesto tjednima.",
    "pvsc.text3": "Ova aplikacija će riješiti neizvjesnost investitora u obnovljive izvore energije, optimizirati male elektrane prema potrošnji i lokalnom distributeru energije, te pružiti točnu dokumentaciju s minimalnim unosima korisnika. Također, potičemo postojeće potrošače električne energije da ulažu u fotonaponske elektrane za vlastite potrebe, koristeći umjetnu inteligenciju za pomoć pri odabiru opreme prema dostupnosti, cjenovnom rasponu i lokaciji. Kroz praćenje proizvodnje i potrošnje, aplikacija će pružati analize i uvide potrebne za efikasno korištenje obnovljivih izvora energije.",
    "live.project": "Projekt",
    "Category": "Kategorija",
    "category.app": "Aplikacija",
    "category.ener": "Energetika",
    "footer.paragraf": "Izrada IT rješenja može predstavljati značajne izazove, posebno za one bez tehničkog znanja. Surađujte s nama, iznesite svoje ideje na stol i iskoristite našu tehničku stručnost za stvaranje vrhunskog konačnog proizvoda koji će unaprijediti vaše poslovanje",
    "about.flex": "U dinamičnom krajoliku današnjeg poslovnog svijeta, Fleksibilnost i responzivnost nisu samo atributi, već bitne kvalitete za uspjeh. Naš pristup obuhvaća prilagodljivost, osiguravajući da se možemo brzo okrenuti prema potrebama naših klijenata koje se stalno mijenjaju. Budući da smo fleksibilni i brzi, stvaramo prilagođena za svakog kupca",
    "footer.energetika": "Energetika",
    "footer.locationsHR": "Uredi Hrvatska",
    "footer.locationsBiH": "Uredi BiH"
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui)
    return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

const logo = {"src":"/_astro/digitalarena.258bdcdb.png","width":1024,"height":212,"format":"png"};

const FooterJs = ({
  it,
  ict,
  energetics,
  isoGdprCisco,
  translatedParagraf,
  translatedEnergetika,
  services,
  urediHR,
  urediBiH
}) => {
  const cur = /* @__PURE__ */ new Date();
  const year = cur.getFullYear();
  return /* @__PURE__ */ jsxs("footer", { className: "bg-gray-900 text-center text-neutral-600  lg:text-left ", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center border-b-2 border-neutral-200 lg:justify-between", children: /* @__PURE__ */ jsx("div", { className: "mr-12 hidden lg:block" }) }),
    /* @__PURE__ */ jsx("div", { className: "mx-6 py-10 text-center md:text-left", children: /* @__PURE__ */ jsxs("div", { className: "grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx("h6", { className: "mb-4 flex items-center justify-start font-semibold uppercase md:justify-start", children: /* @__PURE__ */ jsx("img", { src: logo.src, alt: "logo", className: "w-1/2", id: "logo" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-left text-white", "data-cy": "paragraf-footer", "data-i18n": "translatedParagraf", children: translatedParagraf }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-left py-5", children: /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/company/digitalarenadoo", target: "_blank", "data-cy": "linkedin-link", className: "mr-6 text-neutral-200", children: /* @__PURE__ */ jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-4 w-4",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
              }
            )
          }
        ) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: " text-left", children: [
        /* @__PURE__ */ jsx("h6", { className: "mb-4 flex justify-left font-bold text-gray-200 text-xl pb-2 md:justify-start border-b ", children: services }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: /* @__PURE__ */ jsx("a", { href: it, "data-cy": "it-link", className: "text-neutral-200 hover:text-green-500 hover:underline underline-offset-2", children: "IT" }) }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: /* @__PURE__ */ jsx("a", { href: ict, "data-cy": "ict-link", className: "text-neutral-200 hover:text-green-500 hover:underline", children: "ICT" }) }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: /* @__PURE__ */ jsx("a", { href: energetics, "data-cy": "it-energetics", className: "text-neutral-200 hover:text-green-500 hover:underline", children: translatedEnergetika }) }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: isoGdprCisco, "data-cy": "it-iso", className: "text-neutral-200 hover:text-green-500 hover:underline", children: "GDPR ISO CISO" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: " text-left", children: /* @__PURE__ */ jsxs("section", { className: " text-left", children: [
        /* @__PURE__ */ jsx("h6", { className: "mb-4 flex justify-left font-bold  text-xl pb-2 md:justify-start border-b text-gray-200", "data-cy": "uredi-hr", children: urediHR }),
        /* @__PURE__ */ jsxs("p", { className: "mb-4 flex items-start justify-start md:justify-start text-neutral-200", "data-cy": "uredi-zg", children: [
          /* @__PURE__ */ jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: "mr-3 h-5 w-5",
              children: [
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                  }
                )
              ]
            }
          ),
          "Zagreb, XI Podbrežje 11a"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mb-4 flex items-start justify-start md:justify-start text-neutral-200", "data-cy": "uredi-st", children: [
          /* @__PURE__ */ jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: "mr-3 h-5 w-5",
              children: [
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                  }
                )
              ]
            }
          ),
          "Split, Trg Hrvatske bratske zajednice 8"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mb-4 flex items-start justify-start md:justify-start text-neutral-200", "data-cy": "uredi-im", children: [
          /* @__PURE__ */ jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: "mr-3 h-5 w-5",
              children: [
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                  }
                )
              ]
            }
          ),
          "Št. Stjepana Radića 16, Imotski"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mb-4 text-neutral-200 flex items-start justify-start md:justify-start", "data-cy": "tel-hr", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: "mr-3 h-5 w-5",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  "fill-rule": "evenodd",
                  d: "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z",
                  "clip-rule": "evenodd"
                }
              )
            }
          ),
          "+385 99 505 8114"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-200 pb-5", "data-cy": "oib-hr", children: "OIB: 69476362249" })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: " text-left", children: [
        /* @__PURE__ */ jsx(
          "h6",
          {
            className: "mb-4 flex justify-left font-bold  text-xl pb-2 md:justify-start border-b text-gray-200",
            "data-cy": "uredi-bih",
            children: urediBiH
          }
        ),
        /* @__PURE__ */ jsxs("p", { className: "mb-4 flex items-start justify-start md:justify-start text-neutral-200", "data-cy": "ured-lju", children: [
          /* @__PURE__ */ jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: "mr-3 h-5 w-5",
              children: [
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                  }
                )
              ]
            }
          ),
          "Ljubuški, Šipovača 84"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mb-4 flex items-start justify-start md:justify-start text-neutral-200", "data-cy": "uredi-cap", children: [
          /* @__PURE__ */ jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: "mr-3 h-5 w-5",
              children: [
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                  }
                )
              ]
            }
          ),
          "Čapljina,  Braće Radića bb"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mb-4  text-neutral-200 flex items-start justify-start md:justify-start", "data-cy": "tel-bih", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: "mr-3 h-5 w-5",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  "fill-rule": "evenodd",
                  d: "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z",
                  "clip-rule": "evenodd"
                }
              )
            }
          ),
          "+387 63 011 333"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-200 pb-5", "data-cy": "oib-bih", children: " JIB/OIB: 4272 4789 0000 1" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-gray-800 border-t border-white p-6 text-left text-white font-bold  ", children: /* @__PURE__ */ jsxs("span", { id: "copyright", className: "text-gray-200 text-xl", children: [
      "© Digital Arena ",
      year
    ] }) })
  ] });
};

const $$Astro$c = createAstro("https://example.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Footer;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "FooterJs", FooterJs, { "it": `/${lang}/services/it`, "ict": `/${lang}/services/ict`, "energetics": `/${lang}/services/energetics`, "isoGdprCisco": `/${lang}/services/isoGdprCisco`, "translatedParagraf": t("footer.paragraf"), "translatedEnergetika": t("footer.energetika"), "services": t("ser.headline"), "urediHR": t("footer.locationsHR"), "urediBiH": t("footer.locationsBiH"), "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/FooterJs", "client:component-export": "default" })}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/Footer.astro", void 0);

const Navbar = ({
  homeTex,
  homeLink,
  services,
  servicesLink,
  about,
  aboutLink,
  portfolio,
  portfolioLink,
  languageLinks
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= window.innerHeight / 8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const cur = /* @__PURE__ */ new Date();
  const year = cur.getFullYear();
  return /* @__PURE__ */ jsxs("div", { className: `fixed top-0 w-full z-50 transition duration-500 ease-in-out ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`, children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-3 md:py-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center px-5", children: /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("img", { src: logo.src, alt: "logo", className: "h-10 md:h-12" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex space-x-8 px-5", children: [
        /* @__PURE__ */ jsx("a", { href: homeLink, className: `text-gray-100 hover:text-green-600 text-xl ${isScrolled ? "text-green-500" : ""}`, children: homeTex }),
        /* @__PURE__ */ jsx("a", { href: aboutLink, className: `text-gray-100 hover:text-green-600 text-xl ${isScrolled ? "text-green-500" : ""}`, children: about }),
        /* @__PURE__ */ jsx("a", { href: servicesLink, className: `text-gray-100 hover:text-green-600 text-xl ${isScrolled ? "text-green-500" : ""}`, children: services }),
        /* @__PURE__ */ jsx("a", { href: portfolioLink, className: `text-gray-100 hover:text-green-600 text-xl ${isScrolled ? "text-green-500" : ""}`, children: portfolio }),
        languageLinks.map(({ href, label }, index) => /* @__PURE__ */ jsx("ul", { className: `text-gray-100 hover:text-green-600 text-xl list-none ${isScrolled ? "text-green-500" : ""}`, children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href, className: `text-gray-100 hover:text-green-600 text-xl list-none ${isScrolled ? "text-green-500" : ""}`, children: label }) }, index) }))
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:hidden z-50 px-5", children: /* @__PURE__ */ jsx("button", { onClick: () => setMenuOpen(!isMenuOpen), className: "text-gray-800 hover:text-green-600 focus:outline-none focus:text-green-600", children: !isMenuOpen ? /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "", width: "24", height: "24", viewBox: "0 0 24 24", stroke: `${!isScrolled ? "white" : "black"} `, strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M2 5h20M2 12h20M2 19h20" }) }) : "" }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: `absolute top-0 inset-x-0  transition transform origin-top-right lg:hidden ${isMenuOpen ? "scale-100" : "hidden scale-95 opacity-0"}`, children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50", children: [
      /* @__PURE__ */ jsxs("div", { className: "pt-5 pb-6 px-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: logo.src, alt: "logo", className: "h-8 w-auto" }) }),
          /* @__PURE__ */ jsx("div", { className: "-mr-2", children: /* @__PURE__ */ jsxs("button", { onClick: () => setMenuOpen(false), className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600", children: [
            /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ jsx("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }),
              /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" })
            ] }),
            "          "
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxs("nav", { className: "grid gap-y-4", children: [
          /* @__PURE__ */ jsx("a", { href: homeLink, className: "px-4 py-2 text-gray-900 hover:text-green-600 font-medium rounded-md hover:bg-gray-50", children: homeTex }),
          /* @__PURE__ */ jsx("a", { href: aboutLink, className: "px-4 py-2 text-gray-900 hover:text-green-600 font-medium rounded-md hover:bg-gray-50", children: about }),
          /* @__PURE__ */ jsx("a", { href: servicesLink, className: "px-4 py-2 text-gray-900 hover:text-green-600 font-medium rounded-md hover:bg-gray-50", children: services }),
          /* @__PURE__ */ jsx("a", { href: portfolioLink, className: "px-4 py-2 text-gray-900 hover:text-green-600 font-medium rounded-md hover:bg-gray-50", children: portfolio }),
          languageLinks.map(({ href, label }, index) => /* @__PURE__ */ jsx("a", { href, className: "px-4 py-2 text-green-600 hover:text-green-600 font-medium rounded-md hover:bg-gray-50", children: label }, index))
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-blue-900 p-6 text-left font-bold  ", children: /* @__PURE__ */ jsxs("span", { id: "copyright", className: "text-slate-900 text-base", children: [
        "© Digital Arena ",
        year
      ] }) })
    ] }) })
  ] });
};

const $$Astro$b = createAstro("https://example.com");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Navbar;
  const currentUrl = new URL(Astro2.url);
  const currentPath = currentUrl.pathname;
  const currentLang = currentPath.split("/")[1];
  const constructUrlForLanguage = (lang2) => {
    if (languages.hasOwnProperty(currentLang)) {
      return currentPath.replace(`/${currentLang}`, `/${lang2}`);
    } else {
      return `/${lang2}${currentPath}`;
    }
  };
  const languageLinks = Object.entries(languages).map(([lang2, label]) => {
    return {
      href: constructUrlForLanguage(lang2),
      label
    };
  });
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  Object.entries(languages).map(([code, label]) => ({ code, label }));
  return renderTemplate`${renderComponent($$result, "Navbar", Navbar, { "currentUrl": currentUrl, "homeTex": t("nav.home"), "homeLink": `/${lang}/`, "services": t("nav.services"), "servicesLink": `/${lang}/services`, "about": t("nav.about"), "aboutLink": `/${lang}/about`, "portfolio": t("nav.portfolio"), "portfolioLink": `/${lang}/portfolio`, "languageLinks": languageLinks, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/Navbar.jsx", "client:component-export": "default" })}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/Navbar.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$a = createAstro("https://example.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Contact;
  let lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<button onclick="openEmail()" class="bg-green-600 whitespace-nowrap text-white hover:bg-green-700 duration-300 text-lg px-6 py-2 rounded-md md:text-xl md:px-8 md:py-3  ">', "</button><button></button><script>\n    function openEmail() {\n        window.location.href = 'mailto:digitalarena@info.com';\n    }\n<\/script>"])), maybeRenderHead(), t("button.contact"));
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/Contact.astro", void 0);

const about$2 = {"src":"/_astro/about-ilustration.0cbe60c9.svg","width":641.51274,"height":626.39159,"format":"svg"};

const $$Astro$9 = createAstro("https://example.com");
const $$FrontAbout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$FrontAbout;
  let lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`<!-- About Section with Enhanced Percentage Display -->${maybeRenderHead()}<div class="bg-gray-200 pt-20 py-20 lg:px-20 px-5 "><div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-20 justify-items-center bg-gray-200"><!-- Text Content --><div><!-- About Title and Description --><div class="py-5"><p class="text-green-500 text-left font-bold text-lg md:text-2xl">${t("about.company.headline")}</p><h2 class="text-left font-bold py-3 text-4xl md:text-4xl leading-[50px]">${t("about.company.subheadline")}</h2><p class="text-xl ">${t("about.company.parag")}</p></div><!-- Enhanced Percentage Display --><div class="space-y-4 bg-gray-200 pb-14 w-full"><p class="mb-4 text-xl">${t("about.company.paragraf1")}</p><ul class="list-disc ml-6 mb-4 text-xl"><li>${t("about.company.li1")}</li><li>${t("about.company.li2")}</li><li>${t("about.company.li3")}</li><li>${t("about.company.li4")}</li></ul><p class="mb-4 text-xl">${t("about.company.paragraf2")}</p></div><!-- Call to Action Button --><div class="py-8"><button class="bg-green-600 whitespace-nowrap text-white hover:bg-green-700 duration-300 text-lg px-6 py-2 rounded-md md:text-xl md:px-8 md:py-3  max-w-[16rem]">${t("button.learn")}</button></div></div><!-- Image Section --><div class="w-2/3 flex"><img${addAttribute(about$2.src, "src")} alt="about image" class="w-full"></div></div></div>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/frontpage/FrontAbout.astro", void 0);

function Number({ n, title, checkmark, titles }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 30, friction: 20 }
  });
  return /* @__PURE__ */ jsx("div", { class: "flex justify-center py-0 z-20", children: /* @__PURE__ */ jsxs("div", { class: "flex flex-col items-center justify-center ml-4", children: [
    /* @__PURE__ */ jsxs("div", { class: "flex text-base md:text-3xl items-center space-x-1 justify-center text-gray-100 z-10", children: [
      /* @__PURE__ */ jsx(animated.div, { class: "text-5xl md:text-5xl font-bold", children: number.to((n2) => n2.toFixed(0)) }),
      /* @__PURE__ */ jsx("p", { class: "text-lg", children: "+" }),
      /* @__PURE__ */ jsx("p", {})
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xl text-white font-bold", children: title })
  ] }) });
}

function CounterComponent({
  yearsHelping,
  workingEmp,
  completedPro,
  happyCustomer
}) {
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-y-16 py-10", style: { backgroundImage: "../../assets/banner.jpg" }, children: [
    /* @__PURE__ */ jsx(
      Number,
      {
        n: 10,
        title: yearsHelping,
        "client:visible": true
      }
    ),
    /* @__PURE__ */ jsx(
      Number,
      {
        n: 50,
        title: workingEmp,
        className: "z-20",
        "client:visible": true
      }
    ),
    /* @__PURE__ */ jsx(
      Number,
      {
        n: 36,
        title: completedPro,
        "client:visible": true
      }
    ),
    /* @__PURE__ */ jsx(
      Number,
      {
        n: 20,
        title: happyCustomer,
        "client:visible": true
      }
    )
  ] });
}

const $$Astro$8 = createAstro("https://example.com");
const $$NumbersBanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$NumbersBanner;
  let lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<div class="relative" data-astro-cid-na57dh63><div class="bg py-10 -z-20" data-astro-cid-na57dh63><div class="absolute bg-black/10 h-full w-full z-10" style="transform: translate(-50%, -50%); left: 50%; top: 50%;" data-astro-cid-na57dh63></div><div class="z-20" data-astro-cid-na57dh63>${renderComponent($$result, "Counters", CounterComponent, { "yearsHelping": t("yearsHelping"), "workingEmp": t("workingEmp"), "completedPro": t("completedPro"), "happyCustomer": t("happyCustomer"), "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/frontpage/Counters", "client:component-export": "default", "data-astro-cid-na57dh63": true })}</div></div></div>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/frontpage/NumbersBanner.astro", void 0);

const $$Astro$7 = createAstro("https://example.com");
const $$WorkWithUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$WorkWithUs;
  let lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<div class="bg py-10 " data-astro-cid-2zrqbp5n><div class="px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-12 " data-astro-cid-2zrqbp5n><div class="sm:pe-6 lg:pe-8 py-20 " data-astro-cid-2zrqbp5n><div class="absolute top-0 left-0 w-full h-full bg-black/60 " data-astro-cid-2zrqbp5n></div><div class="flex flex-col justify-center items-center  max-w-3xl mx-auto text-center" data-astro-cid-2zrqbp5n><p class="text-green-500 text-left font-bold text-lg md:text-2xl z-20" data-astro-cid-2zrqbp5n>${t("workwithus.headline")}</p><h2 class="font-bold text-3xl md:text-4xl text-white/100 z-20 text-center py-4" data-astro-cid-2zrqbp5n>${t("workwithus.subheadline")}</h2><p class="text-white text-center z-20" data-astro-cid-2zrqbp5n>${t("workwithus.parag")}</p><div class="flex items-center justify-center gap-3 z-20 pt-10" data-astro-cid-2zrqbp5n><button class="bg-white text-lg px-6 py-2 md:text-xl md:px-8 md:py-3  rounded-md " data-astro-cid-2zrqbp5n><a href="/services" data-astro-cid-2zrqbp5n> Our services </a></button><button data-astro-cid-2zrqbp5n></button>${renderComponent($$result, "Contact", $$Contact, { "data-astro-cid-2zrqbp5n": true })}</div></div></div></div></div>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/frontpage/WorkWithUs.astro", void 0);

const croz = {"src":"/_astro/croz2.9180bc32.png","width":400,"height":250,"format":"png"};

const kaufland = {"src":"/_astro/kaufland.4fab3207.png","width":960,"height":960,"format":"png"};

const rba = {"src":"/_astro/rba.111e5da2.png","width":500,"height":500,"format":"png"};

const apis = {"src":"/_astro/apis2.d791cf93.jpg","width":400,"height":250,"format":"jpg"};

const pbz = {"src":"/_astro/pbz3.028965fb.jpg","width":400,"height":250,"format":"jpg"};

const zaba = {"src":"/_astro/Zaba.ef08b9a4.svg","width":245,"height":46,"format":"svg"};

const addiko = {"src":"/_astro/Addiko.739dc000.svg","width":566,"height":72.1,"format":"svg"};

const ericson = {"src":"/_astro/ericson.7e10a622.svg","width":916,"height":802,"format":"svg"};

const HRT = {"src":"/_astro/HRT.c21e4aed.png","width":323,"height":156,"format":"png"};

const posta = {"src":"/_astro/posta.75457d47.svg","width":154.641,"height":59.158,"format":"svg"};

const king = {"src":"/_astro/kingICT.e21c0fd8.png","width":217,"height":217,"format":"png"};

const A1 = {"src":"/_astro/A1.a642a8f1.png","width":986,"height":1024,"format":"png"};

const iskon = {"src":"/_astro/iskon.dcdacba8.png","width":96,"height":96,"format":"png"};

const combis = {"src":"/_astro/combis.3cc4042d.png","width":150,"height":69,"format":"png"};

const bilog = {"src":"/_astro/bilog.b1874022.svg","width":104,"height":32,"format":"svg"};

const $$Astro$6 = createAstro("https://example.com");
const $$Partners = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Partners;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<div class=" px-10"><div class=" sm:pe-6 lg:pe-8 py-10"><div class="flex flex-col justify-center items-center py-5"><h2 class="text-left font-bold text-4xl md:text-4xl">${t("partners")}</h2></div><div class="flex flex-col items-center justify-center h-full "><div class="container max-w-8xl mx-auto px-2 md:px-3 lg:px-6"><div class="grid grid-cols-3 grid-rows-2 gap-4 md:grid-cols-3 lg:grid-cols-5 md:max-w-xl md:mx-auto place-items-center lg:max-w-6xl lg:mx-auto"><div class="flex items-center justify-center w-full"><img${addAttribute(croz.src, "src")} alt="croz logo" style="aspect-ratio:89/56" class="p-2 object-contain w-full h-full rounded-md border-2 shadow-md"></div><div class="flex items-center justify-center w-full"><img${addAttribute(kaufland.src, "src")} alt="kaufland logo" style="aspect-ratio:89/56" class="object-contain w-full h-full rounded-md border-2 shadow-md"></div><div class="flex items-center justify-center w-full"><img${addAttribute(A1.src, "src")} alt="kaufland logo" style="aspect-ratio:89/56" class="object-contain py-1 w-full h-full rounded-md border-2 shadow-md"></div><div class="flex items-center justify-center w-full"><img${addAttribute(king.src, "src")} alt="kaufland logo" style="aspect-ratio:89/56" class="object-cover p-2 w-full h-full rounded-md border-2 shadow-md"></div><div class="flex items-center justify-center w-full"><img${addAttribute(posta.src, "src")} alt="kaufland logo" style="aspect-ratio:89/56" class="object-contain p-3 w-full h-full rounded-md border-2 shadow-md"></div><div class="flex items-center justify-center w-full"><img${addAttribute(combis.src, "src")} alt="kaufland logo" style="aspect-ratio:89/56" class="object-contain p-3 w-full h-full rounded-md border-2 shadow-md"></div><div class="flex items-center justify-center w-full"><img${addAttribute(rba.src, "src")} alt="rba logo" style="aspect-ratio:89/56" class="object-contain w-full h-full rounded-md border-2 shadow-md"></div><div class="flex items-center justify-center w-full"><img${addAttribute(HRT.src, "src")} alt="rba logo" style="aspect-ratio:89/56" class="object-contain w-full h-full rounded-md border-2 shadow-md"></div><div class="flex items-center justify-center w-full"><img${addAttribute(bilog.src, "src")} alt="rba logo" style="aspect-ratio:89/56" class="p-2 object-contain w-full h-full rounded-md border-2 shadow-md"></div><div class="flex items-center justify-center w-full"><img${addAttribute(apis.src, "src")} alt="apis logo" style="aspect-ratio:89/56" class="object-cover w-full h-full rounded-md border-2 shadow-md"></div><div class="flex items-center justify-center w-full"><img${addAttribute(pbz.src, "src")} alt="pbz logo" style="aspect-ratio:89/56" class="object-contain px-2 w-full h-full rounded-md border-2 shadow-md"></div><div class="flex items-center justify-center w-full"><img${addAttribute(iskon.src, "src")} alt="pbz logo" style="aspect-ratio:89/56" class="p-2 object-contain w-full h-full rounded-md border-2 shadow-md"></div><div class="flex items-center justify-center w-full"><img${addAttribute(ericson.src, "src")} alt="pbz logo" style="aspect-ratio:89/56" class=" p-2 object-contain w-full h-full rounded-md border-2 shadow-md"></div><div class="flex items-center justify-center w-full"><img${addAttribute(zaba.src, "src")} alt="zaba logo" style="aspect-ratio:89/56" class="p-2 object-contain w-full h-full rounded-md border-2 shadow-md"></div><div class="flex items-center justify-center w-full"><img${addAttribute(addiko.src, "src")} alt="addiko logo" style="aspect-ratio:89/56" class="p-2 object-contain w-full h-full rounded-md border-2 shadow-md"></div></div></div></div></div></div>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/frontpage/Partners.astro", void 0);

const $$Astro$5 = createAstro("https://example.com");
const $$AboutHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$AboutHeader;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<div class="w-full h-[500px] bg" data-astro-cid-6kukzym3><div class="w-full h-full " data-astro-cid-6kukzym3><div class="flex flex-col items-center justify-center z-20 pt-52" data-astro-cid-6kukzym3><h1 class="top-0 font-bold text-5xl text-white z-20 " data-astro-cid-6kukzym3>${t("about.us")}</h1><ul class=" font-bold text-base text-white  flex justify-center items-center gap-5" data-astro-cid-6kukzym3><li class="font-bold text-xl text-white z-20" data-astro-cid-6kukzym3><a href="/" data-astro-cid-6kukzym3>${t("nav.home")}</a></li><li class="font-bold text-xl text-white z-20 relative" data-astro-cid-6kukzym3>•</li><li class="font-bold text-xl text-white z-20 whitespace-nowrap" data-astro-cid-6kukzym3>${t("about.us")}</li></ul></div></div><div class="absolute bg-black/20 h-full w-full z-10" style="transform: translate(-50%, -50%); left: 50%; top: 50%;" data-astro-cid-6kukzym3></div></div>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/about/AboutHeader.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://example.com");
const $$AboutLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AboutLayout;
  const lang = getLangFromUrl(Astro2.url);
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", "><head>", '<script src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js" defer><\/script><meta charset="UTF-8"><meta name="description" content="Astro description"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", "</title>", '</head><body class=""><main', "></main>", '<div class="-z-20">', "</div>", "", "</body></html>"])), addAttribute(lang, "lang"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), addAttribute(Astro2.generator, "content"), title, renderHead(), addAttribute(renderTransition($$result, "uwnn6vyk", "initial", ""), "data-astro-transition-scope"), renderComponent($$result, "Navbar", $$Navbar, {}), renderComponent($$result, "AboutHeader", $$AboutHeader, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/layouts/AboutLayout.astro", "self");

const $$Astro$3 = createAstro("https://example.com");
const $$AboutCards = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AboutCards;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="max-w-7xl mx-auto px-6 py-48 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"><div class="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg space-y-4 shadow-xl"><svg xmlns="http://www.w3.org/2000/svg" class="w-1/2" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 256 256" xml:space="preserve"><defs></defs><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"><path d="M 29.979 38.356 h -9.915 h -10.02 v -4.241 L 0 44.16 l 10.044 10.044 v -4.241 h 10.02 v 27.124 c 0 0.799 0.647 1.446 1.446 1.446 h 8.714 c 0.799 0 1.446 -0.647 1.446 -1.446 V 49.963 v -9.915 C 31.671 39.113 30.913 38.356 29.979 38.356 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,209,91); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 90 44.16 L 79.956 34.115 v 4.241 h -10.02 h -9.915 c -0.934 0 -1.691 0.757 -1.691 1.691 v 9.915 v 27.124 c 0 0.799 0.647 1.446 1.446 1.446 h 8.714 c 0.799 0 1.446 -0.647 1.446 -1.446 V 49.963 h 10.02 v 4.241 L 90 44.16 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(242,112,112); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 55.044 21.511 L 45 11.467 L 34.956 21.511 h 4.241 v 55.576 c 0 0.799 0.647 1.446 1.446 1.446 h 8.714 c 0.799 0 1.446 -0.647 1.446 -1.446 V 21.511 H 55.044 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(9,214,180); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path></g></svg><h3 class="text-2xl font-bold text-center h-12">${t("about.flexHeadline")}</h3><p class="text-center text-xl ">${t("about.flex")}</p></div><div class="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg space-y-4 shadow-xl"><svg xmlns="http://www.w3.org/2000/svg" class="w-1/2" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 256 256" xml:space="preserve"><defs></defs><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"><path d="M 45 67.16 L 45 67.16 c -4.333 0 -7.879 -3.545 -7.879 -7.879 v -2.825 c 0 -4.333 3.545 -7.879 7.879 -7.879 h 0 c 4.333 0 7.879 3.545 7.879 7.879 v 2.825 C 52.879 63.615 49.333 67.16 45 67.16 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(110,177,225); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 49.436 68.243 c -1.333 0.69 -2.839 1.087 -4.436 1.087 s -3.103 -0.397 -4.436 -1.087 C 34.607 69.132 30 74.301 30 80.494 v 8.15 C 30 89.39 30.61 90 31.356 90 h 27.288 C 59.39 90 60 89.39 60 88.644 v -8.15 C 60 74.301 55.393 69.132 49.436 68.243 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(110,177,225); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 75 18.582 L 75 18.582 c -4.333 0 -7.879 -3.545 -7.879 -7.879 V 7.879 C 67.121 3.545 70.667 0 75 0 h 0 c 4.333 0 7.879 3.545 7.879 7.879 v 2.825 C 82.879 15.037 79.333 18.582 75 18.582 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(113,212,86); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 79.436 19.665 c -1.333 0.69 -2.839 1.087 -4.436 1.087 s -3.103 -0.397 -4.436 -1.087 C 64.607 20.554 60 25.723 60 31.917 v 8.15 c 0 0.746 0.61 1.356 1.356 1.356 h 27.288 c 0.746 0 1.356 -0.61 1.356 -1.356 v -8.15 C 90 25.723 85.393 20.554 79.436 19.665 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(113,212,86); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 15 18.582 L 15 18.582 c -4.333 0 -7.879 -3.545 -7.879 -7.879 V 7.879 C 7.121 3.545 10.667 0 15 0 h 0 c 4.333 0 7.879 3.545 7.879 7.879 v 2.825 C 22.879 15.037 19.333 18.582 15 18.582 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(240,88,47); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 19.436 19.665 c -1.333 0.69 -2.839 1.087 -4.436 1.087 s -3.103 -0.397 -4.436 -1.087 C 4.607 20.554 0 25.723 0 31.917 v 8.15 c 0 0.746 0.61 1.356 1.356 1.356 h 27.288 c 0.746 0 1.356 -0.61 1.356 -1.356 v -8.15 C 30 25.723 25.393 20.554 19.436 19.665 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(240,88,47); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 32.964 31.001 c 3.715 -1.167 7.777 -1.815 12.036 -1.815 s 8.321 0.648 12.036 1.815 c 0.124 -2.05 0.656 -4.01 1.529 -5.787 C 54.352 23.909 49.78 23.187 45 23.187 c -4.78 0 -9.351 0.723 -13.565 2.027 C 32.309 26.991 32.84 28.951 32.964 31.001 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(100,107,121); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 28.389 74.183 c -9.094 -4.279 -15.171 -11.957 -15.171 -20.701 c 0 -3.202 0.822 -6.258 2.301 -9.059 H 8.945 c -1.121 2.862 -1.727 5.905 -1.727 9.059 c 0 11.487 8.015 21.501 19.796 26.636 C 27.067 78.021 27.552 76.013 28.389 74.183 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(100,107,121); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 81.054 44.422 h -6.574 c 1.479 2.802 2.301 5.857 2.301 9.059 c 0 8.744 -6.077 16.422 -15.17 20.701 c 0.837 1.83 1.322 3.838 1.375 5.934 c 11.781 -5.135 19.796 -15.149 19.796 -26.636 C 82.781 50.327 82.175 47.284 81.054 44.422 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(100,107,121); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path></g></svg><h3 class="text-2xl font-bold text-center h-12">${t("about.TeamworkHeadline")}</h3><p class="text-center text-xl ">${t("about.Teamwork")}</p></div><!-- Card 3 --><div class="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg space-y-4 shadow-xl"><svg xmlns="http://www.w3.org/2000/svg" class="w-1/2" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 256 256" xml:space="preserve"><defs></defs><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"><path d="M 87.994 0 H 69.342 c -1.787 0 -2.682 2.16 -1.418 3.424 l 5.795 5.795 l -33.82 33.82 L 28.056 31.196 l -3.174 -3.174 c -1.074 -1.074 -2.815 -1.074 -3.889 0 L 0.805 48.209 c -1.074 1.074 -1.074 2.815 0 3.889 l 3.174 3.174 c 1.074 1.074 2.815 1.074 3.889 0 l 15.069 -15.069 l 14.994 14.994 c 1.074 1.074 2.815 1.074 3.889 0 l 1.614 -1.614 c 0.083 -0.066 0.17 -0.125 0.247 -0.202 l 37.1 -37.1 l 5.795 5.795 C 87.84 23.34 90 22.445 90 20.658 V 2.006 C 90 0.898 89.102 0 87.994 0 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(175,185,210); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 65.626 37.8 v 49.45 c 0 1.519 1.231 2.75 2.75 2.75 h 8.782 c 1.519 0 2.75 -1.231 2.75 -2.75 V 23.518 L 65.626 37.8 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(120,210,190); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 47.115 56.312 V 87.25 c 0 1.519 1.231 2.75 2.75 2.75 h 8.782 c 1.519 0 2.75 -1.231 2.75 -2.75 V 42.03 L 47.115 56.312 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(165,215,110); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 39.876 60.503 c -1.937 0 -3.757 -0.754 -5.127 -2.124 l -6.146 -6.145 V 87.25 c 0 1.519 1.231 2.75 2.75 2.75 h 8.782 c 1.519 0 2.75 -1.231 2.75 -2.75 V 59.844 C 41.952 60.271 40.933 60.503 39.876 60.503 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,195,110); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 22.937 46.567 L 11.051 58.453 c -0.298 0.298 -0.621 0.562 -0.959 0.8 V 87.25 c 0 1.519 1.231 2.75 2.75 2.75 h 8.782 c 1.519 0 2.75 -1.231 2.75 -2.75 V 48.004 L 22.937 46.567 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(210,85,90); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path></g></svg><h3 class="text-2xl font-bold text-center h-12">${t("about.GrowthHeadline")}</h3><p class="text-center text-xl ">${t("about.Growth")}</p></div></section>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/about/AboutCards.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$WorkProces = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$WorkProces;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<div class="px-4 py-12 sm:px-6 lg:py-16 xl:py-24  bg-gray-100"><div class="text-center"><p class="text-green-600 font-bold text-xl lg:text-2xl mb-2">${t("work.proces.headline")}</p><h2 class="font-bold text-4xl lg:text-5xl text-gray-800">${t("work.proces.subHeadline")}</h2></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-10"><!-- Discover --><div class="group bg-white p-6 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300 ease-in-out"><svg xmlns="http://www.w3.org/2000/svg" class="w-1/4 group-hover:scale-125 transition-transform duration-300" viewBox="0 0 48 48"><circle cx="24" cy="22" r="20" fill="#FFF59D"></circle><path fill="#FBC02D" d="M37 22c0-7.7-6.6-13.8-14.5-12.9c-6 .7-10.8 5.5-11.4 11.5c-.5 4.6 1.4 8.7 4.6 11.3c1.4 1.2 2.3 2.9 2.3 4.8v.3h12v-.1c0-1.8.8-3.6 2.2-4.8c2.9-2.4 4.8-6 4.8-10.1z"></path><path fill="#FFF59D" d="m30.6 20.2l-3-2c-.3-.2-.8-.2-1.1 0L24 19.8l-2.4-1.6c-.3-.2-.8-.2-1.1 0l-3 2c-.2.2-.4.4-.4.7s0 .6.2.8l3.8 4.7V37h2V26c0-.2-.1-.4-.2-.6l-3.3-4.1l1.5-1l2.4 1.6c.3.2.8.2 1.1 0l2.4-1.6l1.5 1l-3.3 4.1c-.1.2-.2.4-.2.6v11h2V26.4l3.8-4.7c.2-.2.3-.5.2-.8s-.2-.6-.4-.7z"></path><circle cx="24" cy="44" r="3" fill="#5C6BC0"></circle><path fill="#9FA8DA" d="M26 45h-4c-2.2 0-4-1.8-4-4v-5h12v5c0 2.2-1.8 4-4 4z"></path><path fill="#5C6BC0" d="m30 41l-11.6 1.6c.3.7.9 1.4 1.6 1.8l9.4-1.3c.4-.6.6-1.3.6-2.1zm-12-2.3v2L30 39v-2z"></path></svg><h3 class="text-2xl font-bold text-gray-800 mb-3">${t("work.proces.discoverHeadline")}</h3><p class="text-gray-600 text-xl ">${t("work.proces.discoverText")}</p></div><!-- Design & Development --><div class="group bg-white p-6 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300 ease-in-out"><svg xmlns="http://www.w3.org/2000/svg" class="w-1/4 group-hover:scale-125 transition-transform duration-300" viewBox="0 0 48 48"><path fill="#BBDEFB" d="M4 7h40v34H4z"></path><path fill="#3F51B5" d="M9 12h30v5H9z"></path><path fill="#2196F3" d="M9 21h13v16H9zm17 0h13v16H26z"></path></svg><h3 class="text-2xl font-bold text-gray-800 mb-3 ">${t("work.proces.DesignHeadline")}</h3><p class="text-gray-600 text-xl">${t("work.proces.DesignText")}</p></div><!-- Install & Testing --><div class="group bg-white p-6 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300 ease-in-out"><svg xmlns="http://www.w3.org/2000/svg" class="w-1/4 group-hover:scale-125 transition-transform duration-300" viewBox="0 0 48 48"><path fill="#E65100" d="M25.6 34.4c.1-.4.1-.9.1-1.4s0-.9-.1-1.4l2.8-2c.3-.2.4-.6.2-.9l-2.7-4.6c-.2-.3-.5-.4-.8-.3L22 25.3c-.7-.6-1.5-1-2.4-1.4l-.3-3.4c0-.3-.3-.6-.6-.6h-5.3c-.3 0-.6.3-.6.6l-.4 3.5c-.9.3-1.6.8-2.4 1.4L6.9 24c-.3-.1-.7 0-.8.3l-2.7 4.6c-.2.3-.1.7.2.9l2.8 2c-.1.4-.1.9-.1 1.4s0 .9.1 1.4l-2.8 2c-.3.2-.4.6-.2.9l2.7 4.6c.2.3.5.4.8.3L10 41c.7.6 1.5 1 2.4 1.4l.3 3.4c0 .3.3.6.6.6h5.3c.3 0 .6-.3.6-.6l.3-3.4c.9-.3 1.6-.8 2.4-1.4l3.1 1.4c.3.1.7 0 .8-.3l2.7-4.6c.2-.3.1-.7-.2-.9l-2.7-2.2zM16 38c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5z"></path><path fill="#FFA000" d="M41.9 15.3c.1-.5.1-.9.1-1.3s0-.8-.1-1.3l2.5-1.8c.3-.2.3-.5.2-.8l-2.5-4.3c-.2-.3-.5-.4-.8-.2l-2.9 1.3c-.7-.5-1.4-.9-2.2-1.3l-.3-3.1c.1-.3-.1-.5-.4-.5h-4.9c-.3 0-.6.2-.6.5l-.3 3.1c-.8.3-1.5.7-2.2 1.3l-2.9-1.3c-.3-.1-.6 0-.8.2l-2.5 4.3c-.2.3-.1.6.2.8l2.5 1.8V14c0 .4 0 .8.1 1.3l-2.5 1.8c-.3.2-.3.5-.2.8l2.5 4.3c.2.3.5.4.8.2l2.9-1.3c.7.5 1.4.9 2.2 1.3l.3 3.1c0 .3.3.5.6.5h4.9c.3 0 .6-.2.6-.5l.3-3.1c.8-.3 1.5-.7 2.2-1.3l2.9 1.3c.3.1.6 0 .8-.2l2.5-4.3c.2-.3.1-.6-.2-.8l-2.8-1.8zM33 19c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5z"></path></svg><h3 class="text-2xl font-bold text-gray-800 mb-3">${t("work.proces.InstallHeadline")}</h3><p class="text-gray-600 text-xl">${t("work.proces.InstallText")}</p></div><!-- Project Delivery --><div class="group bg-white p-6 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300 ease-in-out"><svg xmlns="http://www.w3.org/2000/svg" class="w-1/4 group-hover:scale-125 transition-transform duration-300" viewBox="0 0 48 48"><path fill="#8BC34A" d="M43 36H29V14h10.6c.9 0 1.6.6 1.9 1.4L45 26v8c0 1.1-.9 2-2 2z"></path><path fill="#388E3C" d="M29 36H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h22c1.1 0 2 .9 2 2v27z"></path><g fill="#37474F"><circle cx="37" cy="36" r="5"></circle><circle cx="13" cy="36" r="5"></circle></g><g fill="#78909C"><circle cx="37" cy="36" r="2"></circle><circle cx="13" cy="36" r="2"></circle></g><path fill="#37474F" d="M41 25h-7c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h5.3c.4 0 .8.3.9.7l1.7 5.2c0 .1.1.2.1.3V24c0 .6-.4 1-1 1z"></path><path fill="#DCEDC8" d="m21.8 13.8l-7.9 7.9l-3.7-3.8L8 20.1l5.9 5.9L24 15.9z"></path></svg><h3 class="text-2xl font-bold text-gray-800 mb-3">${t("work.proces.ProjectHeadline")}</h3><p class="text-gray-600 text-xl">${t("work.proces.ProjectText")}</p></div></div></div>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/about/WorkProces.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$About$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About$1;
  return renderTemplate`${renderComponent($$result, "AboutLayout", $$AboutLayout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "AboutCards", $$AboutCards, {})}${renderComponent($$result2, "FrontAbout", $$FrontAbout, {})}${renderComponent($$result2, "NumbersBanner", $$NumbersBanner, {})}${renderComponent($$result2, "WorkProces", $$WorkProces, {})}${renderComponent($$result2, "WorkWithUs", $$WorkWithUs, {})}${renderComponent($$result2, "Partners", $$Partners, {})}` })}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/about.astro", void 0);

const $$file$1 = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/about.astro";
const $$url$1 = "/en/about";

const about$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://example.com");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "AboutLayout", $$AboutLayout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "AboutCards", $$AboutCards, {})}${renderComponent($$result2, "FrontAbout", $$FrontAbout, {})}${renderComponent($$result2, "NumbersBanner", $$NumbersBanner, {})}${renderComponent($$result2, "WorkProces", $$WorkProces, {})}${renderComponent($$result2, "WorkWithUs", $$WorkWithUs, {})}${renderComponent($$result2, "Partners", $$Partners, {})}` })}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/about.astro", void 0);

const $$file = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/about.astro";
const $$url = "/hr/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Footer as $, $$Navbar as a, $$ViewTransitions as b, $$Contact as c, $$FrontAbout as d, $$NumbersBanner as e, $$WorkWithUs as f, getLangFromUrl as g, $$Partners as h, about$1 as i, about as j, useTranslations as u };
