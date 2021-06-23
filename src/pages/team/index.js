import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from "./index.module.css"
import data from "../../components/data/team.json"



const ContactCard = props => {
  return(
    <div className={styles.contactcard}>
      <img src={props.avatar_url} alt='profile' style={{width:'20vh'}}/>
      <p>{props.name}</p>
      <p><a href={'https://github.com/'+props.login} target='_blank'>@{props.login}</a></p>
    </div>
  );
};

// Just sample data
// const contacts = [
//   {name: 'Mamen Thomas Chembakasseril', login:'mtc-20', avatar_url:'https://avatars.githubusercontent.com/u/50070186?v=4'},
//   {name: 'Quang', login:'quangnhat185', avatar_url:'https://avatars.githubusercontent.com/u/41325216?v=4'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},
//   {name: 'ABD', login:'hsrwrobotics'},

// ]

// const cotacts = Array.from(data).map(contact=>{})

// fetch(".\team.json")
// .then(res=>{return res.json();})
// .then(res=>{console.log(res)})
// .catch(err=>{console.error(err)})


function Hello() {
  // const { siteConfig } = useDocusaurusContext();

  
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

      {data.map(contact=>(
        <ContactCard
        avatar_url = {contact.avatar_url}
        name = {contact.name}
        login = {contact.login}
        />
        ))}
      </div>
      
    </Layout>
  );
}

export default Hello;