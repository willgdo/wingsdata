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
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, letterSpacing: "0.08em" }}
        >
          WingsData
        </Typography>

        <ToggleButtonGroup
          value={i18n.language}
          exclusive
          onChange={handleLanguageChange}
          size="medium"
        >
          <ToggleButton value="pt">PT</ToggleButton>
          <ToggleButton value="en">EN</ToggleButton>
        </ToggleButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
