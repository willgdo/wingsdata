import {
  AppBar,
  Toolbar,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (
    _: React.MouseEvent<HTMLElement>,
    value: "pt" | "en" | null,
  ) => {
    if (value) {
      i18n.changeLanguage(value);
    }
  };

  return (
    <AppBar component="header" position="static" elevation={0}>
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
          padding: "1.5rem 1rem",
        }}
      >
        <Typography
          variant="h1"
          component="div"
          sx={{
            fontFamily: "Pacifico",
            fontSize: "1.5rem",
            lineHeight: 1.2,
            color: "text.secondary",
          }}
        >
          Wings <br /> &nbsp;&nbsp;&nbsp;&nbsp;Data
        </Typography>

        <ToggleButtonGroup
          value={i18n.language}
          exclusive
          onChange={handleLanguageChange}
          size="medium"
          sx={{
            backgroundColor: "text.secondary",
          }}
        >
          <ToggleButton value="pt">PT</ToggleButton>
          <ToggleButton value="en">EN</ToggleButton>
        </ToggleButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
