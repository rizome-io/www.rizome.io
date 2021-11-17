/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import { Container, Card, Flex, Box, Themed, useThemeUI } from 'theme-ui'
import { Header } from '../components/header'
import { Seo } from '../components/seo'
import { Chimp } from '../components/chimp'
import { PoolInfo } from '../components/pool-info'

const st = {
  scrn: {
    minHeight: '100vh',
    "> div": {
      my: 'auto',
      mx: ['1em', '2em', '10em', '18em', '20em']
    }
  }
}

const IndexPage = () => {
  const { theme: {rawColors: {modes: {dark, light}}} } = useThemeUI()
  React.useEffect(() => {
    // const handleScroll = (e) => e.preventDefault()
    // document.addEventListener('scroll', handleScroll, { passive: false });
    // document.addEventListener('wheel', handleScroll, { passive: false });
    // document.addEventListener('touchmove', handleScroll, { passive: false });
     if(typeof window !== 'undefined' && window.document) {
       require('../bg.js')
       /* Your script here... */
 }
    }

  )
  return (
    <>
      <Seo title=" " />
      <Header />
      <Container>
        <canvas id="stars" width="300" height="300" style={{ position: 'absolute', background: dark.bg, zIndex: -1 }} />
        <Flex sx={{ ...st.scrn, color: dark.text }}>
          <Card>
            <Themed.h1 sx={{ color: dark.text }} >
              Architecture for <br />distributed ledger tech
            </Themed.h1>
            <Themed.h2 sx={{ color: dark.text }}>
              We provide reliable design and infrastructure <br />
              solutions for projects powered by <Themed.em>blockchain</Themed.em>.
            </Themed.h2>
          </Card>
        </Flex>

        <Flex sx={{ ...st.scrn, ...light, color: light.text }} id="about">
          <Card>
            <Themed.h2 sx={{ color: light.text }}>
              About Us
            </Themed.h2>
            <p sx={{ fontSize: 3 }}>
              Rizome.io aligns with the technological stack of the Cardano Foundation
              that utilizes the practices and tools from the Cardano core codebase.
              We embrace and integrate rigorous testing, peer review and formal method
              in our development cycle to provide exceptional <Themed.em>resilience and security.</Themed.em>
              <br /><br />
              With over a decade of experience gained in software development and
              years actively involved in the blockchain space, we have proudly earned
              the expertise necessary for building and maintaining infrastructures
              for distributed and large-scale systems.
              <br /><br />
              Rizome.io represents the fruition of hard work
              and scrupulous study that lead us to our core values. We especially
              highlight the importance of <Themed.em>reproducible builds</Themed.em> and
              thorough <Themed.em>testability</Themed.em>.
              After a long journey of dedication, we are excited to offer
              an exceptional user experience that breathes life into paradigm-shifting ideas.
            </p>
          </Card>
        </Flex>


        <Flex sx={{ ...st.scrn, color: dark.text, bg: dark.bg }} id="vision">
          <Box>
            <Themed.h2 sx={{ color: dark.text }}>Our Vision</Themed.h2>
            <Flex sx={{ flexWrap: 'wrap', mt: '2em' }}>
              <Card sx={{ flex: '1 1', mr: '4em', minWidth: '20em' }}>
                <Themed.h3>Ideology</Themed.h3>
                <p sx={{ fontSize: 3 }}>
                  We believe that a strong theoretical foundation and
                  forward-thinking planning skills are the bedrock for
                  a sustainable and reliable system. That is why we decided
                  to support the Cardano project - it follows formal specifications,
                  peer-reviewed protocols, and a scientific methodology in its
                  development.

                </p>
              </Card>
              <Card sx={{ flex: '1 1', minWidth: '20em' }}>
                <Themed.h3>Reliability</Themed.h3>
                <p sx={{ fontSize: 3 }}>
                  Rizome.io aligns with the technological stack
                  of the Cardano Foundation that utilizes the
                  practices and tools from the Cardano core codebase.
                  We embrace and apply these to our infrastructure
                  and tech solutions.
                </p>
              </Card>
            </Flex>
          </Box>
        </Flex>

        <Flex sx={{ ...st.scrn, ...light, color: light.text }} id="pool">
          <Card>
            <Themed.h2 sx={{ color: light.text }}>
              Lucid stake pool
            </Themed.h2>

            <PoolInfo />
            <Box onClick={() => navigator.clipboard.writeText('Copy this text to clipboard')}>
            </Box>
            <Flex sx={{ flexWrap: 'wrap', mt: '2em' }}>
              <Card sx={{ flex: '1 1', mr: '2em', minWidth: '10em' }}>
                <Themed.h3>Independent Operation</Themed.h3>
                <p sx={{ fontSize: 3 }}>
                  value decentralization and encourage you to stake with smaller pools
                </p>
              </Card>
              <Card sx={{ flex: '1 1', mr: '2em', minWidth: '10em' }}>
                <Themed.h3>Dedicated Servers</Themed.h3>
                <p sx={{ fontSize: 3 }}>
                  Ryzen 7 4800H - main servers, raspberry Pi - backup servers, 1Gb/s connection
                </p>
              </Card>
              <Card sx={{ flex: '1 1', minWidth: '10em' }}>
                <Themed.h3>Security</Themed.h3>
                <p sx={{ fontSize: 3 }}>
                  no root access, cryptographic key authorization, ufw, fail2ban, vpc, dnssec, no private keys on servers
                </p>
              </Card>
            </Flex>
          </Card>
        </Flex>

        <Flex sx={{ alignItems: 'center', justifyContent: 'center', ...st.scrn, color: dark.text, bg: dark.bg }} id="contact">
          <Box>
            <Themed.h2 sx={{ color: dark.text }}>Newsletter</Themed.h2>
            <p>We privide only valuable updates to our subscribers</p>
            <Chimp />
          </Box>
        </Flex>

      </Container>
    </>
  )
}

export default IndexPage
