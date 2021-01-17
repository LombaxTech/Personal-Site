import animeImg from "./images/animeSearcher.PNG";
import spaceImg from "./images/spaceshipFlyer.PNG";
import rkLanguages from "./images/rkLanguages.PNG";
import personalSite from "./images/personalSite.PNG";

const projects = [
    {
        title: "Anime Searcher",
        description: "Search and stay updated on your favourite series!",
        imageLink: animeImg,
        modalDescription:
            "Made using the Jikan API. Fans can search for their favourite series and find further information such as current airing status, number of episodes, video trailer links etc. Styled using Material Design. (React, SCSS, Material-UI)",
        codeLink: "https://github.com/LombaxTech/AnimeSearcher",
        previewLink: "https://anime-searcher.netlify.app/",
    },
    {
        title: "Spaceship Flyer",
        description: "Fly as long as you can while dodging enemies",
        imageLink: spaceImg,
        modalDescription:
            "A singleplayer 2D game made in Unity. Players must make to their way to the end of the level while avoiding flying obstacles. (Unity3D, C#)",
        codeLink: "",
        previewLink: "https://lombaxtech.github.io/SpaceshipFlyer/",
    },
    {
        title: "RK Languages",
        description: "Learn a new language while making friends and having fun",
        imageLink: rkLanguages,
        modalDescription:
            "A language learning social network app that allows users to interact with native speakers of their target languages. Users are able to write posts, like and comment on others posts, send messages and follow other users. Includes authentication, real-time chat via web sockets and image upload functionality. (React, Node, Express, MongoDB, Socket.io, Feathers)",
        codeLink: "https://github.com/LombaxTech/ht-clone-client",
        previewLink: "https://rk-languages.netlify.app",
    },
    {
        title: "Rakib Khan",
        description: "Personal site of Rakib Khan",
        imageLink: personalSite,
        modalDescription:
            "A showcase of projects I've built with links to live previews and source code files",
        codeLink: "https://github.com/LombaxTech/personal-site-react-ver",
        previewLink: "https://rakibkhan.netlify.app",
    },
];

export default projects;
