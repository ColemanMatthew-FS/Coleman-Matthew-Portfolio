
import Project from "@/components/Project";

export default function Projects() {
  
  let imageId = 0
  const images = [
    {
      id: imageId++,
      src: "/cert.png",
      width: 1052,
      height: 813,
      alt: "IBM front end development certificate"
    },
    {
      id: imageId++,
      src: "/capstone.png",
      width: 1004,
      height: 692,
      alt: "IBM front end development capstone"
    },
    {
      id: imageId++,
      src: "/serversidepractice2.png",
      width: 599,
      height: 564,
      alt: "Serverside coding practice"
    },
    {
      id: imageId++,
      src: "/neocities1.jpg",
      width: 1892,
      height: 945,
      alt: "Neocities website"
    },
    {
      id: imageId++,
      src: "/cliffdash.png",
      width: 1920,
      height: 967,
      alt: "Career Ladder Identifier and Financial Forecaster"
    },
    {
      id: imageId++,
      src: "/cliffport.png",
      width: 1920,
      height: 965,
      alt: "Career Ladder Identifier and Financial Forecaster portal page"
    },
    {
      id: imageId++,
      src: "/wdd353.jpg",
      width: 1920,
      height: 1004,
      alt: "Full Sail student project"
    },
    {
      id: imageId++,
      src: "/ziptrip.jpg",
      width: 1920,
      height: 909,
      alt: "Mockup travel app made during my undergrad"
    },
  ]
  return (
    <>
      <h1 className="font-bold text-4xl m-12">
        My projects
      </h1>
      <div className="flex flex-wrap gap-x-6 m-12">
        <Project
          image={images[0]}
          title={"IBM Back-End Development Certificate"}
          text={
            "An online course focused on the development and deployment of apps written in Python (particularly Django and Flask). Included a heavy focus on microservice architecture."
          }
        />
        <Project
          image={images[1]}
          title={"Back-End Development Capstone"}
          text={
            "A website for a fictional band, allowing users to access and create concerts, as well as hosting song information and some dummy photos. Main website coded in Django, hosted in Kubernetes, and storing data via MySQL, songs API written in flask, hosted in OpenShift, and using MongoDB, and picture API written in Flask, hosted using IBM Cloud, and storing data using IBM Cloud storage."
          }
        />
        <Project
          image={images[2]}
          title={"Serverside Coding Case Study"}
          text={
            "An experiment in creating a website using a Twig frontend and a Node.JS backend to connect to a Sequelize server. A React Router update is currently in the works."
          }
        />
        <Project
          image={images[3]}
          title={"Neocities Portfolio Template"}
          text={
            "A design exercise in creating a stylish Bootstrap single page website."
          }
        />
        <Project
          image={images[4]}
          title={"CLIFF Dashboard"}
          text={
            "Worked to port existing Atlanta Federal Reserve tools into HTML, CSS, and JavaScript."
          }
        />
        <Project
          image={images[5]}
          title={"CLIFF Portal"}
          text={
            "Created a Portal page for the Atlanta Fed's CLIFF tools using HTML, CSS, JavaScript, and Bootstrap."
          }
        />
        <Project
          image={images[6]}
          title={"WDD353"}
          text={
            "Full Sail student project wherein I created a Bootstrap frontend connected to a Node Express backend, complete with functioning login screen, key learnings included browser sessions."
          }
        />
        <Project
          image={images[7]}
          title={"ZipTrip"}
          text={
            "Full Sail student project where I designed a multi page, GitHub Pages site made in Bootstrap, key learnings included prototyping in Adobe XD, and styling in Bootstrap."
          }
        />
      </div>
    </>
  );
}
