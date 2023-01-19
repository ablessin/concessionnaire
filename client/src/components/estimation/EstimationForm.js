import * as React from "react";
import Style from "./Estimation.module.css";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

export default function EstimationForm() {
  const [fuel, setFuel] = React.useState("");
  const [year, setYear] = React.useState(dayjs());
  const [brand, setBrand] = React.useState("");
  const [model, setModel] = React.useState("");
  const [modelsList, setModelsList] = React.useState({});

  const handleFuelChange = (event) => {
    setFuel(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.innerText);
    setModelsList(getModels());
  };

  const handleModelChange = (event) => {
    setModel(event.target.innerText);
  };

  let brandsList = getBrands();

  ///////////////////
  // BRAND REQUEST //
  ///////////////////
  function getBrands() {
    let Request = new XMLHttpRequest();
    let RequestResponse = [];
    let resultList = [];

    Request.open(
      "GET",
      "https://private-anon-8c67e65a85-carsapi1.apiary-mock.com/manufacturers"
    );

    Request.onreadystatechange = function () {
      if (this.readyState === 4) {
        RequestResponse = JSON.parse(this.responseText);

        //loop through response to save brand name to an arraylist that can populate the brand select option
        Object.keys(RequestResponse).forEach((element) => {
          const elem = [];

          elem.label = RequestResponse[element].name;
          elem.id = RequestResponse[element].id;

          resultList.push(elem);
        });
      }
    };

    Request.send();

    return resultList;
  }

  ////////////////////
  // MODELS REQUEST //
  ////////////////////
  function getModels() {
    let Request = new XMLHttpRequest();
    let RequestResponse = [];
    let resultList = [];

    Request.open(
      "GET",
      "https://private-anon-8c67e65a85-carsapi1.apiary-mock.com/cars"
    );

    Request.onreadystatechange = function () {
      if (this.readyState === 4) {
        RequestResponse = JSON.parse(this.responseText);

        //loop through response to save model name to an arraylist that can populate the brand select option
        Object.keys(RequestResponse).forEach((element) => {
          const elem = [];

          elem.label = RequestResponse[element].model;
          elem.id = RequestResponse[element].id;

          console.log("brand : " + brand);
          console.log("element : " + element.car);
          console.log("elem : " + elem);

          if (brand == element.car) {
            resultList.push(elem);
          }
        });
      }
    };

    Request.send();

    return resultList;
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50%" },
        }}
        noValidate
        autoComplete="on"
      >
        <div className={Style.wrapper}>
          {/* Marque */}
          <Autocomplete
            id="marque"
            renderInput={(params) => <TextField {...params} label="Marque" />}
            onChange={handleBrandChange}
            options={brandsList}
          />

          {/* Modele */}
          <Autocomplete
            disablePortal
            id="model"
            renderInput={(params) => <TextField {...params} label="Modèle" />}
            onChange={handleModelChange}
            options={modelsList}
          />

          {/* Annee du modele */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DatePicker
                disableFuture
                id="anneeModele"
                label={"Année du modèle"}
                openTo="year"
                views={["year", "month", "day"]}
                value={year}
                onChange={(newYear) => {
                  setYear(newYear);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>

          {/* Mise en circulation */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DatePicker
                disableFuture
                id="anneeMiseEnCirculation"
                label={"Mise en circulation"}
                openTo="year"
                views={["year", "month", "day"]}
                value={year}
                onChange={handleYearChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>

          {/* Kilometrage */}
          <TextField
            id="kilometrage"
            label={"Kilométrage"}
            variant={"standard"}
            type={"number"}
          />

          {/* Carburant */}
          <FormControl>
            <InputLabel id="selectCarburant">Carburant</InputLabel>
            <Select
              labelId="selectCarburant"
              id="selectCarburant"
              value={fuel}
              label="Carburant"
              onChange={handleFuelChange}
            >
              <MenuItem value={1}>Essence</MenuItem>
              <MenuItem value={2}>Diesel</MenuItem>
              <MenuItem value={3}>Hybride</MenuItem>
              <MenuItem value={4}>Electrique</MenuItem>
              <MenuItem value={5}>GPL</MenuItem>
              <MenuItem value={6}>Hydrogène</MenuItem>
              <MenuItem value={7}>Autre</MenuItem>
            </Select>
          </FormControl>

          {/* Transmission */}
          <FormControl>
            <FormLabel id="transmissionRadioButtonLabel">
              Transmission
            </FormLabel>
            <RadioGroup
              aria-labelledby="transmissionRadioButtonLabel"
              defaultValue="manuelle"
              name="transmissionRadioButton"
              row
            >
              <FormControlLabel
                value="manuelle"
                control={<Radio />}
                label="Manuelle"
              />
              <FormControlLabel
                value="automatique"
                control={<Radio />}
                label="Automatique"
              />
            </RadioGroup>
          </FormControl>

          {/* Puissance */}
          <TextField
            id="puissance"
            label={"Puissance (Cv)"}
            variant={"standard"}
            type={"number"}
          />

          <br />
          <Button variant="contained" color="success">
            Valider
          </Button>
        </div>
      </Box>
    </>
  );
}
