import Site from './Site'

export default async function Sites() {
    return (
        <section className="sites">
            <h2>Websites</h2>
            <div className="grid sitesGrid">
                <Site
                    href="https://cal.olillin.com"
                    name="Cal's cals"
                    source="https://github.com/olillin/cals-cals"
                />
                <Site
                    href="https://gamma.olillin.com"
                    name="Gamma Demo"
                    source="https://github.com/olillin/gamma-demo"
                />
                <Site
                    href="https://timesend.olillin.com"
                    name="TimeSend"
                    source="https://github.com/olillin/timesend"
                />
                <Site
                    href="https://notes.olillin.com"
                    name="Lecture Notes"
                />
            </div>
        </section>
    )
}
