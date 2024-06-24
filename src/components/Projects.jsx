import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useAnimation, motion } from "framer-motion";
import pro1 from "../assets/pro1.jpg";
import pro2 from "../assets/pro2.jpg";
import pro3 from "../assets/pro3.jpg";
import pro4 from "../assets/pro4.jpg";
import pro5 from "../assets/pro5.jpg";
import pro6 from "../assets/pro6.jpg";
import Slide from "./Slide";


const images = [pro1, pro2, pro3, pro4, pro5, pro6];

const projectDetails = [
  { id: 1, title: "Project 1", description: "Description for Project 1", showDetails: false },
  { id: 2, title: "Project 2", description: "Description for Project 2", showDetails: false },
  { id: 3, title: "Project 3", description: "Description for Project 3", showDetails: false },
  { id: 4, title: "Project 4", description: "Description for Project 4", showDetails: false },
  { id: 5, title: "Project 5", description: "Description for Project 5", showDetails: false },
  { id: 6, title: "Project 6", description: "Description for Project 6", showDetails: false },
];

const Projects = () => {
  const [displayedProjects, setDisplayedProjects] = useState(projectDetails);
  const controls = useAnimation();
  const containerRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, { threshold: 0.1 });

    if (containerRef.current) {
      observer.current.observe(containerRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [controls]);

  const handleClick = (index) => {
    const newDisplayedProjects = displayedProjects.map((project) => ({
      ...project,
      showDetails: project.id === index ? !project.showDetails : false,
    }));
    setDisplayedProjects(newDisplayedProjects);
  };

  const handleAddProject = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const newProject = {
      id: displayedProjects.length + 1,
      title: `Project ${displayedProjects.length + 1}`,
      description: "",
      showDetails: false,
    };

    const reader = new FileReader();
    reader.onload = (event) => {
      newProject.image = event.target.result;
      setDisplayedProjects([...displayedProjects, newProject]);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Container id="projects">
      <Heading>Our Projects</Heading>
      <Slide delay={0.3}>
      <Description>Discover our latest and greatest construction projects...</Description>
</Slide>
      <AddProjectButton>
        <label htmlFor="add-project">Add Project</label>
        <input
          id="add-project"
          type="file"
          accept="image/*"
          onChange={handleAddProject}
          style={{ display: "none" }}
        />
      </AddProjectButton>
     
      <ImageWrapper ref={containerRef}>
        {displayedProjects.reduce((rows, project, index) => {
          if (index % 3 === 0) rows.push([]);
          rows[rows.length - 1].push(project);
          return rows;
        }, []).map((row, index) => (
          <ImageRow key={index}>
            {row.map((project, idx) => (
              <ImageContainer key={idx} onClick={() => handleClick(project.id)}>
                <SquareCard
                  as={motion.div}
                  initial={{ opacity: 0, y: 100 }}
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  <Image src={images[project.id - 1]} alt={`Project ${project.id}`} />
                  {project.showDetails && (
                    <DetailsOverlay>
                      <ProjectDetails>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                      </ProjectDetails>
                    </DetailsOverlay>
                  )}
                  <DetailsButton onClick={(e) => { e.stopPropagation(); handleClick(project.id); }}>
                    <FontAwesomeIcon icon={faInfoCircle} size="2x" color="white" />
                  </DetailsButton>
                </SquareCard>
              </ImageContainer>
            ))}
            {row.length < 3 && (
              <ImageContainer key={`empty-${index}`} />
            )}
          </ImageRow>
        ))}
      </ImageWrapper>
      
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 20px;
  background-color: white;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  text-align: center;
  color: #666;
  font-size: 1rem;
  margin-bottom: 20px;
`;

const AddProjectButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  label {
    background-color: #007bff;
    color: white;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-left: 20px; /* Add space from the left end */
  margin-right: 20px; /* Add space from the right end */
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  margin-right: 10px; /* Add space between images */
`;

const SquareCard = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DetailsOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  border-radius: 10px;
`;

const ProjectDetails = styled.div`
  text-align: center;
  color: white;
  padding: 20px;
`;

const DetailsButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 2; /* Ensure the button is above the overlay */
`;

export default Projects;
