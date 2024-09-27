import Site from "./Site";


export default async function Sites() {
    return (
        <section className="sites">
            <h2>Websites</h2>
            <div className="grid sitesGrid">
                <Site name="Cal's cals" href="https://cal.olillin.com" />
                <Site name="Printify Bulk Edit" href="https://printify.olillin.com" />
                <Site name="Traffic map" href="https://trafik.olillin.com" />
                <Site name="Published notes" href="https://notes.olillin.com" />
            </div>
        </section>
    )
}