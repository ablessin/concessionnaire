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
  const [value, setValue] = React.useState(dayjs());
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className={Style.wrapper}>
          {/* Marque */}
          <Autocomplete
            disablePortal
            id="marque"
            options={brandsList}
            renderInput={(params) => <TextField {...params} label="Marque" />}
          />

          {/* Modele */}
          <Autocomplete
            disablePortal
            id="model"
            options={modelsList}
            renderInput={(params) => <TextField {...params} label="Modèle" />}
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
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
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
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
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
              value={age}
              label="Carburant"
              onChange={handleChange}
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
      // console.log('Status:', this.status);
      // console.log('Headers:', this.getAllResponseHeaders());
      // console.log('Body:', this.responseText);
      RequestResponse = JSON.parse(this.responseText);

      //loop through response to save brand name to an arraylist that can populate the brand select option
      RequestResponse.map((element) => {
        const elem = [];

        elem.label = element.name;
        elem.id = element.id;

        resultList.push(elem);
      });
    }
  };

  Request.send();

  return resultList
}

let brandsList = getBrands();


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
      // console.log('Status:', this.status);
      // console.log('Headers:', this.getAllResponseHeaders());
      // console.log('Body:', this.responseText);
      RequestResponse = JSON.parse(this.responseText);

      //loop through response to save brand name to an arraylist that can populate the brand select option
      RequestResponse.map((element) => {
        const elem = [];

        elem.label = element.model;
        elem.id = element.id;

        resultList.push(elem);
      });
    }
  };

  Request.send();

  return resultList
}

let modelsList = getModels();