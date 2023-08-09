import styles from './breadcrumb.module.css';

type BreadcrumbProps = {
    path: string[];
    name: string;
}

export default function Breadcrumb ({ path, name }: BreadcrumbProps) {
    const getBreadcrumbFromPath = (path: string[]) => {
        const pathWithName = [...path, name];
        
        return pathWithName.join(' > ');
    }

    return (
        <div className={styles.breadcrumb}>
            {getBreadcrumbFromPath(path)}
        </div>
    )
}