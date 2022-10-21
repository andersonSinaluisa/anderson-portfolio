import React from 'react';
import { IonHeader, IonCard, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonText, IonImg, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip } from '@ionic/react';
import anime, { AnimeInstance } from 'animejs';
import './Work.css'
import image_dev from '../../assets/images/undraw_programming_re_kg9v.svg'
import file_system from '../../assets/images/file-system.png'
import recycle_ia from '../../assets/images/recycle_ia.png'
import employee_vaccination from '../../assets/images/employee-vaccination.png'
import { useHistory, useLocation } from 'react-router';

const Work: React.FC = () => {
  let animationRef = React.useRef<any>(null);
  let location = useLocation()
  let history = useHistory();
  React.useEffect(() => {
    animationRef.current = anime({
      targets: ".el",
      translateY: Math.floor(Math.random() * 300),
      translateX: Math.floor(Math.random() * 300),
      rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
      },
      delay: function (el, i) {
        return i * 800;
      },
      loop: false,
      direction: "alternate",
      easing: "easeInOutSine",
    })
  }, []);


  React.useEffect(() => {
    animationRef.current = anime({
      targets: ".squared-1",
      translateY: Math.floor(Math.random() * 100),
      translateX: Math.floor(Math.random() * 200),
      rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
      },
      delay: function (el, i) {
        return i * 800;
      },
      loop: false,
      direction: "alternate",
      easing: "easeInOutSine",
    })
  }, [])
  React.useEffect(() => {
    animationRef.current = anime({
      targets: ".squared-2",
      translateY: Math.floor(Math.random() * 500),
      translateX: Math.floor(Math.random() * -400),
      rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
      },
      delay: function (el, i) {
        return i * 800;
      },
      loop: false,
      direction: "alternate",
      easing: "easeInOutSine",
    })
  }, [])


  const handleRedirect = (path: string) => {
    history.push(path)
  }



  return (
    <>

      <IonContent >
        <IonGrid>
          <IonRow>
            <IonCol>
              <div className="el box" />

            </IonCol>
            <IonCol>
              <div className="squared-1 box" />

            </IonCol>
            <IonCol>
              <div className="squared-2 box" />

            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol style={{
              margin: "5%"
            }}>
              <IonText color="black" className='title-head-presentation'>

                Hi. I'm Anderson.
                <br />
                A Software developer.

              </IonText>
              <IonText>

                <p>
                  I'm a Fullstack developer, with experience in creating technology solutions focused on both web and mobile development.
                </p>
              </IonText>

            </IonCol>
            <IonCol style={{
              margin: "5%"
            }} sizeMd="6" sizeSm={"12"} sizeXs="12">

              <IonImg src={image_dev}>
              </IonImg>

            </IonCol>
          </IonRow>
          <IonRow>

            <IonCol sizeXs='12' sizeMd='4'>
              <IonCard color="primary">
                <IonCardHeader>
                  <IonCardSubtitle color="black" className='card-project-subtitle' >

                    WEB APP
                  </IonCardSubtitle>
                  <IonCardTitle>
                    <a href='https://filesystem144.herokuapp.com/' className='card-project-title'>File System</a>
                    <br />
                    <IonChip color="dark">Spring-boot</IonChip>
                    <IonChip color="dark">Angular</IonChip>

                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonImg src={file_system} onClick={() => handleRedirect('/file-system')}>
                  </IonImg>
                </IonCardContent>

              </IonCard>
            </IonCol>
            <IonCol sizeXs='12' sizeMd='4'>
              <IonCard color="secondary">
                <IonCardHeader>
                  <IonCardSubtitle color="black" className='card-project-subtitle' >

                    WEB APP
                  </IonCardSubtitle>
                  <IonCardTitle className='card-project-title'>

                    Recycle IA
                    <br />

                    <IonChip color="light">Django (python)</IonChip>
                    <IonChip color="light">React js</IonChip>

                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonImg src={recycle_ia}>
                  </IonImg>
                </IonCardContent>

              </IonCard>
            </IonCol>
            <IonCol sizeXs='12' sizeMd='4'>
              <IonCard color="primary">
                <IonCardHeader>
                  <IonCardSubtitle color="black" className='card-project-subtitle' >

                    API REST 
                  </IonCardSubtitle>
                  <IonCardTitle className='card-project-title'>

                    Employee Vaccination
                    <br />
                    <IonChip color="dark">Django (python)</IonChip>
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonImg src={employee_vaccination}>
                  </IonImg>
                </IonCardContent>

              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow align-items-center>
            <IonCol></IonCol>
            <IonCol>
              <IonText color="black" className='title-footer-presentation'>
                I occasionally take on freelance opportunities.
              </IonText>
              <IonText>

                <p>

                </p>
              </IonText>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </>
  );
};

export default Work;