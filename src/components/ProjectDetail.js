// import React from 'react';
// import { useParams } from 'react-router-dom';
// import '../styles/ProjectDetail.css';

// import { projectList1, projectList2 } from './Projects'; 

// function ProjectDetail() {
//   const { projectId } = useParams();
//   const allProjects = [...projectList1, ...projectList2];
//   const project = allProjects.find(p => p.id === parseInt(projectId));

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   return (
//     <div className="project-detail">
//       <img src={project.image} alt={project.name} className="project-detail-image" />
//       <h2 className="project-detail-name">{project.name}</h2>
//       <div dangerouslySetInnerHTML={{ __html:project.info}}/>
//     </div>
//   );
// }

// export default ProjectDetail;

import React from "react";
import { useParams } from 'react-router-dom';
import SamplePage from './SamplePage';  // Import the SamplePage component
import '../styles/ProjectDetail.css';

function ProjectDetail() {
  const { projectId } = useParams();
  const modelPath = `https://giannismparous.github.io/vr_${projectId}/`; // Construct the model path based on the project ID

  return (
    <SamplePage
      redirectToSample={false}
      modelPath={modelPath}
    />
  );
}

export default ProjectDetail;
