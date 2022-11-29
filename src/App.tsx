import React from "react";

import { Button } from "@mui/material";

export default function App() {
    const handleClick = () => {
        alert("Hello World");
    };
    return (
        <div>
            <Button variant="contained" onClick={handleClick}>
                Hello World
            </Button>
        </div>
    );
}
