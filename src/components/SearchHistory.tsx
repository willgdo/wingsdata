import { Box, Typography, Chip, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

const mockHistory = ["PT-MUG", "PP-ABC", "N123AB"];

const SearchHistory = () => {
  const { t } = useTranslation();

  const hasHistory = mockHistory.length > 0;

  return (
    <Box
      component="section"
      sx={{
        m: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
        {t("history.title")}
      </Typography>

      {hasHistory ? (
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          justifyContent="center"
        >
          {mockHistory.map((reg) => (
            <Chip key={reg} label={reg} clickable variant="outlined" />
          ))}
        </Stack>
      ) : (
        <Typography variant="body2" sx={{ opacity: 0.6 }}>
          {t("history.empty")}
        </Typography>
      )}
    </Box>
  );
};

export default SearchHistory;
