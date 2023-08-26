import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";

import Switch from "@mui/material/Switch";
import { useState } from "react";
import Login from '@/components/Buy/Login';
import Register from '@/components/Buy/Register';
import styles from "@/styles/BuyLeft.module.css";
import BuyRight from "@/components/Buy/BuyRight";


function App() {
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (

        <div className={styles.buyContainer}>

            <div className={styles.buyContainer1}>
                <Paper elevation={3} style={{ padding: "10px", paddingBottom: "50px", background: 'black' }}>
                    <div align="center">
                        {checked ? (
                            <Chip
                                icon={<LockIcon />}
                                label="Log In"
                                // variant="outlined"
                                color="info"
                            />
                        ) : (
                            <Chip
                                icon={<FaceIcon />}
                                label="Sign Up"
                                // variant="outlined"
                                color="info"
                            />
                        )}
                        <br />

                        <Switch
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ "aria-label": "controlled" }}
                        />
                    </div>

                    {checked ? <Login /> : <Register />}
                </Paper>
            </div>
            <BuyRight />

        </div>
    );
}

export default App;