import React, { useState } from 'react'
import { Box } from 'grommet'
import { Loading, Button } from 'forge-core'
import { useMutation, useQuery } from 'react-apollo'
import { useHistory, useParams } from 'react-router'
import { INCIDENT_Q, UPDATE_INCIDENT } from './queries'
import { IncidentForm } from './CreateIncident'

function UpdateInner({incident}) {
  let history = useHistory()
  const [attributes, setAttributes] = useState({
    title: incident.title, 
    description: incident.description, 
    severity: incident.severity,
    status: incident.status
  })

  const [mutation, {loading}] = useMutation(UPDATE_INCIDENT, {
    variables: {id: incident.id, attributes},
    onCompleted: () => history.push(`/incidents/${incident.id}`)
  })

  return (
    <Box gap='small' pad='small' fill>
      <IncidentForm attributes={attributes} setAttributes={setAttributes} statusEdit />
      <Box direction='row' justify='end'>
        <Button loading={loading} label='Update' onClick={mutation} />
      </Box>
    </Box>
  )
}

export function UpdateIncident() {
  const {incidentId} = useParams()
  const {data} = useQuery(INCIDENT_Q, {variables: {id: incidentId}})

  if (!data) return <Loading />

  return <UpdateInner incident={data.incident} />
}