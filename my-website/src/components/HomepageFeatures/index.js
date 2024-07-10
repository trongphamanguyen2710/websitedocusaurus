import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Industrial Electrical Cabinet',
    Svg: require('@site/static/img/tudienlanh.svg').default,
    description: (
      <>
        An Industrial Electrical Cabinet is a secure enclosure designed to house electrical components, including controllers and programmable logic controllers (PLCs), ensuring reliable and safe operation of automated systems in industrial environments.
      </>
    ),
  },
  {
    title: 'M5Stack CoreMP135',
    Svg: require('@site/static/img/coremp135.svg').default,
    description: (
      <>
        CoreMP35 is a highly integrated microprocessor core designed for embedded systems, offering a balance of performance, power efficiency, and flexibility.
      </>
    ),
  },
  {
    title: 'ESP32-S3',
    Svg: require('@site/static/img/esp32.svg').default,
    description: (
      <>
        ESP32-S3 is a powerful microcontroller from Espressif Systems, designed for versatile IoT applications.
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
