import footer from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={footer.footer}>
            <span>
                <a
                    href="https://github.com/olillin/olillin.com"
                    target="_blank"
                >
                    See the source code on GitHub
                </a>
            </span>
        </footer>
    )
}
