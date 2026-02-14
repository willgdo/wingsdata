#!/bin/bash

echo "Baixando dados da ANAC..."

URL="https://sistemas.anac.gov.br/dadosabertos/Aeronaves/RAB/dados_aeronaves.json"

DATA_DIR="./data"
TEMP_FILE="$DATA_DIR/temp_dados.json"
FINAL_FILE="$DATA_DIR/data.json"
DATE_FILE="$DATA_DIR/update_date.txt"

mkdir -p $DATA_DIR
curl -s -o $TEMP_FILE $URL

if [ -s $TEMP_FILE ]; then
  echo "Download OK"
  date +"%d/%m/%Y %H:%M" > $DATE_FILE
  mv $TEMP_FILE $FINAL_FILE

  echo "Base atualizada com sucesso!"
else
  echo "Erro ao baixar dados da ANAC"
  rm -f $TEMP_FILE
  exit 1
fi
