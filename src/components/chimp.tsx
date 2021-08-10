/** @jsx jsx */
import React from "react"
import { jsx, Box, Label, Input, Button } from 'theme-ui'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export const Chimp = () => {
  const [email, setEmail] = React.useState('')
  const [submitRes, setSubmitRes] = React.useState({})

  const subscribe = async (email: string) => {
    try {
      setSubmitRes(await addToMailchimp(email))
    } catch (e) {
      setSubmitRes(e)
    }

  }
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      subscribe(email)
    }

    return (
      <>
        <Box as="form" onSubmit={handleSubmit}>
        <Label htmlFor="email">email</Label>
        <Input name="email" id="email" mb={3} value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <Button onClick={handleSubmit}>Subscribe</Button>
      </Box>
      <div dangerouslySetInnerHTML={{__html: submitRes.msg}} />
      </>

  )

}
