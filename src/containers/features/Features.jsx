import React from 'react';
import { Feature } from '../../components/';
import './features.css';

const featuresData = [
  {
    title: 'Visual Learning',
    text: 'We use technology to help students visualise 3D systems they encounter in their learning journey.',
  },
  {
    title: 'Tactile Learning',
    text: 'We gamify the learning experience. We build interactive, immersive content that allows students to zoom, click, and play as they learn.',
  },
  {
    title: 'Stimulating Imagination',
    text: 'We allow students to carry out a hands-on exploration what they are learning about to understand the content from different perspectives.',
  },
  {
    title: 'Increasing Exposure',
    text: 'Our solution will incorporate the latest academic advances. The students will be able to form a learning community.',
  },
];

function Features () {
  return (
    <div className="augmented__features section__padding" id="features">
      <div className="augmented__features-heading">
        <h1 className="gradient__text">AugmentED motivates students to learn more by DOING, appealing to their eagerness to learn.</h1>
      </div>
      <div className="augmented__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );
}

export default Features;