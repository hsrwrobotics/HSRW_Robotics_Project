import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
const FeatureList = [
  {
    title: "HARDWARE",
    Svg: require('../../static/img/3d_printer.svg').default,
    description: (
      <>
        Accessible CAD files so anyone can 3D-print them at home. 
        Otherwise it should be affordable and can be easily purchased.
      </>
    ),
  },  
  {
    title: 'SOFTWARE',
    Svg: require('../../static/img/coding.svg').default,
    description: (
      <>
        Simply download the code and run.
      </>
    ),
  },
  {
    title: 'CONTRIBUTE',
    Svg: require('../../static/img/github.svg').default,
    description: (
      <>
        Contribute to our open source software projects.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
