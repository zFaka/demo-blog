import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import '../utils/styles.css';

class IndexPage extends React.Component {
  render() {
    const siteTitle = "F A K A"

    return (
      <Layout 
        location={this.props.location} 
        title={siteTitle}
        className='fullscreen'
      >
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {/*<img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />*/}

        <h1>
          SmplCmplx
        </h1>

        <p style={{marginBottom:'20px'}}>
          IT Pro currently focused on Web development, UI and UX.  
        </p>
        <p style={{marginBottom:'20px'}}>
          I Work with the MERN stack, Redux, Sass, Firebase, Gatsby, Figma, CSS Grid, Flexbox, CSS Animations.
        </p>
        <p>
          My learning and reflections on the following topics:
          <div 
            display='inline' 
            justifyContent='center'
            paddingTop='20px'
            marginBottom='10px'
          >
            <ul style={{
              fontWeight:'700', 
              verticalAlign: 'top', 
              marginTop:'10px', 
              marginLeft:'10px'
            }}>
              <li
                style={{display:'inline-block', 
                  verticalAlign: 'top', 
                  float:'left', 
                  width:'40%'}}
              >WebDev</li>
              <li style={{display:'inline-block', 
                verticalAlign: 'top', 
                float:'left', 
                width:'40%'}}
              >WebSec</li>
              <li style={{display:'inline-block', 
                verticalAlign: 'top', 
                float:'left', 
                width:'40%'}}
              >Health</li>
              <li style={{display:'inline-block', 
                verticalAlign: 'top', 
                float:'left', 
                width:'40%'}}
              >Wellness</li>
              <li style={{display:'inline-block', 
                verticalAlign: 'top', 
                float:'left', 
                width:'40%'}}
              >Finance</li>
              <li style={{display:'inline-block', 
                verticalAlign: 'top', 
                width:'40%'}}
              >Business</li>
            </ul>
          </div>
        </p>

        <div>
        <p style={{marginBottom:'20px'}}>Now build your own way!</p>
        </div>


        <div style={{
          display:'flex', 
          justifyContent:'space-around'
        }}>

          <div
            width='100px'
            height='100px'
            display='flex-start'
          >
            <Link to="/blog/">
              <Button 
                fontSize='25px' 
                color='black' 
                background='white'
              >
                IN
                {/*<BlurOnIcon style={{color:'#ea5867'}} float='left'/>*/}
              </Button>
            </Link>
          </div>

          <div 
            width='100px'
            height='100px'
            display='center'
          >
            <span role='img' aria-label="brain emoji"
              style={{
                textDecoration: 'none',
                cursor: 'default',
                userSelect:'none', 
                background: "white",
                fontSize: "65px",
                fontWeight: "600",
                borderColor:'black', 
                padding: "0px 20px", 
              }}>
              🧠
            </span>
          </div>

          <div
            width='100px'
            height='100px'
            display='flex-end'
          >
            <Link to="/proyects/">
              <Button 
                fontSize='25px' 
                color='black' 
                background='white'
              >
                {/*
              <BlurOnIcon style={{color:'#ea5867'}}/>
              */}
                OUT
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
