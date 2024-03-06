import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Grid } from "@mui/material";
import TopBar from "@/components/topbar";

import SideBar from "@/components/sidebar";
import Footer from "@/components/footer";
import MainContent from "@/components/main-content";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box>
      <TopBar />
      <Grid container>
        <Grid item xs={12} sm={8}>
          <MainContent />
        </Grid>

        {/* second grid  */}
        <Grid item xs={12} sm={4}>
          <SideBar></SideBar>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
