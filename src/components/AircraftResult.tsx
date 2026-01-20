import { Card, CardContent, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const mockAircraft = {
  registration: "PR-GTI",
  manufacturer: "BOEING COMPANY",
  model: "737-8EH",
  operator: "GOL LINHAS AEREAS SA",
  year: "2006",
  status: "Ativa",
};

const hasResult = !!mockAircraft;

const AircraftResult = () => {
  const { t } = useTranslation();

  return (
    <Box component="section" sx={{ mt: 6, maxWidth: 800, mx: "auto" }}>
      {hasResult ? (
        <Card variant="outlined">
          <CardContent
            sx={{
              display: "flex",
              gap: 3,
              alignItems: "stretch",
              color: "white",
            }}
          >
            {/* Image / Empty state */}
            <Box
              sx={{
                width: 480,
                height: 320,
                flexShrink: 0,
                overflow: "hidden",
                borderRadius: 1,
                bgcolor: "background.paper",
              }}
            >
              <img
                src="https://cdn.jetphotos.com/full/5/863199_1768855908.jpg"
                alt={mockAircraft.registration}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Info */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                {mockAircraft.registration}
              </Typography>

              <Typography variant="body2">
                <strong>{t("result.manufacturer")}:</strong>{" "}
                {mockAircraft.manufacturer}
              </Typography>

              <Typography variant="body2">
                <strong>{t("result.model")}:</strong> {mockAircraft.model}
              </Typography>

              <Typography variant="body2">
                <strong>{t("result.operator")}:</strong> {mockAircraft.operator}
              </Typography>

              <Typography variant="body2">
                <strong>{t("result.year")}:</strong> {mockAircraft.year}
              </Typography>

              <Typography variant="body2">
                <strong>{t("result.status")}:</strong> {mockAircraft.status}
              </Typography>
              <br />
              <Typography variant="caption">Image by Jetphotos.com</Typography>
            </Box>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="body2" sx={{ opacity: 0.6 }}>
          {t("history.empty")}
        </Typography>
      )}
    </Box>
  );
};

export default AircraftResult;
