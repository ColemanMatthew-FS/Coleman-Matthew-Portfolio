export default function Project({image, title, text}) {
    return(
        <div className="mt-20 px-8 md:px-32">
            <h2 className="mb-12 font-bold text-4xl">About me<span className="text-6xl text-purple-300">.</span></h2>
            <div className="block xl:flex justify-between md:gap-x-6">
                <div className="xl:w-1/4 mb-12">
                    <h2 className="font-bold text-2xl md:text-4xl">Contact</h2>
                    <ul className="mt-6 text-lg">
                        <li className="mb-2 md:mb-6 flex gap-x-2 justify-between flex-row">
                            <p className="hidden sm:inline">Phone:</p>
                            <p>(678) 857-8955</p>
                        </li>
                        <li className="mb-2 md:mb-6 flex gap-x-2 justify-between flex-row">
                            <p className="hidden sm:inline">Email:</p>
                            <a href="mailto:matthewcoleman0066@gmail.com" className="text-purple-400 hover:underline truncate sm:text-wrap">matthewcoleman0066@gmail.com</a>
                        </li>
                        <li className="mb-2 md:mb-6 flex gap-x-2 justify-between flex-row">
                            <p className="hidden sm:inline">Location:</p>
                            <p>Winston, GA</p>
                        </li>
                        <li className="mb-2 md:mb-6 flex gap-x-2 justify-between flex-row">
                            <p className="hidden sm:inline">GitHub:</p>
                            <a href="https://github.com/ColemanMatthew-FS" className="text-purple-400 hover:underline truncate sm:text-wrap">https://github.com/ColemanMatthew-FS</a>
                        </li>
                        <li className="mb-2 md:mb-6 flex gap-x-2 justify-between flex-row">
                            <p className="hidden sm:inline">LinkedIn:</p>
                            <a href="https://www.linkedin.com/in/matthew-coleman-7b8981221/" className="text-purple-400 hover:underline truncate sm:text-wrap">https://www.linkedin.com/in/matthew-coleman-7b8981221/</a>
                        </li>
                    </ul>
                </div>
                <div className="xl:w-1/4 mb-12">
                    <h2 className="font-bold text-2xl md:text-4xl">Education</h2>
                    <ul className="mt-6 text-lg">
                        <li className="font-bold">Full Sail University - Winter Park, FL (2020-2022)</li>
                        <ul>
                        Bachelor of Science in Web Design and Development
                        </ul>
                    </ul>
                </div>
                <div className="xl:w-1/4 mb-12">
                    <h2 className="font-bold text-2xl md:text-4xl">Experience</h2>
                    <ul className="mt-6 text-lg">
                        <li className="font-bold">Web Designer and Developer at the Atlanta Federal Reserve Bank (2022-2023)</li>
                        <ul>
                        Achieved a more accessible suite of online forms and tools for the Career Ladder Identifier and Financial Forecaster project, using HTML, CSS, JS, and JQuery.
                        </ul>
                    </ul>
                    <ul className="mt-6 text-lg">
                        <li className="font-bold">IT Coordinator at Compass Management and Consulting Inc (2024-)</li>
                        <ul>
                        Deploying content updates, refactoring code, and developing new features for CMC Inc's dozen client organizations within the healthcare industry.
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}