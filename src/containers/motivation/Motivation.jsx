import React from 'react';
import { Feature } from '../../components/';
import './motivation.css'

function Motivation () {
  return (
    <div className="augmented_motivation section__margin" id="motivation">
        <div className="augmented_motivation-heading">
            <h1 className="gradient__text">The motivation behind AugmentED</h1>
        </div>
        <div className="augmented_motivation-container">
            <Feature title="Impact of Unfinished Learning" text="By the end of the 2020 - 21 school year, students were on average five months behind in math and four months behind in reading." />
            <Feature title="Federal Government Investment" text="The federal government has already pledged to invest over $200 billion in K–12 education over the next three years" />
            <Feature title="Alternative Education Options" text="Meanwhile, post covid, over 33% parents are exploring diverse education models that leverage newer technologies for their kids." />
            <Feature title="Access to Learning Devices" text="In a city like NYC, 90% of students have personal learning devices like laptops and tablets whose true potential remains untapped." />
        </div>
  </div>
  )
}

export default Motivation