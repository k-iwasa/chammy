import React from "react";
import { Button } from "@material-ui/core";
import User from "./User";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const handleClickLogin = async () => {
    await User.login("hoge", "fuga")
      .then(() => {
        history.replace("/");
      })
      .catch(() => {
        console.log("メールアドレスかパスワードが違います");
      });
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClickLogin}>
      Login
    </Button>
  );
}
