import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ImageModal from "./ImageModal";
import Carousel from "./Carousel";
import styles from "./ProjectDetail.module.css";

const projectData = {
  jse: {
    title: "Jean-Sebastien et Eric",
    images: [
      "/src/assets/JSE1.png",
      "/src/assets/JSE2.png",
      "/src/assets/JSE3.png",
      "/src/assets/JSE4.png",
      "/src/assets/JSE5.png",
    ],
    description: "A Unity 2D / C# game...",
    link: "https://itch.io/sample-link",
  },
  vengenceEtVertue: {
    title: "Vengeance et Vertue",
    videoUrl: "https://www.youtube.com/embed/H522SCnQ36I",
    images: [
      "/src/assets/VV1.png",
      "/src/assets/VV2.png",
      "/src/assets/VV3.png",
    ],
    description: "A Unity 2D / C# game...",
    link: "https://itch.io/sample-link",
  },
  spaceCruiser: {
    title: "Space Cruiser",
    images: [
      "/src/assets/SP1.png",
      "/src/assets/SP2.png",
      "/src/assets/SP3.png",
      "/src/assets/SP4.png",
      "/src/assets/SP5.png",
    ],
    description: "A Unity 3D / C# game...",
    link: "https://itch.io/sample-link",
  },
  AP: {
    title: "Le voyage infini",
    videoUrl: "https://www.youtube.com/embed/lcaw1oSCEnY",
    images: [
      "/src/assets/VI1.png",
      "/src/assets/VI2.png",
      "/src/assets/VI3.png",
    ],
    description: "A After Effects video",
  },
  IWEB: {
    title: "Quizz animé",
    images: [
      "/src/assets/web1.png",
      "/src/assets/web2.png",
      "/src/assets/web3.png",
      "/src/assets/web4.png",
      "/src/assets/web5.png",
    ],
    description: "HTML / CSS / Javascript",
    link: "https://itch.io/sample-link",
  },
  TTM: {
    title: "TeeTIM",
    images: [
      "/src/assets/React1.png",
      "/src/assets/React2.png",
      "/src/assets/React3.png",
      "/src/assets/React4.png",
      "/src/assets/React5.png",
    ],
    description: "HTML / CSS / Javascript",
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
