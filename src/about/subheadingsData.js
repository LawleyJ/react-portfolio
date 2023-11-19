import ResumePDF from "../assets/Resume.pdf"
import LinkedinIcon from "../assets/linkedin.png";
import GithubIcon from "../assets/github.png"
import ResumeIcon from "../assets/resume.png"

const subheadingsData = {
    1: [
        {
            title: "About Me",
            content: (
                <>
                    <p>
                    Dynamic, motivated Professional with the work background and proven work ethic to handle Senior QA Engineering
and Front-End Development. Known for delivering excellent service in fast-paced environments, with the skillset to solve complex
problems, maintain technical documentation, create test plans/scenarios, uphold quality results, and offer clear
feedback. Out-of-the-box thinker who is comfortable working in teams or independently to ensure results
consistently exceed goals.                   </p>
                </>

            )
        }
    ],
    2: [
        {
            title: "Lead QA Engineer ",
            content: (
                <>
                    <h4>
                        Reveal Technology (2020-Present)
                    </h4>
                    <ul>
                        <li>Directed the software quality management process, ensuring seamless transitions from development to the successful adoption of the product by end-users.</li>
                        <li>Established and developed a robust Quality Assurance (QA) department from inception, spearheading the recruitment and onboarding of new team members.</li>
                    </ul>
                </>

            )
        },
        {
            title: "QA Special Projects Lead ",
            content: (
                <>
                    <h4>Geomni/Versik Analytics (2018-2020)</h4>
                    <ul>
                        <li>Collaborated on and innovated new ideas to drive productivity and efficiency improvements within the QA department.</li>
                        <li>Effectively spearheaded and supervised a team of six analysts/testers to achieve successful outcomes.</li>
                    </ul>
                </>

            )
        }
    ],
    3: [
        {
            title: "Bachelors of Science",
            content: (
                <>
                    <p>
                        Computer Science, 2024 
                        
                    </p>
                    <p>Colorado State University - Global </p>
                    <p>GPA: 3.95</p>
                </>

            )
        },
    ],
    4: [
        {
            
            title: (<a className="resume" href={ResumePDF} target="_blank"
                    rel="noreferrer">
                    Full Resume
                    </a>),
            content: (
                <>
                </>
            ),
            icon: ResumeIcon
            
        },
        {
            title: <a href="https://github.com/LawleyJ" target = "_blank" rel= "noreferrer">Github</a>,
            content: (
                <>
                </>

            ),
            icon: GithubIcon
        },
        {
            title: <a href="https://www.linkedin.com/in/joshua-lawley/" target = "_blank" rel= "noreferrer">LinkedIn</a>,
            content: (
                <>
                </>

            ),
            icon: LinkedinIcon
        },
    ],
};

export default subheadingsData;

