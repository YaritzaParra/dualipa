import { Route, Routes } from "react-router-dom"

import {Home} from "../Home/Home"
import {Members} from "../Members/Members"
import {Menu} from "../Shared/Menu/Menu"
import { Shop } from "../Shop/Shop"
import { Musica } from "../Musica/Musica"



export function Rutas(){
    return(
        <>
        <Menu/>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/integrantes" element={<Members />} />
      <Route path="/tienda" element={<Shop />} />
      <Route path="/musica" element={<Musica />} />
    </Routes>
    </>
    )
}