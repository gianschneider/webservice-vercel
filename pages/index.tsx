import React, {useState, useEffect} from "react";
import {AppBar, Toolbar,Button} from "@mui/material"
import FruchtListe from "./fruchtliste"
import Addiere from "./addiere"
import Transformation from "./transformation"


export default function Index(){
    const[tab, setTab] = useState("tab1");

    return (<>
    <AppBar position="static">
        <Toolbar>
            <Button color = "inherit" onClick={() => setTab("tab1")}>
                Home
            </Button>
            <Button color = "inherit" onClick={() => setTab("tab2")}>
                Früchte
            </Button>
            <Button color = "inherit" onClick={() => setTab("tab3")}>
                Addiere
            </Button>
            <Button color = "inherit" onClick={() => setTab("tab4")}>
                Koordinatentransformation
            </Button>
        </Toolbar>
    </AppBar>

    {tab === "tab1" && (<><h1>Inhalt Tab 1</h1></>)}
    {tab === "tab2" && (<FruchtListe/>)}
    {tab === "tab3" && (<Addiere/>)}
    {tab === "tab4" && (<Transformation/>)}


    </>)
}