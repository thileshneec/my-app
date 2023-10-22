import AddRoadOutlinedIcon from "@mui/icons-material/AddRoadOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import DriveEtaOutlinedIcon from "@mui/icons-material/DriveEtaOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import FmdBadOutlinedIcon from "@mui/icons-material/FmdBadOutlined";
import HeartBrokenOutlinedIcon from "@mui/icons-material/HeartBrokenOutlined";
import HikingOutlinedIcon from "@mui/icons-material/HikingOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import WaterDamageOutlinedIcon from "@mui/icons-material/WaterDamageOutlined";
import Wifi2BarOutlinedIcon from "@mui/icons-material/Wifi2BarOutlined";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";

import "./NavBar.css";
import React, { useState } from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <div style={{ color: "white", display: "flex", alignItems: "center" }}>
        <NotificationsNoneOutlinedIcon
          style={{ color: "white", fontSize: 25 }}
        />
        <a
          href="#ActionItems"
          style={{ color: "white", fontSize: 25, marginLeft: "0px" }}
        >
          10 Action Items
        </a>
      </div>
      <div className="search-container">
        <form>
          <input type="text" placeholder="Search..." name="search" />
        </form>
      </div>
    </div>
  );
};
const handleUserJoinRequestsClick = () => {
  console.log("User Join Requests clicked!");
};
const handleSecondCardClick = () => {
  // Handle Second Card click here
};

const handleSmallerCardClick = (text) => {
  // Handle Smaller Card click here based on the text
};
const handleBookingRequestsClick = () => {
  // Add your logic here for handling the click on Booking Requests
};

const handleDeviceHealthAlertsClick = () => {
  // Add your logic here for handling the click on Device Health Alerts
};

const handleAccessDevicesCardClick = () => {
  // Add your logic here for handling the click on the Key Card
};
const cardContent = (
  <React.Fragment>
    <CardContent>
      <Typography
        sx={{ fontSize: 14, color: "darkslategray" }}
        gutterBottom
      ></Typography>
      <Typography variant="h5" component="div" sx={{ color: "darkslategray" }}>
        User Join Requests
      </Typography>
    </CardContent>
  </React.Fragment>
);

const cardContentMiddle = (
  <React.Fragment>
    <CardContent>
      <Typography
        sx={{ fontSize: 14, color: "darkslategray" }}
        gutterBottom
      ></Typography>
      <Typography variant="h5" component="div" sx={{ color: "darkslategray" }}>
        Booking Requests
      </Typography>
    </CardContent>
  </React.Fragment>
);

const cardContentLast = (
  <React.Fragment>
    <CardContent>
      <Typography
        sx={{ fontSize: 14, color: "darkred" }}
        gutterBottom
      ></Typography>
      <Typography variant="h5" component="div" sx={{ color: "darkred" }}>
        Device Health Alerts
      </Typography>
    </CardContent>
  </React.Fragment>
);

const OutlinedCardWithIcon = ({ Icon, text }) => {
  return (
    <Box sx={{ minWidth: 275, marginTop: 5 }}>
      <Card
        variant="outlined"
        sx={{
          borderColor:
            text === "Device Health Alerts" ? "darkred" : "darkslategray",
        }}
      >
        {text === "User Join Requests" && cardContent}
        {text === "Booking Requests" && cardContentMiddle}
        {text === "Device Health Alerts" && cardContentLast}
        <Icon
          style={{
            fontSize: 40,
            marginTop: 10,
            marginLeft: 10,
            color:
              text === "Device Health Alerts" ? "darkred" : "darkslategray",
          }}
        />
      </Card>
    </Box>
  );
};

const SmallerCard = ({ Icon, text, color }) => {
  return (
    <Card
      variant="outlined"
      sx={{ minWidth: 200, margin: 1, borderColor: color }}
    >
      <CardContent>
        <Typography variant="h6" style={{ color: color }}>
          {text}
        </Typography>
        <Icon style={{ fontSize: 40, color: color, marginTop: 10 }} />
      </CardContent>
    </Card>
  );
};

const SecondCard = () => {
  return (
    <Card variant="outlined" sx={{ margin: 1, borderColor: "darkred" }}>
      <CardContent>
        <Typography variant="h6" style={{ color: "darkred" }}>
          Incident Reports
        </Typography>
        <FmdBadOutlinedIcon
          style={{
            fontSize: 40,
            color: "darkred",
            marginTop: 0,
            display: "left",
          }}
        />
      </CardContent>
    </Card>
  );
};
const AccessDevicesCard = () => {
  return (
    <Card variant="outlined" sx={{ margin: 1, borderColor: "darkslategray" }}>
      <CardContent>
        <Typography variant="h6" style={{ color: "darkslategray" }}>
          Access Devices
        </Typography>
        <KeyOutlinedIcon
          style={{
            fontSize: 40,
            color: "darkslategray",
            marginTop: 10,
            display: "left",
          }}
        />
      </CardContent>
    </Card>
  );
};
const App = () => {
  const [showAccessDevicesCard, setShowAccessDevicesCard] = useState(false);

  const handleAccessDevicesClick = () => {
    setShowAccessDevicesCard(!showAccessDevicesCard);
  };

  return (
    <div>
      <NavBar />

      <Grid container spacing={5}>
        <Grid item xs={3.8} sx={{ margin: 1 }}>
          <OutlinedCardWithIcon
            Icon={PersonAddAltOutlinedIcon}
            text="User Join Requests"
            onClick={handleUserJoinRequestsClick}
          />
        </Grid>
        <Grid item xs={3.8} sx={{ margin: 1 }}>
          <OutlinedCardWithIcon
            Icon={CalendarTodayOutlinedIcon}
            text="Booking Requests"
            onClick={handleBookingRequestsClick}
          />
        </Grid>
        <Grid item xs={3.8} sx={{ margin: 1 }}>
          <OutlinedCardWithIcon
            Icon={HeartBrokenOutlinedIcon}
            text="Device Health Alerts"
            onClick={handleDeviceHealthAlertsClick}
          />
        </Grid>

        <Grid item xs={12}>
          <Card
            variant="outlined"
            sx={{ margin: 1, borderColor: "darkslategray" }}
          >
            <CardContent>
              <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
                <AccessDevicesCard onClick={handleAccessDevicesCardClick} />

                <SmallerCard
                  Icon={EmojiEmotionsOutlinedIcon}
                  text="1"
                  color="darkslategray"
                />
                <SmallerCard
                  Icon={PhoneAndroidOutlinedIcon}
                  text="2"
                  color="darkslategray"
                />
                <SmallerCard
                  Icon={Wifi2BarOutlinedIcon}
                  text="0"
                  color="lightgray"
                />
                <SmallerCard
                  Icon={DriveEtaOutlinedIcon}
                  text="0"
                  color="lightgray"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={20}>
          <Card variant="outlined" sx={{ margin: 1, borderColor: "darkred" }}>
            <CardContent>
              <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
                <SecondCard onClick={handleSecondCardClick} />

                <SmallerCard
                  Icon={HikingOutlinedIcon}
                  text="1"
                  color="darkred"
                  onClick={() => handleSmallerCardClick("1")}
                />
                <SmallerCard
                  Icon={EmojiObjectsOutlinedIcon}
                  text="2"
                  color="lightgray"
                  onClick={() => handleSmallerCardClick("2")}
                />
                <SmallerCard
                  Icon={Wifi2BarOutlinedIcon}
                  text="0"
                  color="lightgray"
                  onClick={() => handleSmallerCardClick("0")}
                />
                <SmallerCard
                  Icon={EmojiObjectsOutlinedIcon}
                  text="0"
                  color="lightgray"
                />
                <SmallerCard
                  Icon={AddRoadOutlinedIcon}
                  text="0"
                  color="darkred"
                />
                <SmallerCard
                  Icon={WaterDamageOutlinedIcon}
                  text="0"
                  color="lightgray"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
