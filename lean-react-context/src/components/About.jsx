import React,{ useContext } from 'react'
import { DataContext } from '../App'
import { Container , SkillCom } from '../styles/styles'




function About() {
    const data = useContext(DataContext);
  return (
    <Container>
        <h1>About</h1>
        <hr />
        <div style={{ textAlign: 'center', margin: '1rem 0' }}> 
        <img style={{ borderRadius: '100%' }} src={data.basics?.picture} width='200px'></img>
        <ul style={{ listStyle: 'none'}}>
            <li style={{ fontSize: '1.5rem', marginBottom: '1rem'}}>Name: {data.basics?.name}</li>
            <li>{data.basics?.headline}</li>
            <li>Region: {data.basics?.region}</li>
            <li>{data.basics?.summary}</li>
            <li>My website: <a href={data.basics?.website} target='_blank'>{data.basics?.website}</a></li>
        </ul>
        <hr />
        <h3>My Skills</h3>
        <SkillCom>
            {data.skills?.map((val, idx) => (
                <li key={idx}>
                    <strong>{val.name}</strong>
                    <br />
                    Level: {val.level}
                </li>
            ))}
        </SkillCom>
        </div>
    </Container>
  )
}

export default About