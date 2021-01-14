import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

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
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to your new Gatsby website. You are on your home page.</p>
        <p>
          This starter comes out of the box with styled components and Gatsby's
          default starter blog running on Netlify CMS.
        </p>
        <p>Now go build something great!</p>
        <div style={{
          display:'flex', 
          justifyContent:'space-around', 
        }}>

          <Link to="/blog/">
            <Button 
              marginTop="0 auto" 
              fontSize='25px' 
              color='black' 
              background='white'
            >
              IN
              {/*<BlurOnIcon style={{color:'#ea5867'}} float='left'/>*/}
            </Button>
          </Link>
          <span role='img' aria-label="brain emoji"
            style={{
              display: 'block',
              border: 'none',
              textAlign: 'center',
              textDecoration: 'none',
              cursor: 'default',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              userSelect:'select', 

              background: "white",
              fontSize: "65px",
              fontWeight: "600",
              borderRadius: "90px",
              borderColor:'black', 
              padding: "0px 20px", 
            }}>
            🧠
          </span>
          <Link to="/proyects/">
            <Button 
              fontSize='25px' 
              color='black' 
              background='white'
              display='block'
              alignItems='center'
              justifyContent='center'
            >
              {/*
              <BlurOnIcon style={{color:'#ea5867'}}/>
              */}
              OUT
            </Button>
          </Link>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
