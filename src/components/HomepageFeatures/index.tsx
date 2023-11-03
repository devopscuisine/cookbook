import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};


const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/deployment.svg').default,
    description: (
      <>
        DevOps Cuisine contains all the latest tech stacks and how to articles to share our knowledge in the cloud.
      </>
    ),
  },
  {
    title: 'Real Time Scenarios',
    Svg: require('@site/static/img/monitor.svg').default,
    description: (
      <>
        The Articles and Blogs that we release are mostly based on real time scenarios we learned over the years.
      </>
    ),
  },
  {
    title: 'Powered by Azure',
    Svg: require('@site/static/img/bicep.svg').default,
    description: (
      <>
        Most of our solutions are based on Azure Native Tools such as - Bicep , Github Actions, Azure DevOps and Powershell.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
