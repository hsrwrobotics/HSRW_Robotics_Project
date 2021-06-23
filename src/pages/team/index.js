import React from 'react';
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



function Hello() {

  return (
    <Layout title="HSRW Robotics Club">
      <h1>About the Club</h1>

      <div className={styles.content}>
      <p>
        Started in the summer of 2019 by a band of misfits.


      </p>


      <p>

        
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