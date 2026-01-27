import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const SearchAircraft = () => {
  const { t } = useTranslation();

  const [isForeign, setIsForeign] = useState(false);
  const [registration, setRegistration] = useState("");

  return (
    <Box
      component="section"
      sx={{
        mt: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 500 }}>
        {t("app.title")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: "100%",
          maxWidth: 420,
          flexDirection: { xs: "column", sm: "row" },
          padding: "1.5rem",
        }}
      >
        <div>
          <TextField
            fullWidth
            placeholder={t("app.placeholder")}
            value={registration}
            sx={{
              textAlign: "center",
            }}
            onChange={(e) => setRegistration(e.target.value.toUpperCase())}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isForeign}
                onChange={(e) => setIsForeign(e.target.checked)}
                size="small"
              />
            }
            label={t("app.foreign")}
          />
        </div>

        <Button
          variant="contained"
          disableElevation
          sx={{
            px: 4,
            height: 56,
            width: { xs: "100%", sm: "auto" },
          }}
        >
          {t("app.button")}
        </Button>
      </Box>
    </Box>
  );
};

export default SearchAircraft;
