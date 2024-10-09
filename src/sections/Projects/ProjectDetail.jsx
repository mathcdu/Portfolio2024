import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ImageModal from "./ImageModal";
import Carousel from "./Carousel";
import styles from "./ProjectDetail.module.css";

// Import images directly
import JSE1 from "../../assets/JSE_Main.png";
import JSE2 from "../../assets/JSE2.png";
import JSE3 from "../../assets/JSE3.png";
import JSE4 from "../../assets/JSE4.png";
import JSE5 from "../../assets/JSE5.png";
import VV1 from "../../assets/VV1.png";
import VV2 from "../../assets/VV2.png";
import VV3 from "../../assets/VV3.png";
import SP1 from "../../assets/SP1.png";
import SP2 from "../../assets/SP2.png";
import SP3 from "../../assets/SP3.png";
import SP4 from "../../assets/SP4.png";
import SP5 from "../../assets/SP5.png";
import VI1 from "../../assets/VI1.png";
import VI2 from "../../assets/VI2.png";
import VI3 from "../../assets/VI3.png";
import WEB1 from "../../assets/web1.png";
import WEB2 from "../../assets/web2.png";
import WEB3 from "../../assets/web3.png";
import WEB4 from "../../assets/web4.png";
import WEB5 from "../../assets/web5.png";
import REACT1 from "../../assets/React1.png";
import REACT2 from "../../assets/React2.png";
import REACT3 from "../../assets/React3.png";
import REACT4 from "../../assets/React4.png";
import REACT5 from "../../assets/React5.png";

const projectData = {
  jse: {
    title: "Jean-Sebastien et Eric",
    images: [JSE1, JSE2, JSE3, JSE4, JSE5],
    description:
      "Cette application web interactive, développée avec HTML, SASS et React, permet aux utilisateurs de parcourir une collection de bandes dessinées. Chaque bande dessinée peut être aimée, commentée et les utilisateurs peuvent également aimer les commentaires. Les commentaires sont automatiquement classés en fonction du nombre de mentions ‘J’aime’, offrant ainsi une meilleure visibilité aux plus populaires. Pour ajouter des commentaires, une connexion via un compte Google est requise. L’application est entièrement hébergée sur Firebase, assurant une gestion sécurisée des utilisateurs et des données",
    link: "https://itch.io/sample-link",
  },
  vengenceEtVertue: {
    title: "Vengeance et Vertue",
    videoUrl: "https://www.youtube.com/embed/H522SCnQ36I",
    images: [VV1, VV2, VV3],
    description:
      "Jeu 2D de type platformer, développé avec Unity dans le cadre d’un cours de jeu en équipe. Le jeu propose une combinaison de combats, de puzzles avec des plateformes destructibles, et des affrontements contre des boss. J’ai assuré la programmation complète du jeu ainsi qu’une partie de l’intégration, garantissant un gameplay fluide et cohérent.",
    link: "https://itch.io/sample-link",
  },
  spaceCruiser: {
    title: "Space Cruiser",
    images: [SP1, SP2, SP3, SP4, SP5],
    description:
      "Jeu 3D de type ‘racer’ développé avec Unity, où un vaisseau spatial doit franchir une série de checkpoints dans l’espace. À chaque checkpoint, le vaisseau accélère, augmentant la difficulté. Le joueur doit éviter des obstacles tels que des tunnels, des astéroïdes, et des ennemis, tout en tentant de franchir tous les checkpoints sans mourir.",
    link: "https://itch.io/sample-link",
  },
  AP: {
    title: "Le voyage infini",
    videoUrl: "https://www.youtube.com/embed/lcaw1oSCEnY",
    images: [VI1, VI2, VI3],
    description:
      "Vidéo animée réalisée avec After Effects, utilisant diverses techniques d’animation pour suivre le parcours d’un avion en papier à travers plusieurs environnements, symbolisant un voyage sans fin",
  },
  IWEB: {
    title: "Quizz animé",
    images: [WEB1, WEB2, WEB3, WEB4, WEB5],
    description:
      "Quizz animé développé avec HTML, CSS et JavaScript, présentant une série de questions sur le monde du web, principalement axées sur HTML, CSS et JavaScript. Le projet intègre plusieurs animations CSS dynamiques et un système de score en continu pour suivre les performances des utilisateurs.",
    link: "https://itch.io/sample-link",
  },
  TTM: {
    title: "TeeTIM",
    images: [REACT1, REACT2, REACT3, REACT4, REACT5],
    description:
      "Application web développée avec HTML, CSS, JavaScript et PHP, dédiée à la vente de chandails. Le site inclut un système de panier d’achat permettant aux utilisateurs d’ajouter et de supprimer des articles, ainsi que de filtrer les chandails par catégories. Ce projet a été l’occasion d’expérimenter avec PHP pour mettre en œuvre ces fonctionnalités essentielles.",
    link: "https://itch.io/sample-link",
  },
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  if (!project) {
    return <p>Project not found</p>;
  }

  const isVideoProject = !!project.videoUrl;

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div className={styles.projectDetailWrapper}>
      <div className={styles.projectDetailContainer}>
        <h1>{project.title}</h1>

        <div className={styles.media}>
          {isVideoProject ? (
            <>
              <iframe
                className={styles.video}
                width="560"
                height="315"
                src={project.videoUrl}
                title="Project Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>

              <div className={styles.images}>
                {project.images.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`Project ${project.title} screenshot ${index + 1}`}
                    onClick={() => openModal(imgSrc)}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>
            </>
          ) : (
            <Carousel images={project.images} />
          )}
          <p>{project.description}</p>
        </div>

        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Project on itch.io
        </a>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={selectedImage}
      />
    </div>
  );
}

export default ProjectDetail;
