import Site from './Site'

export default async function Sites() {
    return (
        <section className="sites">
            <h2>Websites</h2>
            <div className="grid sitesGrid">
                <Site href="https://olillin.com" source="https://github.com/olillin/olillin.com" />
                <Site href="https://cal.olillin.com" source="https://github.com/olillin/cals-cals" />
                <Site href="https://notes.olillin.com" />
            </div>
        </section>
    )
}
