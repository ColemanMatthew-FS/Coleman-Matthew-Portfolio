import Project from "@/components/Project";
import {
    clinician, dbstarter, lipid, cert, capstone, neocities, cliffdash, cliffport, ziptrip
} from '../../public'

export default function Projects() {
    let imageId = 0
    // IMPORTANT: I needed to use *FILENAME*.default.src because client components cant receive module objects!
    // If I imported each module individually, instead of as one object, I could have gotten away with cert.src
    const images = [
        {
            id: imageId++,
            src: clinician.default.src,
            width: 1350,
            height: 866,
            alt: "Learn Your Lipids find a clinician page"
        },
        {
            id: imageId++,
            src: dbstarter.default.src,
            width: 1909,
            height: 1082,
            alt: "DB Starter home page"
        },
        {
            id: imageId++,
            src: lipid.default.src,
            width: 1920,
            height: 950,
            alt: "Lipid.org home page"
        },
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
            <div
                className="md:flex flex-wrap gap-x-12 rounded-lg divide-y divide-white w-screen md:w-full md:divide-none">
                <Project
                    image={images[0]}
                    title={"Find a clinician"}
                    text={
                        "A WordPress page that mixes in a PHP form where users can enter their location. When they have, a jQuery file captures the request and Ajaxes it to a PHP file to retrieve data from a MySQL database of lipidologists. When this data is retrieved, the Google Maps API is used to display the locations of clinicians."
                    }
                    href="https://www.learnyourlipids.com/find-a-clinician"
                />
                <Project
                    image={images[1]}
                    title={"DB Starter"}
                    text={
                        "A template admin interface made in Laravel using the Blade templating engine and AdminLTE styling. A collaboration between myself and my supervisor at Compass Management & Consulting."
                    }
                    href="#"
                />
                <Project
                    image={images[2]}
                    title={"lipid.org"}
                    text={
                        "One of a number of websites I work on at Compass Management and Consulting. I've handled everything from Drupal content blocks to the PHP + MySQL backend in order to help the NLA provide comprehensive programs for new and experienced lipidologists."
                    }
                    href="https://www.lipid.org/"
                />
                <Project
                    image={images[3]}
                    title={"IBM Back-End Development Certificate"}
                    text={
                        "An online course focused on the development and deployment of apps written in Python (particularly Django and Flask). Included a heavy focus on microservice architecture."
                    }
                    href="https://coursera.org/share/4720f008af93f8bc821bf09aafc98e63"
                />
                <Project
                    image={images[4]}
                    title={"Back-End Development Capstone"}
                    text={
                        "A website for a fictional band, allowing users to access and create concerts, as well as hosting song information and some dummy photos. Main website coded in Django, hosted in Kubernetes, and storing data via MySQL, songs API written in flask, hosted in OpenShift, and using MongoDB, and picture API written in Flask, hosted using IBM Cloud, and storing data using IBM Cloud storage."
                    }
                    href="https://github.com/ColemanMatthew-FS/Back-end-Development-Capstone"
                />
                <Project
                    image={images[5]}
                    title={"Neocities Portfolio Template"}
                    text={
                        "A design exercise in creating a stylish Bootstrap single page website."
                    }
                    href="https://french-toast-haustier.neocities.org/template.html"
                />
                <Project
                    image={images[6]}
                    title={"CLIFF Dashboard"}
                    text={
                        "Worked to port existing Atlanta Federal Reserve tools into HTML, CSS, and JavaScript."
                    }
                    href="https://emar-data-tools.shinyapps.io/cliff_dashboard_demo/"
                />
                <Project
                    image={images[7]}
                    title={"CLIFF Portal"}
                    text={
                        "Created a Portal page for the Atlanta Fed's CLIFF tools using HTML, CSS, JavaScript, and Bootstrap."
                    }
                    href="https://emar-data-tools.shinyapps.io/clifftool/"
                />
                <Project
                    image={images[8]}
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
