import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from "./index.module.css"
import {Link} from 'react-router-dom'

const ContactCard = props => {
  return(
    <div className={styles.contactcard}>
      <img src={props.avatar} alt='profile' style={{width:'20vh'}}/>
      <p>{props.name}</p>
      <p> <Link to='https://github.com/mtc-20'>@{props.github}</Link>
      </p>
    </div>
  );
};

// Just sample data
const contacts = [
  {name: 'Mamen Thomas Chembakasseril', github:'mtc-20', avatar:'https://avatars.githubusercontent.com/u/50070186?v=4'},
  {name: 'ABD', github:'mas'},

]

const Form = props  => {
  const [username, setUserName] = useState('')
  handleSubmit = event => {
    event.preventDefault()
    axios 
  }
}
function Hello() {
  return (
    <Layout title="HSRW Robotics Club">
      <h1>About the Club</h1>

      <div className={styles.content}>
      <p>
      Started in the summer of 2019 by a band of misfits.
      </p>
      </div>


      <h1>The Team</h1>
      {contacts.map(contact=>(
        <ContactCard
        avatar = {contact.avatar}
        name = {contact.name}
        github={contact.github}
        />
      ))}
      
    </Layout>
  );
}

export default Hello;