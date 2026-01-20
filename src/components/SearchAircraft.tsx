import {
  Box,
  TextField,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const SearchAircraft = () => {
  const { t } = useTranslation();

  const [registryType, setRegistryType] = useState<"br" | "foreign">("br");
  const [registration, setRegistration] = useState("");

  return (
    <Box
      component="section"
      sx={{
        mt: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 500 }}>
        {t("app.title")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: "100%",
          maxWidth: 420,
        }}
      >
        <TextField
          fullWidth
          placeholder={t("app.placeholder")}
          value={registration}
          sx={{
            textAlign: "center",
          }}
          onChange={(e) => setRegistration(e.target.value.toUpperCase())}
        />

        <Button variant="contained" disableElevation sx={{ px: 4 }}>
          {t("app.button")}
        </Button>
      </Box>

      <RadioGroup
        row
        value={registryType}
        onChange={(e) => setRegistryType(e.target.value as "br" | "foreign")}
      >
        <FormControlLabel
          value="br"
          control={<Radio size="small" />}
          label={t("app.brazilian")}
        />
        <FormControlLabel
          value="foreign"
          control={<Radio size="small" />}
          label={t("app.foreign")}
        />
      </RadioGroup>
    </Box>
  );
};

export default SearchAircraft;
