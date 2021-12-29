import React from 'react'
import { Box, Card, CardContent, Link, Typography } from '@mui/material'
import { useContextContent } from '../../context/Content/contentContext'
import LinkIcon from '@mui/icons-material/Link'

const Notes = () => {
  const { notes } = useContextContent()

  return (
    <>
      {notes.map(note => (
        <Card
          variant="outlined"
          key={note.id}
          sx={{ mb: 1, bgcolor: note.archived ? '#E7EBF0FF' : undefined }}
        >
          <CardContent sx={{ paddingBottom: '16px !important' }}>
            {note.text && (
              <Box sx={{ whiteSpace: 'pre-wrap', mb: note.links ? 1 : 0 }}>{note.text}</Box>
            )}
            {note.links &&
              note.links.map(link => (
                <Box key={link.url}>
                  <Link
                    href={link.url}
                    target={'_blank'}
                    underline={'none'}
                    sx={{ display: 'flex' }}
                  >
                    <LinkIcon color={'secondary'} />
                    <Typography color={'secondary'}>{link.name}</Typography>
                  </Link>
                </Box>
              ))}
          </CardContent>
          {/*<CardActions sx={{ alignItems: 'flex-end' }}>*/}
          {/*  <IconButton size="small">Learn More</IconButton>*/}
          {/*</CardActions>*/}
        </Card>
      ))}
    </>
  )
}

export default Notes
