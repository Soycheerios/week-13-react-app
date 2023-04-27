import React from "react";

export default class Navigation extends React.Component {
    render() {
        return (
            <nav id="navigation">
            <ul>
                <li className="Home">
                    <a href="http://localhost:3002/?username=&password=#"><h2><img src="https://www.kindpng.com/picc/m/615-6158865_transparent-background-home-button-png-png-download.png" width="50" height="50"/>Home</h2></a>
                </li>
                <li className="Github">
                <a href="https://github.com/Soycheerios"><h2><img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" width="50"
                height="50"/>GitHub</h2></a>
                </li>
                <li className="Instagram">
                <a href="https://www.instagram.com/soy_cheerios/"><h2><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" width="50"
                height="50"/>Instagram</h2></a>
                </li>
                <li className="LinkdIn">
                <a href="https://www.linkedin.com/in/soichiro-itagaki19950602/"><h2><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" height="50" width="50" /> LinkdIn</h2></a>
                </li>
            </ul>
            </nav>
        );
    }
}