export default function Project({image, title, text}) {
    return(
        <>
            <div className="flex justify-between gap-x-6 ms-48 me-48">
                <div className="w-1/4">
                    <h2 className="font-bold text-3xl mb-8">Contact</h2>
                    <ul>
                        <li>
                            <div>
                                <p>Phone:</p>
                                <p>(678) 857-8955</p>
                            </div>
                            <div>
                                <p>Email:</p>
                                <a href="mailto:matthewcoleman0066@gmail.com">matthewcoleman0066@gmail.com</a>
                            </div>
                            <div>
                                <p>Location:</p>
                                <p>Winston, GA</p>
                            </div>
                            <div>
                                <p>GitHub:</p>
                                <a href="https://github.com/ColemanMatthew-FS">GitHub</a>
                            </div>
                            <div>
                                <p>LinkedIn:</p>
                                <a href="https://www.linkedin.com/in/matthew-coleman-7b8981221/">LinkedIn</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="w-1/4">
                    <h2 className="font-bold text-3xl mb-8">Education</h2>
                    <ul>
                        <li>Full Sail University - Winter Park, FL August 2020 - November 2022</li>
                        <ul>
                        Bachelor of Science in Web Design and Development
                        </ul>
                    </ul>
                </div>
                <div className="w-1/4">
                    <h2 className="font-bold text-3xl mb-8">Experience</h2>
                    <ul>
                        <li>Web Designer and Developer at the Atlanta Federal Reserve Bank (2022-2023)</li>
                        <ul>
                        Achieved a more accessible suite of online forms and tools for the Career Ladder Identifier and Financial Forecaster project, using HTML, CSS, JS, and JQuery
                        </ul>
                    </ul>
                </div>
            </div>
        </>
    )
}