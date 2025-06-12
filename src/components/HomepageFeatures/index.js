import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Integrations',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      Wordpress Plugins
      </>
    ),
  },
  {
    title: 'APIs',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Our API Integrations empower developers to seamlessly connect with our platform and extend its functionality into any custom workflow or application. This section provides detailed API documentation, authentication methods, endpoint references,
    request/response examples, and usage best practices.

Whether you're syncing product data, managing users, handling orders, or customizing workflows, our APIs are designed to be flexible, secure, and easy to work with. 
  Get started quickly with step-by-step guides and real-world integration examples to accelerate your development process.
      </>
    ),
  },
  {
    title: 'Developer Guidelines',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
