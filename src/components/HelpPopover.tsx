import { Box, IconButton, Popover, Typography } from "@mui/material";
import { useState } from "react";

const HelpPopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  return (
    <>
      {/* Floating button */}
      <Box
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1300,
        }}
      >
        <IconButton
          color="primary"
          onClick={(e) => setAnchorEl(e.currentTarget)}
          sx={{
            bgcolor: "background.paper",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <IconButton>
            <Typography fontWeight={600}>?</Typography>
          </IconButton>
        </IconButton>
      </Box>

      {/* Popover */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Box sx={{ p: 2, maxWidth: 260 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Olá
          </Typography>

          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Essa página foi desenvolvida para pessoas que apreciam a aviação,
            ajudando na busca de informações de aeronaves brasileiras, tendo
            como fonte o{" "}
            <a
              href="https://sistemas.anac.gov.br/aeronaves/cons_rab.asp"
              target="_blanket"
            >
              RAB
            </a>
            .
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Criado por <strong>Willian Oliveira</strong> <br />
            Desenvolvedor | Piloto privado willian.oliveira14@fatec.sp.gov.br
          </Typography>
        </Box>
      </Popover>
    </>
  );
};

export default HelpPopover;
