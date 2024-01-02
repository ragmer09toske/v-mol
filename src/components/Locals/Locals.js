import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import django from "../../assets/images/pnp.png"
import shell_navs from "../../assets/images/shell navigation.png"
import JS_pracs from "../../assets/images/checkers.png"
import Front_Stack from "../../assets/images/shoprite.png"
import back_Stack from "../../assets/images/pep.png" 

const Locals = () => {
  return (
    <div className="py-5 flex flex-col md:flex-row items-center justify-between">
      <Box className="custom-box" sx={{
            display: "flex",
            gap: 4,
            justifyContent: "center",
            alignItems: "center",
            border: "solid",
            borderColor: "rgba(169, 169, 169, 0)",
            overflow: "scroll",
            height: 150,
            pt: 5,
            pl: 25,
            pr: 4,
            // borderRadius: 5,
            position: "relative"
          }}>
            <Box className="justify-content-md-center">
              <Box className="text-center" lg="8" md="12" >
              </Box>
              <Box sx={{
                width: 150,
                display: "flex",
                justifyContent: "center",
                mt: -7,
                zIndex: 1
              }}>
                  <img src={shell_navs} width={300} style={{ borderRadius: 3}} alt=""/>
              </Box>
            </Box>

            <Box className="justify-content-md-center">
              <Box className="text-center" lg="8" md="12">
                
              </Box>
              <Box sx={{
                width: 150,
                display: "flex",
                justifyContent: "center",
                mt: -7
              }}>
                  <img src={django} width={300} height={"auto"} style={{ borderRadius: 3}} alt=""/>
              </Box>
            </Box>

            <Box className="justify-content-md-center">
              <Box className="text-center" lg="8" md="12">
              </Box>
              <Box sx={{
                width: 150,
                display: "flex",
                justifyContent: "center",
                mt: -7
              }}>
                  <img src={JS_pracs} width={300} style={{ borderRadius: 3}} alt=""/>
              </Box>
            </Box>

            <Box className="justify-content-md-center">
              <Box className="text-center" lg="8" md="12">
              </Box>
              <Box sx={{
                width: 150,
                display: "flex",
                justifyContent: "center",
                mt: -7
              }}>
                  <img src={Front_Stack} width={300} style={{ borderRadius: 3}} alt=""/>
              </Box>
            </Box>

            <Box className="justify-content-md-center">
              <Box className="text-center" lg="8" md="12">
              </Box>
              <Box sx={{
                width: 150,
                display: "flex",
                justifyContent: "center",
                mt: -7
              }}>
                  <img src={back_Stack} width={200} style={{ borderRadius: 3}} alt=""/>
              </Box>
            </Box>
          </Box>
    </div>
  );
};

export default Locals;
