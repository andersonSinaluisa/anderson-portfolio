import { IonCol, IonContent, IonHeader, IonRow, IonText } from '@ionic/react';
import React from 'react';
import './FileSystem.css'
import file_movil from '../../../assets/images/file-movile.png'
import file_movil1 from '../../../assets/images/file-movile-1.png'

const FileSystem: React.FC = () => {
    return (
        <>

            <IonContent>
                <IonRow className='header-bread'>
                    <IonCol style={{ margin: "15%" }}>
                        <IonText className='title-head-presentation'>
                            File System
                        </IonText>
                        <br />
                        <IonText>
                            <h3>{"Frontend-Backend • Web Application • 2022"}</h3>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol style={{ marginTop: "-5%" }}>

                        <div className="docs-demo-device ios">
                            <figure><svg className="docs-demo-device__ios-notch" viewBox="0 0 219 31">
                                <path d="M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z" fill-rule="evenodd">
                                </path></svg>                                <iframe src="https://filesystem144.herokuapp.com/" ></iframe>
                            </figure>
                        </div>
                    </IonCol>
                    <IonCol>
                        <IonText className='title-head-presentation'>
                            The Problem
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>

                    </IonCol>
                </IonRow>

            </IonContent>
        </>

    )
}

export default FileSystem;