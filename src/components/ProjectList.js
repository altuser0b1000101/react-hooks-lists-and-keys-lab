import React from 'react';
import ProjectItem from './ProjectItem';

function ProjectList({ projects }) {
  return (
    <div id='projects'>
      <h2>My Projects</h2>
      <div id='project-list'>
        {projects.map((project) => {
          return (
            <ProjectItem
              key={project.id}
              name={project.name}
              about={project.about}
              technologies={project.technologies}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectList;

// <ProjectItem
// name={projects[0].name}
// about={projects[0].about}
// technologies={projects[0].technologies[(0, 1)]}
// // technologies={projects[0].technologies[1]}
// />
// <ProjectItem
// name={projects[1].name}
// about={projects[1].about}
// technologies={projects[1].technologies[1]}
// />
// <ProjectItem
// name={projects[2].name}
// about={projects[2].about}
// technologies={projects[2].technologies[2]}
