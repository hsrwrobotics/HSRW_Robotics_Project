import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from "./index.module.css"




const ContactCard = props => {
  return(
    <div className={styles.contactcard}>
      <img src={props.avatar} alt='profile' style={{width:'20vh'}}/>
      <p>{props.name}</p>
      <p><a href={'https://github.com/'+props.github} target='_blank'>@{props.github}</a></p>
    </div>
  );
};

// Just sample data
const contacts = [
  {name: 'Mamen Thomas Chembakasseril', github:'mtc-20', ghlink:'https://github.com/mtc-20', avatar:'https://avatars.githubusercontent.com/u/50070186?v=4'},
  {name: 'Quang', github:'quangnhat185',avatar:'https://avatars.githubusercontent.com/u/41325216?v=4'},
  {name: 'ABD', github:'hsrwrobotics'},
  {name: 'ABD', github:'hsrwrobotics'},
  {name: 'ABD', github:'hsrwrobotics'},
  {name: 'ABD', github:'hsrwrobotics'},
  {name: 'ABD', github:'hsrwrobotics'},
  {name: 'ABD', github:'hsrwrobotics'},
  {name: 'ABD', github:'hsrwrobotics'},
  {name: 'ABD', github:'hsrwrobotics'},
  {name: 'ABD', github:'hsrwrobotics'},
  {name: 'ABD', github:'hsrwrobotics'},
  {name: 'ABD', github:'hsrwrobotics'},
  {name: 'ABD', github:'hsrwrobotics'},
  {name: 'ABD', github:'hsrwrobotics'},
  {name: 'ABD', github:'hsrwrobotics'},
  {name: 'ABD', github:'hsrwrobotics'},
  {name: 'ABD', github:'hsrwrobotics'},
  {name: 'ABD', github:'hsrwrobotics'},
  {name: 'ABD', github:'hsrwrobotics'},
  {name: 'ABD', github:'hsrwrobotics'},
  {name: 'ABD', github:'hsrwrobotics'},
  {name: 'ABD', github:'hsrwrobotics'},

]




function Hello() {

  
  return (
    <Layout title="HSRW Robotics Club">
      <h1>About the Club</h1>

      <div className={styles.content}>
      <p>
      Started in the summer of 2019 by a band of misfits.

      Pick
      <a href='https://github.com/hsrwrobotics'>A</a>
      over and out.
      </p>
      </div>


      <h1>The Team</h1>
      <div className={styles.cardContainer}>

      {contacts.map(contact=>(
        <ContactCard
        avatar = {contact.avatar}
        name = {contact.name}
        github={contact.github}
        />
        ))}
      </div>
      
    </Layout>
  );
}

export default Hello;