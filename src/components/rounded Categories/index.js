import { Box } from '@mui/material'
import React from 'react'

export const RoundedCategories = () => {
  return (
    <Box sx={{
        overflow: "scroll"
    }}>
    <Box sx={{
        display: "flex",
        gap: 5,
        p: 2,
        minWidth: "120vw"
    }}>
        <Box sx={{
            border: "solid",
            borderColor: "black",
            borderRadius: 5,
            p: "0 5px 0 5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            PBV
        </Box>
        <Box sx={{
            border: "solid",
            borderColor: "black",
            borderRadius: 5,
            p: "0 5px 0 5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            Disabled
        </Box>
        <Box sx={{
            border: "solid",
            borderColor: "black",
            borderRadius: 5,
            p: "0 5px 0 5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            Tech Corner
        </Box>
        <Box sx={{
            border: "solid",
            borderColor: "black",
            borderRadius: 5,
            p: "0 5px 0 5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            Lesotho Arts
        </Box>
    </Box>
    </Box>
  )
}
