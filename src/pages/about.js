import * as React from 'react'
import Layout from '../components/layout';
import{
  headerParallax,
  parallaxGroup,
  layerBase,
  layerBack,
  layerDeep,
  title,
  forma,
  image,
  content,
  subtitle,
  desc,
  texts,
  name,
  textContent,
  divCurvo
} from '../page-styles/about.module.css';


const About = () => {
    return (
    <Layout pageTitle={"About"}>
      <div class={headerParallax}>
        <div class={parallaxGroup}>
          <div class={layerBase}>
            <div class={forma}>
            </div>
            <div class={texts}> 
              <div class={name}>¡Hola!</div>
              <div class={title}>Mi nombre es Daniel Rodriguez</div>  
              <div class={subtitle}>Soy Desarrollador de Software 💻</div>
              <div class={desc}>Y te doy la bienvenida a mi Sitio Web.</div>
            </div> 
          </div>
          <div class={layerBack}>
            <div class={image}></div>            
          </div>
          <div class={layerDeep}>
          </div>
        </div>
        <div class={divCurvo}></div>
        <div class={content}>
          <div class={textContent}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in ligula purus. Morbi nulla metus, lobortis eget odio sit amet, ullamcorper viverra magna. Nulla risus velit, rutrum vitae mi in, eleifend fermentum tortor. Donec eu lectus consectetur leo iaculis elementum nec ultrices orci. Etiam dignissim erat luctus dapibus fermentum. Quisque in odio elementum, consectetur libero sit amet, cursus urna. Aliquam sit amet erat vestibulum, scelerisque ex quis, egestas quam.

Pellentesque consectetur et orci in vehicula. Phasellus imperdiet nisl id mi vulputate, ut blandit nibh viverra. Pellentesque non suscipit tellus, non rutrum orci. Vivamus at imperdiet magna. Nulla quis malesuada urna, eu lobortis felis. Donec faucibus semper lectus varius ullamcorper. Maecenas ut lorem imperdiet, placerat elit vel, condimentum nulla. Nam lacinia luctus velit, et vulputate leo fermentum in.

Nullam ut turpis congue, aliquet turpis posuere, viverra tellus. Nullam dapibus urna leo, sed sodales elit malesuada id. Nullam id luctus mi. Ut lacinia facilisis ex, eu congue felis posuere et. In euismod non tellus ut tempus. Nulla sollicitudin diam nec nisi vehicula, sed sollicitudin leo scelerisque. Nam consequat pellentesque ligula ut aliquet. In non nunc sapien. Proin consequat orci quam, ac malesuada dui fermentum eu. Phasellus orci odio, feugiat ut erat non, lacinia porttitor nunc. Curabitur euismod maximus neque. Nulla iaculis orci at nisl aliquam, suscipit sodales elit euismod. Donec a mauris quis diam rhoncus aliquet. Curabitur metus leo, dignissim a feugiat sit amet, iaculis eget sapien. Duis mauris felis, mollis at pharetra sed, ornare id nisi. Morbi a odio risus.

Phasellus non eleifend ipsum. Vestibulum et ante massa. Integer consequat ultricies augue vel blandit. Morbi aliquet ex lectus, sit amet faucibus nunc malesuada vel. Sed posuere, arcu et pharetra interdum, mi felis efficitur eros, in mattis velit nibh eu odio. Integer vitae urna et augue faucibus bibendum. Aliquam consectetur rutrum faucibus. Maecenas congue urna cursus ligula rhoncus feugiat. Pellentesque et leo non libero vehicula accumsan eget in ex. Suspendisse gravida ipsum eget nibh varius, vitae ultrices felis accumsan.

Maecenas sodales massa at condimentum interdum. Nam sit amet dolor ut odio consectetur semper. Curabitur a imperdiet enim. Proin vel elit semper, auctor tellus ac, finibus eros. Donec et orci aliquam, cursus quam a, scelerisque leo. Donec eget porta dui, in pulvinar felis. Aenean hendrerit rhoncus efficitur. Mauris lectus erat, porta varius efficitur ac, porttitor eu elit. Vivamus sodales dui dui, nec scelerisque quam euismod eu. Mauris lectus massa, feugiat nec diam et, pharetra consectetur enim. Suspendisse et nisi a libero tincidunt tristique pharetra at ante. Aliquam aliquam leo ut faucibus vestibulum. Aenean dapibus magna quis ex tincidunt blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
        </div>
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