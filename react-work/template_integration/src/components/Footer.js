import { Component } from "react";

class Footer extends Component {
    render() {
        return <>
            <footer className="footer_section">
                <div className="container">
                    <p>
                        &copy; <span id="displayYear"></span> All Rights Reserved By
                        <a href="https://html.design/">Free Html Templates</a>
                    </p>
                </div>
            </footer>

        </>
    }
}

export default Footer;