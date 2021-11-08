import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faMinus,
  faPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons"; //
import Image from "next/image";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
export default function About() {
  const [page, setPage] = React.useState(1);

  function decrement(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    if (value == 1) {
      return;
    }
    value--;
    target.value = value;
  }

  function increment(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
  }

  React.useEffect(() => {});

  function handleChangePage(event, value) {
    setPage(value);
  }

  return (
    <React.Fragment>
      <div className="bg-gray-100 p-4 pb-0 mb-8 rounded" style={{border: "1px solid #e5e5e5"}}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 380,
            marginBottom: 2,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Searching"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <div>
          <Button variant="contained" size="large" className="mr-6 mb-4">
            Thinh hanh
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            className="mr-6 mb-4"
          >
            Phổ Biến
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            className="mr-6 mb-4"
          >
            Bán Chạy
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            className="mr-6 mb-4"
          >
            Hàng Mới
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            className="mr-6 mb-4"
          >
            Giá Thấp
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            className="mr-6 mb-4"
          >
            Giá Cao
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            className="mr-6 mb-4"
          >
            Giam gia
          </Button>
        </div>
      </div>
      <section className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="w-full bg-white rounded-lg flex flex-col justify-center items-center">
            <div className="mb-2">
              <img
                className="object-center object-cover h-80 w-80"
                src="https://salt.tikicdn.com/cache/200x200/ts/product/dc/80/6a/ebbcb1da2c8ae5cc8e1c2dc98af01718.jpg"
                alt="photo"
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Dany Bailey
              </p>
              <p className="text-base text-gray-400 font-normal">
                Software Engineer
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg flex flex-col justify-center items-center">
            <div className="mb-2">
              <img
                className="object-center object-cover h-80 w-80"
                src="https://salt.tikicdn.com/cache/200x200/ts/product/67/12/0b/6ec75d0d174d0391cdf9efd969c2afe0.jpg.webp"
                alt="photo"
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Dany Bailey
              </p>
              <p className="text-base text-gray-400 font-normal">
                Software Engineer
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg flex flex-col justify-center items-center">
            <div className="mb-2">
              <img
                className="object-center object-cover h-80 w-80"
                src="https://salt.tikicdn.com/cache/200x200/ts/product/1e/00/a9/214b36138e91d0344ff28ed79684724d.jpg.webp"
                alt="photo"
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Dany Bailey
              </p>
              <p className="text-base text-gray-400 font-normal">
                Software Engineer
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg flex flex-col justify-center items-center">
            <div className="mb-2">
              <img
                className="object-center object-cover h-80 w-80"
                src="https://salt.tikicdn.com/cache/200x200/ts/product/61/f3/ff/0b3e27a391a4c44566f5730091c626cf.jpg.webp"
                alt="photo"
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Dany Bailey
              </p>
              <p className="text-base text-gray-400 font-normal">
                Software Engineer
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg flex flex-col justify-center items-center">
            <div className="mb-2">
              <img
                className="object-center object-cover h-80 w-80"
                src="https://salt.tikicdn.com/cache/200x200/ts/product/61/f3/ff/0b3e27a391a4c44566f5730091c626cf.jpg.webp"
                alt="photo"
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Dany Bailey
              </p>
              <p className="text-base text-gray-400 font-normal">
                Software Engineer
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-8 flex justify-center md:justify-end">
        <Pagination
          page={page}
          onChange={handleChangePage}
          count={5}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </React.Fragment>
  );
}
