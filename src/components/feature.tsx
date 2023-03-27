interface FeatureProps {
    title: string;
    description: string;
    link: string;
    icon:string;
}
export default function Feature({ title, description, link,icon }: FeatureProps) {
    return (<div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <i className={icon}></i>        </div>
        <h3 className="fs-2">{title}</h3>
        <p>{description}</p>
        <a href={link} className="icon-link">
            Link
            <i className="bi bi-caret-right"></i>
        </a>
    </div>)
}