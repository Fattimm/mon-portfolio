// src/hooks/useGitHub.js
import { useState, useEffect } from "react";

const GITHUB_USERNAME = "Fattimm";

export function useGitHubProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => {
        if (!res.ok) throw new Error("Impossible de charger le profil GitHub");
        return res.json();
      })
      .then((data) => {
        setProfile({
          // --- Depuis GitHub API ---
          name: data.name || "Fatoumata DIA",
          avatar: "/fatoumata_dia.jpg",
          location: data.location || "Dakar, Sénégal",
          githubUrl: data.html_url,
          publicRepos: data.public_repos,
          followers: data.followers,
          following: data.following,

          // --- Données fixes ---
          title: "Développeuse Fullstack & Mobile",
          bio: "Passionnée par la création d'applications modernes — du backend aux interfaces mobiles.",
          aboutMe: [
            "Étant passionnée par les technologies émergentes, je m'engage dans la conception et le développement d'applications à la fois modernes et efficaces, en passant par l'architecture backend jusqu'aux interfaces utilisateurs intuitives.",
            "Animée par la curiosité, j'apprécie de relever de nouveaux défis et d'enrichir mes compétences à travers des projets tangibles. J'accorde également une grande importance à l'analyse des besoins et à la compréhension des attentes des utilisateurs, afin de proposer des solutions innovantes, ergonomiques et adaptées.",
            "Mon ambition est de concevoir des solutions performantes et évolutives, tout en intégrant les meilleures pratiques du développement.",
          ],
          socialLinks: {
            github: `https://github.com/${GITHUB_USERNAME}`,
            linkedin: "https://www.linkedin.com/in/fatoumata-dia/",
            email: "mailto:diamata998@gmail.com",
          },
          copyright: "© 2025 Fatoumata DIA. Tous droits réservés.",
          cvLink: "/Fatoumata_Dia_CV_DEV.pdf",
        });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setProfile({
          name: "Fatoumata DIA",
          avatar: "/fatoumata_dia.jpg",
          bio: "Passionnée par la création d'applications modernes — du backend aux interfaces mobiles.",
          location: "Dakar, Sénégal",
          title: "Développeuse Fullstack & Mobile",
          aboutMe: [
            "Développeuse Full-Stack Web & Mobile, passionnée par la création de solutions modernes et performantes.",
          ],
          socialLinks: {
            github: `https://github.com/${GITHUB_USERNAME}`,
            linkedin: "https://www.linkedin.com/in/fatoumata-dia/",
            email: "mailto:diamata998@gmail.com",
          },
          copyright: "© 2025 Fatoumata DIA. Tous droits réservés.",
          cvLink: "/Fatoumata_Dia_CV_DEV.pdf",
          publicRepos: 0,
          followers: 0,
          following: 0,
        });
        setLoading(false);
      });
  }, []);

  return { profile, loading, error };
}

export function useGitHubProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github.mercy-preview+json",
        },
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error("Impossible de charger les repos GitHub");
        return res.json();
      })
      .then((repos) => {
        const filtered = repos
          .filter((r) => !r.fork)
          .filter((r) => r.topics?.includes("portfolio"))
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setProjects(filtered);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { projects, loading, error };
}