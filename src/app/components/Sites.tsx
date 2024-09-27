import Site from "./Site";


export default async function Sites() {
    return (
        <section className="sites">
            <h2>Websites</h2>
            <div className="grid sitesGrid">
                <Site name="Homepage" href="https://olillin.com" source="https://github.com/olillin/olillin.com" />
                <Site name="Cal's cals" href="https://cal.olillin.com" source="https://github.com/olillin/WebCal-Adapter" />
                <Site name="Printify Bulk Edit" href="https://printify.olillin.com" source="https://github.com/olillin/printify-bulk-edit" />
                <Site name="Traffic map" href="https://trafik.olillin.com" source="https://github.com/olillin/live-traffic-map" />
                <Site name="Published notes" href="https://notes.olillin.com" />
            </div>
        </section>
    )
}