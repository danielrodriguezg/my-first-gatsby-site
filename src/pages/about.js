import * as React from 'react'
import Layout from '../components/layout';

const About = () => {
    return (
    <Layout pageTitle={"About"}>
      <div>
          <h1>About Me</h1>
          <p>Hola soy Daniel y me gusta programar, contráteme.</p>
      </div>
    </Layout>)
};


export const Head = () => <title>About Me</title>;
/**Otra forma es asi
 * export const Head = () => (
    <>
      <title>About Me<title/>
      <meta name="description" content="Your description" />
    </>
  )
*/
export default About;