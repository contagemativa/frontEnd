import React from "react"
import Logo from "../../Common/Logo/Logo.jsx"

export default function Footer(...props) {
    return (
        <footer class="footer footer-center p-4 bg-base-100 text-base-content">
            <aside>
                <Logo width={150} height={200} />
            </aside>
        </footer>
    );
}
