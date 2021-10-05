/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Accounting',
    title: 'Accounting',
    text:
      'Get yall of your accounting done promptly and professionally.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Student Visas',
    title: 'Student Visas',
    text:
      'Handle all visa needs and concerns with ease.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Immigration',
    title: 'Immigration',
    text:
      'Browse through a wide range of immigration services and solutions.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Tax Filing',
    title: 'Tax Filing',
    text:
      'Never have to worry about filing taxes or being late again.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{ variant: 'section.keyFeature'}} id='feature'>
     <Container>
       <SectionHeader 
        slogan='Real Professionals Helping Real People'
        title='The Best There Is'
       />

       <Grid sx={styles.grid}>
        {data.map((item) => (
          <FeatureCardColumn 
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
          />
        ))}
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
