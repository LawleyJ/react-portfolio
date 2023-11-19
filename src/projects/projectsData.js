import reactProject from "../assets/reactPortfolio.png";
import ecommerce from "../assets/ecommerce.jpg";


const projects = {
    1: {
        title: "ReactJS Portfolio Website",
        image: reactProject,
        description: (
            <>
                <p>First React project. Inspried by Ademir Alijagic tutorial: <a href="https://www.youtube.com/watch?v=ohnrC3gh9YI&ab_channel=HowtoBecomeaDeveloper" target = "_blank" rel= "noopener noreferrer">React Portfolio Website Tutorial</a> </p>
            </>
        ),
        github: "https://github.com/LawleyJ/react-portfolio",
        demo: "",
    },
    2: {
        title: "E-commerce Website (Coming Soon...)",
        image: ecommerce,
        description: (
            <>
                <p>
                    E-commerce website built with NExt.js and TypeScipt. Content managed with Sanity.io. 
                </p>
            </>
        ),
        github: "https://github.com/LawleyJ/eCommerceWeb",
        demo: "",
    },
    
}

export default projects;