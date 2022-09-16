import { IonCol, IonContent, IonGrid, IonImg, IonRow, IonText } from "@ionic/react";
import React, { createElement, useState } from "react";
import profile from '../../assets/images/profile.jpg'
import './About.css'
import anime, { AnimeInstance } from 'animejs';

const About: React.FC = () => {
    var easingNames = [
        'easeInQuad',
        'easeInCubic',
        'easeInQuart',
        'easeInQuint',
        'easeInSine',
        'easeInExpo',
        'easeInCirc',
        'easeInBack',
        'easeOutQuad',
        'easeOutCubic',
        'easeOutQuart',
        'easeOutQuint',
        'easeOutSine',
        'easeOutExpo',
        'easeOutCirc',
        'easeOutBack',
        'easeInBounce',
        'easeInOutQuad',
        'easeInOutCubic',
        'easeInOutQuart',
        'easeInOutQuint',
        'easeInOutSine',
        'easeInOutExpo',
        'easeInOutCirc',
        'easeInOutBack',
        'easeInOutBounce',
        'easeOutBounce',
        'easeOutInQuad',
        'easeOutInCubic',
        'easeOutInQuart',
        'easeOutInQuint',
        'easeOutInSine',
        'easeOutInExpo',
        'easeOutInCirc',
        'easeOutInBack',
        'easeOutInBounce',
    ]


    const [particles, SetParticles] = useState(Array.from({ length: 200 }))
    React.useEffect(() => {
        particles.forEach((_, e) => {
            console.log(e)
            anime({
                targets: ".dot-" + e,
                translateY: anime.random(50, window.innerHeight / 2),
                translateX: anime.random(50, window.innerWidth),
                rotate: {
                    value: 360,
                    duration: 1800,
                    easing: 'easeInOutSine'
                },
                delay: function (el, i) {
                    return i * 800;
                },
                loop: false,
                direction: "normal",
                easing: easingNames[anime.random(0, easingNames.length - 1)],
            })
        })

    }, [particles, easingNames]);

    return (
        <><IonContent>
            <IonGrid color="secondary">

                <div id="container-dots">
                    {
                        particles.map((_, e) => (
                            <div className={`dot dot-${e}`}></div>

                        ))
                    }


                </div>
                <IonRow style={{
                    marginLeft: "5%",
                }}
                    className="info-profile"
                >
                    <IonCol
                        sizeXs="12"
                        sizeMd="6"
                    >
                        <IonText color="black" className='title-head-presentation'>

                            <p> {"Hi. I'm Anderson. A Software developer working remotely for "}
                                <a href="https://www.aceroyplata.com/siape/" className="" target="_blank" rel="noreferrer">
                                    <span>SIAPE S.A</span>
                                </a>{" in its technological solutions in the city of Guayaquil, Ecuador."}
                            </p>

                        </IonText>
                        <IonText>

                            <p>
                                <h6>I have spent the last 2 years working in different areas of software development; back end, front end, database. mobile apps,
                                    until my current position as a fullstack programmer
                                    <br /><br />
                                    During my free time I spend researching about new technologies, creating personal projects, coding. I also help programmers to start their career</h6>
                            </p>
                        </IonText>

                    </IonCol>
                    <IonCol sizeXs="12" sizeMd="6" align-items-center className="container-image">
                        <img src={profile} alt="Perfil" className="image-profile" />
                    </IonCol>

                </IonRow>
                <IonRow style={{ marginTop: "-20%" }}>
                    <IonCol style={{
                        padding: "10%"
                    }}  className='title-head-presentation'>
                        <h3><b> A brief history</b></h3>
                    </IonCol>
                </IonRow>
                <IonRow style={{ marginTop: "0%" }} className="time-line-content">
                    <IonCol sizeMd="4"></IonCol>
                    <IonCol sizeMd="3"></IonCol>

                    <IonCol style={{
                        justifyContent: "center"
                    }}>
                        <div className="time-item " style={{
                            background: "#f7f779"
                        }}>

                            <p>
                                <h6><b>Siape S.A</b></h6>
                                Fullstack Developer
                                <br />
                                <b>02/2021 ~</b>
                            </p>
                        </div>

                    </IonCol>

                </IonRow>
                <IonRow className="time-line-content">
                    <IonCol sizeMd="5"></IonCol>

                    <IonCol style={{
                        justifyContent: "center"
                    }}>
                        <div className="time-item " style={{
                            background: "#96c6ea"
                        }}>

                            <p>
                                <h6><b>Pharmacy & Nutrition</b></h6>
                                ANDROID DEVELOPER

                                <br />
                                <b>06/2021</b>
                            </p>
                        </div>

                    </IonCol>

                </IonRow>
                <IonRow className="time-line-content">
                    <IonCol sizeMd="2"></IonCol>

                    <IonCol style={{
                        justifyContent: "center"
                    }}>
                        <div className="time-item " style={{
                            background: "#b597f6"
                        }}>

                            <p>
                                <h6><b>Fundación de ayuda por internet (FUNDAPI)</b></h6>
                                PHP Developer
                                <br />
                                <b>08/2020</b>
                            </p>
                        </div>

                    </IonCol>

                </IonRow>
                <IonRow  style={{
                        padding: "10%"
                    }}>
                    
                </IonRow>
            </IonGrid>

        </IonContent></>
    )
}

export default About;