// Données MBTI : description, métiers, ressources
const mbtiProfiles = {
  ISTJ: {
    description: "Le Logisticien est fiable, responsable et méthodique. Il aime les règles claires et l’organisation rigoureuse. Très pragmatique, il privilégie le concret et la tradition.",
    jobs: ["Comptable", "Inspecteur de conformité", "Administrateur public", "Analyste financier", "Gestionnaire de projet"],
    resources: [
      { name: "En savoir plus sur mon type", url: "https://www.16personalities.com/fr/la-personnalite-istj" },
      { name: "Vidéo ISTJ - YouTube", url: "https://www.youtube.com/watch?v=i516oAHcez8&pp=ygUWdmlkZW8gZGVzY3JpcHRpb24gaXN0atIHCQnHCQGHKiGM7w%3D%3D" }
    ]
  },
  ISFJ: {
    description: "L’ISFJ est protecteur, attentionné et loyal. Il met un point d’honneur à aider les autres et veille à la stabilité autour de lui. Discret, il aime travailler dans un cadre organisé.",
    jobs: ["Infirmier / Infirmière", "Enseignant", "Bibliothécaire", "Travailleur social", "Assistant administratif"],
    resources: [
      { name: "En savoir plus sur mon type", url: "https://www.16personalities.com/fr/la-personnalite-isfj" },
      { name: "Vidéo ISFJ - YouTube", url: "https://www.youtube.com/watch?v=n5nipsDCeqk&pp=ygUWdmlkZW8gZGVzY3JpcHRpb24gaXNmag%3D%3D" }
    ]
  },
  INFJ: {
    description: "L’INFJ est idéaliste et déterminé. Il cherche à comprendre les autres en profondeur et à défendre ses valeurs. Il allie intuition et empathie pour inspirer autour de lui.",
    jobs: ["Psychologue", "Écrivain", "Conseiller en orientation", "Coach personnel", "Professeur"],
    resources: [
      { name: "En savoir plus sur mon type", url: "https://www.16personalities.com/fr/la-personnalite-infj" },
      { name: "Vidéo INFJ - YouTube", url: "https://www.youtube.com/watch?v=Oum_esB3IIg" }
    ]
  },
  INTJ: {
    description: "Le stratège réfléchi, logique et indépendant. Il aime résoudre les problèmes complexes et planifier sur le long terme. Très confiant en ses capacités, il est souvent visionnaire.",
    jobs: ["Ingénieur", "Scientifique", "Analyste financier", "Consultant en management", "Architecte logiciel"],
    resources: [
      { name: "En savoir plus sur mon type", url: "https://www.16personalities.com/fr/la-personnalite-intj" },
      { name: "Vidéo INTJ - YouTube", url: "https://www.youtube.com/watch?v=0DdkExcHU6M&pp=ygUScGVyc29ubmFsaXTDqSBpbnRq" }
    ]
  },
  ISTP: {
    description: "Le Virtuose est pragmatique, ingénieux et indépendant. Il aime comprendre comment fonctionnent les choses et aime les défis techniques.",
    jobs: ["Mécanicien", "Ingénieur en informatique", "Technicien de laboratoire", "Chirurgien", "Policier"],
    resources: [
      { name: "En savoir plus sur mon type", url: "https://www.16personalities.com/fr/la-personnalite-istp" },
      { name: "Vidéo ISTP - YouTube", url: "https://www.youtube.com/watch?v=kzf7sZ3H0hE&pp=ygUScGVyc29ubmFsaXTDqSBpc3Rw" }
    ]
  },
  ISFP: {
    description: "L’Aventurier est créatif, sensible et adaptable. Il aime vivre le moment présent et exprimer ses émotions à travers l’art ou d’autres moyens.",
    jobs: ["Artiste", "Designer", "Musicien", "Cuisinier", "Soignant"],
    resources: [
      { name: "En savoir plus sur mon type", url: "https://www.16personalities.com/fr/la-personnalite-isfp" },
      { name: "Vidéo ISFP - YouTube", url: "https://www.youtube.com/watch?v=QS850AQjj4U&pp=ygUScGVyc29ubmFsaXTDqSBpc2Zw" }
    ]
  },
  INFP: {
    description: "Le Médiateur est idéaliste, empathique et introspectif. Il cherche à comprendre les motivations profondes et aime aider les autres à trouver un sens.",
    jobs: ["Écrivain", "Psychologue", "Conseiller", "Artiste", "Enseignant"],
    resources: [
      { name: "En savoir plus sur mon type", url: "https://www.16personalities.com/fr/la-personnalite-infp" },
      { name: "Vidéo INFP - YouTube", url: "https://www.youtube.com/watch?v=EUYCfmy2rZ8&pp=ygUScGVyc29ubmFsaXTDqSBpbmZw" }
    ]
  },
  INTP: {
    description: "Le Logicien est curieux, analytique et théorique. Il aime les idées complexes et cherche à comprendre les principes sous-jacents.",
    jobs: ["Chercheur", "Philosophe", "Programmeur", "Scientifique", "Professeur"],
    resources: [
      { name: "En savoir plus sur mon type", url: "https://www.16personalities.com/fr/la-personnalite-intp" },
      { name: "Vidéo INTP - YouTube", url: "https://www.youtube.com/watch?v=30XUUZS1gyc&pp=ygUScGVyc29ubmFsaXTDqSBpbnRw" }
    ]
  },
  ESTP: {
    description: "L’Entrepreneur est énergique, audacieux et pragmatique. Il aime vivre intensément, prendre des risques et résoudre des problèmes concrets.",
    jobs: ["Commercial", "Entrepreneur", "Agent immobilier", "Policier", "Animateur"],
    resources: [
      { name: "En savoir plus sur mon type", url: "https://www.16personalities.com/fr/la-personnalite-estp" },
      { name: "Vidéo ESTP - YouTube", url: "https://www.youtube.com/watch?v=AK-ve0b8lFM&pp=ygUScGVyc29ubmFsaXTDqSBlc3Rw" }
    ]
  },
  ESFP: {
    description: "L’Amuseur est sociable, optimiste et spontané. Il aime divertir les autres et profiter de la vie avec passion.",
    jobs: ["Acteur", "Animateur", "Vendeur", "Coach sportif", "Musicien"],
    resources: [
      { name: "En savoir plus sur mon type", url: "https://www.16personalities.com/fr/la-personnalite-esfp" },
      { name: "Vidéo ESFP - YouTube", url: "https://www.youtube.com/watch?v=Q8RJsurSvzw&pp=ygUScGVyc29ubmFsaXTDqSBlc2Zw" }
    ]
  },
  ENFP: {
    description: "L’Inspirateur est enthousiaste, créatif et sociable, toujours prêt à encourager les autres.",
    jobs: ["Coach", "Marketeur", "Écrivain", "Publicitaire", "Conseiller"],
    resources: [
      { name: "En savoir plus sur mon type", url: "https://www.16personalities.com/fr/la-personnalite-enfp" },
      { name: "Vidéo ENFP - YouTube", url: "https://www.youtube.com/watch?v=xlTuegPFjg8&t=26s&pp=ygUScGVyc29ubmFsaXTDqSBlbmZw" }
    ]
  },
  ENTP: {
    description: "Le Visionnaire est innovant, débrouillard et curieux. Il aime débattre, explorer de nouvelles idées et remettre en question le statu quo.",
    jobs: ["Entrepreneur", "Avocat", "Consultant", "Ingénieur", "Journaliste"],
    resources: [
      { name: "En savoir plus sur mon type", url: "https://www.16personalities.com/fr/la-personnalite-entp" },
      { name: "Vidéo ENTP - YouTube", url: "https://www.youtube.com/watch?v=yRDT2tKROKs&pp=ygUScGVyc29ubmFsaXTDqSBlbnRw" }
    ]
  },
  ESTJ: {
    description: "Le Directeur est organisé, franc et déterminé. Il aime diriger, établir des règles claires et faire avancer les projets efficacement.",
    jobs: ["Manager", "Officier militaire", "Administrateur", "Banquier", "Juge"],
    resources: [
      { name: "En savoir plus sur mon type", url: "https://www.16personalities.com/fr/la-personnalite-estj" },
      { name: "Vidéo ESTJ - YouTube", url: "https://www.youtube.com/watch?v=rVBXAGZQe18&pp=ygUScGVyc29ubmFsaXTDqSBlc3Rq" }
    ]
  },
  ESFJ: {
    description: "Le Consul est chaleureux, sociable et dévoué. Il aime prendre soin des autres et maintenir l’harmonie sociale.",
    jobs: ["Infirmier", "Enseignant", "Travailleur social", "Vendeur", "Coordinateur"],
    resources: [
      { name: "En savoir plus sur mon type", url: "https://www.16personalities.com/fr/la-personnalite-esfj" },
      { name: "Vidéo ESFJ - YouTube", url: "https://www.youtube.com/watch?v=rVBXAGZQe18&pp=ygUScGVyc29ubmFsaXTDqSBlc3Rq" }
    ]
  },
  ENFJ: {
    description: "Le Leader est charismatique, empathique et inspirant. Il aime motiver les autres et construire des relations profondes.",
    jobs: ["Coach", "Enseignant", "Politicien", "Conseiller", "Chef de projet"],
    resources: [
      { name: "En savoir plus sur mon type", url: "https://www.16personalities.com/fr/la-personnalite-enfj" },
      { name: "Vidéo ENFJ - YouTube", url: "https://www.youtube.com/watch?v=s8LLtnfakco&pp=ygUScGVyc29ubmFsaXTDqSBlbmZq" }
    ]
  },
  ENTJ: {
    description: "Le Commandant est un leader naturel, stratégique et ambitieux. Il aime prendre des décisions, organiser et diriger vers des objectifs élevés.",
    jobs: ["Chef d’entreprise", "Avocat", "Consultant en management", "Politicien", "Directeur"],
    resources: [
      { name: "En savoir plus sur mon type", url: "https://www.16personalities.com/fr/la-personnalite-entj" },
      { name: "Vidéo ENTJ - YouTube", url: "https://www.youtube.com/watch?v=O1dbEX6CnDQ&pp=ygUScGVyc29ubmFsaXTDqSBlbnRq" }
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("unknownType");
  const mbtiSelect = document.getElementById("mbtiSelect");
  const selected = mbtiSelect.querySelector(".select-selected");
  const options = mbtiSelect.querySelector(".select-items");
  const btnMiniTestRapide = document.getElementById("btnMiniTestRapide");
  const btnMiniTestOfficiel = document.getElementById("btnMiniTestOfficiel");
  const resultDiv = document.getElementById("result");

  // Gère l'affichage selon si la checkbox est cochée ou non
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      mbtiSelect.style.display = "none";
      btnMiniTestRapide.style.display = "inline-block";
      btnMiniTestOfficiel.style.display = "inline-block";
      resultDiv.style.display = "none";
      resultDiv.innerHTML = "";
    } else {
      mbtiSelect.style.display = "block";
      btnMiniTestRapide.style.display = "none";
      btnMiniTestOfficiel.style.display = "none";
      resultDiv.style.display = "none";
      resultDiv.innerHTML = "";
    }
  });

  // Ouvre/ferme le menu déroulant
  selected.addEventListener("click", () => {
    options.style.display = options.style.display === "block" ? "none" : "block";
  });

  // Ferme le menu si clic en dehors
  document.addEventListener("click", e => {
    if (!mbtiSelect.contains(e.target)) {
      options.style.display = "none";
    }
  });

  // Gestion du clic sur une option
  options.querySelectorAll("div").forEach(option => {
    option.addEventListener("click", () => {
      const type = option.getAttribute("data-id");
      selected.textContent = option.textContent;
      options.style.display = "none";

      displaySuggestions(type);
    });
  });

  // Fonction d'affichage des suggestions
  function displaySuggestions(type) {
    const profile = mbtiProfiles[type];
    if (!profile) {
      resultDiv.style.display = "none";
      resultDiv.innerHTML = "";
      return;
    }

    let html = `<h2>${type} - Suggestions</h2>`;
    html += `<p>${profile.description}</p>`;

    if (profile.jobs && profile.jobs.length > 0) {
      html += `<h3>Métiers recommandés :</h3><ul>`;
      profile.jobs.forEach(job => {
        html += `<li>${job}</li>`;
      });
      html += `</ul>`;
    }

    if (profile.resources && profile.resources.length > 0) {
      html += `<h3>Ressources :</h3><ul class="resources">`;
      profile.resources.forEach(res => {
        html += `<li><a href="${res.url}" target="_blank" rel="noopener noreferrer">${res.name}</a></li>`;
      });
      html += `</ul>`;
    }

    resultDiv.style.display = "block";
    resultDiv.innerHTML = html;
  }
});
 document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});