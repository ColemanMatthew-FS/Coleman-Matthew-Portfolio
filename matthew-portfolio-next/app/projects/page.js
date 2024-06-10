
import Project from "@/components/Project";
//a module export was a good choice. it let me reference the URL of a given image programmatically
//this is useful for referencing a static url that's only generated once the server runs
import {
  cert, capstone, serverside, neocities, cliffdash, cliffport, wdd353, ziptrip
} from '../../public'
export default function Projects() {
  
  let imageId = 0
  // IMPORTANT: I needed to use cert.default.src so that I could access the compiled URL!
  const images = [
    {
      id: imageId++,
      src: cert.default.src,
      width: 1052,
      height: 813,
      alt: "IBM front end development certificate"
    },
    {
      id: imageId++,
      src: capstone.default.src,
      width: 1004,
      height: 692,
      alt: "IBM front end development capstone"
    },
    {
      id: imageId++,
      src: serverside.default.src,
      width: 599,
      height: 564,
      alt: "Serverside coding practice"
    },
    {
      id: imageId++,
      src: neocities.default.src,
      width: 1892,
      height: 945,
      alt: "Neocities website"
    },
    {
      id: imageId++,
      src: cliffdash.default.src,
      width: 1920,
      height: 967,
      alt: "Career Ladder Identifier and Financial Forecaster"
    },
    {
      id: imageId++,
      src: cliffport.default.src,
      width: 1920,
      height: 965,
      alt: "Career Ladder Identifier and Financial Forecaster portal page"
    },
    {
      id: imageId++,
      src: wdd353.default.src,
      width: 1920,
      height: 1004,
      alt: "Full Sail student project"
    },
    {
      id: imageId++,
      src: ziptrip.default.src,
      width: 1920,
      height: 909,
      alt: "Mockup travel app made during my undergrad"
    },
  ]
  return (
    <div className="mt-20 md:px-32">
      <h2 className="px-8 md:p-0 font-bold text-4xl mb-12 ">
        My projects<span className="text-6xl text-purple-300">.</span>
      </h2>
      <div className="md:flex flex-wrap gap-x-12 rounded-lg divide-y divide-white w-screen md:w-full md:divide-none">
        <Project
          image={images[0]}
          title={"IBM Back-End Development Certificate"}
          text={
            "An online course focused on the development and deployment of apps written in Python (particularly Django and Flask). Included a heavy focus on microservice architecture."
          }
          href="https://coursera.org/share/4720f008af93f8bc821bf09aafc98e63"
        />
        <Project
          image={images[1]}
          title={"Back-End Development Capstone"}
          text={
            "A website for a fictional band, allowing users to access and create concerts, as well as hosting song information and some dummy photos. Main website coded in Django, hosted in Kubernetes, and storing data via MySQL, songs API written in flask, hosted in OpenShift, and using MongoDB, and picture API written in Flask, hosted using IBM Cloud, and storing data using IBM Cloud storage."
          }
          href="https://github.com/ColemanMatthew-FS/Back-end-Development-Capstone"
        />
        <Project
          image={images[2]}
          title={"Serverside Coding Case Study"}
          text={
            "An experiment in creating a website using a Twig frontend and a Node.JS backend to connect to a Sequelize server. A React Router update is currently in the works."
          }
          href="https://github.com/ColemanMatthew-FS/serverside-practice/tree/dev"
        />
        <Project
          image={images[3]}
          title={"Neocities Portfolio Template"}
          text={
            "A design exercise in creating a stylish Bootstrap single page website."
          }
          href="https://french-toast-haustier.neocities.org/template.html"
        />
        <Project
          image={images[4]}
          title={"CLIFF Dashboard"}
          text={
            "Worked to port existing Atlanta Federal Reserve tools into HTML, CSS, and JavaScript."
          }
          href="https://emar-data-tools.shinyapps.io/cliff_dashboard_demo/"
        />
        <Project
          image={images[5]}
          title={"CLIFF Portal"}
          text={
            "Created a Portal page for the Atlanta Fed's CLIFF tools using HTML, CSS, JavaScript, and Bootstrap."
          }
          href="https://emar-data-tools.shinyapps.io/clifftool/"
        />
        <Project
          image={images[6]}
          title={"WDD353"}
          text={
            "Full Sail student project wherein I created a Bootstrap frontend connected to a Node Express backend, complete with functioning login screen, key learnings included browser sessions."
          }
          href="https://www.behance.net/gallery/169704795/2022-Bootstrap-Project"
        />
        <Project
          image={images[7]}
          title={"ZipTrip"}
          text={
            "Full Sail student project where I designed a multi page, GitHub Pages site made in Bootstrap, key learnings included prototyping in Adobe XD, and styling in Bootstrap."
          }
          href="https://colemanmatthew-fs.github.io/project-and-portfolio-3/"
        />
      </div>
    </div>
  );
}
