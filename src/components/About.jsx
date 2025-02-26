import styled from "styled-components";
import img1 from "../assets/img/pngwing.com (58).png"
export function About() {
  return (<Container>
   <section class="about section" id="about">
          <div class="shape__small"></div>
          <div class="shape__big"></div>

          <div class="about__container container grid">
            <div class="about__data">
              <h2 class="section__title">
             DOCUMENTOS EXTRAS

              </h2>

              <p className="about__description" style={{ color: "#ffffff" }}>
  Algunas empresas solicitan por precaución más documentos, nuestro trabajo es garantizar seguridad a la flota y al chofer formando una confianza mutua.
</p>


              <a href="#" class="button">
                Siguiente..
              </a>
            </div>

            <img
              src={img1}
              alt="about image"
              class="about__img"
            />
          </div>
        </section>
  </Container>);
}
const Container =styled.div`
  .about{
    position: relative;

    &__container{
        row-gap: 3.5rem;

        & .section__title{
            margin-bottom: 1rem;
        }
    }
    &__data{
        text-align: center;
    }
    &__description{
        margin-bottom: 2rem;
    }
    &__img{
        width: 300px;
        justify-self: center;
    }
    & .shape__small{
        top: 2rem;
        right: -3rem;
    }
    & .shape__big{
        bottom: 0;
        left: -8rem;
    }
}
`