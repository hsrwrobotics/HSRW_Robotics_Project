import React from 'react';
import Layout from '@theme/Layout';
import styles from "./index.module.css"
import team from "../../components/data/team.json"


const ContactCard = props => {
  return(
    <div className={styles.contactcard}>
      <img src={props.avatar_url} alt='profile' style={{width:'20vh'}}/>
      <p>{props.name}</p>
      <p><a href={'https://github.com/'+props.login} target='_blank'>@{props.login}</a></p>
    </div>
  );
};


function Hello() {

  return (
    <Layout title="HSRW Robotics Club">
      {/* <h1>About the Club</h1> */}
      {/* <div className={styles.content}>
      <p>
      Introduction about the club
      </p>
      </div> */}

      <br></br>
      <br></br>
      <center><h1>The Team</h1></center>
      <br></br>
      <br></br>
      <div className={styles.cardContainer}>

      {team.map(contact=>(
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